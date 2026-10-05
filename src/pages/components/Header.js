import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/asililogo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" aria-label="Asili Safaris home">
        <img src={logo} alt="Asili Safaris Logo" className="logo" />
      </Link>
      <nav className="header-navigation" aria-label="Main navigation">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/events" className="nav-link">
          Events
        </Link>
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>
      </nav>
      <Link className="book-now-button" to="/contacts">
        Book Now
      </Link>
    </header>
  );
};

export default Header;
