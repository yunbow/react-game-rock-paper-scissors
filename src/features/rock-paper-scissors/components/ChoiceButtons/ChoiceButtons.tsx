import { Button } from '../../../../components/Button/Button';
import { Text } from '../../../../components/Text/Text';
import { Hand } from '../../types';
import { HANDS } from '../../config';
import styles from './ChoiceButtons.module.css';

export interface ChoiceButtonsProps {
  onChoiceSelect: (choice: Hand) => void;
  disabled?: boolean;
  className?: string;
}

export const ChoiceButtons = ({
  onChoiceSelect,
  disabled = false,
  className = ''
}: ChoiceButtonsProps) => {
  const containerClass = [
    styles.choiceButtons,
    className
  ].filter(Boolean).join(' ');

  const handleChoiceClick = (choice: Hand) => {
    if (!disabled) {
      onChoiceSelect(choice);
    }
  };

  return (
    <div className={containerClass}>
      <Text variant="h2">あなたの手を選んでください</Text>
      <div className={styles.buttons}>
        {(Object.keys(HANDS) as Hand[]).map((hand) => (
          <Button
            key={hand}
            onClick={() => handleChoiceClick(hand)}
            disabled={disabled}
            className={styles.choiceButton}
          >
            {HANDS[hand].emoji} {HANDS[hand].name}
          </Button>
        ))}
      </div>
    </div>
  );
};