import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate for scroll
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true); // default: show navbar
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setScrolled(false); // scroll down = hide navbar
      } else {
        setScrolled(true); // scroll up = show navbar
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
    setMenuOpen(false); // close mobile menu
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "show" : ""}`}>
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo" />

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><button onClick={() => handleNavClick("hero")}>Home</button></li>
            <li><button onClick={() => handleNavClick("about")}>About</button></li>
            <li><button onClick={() => handleNavClick("journal")}>Journal</button></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          </ul>

          <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </nav>

      <div style={{ height: "80px" }}></div> {/* spacing below navbar */}
    </>
  );
};

export default Navbar;
