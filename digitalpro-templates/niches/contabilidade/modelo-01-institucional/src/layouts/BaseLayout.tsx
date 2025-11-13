import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Features from '../sections/Features';
import BlogPreview from '../sections/BlogPreview';
import Contact from '../sections/Contact';

export default function BaseLayout() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <header style={{ padding: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#004C70' }}>
            Contabilidade Premium
          </span>
          <nav style={{ display: 'flex', gap: '1rem', fontWeight: 500 }}>
            <a href="#servicos">Serviços</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#conteudo">Conteúdo</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <Hero />
        <div id="servicos">
          <Services />
        </div>
        <div id="diferenciais">
          <Features />
        </div>
        <div id="conteudo">
          <BlogPreview />
        </div>
        <div id="contato">
          <Contact />
        </div>
      </main>
      <footer>
        © {new Date().getFullYear()} Contabilidade Premium. Todos os direitos reservados.
      </footer>
    </div>
  );
}
