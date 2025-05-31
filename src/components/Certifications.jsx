// src/components/Certifications.jsx
import React from 'react';
import './Certifications.css';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di'; // Icon for SQL

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        <h2 className="heading-box certifications-heading">Certifications</h2>

        <div className="certification-card">
          <div className="certification-details">
            <h3>CVCORP Training Program</h3>
            <p className="certification-issuer">Issued by: CVCORP (CV Corporate Services Private Limited)</p>
            <p className="certification-duration">Duration: November 20, 2024 - February 24, 2025</p>
            <p className="certification-description">
              Successfully completed a comprehensive training program focusing on core programming and database fundamentals.
            </p>
          </div>

          <div className="certification-skills">
            <h4>Skills Acquired:</h4>
            <ul className="skills-list">
              <li><FaJava className="skill-icon" /> Core Java</li>
              <li><FaJava className="skill-icon" /> Advanced Java</li>
              <li><DiMysql className="skill-icon" /> SQL</li>
              <li><FaHtml5 className="skill-icon" /> HTML</li>
              <li><FaCss3Alt className="skill-icon" /> CSS</li>
            </ul>
          </div>

          <div className="certification-actions">
            <a
              href="https://www.dropbox.com/scl/fi/i7dvyg37jo3rnfk9xz0ax/Gudise-veera-vikas.pdf?rlkey=h1q97ou0ciw5g2chqjdhiiwzn&st=58k0mrax&dl=0" // REPLACE THIS WITH your actual Dropbox link
              target="_blank"
              rel="noopener noreferrer"
              className="certification-button"
            >
              View Certificate
            </a>
          </div>
        </div>

        {/* You can add more certification cards here if you have more */}

      </div>
    </section>
  );
};

export default Certifications;