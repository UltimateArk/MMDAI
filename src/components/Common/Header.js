import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// IMPORT YOUR LOGO HERE
// Adjust the path ('../') depending on where this Header component is located relative to the root/src folder
import mmdLogo from '../../assets/MMD Logo CMYK - 02.png';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMobileMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Ensure mobile menu is closed on first mount
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Track viewport size
  useEffect(() => {
    const setFromWindow = () => setIsMobileView(window.innerWidth <= 768);
    setFromWindow();
    window.addEventListener('resize', setFromWindow);
    return () => window.removeEventListener('resize', setFromWindow);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar container" aria-label="Main navigation">
          
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            
            {/* REPLACED SVG WITH IMG TAG HERE */}
            <div className="logo-icon" aria-hidden="true">
              <img 
                src={mmdLogo} 
                alt="MMD Analytics Logo" 
                style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>

            {/* Note: If your PNG image already contains the text "MMD Anaalytics", 
                you can safely delete this entirely. */}
            <div className="logo-text">
              <span className="logo-primary">MMD Anaalytics</span>
              <span className="logo-secondary">India Private Limited</span>
            </div>

          </Link>

          <ul
            className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
            style={isMobileView ? { transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-120%)' } : undefined}
          >
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} onClick={closeMobileMenu}>About Us</Link></li>
            
            <li className="has-dropdown" 
                onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
                onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}>
              <span className={`nav-link ${location.pathname.includes('services') ? 'active' : ''}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
                Financial Services <span className="dropdown-arrow" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>▾</span>
              </span>
              <ul className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                <li><Link to="/financial-services" onClick={closeMobileMenu}>All Services</Link></li>
                <li><Link to="/financial-consulting" onClick={closeMobileMenu}>Consulting</Link></li>
              </ul>
            </li>
            
            <li><Link to="/bajaj-broking" className={`nav-link ${location.pathname === '/bajaj-broking' ? 'active' : ''}`} onClick={closeMobileMenu}>Bajaj Broking</Link></li>
            <li><Link to="/coal-trading" className={`nav-link ${location.pathname === '/coal-trading' ? 'active' : ''}`} onClick={closeMobileMenu}>Coal Trading</Link></li>
            <li><Link to="/contact-us" className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact Us</Link></li>
          </ul>

          <Link to="/bajaj-broking#demat" className="btn btn-primary nav-cta">Open Demat</Link>

          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="ham-line" aria-hidden="true"></span>
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'visible' : ''}`} onClick={closeMobileMenu}></div>
    </>
  );
};

export default Header;