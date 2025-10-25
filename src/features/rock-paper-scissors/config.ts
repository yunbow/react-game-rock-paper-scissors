import type { Hand, HandInfo } from './types';

export const HANDS: Record<Hand, HandInfo> = {
  rock: { name: 'グー', emoji: '✊', beats: 'scissors' },
  scissors: { name: 'チョキ', emoji: '✌️', beats: 'paper' },
  paper: { name: 'パー', emoji: '✋', beats: 'rock' },
} as const;

export const ANIMATION_DURATION = {
  COUNTDOWN: 1000,
  RESULT_DELAY: 500,
} as const;

export const MESSAGES = {
  INITIAL: 'さあ、じゃんけんをしましょう！',
  COUNTDOWN: 'じゃんけん...',
  PON: 'ぽん！',
  WIN: '勝ちました！おめでとう！',
  LOSE: '負けました...また挑戦してね',
  DRAW: '引き分けです。もう一回！',
} as const;