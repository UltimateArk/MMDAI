import React from 'react';
import { Link } from 'react-router-dom';
import './FinancialPages.css';

const FinancialServices = () => {
  return (
    <div className="fp">
      <section className="fp-hero">
        <div className="fp-grid" aria-hidden="true"></div>
        <div className="fp-orb1" aria-hidden="true"></div>
        <div className="fp-orb2" aria-hidden="true"></div>
        <div className="fp-badge">💼 Our Financial Services</div>
        <h1 className="fp-hero-title">Our Financial <em>Services</em></h1>
        <p className="fp-hero-sub">
          Professional financial services designed to help individuals and businesses manage, grow, and protect their wealth efficiently.
        </p>
        <Link to="/contact-us" className="fp-hero-cta">Get Professional Guidance →</Link>
      </section>

      <div className="fp-body">
        <div className="fp-sec"><span>Core Offerings</span></div>

        <div className="fp-svc-grid">
          <div className="fp-svc">
            <div className="fp-svc-icon">📊</div>
            <div className="fp-svc-title">Investment Planning</div>
            <div className="fp-svc-desc">Customized portfolio management and structured mutual fund investments to maximize your returns.</div>
          </div>
          <div className="fp-svc">
            <div className="fp-svc-icon">🧾</div>
            <div className="fp-svc-title">Taxation Services</div>
            <div className="fp-svc-desc">Efficient tax planning, filing, and compliance for both individuals and corporate entities.</div>
          </div>
          <div className="fp-svc">
            <div className="fp-svc-icon">🛡️</div>
            <div className="fp-svc-title">Insurance Solutions</div>
            <div className="fp-svc-desc">Comprehensive life, health, and corporate insurance planning to mitigate financial risks.</div>
          </div>
        </div>
        
        <div className="fp-svc-row2">
          <div className="fp-svc">
            <div className="fp-svc-icon">🏦</div>
            <div className="fp-svc-title">Wealth &amp; Retirement</div>
            <div className="fp-svc-desc">Long-term wealth creation strategies designed for a secure, stress-free future.</div>
          </div>
          <div className="fp-svc">
            <div className="fp-svc-icon">📈</div>
            <div className="fp-svc-title">Mutual Funds</div>
            <div className="fp-svc-desc">Expertly curated portfolios tailored to your risk appetite for steady, long-term wealth creation.</div>
          </div>
        </div>

        <div className="fp-cta">
          <div>
            <h3>Need professional financial guidance?</h3>
            <p>Our advisors are ready to help you plan for every stage of your financial journey.</p>
          </div>
          <Link to="/contact-us" className="fp-cta-btn">Contact Us →</Link>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;