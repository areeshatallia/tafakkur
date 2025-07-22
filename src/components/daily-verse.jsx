import React, { useState } from "react";
import "../styles/daily-verse.css";


const verses = [
  {
    text: "Indeed, in the creation of the heavens and the earth are signs for those of understanding.",
    ref: "Surah Al-Imran 3:190",
  },
  {
    text: "And whoever puts all his trust in Allah, He will be enough for him.",
    ref: "Surah At-Talaq 65:3",
  },
  {
    text: "Verily, with every difficulty there is relief.",
    ref: "Surah Ash-Sharh 94:6",
  },
  // Aur bhi verses add kar sakte hain
];

export default function DailyVerse() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function shuffleVerse() {
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * verses.length);
    }
    setCurrentIndex(newIndex);
  }

  const { text, ref } = verses[currentIndex];

  return (
   
    <section className="daily-verse-section" id="daily-verse">
      <div className="verse-container">
        <h2>Today’s Reflection</h2>
        <p className="ayah-text">
          “{text}”
          <span className="ayah-ref">— {ref}</span>
        </p>
        <p className="reflection-invite">
          What does this verse remind you of ? Take a moment to reflect in your journal.
        </p>
        <button onClick={shuffleVerse}>Shuffle Verse</button>
      </div>
    </section>

  );
}
