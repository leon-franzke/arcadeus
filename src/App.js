import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Pricing from './components/Pricing';
import PrivacyPolicy from './components/PrivacyPolicy';

const PREVIEW_KEY = 'arcadeus_preview';
const PREVIEW_PASSWORD = 'ARCADEUS';

function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0D0D0D',
      fontFamily: 'Georgia, serif',
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '600',
        color: '#ffffff',
        letterSpacing: '0.04em',
        marginBottom: '12px',
      }}>Arcadeus</h1>
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.4)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>Coming soon</p>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === PREVIEW_PASSWORD) {
      localStorage.setItem(PREVIEW_KEY, '1');
      window.history.replaceState({}, '', window.location.pathname);
    }
    if (localStorage.getItem(PREVIEW_KEY) === '1') setUnlocked(true);
  }, []);

  if (!unlocked) return <ComingSoon />;

  const renderPage = () => {
    switch (currentPage) {
      case 'product':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Product />
          </>
        );
      case 'pricing':
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Pricing />
          </>
        );
      case 'privacy-policy':
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return (
          <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Hero setCurrentPage={setCurrentPage} />
            <Services />
            <About setCurrentPage={setCurrentPage} />
            <Contact />
          </>
        );
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;