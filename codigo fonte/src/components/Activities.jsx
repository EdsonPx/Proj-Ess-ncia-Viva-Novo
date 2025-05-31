import '../styles/Home.css';
import logoImage from '../assets/logo.png';
import caminhadaImg from '../assets/caminhada.jpg';
import paddelImg from '../assets/paddel.jpg';
import caiaqueImg from '../assets/caiaque.jpg';
import mergulhoImg from '../assets/mergulho.jpg';
import esquiImg from '../assets/esqui.jpg';
import yogaImg from '../assets/yoga.jpg';
import surfImg from '../assets/surf.jpg';
import calisteniaImg from '../assets/calistenia.jpg';
import paraquedismoImg from '../assets/paraquedismo.jpg';
import ciclismoImg from '../assets/ciclismo.jpg';
import { Link } from 'react-router-dom';

function Activities() {
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
        {/* Atividades Section */}
        <section id="atividades" className="section atividades-section">
          <div className="section-container">
            <h2 className="section-title">Atividades Disponíveis</h2>
            <div className="atividades-grid">
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${caminhadaImg})` }}></div>
                <h3>Caminhada</h3>
                <p>Explore trilhas e caminhos naturais com nossos guias especializados.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${paddelImg})` }}></div>
                <h3>Paddel</h3>
                <p>Pratique paddel em nossas quadras com instrutores qualificados.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${ciclismoImg})` }}></div>
                <h3>Ciclismo</h3>
                <p>Percorra rotas cênicas de bicicleta com nossos grupos organizados.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${mergulhoImg})` }}></div>
                <h3>Mergulho</h3>
                <p>Descubra o mundo subaquático com nossos instrutores certificados.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${esquiImg})` }}></div>
                <h3>Esqui</h3>
                <p>Aprenda ou aperfeiçoe suas habilidades no esqui com nossas aulas.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${caiaqueImg})` }}></div>
                <h3>Caiaque</h3>
                <p>Navegue por rios e lagos em nossos passeios guiados de caiaque.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${yogaImg})` }}></div>
                <h3>Yoga</h3>
                <p>Conecte corpo e mente com nossas aulas de yoga ao ar livre.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${surfImg})` }}></div>
                <h3>Surf</h3>
                <p>Aprenda a surfar ou aprimore suas técnicas com nossos instrutores.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${calisteniaImg})` }}></div>
                <h3>Calistenia</h3>
                <p>Fortaleça seu corpo com nossos treinos de calistenia ao ar livre.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
              </div>
              <div className="atividade-card">
                <div className="atividade-image" style={{ backgroundImage: `url(${paraquedismoImg})` }}></div>
                <h3>Paraquedismo</h3>
                <p>Experimente a adrenalina do paraquedismo com equipamentos de segurança e guias experientes.</p>
                <a href="#" className="saiba-mais">Saiba mais</a>
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
              <ul>
                <li>Email: contato@essenciaviva.org</li>
                <li>Telefone: (11) 1234-5678</li>
                <li>Endereço: Av. Natureza, 123</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Redes Sociais</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Essência Viva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Activities;