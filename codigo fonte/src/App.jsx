import './App.css'
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Activities from './components/Activities'
import Conservacao from './components/Conservacao'
import Educacao from './components/Educacao'
import Pesquisa from './components/Pesquisa'
import Mapa from './components/Mapa';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBE0yjTiHpeFJit4A-jWudhTUgtkQtPWw0",
  authDomain: "essencia-viva-39f2d.firebaseapp.com",
  projectId: "essencia-viva-39f2d",
  storageBucket: "essencia-viva-39f2d.firebasestorage.app",
  messagingSenderId: "838053589165",
  appId: "1:838053589165:web:5929d033975725e43f9624",
  measurementId: "G-KK05EE6F2K"
};

initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/conservacao" element={<Conservacao />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </Routes>
      <div className="mapa-container">
        <h1>Mapa Interativo</h1>
        <Mapa />
      </div>
    </Router>
  )
}

export default App

