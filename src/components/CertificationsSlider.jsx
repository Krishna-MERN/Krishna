import React, { useState, useEffect } from "react";
import certifications from "../data/certifications";
import "../styles/CertificationsSlider.css";

function CertificationsSlider() {
  const [current, setCurrent] = useState(0);
  const total = certifications.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <section className="cert-slider" id="certifications">
      <h2 className="section-title">Certifications & Awards</h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={prevSlide}>‹</button>

        <div className="slider">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />
              )}
              <h3>{cert.title}</h3>
              <p>{cert.provider}</p>
              <span className="cert-date">{cert.date}</span>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
}

export default CertificationsSlider;
