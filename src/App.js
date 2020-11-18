import "./App.css";
import Nav from "./Nav.js";
import Who from "./Who.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Brain from "./Brain.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Nav} />
          <Route path="/who" component={Who} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/brain" component={Brain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
