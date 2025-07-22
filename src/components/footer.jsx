import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
   
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:info@tafakkur.com">info@tafakkur.com</a></p>
          <p>Phone: +92 300 1234567</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#myjournal">My Journal</a></li>
            <li><a href="#journal">Shop</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
         <div className="social-icons">
  <a href="https://instagram.com/tafakkur" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i className="ri-instagram-line"></i>
  </a>
  <a href="https://twitter.com/tafakkur" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="ri-twitter-x-line"></i>
  </a>
  <a href="https://facebook.com/tafakkur" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="ri-facebook-circle-line"></i>
  </a>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Tafakkur. All rights reserved.</p>
      </div>
    </footer>

  );
}
