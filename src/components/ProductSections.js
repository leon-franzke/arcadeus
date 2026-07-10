import React from 'react';
import './ProductSections.css';

const PRODUCTS = [
  {
    label: 'Platform',
    title: 'Dashboard',
    body: 'Your complete financial picture, updated in real time. Cash in, cash out, tax owed — always at a glance.',
    visualLabel: 'Dashboard Preview',
    reversed: false,
  },
  {
    label: 'Platform',
    title: 'Invoices',
    body: 'Send professional invoices in seconds. Track what\'s been paid, what\'s overdue, and follow up automatically.',
    visualLabel: 'Invoice Builder',
    reversed: true,
  },
  {
    label: 'Platform',
    title: 'Expenses',
    body: 'Capture receipts, auto-categorise spend, and see exactly where your money is going.',
    visualLabel: 'Expense Tracker',
    reversed: false,
  },
];

const ProductSections = () => (
  <div className="product-sections">
    {PRODUCTS.map(({ label, title, body, visualLabel, reversed }) => (
      <div key={title} className={`product-section${reversed ? ' reversed' : ''}`}>
        <div className="product-text">
          <p className="product-label">{label}</p>
          <h2 className="product-title">{title}</h2>
          <p className="product-body">{body}</p>
          <a href="https://app.arcadeus.ai" className="product-btn">Learn More</a>
        </div>
        <div className="product-visual">
          <span className="product-visual-label">{visualLabel}</span>
        </div>
      </div>
    ))}
  </div>
);

export default ProductSections;
