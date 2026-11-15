import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/asililogo.png";
import "../styles/Header.css";

const Header = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      window.googleTranslateElement =
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,sw,de,pl,it",
            autoDisplay: false,
          },
          "google_translate_element",
        );

      window.setTimeout(() => {
        const translateSelect = document.querySelector(".goog-te-combo");
        const selectedLanguage = document.getElementById("language-select");

        if (translateSelect && selectedLanguage) {
          translateSelect.value =
            selectedLanguage.value === "en" ? "" : selectedLanguage.value;
          translateSelect.dispatchEvent(new Event("change"));
        }
      }, 0);
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Google Translate could not be loaded.");
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    const translateSelect = document.querySelector(".goog-te-combo");
    if (translateSelect) {
      translateSelect.value = selectedLanguage === "en" ? "" : selectedLanguage;
      translateSelect.dispatchEvent(new Event("change"));
    }
  };

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
        <Link to="/bigfive" className="nav-link">
          Big Five
        </Link>
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>
      </nav>
      <Link className="book-now-button" to="/contacts">
        Book Now
      </Link>
      <label className="language-selector">
        <span className="visually-hidden">Select language</span>
        <select
          id="language-select"
          aria-label="Select language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="sw">Swahili</option>
          <option value="de">German</option>
          <option value="pl">Polish</option>
          <option value="it">Italian</option>
        </select>
      </label>
      <div id="google_translate_element" className="google-translate-container" />
    </header>
  );
};

export default Header;
