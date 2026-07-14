import React from 'react';
import { motion } from 'framer-motion';
import './WhySection.css';

/* ── layout constants ───────────────────────── */
const W = 900, H = 420;
const CX = 450, CY = 210;
const NODE_W = 96, NODE_H = 34;
const LX = 28;               // left node x origin
const RX = W - LX - NODE_W; // right node x origin  = 776
const CONV_X = CX - 62;     // = 388 — left edge of centre box
const DIV_X  = CX + 62;     // = 512 — right edge of centre box

const LEFT_NODES  = ['HSBC', 'Barclays', 'Monzo', 'Starling', 'Lloyds'];
const RIGHT_NODES = ['Stripe', 'HMRC', 'Xero', 'QuickBooks'];

// 5 left nodes, 4 right nodes — compute Y positions independently
const LEFT_YS  = [-140, -70, 0, 70, 140].map(d => CY + d);   // [70,140,210,280,350]
const RIGHT_YS = [-112, -37, 37, 112].map(d => CY + d);        // [98,173,247,322]

/* bezier path helpers */
const leftPath  = (y) =>
  `M ${LX + NODE_W} ${y} C ${(LX + NODE_W + CONV_X) / 2} ${y} ${CONV_X} ${CY} ${CONV_X} ${CY}`;
const rightPath = (y) =>
  `M ${DIV_X} ${CY} C ${DIV_X} ${CY} ${(DIV_X + RX) / 2} ${y} ${RX} ${y}`;

/* ── node pill ──────────────────────────────── */
const NodePill = ({ label, x, y, delay, align = 'left' }) => (
  <motion.g
    initial={{ opacity: 0, x: align === 'left' ? -12 : 12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <rect
      x={x} y={y - NODE_H / 2}
      width={NODE_W} height={NODE_H}
      rx={NODE_H / 2}
      fill="#ffffff"
      stroke="rgba(0,0,0,0.1)"
      strokeWidth="1"
    />
    <text
      x={x + NODE_W / 2} y={y + 5}
      textAnchor="middle"
      fill="#0D0D0D"
      fontSize="11.5"
      fontFamily="Inter, sans-serif"
      fontWeight="500"
    >
      {label}
    </text>
  </motion.g>
);

/* ── main diagram ───────────────────────────── */
const EcosystemMap = () => (
  <svg viewBox={`0 0 ${W} ${H}`} className="why-ecosystem-svg" aria-hidden="true">

    {/* column labels */}
    <text
      x={LX + NODE_W / 2} y={30}
      textAnchor="middle"
      fill="rgba(0,0,0,0.28)"
      fontSize="9" fontFamily="Inter, sans-serif"
      fontWeight="600" letterSpacing="0.12em"
    >
      BANKS &amp; ACCOUNTS
    </text>
    <text
      x={RX + NODE_W / 2} y={30}
      textAnchor="middle"
      fill="rgba(0,0,0,0.28)"
      fontSize="9" fontFamily="Inter, sans-serif"
      fontWeight="600" letterSpacing="0.12em"
    >
      TOOLS &amp; PLATFORMS
    </text>

    {/* connecting bezier lines — left */}
    {LEFT_YS.map((y, i) => (
      <motion.path
        key={`l-${i}`}
        d={leftPath(y)}
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
      />
    ))}

    {/* connecting bezier lines — right */}
    {RIGHT_YS.map((y, i) => (
      <motion.path
        key={`r-${i}`}
        d={rightPath(y)}
        fill="none"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.7, delay: 0.45 + i * 0.07, ease: 'easeOut' }}
      />
    ))}

    {/* left node pills */}
    {LEFT_NODES.map((label, i) => (
      <NodePill
        key={label}
        label={label}
        x={LX} y={LEFT_YS[i]}
        delay={0.05 + i * 0.07}
        align="left"
      />
    ))}

    {/* right node pills */}
    {RIGHT_NODES.map((label, i) => (
      <NodePill
        key={label}
        label={label}
        x={RX} y={RIGHT_YS[i]}
        delay={0.5 + i * 0.07}
        align="right"
      />
    ))}

    {/* radar ping rings — Framer Motion keyframes, no CSS transforms (Safari safe) */}
    <motion.rect
      x={CX - 62} y={CY - 34}
      width={124} height={68}
      rx={14}
      fill="none"
      stroke="rgba(0,0,0,0.3)"
      strokeWidth="1.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.8, 0] }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 0, delay: 0.6 }}
    />
    <motion.rect
      x={CX - 62} y={CY - 34}
      width={124} height={68}
      rx={14}
      fill="none"
      stroke="rgba(0,0,0,0.18)"
      strokeWidth="1.5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 0] }}
      viewport={{ once: false, amount: 0 }}
      transition={{ duration: 2, ease: 'easeOut', repeat: Infinity, repeatDelay: 0, delay: 1.6 }}
    />

    {/* centre Arcadeus AI node */}
    <motion.g
      style={{ transformOrigin: `${CX}px ${CY}px` }}
      initial={{ opacity: 0, scale: 0.75 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* main box */}
      <rect
        x={CX - 62} y={CY - 34}
        width={124} height={68}
        rx={14}
        fill="#0D0D0D"
      />
      <text
        x={CX} y={CY - 6}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="14"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        letterSpacing="0.02em"
      >
        Arcadeus
      </text>
      <text
        x={CX} y={CY + 12}
        textAnchor="middle"
        fill="rgba(255,255,255,0.45)"
        fontSize="10"
        fontFamily="Inter, sans-serif"
        fontWeight="400"
        letterSpacing="0.14em"
      >
        AI LAYER
      </text>
    </motion.g>
  </svg>
);

/* ── section ────────────────────────────────── */
const WhySection = () => (
  <section className="why-section" id="why">
    <div className="why-inner">
      <div className="why-header">
        <motion.h2
          className="why-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          The AI layer for your financial ecosystem
        </motion.h2>
        <motion.p
          className="why-subheading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Arcadeus sits between your banks, tools and HMRC — pulling in data
          automatically and giving you one intelligent view of your finances.
        </motion.p>
      </div>

      <EcosystemMap />
    </div>
  </section>
);

export default WhySection;
