import React from 'react';
import './MTDSection.css';

const vatRates = [
  {
    rate: '20%',
    label: 'Standard Rate',
    examples: 'Most goods & services, professional fees, software',
  },
  {
    rate: '5%',
    label: 'Reduced Rate',
    examples: 'Domestic energy, children\'s car seats, some renovations',
  },
  {
    rate: '0%',
    label: 'Zero Rate',
    examples: 'Food, children\'s clothing, books, public transport',
  },
];

const MTDSection = () => (
  <section className="mtd-section">
    <div className="mtd-inner">

      <div className="mtd-top">
        <div className="mtd-top-text">
          <p className="mtd-eyebrow">Making Tax Digital</p>
          <h2 className="mtd-title">HMRC compliance,<br />built in from day one</h2>
          <p className="mtd-body">
            From April 2026, Making Tax Digital for Income Tax is mandatory for self-employed individuals and landlords earning over £30,000. Arcadeus stores your digital VAT receipts, auto-populates your VAT return boxes, and submits directly to HMRC — keeping you compliant without the admin.
          </p>
          <div className="mtd-badges">
            <span className="mtd-badge">MTD for VAT</span>
            <span className="mtd-badge">MTD for Income Tax</span>
            <span className="mtd-badge">HMRC API Connected</span>
          </div>
        </div>

        <div className="mtd-top-visual">
          <div className="mtd-card">
            <p className="mtd-card-label">VAT Return — Q2 2026</p>
            <div className="mtd-card-rows">
              <div className="mtd-card-row">
                <span>VAT due on sales</span><span>£4,820.00</span>
              </div>
              <div className="mtd-card-row">
                <span>VAT reclaimed</span><span>£1,240.00</span>
              </div>
              <div className="mtd-card-row mtd-card-row--total">
                <span>Net VAT payable</span><span>£3,580.00</span>
              </div>
            </div>
            <button className="mtd-card-btn">Submit to HMRC →</button>
            <p className="mtd-card-note">147 digital receipts stored · MTD compliant</p>
          </div>
        </div>
      </div>

      <div className="mtd-divider" />

      <div className="mtd-rates-header">
        <p className="mtd-eyebrow">Current UK VAT Rates</p>
        <p className="mtd-rates-note">Arcadeus auto-detects and applies the correct rate on every transaction</p>
      </div>

      <div className="mtd-rates">
        {vatRates.map((r) => (
          <div className="mtd-rate-card" key={r.rate}>
            <span className="mtd-rate-pct">{r.rate}</span>
            <span className="mtd-rate-label">{r.label}</span>
            <span className="mtd-rate-examples">{r.examples}</span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default MTDSection;
