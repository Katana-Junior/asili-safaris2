import React from "react";
import "./styles/Home.css";
import logo from "../logos/asililogo.png";

const Home = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Asili Safaris Logo" className="logo" />
      </div>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="slogan">Explore Beyond Infinity</h1>
          <p className="home-description">
            Discover the beauty of Africa with Asili Safaris. We offer
            unforgettable safari experiences that connect you with nature and
            wildlife.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
