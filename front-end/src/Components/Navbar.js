import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css' 



const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
  
      <div className="navbar-container">
        {/* Add the logo inside the navbar-logo div */}
        <div className="navbar-logo">
          <Link to="/">
            {/* <img src={logo} alt="Logo" className="logo-image" /> */}
          </Link>
        </div>
        
        <ul className={`navbar-list ${isCollapsed ? 'hidden' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/Donate">Donate</Link></li>
          <li><Link to="/Volunteer">Volunteer</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
        <div className={`hamburger-menu ${isCollapsed ? '' : 'hidden'}`} onClick={() => document.querySelector('.navbar-list').classList.toggle('hidden')}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
