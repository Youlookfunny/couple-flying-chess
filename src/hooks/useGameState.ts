import { useState, useEffect, useCallback } from 'react';
import { GameMode, GameState, Player, TaskEventData, Theme } from '../types';
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
  const source = incoming.length > 0 ? incoming : DEFAULT_THEMES;

  return source
    .map(t => {
      const record = isRecord(t) ? t : {};
      const tasksValue = record.tasks;
      const tasks = Array.isArray(tasksValue)
        ? tasksValue
            .map(x => (typeof x === 'string' ? x.trim() : ''))
            .filter((x): x is string => x.length > 0)
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
      s.view === 'home' || s.view === 'game' || s.view === 'card' || s.view === 'themes'
        ? s.view
        : 'home',
    gameMode: s.gameMode === 'card' || s.view === 'card' ? 'card' : 'board',
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

  return {
    type: 'card',
    initiatorPlayerId: player.id,
    executorPlayerId: player.id,
    title: '任务卡牌',
    subtitle: `任务来自「${theme.name}」`,
    icon: 'sparkles',
    color: player.role === 'male' ? 'text-[#0A84FF]' : 'text-[#FF375F]',
    task: theme.tasks[Math.floor(Math.random() * theme.tasks.length)],
    taskSourceId: theme.id
  };
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
    const trimmed = taskText.trim();
    if (!trimmed) return;

    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        if (t.tasks.includes(trimmed)) return t;
        return { ...t, tasks: [...t.tasks, trimmed] };
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

  const importThemeTasks = useCallback((themeId: string, tasks: string[], mode: 'append' | 'replace' = 'append') => {
    const cleaned = tasks
      .map(t => (typeof t === 'string' ? t.trim() : ''))
      .filter(t => t.length > 0);

    if (cleaned.length === 0) return;

    setState(prev => ({
      ...prev,
      themes: prev.themes.map(t => {
        if (t.id !== themeId) return t;
        const base = mode === 'replace' ? [] : t.tasks;
        const seen = new Set<string>();
        const merged: string[] = [];

        for (const item of [...base, ...cleaned]) {
          if (seen.has(item)) continue;
          seen.add(item);
          merged.push(item);
        }

        return { ...t, tasks: merged };
      })
    }));
  }, []);

  const startGame = useCallback(() => {
    if (!canStartWithThemes(state.players, state.themes)) return false;

    setState(prev => ({
      ...prev,
      view: prev.gameMode === 'card' ? 'card' : 'game',
      turn: Math.random() < 0.5 ? 0 : 1,
      players: prev.players.map(p => ({ ...p, step: 0 })),
      boardMap: generateBoardMap(),
      pathCoords: generateSpiralPath(),
      isRolling: false
    }));
    return true;
  }, [state.players, state.themes]);

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
      const task = theme?.tasks[Math.floor(Math.random() * theme.tasks.length)] || '';

      return {
        type: 'collision',
        initiatorPlayerId: activePlayer.id,
        executorPlayerId: opponent.id,
        title: '亲密追尾',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'handshake',
        color: 'text-yellow-400',
        task,
        taskSourceId: activePlayer.themeId || ''
      };
    }

    const tileType = state.boardMap[landingStep];

    if (tileType === 'lucky') {
      const theme = state.themes.find(t => t.id === activePlayer.themeId);
      const task = theme?.tasks[Math.floor(Math.random() * theme.tasks.length)] || '';

      return {
        type: 'lucky',
        initiatorPlayerId: activePlayer.id,
        executorPlayerId: opponent.id,
        title: '幸运时刻',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'favorite',
        color: 'text-[#FF375F]',
        task,
        taskSourceId: activePlayer.themeId || ''
      };
    }

    if (tileType === 'trap') {
      const theme = state.themes.find(t => t.id === opponent.themeId);
      const task = theme?.tasks[Math.floor(Math.random() * theme.tasks.length)] || '';

      return {
        type: 'trap',
        initiatorPlayerId: activePlayer.id,
        executorPlayerId: activePlayer.id,
        title: '意外陷阱',
        subtitle: `任务来自「${theme?.name || ''}」`,
        icon: 'lock',
        color: 'text-[#BF5AF2]',
        task,
        taskSourceId: opponent.themeId || ''
      };
    }

    return null;
  }, [state.players, state.turn, state.themes, state.boardMap]);

  const resolveTask = useCallback((task: TaskEventData, outcome: 'accept' | 'reject') => {
    setState(prev => {
      let nextPlayers = prev.players;

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
