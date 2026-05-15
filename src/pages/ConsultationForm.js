import React, { useState } from 'react';
import './ConsultationForm.css';

const ConsultationForm = () => {
  const [status, setStatus] = useState("Submit Request");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // 1. Your exact formResponse URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeCUnjIvFNZW61cdpSaua9GcNRGEKIrYzsVOuO8RClUVlvvmg/formResponse";

    const searchParams = new URLSearchParams();
    
    // 2. Exact mappings from your pre-filled link
    searchParams.append("entry.1630674829", e.target.name.value);     // Name
    searchParams.append("entry.578894859", e.target.phone.value);    // Phone
    searchParams.append("entry.1359333679", e.target.email.value);    // Email
    searchParams.append("entry.858732697", e.target.location.value);  // Location / Address
    
    searchParams.append("entry.528670497", e.target.service.value);   // Service Required
    searchParams.append("entry.1954641767", e.target.product.value);  // Product Interest (e.g. Mutual Funds)
    searchParams.append("entry.1573554525", e.target.goal.value);     // Investment Goal (e.g. Regular Income)
    searchParams.append("entry.517895663", e.target.timeframe.value); // Horizon (e.g. 3-5 Years)
    searchParams.append("entry.114680611", e.target.amount.value);    // Investment Amount
    
    searchParams.append("entry.840801593", e.target.message.value);   // Message/Remarks
    
    // For the consent checkbox, Google Forms expects the exact text string if checked
    if (e.target.consent.checked) {
      searchParams.append(
        "entry.1105796607", 
        "I confirm that the information provided above is true and accurate. By submitting this form, I authorize the. firm to contact me regarding my query."
      );
    }

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: searchParams
      });

      setStatus("✅ Request Sent Successfully!");
      e.target.reset(); 
      setTimeout(() => setStatus("Submit Request"), 4000);
      
    } catch (error) {
      setStatus("❌ Error. Try again.");
      setTimeout(() => setStatus("Submit Request"), 3000);
    }
  };

  return (
    <div className="consultation-page-wrapper">
      <div className="consultation-card">
        
        <div className="consultation-header">
          <h1>REQUEST A CONSULTATION</h1>
          <p>Provide your details below to help us prepare the best financial solutions for your session.</p>
        </div>

        <form onSubmit={handleSubmit} className="premium-form">
          
          {/* --- SECTION 1: PERSONAL DETAILS --- */}
          <h3 className="section-title">1. Personal Details</h3>
          
          <div className="form-row">
            <div className="input-group half-width">
              <label>Full Name *</label>
              <input type="text" name="name" placeholder="e.g. John Doe" required />
            </div>

            <div className="input-group half-width">
              <label>Phone Number *</label>
              <input type="tel" name="phone" placeholder="+91 9876543210" required />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Email Address *</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>

            <div className="input-group half-width">
              <label>City / Location *</label>
              <input type="text" name="location" placeholder="e.g. Ranchi" required />
            </div>
          </div>

          <hr className="form-divider" />

          {/* --- SECTION 2: CONSULTATION DETAILS --- */}
          <h3 className="section-title">2. Consultation Details</h3>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Service Required *</label>
              <select name="service" required className="custom-select">
                <option value="" disabled selected>Select a service...</option>
                <option value="Account Opening">Account Opening</option>
                <option value="Compliance and Security">Compliance & Security</option>
                <option value="Financial Planning">Financial Planning</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="input-group half-width">
              <label>Product Interest</label>
              <select name="product" className="custom-select">
                <option value="" disabled selected>Select product...</option>
                <option value="Mutual Funds">Mutual Funds</option>
                <option value="Equities / Stocks">Equities / Stocks</option>
                <option value="Insurance">Insurance</option>
                <option value="Coal Trading">Coal Trading</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label>Investment Goal</label>
              <select name="goal" className="custom-select">
                <option value="" disabled selected>Select goal...</option>
                <option value="Regular Income">Regular Income</option>
                <option value="Wealth Creation">Wealth Creation</option>
                <option value="Retirement Planning">Retirement Planning</option>
                <option value="Capital Preservation">Capital Preservation</option>
              </select>
            </div>

            <div className="input-group half-width">
              <label>Time Horizon</label>
              <select name="timeframe" className="custom-select">
                <option value="" disabled selected>Select timeframe...</option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Estimated Investment Amount</label>
            <select name="amount" className="custom-select">
              <option value="" disabled selected>Select amount range...</option>
              <option value="Under 10,000 Rs">Under 10,000 Rs</option>
              <option value="10,000 Rs to 50,000 Rs">10,000 Rs to 50,000 Rs</option>
              <option value="50,000 Rs to 1 Lakh">50,000 Rs to 1 Lakh</option>
              <option value="Above 1 Lakh">Above 1 Lakh</option>
            </select>
          </div>

          <div className="input-group">
            <label>Additional Remarks / Queries</label>
            <textarea name="message" placeholder="Any specific questions before we connect?" rows="3"></textarea>
          </div>
          
          <div className="checkbox-group">
            <input type="checkbox" name="consent" id="consentBox" required />
            <label htmlFor="consentBox" className="consent-text">
              I confirm that the information provided above is true and accurate. By submitting this form, I authorize the firm to contact me regarding my query.
            </label>
          </div>
          
          <button type="submit" className="submit-btn" disabled={status === "Sending..."}>
            {status}
          </button>
        </form>

      </div>
    </div>
  );
};

export default ConsultationForm;