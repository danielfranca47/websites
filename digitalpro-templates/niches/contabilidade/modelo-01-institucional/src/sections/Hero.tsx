import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { heroContent } from '../theme/content';
import { colors } from '../theme/colors';

export default function Hero() {
  return (
    <section style={{ display: 'grid', gap: '2rem' }}>
      <SectionTitle
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        align="left"
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <Button label={heroContent.ctaPrimaryLabel} variant="primary" />
        <Button label={heroContent.ctaSecondaryLabel} variant="secondary" />
      </div>
      <div
        style={{
          backgroundColor: colors.surface,
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 20px 40px rgba(0, 76, 112, 0.12)',
        }}
      >
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          Somos especialistas em impulsionar negócios por meio de soluções contábeis
          completas. Unimos tecnologia, atendimento consultivo e visão estratégica para
          que cada cliente tenha uma gestão financeira eficiente, segura e orientada para o
          crescimento.
        </p>
      </div>
    </section>
  );
}
