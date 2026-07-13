import React, { useEffect } from 'react';
import './ProductModal.css';

const features = [
  {
    icon: '📄',
    title: 'AI Receipt Capture',
    description: 'Snap a photo and Arcadeus extracts merchant, amount, date, and category automatically. No manual data entry.',
  },
  {
    icon: '🏦',
    title: 'Bank API Connections',
    description: 'Connect your business accounts via Open Banking. Real-time transaction sync from 10,000+ UK banks — read-only, always secure.',
  },
  {
    icon: '📬',
    title: 'Invoice Management',
    description: 'Create and send professional invoices in seconds. Track status from Draft to Paid and chase overdue payments automatically.',
  },
  {
    icon: '📊',
    title: 'Expense Tracking',
    description: 'A kanban-style pipeline takes every expense from receipt to approved payment. One-click approval with auto-detected VAT.',
  },
  {
    icon: '💷',
    title: 'Cash Flow Dashboard',
    description: 'A live overview of money in, money out, and your net position — updated in real time as transactions come in.',
  },
  {
    icon: '🧾',
    title: 'Tax & VAT Management',
    description: 'Automatic VAT detection on every transaction. Running tax bill estimates and HMRC-ready reports — always audit-ready.',
  },
  {
    icon: '📈',
    title: 'Profit & Loss',
    description: 'A real-time P&L across any date range. Understand where money is going and which revenue streams are performing.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description: 'Get notified when invoices go overdue, cash dips below a threshold, or an unusual expense is detected.',
  },
];

const ProductModal = ({ onClose }) => {
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
    <div className="pmodal-backdrop" onClick={onClose}>
      <div className="pmodal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="pmodal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="pmodal-header">
          <p className="pmodal-eyebrow">The Platform</p>
          <h2 className="pmodal-title">Everything you need<br />to run your finances</h2>
          <p className="pmodal-subtitle">
            Arcadeus replaces the spreadsheets, the chasing, and the guesswork with a single intelligent layer across your entire financial operation.
          </p>
        </div>

        <div className="pmodal-grid">
          {features.map((f) => (
            <div className="pmodal-card" key={f.title}>
              <span className="pmodal-icon">{f.icon}</span>
              <h3 className="pmodal-card-title">{f.title}</h3>
              <p className="pmodal-card-desc">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="pmodal-footer">
          <a href="https://app.arcadeus.ai" className="pmodal-cta">Get Early Access</a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
