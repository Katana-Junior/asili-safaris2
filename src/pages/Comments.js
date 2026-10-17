import React from "react";
import "./styles/comments.css";
const feedbacks = [
  {
    id: 1,
    image: "/Assets/user1.jpg",
    name: "Raymond K.",
    comment: "Great safari experience!",
  },
  {
    id: 2,
    image: "/Assets/user2.jpg",
    name: "Aisha M.",
    comment: "The villas were amazing and the service was top-notch.",
  },
  {
    id: 3,
    image: "/Assets/user3.jpg",
    name: "John D.",
    comment: "I loved the wildlife and the guides were very knowledgeable.",
  },
  {
    id: 4,
    image: "/Assets/user4.jpg",
    name: "Sophia L.",
    comment: "A memorable experience with breathtaking views.",
  },
  {
    id: 5,
    image: "/Assets/user5.jpg",
    name: "Michael B.",
    comment: "The safari vehicles were comfortable and well-maintained.",
  },
];
const Comments = () => {
  return (
    <section className="comments-section">
      <h1 className="comments-title">"What Our Guests Say"</h1>
      <div className="comments-grid">
        {feedbacks.map((feedback) => (
          <article className="comment-card" key={feedback.id}>
            <img src={feedback.image} alt={feedback.name} />
            <h3 className="comment-name">{feedback.name}</h3>
            <p className="comment-text">{feedback.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Comments;
