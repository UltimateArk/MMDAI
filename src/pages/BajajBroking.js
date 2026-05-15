import React from 'react';
import './BajajBroking.css';

const BajajBroking = () => {
  return (
    <div className="services-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>AUTHORIZED PARTNER WITH BAJAJ BROKING</h1>
        <p className="hero-subtitle">We are an authorized partner with Bajaj Broking providing demat and trading account services.</p>
      </div>

      <div className="services-content">
        
        

        <hr className="divider" />

        {/* Offerings Block */}
        <div className="services-included">
          <h2>SERVICES:</h2>
          <ul className="custom-list">
            <li><b>Demat Account Opening</b> </li>
            <li><b>Trading Account Support</b> </li>
            <li><b>Investment Advisory Assistance</b></li>
            <li><b>Customer Support</b></li>
          </ul>
        </div>

        <hr className="divider" />
        <div className="Disclaimer">
          <h2>DISCLAIMER:</h2>
          <p>MMD Anaalytics India Private Limited acts as an Authorized Partner (AP). All trading and broking services are provided by Bajaj Broking directly. MMD Anaalytics does not execute trades or hold client funds.</p>
        </div>



      </div>
    </div>
  );
};

export default BajajBroking;