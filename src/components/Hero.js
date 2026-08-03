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
        HMRC Making Tax Digital compliant — submit VAT returns and Self Assessment directly from Arcadeus
      </div>
      <p className="hero-subtitle">
        The most ambitious UK businesses trust Arcadeus to manage their finances and navigate complexity.
      </p>
      <button className="hero-cta" onClick={() => window.dispatchEvent(new Event('arcadeus:signUp'))}>Sign Up</button>
    </div>
  </section>
);

export default Hero;
