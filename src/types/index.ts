export type TileType = 'blank' | 'lucky' | 'trap';

export type PlayerRole = 'male' | 'female';

export type GameMode = 'board' | 'card' | 'pose' | 'mine';

export type ThemeMode = 'board' | 'card' | 'mineTruth' | 'mineDare' | 'mineTheme';

export type MineTileType = 'bomb' | 'truth' | 'dare' | 'blank' | 'theme';

export type MineTaskChoice = 'truth' | 'dare' | 'theme';

export interface MineTile {
  type: MineTileType;
  revealed: boolean;
}

export interface Player {
  id: number;
  name: string;
  color: string;
  role: PlayerRole;
  step: number;
  themeId: string | null;
}

export type ThemeAudience = 'common' | 'male' | 'female';

export type TaskExecutor = 'female' | 'male' | 'both';

export interface TaskCard {
  text: string;
  executor: TaskExecutor;
  moveDelta: number;
}

export interface Theme {
  id: string;
  name: string;
  desc: string;
  audience: ThemeAudience;
  modes: ThemeMode[];
  tasks: TaskCard[];
}

export interface PathCoord {
  r: number;
  c: number;
}

export interface GameState {
  view: 'home' | 'game' | 'card' | 'pose' | 'mine' | 'themes';
  gameMode: GameMode;
  turn: number;
  players: Player[];
  themes: Theme[];
  boardMap: TileType[];
  pathCoords: PathCoord[];
  mineBoard: MineTile[];
  isRolling: boolean;
}

export interface TaskEventData {
  type: 'collision' | 'lucky' | 'trap' | 'card' | 'mineTruth' | 'mineDare' | 'mineTheme';
  initiatorPlayerId: number;
  executorPlayerId: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  task: string;
  taskSourceId: string;
  moveDelta: number;
}

export type MineRevealResult =
  | { type: 'blank' }
  | { type: 'bomb' }
  | { type: 'task'; task: TaskEventData };
