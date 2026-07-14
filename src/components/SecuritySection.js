import React, { useEffect, useRef } from 'react';
import './SecuritySection.css';

const complianceBadges = [
  {
    label: 'MTD for VAT',
    desc: 'Store digital VAT receipts and submit returns directly to HMRC — fully compliant with Making Tax Digital for VAT.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" />
      </svg>
    ),
  },
  {
    label: 'MTD for Income Tax',
    desc: 'Ready for MTD for Income Tax Self Assessment, mandatory from April 2026 for income over £30,000.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        <path d="M7 8h4M7 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'HMRC API Connected',
    desc: 'Direct integration with the official HMRC API. No third-party bridging software required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" />
      </svg>
    ),
  },
];

const securityBadges = [
  {
    label: '256-bit Encryption',
    desc: 'All data encrypted in transit and at rest using AES-256 — the same standard used by major banks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'SOC 2 Compliant',
    desc: 'Arcadeus is SOC 2 Type II certified — independently audited for security, availability, and confidentiality controls, so your data is protected to enterprise standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Read-Only Bank Access',
    desc: 'Open Banking connections are read-only. Arcadeus can see your transactions — it can never move your money.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M3 3l18 18" strokeLinecap="round" />
      </svg>
    ),
  },
];

const SecuritySection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(new Event(
          entry.isIntersecting ? 'arcadeus:darkSection' : 'arcadeus:lightSection'
        ));
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
  <section className="security" id="security" ref={ref}>
    <div className="security-inner">

      <div className="security-top">
        <div className="security-top-text">
          <p className="security-eyebrow">Compliance & Security</p>
          <h2 className="security-heading">HMRC recognised.<br />Bank-grade secure.</h2>
        </div>
        <p className="security-desc">
          Arcadeus is built around the two things small businesses can't afford to get wrong: tax compliance and data security. Direct HMRC API integration means your VAT returns and income tax filings go straight to HMRC — no bridging software, no manual exports.
        </p>
      </div>

      <div className="security-group">
        <p className="security-group-label">HMRC &amp; MTD Compliance</p>
        <div className="security-badges">
          {complianceBadges.map((b) => (
            <div className="security-badge" key={b.label}>
              <div className="security-badge-icon-wrap security-badge-icon-wrap--compliance">
                {b.icon}
              </div>
              <span className="security-badge-title">{b.label}</span>
              <p className="security-badge-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="security-group">
        <p className="security-group-label">Data Security</p>
        <div className="security-badges">
          {securityBadges.map((b) => (
            <div className="security-badge" key={b.label}>
              <div className="security-badge-icon-wrap">
                {b.icon}
              </div>
              <span className="security-badge-title">{b.label}</span>
              <p className="security-badge-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
  );
};

export default SecuritySection;
