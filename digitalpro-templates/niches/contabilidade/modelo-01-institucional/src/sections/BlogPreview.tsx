import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

const posts = [
  {
    title: 'Planejamento tributário para PMEs',
    description: 'Descubra como reduzir custos e manter a conformidade fiscal com estratégias eficientes.',
  },
  {
    title: 'Novas obrigações legais para 2024',
    description: 'Confira as principais mudanças na legislação e prepare sua empresa com antecedência.',
  },
  {
    title: 'Como organizar o fluxo de caixa',
    description: 'Boas práticas para garantir previsibilidade financeira e decisões assertivas.',
  },
];

export default function BlogPreview() {
  return (
    <section>
      <SectionTitle
        title="Insights contábeis"
        subtitle="Conteúdo especializado para manter sua empresa competitiva."
      />
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        }}
      >
        {posts.map((post) => (
          <Card key={post.title} title={post.title} description={post.description}>
            <a href="#" style={{ color: '#0077B6', fontWeight: 600 }}>
              Ler mais →
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
