import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import PhotoWithZoom from './components/Ui/PhotoWithZoom';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'



// Component Imports
 // Update these paths if your files are in different folders



import FinancialServices from './pages/FinancialServices';
import BajajBroking from './pages/BajajBroking';
import FinancialConsulting from './pages/FinancialConsulting';
import EnquiryForm from './pages/EnquiryForm';
import TickerTape from './components/Ui/TickerTape'; 
import CoalTrading from './pages/CoalTrading';
import ConsultationForm from './pages/ConsultationForm';

// Make sure PhotoWithZoom is imported if it's in a separate file!
// import PhotoWithZoom from './PhotoWithZoom'; 

const PageContent = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <p>Welcome to the {title} page. This is a professional layout styled with deep blue and teal accents.</p>
    <h2>Gallery</h2>
    <div className="photo-grid">
      <PhotoWithZoom imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" altText="Corporate Building" />
      <PhotoWithZoom imageUrl="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop" altText="Financial Charts" />
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    document.title = "mmdai.in";
  }, []);

  return (
    <div className="page-wrapper">
      
      {/* --- STICKY HEADER & TICKER GROUP --- */}
      {/* This ensures both the Nav and the Ticker stay glued to the top */}
      <div className="sticky-header-group">
        <Header />
        <TickerTape />
      </div>
      {/* ------------------------------------ */}
      
      {/* Main Content Layout */}
      <main className="main-layout" style={{ display: 'block' }}> 
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/financial-services" element={<FinancialServices/>} />
            <Route path="/bajaj-broking" element={<BajajBroking/>} />
            <Route path="/coal-trading" element={<CoalTrading/>} />
            <Route path="/financial-consulting" element={<FinancialConsulting/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/EnquiryForm" element={<EnquiryForm/>} />
            <Route path="/ConsultationForm" element={<ConsultationForm/>} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;