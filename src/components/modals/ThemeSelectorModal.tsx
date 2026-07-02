import { Theme } from '../../types';
import { Check } from 'lucide-react';
import { useEffect } from 'react';

interface ThemeSelectorModalProps {
  isOpen: boolean;
  themes: Theme[];
  selectedThemeId: string | null;
  onSelect: (themeId: string) => void;
  onClose: () => void;
}

const audienceLabel: Record<Theme['audience'], string> = {
  common: '通用',
  male: '仅男方',
  female: '仅女方'
};

const modeLabel: Record<Theme['modes'][number], string> = {
  board: '飞行棋',
  card: '抽卡',
  mineTruth: '真心话',
  mineDare: '大冒险',
  mineTheme: '扫雷主题',
  diceAction: '上骰子动作',
  diceBody: '下骰子部位'
};

export function ThemeSelectorModal({
  isOpen,
  themes,
  selectedThemeId,
  onSelect,
  onClose
}: ThemeSelectorModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-[#1C1C1E] rounded-t-[32px] p-6 transform transition-transform duration-300">
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-6" />
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">选择主题</h3>
        </div>
        <div className="space-y-2 max-h-[55vh] overflow-y-auto no-scrollbar pb-8">
          {themes.length === 0 && (
            <div className="text-sm text-gray-500 bg-[#2C2C2E] rounded-xl p-4 border border-white/5">
              当前没有可选主题，请到题库中新建或编辑主题的适用模式
            </div>
          )}
          {themes.map(theme => (
            <div
              key={theme.id}
              onClick={() => {
                onSelect(theme.id);
                onClose();
              }}
              className="p-4 bg-[#2C2C2E] rounded-xl active:bg-[#3A3A3C] transition-colors cursor-pointer border border-white/5"
            >
              <div className="flex justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium truncate">{theme.name}</span>
                    <span className="shrink-0 text-[10px] text-gray-500">{theme.tasks.length}卡</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 line-clamp-2">{theme.desc || '无描述'}</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
                      {audienceLabel[theme.audience]}
                    </span>
                    {theme.modes.map(mode => (
                      <span key={mode} className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
                        {modeLabel[mode]}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedThemeId === theme.id && (
                  <Check className="text-[#0A84FF] shrink-0 mt-0.5" size={20} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
