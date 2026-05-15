import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle the mobile menu on/off
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-container">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Company Logo" className="site-logo" />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`site-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {/* ADDED HOME LINK HERE */}
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            
            <li><Link to="/about-us" onClick={closeMobileMenu}>About us</Link></li>
            <li><Link to="/financial-services" onClick={closeMobileMenu}>Financial services</Link></li>
            <li><Link to="/bajaj-broking" onClick={closeMobileMenu}>Bajaj Broking</Link></li>
            
            <li 
              className="nav-dropdown" 
              onMouseEnter={() => setDropdownOpen(true)} 
              onMouseLeave={() => setDropdownOpen(false)}
              onClick={() => setDropdownOpen(!dropdownOpen)} 
            >
              <span className="dropdown-trigger">Other services ▼</span>
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><Link to="/coal-trading" onClick={closeMobileMenu}>Coal Trading</Link></li>
                <li><Link to="/financial-consulting" onClick={closeMobileMenu}>Financial Consulting</Link></li>
              </ul>
            </li>
            
            <li><Link to="/contact-us" onClick={closeMobileMenu}>Contact us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;