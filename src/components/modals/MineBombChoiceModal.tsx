import { Bomb, Flame, MessageCircleQuestion, Sparkles } from 'lucide-react';
import { MineTaskChoice, Player } from '../../types';

interface MineBombChoiceModalProps {
  isOpen: boolean;
  activePlayer: Player | null;
  selectorPlayer: Player | null;
  onChoose: (choice: MineTaskChoice) => void;
}

const choiceItems: Array<{
  id: MineTaskChoice;
  title: string;
  desc: string;
  icon: typeof MessageCircleQuestion;
  className: string;
}> = [
  {
    id: 'truth',
    title: '真心话',
    desc: '回答一张真心话',
    icon: MessageCircleQuestion,
    className: 'text-[#64D2FF] bg-[#102B3A] border-[#64D2FF]/25'
  },
  {
    id: 'dare',
    title: '大冒险',
    desc: '完成一张大冒险',
    icon: Flame,
    className: 'text-[#FF9F0A] bg-[#35230A] border-[#FF9F0A]/25'
  },
  {
    id: 'theme',
    title: '主题任务',
    desc: '抽取当前主题任务',
    icon: Sparkles,
    className: 'text-[#BF5AF2] bg-[#221634] border-[#BF5AF2]/25'
  }
];

export function MineBombChoiceModal({
  isOpen,
  activePlayer,
  selectorPlayer,
  onChoose
}: MineBombChoiceModalProps) {
  if (!isOpen || !activePlayer || !selectorPlayer) return null;

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative w-full max-w-sm rounded-[28px] bg-[#1C1C1E] border border-white/10 shadow-2xl p-5 task-card-pop">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-full bg-[#3A1F1F] text-[#FF453A] flex items-center justify-center border border-[#FF453A]/25">
            <Bomb size={28} />
          </div>
          <div className="min-w-0">
            <div className="text-sm text-gray-400">{selectorPlayer.name}指定</div>
            <div className="text-xl font-bold text-white">{activePlayer.name}踩到炸弹</div>
          </div>
        </div>

        <div className="space-y-3">
          {choiceItems.map(item => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChoose(item.id)}
                className={`w-full h-[76px] rounded-[20px] border px-4 flex items-center gap-4 text-left ios-btn ${item.className}`}
              >
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-base font-bold text-white">{item.title}</div>
                  <div className="text-xs text-white/45 mt-1">{item.desc}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
