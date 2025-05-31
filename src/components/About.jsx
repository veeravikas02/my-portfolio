// src/components/About.jsx
import React from 'react';
import './About.css';

// Import your college/school logos
// IMPORTANT: Ensure these image files exist in your src/assets/ folder
import sathyabamaLogo from '../assets/sathyabama_logo.png';
import narayanaJuniorLogo from '../assets/narayana_junior_logo.png';
import narayanaSchoolLogo from '../assets/narayana_school_logo.png';

const About = () => {
  // Define your updated education data
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      collegeLogo: sathyabamaLogo,
      collegeName: 'Sathyabama University',
      year: '2020 - 2024',
      grade: '8.3 CGPA',
    },
    {
      id: 2,
      degree: 'Intermediate',
      collegeLogo: narayanaJuniorLogo,
      collegeName: 'Narayana Junior College',
      year: '2018 - 2020',
      grade: '7.67 CGPA',
    },
    {
      id: 3,
      degree: 'High School',
      collegeLogo: narayanaSchoolLogo,
      collegeName: 'Narayana E-Techno School',
      year: '2008 - 2018',
      grade: '9.3 CGPA',
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-me-box">
          <h2 className="heading-box">About Me</h2> {/* Added heading-box class */}
          <div className="about-description">
            {/* You can write your main "About Me" description here. */}
            <p>I’m Gudise Veera Vikas, a passionate Web Developer from Kakinada, Andhra Pradesh, with a strong foundation in Full Stack Development. I hold a B.E. in Computer Science from Sathyabama University, Chennai, and have hands-on experience building real-time projects using AI/ML and web technologies.
I’m skilled in Java, Python, ReactJS, and MySQL, and I enjoy crafting responsive, user-friendly, and scalable applications. My academic and project experiences have equipped me to solve real-world problems with technical precision and creative thinking.
I’m a quick learner, a strong team player, and highly adaptable to fast-paced tech environments. Currently, I’m actively seeking challenging opportunities where I can contribute meaningfully, grow continuously, and build a successful career in the IT industry.
            </p>
          </div>

          <div className="education-section">
            <h3 className="heading-box">Education</h3> {/* Added heading-box class */}
            <div className="education-grid">
              {educationData.map((edu) => (
                <div key={edu.id} className="education-card">
                  <h4 className="degree-name">
                    {edu.degree}
                  </h4>
                  <p className="college-info">
                    <span>College:</span> <img src={edu.collegeLogo} alt={`${edu.collegeName} Logo`} className="college-logo" /> {edu.collegeName} {/* Logo position changed */}
                  </p>
                  <p className="year-info">Year: {edu.year}</p>
                  <p className="grade-info">Grade: {edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-download">
            {/* Make sure your resume PDF is in the public/ folder */}
            <a href="/my_resume.pdf" download="Gudise_Veera_Vikas_Resume.pdf" className="resume-button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;