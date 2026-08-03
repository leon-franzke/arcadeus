import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';
import ComingSoonModal from './ComingSoonModal';

const Pricing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const pricingTiers = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'For sole traders and freelancers getting started.',
      price: '£29',
      period: '/month',
      features: [
        '1 user license',
        'Up to 100 transactions/month',
        'AI receipt capture, tax categorisation & HMRC-compliant storage',
        'AI cash flow forecast',
        'AI deadline alerts',
        'Customer invoicing with automated chasing function',
        'MTD-compatible VAT & Self Assessment filing',
      ],
      buttonText: 'Sign Up',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'For growing small businesses that need the full picture.',
      price: '£79',
      period: '/month',
      features: [
        'Up to 10 user licenses',
        'Unlimited transactions',
        'AI receipt capture, tax categorisation & HMRC-compliant storage',
        'AI cash flow forecast',
        'AI deadline alerts',
        'Customer invoicing with automated chasing function',
        'MTD-compatible VAT & Self Assessment filing',
        'Expense approval workflow with company hierarchy',
        'Priority support',
      ],
      buttonText: 'Sign Up',
      buttonType: 'primary',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For teams that need dedicated support and custom infrastructure.',
      price: 'Custom',
      period: '',
      features: [
        '25+ user licenses',
        'Unlimited transactions',
        'AI receipt capture, tax categorisation & HMRC-compliant storage',
        'AI cash flow forecast',
        'AI deadline alerts',
        'Customer invoicing with automated chasing function',
        'MTD-compatible VAT & Self Assessment filing',
        'Expense approval workflow with company hierarchy',
        'Priority support',
      ],
      buttonText: 'Contact Us',
      buttonType: 'secondary',
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="pricing-title">
              Choose Your Plan
            </h1>
            <p className="pricing-subtitle">
              Flexible pricing options designed to grow with your needs. 
              Start with a free trial and upgrade anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`pricing-card ${tier.popular ? 'popular' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {tier.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}
                
                <div className="card-header">
                  <h3 className="tier-name">{tier.name}</h3>
                  <p className="tier-subtitle">{tier.subtitle}</p>
                  
                  <div className="pricing-info">
                    <span className="price">{tier.price}</span>
                    <span className="period">{tier.period}</span>
                  </div>
                  
                  <p className="tier-description">{tier.description}</p>
                </div>

                <div className="card-body">
                  <ul className="features-list">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  {tier.id === 'enterprise' ? (
                    <a
                      href="mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20Enterprise%20Inquiry&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20am%20interested%20in%20the%20Enterprise%20plan.%20Please%20get%20in%20touch.%0A%0AThank%20you%2C%0A%5BYour%20Name%5D"
                      className={`pricing-btn btn-secondary`}
                      style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >
                      {tier.buttonText}
                    </a>
                  ) : (
                    <button
                      onClick={() => window.dispatchEvent(new Event('arcadeus:signUp'))}
                      className={`pricing-btn ${tier.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ width: '100%' }}
                    >
                      {tier.buttonText}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="container">
          <motion.div
            className="faq-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Questions? We're here to help.</h2>
            <p>
              Need a custom solution or have questions about our pricing? 
              Our team is ready to help you find the perfect plan.
            </p>
            
            <div className="faq-buttons">
              <a href="mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20Sales%20Inquiry&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20Arcadeus%20solutions%20for%20my%20organization.%20%0A%0APlease%20provide%20information%20about%3A%0A-%20Pricing%20options%0A-%20Implementation%20process%0A-%20Available%20features%0A-%20Support%20and%20training%0A%0AContact%20details%3A%0A-%20Name%3A%20%5BPlease%20fill%20in%5D%0A-%20Company%3A%20%5BPlease%20fill%20in%5D%0A-%20Phone%3A%20%5BOptional%5D%0A-%20Best%20time%20to%20contact%3A%20%5BPlease%20fill%20in%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D" className="btn btn-primary">
                Contact Sales
              </a>
              <a href="#support" className="btn btn-secondary">
                View FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <ComingSoonModal 
        isOpen={showComingSoon} 
        onClose={() => setShowComingSoon(false)} 
      />
    </div>
  );
};

export default Pricing;