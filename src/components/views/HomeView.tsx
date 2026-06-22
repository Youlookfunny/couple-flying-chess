import { GameMode, Player, Theme } from '../../types';
import { ChevronRight, Dice5, Layers3, User, UserRound } from 'lucide-react';

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
  }
];

export function HomeView({
  players,
  themes,
  gameMode,
  onSelectMode,
  onSelectTheme,
  onStartGame
}: HomeViewProps) {
  return (
    <div className="h-full min-h-0 flex flex-col">
      <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar space-y-6 pt-2 pb-4">
        <div className="text-center mb-4">
          <h2 className="text-xl text-gray-300 font-medium">配置游戏角色</h2>
          <p className="text-sm text-gray-500 mt-2">选择游戏模式和双方任务主题包</p>
        </div>

        <div className="-mx-1 overflow-x-auto no-scrollbar px-1 pb-1 snap-x snap-mandatory">
          <div className="flex gap-3">
            {gameModes.map(mode => {
              const Icon = mode.icon;
              const isActive = mode.id === gameMode;

              return (
                <button
                  key={mode.id}
                  type="button"
                  className={`min-h-[108px] basis-[calc((100%_-_0.75rem)/2)] min-w-[168px] shrink-0 snap-start rounded-[20px] border p-4 text-left transition-all ios-btn ${
                    isActive
                      ? 'bg-white text-black border-white shadow-lg'
                      : 'bg-[#1C1C1E] text-white border-white/5'
                  }`}
                  onClick={() => onSelectMode(mode.id)}
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

        <div className="space-y-4">
          {players.map((player, idx) => {
            const theme = themes.find(t => t.id === player.themeId);
            const isMale = idx === 0;

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
                      {player.name} (Player {player.id + 1})
                    </div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      {theme?.name || '未选择主题'}
                    </div>
                  </div>
                </div>
                <ChevronRight className="text-gray-600" size={20} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-20 shrink-0 pt-3 pb-1 bg-gradient-to-t from-black via-black/95 to-black/0">
        <button
          type="button"
          className="w-full h-14 bg-white rounded-full text-black font-semibold text-lg shadow-lg ios-btn flex items-center justify-center gap-2"
          onClick={onStartGame}
        >
          <span>{gameMode === 'card' ? '开始抽卡' : '开始游戏'}</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
