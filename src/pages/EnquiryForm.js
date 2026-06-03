import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './EnquiryForm.css';

const EnquiryForm = () => {
  useScrollReveal();
  const [status, setStatus] = useState("Submit Enquiry");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd-EQFXVnV1S7G2m3e2ONbpedg6qLJ5Kkc56esxJboMCxEo1Q/formResponse";
    const formData = new FormData();
    
    formData.append("entry.2942", e.target.name.value);           
    formData.append("entry.673373125", e.target.phone.value);     
    formData.append("entry.1308458060", e.target.email.value);    
    formData.append("entry.1617206449", e.target.org.value);      
    formData.append("entry.2037185849", e.target.location.value); 

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", 
        body: formData
      });

      setStatus("✅ Enquiry Sent Successfully!");
      e.target.reset(); 
      setTimeout(() => setStatus("Submit Enquiry"), 3000);
    } catch (error) {
      setStatus("❌ Error. Try again.");
      setTimeout(() => setStatus("Submit Enquiry"), 3000);
    }
  };

  return (
    <div className="enquiry-page-wrapper">
      <div className="enquiry-card reveal">
        <div className="enquiry-header">
          <h1>HOW CAN WE <span style={{color: '#00C9A7'}}>HELP?</span></h1>
          <p>Fill out the form below and our experts will get back to you shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="standalone-contact-form">
          <div className="input-group">
            <label>Full Name *</label>
            <input type="text" name="name" placeholder="e.g. John Doe" required />
          </div>

          <div className="input-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" placeholder="+91 9876543210" required />
          </div>

          <div className="input-group">
            <label>Email Address *</label>
            <input type="email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="input-group">
            <label>Organization / Company Name</label>
            <input type="text" name="org" placeholder="e.g. Reliance Industries" />
          </div>

          <div className="input-group">
            <label>Location / City *</label>
            <input type="text" name="location" placeholder="e.g. Ranchi, Jharkhand" required />
          </div>
          
          <button type="submit" className="enquiry-submit-btn" disabled={status === "Sending..."}>
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;