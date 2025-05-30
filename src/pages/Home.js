import React, { useEffect, useState } from 'react';
import './Home.css';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/sayali_resume_DS.pdf';
import Certifications from '../pages/Certifications';
import ParticleCanvas from '../components/ParticleCanvas'; // Custom particle background

const titles = ['Data Scientist', 'Frontend Developer', 'Fullstack Developer'];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [showCerts, setShowCerts] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ParticleCanvas /> {/* Particle Background */}

      <div className="container">
        <div className="text-side">
          <h4 className="hello">HELLO!</h4>
          <h1 className="main-heading">I Am Sayali Bandvalkar</h1>
          <div key={index} className="dynamic-title">{titles[index]}</div>

          <div className="buttons">
            <button className="btn view" onClick={() => setShowCerts(true)}>
              Certifications
            </button>

            <a href={resumeFile} download="Sayali_Bandvalkar_Resume.pdf">
              <button className="btn hire">Resume Download</button>
            </a>
          </div>
        </div>

        <div className="image-side">
          <img src={profileImg} alt="Sayali Bandvalkar" />
        </div>

        {showCerts && <Certifications onClose={() => setShowCerts(false)} />}
      </div>
    </>
  );
};

export default Home;
