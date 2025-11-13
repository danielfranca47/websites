import SectionTitle from '../components/SectionTitle';
import { contactContent } from '../theme/content';

export default function Contact() {
  return (
    <section style={{ backgroundColor: '#004C70', color: '#FFFFFF', borderRadius: '16px' }}>
      <SectionTitle
        title={contactContent.title}
        subtitle={contactContent.description}
        color="#FFFFFF"
        subtitleColor="#FFFFFF"
      />
      <div style={{ display: 'grid', gap: '1rem', fontSize: '1.1rem' }}>
        <span>📞 {contactContent.phone}</span>
        <span>✉️ {contactContent.email}</span>
        <span>📍 {contactContent.address}</span>
      </div>
    </section>
  );
}
