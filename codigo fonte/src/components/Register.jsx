import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import logoImage from '../assets/logo.png';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!userType) {
      newErrors.userType = 'Tipo de usuário é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Aqui você implementaria a lógica de cadastro
      console.log('Cadastro com:', name, email, password, userType);
      // Redirecionar para a página de login após o cadastro
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <div className="register-logo">
          <img src={logoImage} alt="Essência Viva" />
          <h1>Essência Viva</h1>
          <p className="slogan">Reconecte-se com a natureza</p>
        </div>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="userType">Tipo de usuário</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className={errors.userType ? 'input-error' : ''}
            >
              <option value="">Selecione um tipo</option>
              <option value="instrutor">Instrutor</option>
              <option value="aluno">Aluno</option>
              <option value="administrador">Administrador</option>
            </select>
            {errors.userType && <span className="error-message">{errors.userType}</span>}
          </div>
          
          <button type="submit" className="register-button">Criar conta</button>
          
          <p className="login-link">
            Já tem uma conta? <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Entrar</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;