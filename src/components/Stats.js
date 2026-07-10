import React from 'react';
import './Stats.css';

const STATS = [
  { label: 'Average hours saved per month', value: '15+' },
  { label: 'Transactions automated', value: '10K+' },
  { label: 'Average annual tax saved', value: '£2,400' },
  { label: 'Countries supported', value: '1' },
];

const Stats = () => (
  <section className="stats">
    <div className="stats-inner">
      <h2 className="stats-heading">Delivering clarity at scale</h2>
      <div className="stats-rows">
        {STATS.map(({ label, value }) => (
          <div key={label} className="stats-row">
            <span className="stats-row-label">{label}</span>
            <span className="stats-row-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
