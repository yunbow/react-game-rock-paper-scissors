import styles from './Text.module.css';

export interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'body' | 'large';
  color?: 'default' | 'primary' | 'success' | 'danger' | 'warning';
  className?: string;
}

export const Text = ({
  children,
  variant = 'body',
  color = 'default',
  className = ''
}: TextProps) => {
  const textClass = [
    styles.text,
    styles[variant],
    styles[color],
    className
  ].filter(Boolean).join(' ');

  if (variant === 'h1') {
    return <h1 className={textClass}>{children}</h1>;
  }

  if (variant === 'h2') {
    return <h2 className={textClass}>{children}</h2>;
  }

  return (
    <p className={textClass}>
      {children}
    </p>
  );
};