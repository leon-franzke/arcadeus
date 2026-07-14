import React, { useState, useEffect } from 'react';
import './EarlyInterestModal.css';

const EarlyInterestModal = ({ onClose }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'early-interest',
        'first-name': form.firstName,
        'last-name': form.lastName,
        'email': form.email,
      }).toString(),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  };

  return (
    <div className="ei-backdrop" onClick={onClose}>
      <div className="ei-panel" onClick={(e) => e.stopPropagation()}>
        <button className="ei-close" onClick={onClose} aria-label="Close">✕</button>

        {status === 'success' ? (
          <div className="ei-success">
            <div className="ei-success-icon">✓</div>
            <h3 className="ei-success-title">You're on the list</h3>
            <p className="ei-success-body">
              We'll reach out as soon as Arcadeus is ready for you.
            </p>
          </div>
        ) : (
          <>
            <p className="ei-eyebrow">Early Access</p>
            <h2 className="ei-title">Register your interest</h2>
            <p className="ei-body">
              We're onboarding UK businesses ahead of our full launch.
              Leave your details and we'll notify you as soon as your spot is ready.
            </p>

            <form className="ei-form" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="early-interest" />
              <input type="hidden" name="bot-field" />

              <div className="ei-row">
                <div className="ei-field">
                  <label className="ei-label">First name</label>
                  <input
                    className="ei-input"
                    type="text"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                  />
                </div>
                <div className="ei-field">
                  <label className="ei-label">Last name</label>
                  <input
                    className="ei-input"
                    type="text"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="ei-field">
                <label className="ei-label">Email address</label>
                <input
                  className="ei-input"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jane@company.co.uk"
                />
              </div>

              {status === 'error' && (
                <p className="ei-error">Something went wrong — please try again.</p>
              )}

              <button
                type="submit"
                className="ei-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Notify Me'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EarlyInterestModal;
