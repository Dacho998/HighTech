import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import './navBar.css'

export const NavBar = () => (
  <nav className="navigation">
    <img src={logo} alt="HighTech Logo" className="logo" />
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Services">Services</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/contact">Контакт</Link></li>
    </ul>
  </nav>
);
