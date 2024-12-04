import { BsBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { PiCodeFill } from "react-icons/pi";
import "./sideNavbar.css";

const SideNavbar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <a className="sidebarLinks" href="#hero">
          <IoHomeSharp />
        </a>
        <a className="sidebarLinks" href="#about">
          <FaUser />
        </a>
        <a className="sidebarLinks" href="#projects">
          <PiCodeFill />
        </a>
        <a className="sidebarLinks" href="#testimonials">
          <BsBarChartFill />
        </a>
        <a className="sidebarLinks" href="#contact">
          <MdPhone />
        </a>
      </div>
    </>
  );
};

export default SideNavbar;
