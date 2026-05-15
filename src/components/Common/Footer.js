import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>MMD ANAALYTICS INDIA PRIVATE LIMITED</h3>
          <p>
            📍 Location: Ranchi, Jharkhand<br />
            📧 Email: admin@mmdai.in<br />
            📞 Phone: 6204958442<br />
            <small>
              🏢 Office: 202, Sulakshana by Maurya Homes, Argora Kathal More Road,
              beside Dayal Petrol Pump, Kathal More, Ranchi
            </small>
          </p>

          <div className="social-buttons-container">
            <a
              href="https://wa.me/916204958442?text=Hello%20MMD%20Team,%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <span>WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/mmdai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram"
            >
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/company/mmd-anaalytics-india-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
