import React from "react";
import React (useState) from "react";
import React (useEffect) from "react";
import lionImage from "./Assets/lion.jpg";
import elephantImage from "./Assets/elephant.jpg";
import rhinoImage from  "./Assets/rhino.jpg";
import leopardImage from "./Assets/leopard.jpg";
import buffaloImage from "./Asset/buffalo.jpg";
import "./styles/Bigfive.css";




const cardData = [
  {
    name: "Lion",
    description:
      "The lion, known as the 'king of the jungle,' is a symbol of strength and courage. Spotting a pride of lions in the wild is a breathtaking experience.",
    image:lionImage
  },
  {
    name: "Elephant",
    description:
      "The elephant is the largest land animal and is known for its intelligence and social behavior. Observing elephants in their natural habitat is a humbling experience.",
    image: elephantImage
  },
  {
    name: "Rhino",
    description:
      "The rhinoceros is a powerful and formidable creature with a distinctive horn. Encountering a rhino in the wild is an unforgettable moment.",
    image: rhinoImage
  },
  {
    name: "Leopard",
    description:
      "The leopard is a stealthy and agile predator, known for its spotted coat and incredible climbing abilities. Spotting a leopard in the wild is a rare and exciting sight.",
    image: leopardImage
  },
  {
    name: "Buffalo",
    description:
      "The buffalo is a large and powerful herbivore, known for its strength and defensive behavior. Observing buffaloes in their natural habitat is a thrilling experience.",
    image: buffaloImage
  }
];

export default function interactive3Dcarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoSlide = (index) => {
    setCurrentIndex((index + cardData.length) % cardData.length);
  };
  const nextCard = () => {
    gotoSlide(currentIndex + 1);
  };
  const prevCard = () => {
    gotoSlide(currentIndex - 1);
  };
