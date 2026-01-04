import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <span onClick={() => handleClick("about")}>About</span>
        <span onClick={() => handleClick("projects")}>Projects</span>
        <span onClick={() => handleClick("skills")}>Skills</span>
        <span onClick={() => handleClick("resume")}>Resume</span>
        <span onClick={() => handleClick("contact")}>Contact</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}
