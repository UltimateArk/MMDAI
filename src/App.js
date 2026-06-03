import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import TickerTape from './components/Ui/TickerTape';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EnquiryForm from './pages/EnquiryForm';
import ConsultationForm from './pages/ConsultationForm';
import FinancialServices from './pages/FinancialServices';
import FinancialConsulting from './pages/FinancialConsulting';
import BajajBroking from './pages/BajajBroking';
import CoalTrading from './pages/CoalTrading';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <TickerTape />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/EnquiryForm" element={<EnquiryForm />} />
          <Route path="/ConsultationForm" element={<ConsultationForm />} />
          <Route path="/financial-services" element={<FinancialServices />} />
          <Route path="/financial-consulting" element={<FinancialConsulting />} />
          <Route path="/bajaj-broking" element={<BajajBroking />} />
          <Route path="/coal-trading" element={<CoalTrading />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
