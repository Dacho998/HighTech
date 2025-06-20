import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => (
  <nav className="navigation">
    <div className="logo-text">HighTech Service</div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/contact">Контакт</Link></li>
    </ul>
  </nav>
);