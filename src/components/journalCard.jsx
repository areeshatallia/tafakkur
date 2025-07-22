import React, { useState } from "react";
import "../styles/journalCards.css";
import cover1 from "../assets/product1.png";
import cover2 from "../assets/product2.png";
import cover3 from "../assets/product3.png";

const cards = [
  {
    id: 1,
    title: "Tafakkur Journal - Stars",
    imageUrl: cover1,
    bgClass: "bg-stars",
  },
  {
    id: 2,
    title: "Tafakkur Journal - Floral",
    imageUrl: cover2,
    bgClass: "bg-floral",
  },
  {
    id: 3,
    title: "Tafakkur Journal - Paper",
    imageUrl: cover3,
    bgClass: "bg-paper",
  },
];

export default function JournalCards() {
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="journal-section">
      <h2 className="section-heading">Tafakkur Journals</h2>
      <p className="section-subheading">
        Explore our beautifully designed physical journals — perfect companions for your reflection journey.
      </p>

      <div className="journal-cards-container">
        {cards.map(({ id, title, imageUrl, bgClass }) => (
          <div key={id} className={`journal-card ${bgClass}`}>
            <img src={imageUrl} alt={title} className="journal-cover" />
            <h3>{title}</h3>
            <button className="buy-btn" onClick={handleBuyClick}>Buy Now</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Coming Soon</h2>
            <p>This feature will be available soon. Stay tuned!</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
