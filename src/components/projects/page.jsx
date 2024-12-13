import "./project.css";
import project1 from "../../assets/projects/AstroidHunter.png";
import project2 from "../../assets/projects/frontpage.png";

const Projects = () => {
  return (
    <section id="projects" className="projectSection">
      <div className="projectHeader">
        <h1 className="backDrop">Projects.</h1>
        <h1 className="fair">Projects</h1>
      </div>
      <div className="projectsContainer">
        <div className="projectImageContainer">
          <div className="projectImage1">
            <img src={project1} alt="project1" />
          </div>
          <div className="projectImage2">
            <img src={project2} alt="project2" />
          </div>
          <div className="projectImage3">
            <img src={project1} alt="project3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
