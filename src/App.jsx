import "./app.css";
import AboutMe from "./components/aboutMe/page";
import ContactMe from "./components/contactme/page";
import Hero from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Projects from "./components/projects/page";
import Testimonial from "./components/Testimonial/page";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Testimonial />
      <ContactMe />
    </div>
  );
};

export default App;
