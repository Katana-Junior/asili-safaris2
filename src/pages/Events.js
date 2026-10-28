import React from "react";

const events = [
  {
    title: "Great Migration Safari",
    date: "12-18 Aug 2026",
    location: "Masai Mara, Kenya",
    category: "Wildlife",
    price: "$2,450",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80",
    description:
      "Witness the dramatic crossing of wildebeest and zebra across open plains during peak migration season.",
  },
  {
    title: "Maasai Cultural Festival",
    date: "02-05 Sep 2026",
    location: "Loitokitok, Kenya",
    category: "Culture",
    price: "$980",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
    description:
      "Experience traditional music, dance, storytelling, and authentic community-led heritage experiences.",
  },
  {
    title: "Sunset Bush Dinner",
    date: "Every Friday",
    location: "Samburu Conservancy",
    category: "Dining",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy a candlelit dinner beneath the acacia trees while the bush settles into golden-hour calm.",
  },
  {
    title: "Kilimanjaro Trek",
    date: "14-24 Oct 2026",
    location: "Kilimanjaro, Tanzania",
    category: "Adventure",
    price: "$1,680",
    image:
      "https://images.unsplash.com/photo-1517630380772-8d3ffb55b5f8?auto=format&fit=crop&w=900&q=80",
    description:
      "Scale Africa's highest peak with expert guides, scenic camps, and unforgettable summit views.",
  },
  {
    title: "Coral Coast Escape",
    date: "06-11 Nov 2026",
    location: "Diani Beach, Kenya",
    category: "Beach",
    price: "$1,120",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    description:
      "Relax on a pristine shoreline, snorkel vibrant reefs, and enjoy calm evenings by the Indian Ocean.",
  },
  {
    title: "Family Wildlife Weekend",
    date: "18-21 Dec 2026",
    location: "Tsavo West, Kenya",
    category: "Family",
    price: "$1,350",
    image:
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=900&q=80",
    description:
      "A relaxed, kid-friendly safari that blends game drives, bush walks, and memorable family moments.",
  },
];

const Events = () => (
  <section className="events-page">
    <style>{`
      .events-page {
        background: linear-gradient(180deg, #f5efe6 0%, #f9f7f3 100%);
        color: #1c2b27;
        padding: 3rem 1.5rem 4rem;
      }

      .events-header {
        max-width: 1100px;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .events-eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.16rem;
        color: #7a5c38;
        font-size: 0.78rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }

      .events-title {
        font-size: clamp(2.2rem, 4vw, 3.2rem);
        margin: 0;
      }

      .events-subtitle {
        margin: 0.9rem auto 0;
        max-width: 700px;
        line-height: 1.7;
        color: #4f5e5a;
      }

      .events-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      .event-card {
        background: rgba(255, 255, 255, 0.92);
        border-radius: 22px;
        overflow: hidden;
        box-shadow: 0 16px 40px rgba(62, 87, 69, 0.08);
        border: 1px solid rgba(87, 114, 96, 0.1);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .event-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 18px 42px rgba(62, 87, 69, 0.12);
      }

      .event-image {
        height: 190px;
        background-size: cover;
        background-position: center;
        position: relative;
      }

      .event-badge {
        position: absolute;
        top: 14px;
        left: 14px;
        background: rgba(20, 43, 35, 0.75);
        color: #fff;
        padding: 0.45rem 0.8rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.04rem;
      }

      .event-content {
        padding: 1.2rem 1.1rem 1.3rem;
      }

      .event-date {
        display: block;
        color: #7a5c38;
        font-size: 0.78rem;
        font-weight: 700;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        margin-bottom: 0.7rem;
      }

      .event-title {
        margin: 0 0 0.5rem;
        font-size: 1.4rem;
      }

      .event-location {
        margin: 0 0 0.8rem;
        color: #425b55;
        font-weight: 600;
      }

      .event-description {
        margin: 0 0 1rem;
        color: #4d5f5d;
        line-height: 1.65;
        font-size: 0.96rem;
      }

      .event-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.75rem;
      }

      .event-price {
        font-size: 1.1rem;
        font-weight: 800;
        color: #1f513f;
      }

      .event-button {
        border: none;
        background: #d7a85e;
        color: #fff;
        padding: 0.7rem 1rem;
        border-radius: 999px;
        font-weight: 700;
        cursor: pointer;
      }

      @media (max-width: 640px) {
        .events-page {
          padding: 2.5rem 1rem 3rem;
        }
      }
    `}</style>

    <header className="events-header">
      <p className="events-eyebrow">Upcoming experiences</p>
      <h1 className="events-title">Events to inspire your next adventure</h1>
      <p className="events-subtitle">
        Explore unforgettable moments, cultural journeys, and wildlife stories designed around the rhythm of East Africa.
      </p>
    </header>

    <div className="events-grid">
      {events.map((event) => (
        <article className="event-card" key={event.title}>
          <div
            className="event-image"
            style={{ backgroundImage: `url(${event.image})` }}
            aria-label={event.title}
          >
            <span className="event-badge">{event.category}</span>
          </div>

          <div className="event-content">
            <span className="event-date">{event.date}</span>
            <h2 className="event-title">{event.title}</h2>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>

            <div className="event-footer">
              <span className="event-price">{event.price}</span>
              <button type="button" className="event-button">
                Learn more
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Events;