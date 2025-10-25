import { HandIcon } from '../../../../components/HandIcon/HandIcon';
import { Text } from '../../../../components/Text/Text';
import styles from './HandDisplay.module.css';

export interface HandDisplayProps {
  emoji: string;
  label: string;
  className?: string;
}

export const HandDisplay = ({
  emoji,
  label,
  className = ''
}: HandDisplayProps) => {
  const containerClass = [
    styles.handDisplay,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClass}>
      <Text variant="body" className={styles.label}>
        {label}
      </Text>
      <HandIcon emoji={emoji} label={label} />
    </div>
  );
};