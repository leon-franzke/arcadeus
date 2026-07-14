import React, { useEffect } from 'react';
import './PrivacyModal.css';

const PrivacyModal = ({ onClose }) => {
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
    <div className="pvmodal-backdrop" onClick={onClose}>
      <div className="pvmodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="pvmodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="pvmodal-inner">
          <p className="pvmodal-eyebrow">Legal</p>
          <h2 className="pvmodal-title">Privacy Policy</h2>
          <p className="pvmodal-meta">Last updated: 14 July, 2026 · Pre-launch placeholder — the platform is not yet open for sign-ups</p>

          <p className="pvmodal-intro">
            Arcadeus ("we", "us") operates this website. We are currently in development and the platform is not yet open for account sign-ups, so we do not collect financial or account data through it at this time. This policy explains what we collect from visitors to this site.
          </p>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">What we collect</h3>
            <ul className="pvmodal-list">
              <li>Basic website usage data (e.g. pages viewed, browser type) via cookies or analytics tools.</li>
              <li>Contact details you choose to give us, such as your name and email, if you join our waitlist or send us an enquiry.</li>
            </ul>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Why we collect it</h3>
            <ul className="pvmodal-list">
              <li>To understand how our website is used.</li>
              <li>To respond to enquiries and, where you've asked, to notify you about product updates or launch.</li>
            </ul>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Sharing</h3>
            <p className="pvmodal-para">
              We do not sell your data. We may use standard third-party tools (such as hosting, email, or analytics providers) to run this website, who process data only on our behalf.
            </p>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Retention</h3>
            <p className="pvmodal-para">
              We keep contact and waitlist details only until you ask us to delete them, or until they're no longer needed for the purpose above.
            </p>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Your rights</h3>
            <p className="pvmodal-para">
              Under UK GDPR, you can ask us to access, correct, or delete any personal data we hold about you by contacting{' '}
              <a href="mailto:leon.franzke@arcadeus.ai" className="pvmodal-link">leon.franzke@arcadeus.ai</a>.
            </p>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Changes</h3>
            <p className="pvmodal-para">
              This is a short placeholder policy. We'll publish a full privacy policy before the platform opens for sign-ups.
            </p>
          </div>

          <div className="pvmodal-section">
            <h3 className="pvmodal-section-title">Contact</h3>
            <p className="pvmodal-para">
              <a href="mailto:leon.franzke@arcadeus.ai" className="pvmodal-link">leon.franzke@arcadeus.ai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
