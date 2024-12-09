import { IoMdMail } from "react-icons/io";
import "./contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useState } from "react";
import axios from "axios";
import { RiLoaderFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const successNotification = () => toast.success("Email sent successfully");
  const warningNotification = () =>
    toast.warning("Please fill all the fields before sending the email");
  const errorNotification = () =>
    toast.error("There was some server error, Please try again later");

  const handleSendEmail = async () => {
    setLoading(true);

    if (name === "" || email === "" || message === "") {
      warningNotification();
      setLoading(false);
    } else {
      const serviceId = "service_zyw3c5d";
      const templateId = "template_v9c4xpf";
      const publicKey = "4rddniZGB4WWiBR7D";

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          to_name: "Jay Palkar",
          message: message,
        },
      };
      try {
        const response = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          data
        );
        console.log(response);
        successNotification();
        setLoading(false);
      } catch (error) {
        errorNotification();
        console.error(error);
      }
    }
  };

  return (
    <section id="contact" className="contactSection">
      <ToastContainer position="top-center" />
      <div className="contactHeader">
        <h1 className="backDrop">Contact Me</h1>
        <h1 className="fair">Contact Me</h1>
      </div>
      <div className="socialAndFormContainer">
        <div className="socials">
          <a href="mailto:jaypalkar654@gmail.com">
            <IoMdMail className="socialIcons" />
            <p className="socialText">jaypalkar654@gmail.com</p>
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
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            rows={5}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="buttonContainer">
            <button onClick={handleSendEmail}>
              {loading ? <RiLoaderFill className="loadingIcon"/> : <RxDoubleArrowRight />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
