import React from "react";
import { Link } from "react-router-dom";
import "./styles/TravelCards.css";

const guides = [
  {
    name: "Wildlife Safari Guide",
    location: "Maasai Mara",
    description:
      "Make the most of every game drive with expert wildlife spotting and insight into the rhythms of the savannah.",
    image: "guides coming soon",
  },
  {
    name: "Birding Guide",
    location: "Rift Valley Lakes",
    description:
      "Discover Kenya's remarkable birdlife, from colourful resident species to seasonal visitors.",
    image: "guides coming soon",
  },
  {
    name: "Cultural Guide",
    location: "Watamu & Malindi",
    description:
      "Connect with local stories, traditions, and communities for a more meaningful journey.",
    image: "guides coming soon",
  },
  {
    name: "Mountain Guide",
    location: "Mount Kenya",
    description:
      "Explore highland trails at your pace with support for a memorable mountain adventure.",
    image: "guides coming soon",
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
