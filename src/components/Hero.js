import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-bg" />
    <div className="hero-content">
      <h1 className="hero-title">Finance Made Perfect</h1>
      <p className="hero-subtitle">
        The most ambitious UK businesses trust Arcadeus to manage their finances and navigate complexity.
      </p>
      <a href="https://app.arcadeus.ai" className="hero-cta">Get Early Access</a>
    </div>
  </section>
);

export default Hero;
