import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <video
      className="hero-video"
      src="/hero.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
    <div className="hero-overlay" />
    <div className="hero-content">
      <h1 className="hero-title">Your Finances, Finally in Order</h1>
      <div className="hero-hmrc">
        HMRC recognised &amp; Making Tax Digital compliant — submit VAT returns directly from Arcadeus
      </div>
      <p className="hero-subtitle">
        The most ambitious UK businesses trust Arcadeus to manage their finances and navigate complexity.
      </p>
      <a href="https://app.arcadeus.ai" className="hero-cta">Get Early Access</a>
    </div>
  </section>
);

export default Hero;
