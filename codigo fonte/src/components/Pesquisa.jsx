import '../styles/Home.css';
import '../styles/Departamento.css';
import logoImage from '../assets/logo.png';
import pesquisaImg from '../assets/pesquisa.jpg';
import { Link } from 'react-router-dom';

function Pesquisa() {
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
        <section className="departamento-banner" style={{ backgroundImage: `url(${pesquisaImg})` }}>
          <div className="banner-overlay">
            <h1>Departamento de Pesquisa</h1>
          </div>
        </section>

        {/* Sobre o Departamento */}
        <section className="section departamento-sobre">
          <div className="section-container">
            <h2 className="section-title">Sobre o Departamento</h2>
            <div className="departamento-content">
              <p>O Departamento de Pesquisa da Essência Viva é dedicado à realização de estudos científicos para a conservação da biodiversidade. Nossa missão é gerar conhecimento que fundamente ações de conservação eficazes e políticas ambientais baseadas em evidências.</p>
              <p>Trabalhamos com uma abordagem multidisciplinar, combinando ecologia, biologia da conservação, ciências sociais e outras disciplinas para compreender os complexos desafios ambientais que enfrentamos.</p>
            </div>
          </div>
        </section>

        {/* História do Departamento */}
        <section className="section departamento-historia">
          <div className="section-container">
            <h2 className="section-title">Nossa História</h2>
            <div className="departamento-content">
              <p>O Departamento de Pesquisa foi estabelecido em 2014 para preencher a lacuna entre a ciência e a prática da conservação. Começamos com pequenos projetos de monitoramento de biodiversidade e, ao longo dos anos, expandimos para incluir pesquisas sobre mudanças climáticas, serviços ecossistêmicos, restauração ecológica e conservação de espécies ameaçadas.</p>
              <p>Nosso trabalho tem sido publicado em revistas científicas renomadas e tem informado políticas de conservação em níveis local, nacional e internacional. Temos orgulho de colaborar com universidades, institutos de pesquisa e outras organizações de conservação para maximizar o impacto de nossos esforços.</p>
            </div>
          </div>
        </section>

        {/* Plano de Ação */}
        <section className="section departamento-plano">
          <div className="section-container">
            <h2 className="section-title">Plano de Ação</h2>
            <div className="departamento-content">
              <div className="plano-item">
                <h3>Monitoramento da Biodiversidade</h3>
                <p>Realizamos levantamentos sistemáticos de flora e fauna em áreas prioritárias para conservação, utilizando metodologias científicas rigorosas para avaliar a saúde dos ecossistemas e identificar ameaças.</p>
              </div>
              <div className="plano-item">
                <h3>Pesquisa Aplicada</h3>
                <p>Desenvolvemos projetos de pesquisa que respondem diretamente às necessidades de conservação, como estudos sobre a eficácia de diferentes técnicas de restauração ou o impacto de atividades humanas em espécies ameaçadas.</p>
              </div>
              <div className="plano-item">
                <h3>Ciência Cidadã</h3>
                <p>Envolvemos o público em nossos esforços de pesquisa através de programas de ciência cidadã, capacitando voluntários para coletar dados valiosos enquanto aumentam sua conexão com a natureza.</p>
              </div>
              <div className="plano-item">
                <h3>Comunicação Científica</h3>
                <p>Traduzimos descobertas científicas complexas em informações acessíveis para tomadores de decisão, gestores de conservação e o público em geral, através de publicações, workshops e mídia digital.</p>
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

export default Pesquisa;