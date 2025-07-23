import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      
      <div className="ul">
        <p>If you have any questions or would like to collaborate, feel free to reach out to me through the form below or directly via email or phone.</p>
      <ul type="none">
        <li><i class="fa-solid fa-envelope"> </i> Mail.kkshukla@gmail.com</li>
        <li><i class="fa-solid fa-phone"> </i> +91 7985687221</li>
        <li><i class="fa-solid fa-location-dot"> </i> Dasouli near Integral University Lucknow UP (India)</li>
      </ul>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="2" placeholder="Your Message" required></textarea>
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
