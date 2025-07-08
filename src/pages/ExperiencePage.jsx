import React from "react";
import "../styles/ExperiencePage.css";

function ExperiencePage() {
  return (
    <section className="experience-page">
      <h2 className="section-title">My Experience & Education</h2>

      <div className="timeline-section">
        <div className="timeline-item">
          <h3>MERN Stack Trainee</h3>
          <p className="timeline-sub">Softpro India </p>
          <span>June 2025 – july 2025</span>
          <p>Built responsive React components, REST API integrations, and improved UI performance.</p>
        </div>

        <div className="timeline-item">
          <h3>Full stack java Developer Intern</h3>
          <p className="timeline-sub">Plasmid Innovation</p>
          <span>Oct 2024 - Dec 2024</span>
          <p>Developed scalable APIs in Node.js and integrated MongoDB for dynamic dashboards.</p>
        </div>

        <div className="timeline-item">
          <h3>Research Intern</h3>
          <p className="timeline-sub">Integral University Robotices Lab</p>
          <span>Oct 2025 – Jan 2025</span>
          <p>Focused on data structures, MERN stack, and backend architecture design.</p>
        </div>
        <div className="timeline-item">
          <h3>B.Tech (Computer Science and Engineering )</h3>
          <p className="timeline-sub">Integral University</p>
          <span>July 2022 – June 2026 (expected)</span>
          <p>Focused on data structures, MERN stack, and backend architecture design.</p>
        </div>
        <div className="timeline-item">
          <h3>Intermediate</h3>
          <p className="timeline-sub">R V P I C Pithla Ayodhya</p>
          <span>2021 – Present</span>
          <p>Focused on data structures, MERN stack, and backend architecture design.</p>
        </div>
        <div className="timeline-item">
          <h3>High School</h3>
          <p className="timeline-sub">R VP I C Pithla Ayodhya</p>
          <span>2021 – Present</span>
          <p>Focused on data structures, MERN stack, and backend architecture design.</p>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
