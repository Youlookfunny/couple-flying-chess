import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, CheckCircle2, Dices, RotateCw, Sparkles, User, UserRound } from 'lucide-react';
import { Player, Theme } from '../../types';

interface DiceModeViewProps {
  players: Player[];
  themes: Theme[];
  currentTurn: number;
  onEndTurn: () => void;
  onBack: () => void;
}

type DiceKind = 'action' | 'body';

const FACE_ROTATIONS = [
  'rotateY(0deg)',
  'rotateY(-90deg)',
  'rotateY(180deg)',
  'rotateY(90deg)',
  'rotateX(-90deg)',
  'rotateX(90deg)'
];

const getThemeWords = (theme: Theme | undefined) =>
  theme?.tasks.map(task => task.text.trim()).filter(Boolean) || [];

const pickRandomIndex = (length: number, previousIndex: number | null) => {
  if (length <= 1) return 0;

  let nextIndex = Math.floor(Math.random() * length);
  if (nextIndex === previousIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (length - 1))) % length;
  }
  return nextIndex;
};

function WordDice({
  kind,
  title,
  words,
  selectedIndex,
  isRolling,
  showWords
}: {
  kind: DiceKind;
  title: string;
  words: string[];
  selectedIndex: number | null;
  isRolling: boolean;
  showWords: boolean;
}) {
  const shouldShowWords = showWords && selectedIndex !== null && !isRolling;
  const visibleWords = useMemo(() => {
    if (words.length === 0) return ['', '', '', '', '', ''];

    if (!shouldShowWords || selectedIndex === null) {
      return ['', '', '', '', '', ''];
    }

    const faceIndex = selectedIndex % 6;

    return Array.from({ length: 6 }, (_, index) => {
      const sourceIndex = (selectedIndex + index - faceIndex + words.length) % words.length;
      return words[sourceIndex];
    });
  }, [selectedIndex, shouldShowWords, words]);
  const faceIndex = shouldShowWords && selectedIndex !== null ? selectedIndex % 6 : 0;
  const colorClass = kind === 'action' ? 'text-[#FF9F0A]' : 'text-[#64D2FF]';
  const borderClass = kind === 'action' ? 'border-[#FF9F0A]/30' : 'border-[#64D2FF]/30';
  const glowClass = kind === 'action' ? 'shadow-[#FF9F0A]/20' : 'shadow-[#64D2FF]/20';
  const transform = isRolling
    ? undefined
    : `translateZ(-38px) ${FACE_ROTATIONS[faceIndex]}`;
  const renderFaceContent = (text: string) => {
    if (shouldShowWords) return text;

    return (
      <div className="flex h-11 w-11 items-center justify-center">
        <Dices className="text-gray-500" size={30} />
      </div>
    );
  };

  return (
    <div className="relative h-[92px] flex items-center justify-center">
      <div className="absolute left-1/2 w-[82px] -translate-x-[140px] text-right">
        <div className={`text-[11px] font-bold uppercase tracking-widest ${colorClass}`}>
          {title}
        </div>
        <div className="mt-0.5 text-[11px] text-gray-500">
          {words.length} 面词库
        </div>
      </div>
      <div className="word-dice-scene">
        <div
          className={`word-dice ${isRolling ? 'word-dice--rolling' : ''}`}
          style={{ transform }}
        >
          <div className={`word-dice__face word-dice__face--front ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[0])}
          </div>
          <div className={`word-dice__face word-dice__face--right ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[1])}
          </div>
          <div className={`word-dice__face word-dice__face--back ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[2])}
          </div>
          <div className={`word-dice__face word-dice__face--left ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[3])}
          </div>
          <div className={`word-dice__face word-dice__face--top ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[4])}
          </div>
          <div className={`word-dice__face word-dice__face--bottom ${borderClass} ${glowClass}`}>
            {renderFaceContent(visibleWords[5])}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DiceModeView({
  players,
  themes,
  currentTurn,
  onEndTurn,
  onBack
}: DiceModeViewProps) {
  const actionTheme = themes.find(theme => theme.id === players[0]?.themeId);
  const bodyTheme = themes.find(theme => theme.id === players[1]?.themeId);
  const actionWords = useMemo(() => getThemeWords(actionTheme), [actionTheme]);
  const bodyWords = useMemo(() => getThemeWords(bodyTheme), [bodyTheme]);
  const activePlayer = players[currentTurn] || players[0];
  const [rollingPart, setRollingPart] = useState<DiceKind | null>(null);
  const [isSequenceActive, setIsSequenceActive] = useState(false);
  const [actionIndex, setActionIndex] = useState<number | null>(null);
  const [bodyIndex, setBodyIndex] = useState<number | null>(null);
  const [resultPlayerId, setResultPlayerId] = useState<number | null>(null);
  const [revealed, setRevealed] = useState({ action: false, body: false });
  const timersRef = useRef<number[]>([]);
  const actionResult = actionIndex === null ? null : actionWords[actionIndex];
  const bodyResult = bodyIndex === null ? null : bodyWords[bodyIndex];
  const hasResult = revealed.action && revealed.body && !!actionResult && !!bodyResult;
  const hasActionOnly = revealed.action && !revealed.body && !!actionResult;
  const resultPlayer = resultPlayerId === null ? null : players.find(player => player.id === resultPlayerId) || null;
  const isShowingCurrentTurnResult = resultPlayerId === activePlayer.id;

  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const queueTimer = (callback: () => void, delayMs: number) => {
    const timerId = window.setTimeout(callback, delayMs);
    timersRef.current.push(timerId);
    return timerId;
  };

  const handleRoll = () => {
    if (isSequenceActive) return;
    if (actionWords.length === 0 || bodyWords.length === 0) {
      alert('当前骰子词库为空，请返回选择或编辑骰子主题');
      return;
    }

    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    const nextActionIndex = pickRandomIndex(actionWords.length, actionIndex);
    const nextBodyIndex = pickRandomIndex(bodyWords.length, bodyIndex);

    setRevealed({ action: false, body: false });
    setResultPlayerId(activePlayer.id);
    setIsSequenceActive(true);
    setRollingPart('action');
    if (navigator.vibrate) navigator.vibrate(20);

    queueTimer(() => {
      setActionIndex(nextActionIndex);
      setRevealed(prev => ({ ...prev, action: true }));
      setRollingPart(null);

      queueTimer(() => {
        setRollingPart('body');
        if (navigator.vibrate) navigator.vibrate(15);

        queueTimer(() => {
          setBodyIndex(nextBodyIndex);
          setRevealed(prev => ({ ...prev, body: true }));
          setRollingPart(null);

          queueTimer(() => {
            onEndTurn();
            setIsSequenceActive(false);
          }, 900);
        }, 850);
      }, 450);
    }, 850);
  };

  const canRoll = actionWords.length > 0 && bodyWords.length > 0;
  const rollButtonLabel =
    rollingPart === 'action'
      ? '上骰子旋转中'
      : rollingPart === 'body'
        ? '下骰子旋转中'
        : isSequenceActive && hasActionOnly
          ? '等待下骰子'
          : isSequenceActive && hasResult
            ? '切换回合中'
            : `${activePlayer.name}掷骰子`;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-60" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 flex flex-col h-full max-w-[430px] mx-auto w-full">
        <header className="pt-11 pb-2 px-4 flex items-center gap-4 shrink-0">
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
              <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                <Dices size={12} />
                <span>骰子</span>
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

        <div className="flex-1 min-h-0 px-5 py-3 overflow-hidden flex flex-col gap-3">
          <div className="ios-card border border-white/5 p-3 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-black/20 border border-white/5 px-3 py-2 min-w-0">
                <div className="text-[10px] text-[#FF9F0A] font-bold mb-0.5">上骰子</div>
                <div className="text-sm text-white font-semibold truncate">
                  {actionTheme?.name || '未选择动作主题'}
                </div>
              </div>
              <div className="rounded-2xl bg-black/20 border border-white/5 px-3 py-2 min-w-0">
                <div className="text-[10px] text-[#64D2FF] font-bold mb-0.5">下骰子</div>
                <div className="text-sm text-white font-semibold truncate">
                  {bodyTheme?.name || '未选择部位主题'}
                </div>
              </div>
            </div>
          </div>

          <div className="ios-card border border-white/5 p-4 flex-1 min-h-[226px] flex flex-col justify-center gap-5">
            <WordDice
              kind="action"
              title="上骰子"
              words={actionWords}
              selectedIndex={actionIndex}
              isRolling={rollingPart === 'action'}
              showWords={revealed.action && isShowingCurrentTurnResult}
            />
            <div className="h-px bg-white/10" />
            <WordDice
              kind="body"
              title="下骰子"
              words={bodyWords}
              selectedIndex={bodyIndex}
              isRolling={rollingPart === 'body'}
              showWords={revealed.body && isShowingCurrentTurnResult}
            />
          </div>

          <div className="h-[148px] shrink-0 rounded-[24px] border border-white/10 bg-white/[0.04] p-4 flex flex-col items-center justify-center text-center">
            {hasResult ? (
              <>
                <div className="flex items-center gap-2 text-[#30D158] text-xs font-semibold mb-2">
                  <CheckCircle2 size={16} />
                  <span>{resultPlayer?.name || '本轮'}结果</span>
                </div>
                <div className="text-3xl font-black text-white tracking-normal leading-tight">
                  {actionResult}
                </div>
                <div className="my-1 text-[10px] text-gray-500 uppercase tracking-widest">TO</div>
                <div className="text-2xl font-black text-white tracking-normal leading-tight">
                  {bodyResult}
                </div>
              </>
            ) : hasActionOnly ? (
              <>
                <div className="flex items-center gap-2 text-[#FF9F0A] text-xs font-semibold mb-2">
                  <Dices size={16} />
                  <span>上骰子结果</span>
                </div>
                <div className="text-3xl font-black text-white tracking-normal leading-tight">
                  {actionResult}
                </div>
                <div className="mt-2 text-xs text-gray-500">下骰子准备中</div>
              </>
            ) : (
              <>
                <Sparkles className="text-gray-500 mb-2" size={22} />
                <div className="text-base font-bold text-white">{activePlayer.name}回合</div>
                <div className="text-xs text-gray-500 mt-1">点击下方按钮生成动作和部位</div>
              </>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleRoll}
          disabled={!canRoll || isSequenceActive}
          className="mx-4 mb-4 h-12 rounded-full bg-white text-black font-semibold text-base shadow-lg ios-btn flex items-center justify-center gap-2 disabled:opacity-40 shrink-0"
        >
          <RotateCw size={20} className={rollingPart ? 'animate-spin' : ''} />
          <span>{rollButtonLabel}</span>
        </button>
      </div>
    </div>
  );
}
