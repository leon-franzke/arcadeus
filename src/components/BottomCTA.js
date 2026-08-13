import React from 'react';
import './BottomCTA.css';

const BottomCTA = () => (
  <section className="bottom-cta">
    <div className="bottom-cta-inner">
      <p className="bottom-cta-text">Your AI Financial Co-Pilot</p>
      <button className="bottom-cta-btn" onClick={() => window.dispatchEvent(new Event('arcadeus:openPricing'))}>Sign Up</button>
    </div>
  </section>
);

export default BottomCTA;
