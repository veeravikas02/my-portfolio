// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="heading-box projects-heading">Projects</h2>
        <div className="projects-grid">

          {/* Project 1: DDoS Detection and Prevention */}
          <div className="project-card">
            <h3>Detection and Prevention of Distributed Denial of Service (DDoS) (ML) <span className="project-year">(Sep 2023 - Feb 2024)</span></h3>
            <ul className="project-description-list">
              <li>Developed a machine learning model to detect and predict DDoS attacks targeting servers and data confidentiality.</li>
              <li>Preprocessed collected data and implemented algorithms like Random Forest, Logistic Regression, KNN, and SVC for accurate detection.</li>
              <li>Designed a system to continuously monitor and prevent unauthorized data distribution, enhancing security within organizations.</li>
            </ul>
            <div className="project-tech-stack">
              <span>Machine Learning</span>
              <span>Python</span>
              <span>Random Forest</span>
              <span>XGBoost</span>
              <span>Logistic Regression</span>
              <span>KNN</span>
              <span>SVC</span>
            </div>
            <div className="project-links">
              {/* This button now covers the full width */}
              <a href="https://github.com/veeravikas02/DDOS" target="_blank" rel="noopener noreferrer" className="project-link full-width-button">GitHub Repo</a>
            </div>
          </div>

          {/* Project 2: Iceberg Detection */}
          <div className="project-card">
            <h3>Iceberg Detection In Satellite Images Using IBM Watson Studio (AI) <span className="project-year">(Dec 2022 - April 2023)</span></h3>
            <ul className="project-description-list">
              <li>Designed an AI-based solution to classify SAR images as icebergs or ships with high accuracy.</li>
              <li>Built and trained machine learning models with feature extraction and data preprocessing.</li>
              <li>Developed a Python and Flask-based web interface for real-time image classification.</li>
            </ul>
            <div className="project-tech-stack">
              <span>AI</span>
              <span>Python</span>
              <span>Flask</span>
              <span>Machine Learning</span>
              <span>IBM Watson Studio</span>
            </div>
            <div className="project-links">
              {/* This button now covers the full width */}
              <a href="https://github.com/smartinternz02/SI-GuidedProject-460367-1679724955" target="_blank" rel="noopener noreferrer" className="project-link full-width-button">GitHub Repo</a>
            </div>
          </div>

          {/* Project 3: Wine Quality Prediction */}
          <div className="project-card">
            <h3>Wine Quality Prediction (ML) <span className="project-year">(Jun 2022 - Sep 2022)</span></h3>
            <ul className="project-description-list">
              <li>Developed a machine learning model to predict wine quality using physicochemical data.</li>
              <li>Utilized Random Forest and XGBoost algorithms for accurate predictions.</li>
              <li>Built a user-friendly web interface with Python, Flask, and HTML for model interaction.</li>
            </ul>
            <div className="project-tech-stack">
              <span>Machine Learning</span>
              <span>Python</span>
              <span>Flask</span>
              <span>HTML</span>
              <span>Random Forest</span>
              <span>XGBoost</span>
            </div>
            <div className="project-links">
              {/* This button now covers the full width */}
              <a href="https://github.com/smartinternz02/SI-GuidedProject-134038-1661498507" target="_blank" rel="noopener noreferrer" className="project-link full-width-button">GitHub Repo</a>
            </div>
          </div>

          {/* Project 4: My Portfolio (Currently under development) */}
          <div className="project-card">
            <h3>My Portfolio(Front-End project) <span className="project-year">(May 2025)</span></h3>
            <ul className="project-description-list">
              <li>Developing a personal portfolio website to showcase skills, projects, and professional experience.</li>
              <li>Implementing a responsive design for optimal viewing across various devices.</li>
              <li>Building interactive sections for Home, About, Skills, Projects, and Contact using React.</li>
            </ul>
            <div className="project-tech-stack">
              <span>ReactJS</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>UI/UX Design</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>Vite</span>
            </div>
            <div className="project-links">
              {/* This button now covers the full width */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="project-link full-width-button">GitHub Repo</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;