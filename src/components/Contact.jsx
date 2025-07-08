import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>
      <p className="section-subtitle">I'd love to hear from you!</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="6" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;
