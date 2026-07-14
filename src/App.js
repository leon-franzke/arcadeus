import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import FeatureScroll from './components/FeatureScroll';
import ImpactStats from './components/ImpactStats';
import WhySection from './components/WhySection';
import MTDSection from './components/MTDSection';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import SecurityModal from './components/SecurityModal';
import PrivacyModal from './components/PrivacyModal';


function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const onSignUp = () => window.open('https://app.arcadeus.ai?mode=signup', '_blank');
    const onAbout = () => setShowAbout(true);
    const onSecurity = () => setShowSecurity(true);
    const onPrivacy = () => setShowPrivacy(true);
    window.addEventListener('arcadeus:signUp', onSignUp);
    window.addEventListener('arcadeus:about', onAbout);
    window.addEventListener('arcadeus:security', onSecurity);
    window.addEventListener('arcadeus:privacy', onPrivacy);
    return () => {
      window.removeEventListener('arcadeus:signUp', onSignUp);
      window.removeEventListener('arcadeus:about', onAbout);
      window.removeEventListener('arcadeus:security', onSecurity);
      window.removeEventListener('arcadeus:privacy', onPrivacy);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <LogoBar />
      <FeatureScroll />
      <ImpactStats />
      <WhySection />
      <MTDSection />
      <Footer />
      {showAbout && <AboutModal onClose={() => setShowAbout(false)} />}
      {showSecurity && <SecurityModal onClose={() => setShowSecurity(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </div>
  );
}

export default App;
