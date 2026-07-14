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
    <div className="prmodal-backdrop" onClick={onClose}>
      <div className="prmodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="prmodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="prmodal-inner">
          <p className="prmodal-eyebrow">Legal</p>
          <h2 className="prmodal-title">Privacy Policy</h2>
          <p className="prmodal-meta">Last updated: 14 July, 2026 · Pre-launch placeholder — the platform is not yet open for sign-ups</p>

          <p className="prmodal-intro">
            Arcadeus ("we", "us") operates this website. We are currently in development and the platform is not yet open for account sign-ups, so we do not collect financial or account data through it at this time. This policy explains what we collect from visitors to this site.
          </p>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">What we collect</h3>
            <ul className="prmodal-list">
              <li>Basic website usage data (e.g. pages viewed, browser type) via cookies or analytics tools.</li>
              <li>Contact details you choose to give us, such as your name and email, if you join our waitlist or send us an enquiry.</li>
            </ul>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Why we collect it</h3>
            <ul className="prmodal-list">
              <li>To understand how our website is used.</li>
              <li>To respond to enquiries and, where you've asked, to notify you about product updates or launch.</li>
            </ul>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Sharing</h3>
            <p className="prmodal-para">
              We do not sell your data. We may use standard third-party tools (such as hosting, email, or analytics providers) to run this website, who process data only on our behalf.
            </p>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Retention</h3>
            <p className="prmodal-para">
              We keep contact and waitlist details only until you ask us to delete them, or until they're no longer needed for the purpose above.
            </p>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Your rights</h3>
            <p className="prmodal-para">
              Under UK GDPR, you can ask us to access, correct, or delete any personal data we hold about you by contacting{' '}
              <a href="mailto:leon.franzke@arcadeus.ai" className="prmodal-link">leon.franzke@arcadeus.ai</a>.
            </p>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Changes</h3>
            <p className="prmodal-para">
              This is a short placeholder policy. We'll publish a full privacy policy before the platform opens for sign-ups.
            </p>
          </div>

          <div className="prmodal-section">
            <h3 className="prmodal-section-title">Contact</h3>
            <p className="prmodal-para">
              <a href="mailto:leon.franzke@arcadeus.ai" className="prmodal-link">leon.franzke@arcadeus.ai</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyModal;
