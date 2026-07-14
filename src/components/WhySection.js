import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './WhySection.css';

/* ── layout constants ───────────────────────── */
const W = 900, H = 490;
const CX = 450, CY = 200;          // centre node
const NODE_W = 96, NODE_H = 34;
const LX = 28;
const RX = W - LX - NODE_W;        // 776

/* centre box edges */
const BOX_L = CX - 62;             // 388
const BOX_R = CX + 62;             // 512
const BOX_B = CY + 34;             // 234  (bottom)

/* left → centre convergence / centre → right divergence */
const CONV_X = BOX_L;
const DIV_X  = BOX_R;

/* nodes */
const LEFT_NODES   = ['HSBC', 'Barclays', 'Monzo', 'Starling', 'Lloyds'];
const RIGHT_NODES  = ['Stripe', 'Xero', 'QuickBooks'];
const BOTTOM_NODES = ['HMRC', 'MTD Filing'];

const LEFT_YS   = [-140, -70, 0, 70, 140].map(d => CY + d);
const RIGHT_YS  = [-75, 0, 75].map(d => CY + d);
const BOTTOM_Y  = 390;
const BOTTOM_XS = [CX - 80, CX + 80];   // x centres of bottom pills

/* bezier path helpers */
const leftPath   = (y) =>
  `M ${LX + NODE_W} ${y} C ${(LX + NODE_W + CONV_X) / 2} ${y} ${CONV_X} ${CY} ${CONV_X} ${CY}`;
const rightPath  = (y) =>
  `M ${DIV_X} ${CY} C ${DIV_X} ${CY} ${(DIV_X + RX) / 2} ${y} ${RX} ${y}`;
const bottomPath = (x) =>
  `M ${CX} ${BOX_B} C ${CX} ${(BOX_B + BOTTOM_Y) / 2} ${x} ${BOTTOM_Y - 40} ${x} ${BOTTOM_Y - NODE_H / 2}`;

/* ── node pill ──────────────────────────────── */
const NodePill = ({ label, x, y, delay, align, inView }) => (
  <motion.g
    animate={inView
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: align === 'left' ? -12 : align === 'right' ? 12 : 0 }}
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
const EcosystemMap = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="why-ecosystem-svg"
      aria-hidden="true"
    >
      {/* ── column / section labels ────────── */}
      <text x={LX + NODE_W / 2} y={28} textAnchor="middle"
        fill="rgba(0,0,0,0.28)" fontSize="9"
        fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.12em">
        BANKS &amp; ACCOUNTS
      </text>
      <text x={RX + NODE_W / 2} y={28} textAnchor="middle"
        fill="rgba(0,0,0,0.28)" fontSize="9"
        fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.12em">
        TOOLS &amp; PLATFORMS
      </text>
      <text x={CX} y={H - 14} textAnchor="middle"
        fill="rgba(0,0,0,0.28)" fontSize="9"
        fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="0.12em">
        TAX &amp; COMPLIANCE
      </text>

      {/* ── bezier lines — left ───────────── */}
      {LEFT_YS.map((y, i) => (
        <motion.path key={`l-${i}`}
          d={leftPath(y)} fill="none"
          stroke="rgba(0,0,0,0.1)" strokeWidth="1.5"
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: 'easeOut' }}
        />
      ))}

      {/* ── bezier lines — right ──────────── */}
      {RIGHT_YS.map((y, i) => (
        <motion.path key={`r-${i}`}
          d={rightPath(y)} fill="none"
          stroke="rgba(0,0,0,0.1)" strokeWidth="1.5"
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.45 + i * 0.07, ease: 'easeOut' }}
        />
      ))}

      {/* ── bezier lines — bottom (tax) ───── */}
      {BOTTOM_XS.map((x, i) => (
        <motion.path key={`b-${i}`}
          d={bottomPath(x)} fill="none"
          stroke="rgba(0,0,0,0.1)" strokeWidth="1.5"
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
        />
      ))}

      {/* ── left node pills ───────────────── */}
      {LEFT_NODES.map((label, i) => (
        <NodePill key={label} label={label}
          x={LX} y={LEFT_YS[i]}
          delay={0.05 + i * 0.07} align="left" inView={inView}
        />
      ))}

      {/* ── right node pills ──────────────── */}
      {RIGHT_NODES.map((label, i) => (
        <NodePill key={label} label={label}
          x={RX} y={RIGHT_YS[i]}
          delay={0.5 + i * 0.07} align="right" inView={inView}
        />
      ))}

      {/* ── bottom node pills (tax) ───────── */}
      {BOTTOM_NODES.map((label, i) => (
        <NodePill key={label} label={label}
          x={BOTTOM_XS[i] - NODE_W / 2} y={BOTTOM_Y}
          delay={0.65 + i * 0.1} align="bottom" inView={inView}
        />
      ))}

      {/* ── grey fill halo (pulses) ───────── */}
      <motion.rect
        x={CX - 74} y={CY - 46}
        width={148} height={92} rx={20}
        fill="rgba(0,0,0,0.055)"
        animate={inView ? { opacity: [0.2, 1, 0.2] } : { opacity: 0 }}
        transition={{ duration: 2.6, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
      />

      {/* ── expanding outline rings ───────── */}
      {[
        { s: 1.28, delay: 0.8,  opacity: [0, 0.55, 0] },
        { s: 1.62, delay: 1.05, opacity: [0, 0.35, 0] },
        { s: 1.96, delay: 1.3,  opacity: [0, 0.18, 0] },
      ].map(({ s, delay, opacity }, i) => (
        <motion.rect key={`ring-${i}`}
          x={CX - 62 * s} y={CY - 34 * s}
          width={124 * s} height={68 * s}
          rx={14 * s}
          fill="none" stroke="rgba(0,0,0,0.7)" strokeWidth="1"
          animate={inView ? { opacity } : { opacity: 0 }}
          transition={{ duration: 2.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.6, delay }}
        />
      ))}

      {/* ── centre Arcadeus AI node ───────── */}
      <motion.g
        style={{ transformOrigin: `${CX}px ${CY}px` }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect x={CX - 62} y={CY - 34} width={124} height={68} rx={14} fill="#0D0D0D" />
        <text x={CX} y={CY - 6} textAnchor="middle"
          fill="#ffffff" fontSize="14"
          fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.02em">
          Arcadeus
        </text>
        <text x={CX} y={CY + 12} textAnchor="middle"
          fill="rgba(255,255,255,0.45)" fontSize="10"
          fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="0.14em">
          AI LAYER
        </text>
      </motion.g>
    </svg>
  );
};

/* ── section ────────────────────────────────── */
const WhySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0 });

  return (
    <section className="why-section" id="why">
      <div className="why-inner">
        <div className="why-header" ref={headerRef}>
          <motion.h2
            className="why-heading"
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            The AI layer for your financial ecosystem
          </motion.h2>
          <motion.p
            className="why-subheading"
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
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
};

export default WhySection;
