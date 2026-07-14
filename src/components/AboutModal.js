import React, { useEffect } from 'react';
import './AboutModal.css';

const AboutModal = ({ onClose }) => {
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
    <div className="amodal-backdrop" onClick={onClose}>
      <div className="amodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="amodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="amodal-layout">
          <div className="amodal-main">
            <div className="amodal-header">
              <p className="amodal-eyebrow">About Us</p>
              <h2 className="amodal-title">Built for the businesses<br />that power Britain</h2>
            </div>

            <div className="amodal-body">
              <p className="amodal-para">
                Arcadeus was founded on a simple belief: small businesses deserve the same financial clarity that large corporations have had for decades. For too long, the tools that give founders a real-time picture of their finances — cash flow, tax exposure, profitability — have been either unaffordable, inaccessible, or buried in spreadsheets.
              </p>
              <p className="amodal-para">
                We're building an AI-powered financial co-pilot that handles the complexity of running a UK business — from Open Banking connections and automated expense capture, to VAT filing and HMRC compliance — so founders and operators can focus entirely on growing their business.
              </p>

              <div className="amodal-divider" />

              <h3 className="amodal-section-title">Our mission</h3>
              <p className="amodal-para">
                To make financial complexity invisible. Every UK sole trader, freelancer, and growing business should have access to CFO-level insight without the CFO-level price tag. We're starting in the UK and building for the long term.
              </p>

              <div className="amodal-divider" />

              <h3 className="amodal-section-title">Who we are</h3>
              <p className="amodal-para">
                We're a small team of engineers, product designers, and finance professionals based in the UK. We've worked across fintech, accounting, and enterprise software — and we've built Arcadeus to be the product we always wished existed.
              </p>
              <p className="amodal-para">
                Arcadeus is currently in private beta, onboarding a select group of UK businesses ahead of our full launch. If you'd like to be among the first, register your interest and we'll be in touch.
              </p>

              <button
                className="amodal-cta"
                onClick={() => { onClose(); window.dispatchEvent(new Event('arcadeus:signUp')); }}
              >
                Register Your Interest
              </button>
            </div>
          </div>

          <div className="amodal-sidebar">
            <div className="amodal-contact-card">
              <p className="amodal-contact-eyebrow">Get in touch</p>
              <h3 className="amodal-contact-title">We'd love to hear from you</h3>
              <p className="amodal-contact-body">
                Whether you have a question about Arcadeus, want to discuss a partnership, or just want to learn more — drop us a line.
              </p>
              <a href="mailto:leon.franzke@arcadeus.ai" className="amodal-contact-btn">
                Contact Us
              </a>
              <p className="amodal-contact-note">We typically respond within a few hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
