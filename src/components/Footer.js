import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Learning Never Stops. Neither Do I.</p>
      <div className="social-links">
        <a href="mailto:bandvalkarsayali27@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope style={{ marginRight: '8px' }} />
          Gmail
        </a>
        <a href="https://www.linkedin.com/in/sayali-bandvalkar-76971b363" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </a>
        <a href="https://github.com/SayaliBandvalkar" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ marginRight: '8px' }} />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
