import React from 'react';
import { FaGithub } from 'react-icons/fa';
import sentimentAnalysisImg from '../assets/sentiment-analysis.png';
import IoDoListImg from '../assets/To-Do-List.png';
import responsivePortfolioImg from '../assets/responsive-portfolio.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Sentiment Analysis on Social Media',
    description: 'Analyze sentiments from social media posts using machine learning.',
    imageUrl: sentimentAnalysisImg,
    githubLink: 'https://sayalibandvalkar.github.io/twitter-sentiment-analysis/',
  },
  {
    id: 2,
    title: 'To-Do-List',
    description: 'A simple and interactive To-Do List app that lets users add, edit, delete, and complete tasks with prioritization, filtering, and due date management for better productivity.',
    imageUrl: IoDoListImg,
    githubLink: ' https://sayalibandvalkar.github.io/To-Do-List/',
  },
  {
    id: 3,
    title: 'Responsive Portfolio',
    description: 'My personal portfolio made with HTML, CSS, JavaScript. and React',
    imageUrl: responsivePortfolioImg,
    githubLink: 'https://github.com/SayaliBandvalkar/responsive-portfolio',
  },
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projects.map(({ id, title, description, imageUrl, githubLink }) => (
          <div className="project-card" key={id}>
            <img src={imageUrl} alt={`${title} screenshot`} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub size={24} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
