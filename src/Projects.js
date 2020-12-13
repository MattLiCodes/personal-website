import "./App.css";
import "./Projects.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Projects() {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <h1 id="title-projects" class="fade-in">
            Selected Projects
          </h1>
        </Link>
      </div>
      <div class="main-container">
        <nav class="main-nav">
          <HashLink to="/projects#mental-health">
            <div class="square" id="mental-health-label"></div>
          </HashLink>
          <HashLink to="/projects#scrubs">
            <div class="square" id="scrubs-label"></div>
          </HashLink>
          <HashLink to="/projects#mnist">
            <div class="square" id="mnist-label"></div>
          </HashLink>
        </nav>
      </div>
      <div class="container">
        <section id="mental-health" class="mental-health">
          <div id="content-mental">
            <h1>mental health redistribution</h1>
          </div>
        </section>
        <section id="scrubs" class="scrubs">
          <div id="content-scrubs">
            <h1>scrubs</h1>
          </div>
        </section>
        <section id="mnist" class="mnist">
          <div id="content-mnist">
            <h1>mnist</h1>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
