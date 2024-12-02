import "./app.css";
import { useEffect } from "react";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import TopNavbar from "./components/navbar/topNavbar";
import Projects from "./components/projects/page";
import Testimonial from "./components/Testimonial/page";

const App = () => {
  useEffect(() => {
    const cursorBackdrop = document.querySelector(".cursorBackdrop");

    if (!cursorBackdrop) return;

    document.addEventListener("mouseenter", () => {
      cursorBackdrop.style.display = "block";
    });

    document.addEventListener("mouseleave", () => {
      cursorBackdrop.style.display = "none";
    });

    const moveCursor = (e) => {
      cursorBackdrop.style.left = `${e.pageX}px`;
      cursorBackdrop.style.top = `${e.pageY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursorBackdrop"></div>
      <div className="mainAppContent">
        <TopNavbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Testimonial />
        <ContactMe />
      </div>
    </>
  );
};

export default App;
