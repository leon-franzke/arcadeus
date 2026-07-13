import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import FeatureScroll from './components/FeatureScroll';
import ImpactStats from './components/ImpactStats';
import Stats from './components/Stats';
import WhySection from './components/WhySection';
import ProductSections from './components/ProductSections';
import SecuritySection from './components/SecuritySection';
import MTDSection from './components/MTDSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

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
      fontFamily: "'Source Serif Pro', Georgia, serif",
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
        fontFamily: "'Inter', sans-serif",
      }}>Coming soon</p>
    </div>
  );
}

function App() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('preview') === PREVIEW_PASSWORD) {
      localStorage.setItem(PREVIEW_KEY, '1');
      window.history.replaceState({}, '', window.location.pathname);
    }
    if (localStorage.getItem(PREVIEW_KEY) === '1') setUnlocked(true);
  }, []);

  if (!unlocked) return <ComingSoon />;

  return (
    <div className="App">
      <Header />
      <Hero />
      <LogoBar />
      <FeatureScroll />
      <ImpactStats />
      <Stats />
      <WhySection />
      <ProductSections />
      <SecuritySection />
      <MTDSection />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
