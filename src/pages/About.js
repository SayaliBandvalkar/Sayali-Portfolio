import React from 'react';
import './About.css';
import { FaLanguage, FaHeart } from 'react-icons/fa';
import { GiCricketBat, GiMusicalNotes } from 'react-icons/gi';
import profileImg from '../assets/profile.png'; // Adjust path as needed

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <h1 className="about-heading">About Me</h1>

        <p className="about-paragraph">
          I am Sayali Manohar Bandvalkar, a Data Scientist passionate about leveraging analytical,
          programming, and problem-solving skills to create innovative data-driven solutions. I aim to
          contribute meaningfully to an organization's success while continuously learning and applying
          new technologies. By focusing on delivering actionable insights through data-driven solutions,
          I am committed to growing as a valuable data scientist and contributing meaningfully to the
          broader data science community.
        </p>

        <h2 className="about-section-title"><FaHeart style={{ marginRight: '8px' }} /> Interests</h2>
        <ul className="about-list">
          <li><GiCricketBat /> Cricket & Tug of War – awarded</li>
          <li><GiMusicalNotes /> Enjoy listening to music</li>
        </ul>

        <h2 className="about-section-title"><FaLanguage style={{ marginRight: '8px' }} /> Languages</h2>
        <ul className="about-list">
          <li><FaLanguage /> English</li>
          <li><FaLanguage /> Marathi</li>
          <li><FaLanguage /> Hindi</li> 
        </ul>
      </div>

      <div className="about-image">
        <img src={profileImg} alt="Sayali Bandvalkar" />
      </div>
    </div>
  );
};

export default About;
