import React from 'react';
import './FinancialConsulting.css';

const FinancialConsulting = () => {
  return (
    <div className="services-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>FINANCIAL CONSULTING SERVICES</h1>
        <p className="hero-subtitle">We provide expert financial consulting services for:</p>
      </div>

      <div className="services-content">
        
        

        <hr className="divider" />

        {/* Offerings Block */}
       {/* Individuals Block - New, Left-Aligned Structure */}
{/* Notice we are using a clear class name for targeting */}
<div className="individuals-text-block">
  <h2>Individuals</h2> {/* The bar is now well-anchored */}
  <ul className="custom-list">
    <li><b>Investment Planning</b></li>
    <li><b>Retirement Planning</b></li>
    <li><b>Insurance Advisory</b></li>
  </ul>
</div>

        <hr className="divider" />
        <div className="Businesses">
          <h2>Businesses</h2>
          <ul className="custom-list">
            <li><b>Financial Strategy</b></li>
            <li><b>Cost Control</b></li>
            <li><b>Profit Planning</b></li>
          </ul>
        </div>

         <hr className="divider" />
        <div className="Startups">
          <h2>Startups</h2>
          <ul className="custom-list">
            <li><b>Cash Flow Planning</b> </li>
            <li><b>Compliance Guidance</b></li>
            <li><b>Structure Advisory</b></li>

          </ul>
        </div>
        



      </div>
    </div>
  );
};

export default FinancialConsulting;