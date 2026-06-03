import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './home.css';

/* ─── Office carousel slides ───────────────────────────────
   Replace the `bg` values with real image URLs once you have
   office photos:  bg: 'url(/images/office-reception.jpg)'
   Leave `placeholder: true` as false when using real images.
──────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    tag: 'Reception',
    title: 'Main Reception & Welcome Area',
    sub: 'Sulakshana by Maurya Homes, Ranchi',
    bg: null,                          // ← replace with real image URL
    accentColor: 'rgba(0,201,167,0.1)',
  },
  {
    tag: 'Trading Desk',
    title: 'Live Markets & Advisory Desk',
    sub: 'Where strategies come to life',
    bg: null,
    accentColor: 'rgba(201,168,76,0.09)',
  },
  {
    tag: 'Meeting Room',
    title: 'Client Consultation Suite',
    sub: 'Private and professional',
    bg: null,
    accentColor: 'rgba(0,201,167,0.08)',
  },
  {
    tag: 'Operations',
    title: 'Coal Trade Operations Hub',
    sub: 'Logistics and supply chain command',
    bg: null,
    accentColor: 'rgba(201,168,76,0.07)',
  },
];

const SERVICES = [
  { icon: '✔️', title: 'Financial Services', desc: 'Investment advisory, taxation, and risk solutions.' },
  { icon: '💹', title: 'Broking Services', desc: 'Authorized Bajaj broking and Demat account support.' },
  { icon: '🧠', title: 'Consulting', desc: 'Strategic consulting for individuals and businesses.' },
  { icon: '⛏️', title: 'Coal Trading', desc: 'Industrial coal supply and logistics expertise.' },
];

const WHY = [
  { n: '01', title: 'Experienced Team', desc: 'Deep domain expertise across finance and trading.' },
  { n: '02', title: 'End-to-End Solutions', desc: 'From consultation to execution, all services integrated.' },
  { n: '03', title: 'Transparent Dealings', desc: 'Clear pricing and proactive communication.' },
  { n: '04', title: 'Fast Support', desc: 'Quick responses and timely delivery.' },
];

/* ─── Scroll-zoom carousel ──────────────────────────────── */
const OfficeCarousel = () => {
  const [cur, setCur] = useState(0);
  const [scale, setScale] = useState(0.92);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const goTo = useCallback((idx) => setCur((idx + SLIDES.length) % SLIDES.length), []);
  const next = useCallback(() => goTo(cur + 1), [cur, goTo]);
  const prev = useCallback(() => goTo(cur - 1), [cur, goTo]);

  /* auto-advance */
  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  /* scroll-zoom effect */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio;
        /* zoom in as it enters, zoom out as it leaves */
        setScale(0.88 + r * 0.12);
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hp-carousel-section" ref={sectionRef} aria-label="Office photos">
      <div className="hp-carousel-header">
        <div className="hp-sec-label"><span>Our Office</span></div>
      </div>

      <div
        className="hp-carousel-stage"
        style={{ transform: `scale(${scale})`, transformOrigin: 'center top' }}
      >
        {/* Slides */}
        <div className="hp-carousel-viewport">
          <div
            className="hp-carousel-track"
            style={{ transform: `translateX(calc(-${cur * 100}%))` }}
          >
            {SLIDES.map((s, i) => (
              <div
                key={i}
                className={`hp-slide${i === cur ? ' active' : ''}`}
                aria-hidden={i !== cur}
              >
                <div
                  className="hp-slide-inner"
                  style={
                    s.bg
                      ? {
                          backgroundImage: s.bg,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }
                      : {}
                  }
                >
                  {/* Placeholder pattern — remove when real photos are added */}
                  {!s.bg && (
                    <>
                      <div className="hp-slide-pattern" style={{ '--accent': s.accentColor }} />
                      <div className="hp-slide-orb" style={{ background: `radial-gradient(circle,${s.accentColor} 0%,transparent 65%)` }} />
                    </>
                  )}
                  <div className="hp-slide-overlay" />
                  <div className="hp-slide-caption">
                    <span className="hp-slide-tag">{s.tag}</span>
                    <h3 className="hp-slide-title">{s.title}</h3>
                    <p className="hp-slide-sub">{s.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav buttons */}
        <button className="hp-carousel-arrow hp-arrow-l" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="hp-carousel-arrow hp-arrow-r" onClick={next} aria-label="Next slide">›</button>
      </div>

      {/* Dots */}
      <div className="hp-carousel-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hp-dot${i === cur ? ' active' : ''}`}
            onClick={() => { goTo(i); clearInterval(timerRef.current); }}
            aria-label={`Slide ${i + 1}`}
            role="tab"
            aria-selected={i === cur}
          />
        ))}
      </div>
    </section>
  );
};

/* ─── Home page ─────────────────────────────────────────── */
const Home = () => {
  useScrollReveal();

  return (
    <main id="mainContent" className="hp-root">

      {/* ── HERO ── */}
      <section className="hp-hero" aria-labelledby="heroTitle">
        <div className="hp-grid"  aria-hidden="true" />
        <div className="hp-orb1"  aria-hidden="true" />
        <div className="hp-orb2"  aria-hidden="true" />

        <div className="hp-hero-left reveal-left">
          <div className="hp-badge">
            <span className="hp-badge-dot" aria-hidden="true" />
            Trusted Financial Services Partner
          </div>
          <h1 className="hp-title" id="heroTitle">
            MMD Analytics
            <span className="hp-title-sub">India Private Limited</span>
          </h1>
          <p className="hp-sub">
            Professional financial solutions, broking support, and coal trading
            services built for Indian businesses and investors.
          </p>
          <div className="hp-actions">
            <a
              href="https://hniekyc2.bajajfinservsecurities.in:443/?RmCode=YZHe7mPVh2F6j11ynlv5gw==&Id=HfAZznRaanhPXIwgLG0s3w==&utm_source=GeneralLink&utm_medium=medium&utm_campaign=campaign"
              target="_blank"
              rel="noopener noreferrer"
              className="hp-btn-p"
            >
              🟢 Open Demat Account
            </a>
            <Link to="/ConsultationForm" target="_blank" rel="noopener noreferrer" className="hp-btn-g">
              Request Consultation
            </Link>
            <Link to="/EnquiryForm" className="hp-btn-g">
              Coal Enquiry
            </Link>
            <a href="/MMD_Analytics_Brochure.pdf" download className="hp-btn-g">
              ⬇ Brochure
            </a>
          </div>
        </div>

        <div className="hp-visual reveal-right" aria-hidden="true">
          {[
            { icon: '💼', label: 'Advisory',   sub: 'Research-backed strategies' },
            { icon: '📈', label: 'Broking',    sub: 'Demat and trading solutions' },
            { icon: '⛏️', label: 'Coal Trade', sub: 'Supply chain expertise' },
          ].map((c, i) => (
            <div key={i} className={`hp-float hp-float-${i + 1}`}>
              <div className="hp-float-icon">{c.icon}</div>
              <div>
                <div className="hp-float-lbl">{c.label}</div>
                <div className="hp-float-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="hp-stats" aria-label="Key figures">
        {[
          { v: '4+',    l: 'Core Services' },
          { v: '100%',  l: 'Client-First' },
          { v: '24/7',  l: 'Support' },
          { v: 'SEBI',  l: 'Authorized AP' },
        ].map((s, i) => (
          <div key={i} className="hp-stat">
            <div className="hp-stat-v">{s.v}</div>
            <div className="hp-stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="hp-services" aria-labelledby="svcTitle">
        <div className="hp-sec-label"><span id="svcTitle">Our Services</span></div>
        <div className="hp-svc-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="hp-svc reveal">
              <div className="hp-svc-icon">{s.icon}</div>
              <p className="hp-svc-title">{s.title}</p>
              <p className="hp-svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="hp-why" aria-labelledby="whyTitle">
        <div className="hp-sec-label"><span id="whyTitle">Why Choose Us</span></div>
        <div className="hp-why-grid">
          {WHY.map((w, i) => (
            <div key={i} className="hp-why-item reveal">
              <div className="hp-why-num">{w.n}</div>
              <div>
                <p className="hp-why-title">{w.title}</p>
                <p className="hp-why-desc">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OFFICE CAROUSEL ── */}
      <OfficeCarousel />

      {/* ── CTA BANNER ── */}
      <div className="hp-cta">
        <div className="hp-cta-left">
          <h3>Ready to invest smarter?</h3>
          <p>Open your Demat account today or get in touch with our team.</p>
        </div>
        <a
          href="https://hniekyc2.bajajfinservsecurities.in:443/?RmCode=YZHe7mPVh2F6j11ynlv5gw==&Id=HfAZznRaanhPXIwgLG0s3w==&utm_source=GeneralLink&utm_medium=medium&utm_campaign=campaign"
          target="_blank"
          rel="noopener noreferrer"
          className="hp-cta-btn"
        >
          🟢 Open Demat Account
        </a>
      </div>

    </main>
  );
};

export default Home;