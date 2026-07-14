import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProductSections.css';

const FEATURES = [
  {
    word: 'Track',
    eyebrow: 'Cash Flow',
    screenshot: '/screenshots/dashboard.png',
    desc: 'See your money in real time. Live dashboard of inflows, outflows and net position — with cash runway projections so you\'re never caught short.',
  },
  {
    word: 'Manage',
    eyebrow: 'Expenses',
    screenshot: '/screenshots/expenses.png',
    desc: 'Capture receipts, auto-categorise spend, and manage every bill from upload to payment. AI extracts merchant, amount, date and VAT instantly.',
  },
  {
    word: 'Analyse',
    eyebrow: 'Analytics',
    screenshot: '/screenshots/inflows.png',
    desc: 'Understand exactly where your money comes from and where it goes. Invoice-to-cash tracking, aging reports, and accounts receivable at a glance.',
  },
  {
    word: 'Submit',
    eyebrow: 'Tax & MTD',
    screenshot: '/screenshots/tax.png',
    desc: 'Always know what you owe. Auto-populated VAT return boxes, HMRC-ready submissions, and a live running tax estimate updated with every transaction.',
  },
];

const LaptopFrame = ({ src }) => (
  <div className="ps-laptop">
    <div className="ps-laptop-screen">
      <div className="ps-laptop-notch" />
      <div className="ps-laptop-display">
        <motion.img
          key={src}
          src={src}
          alt="Arcadeus platform"
          className="ps-laptop-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        />
      </div>
    </div>
    <div className="ps-laptop-hinge" />
    <div className="ps-laptop-base">
      <div className="ps-laptop-foot" />
    </div>
  </div>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);

  return (
    <div ref={ref} className="ps-hero">
      <motion.div
        className="ps-hero-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="ps-hero-eyebrow">The Platform</p>
        <h2 className="ps-hero-title">Finance built for<br />ambitious businesses</h2>
        <p className="ps-hero-sub">
          Cash flow, invoices, expenses, tax and HMRC submissions — everything in one place.
        </p>
      </motion.div>
      <motion.div style={{ y, opacity, scale }} className="ps-hero-laptop">
        <LaptopFrame src="/screenshots/dashboard.png" />
      </motion.div>
    </div>
  );
};

const StickySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <div className="ps-sticky-outer">
      <div className="ps-sticky-left">
        <LaptopFrame src={FEATURES[activeIndex].screenshot} />
      </div>
      <div className="ps-sticky-right">
        {FEATURES.map((f, i) => (
          <div
            key={f.word}
            ref={(el) => (sectionRefs.current[i] = el)}
            className={`ps-feature ${activeIndex === i ? 'ps-feature--active' : ''}`}
          >
            <p className="ps-eyebrow">{f.eyebrow}</p>
            <h2 className="ps-word">{f.word}</h2>
            <p className="ps-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="ps-cta">
    <motion.div
      className="ps-cta-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="ps-cta-eyebrow">Get Started</p>
      <h2 className="ps-cta-title">Your finances,<br />finally in order</h2>
      <p className="ps-cta-sub">
        Join UK businesses using Arcadeus to track, manage and submit — all from one place.
      </p>
      <button
        className="ps-cta-btn"
        onClick={() => window.dispatchEvent(new CustomEvent('arcadeus:openPricing'))}
      >
        Choose a Plan
      </button>
    </motion.div>
  </div>
);

const ProductSections = () => {
  const darkSentinelRef = useRef(null);
  const lightSentinelRef = useRef(null);

  useEffect(() => {
    // Dark sentinel: at hero→sticky boundary
    // Scroll down past header → dark; scroll back up into view → light
    const darkObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 64) {
          window.dispatchEvent(new CustomEvent('arcadeus:darkSection'));
        } else if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent('arcadeus:lightSection'));
        }
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );

    // Light sentinel: at sticky→CTA boundary
    // Scroll down past header → light; scroll back up into view → dark
    const lightObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 64) {
          window.dispatchEvent(new CustomEvent('arcadeus:lightSection'));
        } else if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent('arcadeus:darkSection'));
        }
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );

    if (darkSentinelRef.current) darkObs.observe(darkSentinelRef.current);
    if (lightSentinelRef.current) lightObs.observe(lightSentinelRef.current);
    return () => { darkObs.disconnect(); lightObs.disconnect(); };
  }, []);

  return (
    <div className="ps-root">
      <HeroSection />
      <div ref={darkSentinelRef} />
      <StickySection />
      <div ref={lightSentinelRef} />
      <CTASection />
    </div>
  );
};

export default ProductSections;
