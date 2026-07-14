import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ setCurrentPage }) => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-policy-container">
        <button className="back-button" onClick={() => setCurrentPage && setCurrentPage('home')}>
          ← Back
        </button>
        
        <h1>Our Privacy Policy</h1>
        <p className="effective-date">Effective Date: 5th September, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            Arcadeus Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, in compliance with the General Data Protection Regulation (GDPR).
          </p>
        </section>

        <section>
          <h2>2. Data Controller</h2>
          <p>
            Arcadeus Ltd, a company registered in England and Wales and is the data controller responsible for your personal data.
          </p>
        </section>

        <section>
          <h2>3. Personal Data We Collect</h2>
          <p>We may collect the following data:</p>
          <ul>
            <li>Identity data (name, title, date of birth)</li>
            <li>Contact data (email address, phone number)</li>
            <li>Technical data (IP address, browser type, OS, device identifiers)</li>
            <li>Usage data (pages visited, time on site, navigation paths)</li>
            <li>Profile data (preferences, feedback, user behavior)</li>
            <li>Marketing and communications data (preferences for receiving marketing and product updates)</li>
          </ul>
        </section>

        <section>
          <h2>4. How We Collect Data</h2>
          <p>We collect data through:</p>
          <ul>
            <li>Direct interactions (e.g., form submissions, account registration)</li>
            <li>Automated technologies (e.g., cookies, server logs)</li>
            <li>Third-party integrations (e.g., analytics providers)</li>
          </ul>
        </section>

        <section>
          <h2>5. Legal Basis for Processing</h2>
          <p>We process your data under one or more of the following bases:</p>
          <ul>
            <li>Consent</li>
            <li>Contractual necessity</li>
            <li>Legal obligation</li>
            <li>Legitimate interest</li>
          </ul>
        </section>

        <section>
          <h2>6. How We Use Your Data</h2>
          <ul>
            <li>Provide and manage our services</li>
            <li>Improve user experience</li>
            <li>Personalize content</li>
            <li>Send transactional emails and updates</li>
            <li>Perform analytics and research</li>
            <li>Ensure website security and integrity</li>
          </ul>
        </section>

        <section>
          <h2>7. Sharing Your Data</h2>
          <p>We do not sell your personal data. We may share encrypted/high-level data with:</p>
          <ul>
            <li>Service providers (e.g., hosting, analytics, CRM)</li>
            <li>Internal company analytics (e.g. number of models built, number of prompts used per user)</li>
            <li>Business transfers (e.g., mergers or acquisitions)</li>
          </ul>
        </section>

        <section>
          <h2>8. International Transfers</h2>
          <p>
            Where data is transferred outside the UK/EEA, we ensure appropriate safeguards such as Standard Contractual Clauses (SCCs).
          </p>
        </section>

        <section>
          <h2>9. Data Retention</h2>
          <p>
            We retain data only as long as necessary for the purpose collected, or as required by law.
          </p>
        </section>

        <section>
          <h2>10. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data</li>
            <li>Correct your data</li>
            <li>Delete your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Lodge a complaint with the ICO</li>
          </ul>
        </section>

        <section>
          <h2>11. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to secure your data.
          </p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>
            If you have questions, contact us at: <a href="mailto:leon.franzke@arcadeus.ai">info@arcadeus.ai</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;