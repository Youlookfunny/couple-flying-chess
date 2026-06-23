import {
  ArrowLeft,
  Bomb,
  CheckCircle2,
  Circle,
  Flame,
  MessageCircleQuestion,
  Sparkles,
  User,
  UserRound
} from 'lucide-react';
import { MineRevealResult, MineTile, Player, TaskEventData, Theme } from '../../types';

interface MineModeViewProps {
  players: Player[];
  themes: Theme[];
  mineBoard: MineTile[];
  currentTurn: number;
  onRevealTile: (index: number) => MineRevealResult | null;
  onTaskTrigger: (data: TaskEventData) => void;
  onBombTrigger: () => void;
  onEndTurn: () => void;
  onBack: () => void;
}

const mineTileMeta = {
  bomb: {
    label: '炸弹',
    icon: Bomb,
    className: 'bg-[#3A1F1F] text-[#FF453A] border-[#FF453A]/30'
  },
  truth: {
    label: '真心话',
    icon: MessageCircleQuestion,
    className: 'bg-[#102B3A] text-[#64D2FF] border-[#64D2FF]/30'
  },
  dare: {
    label: '大冒险',
    icon: Flame,
    className: 'bg-[#35230A] text-[#FF9F0A] border-[#FF9F0A]/30'
  },
  blank: {
    label: '空白',
    icon: CheckCircle2,
    className: 'bg-[#1C1C1E] text-gray-500 border-white/5'
  },
  theme: {
    label: '主题',
    icon: Sparkles,
    className: 'bg-[#221634] text-[#BF5AF2] border-[#BF5AF2]/30'
  }
};

export function MineModeView({
  players,
  themes,
  mineBoard,
  currentTurn,
  onRevealTile,
  onTaskTrigger,
  onBombTrigger,
  onEndTurn,
  onBack
}: MineModeViewProps) {
  const activePlayer = players[currentTurn];
  const activeTheme = themes.find(t => t.id === activePlayer.themeId);
  const revealedCount = mineBoard.filter(tile => tile.revealed).length;
  const remainingCount = mineBoard.length - revealedCount;

  const handleReveal = (index: number) => {
    const result = onRevealTile(index);
    if (!result) return;

    if (navigator.vibrate) {
      navigator.vibrate(result.type === 'bomb' ? [30, 40, 30] : 18);
    }

    if (result.type === 'bomb') {
      onBombTrigger();
      return;
    }

    if (result.type === 'task') {
      onTaskTrigger(result.task);
      return;
    }

    onEndTurn();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-60" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-[430px] mx-auto w-full">
        <header className="pt-12 pb-2 px-4 flex items-center gap-4 shrink-0">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ios-btn border border-white/5"
            aria-label="返回首页"
          >
            <ArrowLeft className="text-white" size={20} />
          </button>
          <div className="flex-1 flex justify-center">
            <div className="p-1.5 bg-[#1C1C1E] rounded-full flex items-center gap-2 border border-white/10">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  currentTurn === 0
                    ? 'bg-[#0A84FF] text-white shadow-lg shadow-blue-900/50'
                    : 'text-[#0A84FF] opacity-60'
                }`}
              >
                <User size={14} />
                <span className="text-xs font-bold">男方</span>
              </div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2">
                扫雷
              </div>
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  currentTurn === 1
                    ? 'bg-[#FF375F] text-white shadow-lg shadow-pink-900/50'
                    : 'text-[#FF375F] opacity-60'
                }`}
              >
                <span className="text-xs font-bold">女方</span>
                <UserRound size={14} />
              </div>
            </div>
          </div>
          <div className="w-10" />
        </header>

        <div className="px-4 pt-3 pb-2 shrink-0">
          <div className="ios-card border border-white/5 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div
                  className={`text-sm font-medium ${
                    currentTurn === 0 ? 'text-[#0A84FF]' : 'text-[#FF375F]'
                  }`}
                >
                  {activePlayer.name}回合
                </div>
                <div className="text-xs text-gray-500 mt-1 truncate">
                  {activeTheme?.name || '未选择主题'}
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-bold text-white">{remainingCount}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">剩余方格</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 px-4 py-3 flex items-center">
          <div className="w-full aspect-square grid grid-cols-6 gap-2">
            {mineBoard.map((tile, index) => {
              const meta = mineTileMeta[tile.type];
              const Icon = tile.revealed ? meta.icon : Circle;

              return (
                <button
                  key={index}
                  type="button"
                  disabled={tile.revealed}
                  onClick={() => handleReveal(index)}
                  className={`relative aspect-square rounded-[16px] border flex flex-col items-center justify-center transition-all ios-btn ${
                    tile.revealed
                      ? meta.className
                      : 'bg-[#1C1C1E] text-gray-500 border-white/5 shadow-lg shadow-black/20'
                  }`}
                  aria-label={tile.revealed ? meta.label : `翻开第${index + 1}格`}
                >
                  <Icon size={tile.revealed ? 24 : 18} />
                  <span
                    className={`mt-1 text-[10px] font-bold leading-none ${
                      tile.revealed ? 'opacity-90' : 'opacity-60'
                    }`}
                  >
                    {tile.revealed ? meta.label : index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-4 mb-4 ios-glass rounded-[28px] px-5 py-4 border border-white/10 shadow-2xl shrink-0">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span>已翻开 {revealedCount}</span>
            <span>炸弹由另一方指定任务类型</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {(['truth', 'dare', 'theme', 'blank'] as const).map(type => {
              const meta = mineTileMeta[type];
              const Icon = meta.icon;
              const count = mineBoard.filter(tile => tile.revealed && tile.type === type).length;

              return (
                <div key={type} className="rounded-[14px] bg-white/[0.04] border border-white/5 px-2 py-2 text-center">
                  <Icon className="mx-auto mb-1 text-gray-400" size={16} />
                  <div className="text-[10px] text-gray-500 leading-tight">{meta.label}</div>
                  <div className="text-xs font-bold text-white mt-1">{count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
