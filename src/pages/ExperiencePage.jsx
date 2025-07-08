import React from "react";
import "../styles/ExperiencePage.css";

function ExperiencePage() {
  return (
    <section className="experience-page">
      <h2 className="section-title">My Experience & Education</h2>

      <div className="timeline-section">
        <div className="timeline-item">
          <h3>Web Developer Intern</h3>
          <p className="timeline-sub">XYZ Tech Solutions</p>
          <span>Jan 2024 – Mar 2024</span>
          <p>Built responsive React components, REST API integrations, and improved UI performance.</p>
        </div>

        <div className="timeline-item">
          <h3>Backend Developer Intern</h3>
          <p className="timeline-sub">AlphaTech</p>
          <span>May 2023 – Aug 2023</span>
          <p>Developed scalable APIs in Node.js and integrated MongoDB for dynamic dashboards.</p>
        </div>

        <div className="timeline-item">
          <h3>B.Tech – Computer Science</h3>
          <p className="timeline-sub">Integral University</p>
          <span>2021 – Present</span>
          <p>Focused on data structures, MERN stack, and backend architecture design.</p>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
