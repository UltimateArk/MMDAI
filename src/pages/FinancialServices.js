import React from 'react';
import { Link } from 'react-router-dom';
import './FinancialServices.css';

const FinancialServices = () => {
  return (
    <div className="services-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>OUR FINANCIAL SERVICES</h1>
        <p className="hero-subtitle">
          We offer professional financial services designed to help individuals and businesses manage wealth efficiently.</p>
      </div>

      <div className="services-content">
        
        

        <hr className="divider" />

        {/* Offerings Block */}
        <div className="services-included">
          <h2>OUR CORE OFFERINGS</h2>
          <ul className="custom-list">
            <li><b>Investment Planning:</b> Customized portfolio management and structured mutual fund investments to maximize your returns.</li>
            <li><b>Taxation Services:</b> Efficient tax planning, filing, and compliance for both individuals and corporate entities.</li>
            <li><b>Insurance Solutions:</b> Comprehensive life, health, and corporate insurance planning to mitigate financial risks.</li>
            <li><b>Wealth & Retirement Planning:</b> Long-term wealth creation strategies designed for a secure, stress-free future.</li>
            <li><b>Mutual Funds:</b> Expertly curated investment portfolios tailored to your risk appetite, ensuring steady and long-term wealth creation.</li>
          </ul>
          <br></br>
          <Link to="/contact-us" className="contact-link">👉 Contact us for professional guidance.</Link>
        </div>

        <hr className="divider" />


      </div>
    </div>
  );
};

export default FinancialServices;