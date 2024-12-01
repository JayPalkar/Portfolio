import "./aboutMe.css";
import aboutmeImg from "../../assets/aboutmeImg.png";
import mongo from "../../assets/techstack/mongodb.png";
import aws from "../../assets/techstack/aws.png";
import express from "../../assets/techstack/express.png";
import mySql from "../../assets/techstack/mySql.png";
import next from "../../assets/techstack/next.png";
import node from "../../assets/techstack/node-js.png";
import react from "../../assets/techstack/react.png";

const AboutMe = () => {
  return (
    <>
      <section className="aboutMeSection">
        <div className="aboutMeHeader">
          <h1 className="backDrop">About Me</h1>
          <h1 className="fair">About Me</h1>
        </div>
        <div className="descriptionAndImageContainer">
          <div className="aboutMeImageContainer">
            <img src={aboutmeImg} alt="work icon" />
          </div>
          <div className="descriptionContainer">
            <p>
              I am a <span>passionate full-stack developer</span> with over 3
              years of experience crafting web applications that deliver
              seamless and engaging digital experiences. With a focus on both
              front-end and back-end development, I specialize in creating
              user-friendly interfaces and robust, salable systems.
            </p>
            <br />
            <p>
              Driven by a commitment to innovation and problem-solving, I enjoy
              transforming complex requirements into intuitive solutions.
              Whether working independently or as part of a team, my goal is to
              develop applications that enhance productivity, accessibility, and
              user satisfaction.
            </p>
          </div>
        </div>
        <div className="techStack">
          <div className="topStack">
            <img className="techStackImage" src={mongo} alt="" />
            <img className="techStackImage" src={react} alt="" />
            <img className="techStackImage" src={express} alt="" />
            <img className="techStackImage" src={node} alt="" />
          </div>
          <div className="bottomStack">
            <img className="techStackImage" src={next} alt="" />
            <img className="techStackImage" src={mySql} alt="" />
            <img className="techStackImage" src={aws} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
