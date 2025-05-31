// src/components/Skills.jsx
import React from 'react';
import './Skills.css';
// General section icons
import { FaLaptopCode, FaServer, FaDatabase, FaBrain, FaCode, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
// Specific technology icons from Font Awesome (these do not require additional installations)
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava, FaPython } from 'react-icons/fa';

// Import the new image logos (YOU NEED TO PLACE THESE FILES IN src/assets/)
import mysqlLogo from '../assets/mysql_logo.png'; // Example path, adjust if your filename is different
import springbootLogo from '../assets/springboot_logo.png'; // Example path
import viteLogo from '../assets/vite_logo.jpg'; // Example path


const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="heading-box">Skills</h2>

        <div className="main-skills-grid">
          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <h3>Web Development</h3>
            <ul>
              <li><FaHtml5 className="tech-icon" /> HTML</li>
              <li><FaCss3Alt className="tech-icon" /> CSS</li>
              <li><FaJsSquare className="tech-icon" /> JavaScript</li>
              <li><FaReact className="tech-icon" /> ReactJS</li>
            </ul>
          </div>

          <div className="skill-card">
            <FaServer className="skill-icon" />
            <h3>Backend</h3>
            <ul>
              <li><FaJava className="tech-icon" /> Java</li>
              <li><FaPython className="tech-icon" /> Python</li>
              <li><img src={springbootLogo} alt="Spring Boot Logo" className="tech-image" /> Spring Boot</li> {/* Using image */}
            </ul>
          </div>

          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>Database</h3>
            <ul>
              <li><img src={mysqlLogo} alt="MySQL Logo" className="tech-image" /> MySQL</li> {/* Using image */}
            </ul>
          </div>
        </div>

        <h2 className="heading-box additional-skills-heading">Additional Skills</h2>
        <div className="additional-skills-content">
          <div className="additional-skill-item">
            <h4>Machine Learning</h4>
            <p>
              Developed machine learning models for tasks like wine quality prediction using physicochemical data, leveraging
              algorithms such as Random Forest and XGBoost. Also contributed to DDoS attack detection and prediction by
              implementing algorithms like Random Forest, Logistic Regression, KNN, and SVC.
            </p>
          </div>
          <div className="additional-skill-item">
            <h4>Artificial Intelligence</h4>
            <p>
              Designed AI-based solutions for image classification, specifically for classifying SAR images as icebergs or ships.
              This involved building and training machine learning models with feature extraction and data preprocessing,
              and developing Python and Flask-based web interfaces for real-time classification.
            </p>
          </div>
        </div>

        <h2 className="heading-box tools-heading">Tools</h2>
        <div className="tools-icons">
          <div className="tool-item">
            <FaCode className="tool-icon" />
            <p>VS Code</p>
          </div>
          <div className="tool-item">
            <FaGitAlt className="tool-icon" />
            <p>Git</p>
          </div>
          <div className="tool-item">
            <FaGithub className="tool-icon" />
            <p>GitHub</p>
          </div>
          <div className="tool-item">
            <img src={viteLogo} alt="Vite Logo" className="tool-image" /> {/* Using image */}
            <p>Vite</p>
          </div>
          <div className="tool-item">
            <FaFigma className="tool-icon" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;