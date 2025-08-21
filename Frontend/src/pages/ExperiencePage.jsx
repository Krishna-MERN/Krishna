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
          <span>June 2025 – August 2025</span>
         <ul>
          <li>Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
          <li>Gaining hands-on experience in RESTful API development and frontend-backend integration.</li>
          <li>Collaborating with team members on real-time projects to understand industry workflows.</li>
          <li>Learning to implement responsive UI/UX using React and CSS frameworks.</li>
          <li>Writing clean, maintainable code and following best practices in web development.</li>
          <li>Enhancing debugging, testing, and deployment skills in a live development environment.</li>
         </ul>
        </div>

        <div className="timeline-item">
          <h3>Full stack java Developer Intern</h3>
          <p className="timeline-sub">Plasmid Innovation</p>
          <span>Oct 2024 - Dec 2024</span>
        <ul>
          <li>Developed and maintained Java-based applications using Core Java, Spring, and Hibernate frameworks.</li>
          <li>Designed and implemented backend logic, APIs, and database interactions for web applications.</li>
          <li>Collaborated with cross-functional teams to deliver scalable and efficient software solutions.</li>
          <li>Involved in debugging, testing, and optimizing application performance.</li>
          <li>Followed object-oriented programming principles and industry-standard coding practices.</li>
        </ul>
        </div>

        <div className="timeline-item">
          <h3>Research Intern</h3>
          <p className="timeline-sub">Integral University Robotices Lab</p>
          <span>Oct 2025 – Jan 2025</span>
          <ul>
            <li>Conducted research in AI and Robotics, focusing on intelligent systems and automation.</li>
            <li>Explored applications of artificial intelligence in robotic systems for smart automation.</li>
            <li>Worked on AI and Robotics research involving machine learning and autonomous control.</li>
            <li>Researched intelligent robotics with an emphasis on AI-driven decision-making.</li>
            <li>Engaged in AI and Robotics research to develop smarter, autonomous technologies.</li>
          </ul>
     
        </div>
        <div className="timeline-item">
          <h3>B.Tech (Computer Science and Engineering )</h3>
          <p className="timeline-sub">Integral University</p>
          <span>July 2022 – June 2026 (expected)</span>
          <p>Pursuing Bachelor of Technology (B.Tech) in Computer Science and Engineering from Integral University Lucknow, with a focus on building strong technical and problem-solving skills.</p>
        </div>
        <div className="timeline-item">
          <h3>Intermediate</h3>
          <p className="timeline-sub">R V P I C Pithla Ayodhya</p>
          <span>2021 – Present</span>
          <p>Completed Intermediate (12th) with a focus on Science stream, enhancing analytical and problem-solving skills.</p>
        </div>
        <div className="timeline-item">
          <h3>High School</h3>
          <p className="timeline-sub">R VP I C Pithla Ayodhya</p>
          <span>2021 – Present</span>
          <p>Completed High School (10th) with a strong foundation in core subjects like Mathematics, Science, and English.</p>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
