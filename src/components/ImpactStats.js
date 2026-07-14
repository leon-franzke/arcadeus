import React from 'react';
import './ImpactStats.css';

const STATS = [
  { value: '384', unit: 'hrs', descriptor: 'lost to admin every year — the equivalent of 10 full working weeks' },
  { value: '61%', unit: '', descriptor: 'of UK small businesses have no real-time view of their cash position' },
  { value: '£22k', unit: '', descriptor: 'in unpaid invoices owed to the average affected UK business' },
  { value: '82%', unit: '', descriptor: 'of failed UK SMEs cite cash flow as the primary cause of failure' },
];

const ImpactStats = () => (
    <section className="impact">
      <div className="impact-inner">
        <div className="impact-text">
          <p className="impact-para">
            Managing business finances has never been more complex — but it doesn't have to be.
            Businesses that adopt smart financial tools early gain clarity, confidence, and control.
          </p>
          <p className="impact-para">
            Arcadeus gives growing UK businesses the financial intelligence that was previously
            only available to large corporations with full CFO teams.
          </p>
        </div>

        <div className="impact-stats">
          {STATS.map(({ value, unit, descriptor }) => (
            <div key={descriptor} className="impact-stat">
              <div className="impact-stat-number">
                {value}<span className="impact-stat-unit">{unit}</span>
              </div>
              <p className="impact-stat-desc">{descriptor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default ImpactStats;
