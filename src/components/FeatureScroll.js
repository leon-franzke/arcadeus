import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(i => (i + 1) % FEATURES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feature-scroll" id="product">
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
    </section>
  );
};

export default FeatureScroll;
