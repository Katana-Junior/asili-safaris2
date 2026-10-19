import { useState } from "react";
import lionImage from "./Assets/lion.jpg";
import elephantImage from "./Assets/Elephant.jpg";
import rhinoImage from "./Assets/rhino.jpg";
import leopardImage from "./Assets/leopard.jpg";
import buffaloImage from "./Assets/buffalo.jpg";
import "./styles/bigfive.css";

const cardData = [
  {
    name: "Lion",
    description:
      "The lion, known as the 'king of the jungle,' is a symbol of strength and courage. Spotting a pride of lions in the wild is a breathtaking experience.",
    image: lionImage,
  },
  {
    name: "Elephant",
    description:
      "The elephant is the largest land animal and is known for its intelligence and social behavior. Observing elephants in their natural habitat is a humbling experience.",
    image: elephantImage,
  },
  {
    name: "Rhino",
    description:
      "The rhinoceros is a powerful and formidable creature with a distinctive horn. Encountering a rhino in the wild is an unforgettable moment.",
    image: rhinoImage,
  },
  {
    name: "Leopard",
    description:
      "The leopard is a stealthy and agile predator, known for its spotted coat and incredible climbing abilities. Spotting a leopard in the wild is a rare and exciting sight.",
    image: leopardImage,
  },
  {
    name: "Buffalo",
    description:
      "The buffalo is a large and powerful herbivore, known for its strength and defensive behavior. Observing buffaloes in their natural habitat is a thrilling experience.",
    image: buffaloImage,
  },
];

export default function Bigfive() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex((index + cardData.length) % cardData.length);
  };

  return (
    <section className="bigfive-section" aria-labelledby="bigfive-title">
      <header className="bigfive-header">
        <p className="bigfive-eyebrow">Wildlife of East Africa</p>
        <h1 className="bigfive-title" id="bigfive-title">
          Meet the Big Five
        </h1>
        <p className="bigfive-intro">
          Discover five of Africa&apos;s most remarkable animals and the magic
          of seeing them in the wild.
        </p>
      </header>

      <div className="carousel" aria-roledescription="carousel">
        <div className="carousel-track">
          {cardData.map((card, index) => (
            <article
              key={card.name}
              className={`carousel-card ${index === currentIndex ? "active" : ""}`}
              aria-label={`${index + 1} of ${cardData.length}: ${card.name}`}
              aria-hidden={index !== currentIndex}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="carousel-image"
                loading={index === currentIndex ? "eager" : "lazy"}
              />
              <div className="carousel-content">
                <p className="carousel-count">
                  0{index + 1} <span>/ 0{cardData.length}</span>
                </p>
                <h2 className="carousel-title">{card.name}</h2>
                <p className="carousel-description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-button"
            type="button"
            aria-label="Previous animal"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span aria-hidden="true">&larr;</span>
          </button>
          <p className="carousel-position" aria-live="polite">
            {String(currentIndex + 1).padStart(2, "0")}
            <span> / {String(cardData.length).padStart(2, "0")}</span>
          </p>
          <button
            className="carousel-button"
            type="button"
            aria-label="Next animal"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
