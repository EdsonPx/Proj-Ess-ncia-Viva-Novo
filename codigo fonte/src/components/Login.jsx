import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import logoImage from '../assets/logo.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de autenticação
    console.log('Login com:', email, password);
    
    // Simulando um login bem-sucedido
    alert('Login realizado com sucesso!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-logo">
          <img src={logoImage} alt="Essência Viva" />
          <h1>Essência Viva</h1>
          <p className="slogan">Reconecte-se com a natureza</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">Entrar</button>
          
          <p className="register-link">
            Não tem uma conta? <a href="/register">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;