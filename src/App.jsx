import "./app.css";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import TopNavbar from "./components/navbar/topNavbar";
import Projects from "./components/projects/page";
import Testimonial from "./components/Testimonial/page";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Testimonial />
      <ContactMe />
    </div>
  );
};

export default App;
