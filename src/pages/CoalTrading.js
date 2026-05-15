import React from 'react';
import './CoalTrading.css';

const CoalTrading= () => {
  return (
    <div className="services-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>COAL TRADING DIVISION</h1>
        <p className="hero-subtitle">We are actively engaged in the trading and supply of coal to industrial and commercial buyers.</p>
      </div>

      <div className="services-content">
        
        

        <hr className="divider" />

        {/* Offerings Block */}
        <div className="coal-types">
          <h2>COAL TYPES:</h2>
          <ul className="custom-list">
            <li><b>Thermal Coal</b> </li>
            <li><b>Industrial Coal</b> </li>
            <li><b>Customized Grades</b></li>
          </ul>
        </div>

        <hr className="divider" />
        <div className="services-provided">
          <h2>SERVICES:</h2>
          <ul>
            <li><b>Coal Sourcing</b></li>
            <li><b>Logistics Coordination</b></li>
            <li><b>Bulk Supply</b></li>
            <li><b>Trade Support</b></li>
          </ul>
        </div>
         <hr className="divider" />
         <div className='Enquiry'>
          <a href='/EnquiryForm' target="_blank">👉🏻FOR ANY ENQUIRY CLICK HERE</a>
         </div>

      </div>
    </div>
  );
};

export default CoalTrading;