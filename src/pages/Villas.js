import React from "react";
import { Link } from "react-router-dom";
import "./styles/Villas.css";

const villas = [
  {
    name: "Savannah View Villa",
    location: "Maasai Mara",
    description:
      "Wake up to sweeping savannah views and enjoy a peaceful base for discovering Kenya's iconic wildlife.",
  },
  {
    name: "Acacia Ridge Villa",
    location: "Amboseli",
    description:
      "Unwind in a tranquil retreat surrounded by open plains and unforgettable views of Mount Kilimanjaro.",
  },
  {
    name: "Lake Serenity Villa",
    location: "Naivasha",
    description:
      "Relax beside the Great Rift Valley lakes and explore the area's remarkable scenery and wildlife.",
  },
  {
    name: "Coastal Breeze Villa",
    location: "Diani Beach",
    description:
      "Enjoy a laid-back coastal escape with soft white sands, ocean breezes, and time to recharge.",
  },
];

const Villas = () => {
  return (
    <section className="villas-section">
      <h2 className="villas-title">Our Luxury Villas</h2>
      <p className="villas-intro">
        Experience the comfort of a private retreat, with stays chosen to bring
        you closer to Kenya's landscapes and wildlife.
      </p>
      <div className="villas-grid">
        {villas.map((villa) => (
          <article className="villa-card" key={villa.name}>
            <div
              className="villa-image-placeholder"
              role="img"
              aria-label={`Image coming soon: ${villa.name}`}
            >
              Image coming soon
            </div>
            <div className="villa-card-content">
              <h3 className="villa-name">{villa.name}</h3>
              <p className="villa-location">
                <svg
                  aria-hidden="true"
                  className="location-icon"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
                </svg>
                {villa.location}
              </p>
              <p className="villa-description">{villa.description}</p>
              <Link className="villa-book-button" to="/contacts">
                Book Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Villas;
