import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
     <a href="./"><div className="logo"><img src={logo} alt="" /> Krishna.</div></a> 

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li> <a href="https://drive.google.com/file/d/1S0-1gIZmIVlpWDsuw8L4b5Bsr0qyeSBO/view" download className="nav-resume">Resume</a></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i>}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
