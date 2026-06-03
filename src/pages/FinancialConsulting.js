import React from 'react';
import { Link } from 'react-router-dom';
import './FinancialPages.css';

const FinancialConsulting = () => {
  return (
    <div className="fp">
      <section className="fp-hero">
        <div className="fp-grid" aria-hidden="true"></div>
        <div className="fp-orb1" aria-hidden="true"></div>
        <div className="fp-orb2" aria-hidden="true"></div>
        <div className="fp-badge">🧠 Financial Consulting</div>
        <h1 className="fp-hero-title">Financial Consulting <em>Services</em></h1>
        <p className="fp-hero-sub">
          Expert financial consulting tailored for individuals, growing businesses, and ambitious startups — practical strategies for every stage.
        </p>
      </section>

      <div className="fp-body">
        <div className="fp-sec"><span>Who We Serve</span></div>
        
        <div className="fp-aud-grid">
          <div className="fp-aud individuals">
            <div className="fp-aud-tag">Individuals</div>
            <div className="fp-aud-title">Personal Finance</div>
            <ul className="fp-aud-list">
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Investment Planning</span>Grow your wealth with research-backed strategies.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Retirement Planning</span>Secure your future with a disciplined savings approach.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Insurance Advisory</span>Protect your assets and loved ones with the right coverage.</div>
              </li>
            </ul>
          </div>
          
          <div className="fp-aud businesses">
            <div className="fp-aud-tag">Businesses</div>
            <div className="fp-aud-title">Corporate Strategy</div>
            <ul className="fp-aud-list">
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Financial Strategy</span>Align your finance function with business goals.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Cost Control</span>Identify inefficiencies and optimize operating margins.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Profit Planning</span>Structured planning to maximize sustainable profitability.</div>
              </li>
            </ul>
          </div>
          
          <div className="fp-aud startups">
            <div className="fp-aud-tag">Startups</div>
            <div className="fp-aud-title">Early-Stage Support</div>
            <ul className="fp-aud-list">
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Cash Flow Planning</span>Forecast and manage runway with confidence.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Compliance Guidance</span>Stay on the right side of tax and regulatory norms.</div>
              </li>
              <li>
                <span className="fp-aud-dot"></span>
                <div><span className="fp-aud-strong">Structure Advisory</span>Choose the optimal legal and financial structure.</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="fp-cta">
          <div>
            <h3>Ready to transform your finances?</h3>
            <p>Book a consultation with our experts and get a plan that fits your goals.</p>
          </div>
          <Link to="/contact-us" className="fp-cta-btn">Book a Consultation →</Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialConsulting;