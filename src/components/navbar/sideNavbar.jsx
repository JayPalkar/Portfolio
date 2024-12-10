import "./sideNavbar.css";

const SideNavbar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <a className="brandName" href="#hero">
          J.
        </a>
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
