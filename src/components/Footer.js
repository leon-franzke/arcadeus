import React from 'react';
import './Footer.css';

const Footer = ({ light }) => (
  <footer className={`footer ${light ? 'footer--light' : ''}`}>
    <div className="footer-inner">
      <div className="footer-top">
        <span className="footer-logo">Arcadeus</span>

        <div>
          <p className="footer-col-title">Product</p>
          <ul className="footer-links">
            <li><a href="https://app.arcadeus.ai">Dashboard</a></li>
            <li><a href="https://app.arcadeus.ai">Invoices</a></li>
            <li><a href="https://app.arcadeus.ai">Expenses</a></li>
            <li><a href="https://app.arcadeus.ai">Tax</a></li>
            <li><a href="https://app.arcadeus.ai">Reports</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><a href="/#">About</a></li>
            <li><a href="/#">Careers</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="/#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Follow</p>
          <ul className="footer-links">
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com" target="_blank" rel="noreferrer">X</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Arcadeus Ltd. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
