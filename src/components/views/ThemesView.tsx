import { Theme } from '../../types';

interface ThemesViewProps {
  themes: Theme[];
  onCreateTheme: () => void;
  onEditTheme: (themeId: string) => void;
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
  mineTheme: '扫雷主题'
};

export function ThemesView({ themes, onCreateTheme, onEditTheme }: ThemesViewProps) {
  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-y-auto no-scrollbar pb-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">任务主题库</h2>
        <button
          className="h-9 px-4 rounded-full bg-white text-black text-sm font-semibold ios-btn"
          onClick={onCreateTheme}
        >
          新建主题
        </button>
      </div>
      <div className="space-y-3">
        {themes.map(theme => (
          <div
            key={theme.id}
            className="ios-card p-4 border border-white/5 ios-btn cursor-pointer"
            onClick={() => onEditTheme(theme.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="text-white font-semibold">{theme.name}</div>
                <div className="text-xs text-gray-500 mt-1">{theme.desc}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <div className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
                    {audienceLabel[theme.audience]}
                  </div>
                  {theme.modes.map(mode => (
                    <div key={mode} className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
                      {modeLabel[mode]}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
                {theme.tasks.length}卡
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
