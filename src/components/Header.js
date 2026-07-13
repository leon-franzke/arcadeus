import React, { useEffect, useState } from 'react';
import './Header.css';
import ProductModal from './ProductModal';
import PricingModal from './PricingModal';
import FAQModal from './FAQModal';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null); // 'product' | 'pricing' | 'faq' | null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const theme = (scrolled || modal) ? 'light' : 'dark';
  const openModal = (name) => (e) => { e.preventDefault(); setModal(name); };
  const closeModal = () => setModal(null);
  const onLogoClick = () => { if (modal) closeModal(); };

  return (
    <>
      <header className={`header ${theme}`}>
        <div className="header-inner">
          <span className="header-logo" onClick={onLogoClick} style={{ cursor: modal ? 'pointer' : 'default' }}>Arcadeus</span>

          <ul className="header-nav">
            <li><a href="#product" onClick={openModal('product')}>Product</a></li>
            <li><a href="#pricing" onClick={openModal('pricing')}>Pricing</a></li>
            <li><a href="#faq" onClick={openModal('faq')}>FAQ</a></li>
          </ul>

          <div className="header-actions">
            <a href="https://app.arcadeus.ai" className="header-login">Log In</a>
            <a href="https://app.arcadeus.ai" className="header-cta">Get Early Access</a>
          </div>
        </div>
      </header>

      {modal === 'product' && <ProductModal onClose={closeModal} />}
      {modal === 'pricing' && <PricingModal onClose={closeModal} />}
      {modal === 'faq'     && <FAQModal     onClose={closeModal} />}
    </>
  );
};

export default Header;
