import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './ProductSections.css';

/* ── shared hooks ─────────────────────────────── */

const useCounter = (target, duration = 1400, delay = 400) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    const startAt = Date.now() + delay;
    const id = setInterval(() => {
      const elapsed = Date.now() - startAt;
      if (elapsed < 0) return;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [target, duration, delay]);
  return val;
};

const fmt = (n) => '£' + n.toLocaleString('en-GB');

/* ── shared animated row ──────────────────────── */
const Item = ({ delay, children, className = '', style }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ── 1. Cash Flow ─────────────────────────────── */
const CashFlowCard = () => {
  const balance = useCounter(48240, 1600, 300);
  return (
    <div className="fc">
      <Item delay={0} className="fc-tag-row">
        <span className="fc-tag">Cash Position</span>
        <span className="fc-live-badge">
          <span className="fc-live-dot" />
          Live
        </span>
      </Item>
      <Item delay={0.2} className="fc-hero-num">
        {fmt(balance)}
      </Item>
      <Item delay={0.5} className="fc-hero-sub fc-up">↑ £3,120 vs last month</Item>

      <div className="fc-rule" />

      <Item delay={0.65} className="fc-section-label">Connected Accounts</Item>

      {[
        ['Barclays Business', '£31,400', '2m ago', true],
        ['Monzo Business',    '£8,920',  'Live',   true],
        ['Starling Bank',     '£7,920',  '5m ago', false],
      ].map(([name, bal, sync, live], i) => (
        <Item key={name} delay={0.75 + i * 0.1} className="fc-bank-row">
          <span className={`fc-dot ${live ? 'fc-dot-live' : 'fc-dot-idle'}`} />
          <span className="fc-row-main">{name}</span>
          <span className="fc-row-muted">{sync}</span>
          <span className="fc-row-val">{bal}</span>
        </Item>
      ))}

      <div className="fc-rule" />

      <div className="fc-bar-pair">
        {[['Inflows', 72, '#1a7a4a'], ['Outflows', 44, 'rgba(13,13,13,0.7)']].map(([label, pct, color], i) => (
          <Item key={label} delay={1.1 + i * 0.1} className="fc-bar-item">
            <div className="fc-bar-label">{label}</div>
            <div className="fc-bar-track">
              <motion.div
                className="fc-bar-fill"
                style={{ background: color }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.9, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Item>
        ))}
      </div>
    </div>
  );
};

/* ── 2. Invoice ───────────────────────────────── */
const INVOICE_STEPS = [
  { label: 'Draft',          color: 'rgba(0,0,0,0.35)' },
  { label: 'Sent via email', color: '#2563eb' },
  { label: 'Chaser sent',    color: '#c2410c' },
  { label: '✓ Paid',         color: '#1a7a4a' },
];

const InvoiceCard = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2600);
    const t3 = setTimeout(() => setStep(3), 4400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="fc">
      <Item delay={0} className="fc-tag">Invoice Automation</Item>

      <Item delay={0.2} className="fc-invoice-box">
        <div className="fc-invoice-meta">
          <span className="fc-invoice-id">INV-0042</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              className="fc-status-pill"
              style={{ color: INVOICE_STEPS[step].color, borderColor: INVOICE_STEPS[step].color + '44' }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {INVOICE_STEPS[step].label}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="fc-invoice-client">Acme Corp Ltd</div>
        <div className="fc-invoice-amount">£4,200.00</div>
        <div className="fc-invoice-due">Due 28 Jul 2026</div>
      </Item>

      <Item delay={0.5} className="fc-field-box">
        <div className="fc-field-label">Payment Link</div>
        <div className="fc-field-value fc-link">pay.arcadeus.ai/inv/0042</div>
      </Item>

      <div className="fc-rule" />

      <Item delay={0.7} className="fc-section-label">Automated Chasers</Item>
      {[
        ['Day 7',  'Friendly reminder sent automatically'],
        ['Day 14', 'Final notice with payment link resent'],
      ].map(([d, t], i) => (
        <Item key={d} delay={0.8 + i * 0.12} className="fc-chaser-row">
          <span className="fc-chaser-day">{d}</span>
          <span className="fc-row-muted">{t}</span>
        </Item>
      ))}
    </div>
  );
};

/* ── 3. Expenses ──────────────────────────────── */
const ExpenseCard = () => {
  const [synced, setSynced] = useState(false);
  useEffect(() => {
    setSynced(false);
    const t = setTimeout(() => setSynced(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fc">
      <Item delay={0} className="fc-tag">Expense Automation</Item>

      <Item delay={0.15} className="fc-sync-row">
        <motion.div
          className="fc-sync-dot"
          animate={synced ? { opacity: 1 } : { opacity: [1, 0.3, 1] }}
          transition={{ repeat: synced ? 0 : Infinity, duration: 1.2 }}
          style={{ background: synced ? '#1a7a4a' : '#c2410c' }}
        />
        <span className="fc-row-muted">
          {synced ? '4 transactions imported' : 'Syncing Barclays Business…'}
        </span>
        {synced && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fc-up"
            style={{ fontSize: 13, fontWeight: 700 }}
          >✓</motion.span>
        )}
      </Item>

      <div className="fc-rule" />

      {[
        ['AWS Cloud Services',  '-£340.00',   'Software', 0.6],
        ['WeWork Offices',      '-£2,400.00', 'Rent',     0.74],
        ['Adobe Creative',      '-£54.99',    'Software', 0.88],
        ['Pret A Manger',       '-£14.80',    'Meals',    1.02],
      ].map(([name, amt, cat, delay]) => (
        <Item key={name} delay={delay} className="fc-tx-row">
          <div>
            <div className="fc-row-main">{name}</div>
            <div className="fc-cat">{cat}</div>
          </div>
          <div className="fc-row-val">{amt}</div>
        </Item>
      ))}

      <div className="fc-rule" />
      <Item delay={1.2} className="fc-footer-note">
        <span className="fc-up" style={{ fontWeight: 600 }}>✓ Auto-categorised</span>
        <span className="fc-row-muted">via Open Banking</span>
      </Item>
    </div>
  );
};

/* ── 4. AI Forecast ───────────────────────────── */
const ForecastCard = () => {
  const projected = useCounter(62400, 1600, 600);
  return (
    <div className="fc">
      <Item delay={0} className="fc-tag">AI Budget & Forecast</Item>
      <Item delay={0.2} className="fc-hero-num" style={{ fontSize: 'clamp(30px, 3.5vw, 40px)' }}>
        {fmt(projected)}
      </Item>
      <Item delay={0.4} className="fc-hero-sub">Projected balance in 90 days</Item>

      <Item delay={0.5} className="fc-chart-wrap">
        <svg viewBox="0 0 320 90" className="fc-svg">
          <defs>
            <linearGradient id="fcGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a7a4a" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1a7a4a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,76 C30,72 55,62 85,54 C115,46 140,42 170,34 C200,26 230,18 260,12 L320,6"
            fill="none" stroke="#1a7a4a" strokeWidth="2.5" strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
          />
          <motion.path
            d="M0,76 C30,72 55,62 85,54 C115,46 140,42 170,34 C200,26 230,18 260,12 L320,6 L320,90 L0,90Z"
            fill="url(#fcGrad)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          />
        </svg>
        <div className="fc-chart-axis">
          <span>Today</span><span>30d</span><span>60d</span><span>90d</span>
        </div>
      </Item>

      <div className="fc-rule" />

      {[
        ['Projected Revenue', '£28,400', 'fc-up'],
        ['Burn Rate',         '£14,000 / mo', ''],
        ['Cash Runway',       '4.5 months', ''],
      ].map(([l, v, cls], i) => (
        <Item key={l} delay={1.4 + i * 0.12} className="fc-metric-row">
          <span className="fc-row-muted">{l}</span>
          <span className={`fc-row-val ${cls}`}>{v}</span>
        </Item>
      ))}
    </div>
  );
};

/* ── 5. Customer Analysis ─────────────────────── */
const CustomerCard = () => (
  <div className="fc">
    <Item delay={0} className="fc-tag">Customer Analysis</Item>
    <Item delay={0.15} className="fc-hero-sub" style={{ marginBottom: 0 }}>
      Ranked by revenue contribution
    </Item>

    <div className="fc-rule" />

    {[
      ['Acme Corp Ltd', '£24,200', 68, '01'],
      ['TechStart Ltd', '£11,400', 32, '02'],
      ['Studio Nine',   '£8,800',  25, '03'],
      ['Bolt UK',       '£4,200',  12, '04'],
    ].map(([name, rev, pct, rank], i) => (
      <Item key={name} delay={0.25 + i * 0.12} className="fc-customer-block">
        <div className="fc-customer-header">
          <span className="fc-rank">#{rank}</span>
          <span className="fc-row-main" style={{ flex: 1 }}>{name}</span>
          <span className="fc-row-val">{rev}</span>
        </div>
        <div className="fc-bar-track">
          <motion.div
            className="fc-bar-fill"
            style={{ background: '#0D0D0D' }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="fc-row-muted" style={{ fontSize: 11, marginTop: 3 }}>
          {pct}% of total revenue
        </div>
      </Item>
    ))}

    <div className="fc-rule" />
    <Item delay={1.0} className="fc-metric-row">
      <span className="fc-row-muted">Total billed Q2</span>
      <span className="fc-row-val fc-up">£48,600</span>
    </Item>
  </div>
);

/* ── 6. VAT / MTD ─────────────────────────────── */
const VATCard = () => {
  const count = useCounter(147, 1200, 400);
  return (
    <div className="fc">
      <Item delay={0} className="fc-tag">VAT & MTD Tracking</Item>

      <Item delay={0.2} className="fc-vat-receipt-block">
        <div className="fc-row-muted" style={{ marginBottom: 8 }}>Receipts stored digitally</div>
        <div className="fc-hero-num">{count}</div>
        <div className="fc-row-muted" style={{ marginTop: 6 }}>this quarter · MTD compliant</div>
      </Item>

      <div className="fc-rule" />

      <Item delay={0.6} className="fc-section-label">VAT Collected</Item>

      {[
        ['Standard Rate', '20%', '£4,820.00'],
        ['Reduced Rate',  '5%',  '£124.00'],
        ['Zero Rate',     '0%',  '£680.00'],
      ].map(([l, rate, v], i) => (
        <Item key={l} delay={0.7 + i * 0.12} className="fc-vat-row">
          <span className="fc-row-main">{l}</span>
          <span className="fc-rate-badge">{rate}</span>
          <span className="fc-row-val">{v}</span>
        </Item>
      ))}

      <div className="fc-rule" />

      <Item delay={1.1} className="fc-footer-note">
        <span className="fc-row-muted">HMRC requires digital storage from</span>
        <span className="fc-row-main" style={{ fontWeight: 600 }}>April 2027</span>
      </Item>
    </div>
  );
};

/* ── 7. HMRC Submission ───────────────────────── */
const HMRCCard = () => {
  const [filed, setFiled] = useState(false);
  useEffect(() => {
    setFiled(false);
    const t = setTimeout(() => setFiled(true), 3200);
    return () => clearTimeout(t);
  }, []);

  const boxes = [
    ['Box 1', 'VAT on sales',        '£4,820.00', false],
    ['Box 4', 'VAT reclaimed',        '£1,240.00', false],
    ['Box 5', 'Net VAT to pay',       '£3,580.00', true],
    ['Box 6', 'Total value of sales', '£24,100.00', false],
  ];

  return (
    <div className="fc">
      <Item delay={0} className="fc-tag">HMRC MTD Submission</Item>
      <Item delay={0.15} className="fc-section-label" style={{ marginBottom: 0 }}>
        VAT Return — Q2 2026
      </Item>

      <div className="fc-rule" />

      {boxes.map(([box, label, val, bold], i) => (
        <Item key={box} delay={0.3 + i * 0.15} className={`fc-hmrc-row ${bold ? 'fc-hmrc-bold' : ''}`}>
          <span className="fc-hmrc-box">{box}</span>
          <span className="fc-row-muted" style={{ flex: 1 }}>{label}</span>
          <motion.span
            className={`fc-row-val ${bold ? 'fc-up' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
          >
            {val}
          </motion.span>
        </Item>
      ))}

      <div className="fc-rule" />

      <AnimatePresence mode="wait">
        {filed ? (
          <motion.div
            key="done"
            className="fc-submit-success"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span style={{ fontSize: 20 }}>✓</span>
            <span>Filed with HMRC</span>
          </motion.div>
        ) : (
          <motion.div
            key="btn"
            className="fc-submit-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <span>Submit to HMRC</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >→</motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ── cards registry ───────────────────────────── */
const CARDS = [CashFlowCard, InvoiceCard, ExpenseCard, ForecastCard, CustomerCard, VATCard, HMRCCard];

const FEATURES = [
  {
    word: 'Live',
    eyebrow: 'Cash Flow',
    desc: 'Know your exact cash position at all times. AI analyses patterns across all connected bank accounts to estimate future inflows and outflows — so you\'re never caught short.',
  },
  {
    word: 'Invoice',
    eyebrow: 'Invoice Automation',
    desc: 'Send professional invoices with built-in payment links. Automated chasers go out if someone hasn\'t paid — you spend less time chasing and more time doing.',
  },
  {
    word: 'Automate',
    eyebrow: 'Expense Automation',
    desc: 'Bank transactions flow in automatically via Open Banking. Arcadeus reads your outflows, matches them to bills, and lets you pay suppliers directly from the platform.',
  },
  {
    word: 'Forecast',
    eyebrow: 'AI Budget & Forecast',
    desc: '90-day projections for budget, burn rate and income — built from your historical patterns. Know your runway before it becomes a problem.',
  },
  {
    word: 'Analyse',
    eyebrow: 'Customer Analysis',
    desc: 'See exactly who drives your revenue. Rank customers by spend, spot your most valuable relationships, and identify who contributes the least — all automatically.',
  },
  {
    word: 'Comply',
    eyebrow: 'VAT & MTD Tracking',
    desc: 'Every transaction stored digitally with full receipt data — exactly as HMRC requires under Making Tax Digital. VAT calculated at the correct rate on every expense.',
  },
  {
    word: 'Submit',
    eyebrow: 'HMRC MTD Submission',
    desc: 'File your VAT return directly to HMRC from Arcadeus. Net VAT calculated automatically. Tax outflows factored into your cash projections before they land.',
  },
];

/* ── layout sections ──────────────────────────── */

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.9, 1]);

  return (
    <div ref={ref} className="ps-hero">
      <motion.div
        className="ps-hero-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="ps-hero-eyebrow">The Platform</p>
        <h2 className="ps-hero-title">Finance built for<br />ambitious businesses</h2>
        <p className="ps-hero-sub">
          Cash flow, invoices, expenses, tax and HMRC submissions — everything in one place.
        </p>
      </motion.div>
      <motion.div style={{ y, opacity, scale }} className="ps-hero-laptop">
        <div className="ps-laptop">
          <div className="ps-laptop-screen">
            <div className="ps-laptop-notch" />
            <div className="ps-laptop-display">
              <img src="/screenshots/dashboard.png" alt="Arcadeus platform" className="ps-laptop-img" />
            </div>
          </div>
          <div className="ps-laptop-hinge" />
          <div className="ps-laptop-base"><div className="ps-laptop-foot" /></div>
        </div>
      </motion.div>
    </div>
  );
};

const StickySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  const ActiveCard = CARDS[activeIndex];

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <div className="ps-sticky-outer">
      <div className="ps-sticky-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="ps-card-shell"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ActiveCard />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="ps-sticky-right">
        {/* Sticky text — stays put, content swaps */}
        <div className="ps-sticky-text">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="ps-feature-text"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="ps-eyebrow">{FEATURES[activeIndex].eyebrow}</p>
              <h2 className="ps-word">{FEATURES[activeIndex].word}</h2>
              <p className="ps-desc">{FEATURES[activeIndex].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Invisible scroll drivers — one per feature to trigger IntersectionObserver */}
        {FEATURES.map((f, i) => (
          <div
            key={f.word}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="ps-scroll-driver"
          />
        ))}
      </div>
    </div>
  );
};

const CTASection = () => (
  <div className="ps-cta">
    <motion.div
      className="ps-cta-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="ps-cta-eyebrow">Get Started</p>
      <h2 className="ps-cta-title">Your finances,<br />finally in order</h2>
      <p className="ps-cta-sub">
        Join UK businesses using Arcadeus to track, manage and submit — all from one place.
      </p>
      <button
        className="ps-cta-btn"
        onClick={() => window.dispatchEvent(new CustomEvent('arcadeus:openPricing'))}
      >
        Choose a Plan
      </button>
    </motion.div>
  </div>
);

const ProductSections = () => {
  const darkSentinelRef = useRef(null);
  const lightSentinelRef = useRef(null);

  useEffect(() => {
    const darkObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 64) {
          window.dispatchEvent(new CustomEvent('arcadeus:darkSection'));
        } else if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent('arcadeus:lightSection'));
        }
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );
    const lightObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 64) {
          window.dispatchEvent(new CustomEvent('arcadeus:lightSection'));
        } else if (entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent('arcadeus:darkSection'));
        }
      },
      { rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );
    if (darkSentinelRef.current) darkObs.observe(darkSentinelRef.current);
    if (lightSentinelRef.current) lightObs.observe(lightSentinelRef.current);
    return () => { darkObs.disconnect(); lightObs.disconnect(); };
  }, []);

  return (
    <div className="ps-root">
      <HeroSection />
      <div ref={darkSentinelRef} />
      <StickySection />
      <div ref={lightSentinelRef} />
      <CTASection />
    </div>
  );
};

export default ProductSections;
