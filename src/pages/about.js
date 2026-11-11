import React from "react";
import { Link } from "react-router-dom";
import "./styles/about.css";
import aboutImage from "./Assets/about-elephant.jpg";

const About = () => (
  <div className="about-page">
    <section className="intro-text" aria-labelledby="about-title">
      <div className="about-hero-content">
        <p className="about-eyebrow">Asili Safaris · Kenya</p>
        <h1 id="about-title">We love adventure</h1>
        <p>
          The best journeys bring you closer to the wild, the people, and the
          places that make East Africa unforgettable.
        </p>
      </div>
    </section>

    <section className="about-story" aria-labelledby="story-title">
      <div className="about-story-copy">
        <p className="about-eyebrow">Our story</p>
        <h2 id="story-title">A safari that stays with you</h2>
        <p>
          At Asili Safaris, we believe every journey is a chance to experience
          Kenya in a more meaningful way. From open savannahs and remarkable
          wildlife to the warmth of local culture, we help you discover the
          details that make a trip your own.
        </p>
        <p>
          Whether you are planning your first game drive or returning for a new
          adventure, our team is here to make the planning feel easy and the
          memories last long after you get home.
        </p>
        <Link className="about-cta" to="/contacts">
          Plan your safari
        </Link>
      </div>
      <img
        className="about-story-image"
        src={aboutImage}
        alt="An elephant in its natural habitat"
      />
    </section>

    <section className="about-values" aria-labelledby="values-title">
      <p className="about-eyebrow">The Asili experience</p>
      <h2 id="values-title">Made for the way you want to explore</h2>
      <div className="about-values-grid">
        <article className="about-value">
          <span className="about-value-number" aria-hidden="true">01</span>
          <h3>Wildlife up close</h3>
          <p>
            Discover Kenya’s diverse landscapes and wildlife at a pace that
            leaves room for the unexpected.
          </p>
        </article>
        <article className="about-value">
          <span className="about-value-number" aria-hidden="true">02</span>
          <h3>Journeys with care</h3>
          <p>
            Thoughtful planning helps you spend less time worrying about
            details and more time enjoying the journey.
          </p>
        </article>
        <article className="about-value">
          <span className="about-value-number" aria-hidden="true">03</span>
          <h3>Your kind of adventure</h3>
          <p>
            From a short escape to a longer expedition, make the experience
            your own.
          </p>
        </article>
      </div>
    </section>
  </div>
);

export default About;
