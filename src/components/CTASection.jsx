import React from "react";
import "../styles/CTASection.css";

export default function CTASection() {
  return (
  
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Ready to Begin Your Tafakkur Journey?</h2>
        <p className="cta-subtext">
          Order your physical Tafakkur Journal today and deepen your daily reflections.
        </p>
       <a href="#journal"> <button className="cta-button">Buy Now</button></a>
      </div>
    </section>
    
  );
}
