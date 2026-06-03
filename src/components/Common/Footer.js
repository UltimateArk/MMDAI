import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import mmdLogo from '../../assets/MMD Logo CMYK - 02.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="container footer-grid">
          
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-icon" aria-hidden="true">
                <img
                  src={mmdLogo}
                  alt="MMD Anaalytics Logo"
                  style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <span className="footer-logo-name">MMD Anaalytics</span>
                <span className="footer-logo-sub">India Private Limited</span>
              </div>
            </Link>
            <p className="footer-desc">Trusted partner for financial services, broking, and coal trading. Based in Ranchi, Jharkhand.</p>
            <div className="footer-social">
              <a
                href="https://wa.me/916204958442"
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.148-1.758-.867-2.03-.967-.273-.1-.472-.148-.672.149-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.148-.173.198-.298.298-.497.1-.198.05-.372-.025-.52-.075-.148-.672-1.612-.921-2.213-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.57-.009-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.26.488 1.691.624.71.226 1.356.194 1.866.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#FFFFFF"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.713.45 3.315 1.227 4.71L2 22l5.448-1.159A9.945 9.945 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.5a8.47 8.47 0 01-4.605-1.343l-.33-.197-3.232.687.687-3.207-.214-.343A8.45 8.45 0 013.5 12c0-4.695 3.805-8.5 8.5-8.5s8.5 3.805 8.5 8.5-3.805 8.5-8.5 8.5z" fill="#FFFFFF"/>
                </svg>
                <span className="social-label">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/mmdanaalytics"
                className="btn-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" fill="#FFFFFF"/>
                  <path opacity="0.8" d="M12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 1.5a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z" fill="#FFFFFF"/>
                  <path d="M17.75 6.25a.75.75 0 100 1.5.75.75 0 000-1.5z" fill="#FFFFFF"/>
                </svg>
                <span className="social-label">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/mmdanaalytics"
                className="btn-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2.75H4A1.25 1.25 0 002.75 4v16A1.25 1.25 0 004 21.25h16A1.25 1.25 0 0021.25 20V4A1.25 1.25 0 0020 2.75zM8.75 18.25H6.25V10.75h2.5v7.5zm-1.25-8.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm12.25 8.75h-2.5v-3.75c0-.9-.05-2.05-1.25-2.05-1.25 0-1.44.98-1.44 1.99v3.81h-2.5V10.75h2.4v1.02h.03c.33-.62 1.14-1.28 2.35-1.28 2.51 0 2.97 1.65 2.97 3.79v3.97z" fill="#FFFFFF"/>
                </svg>
                <span className="social-label">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/financial-services">Financial Services</Link></li>
              <li><Link to="/bajaj-broking">Bajaj Broking</Link></li>
              <li><Link to="/coal-trading">Coal Trading</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <address className="footer-contact">
              <p>📍 202, Sulakshana by Maurya Homes, Argora Kathal More Road, Ranchi – 835303</p>
              <p><a href="tel:+916204958442">📞 +91 6204958442</a></p>
              <p><a href="mailto:admin@mmdai.in">✉️ admin@mmdai.in</a></p>
              <p>🕐 Mon–Sat: 10 AM – 6 PM</p>
            </address>
          </div>

        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">&copy; {currentYear} MMD Anaalytics India Private Limited. All rights reserved.</p>
          <p className="footer-disclaimer">Investment in securities market is subject to market risks. Read all related documents carefully before investing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;