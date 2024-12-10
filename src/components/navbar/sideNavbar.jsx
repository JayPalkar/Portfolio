import { useState } from "react";
import "./sideNavbar.css";

const SideNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="sidebarContainer">
        <a className="brandName" href="#hero">
          J.
        </a>
        <button onClick={handleMenuOpen} className="hamburgerButton">
          <div
            className={`hamburgerBar topBar ${
              menuOpen ? "transformToCross" : ""
            }`}
          ></div>
          <div
            className={`hamburgerBar bottomBar ${
              menuOpen ? "transformToCross" : ""
            }`}
          ></div>
        </button>
        <a className="sidebarLinks" href="#about">
          About
        </a>
        <a className="sidebarLinks" href="#projects">
          Projects
        </a>
        <a className="sidebarLinks" href="#testimonials">
          Testimonial
        </a>
        <a className="sidebarLinks" href="#contact">
          Contact
        </a>
      </div>
    </>
  );
};

export default SideNavbar;
