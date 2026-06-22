import { useState, useEffect } from 'react';
import { TaskEventData } from '../../types';
import { Heart, Lock, HandshakeIcon, Sparkles } from 'lucide-react';

interface TaskCardModalProps {
  isOpen: boolean;
  taskData: TaskEventData | null;
  onAccept: () => void;
  onReject: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  favorite: <Heart size={40} fill="currentColor" />,
  lock: <Lock size={40} />,
  handshake: <HandshakeIcon size={40} />,
  sparkles: <Sparkles size={40} />
};

export function TaskCardModal({ isOpen, taskData, onAccept, onReject }: TaskCardModalProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visibleTaskData, setVisibleTaskData] = useState<TaskEventData | null>(null);

  useEffect(() => {
    if (isOpen && taskData) {
      setVisibleTaskData(taskData);
      setIsFlipped(false);
      document.body.style.overflow = 'hidden';
    } else {
      setVisibleTaskData(null);
      setIsFlipped(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, taskData]);

  if (!isOpen || !visibleTaskData) return null;

  const rejectLabel =
    visibleTaskData.type === 'card'
      ? '跳过任务'
      : visibleTaskData.type === 'collision'
        ? '拒绝（回到起点）'
        : '拒绝（倒退1~3格）';
  const executorLabel = visibleTaskData.executorPlayerId === 0 ? '男方' : '女方';
  const executorClassName = visibleTaskData.executorPlayerId === 0 ? 'text-[#0A84FF]' : 'text-[#FF375F]';

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div className="relative w-full max-w-sm h-[420px] perspective-1000 task-card-pop">
        <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
          <div
            className="flip-card-front bg-[#1C1C1E] border border-white/10 p-6 flex flex-col items-center justify-center shadow-2xl cursor-pointer"
            onClick={() => setIsFlipped(true)}
          >
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 animate-pulse">
              <div className={visibleTaskData.color}>
                {iconMap[visibleTaskData.icon] || iconMap.favorite}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{visibleTaskData.title}</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
              点击翻转查看任务
            </p>
           
          </div>

          <div className="flip-card-back bg-[#1C1C1E] border border-white/10 p-6 shadow-2xl">
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <div className={visibleTaskData.color}>
                {iconMap[visibleTaskData.icon] || iconMap.favorite}
              </div>
              <h3 className="text-xl font-bold text-white mb-6 mt-4">{visibleTaskData.title}</h3>
              <div className="text-xs text-gray-400 text-center leading-relaxed mb-6">
                <div>{visibleTaskData.subtitle}</div>
                <div>
                  由 <span className={executorClassName}>{executorLabel}</span> 执行
                </div>
              </div>

              <div className="w-full bg-[#2C2C2E] rounded-xl p-6 min-h-[120px] flex items-center justify-center border border-white/5 mb-6">
                <p className="text-lg font-medium text-white text-center leading-relaxed">
                  {visibleTaskData.task}
                </p>
              </div>
            </div>

            <div className="w-full flex gap-3 mt-auto">
              <button
                className="flex-1 h-12 rounded-full bg-[#3A3A3C] text-[#FF453A] font-bold text-sm ios-btn border border-transparent hover:border-[#FF453A]/30"
                onClick={onReject}
              >
                {rejectLabel}
              </button>
              <button
                className="flex-1 h-12 rounded-full bg-white text-black font-bold text-sm ios-btn shadow-lg"
                onClick={onAccept}
              >
                接受任务
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
