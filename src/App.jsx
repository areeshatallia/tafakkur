import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import DailyVerse from "./components/daily-verse.jsx";
import MyJournal from "./components/my-journal";
import ThemeCustomizer from "./components/theme-customizer";
import JournalCards from './components/journalCard.jsx';
import AboutSection from './components/about.jsx';
import FeatureCard from './components/features-cards.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/footer.jsx';

import LoginPage from './components/login.jsx';


// ✅ ScrollManager (robust version with retry)
const ScrollManager = () => {
  const location = useLocation();

  React.useEffect(() => {
    const targetId = location.state?.scrollTo;

    if (targetId) {
      let attempts = 0;

      const tryScroll = () => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 200); // retry every 200ms
        }
      };

      setTimeout(tryScroll, 300); // initial delay
    }
  }, [location]);

  return null;
};


// ✅ Home page with IDs
const HomePage = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><AboutSection /></section>
      <section id="journal"><JournalCards /></section>
      <section><DailyVerse /></section>
      <section><MyJournal /></section>
      <section><FeatureCard /></section>
      <section><TestimonialSection /></section>
      <section><CTASection /></section>
      <section><Footer /></section>
    </>
  );
};


// ✅ App
const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
