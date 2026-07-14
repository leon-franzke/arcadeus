import React, { useEffect } from 'react';
import './ProductModal.css';
import ProductSections from './ProductSections';

const DashboardPlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body">
      <div className="pm-dash-header">
        <span className="pm-dash-label">Cash Position</span>
        <span className="pm-dash-value">£48,240</span>
        <span className="pm-dash-sub">+£3,120 this month</span>
      </div>
      <div className="pm-dash-bars">
        {[65, 80, 45, 90, 55, 70, 88].map((h, i) => (
          <div key={i} className="pm-bar-wrap">
            <div className="pm-bar" style={{ height: `${h}%` }} />
          </div>
        ))}
      </div>
      <div className="pm-dash-metrics">
        <div className="pm-metric">
          <span className="pm-metric-label">Money In</span>
          <span className="pm-metric-val pm-green">£12,400</span>
        </div>
        <div className="pm-metric">
          <span className="pm-metric-label">Money Out</span>
          <span className="pm-metric-val pm-red">£9,280</span>
        </div>
        <div className="pm-metric">
          <span className="pm-metric-label">Net</span>
          <span className="pm-metric-val">£3,120</span>
        </div>
      </div>
    </div>
  </div>
);

const ReceiptPlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body pm-receipt-body">
      <div className="pm-receipt-card">
        <div className="pm-receipt-scan-line" />
        <div className="pm-receipt-row">
          <span className="pm-receipt-label">Merchant</span>
          <span className="pm-receipt-val">Pret A Manger</span>
        </div>
        <div className="pm-receipt-row">
          <span className="pm-receipt-label">Amount</span>
          <span className="pm-receipt-val">£14.80</span>
        </div>
        <div className="pm-receipt-row">
          <span className="pm-receipt-label">Date</span>
          <span className="pm-receipt-val">12 Jul 2026</span>
        </div>
        <div className="pm-receipt-row">
          <span className="pm-receipt-label">VAT</span>
          <span className="pm-receipt-val pm-green">£2.47 detected</span>
        </div>
        <div className="pm-receipt-chips">
          <span className="pm-chip pm-chip-green">✓ AI Verified</span>
          <span className="pm-chip">Business Meals</span>
        </div>
      </div>
      <div className="pm-receipt-actions">
        <button className="pm-btn-primary">Approve</button>
        <button className="pm-btn-ghost">Edit</button>
      </div>
    </div>
  </div>
);

const InvoicePlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body pm-kanban-body">
      {[
        { col: 'Sent', color: 'pm-col-blue', items: ['Acme Corp — £4,200', 'Studio Nine — £800'] },
        { col: 'Overdue', color: 'pm-col-red', items: ['TechStart Ltd — £1,500'] },
        { col: 'Paid', color: 'pm-col-green', items: ['KPMG — £6,000', 'Bolt UK — £920', 'Monzo — £240'] },
      ].map(({ col, color, items }) => (
        <div className="pm-kanban-col" key={col}>
          <div className={`pm-kanban-col-label ${color}`}>{col}</div>
          {items.map((item) => (
            <div className="pm-kanban-card" key={item}>
              <span className="pm-kanban-name">{item.split('—')[0]}</span>
              <span className="pm-kanban-amt">{item.split('—')[1]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const BankPlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body">
      <div className="pm-bank-header">Connected Accounts</div>
      {[
        { name: 'Barclays Business', bal: '£31,400', sync: '2m ago' },
        { name: 'Monzo Business', bal: '£8,920', sync: 'Live' },
        { name: 'Starling Bank', bal: '£7,920', sync: '5m ago' },
      ].map((b) => (
        <div className="pm-bank-row" key={b.name}>
          <div className="pm-bank-dot" />
          <div className="pm-bank-info">
            <span className="pm-bank-name">{b.name}</span>
            <span className="pm-bank-sync">{b.sync}</span>
          </div>
          <span className="pm-bank-bal">{b.bal}</span>
        </div>
      ))}
      <div className="pm-tx-header">Recent Transactions</div>
      {[
        { desc: 'AWS Invoice', amt: '-£340', cat: 'Software' },
        { desc: 'Client Payment', amt: '+£4,200', cat: 'Revenue' },
        { desc: 'Office Supplies', amt: '-£84', cat: 'Operations' },
      ].map((t) => (
        <div className="pm-tx-row" key={t.desc}>
          <div className="pm-tx-info">
            <span className="pm-tx-desc">{t.desc}</span>
            <span className="pm-tx-cat">{t.cat}</span>
          </div>
          <span className={`pm-tx-amt ${t.amt.startsWith('+') ? 'pm-green' : ''}`}>{t.amt}</span>
        </div>
      ))}
    </div>
  </div>
);

const TaxPlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body">
      <div className="pm-tax-header">
        <span className="pm-tax-label">Estimated Tax Bill</span>
        <span className="pm-tax-value">£8,340</span>
        <span className="pm-tax-sub">Due 31 Jan 2027</span>
      </div>
      <div className="pm-tax-breakdown">
        {[
          { label: 'Income Tax', val: '£5,200', pct: 62 },
          { label: 'National Insurance', val: '£2,140', pct: 26 },
          { label: 'VAT Collected', val: '£1,000', pct: 12 },
        ].map((t) => (
          <div className="pm-tax-row" key={t.label}>
            <div className="pm-tax-row-top">
              <span className="pm-tax-row-label">{t.label}</span>
              <span className="pm-tax-row-val">{t.val}</span>
            </div>
            <div className="pm-tax-bar-bg">
              <div className="pm-tax-bar-fill" style={{ width: `${t.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="pm-tax-chips">
        <span className="pm-chip pm-chip-green">HMRC Ready</span>
        <span className="pm-chip">MTD Compatible</span>
      </div>
    </div>
  </div>
);

const MTDPlaceholder = () => (
  <div className="pm-screen">
    <div className="pm-screen-topbar">
      <span className="pm-screen-dot" /><span className="pm-screen-dot" /><span className="pm-screen-dot" />
    </div>
    <div className="pm-screen-body">
      <div className="pm-mtd-header">
        <span className="pm-tax-label">VAT Return — Q2 2026</span>
        <div className="pm-mtd-status">
          <span className="pm-chip pm-chip-green">MTD Compliant</span>
        </div>
      </div>
      <div className="pm-mtd-rows">
        {[
          { label: 'VAT due on sales (Box 1)', val: '£4,820.00' },
          { label: 'VAT reclaimed on purchases (Box 4)', val: '£1,240.00' },
          { label: 'Net VAT payable', val: '£3,580.00', bold: true },
          { label: 'Total value of sales (Box 6)', val: '£24,100.00' },
        ].map((r) => (
          <div className="pm-mtd-row" key={r.label}>
            <span className="pm-mtd-row-label">{r.label}</span>
            <span className={`pm-mtd-row-val ${r.bold ? 'pm-mtd-bold' : ''}`}>{r.val}</span>
          </div>
        ))}
      </div>
      <div className="pm-mtd-footer">
        <div className="pm-mtd-receipts">
          <span className="pm-mtd-receipts-label">Receipts stored</span>
          <span className="pm-mtd-receipts-count">147</span>
        </div>
        <button className="pm-btn-primary pm-mtd-submit">Submit to HMRC →</button>
      </div>
    </div>
  </div>
);

const sections = [
  {
    eyebrow: 'Cash Flow',
    title: 'See your money in real time',
    bullets: [
      'Live dashboard of inflows, outflows and net position',
      'Cash runway projections so you are never caught short',
      'Instant alerts when balance drops below your threshold',
    ],
    placeholder: <DashboardPlaceholder />,
    flip: false,
  },
  {
    eyebrow: 'Receipt Capture',
    title: 'Snap a receipt. Arcadeus does the rest',
    bullets: [
      'AI extracts merchant, amount, date and category instantly',
      'Automatic VAT detection at the correct rate',
      'One tap to approve — zero manual entry',
    ],
    placeholder: <ReceiptPlaceholder />,
    flip: true,
  },
  {
    eyebrow: 'Invoicing',
    title: 'Create, send and chase invoices automatically',
    bullets: [
      'Professional invoices built in seconds',
      'Automated follow-up sequences for overdue payments',
      'Full pipeline from Draft through to Paid',
    ],
    placeholder: <InvoicePlaceholder />,
    flip: false,
  },
  {
    eyebrow: 'Bank Connections',
    title: 'Every account, one place',
    bullets: [
      'Connect 10,000+ UK banks via Open Banking',
      'Read-only, bank-grade secure — we never touch your funds',
      'Transactions auto-categorised the moment they land',
    ],
    placeholder: <BankPlaceholder />,
    flip: true,
  },
  {
    eyebrow: 'Tax & VAT',
    title: 'Always know what you owe',
    bullets: [
      'Running tax bill estimate updated with every transaction',
      'VAT auto-detected and ring-fenced — 20%, 5% or 0% applied correctly every time',
      'HMRC-ready and Making Tax Digital compatible',
    ],
    placeholder: <TaxPlaceholder />,
    flip: false,
  },
  {
    eyebrow: 'Making Tax Digital',
    title: 'Submit VAT returns directly to HMRC',
    bullets: [
      'Fully MTD compliant — store digital VAT receipts as required by HMRC',
      'One-click VAT return submission directly through the Arcadeus platform',
      'Auto-populated VAT boxes using your real transaction data — no manual entry',
      'Covers MTD for VAT (all VAT-registered businesses) and MTD for Income Tax from April 2026',
    ],
    placeholder: <MTDPlaceholder />,
    flip: true,
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

        <ProductSections />

        <div className="pmodal-footer">
          <h3 className="pmodal-footer-title">Ready to take control of your finances?</h3>
          <a href="https://app.arcadeus.ai" className="pmodal-cta">Get Early Access</a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
