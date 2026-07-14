import React from 'react';
import { motion } from 'framer-motion';
import './WhySection.css';

/* ── Connectivity mind map ─────────────────────── */

const CX = 200;
const CY = 150;

// 10 nodes evenly spaced on an ellipse (rx=120, ry=92)
const toRad = (deg) => (deg * Math.PI) / 180;
const INTEGRATIONS = [
  'Stripe', 'HMRC', 'HSBC', 'Lloyds', 'NatWest',
  'Monzo', 'Barclays', 'Starling', 'Xero', 'QuickBooks',
];
const NODES = INTEGRATIONS.map((label, i) => {
  const angle = i * 36; // 360 / 10
  return {
    label,
    x: Math.round(CX + 120 * Math.sin(toRad(angle))),
    y: Math.round(CY - 92  * Math.cos(toRad(angle))),
  };
});

const ConnectivityMap = () => (
  <svg viewBox="0 0 400 300" className="why-mindmap" aria-hidden="true">
    <defs>
      <linearGradient id="ctrGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2a2a2a" />
        <stop offset="100%" stopColor="#0e0e0e" />
      </linearGradient>
    </defs>

    {/* Connecting lines */}
    {NODES.map((n, i) => (
      <motion.path
        key={n.label + '-line'}
        d={`M ${CX} ${CY} L ${n.x} ${n.y}`}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
      />
    ))}

    {/* Outer nodes */}
    {NODES.map((n, i) => {
      const w = n.label.length * 6.8 + 20;
      const h = 20;
      return (
        <motion.g
          key={n.label}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.35 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={n.x - w / 2} y={n.y - h / 2}
            width={w} height={h}
            rx={h / 2}
            fill="rgba(255,255,255,0.06)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.75"
          />
          <text
            x={n.x} y={n.y + 4}
            textAnchor="middle"
            fill="rgba(255,255,255,0.75)"
            fontSize="9"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            letterSpacing="0.03"
          >
            {n.label}
          </text>
        </motion.g>
      );
    })}

    {/* Centre node — Arcadeus AI */}
    <motion.g
      style={{ transformOrigin: `${CX}px ${CY}px` }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <rect
        x={CX - 50} y={CY - 20}
        width={100} height={40}
        rx={8}
        fill="url(#ctrGrad)"
        stroke="rgba(255,255,255,0.38)"
        strokeWidth="1.25"
      />
      <text
        x={CX} y={CY - 4}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="11"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        letterSpacing="0.04"
      >
        Arcadeus
      </text>
      <text
        x={CX} y={CY + 10}
        textAnchor="middle"
        fill="rgba(255,255,255,0.45)"
        fontSize="9"
        fontFamily="Inter, sans-serif"
        fontWeight="400"
        letterSpacing="0.1"
      >
        AI
      </text>
    </motion.g>
  </svg>
);

/* ── Cards ─────────────────────────────────────── */

const CARDS = [
  {
    graphic: <ConnectivityMap />,
    title: 'Connected to what matters',
    body: 'Direct integrations with HMRC, major UK banks, Stripe, Xero and more — data flows in automatically, no manual entry required.',
    bg: '#0D0D0D',
  },
  {
    imageLabel: 'HMRC Compliance',
    title: 'Always compliant',
    body: 'HMRC-ready VAT returns, Self Assessment prep, and real-time tax estimates — built in from day one.',
    bg: 'linear-gradient(135deg, #111827 0%, #1a2233 100%)',
  },
  {
    imageLabel: 'Live Dashboard',
    title: 'Know your numbers',
    body: 'Live cash position, P&L, and runway in one view. No accountant needed for your weekly finance review.',
    bg: 'linear-gradient(135deg, #0f1a14 0%, #1a2a20 100%)',
  },
];

const WhySection = () => (
  <section className="why-section" id="why">
    <div className="why-inner">
      <h2 className="why-heading">Why the top performers choose Arcadeus</h2>
      <div className="why-cards">
        {CARDS.map(({ graphic, imageLabel, title, body, bg }) => (
          <div key={title} className="why-card">
            <div className="why-card-image" style={{ background: bg }}>
              {graphic
                ? <div className="why-card-graphic">{graphic}</div>
                : (
                  <div className="why-card-image-inner">
                    <span className="why-card-image-label">{imageLabel}</span>
                  </div>
                )
              }
            </div>
            <h3 className="why-card-title">{title}</h3>
            <p className="why-card-body">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
