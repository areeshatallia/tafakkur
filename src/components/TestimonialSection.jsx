import React from "react";
import "../styles/TestimonialSection.css";



const TestimonialSection = () => {
  return (
    
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="testimonial-heading">How Tafakkur Has Touched Lives</h2>

        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="testimonial-text">
              “Writing in my Tafakkur journal every morning has brought me peace and clarity. It's more than a notebook — it's a companion.”
            </p>
            <span className="testimonial-author">— Amina, Lahore</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “Even as a non-Muslim, I found the daily verses deeply reflective. It helped me pause and think about my purpose.”
            </p>
            <span className="testimonial-author">— James, London</span>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              “The calm design and guided prompts have helped me stay consistent. Tafakkur feels like sacred space in my day.”
            </p>
            <span className="testimonial-author">— Fatima, Karachi</span>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default TestimonialSection;
