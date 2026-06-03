import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './BajajBroking.css';

const SERVICES = [
  {
    icon: '🏦',
    title: 'Demat Account Opening',
    desc: 'Seamless paperless Demat account setup through Bajaj Broking with full KYC support.',
  },
  {
    icon: '📊',
    title: 'Trading Account Support',
    desc: 'Equity, derivatives, and commodity trading accounts with platform onboarding assistance.',
  },
  {
    icon: '📋',
    title: 'Investment Advisory Assistance',
    desc: 'Research-backed guidance to help you make informed investment decisions.',
  },
  {
    icon: '🎧',
    title: 'Customer Support',
    desc: 'Dedicated support for account queries, documentation, and post-sales assistance.',
  },
];

const BajajBroking = () => {
  useScrollReveal();
  const [hovered, setHovered] = useState(null);

  return (
    <main id="mainContent" className="bb-root">

      {/* ── HERO ── */}
      <section className="bb-hero" aria-labelledby="bbPageTitle">
        <div className="bb-hero-grid"  aria-hidden="true" />
        <div className="bb-hero-orb"   aria-hidden="true" />
        <div className="bb-hero-orb2"  aria-hidden="true" />

        <div className="bb-badge">⛩ Bajaj Broking — Authorised Partner</div>
        <h1 className="bb-hero-title" id="bbPageTitle">
          Open Your <span>Demat &amp; Trading</span><br />Account Today
        </h1>
        <p className="bb-hero-sub">
          We are an authorized partner with Bajaj Broking providing Demat and trading account services
          to clients across Jharkhand and beyond.
        </p>
        <a
          href="https://hniekyc2.bajajfinservsecurities.in:443/?RmCode=YZHe7mPVh2F6j11ynlv5gw==&Id=HfAZznRaanhPXIwgLG0s3w==&utm_source=GeneralLink&utm_medium=medium&utm_campaign=campaign"
          target="_blank"
          rel="noopener noreferrer"
          className="bb-hero-cta"
        >
          🟢 Open Demat Account Now
        </a>
      </section>

      {/* ── SERVICES ── */}
      <div className="bb-body">
        <div className="bb-sec-label"><span>Services Included</span></div>
        <div className="bb-svc-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`bb-svc-card${hovered === i ? ' hovered' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="bb-svc-icon">{s.icon}</div>
              <p className="bb-svc-title">{s.title}</p>
              <p className="bb-svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <hr className="bb-divider" />

        {/* ── DISCLAIMER ── */}
        <div className="bb-disclaimer reveal">
          <div className="bb-disc-head">
            <span className="bb-disc-icon">⚠️</span>
            <span className="bb-disc-label">Disclaimer</span>
          </div>
          <p className="bb-disc-text">
            MMD Analytics India Private Limited acts as an Authorized Partner (AP) of Bajaj Broking.
            All trading and broking services are provided by Bajaj Broking directly. MMD Analytics
            does not execute trades or hold client funds.
          </p>
        </div>
      </div>

    </main>
  );
};

export default BajajBroking;