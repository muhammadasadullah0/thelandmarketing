import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import assets from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track collapse state
  const location = useLocation(); // Get the current location

  // Close the navbar when navigating
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // Toggle navbar state
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to check active link
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      {/* Logo */}
      <div className="logo-wrapper valign bg-black">
        <div className="logo">
          <a href="/">
            <img width={100} src={assets.theLandMarketingLogo} className="logo-img" alt="Logo" />
          </a>
        </div>
      </div>
      {/* Button */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbar"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="ti-menu"></i>
        </span>
      </button>
      {/* Menu */}
      <div className={`collapse navbar-collapse bg-black ${isOpen ? 'show' : ''}`} id="navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className={`nav-link ${isActive('/project')}`} onClick={handleNavLinkClick}>
              Our Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={handleNavLinkClick}>
              Our Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={handleNavLinkClick}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className={`nav-link ${isActive('/blog')}`} onClick={handleNavLinkClick}>
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
