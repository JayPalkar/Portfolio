import "./app.css";
import { useEffect } from "react";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import TopNavbar from "./components/navbar/topNavbar";
import Projects from "./components/projects/page";

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
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const backdropSize = 300;

      const cursorX = Math.max(
        Math.min(e.pageX, scrollX + viewportWidth - backdropSize / 2),
        scrollX + backdropSize / 2
      );
      const cursorY = Math.max(
        Math.min(e.pageY, scrollY + viewportHeight - backdropSize / 2),
        scrollY + backdropSize / 2
      );

      if (cursorBackdrop) {
        cursorBackdrop.style.left = `${cursorX}px`;
        cursorBackdrop.style.top = `${cursorY}px`;
      }
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
        {/* <Testimonial /> */}
        <ContactMe />
      </div>
    </>
  );
};

export default App;
