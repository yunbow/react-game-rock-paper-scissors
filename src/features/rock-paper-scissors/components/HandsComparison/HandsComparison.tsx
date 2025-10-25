import { Text } from '../../../../components/Text/Text';
import { HandDisplay } from '../HandDisplay/HandDisplay';
import styles from './HandsComparison.module.css';

export interface HandsComparisonProps {
  playerEmoji: string;
  computerEmoji: string;
  className?: string;
}

export const HandsComparison = ({
  playerEmoji,
  computerEmoji,
  className = ''
}: HandsComparisonProps) => {
  const containerClass = [
    styles.handsComparison,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <HandDisplay emoji={playerEmoji} label="あなた" />
      <Text variant="body" className={styles.vs}>VS</Text>
      <HandDisplay emoji={computerEmoji} label="コンピュータ" />
    </div>
  );
};