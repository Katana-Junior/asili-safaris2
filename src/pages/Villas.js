import React from "react";
import { Link } from "react-router-dom";
import "./styles/TravelCards.css";

const villas = [
  {
    name: "Savannah View Villa",
    location: "Maasai Mara",
    description:
      "Wake up to sweeping savannah views and enjoy a peaceful base for discovering Kenya's iconic wildlife.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Acacia Ridge Villa",
    location: "Amboseli",
    description:
      "Unwind in a tranquil retreat surrounded by open plains and unforgettable views of Mount Kilimanjaro.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lake Serenity Villa",
    location: "Naivasha",
    description:
      "Relax beside the Great Rift Valley lakes and explore the area's remarkable scenery and wildlife.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Coastal Breeze Villa",
    location: "Diani Beach",
    description:
      "Enjoy a laid-back coastal escape with soft white sands, ocean breezes, and time to recharge.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=900&q=80",
  },
];

const Villas = () => {
  return (
    <section className="travel-cards-section">
      <h2 className="travel-cards-title">Our Luxury Villas</h2>
      <p className="travel-cards-intro">
        Experience the comfort of a private retreat, with stays chosen to bring
        you closer to Kenya's landscapes and wildlife.
      </p>
      <div className="travel-cards-grid">
        {villas.map((villa) => (
          <article className="travel-card" key={villa.name}>
            <img
              className="travel-card-image"
              src={villa.image}
              alt={villa.name}
              loading="lazy"
            />
            <div className="travel-card-content">
              <h3 className="travel-card-name">{villa.name}</h3>
              <p className="travel-card-location">
                <svg
                  aria-hidden="true"
                  className="location-icon"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path
                    d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 
                  0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
                {villa.location}
              </p>
              <p className="travel-card-description">{villa.description}</p>
              <Link className="travel-card-button" to="/contacts">
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
