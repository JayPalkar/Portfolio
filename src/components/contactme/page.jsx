import { IoMdMail } from "react-icons/io";
import "./contact.css";
import { MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <a href="#">
            <FaGithub className="socialIcons" />
            <p className="socialText">JayPalkar</p>
          </a>
          <a href="#">
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
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.3333 13.3333H29.3333L42.6667 31.9999L29.3333 50.6666H41.3333L54.6667 31.9999L41.3333 13.3333Z"
                  fill="#E3CA3C"
                />
                <path
                  d="M22.6667 13.3333H10.6667L24 31.9999L10.6667 50.6666H22.6667L36 31.9999L22.6667 13.3333Z"
                  fill="#E3CA3C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
