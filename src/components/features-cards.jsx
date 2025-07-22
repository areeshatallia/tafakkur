import React from "react";
import "../styles/features-cards.css";


const features = [
  {
    title: "Premium Quality Paper",
    description:
      "Enjoy smooth, bleed-resistant pages made for meaningful reflection and clean writing.",
  },
  {
    title: "Daily Reflection Prompts",
    description:
      "Guided spaces that help you reflect on Quranic verses and your personal journey.",
  },
  {
    title: "Elegant & Minimal Design",
    description:
      "Designed with a soft maroon aesthetic, rounded corners, and spiritual simplicity.",
  },
  {
    title: "Compact & Portable",
    description:
      "Carry it anywhere — a journal that fits into your life and your moments of pause.",
  },
];

export default function JournalFeatures() {
  return (
    
    <section className="journal-feature-section" id="features">
      <h2 className="journal-heading">Introducing the Tafakkur Journal</h2>
      <div className="journal-grid">
        {features.map(({ title, description }, idx) => (
          <div key={idx} className="features-cards">
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
