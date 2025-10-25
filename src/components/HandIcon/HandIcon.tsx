import styles from './HandIcon.module.css';

export interface HandIconProps {
  emoji: string;
  label?: string;
  className?: string;
}

export const HandIcon = ({
  emoji,
  label,
  className = ''
}: HandIconProps) => {
  const iconClass = [
    styles.handIcon,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={iconClass}>
      {emoji}
      {label && <span className={styles.srOnly}>{label}</span>}
    </div>
  );
};