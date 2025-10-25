export type Hand = 'rock' | 'scissors' | 'paper';

export type GameResult = 'win' | 'lose' | 'draw';

export interface HandInfo {
  name: string;
  emoji: string;
  beats: Hand;
}

export interface GameState {
  playerHand: Hand | null;
  computerHand: Hand | null;
  result: GameResult | null;
  isPlaying: boolean;
  winCount: number;
  loseCount: number;
  drawCount: number;
}