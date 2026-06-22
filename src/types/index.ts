export type TileType = 'blank' | 'lucky' | 'trap';

export type PlayerRole = 'male' | 'female';

export type GameMode = 'board' | 'card';

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
  tasks: TaskCard[];
}

export interface PathCoord {
  r: number;
  c: number;
}

export interface GameState {
  view: 'home' | 'game' | 'card' | 'themes';
  gameMode: GameMode;
  turn: number;
  players: Player[];
  themes: Theme[];
  boardMap: TileType[];
  pathCoords: PathCoord[];
  isRolling: boolean;
}

export interface TaskEventData {
  type: 'collision' | 'lucky' | 'trap' | 'card';
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
