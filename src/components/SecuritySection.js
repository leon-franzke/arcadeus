import React from 'react';
import './SecuritySection.css';

const ShieldIcon = () => (
  <svg className="security-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg className="security-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
  </svg>
);

const FlagIcon = () => (
  <svg className="security-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" strokeLinecap="round" />
  </svg>
);

const SecuritySection = () => (
  <section className="security" id="security">
    <div className="security-inner">
      <div className="security-top">
        <h2 className="security-heading">Built for compliance<br />and security</h2>
        <p className="security-desc">
          Arcadeus meets HMRC standards and keeps your financial data safe with bank-grade encryption and UK data residency. Your books are protected at every layer.
        </p>
      </div>
      <div className="security-badges">
        <div className="security-badge">
          <ShieldIcon />
          <span className="security-badge-title">HMRC Compliant</span>
        </div>
        <div className="security-badge">
          <LockIcon />
          <span className="security-badge-title">256-bit Encryption</span>
        </div>
        <div className="security-badge">
          <FlagIcon />
          <span className="security-badge-title">UK Data Storage</span>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;
