import React, { useState, useEffect } from "react";
import "./styles/comments.css";
import { FaQuoteLeft } from "react-icons/fa";
import raymondImage from "./Assets/Raymond.jpg";
import aishaImage from "./Assets/Aisha.avif";
import johnImage from "./Assets/John.jpg";
import sophiaImage from "./Assets/Sophia.jpg";
import michaelImage from "./Assets/Michael.jpg";

const feedbacks = [
  {
    id: 1,
    image: raymondImage,
    name: "Raymond K.",
    comment: "Great safari experience!",
  },
  {
    id: 2,
    image: aishaImage,
    name: "Aisha M.",
    comment: "The villas were amazing and the service was top-notch.",
  },
  {
    id: 3,
    image: johnImage,
    name: "John D.",
    comment: "I loved the wildlife and the guides were very knowledgeable.",
  },
  {
    id: 4,
    image: sophiaImage,
    name: "Sophia L.",
    comment: "A memorable experience with breathtaking views.",
  },
  {
    id: 5,
    image: michaelImage,
    name: "Michael B.",
    comment: "The safari vehicles were comfortable and well-maintained.",
  },
];

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoSlide = (index) => {
    setCurrentIndex((index + feedbacks.length) % feedbacks.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeFeedback = feedbacks[currentIndex];

  return (
    <section className="comments-section">
      <h1 className="comments-title">What Our Guests Say</h1>
      <div className="comments-grid">
        <article className="comment-card" key={activeFeedback.id}>
          <img
            className="comment-image"
            src={activeFeedback.image}
            alt={activeFeedback.name}
          />
          <h3 className="comment-name">{activeFeedback.name}</h3>
          <p className="comment-text">
            <FaQuoteLeft />
            {activeFeedback.comment}
          </p>
        </article>
      </div>

      <button className="btn prev-btn" onClick={prevSlide} aria-label="Previous testimonial">
        &#10094;
      </button>
      <button className="btn next-btn" onClick={nextSlide} aria-label="Next testimonial">
        &#10095;
      </button>

      <div className="indicators">
        {feedbacks.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => gotoSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Comments;
