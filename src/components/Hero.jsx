import React from "react";
import "../styles/Hero.css";
import { Typewriter } from "react-simple-typewriter";
// import 'react-simple-typewriter/dist/index.css';
import profile from "./images/profile.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Hello, I'm <span>Krishna Kumar Shukla</span></h1>
        <h2 style={{ color: "var(--primary-color)" }}>
          <Typewriter
            words={[
              "I'm a Web Developer.",
              "I'm a MERN Stack Enthusiast.",
              "I'm a Backend Developer."
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="intro">
          Hello! I'm Krishna Kumar Shukla, a dedicated and enthusiastic computer science student with a passion for technology and innovation. I am currently pursuing my B.Tech (CSE) at Integral University Lucknow, where I am honing my skills in development,<span className="highlight"> MERN Stack web development, </span> and <span className="highlight"> Backend development.</span> 
        </p>
        <div className="hero-buttons">
          <Link to="/Projects" className="btn">View Projects</Link> 
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
