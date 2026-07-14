import React, { useEffect } from 'react';
import './SecurityModal.css';

const pillars = [
  {
    label: 'SOC 2 Type II',
    description:
      'Our security controls are independently audited against the SOC 2 Type II standard — the benchmark for data security, availability, and confidentiality in financial software.',
  },
  {
    label: 'AES-256 Encryption',
    description:
      'All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Your financial data is never transmitted or stored in plaintext.',
  },
  {
    label: 'UK Data Residency',
    description:
      'Your data never leaves UK servers. We operate entirely within the UK, ensuring full compliance with UK GDPR and giving you complete sovereignty over your information.',
  },
  {
    label: 'GDPR Compliant',
    description:
      'Arcadeus is fully compliant with the UK General Data Protection Regulation. You can export or permanently delete your data at any time.',
  },
  {
    label: 'Read-Only Open Banking',
    description:
      'We connect to your business bank accounts via FCA-regulated Open Banking APIs. The connection is strictly read-only — Arcadeus can view your transactions but can never initiate payments or move funds.',
  },
  {
    label: 'HMRC Recognised',
    description:
      'Arcadeus is an HMRC-recognised Making Tax Digital (MTD) compatible software. VAT returns are submitted directly through our platform via the official HMRC API.',
  },
];

const SecurityModal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="smodal-backdrop" onClick={onClose}>
      <div className="smodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="smodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="smodal-layout">
          <div className="smodal-main">
            <div className="smodal-header">
              <p className="smodal-eyebrow">Security</p>
              <h2 className="smodal-title">Bank-grade security,<br />built in from day one</h2>
              <p className="smodal-intro">
                Security isn't an afterthought at Arcadeus — it's a foundational part of how we build. Your financial data is among the most sensitive information you hold, and we treat it accordingly.
              </p>
            </div>

            <div className="smodal-pillars">
              {pillars.map((p) => (
                <div className="smodal-pillar" key={p.label}>
                  <div className="smodal-pillar-header">
                    <span className="smodal-pillar-dot" />
                    <h3 className="smodal-pillar-label">{p.label}</h3>
                  </div>
                  <p className="smodal-pillar-desc">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="smodal-sidebar">
            <div className="smodal-contact-card">
              <p className="smodal-contact-eyebrow">Security questions?</p>
              <h3 className="smodal-contact-title">Talk to our team</h3>
              <p className="smodal-contact-body">
                If you have specific security requirements, would like to review our documentation, or want to report a vulnerability — we're here to help.
              </p>
              <a href="mailto:leon.franzke@arcadeus.ai" className="smodal-contact-btn">
                Contact Security
              </a>
              <p className="smodal-contact-note">We take every report seriously.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityModal;
