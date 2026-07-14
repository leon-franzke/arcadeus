import React, { useEffect, useState } from 'react';
import './Header.css';
import ProductModal from './ProductModal';
import PricingModal from './PricingModal';
import FAQModal from './FAQModal';

const BANNER_H = 40;
const NAV_H = 64;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bannerGone, setBannerGone] = useState(false);
  const [modal, setModal] = useState(null);
  const [darkModal, setDarkModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setBannerGone(y > BANNER_H);
      setScrolled(y > window.innerHeight * 0.8);
      document.documentElement.style.setProperty(
        '--modal-top',
        y > BANNER_H ? `${NAV_H}px` : `${BANNER_H + NAV_H}px`
      );
    };
    document.documentElement.style.setProperty('--modal-top', `${BANNER_H + NAV_H}px`);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (modal) {
      document.documentElement.style.setProperty('--modal-top', `${NAV_H}px`);
    } else {
      document.documentElement.style.setProperty(
        '--modal-top',
        bannerGone ? `${NAV_H}px` : `${BANNER_H + NAV_H}px`
      );
    }
  }, [modal, bannerGone]);

  useEffect(() => {
    const onDark = () => setDarkModal(true);
    const onLight = () => setDarkModal(false);
    const onPricing = () => setModal('pricing');
    window.addEventListener('arcadeus:darkSection', onDark);
    window.addEventListener('arcadeus:lightSection', onLight);
    window.addEventListener('arcadeus:openPricing', onPricing);
    return () => {
      window.removeEventListener('arcadeus:darkSection', onDark);
      window.removeEventListener('arcadeus:lightSection', onLight);
      window.removeEventListener('arcadeus:openPricing', onPricing);
    };
  }, []);

  const theme = ((darkModal && modal) || modal === 'pricing') ? 'dark-modal' : (scrolled || modal) ? 'light' : 'dark';
  const openModal = (name) => (e) => { e.preventDefault(); setModal(name); };
  const closeModal = () => { setModal(null); setDarkModal(false); };
  const onLogoClick = () => { if (modal) closeModal(); };

  return (
    <>
      <header className={`header ${theme} ${bannerGone ? 'header--banner-gone' : ''} ${modal ? 'header--modal' : ''}`}>
        {!modal && <a
          className="header-banner"
          href="https://makingtaxdigital.campaign.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="header-banner-text">
            MTD becomes mandatory for businesses with turnover over £30,000 from April 2027
          </span>
          <span className="header-banner-link">Read HMRC guidance →</span>
        </a>}
        <div className="header-inner">
          <span className="header-logo" onClick={onLogoClick} style={{ cursor: modal ? 'pointer' : 'default' }}>Arcadeus</span>

          <ul className="header-nav">
            <li><a href="#product" onClick={openModal('product')}>Product</a></li>
            <li><a href="#pricing" onClick={openModal('pricing')}>Pricing</a></li>
            <li><a href="#faq" onClick={openModal('faq')}>FAQ</a></li>
          </ul>

          <div className="header-actions">
            <a href="https://app.arcadeus.ai" className="header-login">Log In</a>
            <a href="https://app.arcadeus.ai" className="header-cta">Sign Up</a>
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
