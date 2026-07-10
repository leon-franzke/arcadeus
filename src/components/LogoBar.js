import React from 'react';
import './LogoBar.css';

const LOGOS = ['BRIGHTFIELD', 'KOVA STUDIO', 'NORTHVEIL', 'SUMMIT & CO', 'ALDERTON GROUP', 'HARBOUR LANE', 'MERIDIAN CO', 'VELA WORKS'];

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
