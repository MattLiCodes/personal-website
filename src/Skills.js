import "./App.css";
import "./Skills.css";
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div>
      <Link to={"/"}>
        <h1 id="title-skills" class="fade-in">
          Skills & Interests
        </h1>
      </Link>
    </div>
  );
}

export default Skills;
