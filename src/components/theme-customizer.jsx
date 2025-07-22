import React, { useEffect, useState } from "react";
import "../styles/theme-customizer.css";
import { motion } from "framer-motion";

const themes = ["dark", "light", "maroon"];
const fonts = ["Default", "Serif", "Monospace"];
const backgrounds = ["none", "stars", "paper", "floral"];

export default function ThemeCustomizer() {
  const [theme, setTheme] = useState("dark");
  const [font, setFont] = useState("Default");
  const [bg, setBg] = useState("none");

  // Load saved preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedFont = localStorage.getItem("font") || "Default";
    const savedBg = localStorage.getItem("background") || "none";

    setTheme(savedTheme);
    setFont(savedFont);
    setBg(savedBg);

    applyTheme(savedTheme, savedFont, savedBg);
  }, []);

  // Apply preferences
  function applyTheme(theme, font, bg) {
    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("data-font", font);
    document.body.setAttribute("data-bg", bg);
  }

  // When user changes theme/font/bg
  function handleChange(type, value) {
    if (type === "theme") {
      setTheme(value);
      localStorage.setItem("theme", value);
    } else if (type === "font") {
      setFont(value);
      localStorage.setItem("font", value);
    } else if (type === "background") {
      setBg(value);
      localStorage.setItem("background", value);
    }

    applyTheme(
      type === "theme" ? value : theme,
      type === "font" ? value : font,
      type === "background" ? value : bg
    );
  }

  return (
     <motion.div
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
    <section className="theme-customizer-section">
      <h2>🌙 Create Your Own Space</h2>
      <p className="subheading">
        Choose the mood that fits your soul — from calming dark tones to serene maroon warmth.
      </p>

      <div className="customizer-options">
        <div className="option-group">
          <label>Theme:</label>
          <select value={theme} onChange={(e) => handleChange("theme", e.target.value)}>
            {themes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="option-group">
          <label>Font Style:</label>
          <select value={font} onChange={(e) => handleChange("font", e.target.value)}>
            {fonts.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div className="option-group">
          <label>Background Pattern:</label>
          <select value={bg} onChange={(e) => handleChange("background", e.target.value)}>
            {backgrounds.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
    </motion.div>
  );
}
