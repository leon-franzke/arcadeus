import React from 'react';
import './ImpactStats.css';

const STATS = [
  { value: '15+', unit: 'hrs', descriptor: 'saved on finance admin per month' },
  { value: '£2,400', unit: '', descriptor: 'average annual tax saved per business' },
  { value: '3×', unit: '', descriptor: 'faster than traditional bookkeeping' },
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
