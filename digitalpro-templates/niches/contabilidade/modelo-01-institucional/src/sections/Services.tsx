import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { servicesContent } from '../theme/content';

export default function Services() {
  return (
    <section>
      <SectionTitle title={servicesContent.title} />
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        }}
      >
        {servicesContent.items.map((service) => (
          <Card key={service} title={service} description="Atendimento especializado e consultivo." />
        ))}
      </div>
    </section>
  );
}
