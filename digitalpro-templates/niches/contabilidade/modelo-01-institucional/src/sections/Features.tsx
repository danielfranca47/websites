import SectionTitle from '../components/SectionTitle';
import { featuresContent } from '../theme/content';

export default function Features() {
  return (
    <section style={{ backgroundColor: '#F6F8FA', borderRadius: '16px' }}>
      <SectionTitle title={featuresContent.title} />
      <div style={{ display: 'grid', gap: '1rem' }}>
        {featuresContent.items.map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.25rem 1rem',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              boxShadow: '0 12px 24px rgba(0, 76, 112, 0.08)',
            }}
          >
            <span role="img" aria-label="check" style={{ color: '#00B4D8', fontSize: '1.5rem' }}>
              ✓
            </span>
            <p style={{ margin: 0 }}>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
