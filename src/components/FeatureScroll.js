import React, { useEffect, useRef, useState } from 'react';
import './FeatureScroll.css';

const FEATURES = [
  'Cash Flow Management',
  'Invoice Automation',
  'Expense Tracking',
  'Tax Compliance',
  'VAT Returns',
  'Financial Reporting',
  'Budget Forecasting',
  'Payroll Integration',
];

const FeatureScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      setActiveIndex(Math.min(FEATURES.length - 1, Math.floor(progress * FEATURES.length)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="feature-scroll"
      ref={containerRef}
      style={{ height: `${FEATURES.length * 50 + 100}vh` }}
      id="product"
    >
      <div className="feature-scroll-sticky">
        <div className="feature-scroll-inner">
          <p className="feature-scroll-label">Businesses use<br />Arcadeus for</p>
          <div className="feature-scroll-list">
            {FEATURES.map((f, i) => (
              <div key={f} className={`feature-scroll-item${i === activeIndex ? ' active' : ''}`}>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureScroll;
