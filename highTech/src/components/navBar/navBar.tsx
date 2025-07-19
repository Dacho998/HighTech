import { useState } from "react";
import { Link } from "react-router-dom";
import './navBar.css';

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <Link to="/" className="logo-text">HighTech Service</Link>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/Services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Контакт</Link></li>
      </ul>
    </nav>
  );
};