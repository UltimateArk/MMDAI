import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoalTrading.css';

const COAL_TYPES = [
  {
    id: 'thermal',
    icon: '🔥',
    title: 'Thermal Coal',
    desc: 'High-calorific coal used by power plants and industrial boilers for energy generation.',
    specs: [
      { k: 'Calorific Value', v: '5,000–6,500 kcal/kg' },
      { k: 'Ash Content', v: '< 12%' },
      { k: 'Moisture', v: '8–12%' },
      { k: 'Sulfur', v: '< 0.8%' },
      { k: 'Primary Use', v: 'Power Generation' },
      { k: 'Supply Form', v: 'Bulk / Bagged' },
    ],
  },
  {
    id: 'industrial',
    icon: '🏭',
    title: 'Industrial Coal',
    desc: 'Specialized grades for steel mills, cement plants, and heavy manufacturing processes.',
    specs: [
      { k: 'Calorific Value', v: '4,200–5,800 kcal/kg' },
      { k: 'Fixed Carbon', v: '> 50%' },
      { k: 'Moisture', v: '5–10%' },
      { k: 'Sulfur', v: '< 1.2%' },
      { k: 'Primary Use', v: 'Steel, Cement, Mfg.' },
      { k: 'Supply Form', v: 'Bulk / Crushed' },
    ],
  },
  {
    id: 'custom',
    icon: '⚙️',
    title: 'Customized Grades',
    desc: 'Blended and tailored coal specifications to match your exact operational requirements.',
    specs: [
      { k: 'Calorific Value', v: 'As per requirement' },
      { k: 'Ash Content', v: 'Custom blended' },
      { k: 'Moisture', v: 'Configurable' },
      { k: 'Grade Mix', v: 'Flexible blending' },
      { k: 'Primary Use', v: 'Any industrial use' },
      { k: 'Supply Form', v: 'As specified' },
    ],
  },
];

const SERVICES = [
  {
    icon: '🗺️',
    title: 'Coal Sourcing',
    desc: 'Strategic procurement from verified mines and suppliers ensuring quality and consistency at every shipment.',
  },
  {
    icon: '🚚',
    title: 'Logistics Coordination',
    desc: 'End-to-end freight management — rail, road, and port logistics handled seamlessly on your behalf.',
  },
  {
    icon: '📦',
    title: 'Bulk Supply',
    desc: 'Large-volume dispatch with flexible scheduling and reliable lead times to match your production demands.',
  },
  {
    icon: '🎧',
    title: 'Trade Support',
    desc: 'Dedicated trade desk for documentation, compliance, pricing queries, and full post-sale assistance.',
  },
];

const CoalTrading = () => {
  const [activeCoal, setActiveCoal] = useState('thermal');
  const [panelKey, setPanelKey] = useState(0);

  const handleCoalSelect = (id) => {
    setActiveCoal(id);
    setPanelKey((k) => k + 1);
  };

  const active = COAL_TYPES.find((c) => c.id === activeCoal);

  return (
    <main id="mainContent" className="ct-root">
      {/* ── HERO ── */}
      <section className="ct-hero" aria-labelledby="coalPageTitle">
        <div className="ct-hero-grid" aria-hidden="true" />
        <div className="ct-hero-orb" aria-hidden="true" />
        <div className="ct-hero-orb2" aria-hidden="true" />

        <div className="ct-badge">⛏️ Coal Trading Division</div>
        <h1 className="ct-hero-title" id="coalPageTitle">
          COAL TRADING <span>DIVISION</span>
        </h1>
        <p className="ct-hero-sub">
          Actively engaged in the trading and supply of coal to industrial and commercial buyers —
          backed by reliable sourcing, logistics, and flexible grade customization.
        </p>

        <div className="ct-stats-row">
          <div className="ct-stat">
            <div className="ct-stat-val">3+</div>
            <div className="ct-stat-lbl">Coal Grades</div>
          </div>
          <div className="ct-stat">
            <div className="ct-stat-val">4</div>
            <div className="ct-stat-lbl">Core Services</div>
          </div>
          <div className="ct-stat">
            <div className="ct-stat-val">24/7</div>
            <div className="ct-stat-lbl">Trade Support</div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="ct-body">
        {/* Coal Types */}
        <div className="ct-section-label">
          <span>Coal Types</span>
        </div>

        <div className="ct-coal-grid">
          {COAL_TYPES.map((coal) => (
            <button
              key={coal.id}
              className={`ct-coal-card${activeCoal === coal.id ? ' active' : ''}`}
              onClick={() => handleCoalSelect(coal.id)}
              aria-pressed={activeCoal === coal.id}
            >
              <div className="ct-card-icon">{coal.icon}</div>
              <p className="ct-card-title">{coal.title}</p>
              <p className="ct-card-desc">{coal.desc}</p>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="ct-detail-panel" key={panelKey}>
          <div className="ct-detail-head">
            📊 {active.title} — Key Specifications
          </div>
          <div className="ct-specs">
            {active.specs.map((s) => (
              <div className="ct-spec" key={s.k}>
                <div className="ct-spec-key">{s.k}</div>
                <div className="ct-spec-val">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <hr className="ct-divider" />

        {/* Services */}
        <div className="ct-section-label">
          <span>Our Services</span>
        </div>

        <div className="ct-services-grid">
          {SERVICES.map((svc) => (
            <div className="ct-service-item" key={svc.title}>
              <div className="ct-svc-icon">{svc.icon}</div>
              <div className="ct-svc-content">
                <p className="ct-svc-title">{svc.title}</p>
                <p className="ct-svc-desc">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="ct-cta-area">
          <div className="ct-cta-left">
            <h3>Ready to source coal?</h3>
            <p>Submit an enquiry and our trade desk will respond within 24 hours.</p>
          </div>
          <Link to="/EnquiryForm" target="_blank" className="ct-cta-btn">
            ✉️ Submit an Enquiry
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CoalTrading;