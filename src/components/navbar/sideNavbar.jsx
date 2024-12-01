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
        <a className="sidebarLinks" href="#">
          <IoHomeSharp />
        </a>
        <a className="sidebarLinks" href="#">
          <FaUser />
        </a>
        <a className="sidebarLinks" href="#">
          <PiCodeFill />
        </a>
        <a className="sidebarLinks" href="#">
          <BsBarChartFill />
        </a>
        <a className="sidebarLinks" href="#">
          <MdPhone />
        </a>
      </div>
    </>
  );
};

export default SideNavbar;
