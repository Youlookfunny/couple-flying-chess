import { ArrowLeft, ImageIcon, User, UserRound } from 'lucide-react';
import { Player } from '../../types';
import { POSE_IMAGES } from '../../data/poseImages';

interface PoseModeViewProps {
  players: Player[];
  currentTurn: number;
  onPoseTrigger: (imageSrc: string) => void;
  onBack: () => void;
}

export function PoseModeView({
  players,
  currentTurn,
  onPoseTrigger,
  onBack
}: PoseModeViewProps) {
  const activePlayer = players[currentTurn];

  const handleDrawPose = () => {
    if (POSE_IMAGES.length === 0) {
      alert('public/img 目录下还没有可抽取的图片');
      return;
    }

    const imageSrc = POSE_IMAGES[Math.floor(Math.random() * POSE_IMAGES.length)];
    onPoseTrigger(imageSrc);
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
                姿势
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

        <div className="flex-1 min-h-0 px-6 py-6 flex flex-col justify-center">
          <div className="ios-card border border-white/5 p-5">
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">当前回合</div>
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: activePlayer.color,
                  boxShadow: `0 10px 15px -3px ${activePlayer.color}30`
                }}
              >
                {activePlayer.id === 0 ? (
                  <User className="text-white" size={26} />
                ) : (
                  <UserRound className="text-white" size={26} />
                )}
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold text-white">{activePlayer.name}</div>
                <div className="text-sm text-gray-400 mt-1 truncate">抽取姿势</div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDrawPose}
          className="mx-4 mb-4 h-[244px] ios-glass rounded-[32px] flex flex-col items-center justify-center px-6 border border-white/10 shadow-2xl shrink-0 ios-btn"
        >
          <div
            className={`text-sm font-medium text-center animate-pulse mb-6 ${
              currentTurn === 0 ? 'text-[#0A84FF]' : 'text-[#FF375F]'
            }`}
          >
            {activePlayer.name}回合：点击卡牌抽取姿势
          </div>
          <div className="w-20 h-20 rounded-[24px] bg-white/5 flex items-center justify-center mb-5">
            <ImageIcon
              className={activePlayer.id === 0 ? 'text-[#0A84FF]' : 'text-[#FF375F]'}
              size={38}
            />
          </div>
          <div className="text-2xl font-bold text-white">抽取姿势</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-3">
            点击抽卡
          </div>
        </button>
      </div>
    </div>
  );
}
