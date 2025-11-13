type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: string;
  subtitleColor?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  color = '#004C70',
  subtitleColor = '#4A4A4A',
}: SectionTitleProps) {
  return (
    <div style={{ textAlign: align, marginBottom: '2rem' }}>
      <h2 style={{ marginBottom: subtitle ? '0.5rem' : '0', color }}>{title}</h2>
      {subtitle && <p style={{ margin: 0, color: subtitleColor }}>{subtitle}</p>}
    </div>
  );
}
