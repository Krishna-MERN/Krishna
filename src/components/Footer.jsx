import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* 1. About Us */}
        <div className="footer-about">
          <h4>About Me</h4>
          <p>
            Hello! I'm Krishna Kumar Shukla, a Computer Science student with a passion for creating innovative solutions.
            I enjoy working on web and app development.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">About</Link></li>
            <li><a href="#contact">Projects</a></li>
            <li><a href="#contact">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* 3. Contact Info */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>Email: <a href="mail.kkshukla@gmail.com">mail.kkshukla@gmail.com</a></p>
          <p>Email: <a href="">+91 7985687221</a></p>
          <p>Location: Lucknow, India</p>
        </div>

        {/* 4. Social Links */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="mail.kkshukla@gmail.com" title="Email" target="_blank" rel="noreferrer">📧</a>
            <a href="https://github.com/Krishna-MERN" title="GitHub" target="_blank" rel="noreferrer">🐱</a>
            <a href="https://linkedin.com/in/your-profile" title="LinkedIn" target="_blank" rel="noreferrer">💼</a>
          </div>
        </div>

      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} Krishna Kumar Shukla. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
