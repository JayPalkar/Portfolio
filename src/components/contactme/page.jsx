import { IoMdMail } from "react-icons/io";
import "./contact.css";
import { MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";

const ContactMe = () => {
  return (
    <section id="contact" className="contactSection">
      <div className="contactHeader">
        <h1 className="backDrop">Contact Me</h1>
        <h1 className="fair">Contact Me</h1>
      </div>
      <div className="socialAndFormContainer">
        <div className="socials">
          <a href="#">
            <IoMdMail className="socialIcons" />
            <p className="socialText">jaypalkar654@gmai.com</p>
          </a>
          <a href="#">
            <MdPhone className="socialIcons" />
            <p className="socialText">(+91) 9307943434</p>
          </a>
          <a href="https://github.com/JayPalkar">
            <FaGithub className="socialIcons" />
            <p className="socialText">JayPalkar</p>
          </a>
          <a href="https://www.linkedin.com/in/jay-palkar-26b551220/">
            <FaLinkedin className="socialIcons" />
            <p className="socialText">JayPalkar</p>
          </a>
        </div>
        <div className="formContainer">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            rows={5}
          ></textarea>
          <div className="buttonContainer">
            <button>
              <RxDoubleArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
