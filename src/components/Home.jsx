// src/components/Home.jsx
import React from 'react';
import './Home.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import myImage from '../assets/mydp.jpeg'; // Replace with your image path

const Home = () => {
  return (
    <section className="home-section" id="home"> {/* Added id="home" for header navigation */}
      <div className="home-container">
        <img src={myImage} alt="My Profile" className="profile-img" />
        <div className="home-content-wrapper"> {/* New wrapper for text and social */}
          <div className="home-text">
            <h1>Bachelor Of Engineering</h1>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/veeravikas.gudise?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/gudise-veera-vikas-627383254/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/vikki_2_vikki/?igsh=ZndjcTEyOGk5cXdn&utm_source=qr#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/veeravikas02" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/vikasvi39098182?s=11" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;