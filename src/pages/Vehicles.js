import React from "react";
import { Link } from "react-router-dom";
import "./styles/TravelCards.css";

const vehicles = [
  {
    name: "4x4 Safari Land Cruiser",
    capacity: "Up to 6 guests",
    description:
      "A capable, comfortable choice for game drives and journeys across Kenya's varied terrain.",
  },
  {
    name: "Safari Tour Van",
    capacity: "Up to 7 guests",
    description:
      "Enjoy a roomy ride with large windows for spotting wildlife along the way.",
  },
  {
    name: "Private Transfer Vehicle",
    capacity: "Small groups",
    description:
      "Travel between the airport, your accommodation, and safari destinations with ease.",
  },
  {
    name: "Group Safari Vehicle",
    capacity: "Larger groups",
    description:
      "A practical option for group adventures, with space for passengers and safari essentials.",
  },
];

const Vehicles = () => (
  <section className="travel-cards-section">
    <h2 className="travel-cards-title">Our Safari Vehicles</h2>
    <p className="travel-cards-intro">
      Find the right ride for your safari, from open-country game drives to
      comfortable transfers between destinations.
    </p>
    <div className="travel-cards-grid">
      {vehicles.map((vehicle) => (
        <article className="travel-card" key={vehicle.name}>
          <div
            className="travel-card-image-placeholder"
            role="img"
            aria-label={`Image coming soon: ${vehicle.name}`}
          >
            Image coming soon
          </div>
          <div className="travel-card-content">
            <h3 className="travel-card-name">{vehicle.name}</h3>
            <p className="travel-card-location">{vehicle.capacity}</p>
            <p className="travel-card-description">{vehicle.description}</p>
            <Link className="travel-card-button" to="/contacts">
              Enquire About a Vehicle
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Vehicles;
