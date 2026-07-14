import React, { useEffect, useState } from 'react';
import './FAQModal.css';
import Footer from './Footer';

const faqs = [
  {
    q: 'What is Arcadeus?',
    a: 'Arcadeus is an AI-powered financial co-pilot for UK small businesses. It handles your invoicing, expenses, cash flow, and tax in one place — so you can focus on running your business instead of your finances.',
  },
  {
    q: 'How does the bank connection work?',
    a: 'We use secure Open Banking APIs to connect directly to your business accounts. The connection is read-only — Arcadeus can see your transactions but can never move funds. We support 10,000+ UK banks and institutions.',
  },
  {
    q: 'Is my financial data secure?',
    a: 'Yes. All data is encrypted in transit and at rest using AES-256 encryption. We are fully GDPR compliant, your data never leaves UK servers, and we are SOC 2 Type II certified.',
  },
  {
    q: 'Who is Arcadeus built for?',
    a: 'Arcadeus is built for UK sole traders, freelancers, startups, and small businesses that want the financial clarity of a CFO — without the cost of hiring one. If you deal with invoices, expenses, or tax, Arcadeus is for you.',
  },
  {
    q: 'Does it replace my accountant?',
    a: 'No — Arcadeus is not accounting software. It works alongside your accountant, giving both of you clean, organised, real-time financial data. Many of our users find their accountants actually prefer working with Arcadeus clients.',
  },
  {
    q: 'How does AI receipt capture work?',
    a: 'Simply photograph a receipt on your phone or upload it. Our AI extracts the merchant name, amount, date, and expense category automatically. It also detects whether VAT applies and at what rate — no manual entry needed.',
  },
  {
    q: 'Can I try Arcadeus for free?',
    a: 'Yes. All plans include a 14-day free trial with no credit card required. Request early access and we will onboard you during our beta period — early members also lock in a permanent founding member rate.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'You can export all your data at any time in standard formats (CSV, PDF). If you cancel, we retain your data for 30 days so you can retrieve it, then it is permanently deleted from our servers.',
  },
];

const FAQModal = ({ onClose }) => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="fmodal-backdrop" onClick={onClose}>
      <div className="fmodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="fmodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="fmodal-layout">
          <div className="fmodal-main">
            <div className="fmodal-header">
              <p className="fmodal-eyebrow">FAQ</p>
              <h2 className="fmodal-title">Frequently asked<br />questions</h2>
            </div>

            <div className="fmodal-list">
              {faqs.map((item, i) => (
                <div
                  className={`fmodal-item ${open === i ? 'fmodal-item--open' : ''}`}
                  key={i}
                >
                  <button className="fmodal-question" onClick={() => toggle(i)}>
                    <span>{item.q}</span>
                    <span className="fmodal-chevron">{open === i ? '−' : '+'}</span>
                  </button>
                  {open === i && (
                    <p className="fmodal-answer">{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="fmodal-sidebar">
            <div className="fmodal-sales-card">
              <p className="fmodal-sales-eyebrow">Still have questions?</p>
              <h3 className="fmodal-sales-title">Talk to our team</h3>
              <p className="fmodal-sales-body">
                We're happy to walk you through the platform, discuss your specific needs, or help you figure out if Arcadeus is the right fit.
              </p>
              <a
                href="mailto:hello@arcadeus.ai"
                className="fmodal-sales-btn"
              >
                Connect to Sales
              </a>
              <p className="fmodal-sales-note">We typically respond within a few hours.</p>
            </div>
          </div>
        </div>

        <Footer light />
      </div>
    </div>
  );
};

export default FAQModal;
