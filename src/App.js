import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import logo from './assets/Logo.png';
import ParticleCanvas from './components/ParticleCanvas';
import './App.css'; // For layout styling

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <ParticleCanvas />

        <nav style={navWrapperStyle}>
          <div style={navInnerStyle}>
            <div style={leftSectionStyle}>
              <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="Logo" style={logoStyle} />
              </Link>
            </div>

            <ul style={ulStyle}>
              <li><Link to="/" style={linkStyle}>Home</Link></li>
              <li><Link to="/about" style={linkStyle}>About</Link></li>
              <li><Link to="/skills" style={linkStyle}>Skills</Link></li>
              <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
              <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
          </div>
        </nav>

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

// Navbar styles
const navWrapperStyle = {
  backgroundColor: '#0f0f0f',
  padding: '10px 0',
  position: 'sticky',
  top: 0,
  zIndex: 2,
};

const navInnerStyle = {
  maxWidth: '2000px',
  margin: '0 auto',
  padding: '0 40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  height: '40px',
  objectFit: 'contain',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '30px',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
};

export default App;
