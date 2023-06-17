import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://example.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://example.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://example.com">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="footer-text">&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
