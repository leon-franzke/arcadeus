import React from 'react';
import './WhySection.css';

const CARDS = [
  {
    imageLabel: 'Bookkeeping Automation',
    title: 'Move fast, stay sharp',
    body: 'Automate your bookkeeping from day one. Your team stays focused on growing the business, not managing spreadsheets.',
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #2a1f1a 100%)',
  },
  {
    imageLabel: 'HMRC Compliance',
    title: 'Always compliant',
    body: 'HMRC-ready VAT returns, Self Assessment prep, and real-time tax estimates — built in from day one.',
    bg: 'linear-gradient(135deg, #111827 0%, #1a2233 100%)',
  },
  {
    imageLabel: 'Live Dashboard',
    title: 'Know your numbers',
    body: 'Live cash position, P&L, and runway in one view. No accountant needed for your weekly finance review.',
    bg: 'linear-gradient(135deg, #0f1a14 0%, #1a2a20 100%)',
  },
];

const WhySection = () => (
  <section className="why-section" id="why">
    <div className="why-inner">
      <h2 className="why-heading">Why the top performers choose Arcadeus</h2>
      <div className="why-cards">
        {CARDS.map(({ imageLabel, title, body, bg }) => (
          <div key={title} className="why-card">
            <div className="why-card-image" style={{ background: bg }}>
              <div className="why-card-image-inner">
                <span className="why-card-image-label">{imageLabel}</span>
              </div>
            </div>
            <h3 className="why-card-title">{title}</h3>
            <p className="why-card-body">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
