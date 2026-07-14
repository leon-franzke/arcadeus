import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ setCurrentPage }) => {
  const metrics = [
    { value: '$2.3B+', label: 'Assets Under Analysis' },
    { value: '150+', label: 'Successful Deals' },
    { value: '99.7%', label: 'Accuracy Rate' },
    { value: '50+', label: 'Enterprise Clients' }
  ];


  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former Goldman Sachs VP, 15+ years in PE',
      education: 'Harvard MBA, Stanford CS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Ex-Google Senior Engineer, AI/ML Expert',
      education: 'MIT PhD Computer Science'
    },
    {
      name: 'David Thompson',
      role: 'Head of Financial Engineering',
      background: 'Former Blackstone Principal, 12+ years',
      education: 'Wharton MBA, CFA'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">


        <div className="privacy-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="privacy-title">YOUR PRIVACY IS OUR #1 PRIORITY</h2>
            <p className="privacy-subtitle">We protect every bit of information. Try out now</p>
          </motion.div>

          <div className="privacy-features">
            <motion.div
              className="privacy-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="privacy-card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>WE DON'T STORE YOUR DATA</h3>
              <p>Only you can access information that you've saved.</p>
            </motion.div>

            <motion.div
              className="privacy-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="privacy-card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 32c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2"/>
                  <rect x="24" y="24" width="8" height="8" rx="4" fill="#fbbf24"/>
                </svg>
              </div>
              <h3>WE HAVE STRICT ACCESS CONTROLS</h3>
              <p>Only you can access information that you've saved.</p>
            </motion.div>

            <motion.div
              className="privacy-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="privacy-card-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
                  <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M20 16v8M16 20h8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>WE'RE TRANSPARENT ABOUT PRIVACY POLICY</h3>
              <p>We clearly outline how your information is used and protected in our <button onClick={() => setCurrentPage && setCurrentPage('privacy-policy')} className="privacy-link">privacy policy</button>.</p>
            </motion.div>
          </div>
        </div>

        <div className="get-started-section">
          <motion.div 
            className="get-started-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="get-started-title">Get Started in 3 steps</h2>
          </motion.div>

          <div className="steps-grid">
            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">1</div>
              <h3 className="step-heading">Sign up and get started</h3>
              <p className="step-text">
                Sign up in seconds and start using Arcadeus for free. Get instant access to AI-powered financial models without any commitments or setup.
              </p>
            </motion.div>

            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">2</div>
              <h3 className="step-heading">Create model</h3>
              <p className="step-text">
                Use AI to instantly generate your own from scratch. Tailor models for M&A analysis, valuations, or investment decisions.
              </p>
            </motion.div>

            <motion.div
              className="step-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="step-number-circle">3</div>
              <h3 className="step-heading">Run Deal Analysis</h3>
              <p className="step-text">
                Run advanced analysis incorporating AI-driven insights, market comparables, and assumption validation.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="get-started-buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="start-free-btn" onClick={() => setCurrentPage && setCurrentPage('pricing')}>Start for free</button>
            <button className="book-demo-btn" onClick={() => window.location.href = 'mailto:leon.franzke@arcadeus.ai?subject=Arcadeus%20-%20Product%20Demo'}>Book a demo</button>
          </motion.div>
        </div>



      </div>
    </section>
  );
};

export default About;