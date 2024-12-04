import "./project.css";
import project1 from "../../assets/projects/AstroidHunter.png";
import project2 from "../../assets/projects/frontpage.png";

const Projects = () => {
  return (
    <section id="projects" className="projectSection">
      <div className="projectHeader">
        <h1 className="backDrop">Projects</h1>
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
      <div className="projectButton">
        <button>
          Explore All
          <svg
            width="42"
            height="44"
            viewBox="0 0 42 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.125 9.16675H19.25L28 22.0001L19.25 34.8334H27.125L35.875 22.0001L27.125 9.16675Z"
              fill="#0B0B0B"
            />
            <path
              d="M14.875 9.16675H7L15.75 22.0001L7 34.8334H14.875L23.625 22.0001L14.875 9.16675Z"
              fill="#0B0B0B"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
