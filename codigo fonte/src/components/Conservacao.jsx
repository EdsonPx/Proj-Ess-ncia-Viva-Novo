import '../styles/Home.css';
import '../styles/Departamento.css';
import logoImage from '../assets/logo.png';
import conservacaoImg from '../assets/conservaçao.jpg';
import { Link } from 'react-router-dom';

function Conservacao() {
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
        <section className="departamento-banner" style={{ backgroundImage: `url(${conservacaoImg})` }}>
          <div className="banner-overlay">
            <h1>Departamento de Conservação</h1>
          </div>
        </section>

        {/* Sobre o Departamento */}
        <section className="section departamento-sobre">
          <div className="section-container">
            <h2 className="section-title">Sobre o Departamento</h2>
            <div className="departamento-content">
              <p>O Departamento de Conservação da Essência Viva é dedicado à proteção e restauração de ecossistemas naturais. Nossa missão é preservar a biodiversidade e garantir que as gerações futuras possam desfrutar da riqueza natural do nosso planeta.</p>
              <p>Trabalhamos em estreita colaboração com comunidades locais, governos e outras organizações para implementar projetos de conservação eficazes e sustentáveis.</p>
            </div>
          </div>
        </section>

        {/* História do Departamento */}
        <section className="section departamento-historia">
          <div className="section-container">
            <h2 className="section-title">Nossa História</h2>
            <div className="departamento-content">
              <p>O Departamento de Conservação foi fundado em 2010 por um grupo de biólogos e ambientalistas preocupados com a rápida degradação dos ecossistemas naturais. Começamos com pequenos projetos de reflorestamento e, ao longo dos anos, expandimos nossas atividades para incluir a proteção de espécies ameaçadas, restauração de habitats e criação de corredores ecológicos.</p>
              <p>Ao longo de nossa jornada, temos celebrado muitas vitórias, incluindo a recuperação de áreas degradadas, o aumento das populações de espécies ameaçadas e o estabelecimento de novas áreas protegidas.</p>
            </div>
          </div>
        </section>

        {/* Plano de Ação */}
        <section className="section departamento-plano">
          <div className="section-container">
            <h2 className="section-title">Plano de Ação</h2>
            <div className="departamento-content">
              <div className="plano-item">
                <h3>Proteção de Habitats</h3>
                <p>Trabalhamos para proteger habitats críticos através da criação e manutenção de áreas protegidas, parcerias com proprietários de terras e advocacy para políticas de conservação.</p>
              </div>
              <div className="plano-item">
                <h3>Restauração Ecológica</h3>
                <p>Implementamos projetos de restauração para recuperar ecossistemas degradados, incluindo reflorestamento, recuperação de áreas úmidas e restauração de corpos d'água.</p>
              </div>
              <div className="plano-item">
                <h3>Conservação de Espécies</h3>
                <p>Desenvolvemos programas específicos para proteger espécies ameaçadas, incluindo monitoramento populacional, reprodução em cativeiro e reintrodução na natureza.</p>
              </div>
              <div className="plano-item">
                <h3>Engajamento Comunitário</h3>
                <p>Envolvemos comunidades locais em nossos esforços de conservação, oferecendo educação ambiental, oportunidades de voluntariado e apoio a iniciativas de conservação lideradas pela comunidade.</p>
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

export default Conservacao;