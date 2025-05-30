import React from 'react';
import './Skills.css';
import { 
  FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap, FaPython, FaJava,
  FaChartBar, FaProjectDiagram
} from 'react-icons/fa';

import { 
  SiJquery, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiNextdotjs, SiAngular,
  SiTensorflow, SiKeras, SiR
} from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, label: 'HTML5' },
  { icon: <FaCss3Alt />, label: 'CSS3' },
  { icon: <FaJsSquare />, label: 'JavaScript' },
  { icon: <SiJquery />, label: 'JQuery' },
  { icon: <FaReact />, label: 'React' },
  { icon: <SiAngular />, label: 'Angular' },
  { icon: <SiTypescript />, label: 'TypeScript' },
  { icon: <SiNextdotjs />, label: 'NextJs' },
  { icon: <FaNodeJs />, label: 'NodeJs' },
  { icon: <SiMysql />, label: 'MySQL' },
  { icon: <SiMongodb />, label: 'MongoDB' },
  { icon: <FaBootstrap />, label: 'Bootstrap' },
  { icon: <SiTailwindcss />, label: 'Tailwind' },
  { icon: <FaPython />, label: 'Python' },
  { icon: <FaJava />, label: 'Java' },

  // Added Skills Below:
  { icon: <SiR />, label: 'R Programming' },
  { icon: <SiTensorflow />, label: 'Machine Learning' },
  { icon: <SiKeras />, label: 'Deep Learning' },
  { icon: <FaChartBar />, label: 'Power BI' },
  { icon: <FaChartBar />, label: 'Statistical Analysis' },
  { icon: <FaChartBar />, label: 'Data Wrangling' },
  { icon: <FaProjectDiagram />, label: 'Data Structures' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon">{skill.icon}</div>
            <p className="skill-label">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

