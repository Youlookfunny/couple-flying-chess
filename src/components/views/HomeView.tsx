import { useEffect, useRef, useState } from 'react';
import { GameMode, Player, Theme } from '../../types';
import { Bomb, ChevronLeft, ChevronRight, Dice5, Dices, ImageIcon, Layers3, User, UserRound } from 'lucide-react';

interface HomeViewProps {
  players: Player[];
  themes: Theme[];
  gameMode: GameMode;
  onSelectMode: (mode: GameMode) => void;
  onSelectTheme: (playerId: number) => void;
  onStartGame: () => void;
}

const gameModes: Array<{
  id: GameMode;
  title: string;
  desc: string;
  icon: typeof Dice5;
}> = [
  {
    id: 'board',
    title: '飞行棋模式',
    desc: '投骰子走棋，落格触发任务',
    icon: Dice5
  },
  {
    id: 'card',
    title: '任务卡牌模式',
    desc: '轮流抽取任务，不用投骰子',
    icon: Layers3
  },
  {
    id: 'mine',
    title: '扫雷模式',
    desc: '点击方格，触发隐藏事件',
    icon: Bomb
  },
  {
    id: 'dice',
    title: '亲密骰子模式',
    desc: '上下骰子组合动作与部位',
    icon: Dices
  },
  {
    id: 'pose',
    title: '姿势模式',
    desc: '轮流抽取姿势图片',
    icon: ImageIcon
  }
];

const MODE_SCROLL_HINT_THRESHOLD = 24;

export function HomeView({
  players,
  themes,
  gameMode,
  onSelectMode,
  onSelectTheme,
  onStartGame
}: HomeViewProps) {
  const shouldShowThemeSelectors = gameMode !== 'pose';
  const themeHint =
    gameMode === 'dice'
      ? '选择上骰子动作主题和下骰子部位主题'
      : gameMode === 'card'
      ? '选择游戏模式和双方抽卡题库'
      : gameMode === 'mine'
        ? '选择游戏模式和双方扫雷主题题库'
        : '选择游戏模式和双方任务主题包';
  const modeScrollerRef = useRef<HTMLDivElement>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const hasDraggedModeRef = useRef(false);
  const [isDraggingMode, setIsDraggingMode] = useState(false);
  const [modeScrollHint, setModeScrollHint] = useState({ left: false, right: false });

  const scrollModeCardIntoView = (modeId: GameMode) => {
    const scroller = modeScrollerRef.current;
    const card = scroller?.querySelector<HTMLElement>(`[data-mode-id="${modeId}"]`);

    card?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest'
    });
  };

  const handleModeArrowClick = (direction: -1 | 1) => {
    const currentModeIndex = gameModes.findIndex(mode => mode.id === gameMode);
    const nextMode = gameModes[currentModeIndex + direction];

    if (nextMode) {
      onSelectMode(nextMode.id);
      scrollModeCardIntoView(nextMode.id);
      return;
    }

    const scroller = modeScrollerRef.current;
    scroller?.scrollBy({
      left: direction * Math.max(scroller.clientWidth * 0.75, 120),
      behavior: 'smooth'
    });
  };

  const handleModeMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const scroller = modeScrollerRef.current;
    if (!scroller) return;

    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    hasDraggedModeRef.current = false;
    setIsDraggingMode(true);
  };

  const handleModeMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingMode) return;
    const scroller = modeScrollerRef.current;
    if (!scroller) return;

    const deltaX = event.clientX - dragStartXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasDraggedModeRef.current = true;
      event.preventDefault();
    }
    scroller.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const handleModeMouseUp = () => {
    if (!isDraggingMode) return;
    setIsDraggingMode(false);
  };

  useEffect(() => {
    const scroller = modeScrollerRef.current;
    if (!scroller) return;

    const handleWheel = (event: WheelEvent) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (delta === 0) return;

      event.preventDefault();
      event.stopPropagation();
      scroller.scrollLeft += delta;
    };

    scroller.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      scroller.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const scroller = modeScrollerRef.current;
    if (!scroller) return;

    const updateModeScrollHint = () => {
      setModeScrollHint({
        left: scroller.scrollLeft > MODE_SCROLL_HINT_THRESHOLD,
        right: scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2
      });
    };

    updateModeScrollHint();
    scroller.addEventListener('scroll', updateModeScrollHint);
    window.addEventListener('resize', updateModeScrollHint);

    return () => {
      scroller.removeEventListener('scroll', updateModeScrollHint);
      window.removeEventListener('resize', updateModeScrollHint);
    };
  }, []);

  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar space-y-6 pt-2 pb-4">
        <div className="text-center mb-4">
          <h2 className="text-xl text-gray-300 font-medium">配置游戏角色</h2>
          <p className="text-sm text-gray-500 mt-2">
            {shouldShowThemeSelectors ? themeHint : '选择游戏模式即可开始'}
          </p>
        </div>

        <div className="relative">
          <div
            ref={modeScrollerRef}
            className={`-mx-1 overflow-x-auto no-scrollbar px-1 pb-1 snap-x snap-mandatory select-none ${
              isDraggingMode ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleModeMouseDown}
            onMouseMove={handleModeMouseMove}
            onMouseUp={handleModeMouseUp}
            onMouseLeave={handleModeMouseUp}
          >
            <div className="flex gap-3">
              {gameModes.map(mode => {
                const Icon = mode.icon;
                const isActive = mode.id === gameMode;

                return (
                  <button
                    key={mode.id}
                    data-mode-id={mode.id}
                    type="button"
                    className={`min-h-[108px] basis-[calc((100%_-_0.75rem)/2)] min-w-[168px] shrink-0 snap-start rounded-[20px] border p-4 text-left transition-all ios-btn ${
                      isActive
                        ? 'bg-white text-black border-white shadow-lg'
                        : 'bg-[#1C1C1E] text-white border-white/5'
                    }`}
                    onClick={() => {
                      if (hasDraggedModeRef.current) {
                        hasDraggedModeRef.current = false;
                        return;
                      }
                      onSelectMode(mode.id);
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                        isActive ? 'bg-black text-white' : 'bg-white/5 text-gray-300'
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="text-sm font-bold leading-tight">{mode.title}</div>
                    <div className={`text-xs leading-relaxed mt-1 ${isActive ? 'text-black/60' : 'text-gray-500'}`}>
                      {mode.desc}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            aria-label="选择上一个模式"
            tabIndex={modeScrollHint.left ? 0 : -1}
            className={`absolute left-[-2px] top-0 bottom-1 w-16 flex items-center justify-start pl-1 bg-gradient-to-r from-black via-black/80 to-transparent transition-opacity duration-300 ${
              modeScrollHint.left ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onPointerDown={event => event.stopPropagation()}
            onClick={() => handleModeArrowClick(-1)}
          >
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 shadow-lg ios-btn">
              <ChevronLeft size={18} />
            </span>
          </button>
          <button
            type="button"
            aria-label="选择下一个模式"
            tabIndex={modeScrollHint.right ? 0 : -1}
            className={`absolute right-[-2px] top-0 bottom-1 w-16 flex items-center justify-end pr-1 bg-gradient-to-l from-black via-black/80 to-transparent transition-opacity duration-300 ${
              modeScrollHint.right ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onPointerDown={event => event.stopPropagation()}
            onClick={() => handleModeArrowClick(1)}
          >
            <span className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 shadow-lg ios-btn">
              <ChevronRight size={18} />
            </span>
          </button>
        </div>

        {shouldShowThemeSelectors && (
        <div className="space-y-4">
          {players.map((player, idx) => {
            const theme = themes.find(t => t.id === player.themeId);
            const isMale = idx === 0;
            const selectorName =
              gameMode === 'dice'
                ? idx === 0
                  ? '上骰子'
                  : '下骰子'
                : `${player.name} (Player ${player.id + 1})`;
            const selectedThemeLabel =
              theme?.name ||
              (gameMode === 'dice'
                ? idx === 0
                  ? '未选择动作主题'
                  : '未选择部位主题'
                : '未选择主题');

            return (
              <div
                key={player.id}
                className="ios-card p-5 flex items-center justify-between ios-btn cursor-pointer group border border-white/5"
                onClick={() => onSelectTheme(player.id)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: player.color,
                      boxShadow: `0 10px 15px -3px ${player.color}30`
                    }}
                  >
                    {isMale ? (
                      <User className="text-white" size={24} />
                    ) : (
                      <UserRound className="text-white" size={24} />
                    )}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">
                      {selectorName}
                    </div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      {selectedThemeLabel}
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-gray-600" size={20} />
              </div>
            );
          })}
        </div>
        )}
      </div>

      <div className="relative z-20 shrink-0 pt-3 pb-1 bg-gradient-to-t from-black via-black/95 to-black/0">
        <button
          type="button"
          className="w-full h-14 bg-white rounded-full text-black font-semibold text-lg shadow-lg ios-btn flex items-center justify-center gap-2"
          onClick={onStartGame}
        >
          <span>
            {gameMode === 'card'
              ? '开始抽卡'
              : gameMode === 'pose'
                ? '开始抽姿势'
                : gameMode === 'dice'
                  ? '开始骰子'
                  : gameMode === 'mine'
                    ? '开始扫雷'
                    : '开始游戏'}
          </span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
