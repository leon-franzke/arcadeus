import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const theme = scrolled ? 'light' : 'dark';

  return (
    <header className={`header ${theme}`}>
      <div className="header-inner">
        <span className="header-logo">Arcadeus</span>

        <ul className="header-nav">
          <li><a href="#product">Product</a></li>
          <li><a href="#why">Why Arcadeus</a></li>
          <li><a href="#security">Security</a></li>
        </ul>

        <div className="header-actions">
          <a href="https://app.arcadeus.ai" className="header-login">Log In</a>
          <a href="https://app.arcadeus.ai" className="header-cta">Get Early Access</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
