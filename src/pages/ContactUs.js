import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ContactUs.css';

const ContactUs = () => {
  useScrollReveal();

  return (
    <main id="mainContent" className="cu-root">

      {/* ── HERO ── */}
      <section className="cu-hero" aria-labelledby="cuPageTitle">
        <div className="cu-hero-grid"   aria-hidden="true" />
        <div className="cu-hero-orb"    aria-hidden="true" />
        <div className="cu-hero-badge">📍 Get In Touch</div>
        <h1 className="cu-hero-title" id="cuPageTitle">
          CONTACT <span>US</span>
        </h1>
        <p className="cu-hero-sub">
          We're based in Ranchi, Jharkhand. Reach out for trade enquiries,
          logistics, or any questions — our team responds promptly.
        </p>
      </section>

      {/* ── BODY ── */}
      <div className="cu-body">
        <div className="cu-grid">

          {/* ── LEFT: CONTACT INFO ── */}
          <div className="cu-panel reveal-left">
            <div className="cu-section-label"><span>Our Office</span></div>

            <p className="cu-company-name">MMD Analytics</p>
            <p className="cu-address">
              202, Sulakshana by Maurya Homes<br />
              Argora Kathal More Road<br />
              Beside Dayal Petrol Pump<br />
              <strong>Kathal More, Ranchi – Jharkhand</strong>
            </p>

            <hr className="cu-divider" />

            <div className="cu-contact-stack">
              <a href="tel:+916204958442" className="cu-contact-card">
                <div className="cu-card-icon">☎️</div>
                <div>
                  <div className="cu-card-lbl">Phone</div>
                  <div className="cu-card-val">+91 6204 958 442</div>
                </div>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@mmdai.in"
                target="_blank"
                rel="noopener noreferrer"
                className="cu-contact-card"
              >
                <div className="cu-card-icon">📧</div>
                <div>
                  <div className="cu-card-lbl">Email</div>
                  <div className="cu-card-val">admin@mmdai.in</div>
                </div>
              </a>
            </div>

            <div className="cu-hours">
              <span className="cu-hours-icon">🕘</span>
              <span className="cu-hours-text">
                <strong>Mon – Sat</strong> &nbsp;|&nbsp; 10 AM – 6 PM
              </span>
            </div>
          </div>

          {/* ── RIGHT: MAP ── */}
          <div className="cu-map-panel reveal-right">
            <div className="cu-map-header">
              <span className="cu-map-pin">📍</span>
              <p className="cu-map-title">Our Office Location</p>
            </div>

            <iframe
              className="cu-map-frame"
              title="MMD Analytics Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.6936943019914!2d85.25029277551356!3d23.363109278936466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df5635880159%3A0xc2ada96b3e0830f8!2sSulakshana%20By%20Maurya%20Homes!5e0!3m2!1sen!2sin!4v1778755731424!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="cu-map-footer">
              <p className="cu-map-addr">
                Sulakshana by Maurya Homes<br />
                Kathal More, Ranchi
              </p>
              <a
                href="https://maps.google.com/?q=Sulakshana+By+Maurya+Homes,+Ranchi"
                target="_blank"
                rel="noopener noreferrer"
                className="cu-dir-btn"
              >
                🧭 Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ContactUs;