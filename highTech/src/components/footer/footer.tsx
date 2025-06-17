import "./Footer.css";

export const Footer = () => {
  return (
 <footer className="footer">
  <div className="footer-container">
    <div>
      <h3 className="footer-title">HighTech Service</h3>
      <p className="footer-text">© 2025 All rights reserved.</p>
    </div>
    <div>
      <h4 className="footer-subtitle">Contact Us</h4>
      <p className="footer-text">hightechservice.mk@gmail.com</p>
      <p className="footer-text">+389 76 910 836</p>
    </div>
    <div>
      <h4 className="footer-subtitle">Follow Us</h4>
     <a
  href="https://www.facebook.com/profile.php?id=61573859452758"
  className="footer-link"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-facebook-f facebook-icon"></i>
  Facebook
</a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
