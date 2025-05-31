import '../styles/Home.css';
import '../styles/Departamento.css';
import logoImage from '../assets/logo.png';
import educacaoImg from '../assets/educaçao.jpg';
import { Link } from 'react-router-dom';

function Educacao() {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={logoImage} alt="Essência Viva" />
            <h1>Essência Viva</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/activities">Atividades</Link></li>
              <li><a href="#departamentos">Departamentos</a></li>
              <li><Link to="/login" className="nav-button">Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div style={{ paddingTop: '100px' }}> {/* Espaço para o header fixo */}
        {/* Banner do Departamento */}
        <section className="departamento-banner" style={{ backgroundImage: `url(${educacaoImg})` }}>
          <div className="banner-overlay">
            <h1>Departamento de Educação</h1>
          </div>
        </section>

        {/* Sobre o Departamento */}
        <section className="section departamento-sobre">
          <div className="section-container">
            <h2 className="section-title">Sobre o Departamento</h2>
            <div className="departamento-content">
              <p>O Departamento de Educação da Essência Viva é dedicado a promover a conscientização ambiental e o desenvolvimento sustentável através de programas educacionais inovadores. Nossa missão é inspirar e capacitar pessoas de todas as idades a se tornarem defensores do meio ambiente.</p>
              <p>Acreditamos que a educação é a chave para criar um futuro sustentável, e trabalhamos para tornar o conhecimento ambiental acessível e envolvente para todos.</p>
            </div>
          </div>
        </section>

        {/* História do Departamento */}
        <section className="section departamento-historia">
          <div className="section-container">
            <h2 className="section-title">Nossa História</h2>
            <div className="departamento-content">
              <p>O Departamento de Educação foi estabelecido em 2012 com o objetivo de complementar os esforços de conservação da organização através da educação. Começamos com workshops em escolas locais e, ao longo dos anos, expandimos para incluir programas de treinamento para professores, cursos online, expedições educacionais e materiais didáticos.</p>
              <p>Nosso crescimento tem sido impulsionado pela crença de que a educação ambiental deve ser experiencial, baseada em evidências e culturalmente relevante. Temos orgulho de ter alcançado milhares de estudantes, educadores e membros da comunidade com nossas iniciativas educacionais.</p>
            </div>
          </div>
        </section>

        {/* Plano de Ação */}
        <section className="section departamento-plano">
          <div className="section-container">
            <h2 className="section-title">Plano de Ação</h2>
            <div className="departamento-content">
              <div className="plano-item">
                <h3>Programas Escolares</h3>
                <p>Desenvolvemos e implementamos currículos ambientais para escolas, oferecendo workshops, materiais didáticos e suporte para professores integrarem a educação ambiental em suas aulas.</p>
              </div>
              <div className="plano-item">
                <h3>Educação Comunitária</h3>
                <p>Realizamos eventos educacionais para comunidades, incluindo palestras, oficinas e atividades práticas que promovem a sustentabilidade e a conexão com a natureza.</p>
              </div>
              <div className="plano-item">
                <h3>Formação de Educadores</h3>
                <p>Oferecemos programas de capacitação para educadores ambientais, fornecendo ferramentas, metodologias e recursos para que possam inspirar outros em suas comunidades.</p>
              </div>
              <div className="plano-item">
                <h3>Recursos Digitais</h3>
                <p>Criamos e disponibilizamos recursos educacionais digitais, incluindo cursos online, vídeos, podcasts e aplicativos que tornam a educação ambiental acessível a um público mais amplo.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoImage} alt="Essência Viva" />
            <h3>Essência Viva</h3>
            <p>Reconecte-se com a natureza</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/activities">Atividades</Link></li>
                <li><a href="#departamentos">Departamentos</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contato</h4>
              <p>Email: contato@essenciaviva.org</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Essência Viva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Educacao;