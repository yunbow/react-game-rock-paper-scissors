import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { HandsComparison } from '../components/HandsComparison/HandsComparison';
import { ScoreBoard } from '../components/ScoreBoard/ScoreBoard';
import { ChoiceButtons } from '../components/ChoiceButtons/ChoiceButtons';
import { useRockPaperScissors } from '../useRockPaperScissors';
import { HANDS } from '../config';
import styles from './RockPaperScissorsGame.module.css';

export interface RockPaperScissorsGameProps {
  className?: string;
}

export const RockPaperScissorsGame = ({
  className = ''
}: RockPaperScissorsGameProps) => {
  const { gameState, message, playGame, resetGame } = useRockPaperScissors();

  const containerClass = [
    styles.gameContainer,
    className
  ].filter(Boolean).join(' ');

  const getMessageColor = () => {
    if (!gameState.result) return 'primary';
    switch (gameState.result) {
      case 'win': return 'success';
      case 'lose': return 'danger';
      case 'draw': return 'warning';
      default: return 'primary';
    }
  };

  const getPlayerEmoji = () => {
    if (!gameState.playerHand) return '?';
    return HANDS[gameState.playerHand].emoji;
  };

  const getComputerEmoji = () => {
    if (!gameState.computerHand) return '?';
    return HANDS[gameState.computerHand].emoji;
  };

  return (
    <div className={containerClass}>
      <Text variant="h1">じゃんけんゲーム</Text>

      <div className={styles.gameArea}>
        <div className={styles.resultDisplay}>
          <Text
            variant="large"
            color={getMessageColor()}
            className={styles.resultText}
          >
            {message}
          </Text>

          <HandsComparison
            playerEmoji={getPlayerEmoji()}
            computerEmoji={getComputerEmoji()}
          />
        </div>

        <ScoreBoard
          winCount={gameState.winCount}
          loseCount={gameState.loseCount}
          drawCount={gameState.drawCount}
        />

        <ChoiceButtons
          onChoiceSelect={playGame}
          disabled={gameState.isPlaying}
        />

        <Button
          variant="danger"
          onClick={resetGame}
          className={styles.resetButton}
        >
          リセット
        </Button>
      </div>
    </div>
  );
};