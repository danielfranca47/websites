import type { CSSProperties } from 'react';
import { colors } from '../theme/colors';

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
};

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 600,
  transition: 'opacity 0.2s ease-in-out',
  padding: '0.75rem 1.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default function Button({ label, variant = 'primary' }: ButtonProps) {
  const styles: CSSProperties = {
    ...baseStyle,
    backgroundColor: variant === 'primary' ? colors.secondary : 'transparent',
    color: variant === 'primary' ? '#FFFFFF' : colors.primary,
    border: variant === 'primary' ? 'none' : `2px solid ${colors.primary}`,
  };

  return <button style={styles}>{label}</button>;
}
