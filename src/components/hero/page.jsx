import "./heroSection.css";
import myImage from "../../assets/my.png";
import SideNavbar from "../navbar/sideNavbar";
import bgImage from "../../assets/aboutmeImg.png";

const Hero = () => {
  return (
    <main className="heroAndSidebar">
      <section id="hero" className="heroSection">
        <div className="textContainer">
          <p className="greetingText">Hello 👋 I&apos;m</p>
          <h1 className="nameText">Jay Palkar</h1>
          <h2 className="domainText">A Full Stack Developer</h2>
          <h2 className="tagLine">
            Let’s build something remarkable together!
          </h2>
        </div>
        <div className="imageContainer">
          <img className="heroBackgroundImage" src={bgImage} alt="" />
          <img className="heroSectionImage" src={myImage} alt="" />
        </div>
      </section>
      <div className="sidebar">
        <SideNavbar />
      </div>
    </main>
  );
};

export default Hero;
