import "./App.css";
import "./Who.css";
import { Link } from "react-router-dom";

function Who() {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <h1 id="title-who" class="fade-in">
            Who is Matt?
          </h1>
        </Link>
      </div>
      <div id="page">
        <div id="content-who" class="fade-in">
          <h1 id="hi">Hi, I'm Matthew Li.</h1>
          <h1 id="most">Most people call me Matt.</h1>
          <h1 id="info" class="fade-in">
            I’m a computer science student at Georgia Tech, currently learning
            how to use code to change the world.
          </h1>
          <h1 id="info" class="fade-in">
            I'm pretty much always working on or learning something new, so feel
            free to click the arrow if you want to find out what I'm up to at
            the moment.
          </h1>
        </div>
        <div id="img-div" class="fade-in">
          <img
            id="profile"
            src="https://i.imgur.com/QQqYLhA.jpg?1"
            alt="roof-pic"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Who;
