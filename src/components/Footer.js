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
            {[
              'Cash Flow',
              'Invoice Automation',
              'Expense Automation',
              'AI Budget & Forecast',
              'Customer Analysis',
              'VAT & MTD Tracking',
              'HMRC MTD Submission',
            ].map((f) => (
              <li key={f}>
                <button
                  className="footer-link-btn"
                  onClick={() => window.dispatchEvent(new Event('arcadeus:openProduct'))}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><button className="footer-link-btn" onClick={() => window.dispatchEvent(new Event('arcadeus:about'))}>About</button></li>
            <li><button className="footer-link-btn" onClick={() => window.dispatchEvent(new Event('arcadeus:security'))}>Security</button></li>
            <li><button className="footer-link-btn" onClick={() => window.dispatchEvent(new Event('arcadeus:privacy'))}>Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Follow</p>
          <ul className="footer-links">
            <li><span className="footer-link-placeholder">LinkedIn</span></li>
            <li><span className="footer-link-placeholder">X</span></li>
            <li><span className="footer-link-placeholder">Instagram</span></li>
            <li><span className="footer-link-placeholder">Facebook</span></li>
            <li><span className="footer-link-placeholder">TikTok</span></li>
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
