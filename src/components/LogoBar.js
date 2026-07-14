import React from 'react';
import './LogoBar.css';

const LOGOS = ['HSBC', 'Stripe', 'Barclays', 'Monzo', 'Starling', 'Xero', 'QuickBooks', 'HMRC', 'NatWest', 'Lloyds'];

const LogoBar = () => (
  <div className="logo-bar">
    <div className="logo-bar-track">
      {[...LOGOS, ...LOGOS].map((name, i) => (
        <span key={i} className="logo-bar-item">{name}</span>
      ))}
    </div>
  </div>
);

export default LogoBar;
