import "./app.css";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import TopNavbar from "./components/navbar/topNavbar";
import Projects from "./components/projects/page";

const App = () => {
  return (
    <>
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
