import { useState } from "react";
import "./sideNavbar.css";

const SideNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(() =>
    window.innerWidth <= 480 ? false : true
  );

  const handleMenuOpen = () => {
    if (window.innerWidth <= 480) {
      setMenuOpen(!menuOpen);
    }
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
        {menuOpen && (
          <div className="menuLinks">
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
        )}
      </div>
    </>
  );
};

export default SideNavbar;
