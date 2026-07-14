import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';
import ComingSoonModal from './ComingSoonModal';

const Pricing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const pricingTiers = [
    {
      id: 'lite',
      name: 'Finance Professional Lite',
      subtitle: 'Essential tools for getting started',
      price: '$39',
      period: '/month',
      description: 'Core features to begin your financial modeling journey',
      features: [
        'Up to 10 models per month',
        'Basic AI formula suggestions',
        'Standard templates library',
        'Excel integration plugin'
      ],
      buttonText: 'Start Free Trial',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'expert',
      name: 'Finance Professional Expert',
      subtitle: 'Advanced finance tools',
      price: '$59',
      period: '/month',
      description: 'Advanced tools for finance professionals',
      features: [
        'Unlimited model creation',
        'Advanced AI-powered suggestions',
        'Premium templates library'
      ],
      buttonText: 'Start Free Trial',
      buttonType: 'primary',
      popular: true
    },
    {
      id: 'education',
      name: 'Education',
      subtitle: 'Tailored for academic institutions',
      price: 'Custom',
      period: '',
      description: 'Comprehensive solutions for educational excellence',
      features: [
        'Curriculum integration support',
        'Student progress tracking',
        'Bulk licensing discounts',
        'Instructor training programs'
      ],
      buttonText: 'Contact Sales',
      buttonType: 'secondary',
      popular: false
    },
    {
      id: 'enterprise',
      name: 'Enterprise Licenses',
      subtitle: 'Scale across your organization',
      price: 'Custom',
      period: '',
      description: 'Advanced features for large-scale operations',
      features: [
        'Unlimited team members',
        'Advanced security & compliance',
        'Custom integrations',
        'Dedicated account manager'
      ],
      buttonText: 'Contact Sales',
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
                  <a 
                    href={tier.id === 'enterprise' 
                      ? `mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20Enterprise%20License%20Inquiry&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20Enterprise%20License%20solutions.%20%0A%0APlease%20provide%20information%20about%3A%0A-%20Pricing%20for%20our%20organization%0A-%20Implementation%20timeline%0A-%20Custom%20integrations%20available%0A-%20Security%20and%20compliance%20features%0A-%20Dedicated%20account%20manager%20services%0A%0AOrganization%20details%3A%0A-%20Company%20Name%3A%20%5BPlease%20fill%20in%5D%0A-%20Number%20of%20users%3A%20%5BPlease%20fill%20in%5D%0A-%20Industry%3A%20%5BPlease%20fill%20in%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D`
                      : tier.id === 'education'
                      ? `mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20Education%20License%20Inquiry&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20Education%20License%20solutions.%20%0A%0APlease%20provide%20information%20about%3A%0A-%20Educational%20pricing%20and%20discounts%0A-%20Curriculum%20integration%20support%0A-%20Student%20progress%20tracking%20features%0A-%20Instructor%20training%20programs%0A%0AInstitution%20details%3A%0A-%20Institution%20Name%3A%20%5BPlease%20fill%20in%5D%0A-%20Number%20of%20students%2Finstructors%3A%20%5BPlease%20fill%20in%5D%0A-%20Course%20type%3A%20%5BPlease%20fill%20in%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D`
                      : `mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20${tier.buttonText === 'Start Free Trial' ? 'Free%20Trial%20Request' : 'Contact%20Sales'}&body=Hello%20Arcadeus%20Team%2C%0A%0AI%20am%20interested%20in%20getting%20started%20with%20Arcadeus.%20Please%20provide%20more%20information%20about%20your%20services.%0A%0AThank%20you%2C%0A%5BYour%20Name%5D`
                    }
                    className={`pricing-btn ${tier.buttonType === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                  >
                    {tier.buttonText}
                  </a>
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