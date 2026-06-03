import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const MISSION_ITEMS = [
  { n: '01', title: 'Ethical Financial Consulting',  desc: 'Upholding the highest standards of transparency and integrity.' },
  { n: '02', title: 'Reliable Trading Solutions',    desc: 'Consistent, research-backed trade execution and advisory.' },
  { n: '03', title: 'Cost-Effective Broking',        desc: 'Accessible financial services for every tier of investor.' },
  { n: '04', title: 'Strong Compliance Standards',   desc: 'Fully aligned with SEBI and regulatory requirements.' },
  { n: '05', title: 'Customer Satisfaction',         desc: 'Client success is the only metric that matters.' },
];

const VALUES = [
  { icon: '🤝', title: 'Integrity',    desc: 'We operate with full transparency — no hidden fees, no conflicts of interest.' },
  { icon: '🎯', title: 'Client-First', desc: 'Every recommendation is made with the client\'s best interest at heart.' },
  { icon: '📐', title: 'Compliance',   desc: 'Strict adherence to SEBI guidelines, regulatory norms and industry standards.' },
];

const AboutUs = () => {
  useScrollReveal();

  return (
    <main id="mainContent" className="au-root">

      {/* ── HERO ── */}
      <section className="au-hero" aria-labelledby="auPageTitle">
        <div className="au-grid"  aria-hidden="true" />
        <div className="au-orb1"  aria-hidden="true" />
        <div className="au-orb2"  aria-hidden="true" />

        <div className="au-badge">🏛 About Us</div>
        <h1 className="au-hero-title" id="auPageTitle">
          A Company Built on<br />
          <em>Trust &amp; Transparency</em>
        </h1>
        <p className="au-hero-sub">
          Learn the story behind MMD Analytics — our roots in Ranchi, our mission for
          India's financial future, and the values that guide every decision we make.
        </p>
      </section>

      {/* ── OUR STORY ── */}
      <section className="au-story" aria-labelledby="storyTitle">
        <div className="au-sec" style={{ gridColumn: '1 / -1' }}>
          <span id="storyTitle">Our Story</span>
        </div>

        {/* Office image placeholder — swap src when real photo is available */}
        <div className="au-story-img reveal-left">
          <div className="au-img-inner">
            <div className="au-img-pattern" aria-hidden="true" />
            <span className="au-img-icon" aria-hidden="true">🏢</span>
            <p className="au-img-label">MMD Analytics Office</p>
          </div>
          <div className="au-img-footer">
            <span className="au-img-dot" aria-hidden="true" />
            <span className="au-img-loc">Est. in Ranchi, Jharkhand</span>
          </div>
        </div>

        <div className="au-story-text reveal-right">
          <h2 className="au-story-h">
            From Ranchi to<br /><em>All of India</em>
          </h2>
          <p className="au-story-p">
            MMD Analytics India Private Limited is a diversified services company
            operating in financial services, financial consulting, capital market
            solutions and coal trading.
          </p>
          <p className="au-story-p">
            We combine industry expertise with a practical approach to offer
            customised solutions for every client. Our focus remains on integrity,
            compliance and value-based service delivery.
          </p>
          <Link to="/contact-us" className="au-story-btn">
            Talk to Us Today →
          </Link>
        </div>
      </section>

      <hr className="au-divider" />

      {/* ── MISSION & VISION ── */}
      <section className="au-mv" aria-labelledby="mvTitle">
        <div className="au-sec"><span id="mvTitle">What Drives Us</span></div>

        <div className="au-mv-grid">
          {/* Vision */}
          <div className="au-vision reveal">
            <div className="au-card-tag">Our Vision</div>
            <p className="au-card-title">Where We Are Headed</p>
            <p className="au-card-body">
              To become a trusted financial and trading advisory company delivering
              value-driven solutions to individuals and businesses across India.
            </p>
          </div>

          {/* Mission */}
          <div className="au-mission reveal">
            <div className="au-card-tag">Our Mission</div>
            <p className="au-card-title">What We Stand For</p>
            <ul className="au-mission-list">
              {MISSION_ITEMS.map((m) => (
                <li key={m.n}>
                  <span className="au-ml-num">{m.n}</span>
                  <div>
                    <span className="au-ml-strong">{m.title}</span>
                    {m.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="au-values" aria-labelledby="valTitle">
        <div className="au-sec"><span id="valTitle">Our Values</span></div>
        <div className="au-values-grid">
          {VALUES.map((v, i) => (
            <div key={i} className="au-val reveal">
              <div className="au-val-icon">{v.icon}</div>
              <p className="au-val-title">{v.title}</p>
              <p className="au-val-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div className="au-cta">
        <div className="au-cta-left">
          <h3>Want to learn more about us?</h3>
          <p>Reach out to our team — we'd love to connect and understand your needs.</p>
        </div>
        <Link to="/contact-us" className="au-cta-btn">
          📍 Contact Us
        </Link>
      </div>

    </main>
  );
};

export default AboutUs;