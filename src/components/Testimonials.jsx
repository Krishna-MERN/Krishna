import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      title: "Web Developer",
      text: "Krishna is a skilled developer who transformed my idea into a fully functional website.",
      image: "/path/to/image.jpg"
    },
    {
      name: "Jane Smith",
      title: "Project Manager",
      text: "Krishna's ability to solve complex issues is exceptional. Highly recommend working with him!",
      image: "/path/to/image.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <h2>What People Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="title">{testimonial.title}</p>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
