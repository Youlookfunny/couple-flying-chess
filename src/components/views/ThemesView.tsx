import { Plus, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { DEFAULT_THEMES } from '../../data/defaultThemes';
import { Theme, ThemeAudience, ThemeMode } from '../../types';

interface ThemesViewProps {
  themes: Theme[];
  onCreateTheme: () => void;
  onEditTheme: (themeId: string) => void;
}

type ModeFilter = 'all' | 'board' | 'card' | 'mine' | 'dice';
type AudienceFilter = 'all' | ThemeAudience;

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

const defaultThemeIds = new Set(DEFAULT_THEMES.map(theme => theme.id));

const modeFilters: Array<{ value: ModeFilter; label: string; modes?: ThemeMode[] }> = [
  { value: 'all', label: '全部' },
  { value: 'board', label: '飞行棋', modes: ['board'] },
  { value: 'card', label: '抽卡', modes: ['card'] },
  { value: 'mine', label: '扫雷', modes: ['mineTruth', 'mineDare', 'mineTheme'] },
  { value: 'dice', label: '骰子', modes: ['diceAction', 'diceBody'] }
];

const audienceFilters: Array<{ value: AudienceFilter; label: string }> = [
  { value: 'all', label: '全部对象' },
  { value: 'common', label: '通用' },
  { value: 'male', label: '男方' },
  { value: 'female', label: '女方' }
];

function matchesModeFilter(theme: Theme, filter: ModeFilter) {
  if (filter === 'all') return true;
  const targetModes = modeFilters.find(item => item.value === filter)?.modes || [];
  return theme.modes.some(mode => targetModes.includes(mode));
}

export function ThemesView({ themes, onCreateTheme, onEditTheme }: ThemesViewProps) {
  const [modeFilter, setModeFilter] = useState<ModeFilter>('all');
  const [audienceFilter, setAudienceFilter] = useState<AudienceFilter>('all');
  const [keyword, setKeyword] = useState('');

  const filteredThemes = useMemo(() => {
    const normalizedKeyword = keyword.trim().toLowerCase();

    return themes.filter(theme => {
      const matchesKeyword =
        normalizedKeyword.length === 0 ||
        theme.name.toLowerCase().includes(normalizedKeyword) ||
        theme.desc.toLowerCase().includes(normalizedKeyword);
      const matchesAudience = audienceFilter === 'all' || theme.audience === audienceFilter;

      return matchesKeyword && matchesAudience && matchesModeFilter(theme, modeFilter);
    });
  }, [audienceFilter, keyword, modeFilter, themes]);

  const builtInThemes = filteredThemes.filter(theme => defaultThemeIds.has(theme.id));
  const customThemes = filteredThemes.filter(theme => !defaultThemeIds.has(theme.id));
  const totalTaskCount = filteredThemes.reduce((sum, theme) => sum + theme.tasks.length, 0);

  const renderThemeCard = (theme: Theme) => (
    <div
      key={theme.id}
      className="ios-card p-4 border border-white/5 ios-btn cursor-pointer"
      onClick={() => onEditTheme(theme.id)}
    >
      <div className="flex justify-between gap-4">
        <div className="min-w-0">
          <div className="text-white font-semibold truncate">{theme.name}</div>
          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{theme.desc || '无描述'}</div>
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
        <div className="h-7 shrink-0 bg-white/10 px-2 py-1 rounded text-[10px] text-gray-300">
          {theme.tasks.length}卡
        </div>
      </div>
    </div>
  );

  const renderSection = (title: string, sectionThemes: Theme[]) => {
    if (sectionThemes.length === 0) return null;

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="text-xs font-semibold text-gray-400">{title}</div>
          <div className="text-[10px] text-gray-500">{sectionThemes.length}个题库</div>
        </div>
        <div className="space-y-3">{sectionThemes.map(renderThemeCard)}</div>
      </div>
    );
  };

  return (
    <div className="flex-1 min-h-0 flex flex-col overflow-y-auto no-scrollbar pb-24">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">任务主题库</h2>
          <div className="text-xs text-gray-500 mt-1">
            {filteredThemes.length} 个题库 · {totalTaskCount} 张任务卡
          </div>
        </div>
        <button
          className="h-9 px-4 rounded-full bg-white text-black text-sm font-semibold ios-btn flex items-center gap-1.5"
          onClick={onCreateTheme}
        >
          <Plus size={16} />
          <span>新建</span>
        </button>
      </div>

      <div className="space-y-3 mb-5">
        <div className="h-11 px-3 rounded-xl bg-[#2C2C2E] border border-white/5 flex items-center gap-2">
          <Search size={17} className="text-gray-500 shrink-0" />
          <input
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            placeholder="搜索题库名称或描述"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {modeFilters.map(item => (
            <button
              key={item.value}
              type="button"
              className={`h-9 px-3 shrink-0 rounded-full text-xs font-semibold ios-btn border ${
                modeFilter === item.value
                  ? 'bg-white text-black border-white'
                  : 'bg-[#2C2C2E] text-gray-300 border-white/5'
              }`}
              onClick={() => setModeFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {audienceFilters.map(item => (
            <button
              key={item.value}
              type="button"
              className={`h-8 px-3 shrink-0 rounded-full text-xs font-semibold ios-btn border ${
                audienceFilter === item.value
                  ? 'bg-white text-black border-white'
                  : 'bg-[#2C2C2E] text-gray-300 border-white/5'
              }`}
              onClick={() => setAudienceFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {renderSection('我的题库', customThemes)}
        {renderSection('内置题库', builtInThemes)}
        {filteredThemes.length === 0 && (
          <div className="ios-card p-5 border border-white/5 text-sm text-gray-500">
            没有找到匹配的题库
          </div>
        )}
      </div>
    </div>
  );
}
