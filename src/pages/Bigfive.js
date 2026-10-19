import React from "react";
import React (useState) from "react";
import React (useEffect) from "react";
import lionImage



const bigFiveAnimals = [
  {
    name: "Lion",
    description:
      "The lion, known as the 'king of the jungle,' is a symbol of strength and courage. Spotting a pride of lions in the wild is a breathtaking experience.",
    image: "path/to/lion-image.jpg"
  },
  {
    name: "Elephant",
    description:
      "The elephant is the largest land animal and is known for its intelligence and social behavior. Observing elephants in their natural habitat is a humbling experience.",
    image: "path/to/elephant-image.jpg"
  },
  {
    name: "Rhino",
    description:
      "The rhinoceros is a powerful and formidable creature with a distinctive horn. Encountering a rhino in the wild is an unforgettable moment.",
    image: "path/to/rhino-image.jpg"
  },
  {
    name: "Leopard",
    description:
      "The leopard is a stealthy and agile predator, known for its spotted coat and incredible climbing abilities. Spotting a leopard in the wild is a rare and exciting sight.",
    image: "path/to/leopard-image.jpg"
  },
  {
    name: "Cheetah",
    description:
      "The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph. Watching a cheetah sprint across the savanna is a mesmerizing experience.",
    image: "path/to/cheetah-image.jpg"
  }
];

const Bigfive = () => {
  return (
    <div className="bigfive">
      <h1>Our Big Five </h1>
      <p>
        Discover the thrill of tracking the Big Five animals in their natural
        habitat.
      </p>
    </div>
  );
};

export default Bigfive;
