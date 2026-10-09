import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            <FaFacebookF aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/AsiliSafaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://x.com/AsiliSafaris"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>
        </div>
        <div className="partner-header">Our Partners</div>
        <div className="partners">
          <a className="partner-link" href="https://www.tripadvisor.com/">
            TripAdvisor
          </a>
          <a className="partner-link" href="https://www.pollmans.com/">
            Pollman
          </a>
        </div>
        <p>&copy; 2026 Asili Safaris. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
