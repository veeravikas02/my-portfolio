// src/components/Contact.jsx
import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaEnvelope, FaTelegramPlane } from 'react-icons/fa'; // Updated import

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="heading-box contact-heading">Contact Me</h2>

        <div className="contact-items">
          {/* WhatsApp / Mobile Number */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <FaWhatsapp className="contact-icon whatsapp-icon" />
            </div>
            <div className="contact-info">
              <h4>Mobile (WhatsApp)</h4>
              <a
                href="https://wa.me/9182364555"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                +91 9182364555
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <FaEnvelope className="contact-icon email-icon" />
            </div>
            <div className="contact-info">
              <h4>Email</h4>
              <a
                href="mailto:gudiseveeravikas.2002@gmail.com"
                className="contact-link"
              >
                gudiseveeravikas.2002@gmail.com
              </a>
            </div>
          </div>

          {/* Telegram */}
          <div className="contact-item">
            <div className="contact-icon-box">
              <FaTelegramPlane className="contact-icon telegram-icon" /> {/* Changed icon and class */}
            </div>
            <div className="contact-info">
              <h4>Telegram</h4> {/* Changed heading */}
              <a
                href="https://t.me/Veeravikas02" // <--- IMPORTANT: Replace with your Telegram username
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-button" // Changed class
              >
                <FaTelegramPlane className="button-icon" /> Message on Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;