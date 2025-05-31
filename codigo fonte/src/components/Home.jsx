import { useState } from 'react';
import '../styles/Home.css';
import logoImage from '../assets/logo.png';
import conservacaoImg from '../assets/conservaçao.jpg';
import educacaoImg from '../assets/educaçao.jpg';
import pesquisaImg from '../assets/pesquisa.jpg';
import historiaImg from '../assets/historia.jpg';
import cliente1Img from '../assets/ana.jpg';
import cliente2Img from '../assets/carlos.jpg';
import cliente3Img from '../assets/mariana.jpg';
import estrelaImg from '../assets/estrela.svg';
import { Link } from 'react-router-dom';

function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você implementaria a lógica de envio do formulário
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Reconecte-se com a natureza e viva plenamente</h1>
          <p>Descubra atividades que revitalizam seu corpo e mente. Junte-se a nós e explore a beleza do mundo natural.</p>
          <div className="hero-buttons">
            <a href="#" className="cta-button">Explorar</a>
            <Link to="/activities" className="cta-button">Ver Atividades</Link>
          </div>
        </div>
      </section>



      {/* Departamentos Section */}
      <section id="departamentos" className="section departamentos-section">
        <div className="section-container">
          <h2 className="section-title">Departamentos</h2>
          <div className="departamentos-grid">
            <Link to="/conservacao" className="departamento-card" style={{ backgroundImage: `url(${conservacaoImg})` }}>
              <div className="departamento-content">
                <div className="departamento-icon">
                  <img src="https://via.placeholder.com/100" alt="Conservação" />
                </div>
                <h3>Conservação</h3>
                <p>Proteção e restauração de ecossistemas naturais.</p>
              </div>
            </Link>
            <Link to="/educacao" className="departamento-card" style={{ backgroundImage: `url(${educacaoImg})` }}>
              <div className="departamento-content">
                <div className="departamento-icon">
                  <img src="https://via.placeholder.com/100" alt="Educação" />
                </div>
                <h3>Educação</h3>
                <p>Programas educacionais sobre meio ambiente e sustentabilidade.</p>
              </div>
            </Link>
            <Link to="/pesquisa" className="departamento-card" style={{ backgroundImage: `url(${pesquisaImg})` }}>
              <div className="departamento-content">
                <div className="departamento-icon">
                  <img src="https://via.placeholder.com/100" alt="Pesquisa" />
                </div>
                <h3>Pesquisa</h3>
                <p>Estudos científicos para conservação da biodiversidade.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="section historia-section">
        <div className="section-container">
          <div className="historia-content">
            <div className="historia-text">
              <h2 className="section-title">Descubra a história do nosso projeto</h2>
              <p>A Essência Viva nasceu da paixão de um grupo de ambientalistas determinados a fazer a diferença. Nossa jornada começou com pequenas ações locais e cresceu para se tornar uma organização dedicada à proteção ambiental e educação sustentável.</p>
              <p>Ao longo dos anos, temos trabalhado incansavelmente para preservar áreas naturais, promover práticas sustentáveis e inspirar as comunidades a se reconectarem com a natureza.</p>
              <a href="#" className="saiba-mais">Conheça nossa história completa</a>
            </div>
            <div className="historia-image">
              <img src={historiaImg} alt="Nossa História" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="section depoimentos-section">
        <div className="section-container">
          <h2 className="section-title">Depoimentos de Clientes</h2>
          
          <div className="depoimentos-grid">
            <div className="depoimento-card">
              <div className="depoimento-texto">
                <p>"As atividades me ajudaram a reconectar com a natureza!"</p>
              </div>
              <div className="depoimento-perfil">
                <div className="depoimento-foto">
                  <img src={cliente1Img} alt="Ana Oliveira" />
                </div>
                <div className="depoimento-info">
                  <h4>Ana Oliveira</h4>
                  <p>Instrutora de Caminhadas</p>
                  <div className="depoimento-estrelas">
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="depoimento-card">
              <div className="depoimento-texto">
                <p>"Incrível como a natureza pode nos inspirar!"</p>
              </div>
              <div className="depoimento-perfil">
                <div className="depoimento-foto">
                  <img src={cliente2Img} alt="Carlos Silva" />
                </div>
                <div className="depoimento-info">
                  <h4>Carlos Silva</h4>
                  <p>Instrutor</p>
                  <div className="depoimento-estrelas">
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="depoimento-card">
              <div className="depoimento-texto">
                <p>"Uma experiência única que recomendo a todos!"</p>
              </div>
              <div className="depoimento-perfil">
                <div className="depoimento-foto">
                  <img src={cliente3Img} alt="Mariana Costa" />
                </div>
                <div className="depoimento-info">
                  <h4>Mariana Costa</h4>
                  <p>Psicóloga Exploradora</p>
                  <div className="depoimento-estrelas">
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                    <img src={estrelaImg} alt="Estrela" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section contato-section">
        <div className="section-container">
          <h2 className="section-title">Entre em contato</h2>
          <div className="contato-content">
            <form onSubmit={handleSubmit} className="contato-form">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>

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

export default Home;