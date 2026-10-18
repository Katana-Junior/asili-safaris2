import React from "react";
import { Link } from "react-router-dom";
import "./styles/TravelCards.css";
import KahindiImage from "./Assets/Kahindi.webp";
import AbubakarImage from "./Assets/Abubakar.avif";
import SafariImage from "./Assets/Safari.jpg";
import KengaImage from "./Assets/Kenga.jpg";

const guides = [
  {
    name: "Kahindi S",
    location: "Malindi",
    description:
      "A knowledgeable guide who can provide insights into the local culture and wildlife of Malindi.",
    image: KahindiImage,
  },
  {
    name: "Abubakar J",
    location: "Watamu",
    description:
      "Navigate the scenic coastline and hidden beaches with a guide who knows the best spots for snorkelling and swimming.",
    image: AbubakarImage,
  },
  {
    name: "Safari K",
    location: "Watamu & Malindi",
    description:
      "Experience the best of both worlds with a guide who knows the hidden gems of each location.",
    image: SafariImage,
  },
  {
    name: "Kenga M",
    location: "Jacaranda",
    description:
      "Enjoy a safe and comfortable safari experience with a guide who prioritizes your well-being.",
    image: KengaImage,
  },
];

const Guides = () => (
  <section className="travel-cards-section">
    <h2 className="travel-cards-title">Meet Our Safari Guides</h2>
    <p className="travel-cards-intro">
      Explore Kenya with knowledgeable local guides who bring its wildlife,
      landscapes, and culture to life.
    </p>
    <div className="travel-cards-grid">
      {guides.map((guide) => (
        <article className="travel-card" key={guide.name}>
          <img
            className="travel-card-image"
            src={guide.image}
            alt={guide.name}
            loading="lazy"
          />
          <div className="travel-card-content">
            <h3 className="travel-card-name">{guide.name}</h3>
            <p className="travel-card-location">
              <svg
                aria-hidden="true"
                className="location-icon"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
              </svg>
              {guide.location}
            </p>
            <p className="travel-card-description">{guide.description}</p>
            <Link className="travel-card-button" to="/contacts">
              Enquire Now
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Guides;
