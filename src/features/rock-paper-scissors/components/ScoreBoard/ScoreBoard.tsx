import { Text } from '../../../../components/Text/Text';
import styles from './ScoreBoard.module.css';

export interface ScoreBoardProps {
  winCount: number;
  loseCount: number;
  drawCount: number;
  className?: string;
}

export const ScoreBoard = ({
  winCount,
  loseCount,
  drawCount,
  className = ''
}: ScoreBoardProps) => {
  const containerClass = [
    styles.scoreBoard,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <div className={styles.scoreItem}>
        <Text variant="body">
          勝ち：<span className={styles.count}>{winCount}</span>
        </Text>
      </div>
      <div className={styles.scoreItem}>
        <Text variant="body">
          負け：<span className={styles.count}>{loseCount}</span>
        </Text>
      </div>
      <div className={styles.scoreItem}>
        <Text variant="body">
          引き分け：<span className={styles.count}>{drawCount}</span>
        </Text>
      </div>
    </div>
  );
};