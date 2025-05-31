// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  // Get the current year dynamically if you want it to update automatically
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer-section">
      <p>&copy; {currentYear} veera vikas. All Rights Reserved.</p>
      {/* Or if you prefer the static year as requested: */}
      {/* <p>&copy; 2025 veera vikas. All Rights Reserved.</p> */}
    </footer>
  );
};

export default Footer;