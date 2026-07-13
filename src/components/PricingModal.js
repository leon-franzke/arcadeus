import React, { useEffect } from 'react';
import './PricingModal.css';

const tiers = [
  {
    name: 'Starter',
    price: '£29',
    period: '/month',
    description: 'For sole traders and freelancers getting started.',
    features: [
      'Up to 100 transactions/month',
      'AI receipt capture',
      'Invoice creation & sending',
      'Cash flow dashboard',
      'Basic tax estimates',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '£79',
    period: '/month',
    description: 'For growing small businesses that need the full picture.',
    features: [
      'Unlimited transactions',
      'Bank API connections',
      'AI receipt capture',
      'Invoice & expense management',
      'Live P&L and cash flow',
      'VAT & tax management',
      'Smart alerts',
      'Priority support',
    ],
    cta: 'Get Early Access',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams that need dedicated support and custom integrations.',
    features: [
      'Everything in Growth',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'Team access & permissions',
      'Custom reporting',
    ],
    cta: 'Contact Us',
    highlight: false,
    contactLink: true,
  },
];

const PricingModal = ({ onClose }) => {
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

        <div className="prmodal-header">
          <p className="prmodal-eyebrow">Pricing</p>
          <h2 className="prmodal-title">Simple, transparent pricing</h2>
          <p className="prmodal-subtitle">
            No hidden fees. Cancel any time. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="prmodal-tiers">
          {tiers.map((tier) => (
            <div className={`prmodal-tier ${tier.highlight ? 'prmodal-tier--featured' : ''}`} key={tier.name}>
              {tier.highlight && <span className="prmodal-badge">Most Popular</span>}
              <p className="prmodal-tier-name">{tier.name}</p>
              <div className="prmodal-price-row">
                <span className="prmodal-price">{tier.price}</span>
                {tier.period && <span className="prmodal-period">{tier.period}</span>}
              </div>
              <p className="prmodal-tier-desc">{tier.description}</p>
              <ul className="prmodal-features">
                {tier.features.map((f) => (
                  <li key={f}>
                    <span className="prmodal-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.contactLink ? 'mailto:hello@arcadeus.ai' : 'https://app.arcadeus.ai'}
                className={`prmodal-cta ${tier.highlight ? 'prmodal-cta--featured' : ''}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="prmodal-note">
          All prices exclude VAT. Early access members lock in founding member rates permanently.
        </p>
      </div>
    </div>
  );
};

export default PricingModal;
