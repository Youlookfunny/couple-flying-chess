import { useEffect, useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface PoseCardModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  onAccept: () => void;
  onReject: () => void;
}

export function PoseCardModal({ isOpen, imageSrc, onAccept, onReject }: PoseCardModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visibleImageSrc, setVisibleImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && imageSrc) {
      setVisibleImageSrc(imageSrc);
      setIsFlipped(false);
      document.body.style.overflow = 'hidden';
    } else {
      setVisibleImageSrc(null);
      setIsFlipped(false);
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, imageSrc]);

  if (!isOpen || !visibleImageSrc) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative w-full max-w-sm h-[560px] max-h-[82vh] perspective-1000 task-card-pop">
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div
            className="flip-card-front bg-[#1C1C1E] border border-white/10 p-6 flex flex-col items-center justify-center shadow-2xl cursor-pointer"
            onClick={() => setIsFlipped(true)}
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
              <ImageIcon className="text-[#BF5AF2]" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">姿势卡牌</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
              点击翻转查看姿势
            </p>
          </div>

          <div className="flip-card-back bg-[#1C1C1E] border border-white/10 p-5 shadow-2xl">
            <div className="flex-1 min-h-0 flex flex-col items-center justify-center w-full">
              <h3 className="text-xl font-bold text-white mb-5">姿势图示</h3>
              <div className="w-full flex-1 min-h-0 mb-5 flex items-center justify-center">
                <img
                  src={visibleImageSrc}
                  alt="随机姿势"
                  className="max-w-full max-h-full rounded-2xl object-contain"
                />
              </div>
            </div>

            <div className="w-full flex gap-3 mt-auto">
              <button
                className="flex-1 h-12 rounded-full bg-[#3A3A3C] text-[#FF453A] font-bold text-sm ios-btn border border-transparent hover:border-[#FF453A]/30"
                onClick={onReject}
              >
                跳过姿势
              </button>
              <button
                className="flex-1 h-12 rounded-full bg-white text-black font-bold text-sm ios-btn shadow-lg"
                onClick={onAccept}
              >
                确认姿势
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
