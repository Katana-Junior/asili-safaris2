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
        <div className="home-card">
          <h2 className="home-description">ASILI SAFARIS, KENYA</h2>
          <p className="home-intro">
            Jambo,welcome to Kenya,a land beauty,adventure and unforgetable
            experiences.Travel with us and explore the wonders of Kenya, from
            the vast savannahs to the majestic mountains,from the rich culture
            to the diverse wildlife and beautiful beaches. Join us for a journey
            of a lifetime and create memories that will last forever.
          </p>
          <p className="home-quote">"Lets explore beyond our imaginations"</p>
        </div>
        <villas />
      </div>
    </>
  );
};

export default Home;
