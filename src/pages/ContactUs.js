import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="about-container">
      
      <div className="hero-section">
        <h1>CONTACT US</h1>
      </div>

      <div className="contact-information">
        
        {/* --- THE SIDE-BY-SIDE GRID --- */}
        <div className="contact-grid">
          
          {/* --- LEFT COLUMN: DETAILS --- */}
          <div className="contact-details">
            <div className="info-block">
                <h2><b>MMD Anaalytics</b></h2>
                <p>
                  202, Sulakshana by Maurya Homes<br />
                  Argora Kathal More Road<br />
                  Beside Dayal Petrol Pump<br />
                  Kathal More, Ranchi – Jharkhand
                </p>
            </div>
            
            <hr className="divider" />
            
            <div className="contact-links">
  <a 
    href="tel:+916204958442" 
    className="interactive-contact-card"
  >
    <span className="contact-icon">☎</span> 
    <span className="contact-text">Phone: +91 6204958442</span>
  </a>
  
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@mmdai.in" 
    target="_blank" 
    rel="noopener noreferrer"
    className="interactive-contact-card"
  >
    <span className="contact-icon">📧</span> 
    <span className="contact-text">Email: admin@mmdai.in</span>
  </a>
  
  <p className="working-hours">
    <b>🕘 Working Hours:</b> Mon – Sat | 10 AM – 6 PM
  </p>
</div>
          </div>

          {/* --- RIGHT COLUMN: MAP --- */}
          <div className="contact-map">
            <h2>OUR OFFICE LOCATION</h2>
            <div className="map-frame-wrapper">
              <iframe
                title="MMD Anaalytics Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.6936943019914!2d85.25029277551356!3d23.363109278936466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4df5635880159%3A0xc2ada96b3e0830f8!2sSulakshana%20By%20Maurya%20Homes!5e0!3m2!1sen!2sin!4v1778755731424!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;