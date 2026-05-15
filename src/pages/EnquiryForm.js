import React, { useState } from 'react';
import './EnquiryForm.css'; // Make sure this matches your CSS file name

const EnquiryForm = () => {
  const [status, setStatus] = useState("Submit Enquiry");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // 1. The exact Google Form submission URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd-EQFXVnV1S7G2m3e2ONbpedg6qLJ5Kkc56esxJboMCxEo1Q/formResponse";

    // 2. Map your form inputs to your specific Google Form entry IDs
    const formData = new FormData();
    
    formData.append("entry.2942", e.target.name.value);           // Name (Mandatory)
    formData.append("entry.673373125", e.target.phone.value);     // Phone (Mandatory)
    formData.append("entry.1308458060", e.target.email.value);    // Email (Mandatory)
    formData.append("entry.1617206449", e.target.org.value);      // Organization (Optional)
    formData.append("entry.2037185849", e.target.location.value); // Location (Mandatory)

    try {
      // 3. Send the data silently to Google
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors", // Bypasses browser security blocks for headless submission
        body: formData
      });

      // 4. Show success and clear the form
      setStatus("✅ Enquiry Sent Successfully!");
      e.target.reset(); // Clears the input fields
      
      // Reset button text after 3 seconds
      setTimeout(() => setStatus("Submit Enquiry"), 3000);
      
    } catch (error) {
      setStatus("❌ Error. Try again.");
      setTimeout(() => setStatus("Submit Enquiry"), 3000);
    }
  };

  return (
    <div className="enquiry-page-wrapper">
      <div className="enquiry-card">
        
        <div className="enquiry-header">
          <h1>HOW CAN WE HELP?</h1>
          <p>Fill out the form below and our experts will get back to you shortly.</p>
        </div>

        {/* The Custom Theme Form */}
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
            <input type="text" name="org" placeholder="e.g. Reliance Industries" /> {/* No 'required' tag here */}
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