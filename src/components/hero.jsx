// src/components/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

import heroImage from '../assets/hero-img.png';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
    id='hero'
      className="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="hero-content">
        <h1 className='hero-title'>Reflect. Write. Grow.</h1>
        <p className='hero-subtitle'>A journaling space inspired by timeless Quranic wisdom — built for thoughtful souls of all kinds.</p>
        <a href="#daily-verse"><button className="hero-btn">Start Reflecting</button></a>
        
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Journaling Illustration" />
      </div>
    </motion.section>
  );
};

export default Hero;
