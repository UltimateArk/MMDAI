import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <div className="hero-section">
        <h1>MMD Anaalytics India Private Limited</h1>
        <p className="hero-subtitle">
          Professional Financial Solutions & Trading Services<br /><br />
          Trusted partner for financial services, business consulting, broking solutions and coal trading based in Ranchi, Jharkhand.
        </p>
        
        {/* We removed the hr divider here to keep the hero section cleaner when centered! */}

        <div className="hero-buttons">
  <a href="https://hniekyc2.bajajfinservsecurities.in:443/?RmCode=YZHe7mPVh2F6j11ynlv5gw==&Id=HfAZznRaanhPXIwgLG0s3w==&utm_source=GeneralLink&utm_medium=medium&utm_campaign=campaign" target="_blank" rel="noopener noreferrer" className="btn btn-primary interactive-btn">
    🟢 Open Demat Account
  </a>
  
  <a href="/ConsultationForm" target="_blank" rel="noopener noreferrer" className="btn btn-secondary interactive-btn">
    🟢 Request Consultation
  </a>
  
  <a href="/EnquiryForm" className="btn btn-secondary interactive-btn">
    🟢 Coal Enquiry
  </a>

  {/* NEW DOWNLOAD BUTTON */}
  {/* The 'href' must match the exact name of the file in your public folder */}
  <a 
  href="/MMD_Anaalytics_Brochure.pdf" 
  download="MMD_Anaalytics_Brochure.pdf" 
  className="btn btn-secondary interactive-btn">
  📥 Download Brochure
</a>
</div>
      </div>
      
      <hr className="divider" />

      {/* Core Values Section */}
      <div className="who-we-are">
        <h2>WHO WE ARE</h2>
        <p>MMD Anaalytics India Private Limited is a professionally managed company providing financial services, consulting solutions, broking support and coal trading services to individuals and businesses. We are known for our transparent approach, ethical practices, and client-first mindset.</p>
        <br />
        <p>Our operations are based in Ranchi, Jharkhand, and we serve clients across India.</p>
      </div>
      <br />
      <hr className="divider" />

      {/* Services Section */}
      <div className="our-services">
        <h2>OUR SERVICES</h2>
        <dl>
          <dt><b>Financial Services</b></dt>
          <dd>Investment advisory, insurance, taxation and planning services.</dd><br />
          <dt><b>Broking Services</b></dt>
          <dd>Authorized business partnership with Bajaj Broking for demat and trading accounts.</dd><br />
          <dt><b>Consulting Services</b></dt>
          <dd>Financial consulting for individuals, startups, SMEs and corporates.</dd><br />
          <dt><b>Coal Trading</b></dt>
          <dd>Supply, trading and logistics of industrial and thermal coal.</dd><br />
        </dl>
      </div>
      <hr className="divider" />

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>WHY CHOOSE US ?</h2>
        <ul className="benefits-list">
          <li><big>✅ Experienced Team</big></li>
          <li><big>✅ Multiple Business Solutions Under One Roof</big></li>
          <li><big>✅ Transparent Dealings</big></li>
          <li><big>✅ Quick Support & Response</big></li>
          <li><big>✅ Client-First Approach</big></li>
        </ul>
      </div>

    </div>
  );
};

export default Home;