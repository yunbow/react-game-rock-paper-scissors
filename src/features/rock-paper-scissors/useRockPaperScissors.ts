import { useState, useCallback } from 'react';
import { Hand, GameResult, GameState } from './types';
import { HANDS, ANIMATION_DURATION, MESSAGES } from './config';

export const useRockPaperScissors = () => {
  const [gameState, setGameState] = useState<GameState>({
    playerHand: null,
    computerHand: null,
    result: null,
    isPlaying: false,
    winCount: 0,
    loseCount: 0,
    drawCount: 0,
  });

  const [message, setMessage] = useState<string>(MESSAGES.INITIAL);

  const getComputerChoice = (): Hand => {
    const choices: Hand[] = ['rock', 'scissors', 'paper'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (playerChoice: Hand, computerChoice: Hand): GameResult => {
    if (playerChoice === computerChoice) {
      return 'draw';
    } else if (HANDS[playerChoice].beats === computerChoice) {
      return 'win';
    } else {
      return 'lose';
    }
  };

  const getResultMessage = (result: GameResult): string => {
    switch (result) {
      case 'win':
        return MESSAGES.WIN;
      case 'lose':
        return MESSAGES.LOSE;
      case 'draw':
        return MESSAGES.DRAW;
    }
  };

  const playGame = useCallback((playerChoice: Hand) => {
    if (gameState.isPlaying) return;

    setGameState(prev => ({ ...prev, isPlaying: true }));
    setMessage(MESSAGES.COUNTDOWN);

    setGameState(prev => ({
      ...prev,
      playerHand: 'rock',
      computerHand: 'rock',
    }));

    setTimeout(() => {
      setMessage(MESSAGES.PON);

      setTimeout(() => {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        const resultMessage = getResultMessage(result);

        setGameState(prev => ({
          ...prev,
          playerHand: playerChoice,
          computerHand: computerChoice,
          result,
          isPlaying: false,
          winCount: result === 'win' ? prev.winCount + 1 : prev.winCount,
          loseCount: result === 'lose' ? prev.loseCount + 1 : prev.loseCount,
          drawCount: result === 'draw' ? prev.drawCount + 1 : prev.drawCount,
        }));

        setMessage(resultMessage);
      }, ANIMATION_DURATION.RESULT_DELAY);
    }, ANIMATION_DURATION.COUNTDOWN);
  }, [gameState.isPlaying]);

  const resetGame = useCallback(() => {
    setGameState({
      playerHand: null,
      computerHand: null,
      result: null,
      isPlaying: false,
      winCount: 0,
      loseCount: 0,
      drawCount: 0,
    });
    setMessage(MESSAGES.INITIAL);
  }, []);

  return {
    gameState,
    message,
    playGame,
    resetGame,
  };
};