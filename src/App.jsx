import "./App.css";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import SideNavbar from "./components/navbar/sideNavbar";
import Projects from "./components/projects/page";

const App = () => {
  return (
    <>
      <div className="mainAppContent">
        <div className="navContainer">
          <SideNavbar />
        </div>
        <div className="componentContainer">
          <Hero />
          <AboutMe />
          <Projects />
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default App;
