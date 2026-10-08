import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/about" className="footer-link">
            About us
          </a>
          <a href="/events" className="footer-link">
            Events
          </a>
          <a href="/contacts" className="footer-link">
            Contacts
          </a>
          <a href="/villas" className="footer-link">
            Villas
          </a>
          <a href="/vehicles" className="footer-link">
            Vehicles
          </a>
          <a href="/guides" className="footer-link">
            Guides
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/AsiliSafaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/AsiliSafaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/AsiliSafaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; 2026 Asili Safaris. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
