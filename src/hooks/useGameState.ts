import { useState, useEffect, useCallback } from 'react';
import { GameMode, GameState, Player, TaskCard, TaskEventData, TaskExecutor, Theme } from '../types';
import { loadFromStorage, saveToStorage } from '../utils/localStorage';
import { generateSpiralPath, generateBoardMap, calculateNewPosition } from '../utils/gameLogic';
import { DEFAULT_THEMES } from '../data/defaultThemes';

const STORAGE_KEY = 'couples-ludo-game-state';

const initialPlayers: Player[] = [
  { id: 0, name: '男方', color: '#0A84FF', role: 'male', step: 0, themeId: null },
  { id: 1, name: '女方', color: '#FF375F', role: 'female', step: 0, themeId: null }
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function isThemeAllowedForRole(theme: Theme, role: Player['role']) {
  return theme.audience === 'common' || theme.audience === role;
}

function normalizeExecutor(value: unknown): TaskExecutor {
  if (value === 1 || value === '1') return 'female';
  if (value === 2 || value === '2') return 'male';
  if (value === 3 || value === '3') return 'both';
  return value === 'female' || value === 'male' || value === 'both' ? value : 'both';
}

function clampMoveDelta(value: unknown) {
  if (typeof value === 'string' && /^[-+]\d+$/.test(value.trim())) {
    return clampMoveDelta(Number(value));
  }
  if (typeof value !== 'number' || !Number.isFinite(value)) return 0;
  return Math.max(-12, Math.min(12, Math.trunc(value)));
}

function parseTaskText(input: string): TaskCard | null {
  const parts = input.split(',').map(part => part.trim());
  const maybeExecutor = parts.length >= 2 ? parts[parts.length - 2] : '';
  const maybeMove = parts.length >= 3 ? parts[parts.length - 1] : '';
  const hasExecutor = maybeExecutor === '1' || maybeExecutor === '2' || maybeExecutor === '3';
  const hasMove = /^[-+]\d+$/.test(maybeMove);

  if (!hasExecutor) {
    const text = input.trim();
    return text ? { text, executor: 'both', moveDelta: 0 } : null;
  }

  const metadataCount = hasMove ? 2 : 1;
  const text = parts.slice(0, parts.length - metadataCount).join(',').trim();
  if (!text) return null;

  return {
    text,
    executor: normalizeExecutor(maybeExecutor),
    moveDelta: hasMove ? clampMoveDelta(maybeMove) : 0
  };
}

function normalizeTask(input: unknown): TaskCard | null {
  if (typeof input === 'string') {
    return parseTaskText(input);
  }

  if (Array.isArray(input)) {
    const [textValue, executorValue, moveValue] = input;
    const text = typeof textValue === 'string' ? textValue.trim() : '';
    if (!text) return null;

    return {
      text,
      executor: normalizeExecutor(executorValue),
      moveDelta: clampMoveDelta(moveValue)
    };
  }

  if (!isRecord(input)) return null;

  const textValue = input.text ?? input.task;
  const text = typeof textValue === 'string' ? textValue.trim() : '';
  if (!text) return null;

  return {
    text,
    executor: normalizeExecutor(input.executor),
    moveDelta: clampMoveDelta(input.moveDelta)
  };
}

function getTaskKey(task: TaskCard) {
  return `${task.text}__${task.executor}__${task.moveDelta}`;
}

function chooseRandomTask(theme: Theme | undefined): TaskCard | null {
  if (!theme || theme.tasks.length === 0) return null;
  return theme.tasks[Math.floor(Math.random() * theme.tasks.length)];
}

function getExecutorPlayerId(task: TaskCard, fallbackPlayerId: number) {
  if (task.executor === 'female') return 1;
  if (task.executor === 'male') return 0;
  return fallbackPlayerId;
}

function formatMoveDelta(moveDelta: number) {
  if (moveDelta === 0) return '';
  return moveDelta > 0 ? `，完成后前进${moveDelta}格` : `，完成后后退${Math.abs(moveDelta)}格`;
}

function buildTaskEvent(input: {
  type: TaskEventData['type'];
  initiatorPlayerId: number;
  fallbackExecutorPlayerId: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  task: TaskCard;
  taskSourceId: string;
}): TaskEventData {
  return {
    type: input.type,
    initiatorPlayerId: input.initiatorPlayerId,
    executorPlayerId: getExecutorPlayerId(input.task, input.fallbackExecutorPlayerId),
    title: input.title,
    subtitle: `${input.subtitle}${formatMoveDelta(input.task.moveDelta)}`,
    icon: input.icon,
    color: input.color,
    task: input.task.text,
    taskSourceId: input.taskSourceId,
    moveDelta: input.task.moveDelta
  };
}

function applyMoveDelta(step: number, moveDelta: number) {
  if (moveDelta > 0) return calculateNewPosition(step, moveDelta);
  if (moveDelta < 0) return Math.max(0, step + moveDelta);
  return step;
}

function normalizePlayers(input: unknown): Player[] {
  const incoming = Array.isArray(input) ? input : [];

  return initialPlayers.map(base => {
    const found = incoming.find(
      p => isRecord(p) && typeof p.id === 'number' && p.id === base.id
    );
    const record = isRecord(found) ? found : {};
    const roleValue = record.role;
    const themeIdValue = record.themeId;

    return {
      id: base.id,
      name: typeof record.name === 'string' ? record.name : base.name,
      color: typeof record.color === 'string' ? record.color : base.color,
      role: roleValue === 'male' || roleValue === 'female' ? roleValue : base.role,
      step: typeof record.step === 'number' ? record.step : 0,
      themeId: typeof themeIdValue === 'string' || themeIdValue === null ? themeIdValue : null
    };
  });
}

function normalizeThemes(input: unknown): Theme[] {
  const incoming = Array.isArray(input) ? input : [];
  const source = incoming.length > 0 ? [...incoming, ...DEFAULT_THEMES] : DEFAULT_THEMES;

  return source
    .map(t => {
      const record = isRecord(t) ? t : {};
      const tasksValue = record.tasks;
      const tasks = Array.isArray(tasksValue)
        ? tasksValue
            .map(normalizeTask)
            .filter((x): x is TaskCard => !!x)
        : [];

      const audienceValue = record.audience;

      return {
        id: typeof record.id === 'string' ? record.id : `theme_${Date.now()}`,
        name: typeof record.name === 'string' ? record.name : '未命名主题',
        desc: typeof record.desc === 'string' ? record.desc : '',
        audience:
          audienceValue === 'common' || audienceValue === 'male' || audienceValue === 'female'
            ? audienceValue
            : 'common',
        tasks
      } satisfies Theme;
    })
    .reduce<Theme[]>((acc, theme) => {
      if (acc.some(t => t.id === theme.id)) return acc;
      acc.push(theme);
      return acc;
    }, []);
}

function normalizeGameState(saved: unknown): GameState | null {
  if (!isRecord(saved)) return null;
  const s = saved;

  const themes = normalizeThemes(s.themes);
  const players = normalizePlayers(s.players).map(p => {
    if (p.themeId === null) return p;
    const theme = themes.find(t => t.id === p.themeId);
    if (!theme) return { ...p, themeId: null };
    if (!isThemeAllowedForRole(theme, p.role)) return { ...p, themeId: null };
    return p;
  });

  return {
    view:
      s.view === 'home' || s.view === 'game' || s.view === 'card' || s.view === 'pose' || s.view === 'themes'
        ? s.view
        : 'home',
    gameMode:
      s.gameMode === 'pose' || s.view === 'pose'
        ? 'pose'
        : s.gameMode === 'card' || s.view === 'card'
          ? 'card'
          : 'board',
    turn: s.turn === 0 || s.turn === 1 ? s.turn : 0,
    players,
    themes,
    boardMap: Array.isArray(s.boardMap) ? s.boardMap : generateBoardMap(),
    pathCoords: Array.isArray(s.pathCoords) ? s.pathCoords : generateSpiralPath(),
    isRolling: !!s.isRolling
  };
}

function createThemeId(existingIds: Set<string>) {
  const base =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? (crypto as Crypto).randomUUID()
      : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

  let id = `user_${base}`;
  while (existingIds.has(id)) {
    id = `user_${base}_${Math.random().toString(36).slice(2, 6)}`;
  }
  return id;
}

function canStartWithThemes(players: Player[], themes: Theme[]) {
  for (const player of players) {
    if (!player.themeId) return false;
    const theme = themes.find(t => t.id === player.themeId);
    if (!theme) return false;
    if (!isThemeAllowedForRole(theme, player.role)) return false;
    if (theme.tasks.length === 0) return false;
  }
  return true;
}

function createRandomTaskEvent(
  players: Player[],
  themes: Theme[],
  playerId: number
): TaskEventData | null {
  const player = players.find(p => p.id === playerId);
  if (!player?.themeId) return null;

  const theme = themes.find(t => t.id === player.themeId);
  if (!theme || theme.tasks.length === 0) return null;
  const task = chooseRandomTask(theme);

  if (!task) return null;

  return buildTaskEvent({
    type: 'card',
    initiatorPlayerId: player.id,
    fallbackExecutorPlayerId: player.id,
    title: '任务卡牌',
    subtitle: `任务来自「${theme.name}」`,
    icon: 'sparkles',
    color: player.role === 'male' ? 'text-[#0A84FF]' : 'text-[#FF375F]',
    task,
    taskSourceId: theme.id
  });
}

export function useGameState() {
  const [state, setState] = useState<GameState>(() => {
    const saved = loadFromStorage<GameState | null>(STORAGE_KEY, null);
    const normalized = normalizeGameState(saved);

    if (normalized) {
      return normalized;
    }

    return {
      view: 'home',
      gameMode: 'board',
      turn: 0,
      players: initialPlayers,
      themes: DEFAULT_THEMES,
      boardMap: generateBoardMap(),
      pathCoords: generateSpiralPath(),
      isRolling: false
    };
  });

  useEffect(() => {
    saveToStorage(STORAGE_KEY, state);
  }, [state]);

  const switchView = useCallback((view: GameState['view']) => {
    setState(prev => ({ ...prev, view }));
  }, []);

  const selectGameMode = useCallback((mode: GameMode) => {
    setState(prev => ({ ...prev, gameMode: mode }));
  }, []);

  const selectTheme = useCallback((playerId: number, themeId: string) => {
    setState(prev => ({
      ...prev,
      players: prev.players.map(p =>
        p.id === playerId ? { ...p, themeId } : p
      )
    }));
  }, []);

  const createTheme = useCallback((input: { name: string; desc?: string; audience: Theme['audience'] }) => {
    const name = input.name.trim();
    const desc = (input.desc || '').trim();
    if (!name) return null;

    let createdId: string | null = null;
    setState(prev => {
      const existingIds = new Set(prev.themes.map(t => t.id));
      const id = createThemeId(existingIds);
      createdId = id;

      return {
        ...prev,
        themes: [
          ...prev.themes,
          {
            id,
            name,
            desc,
            audience: input.audience,
            tasks: []
          }
        ]
      };
    });

    return createdId;
  }, []);

  const updateThemeMeta = useCallback((themeId: string, patch: Partial<Pick<Theme, 'name' | 'desc' | 'audience'>>) => {
    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        const nextName = typeof patch.name === 'string' ? patch.name.trim() : t.name;
        const nextDesc = typeof patch.desc === 'string' ? patch.desc.trim() : t.desc;
        const nextAudience = patch.audience || t.audience;

        return {
          ...t,
          name: nextName || t.name,
          desc: nextDesc,
          audience: nextAudience
        };
      })
    }));
  }, []);

  const addThemeTask = useCallback((themeId: string, taskText: string) => {
    const task = normalizeTask(taskText);
    if (!task) return;

    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        if (t.tasks.some(item => getTaskKey(item) === getTaskKey(task))) return t;
        return { ...t, tasks: [...t.tasks, task] };
      })
    }));
  }, []);

  const updateThemeTask = useCallback((themeId: string, index: number, patch: Partial<TaskCard>) => {
    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        if (index < 0 || index >= t.tasks.length) return t;

        return {
          ...t,
          tasks: t.tasks.map((task, taskIndex) => {
            if (taskIndex !== index) return task;

            return {
              ...task,
              text: typeof patch.text === 'string' ? patch.text.trim() || task.text : task.text,
              executor: patch.executor ? normalizeExecutor(patch.executor) : task.executor,
              moveDelta:
                typeof patch.moveDelta === 'number'
                  ? clampMoveDelta(patch.moveDelta)
                  : task.moveDelta
            };
          })
        };
      })
    }));
  }, []);

  const removeThemeTask = useCallback((themeId: string, index: number) => {
    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        if (index < 0 || index >= t.tasks.length) return t;
        return { ...t, tasks: t.tasks.filter((_, i) => i !== index) };
      })
    }));
  }, []);

  const importThemeTasks = useCallback((themeId: string, tasks: unknown[], mode: 'append' | 'replace' = 'append') => {
    const cleaned = tasks
      .map(normalizeTask)
      .filter((t): t is TaskCard => !!t);

    if (cleaned.length === 0) return;

    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        const base = mode === 'replace' ? [] : t.tasks;
        const seen = new Set<string>();
        const merged: TaskCard[] = [];

        for (const item of [...base, ...cleaned]) {
          const key = getTaskKey(item);
          if (seen.has(key)) continue;
          seen.add(key);
          merged.push(item);
        }

        return { ...t, tasks: merged };
      })
    }));
  }, []);

  const startGame = useCallback(() => {
    if (state.gameMode !== 'pose' && !canStartWithThemes(state.players, state.themes)) return false;

    setState(prev => ({
      ...prev,
      view: prev.gameMode === 'pose' ? 'pose' : prev.gameMode === 'card' ? 'card' : 'game',
      turn: Math.random() < 0.5 ? 0 : 1,
      players: prev.players.map(p => ({ ...p, step: 0 })),
      boardMap: generateBoardMap(),
      pathCoords: generateSpiralPath(),
      isRolling: false
    }));
    return true;
  }, [state.gameMode, state.players, state.themes]);

  const drawCardTask = useCallback((): TaskEventData | null => {
    return createRandomTaskEvent(state.players, state.themes, state.turn);
  }, [state.players, state.themes, state.turn]);

  const movePlayer = useCallback((steps: number) => {
    setState(prev => {
      const activePlayer = prev.players[prev.turn];
      const newStep = calculateNewPosition(activePlayer.step, steps);

      return {
        ...prev,
        players: prev.players.map(p =>
          p.id === activePlayer.id ? { ...p, step: newStep } : p
        )
      };
    });
  }, []);

  const endTurn = useCallback(() => {
    setState(prev => ({
      ...prev,
      turn: prev.turn === 0 ? 1 : 0,
      isRolling: false
    }));
  }, []);

  const setIsRolling = useCallback((rolling: boolean) => {
    setState(prev => ({ ...prev, isRolling: rolling }));
  }, []);

  const checkTile = useCallback((landingStep: number): TaskEventData | 'win' | null => {
    const activePlayer = state.players[state.turn];
    const opponent = state.players[state.turn === 0 ? 1 : 0];

    if (landingStep === 48) {
      return 'win';
    }

    if (landingStep !== 0 && landingStep === opponent.step) {
      const theme = state.themes.find(t => t.id === activePlayer.themeId);
      const task = chooseRandomTask(theme);
      if (!task) return null;

      return buildTaskEvent({
        type: 'collision',
        initiatorPlayerId: activePlayer.id,
        fallbackExecutorPlayerId: opponent.id,
        title: '亲密追尾',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'handshake',
        color: 'text-yellow-400',
        task,
        taskSourceId: activePlayer.themeId || ''
      });
    }

    const tileType = state.boardMap[landingStep];

    if (tileType === 'lucky') {
      const theme = state.themes.find(t => t.id === activePlayer.themeId);
      const task = chooseRandomTask(theme);
      if (!task) return null;

      return buildTaskEvent({
        type: 'lucky',
        initiatorPlayerId: activePlayer.id,
        fallbackExecutorPlayerId: opponent.id,
        title: '幸运时刻',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'favorite',
        color: 'text-[#FF375F]',
        task,
        taskSourceId: activePlayer.themeId || ''
      });
    }

    if (tileType === 'trap') {
      const theme = state.themes.find(t => t.id === opponent.themeId);
      const task = chooseRandomTask(theme);
      if (!task) return null;

      return buildTaskEvent({
        type: 'trap',
        initiatorPlayerId: activePlayer.id,
        fallbackExecutorPlayerId: activePlayer.id,
        title: '意外陷阱',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'lock',
        color: 'text-[#BF5AF2]',
        task,
        taskSourceId: opponent.themeId || ''
      });
    }

    return null;
  }, [state.players, state.turn, state.themes, state.boardMap]);

  const resolveTask = useCallback((task: TaskEventData, outcome: 'accept' | 'reject') => {
    setState(prev => {
      let nextPlayers = prev.players;

      if (outcome === 'accept' && task.moveDelta !== 0) {
        nextPlayers = prev.players.map(p =>
          p.id === task.executorPlayerId
            ? { ...p, step: applyMoveDelta(p.step, task.moveDelta) }
            : p
        );
      }

      if (outcome === 'reject' && task.type !== 'card') {
        const backSteps = Math.floor(Math.random() * 3) + 1;
        nextPlayers = prev.players.map(p => {
          if (p.id !== task.executorPlayerId) return p;

          if (task.type === 'collision') {
            return { ...p, step: 0 };
          }

          return { ...p, step: Math.max(0, p.step - backSteps) };
        });
      }

      return {
        ...prev,
        players: nextPlayers,
        turn: prev.turn === 0 ? 1 : 0,
        isRolling: false
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setState(prev => ({
      ...prev,
      view: 'home',
      gameMode: 'board',
      turn: 0,
      players: initialPlayers.map(p => ({ ...p, themeId: null, step: 0 })),
      boardMap: generateBoardMap(),
      pathCoords: generateSpiralPath(),
      isRolling: false
    }));
  }, []);

  return {
    state,
    switchView,
    selectGameMode,
    selectTheme,
    createTheme,
    updateThemeMeta,
    addThemeTask,
    updateThemeTask,
    removeThemeTask,
    importThemeTasks,
    startGame,
    drawCardTask,
    movePlayer,
    endTurn,
    setIsRolling,
    checkTile,
    resolveTask,
    resetGame
  };
}
