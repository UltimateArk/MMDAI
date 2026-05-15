import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>ABOUT MMD ANAALYTICS INDIA PRIVATE LIMITED</h1>
      </div>
      <div className="about-content">
        <div className="info-block">
          <p>
            MMD Anaalytics India Private Limited is a diversified services company operating in financial services, financial consulting, capital market solutions and coal trading.<br></br>We combine industry expertise with a practical approach to offer customised solutions for every client. Our focus remains on integrity, compliance and value-based service delivery.
          </p>
        </div>
        <hr className="divider" />
        <div className="info-block">
          <h2>OUR VISION</h2>
          <p>To become a trusted financial and trading advisory company delivering value-driven solutions to individuals and businesses across India.</p>
        </div>
        <hr className="divider" />
        <div className="info-block">
          <h2>OUR MISSION</h2>
          <ul className="custom-list">
            <li>Deliver ethical financial consulting</li>
            <li>Provide reliable trading solutions</li>
            <li>Offer cost-effective broking services</li>
            <li>Maintain strong compliance standards</li>
            <li>Ensure customer satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;