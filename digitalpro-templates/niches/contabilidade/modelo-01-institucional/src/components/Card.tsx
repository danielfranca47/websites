import type { ReactNode } from 'react';
import { colors } from '../theme/colors';

type CardProps = {
  title: string;
  description?: string;
  icon?: string;
  children?: ReactNode;
};

export default function Card({ title, description, icon, children }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: colors.surface,
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 10px 25px rgba(0, 76, 112, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        height: '100%',
      }}
    >
      {icon && <span style={{ fontSize: '2rem' }}>{icon}</span>}
      <h3 style={{ margin: 0 }}>{title}</h3>
      {description && <p style={{ margin: 0, color: '#4A4A4A' }}>{description}</p>}
      {children}
    </div>
  );
}
