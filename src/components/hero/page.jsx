import "./heroSection.css";
import myImage from "../../assets/my.png";

const Hero = () => {
  return (
    <section className="heroSection">
      <div className="textContainer">
        <p className="greetingText">Hello I&apos;m</p>
        <h1 className="nameText">Jay Palkar</h1>
        <h2 className="domainText">A Full Stack Developer</h2>
        <h2 className="tagLine">Let’s build something remarkable together!</h2>
      </div>
      <div className="imageContainer">
        <img className="heroSectionImage" src={myImage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
