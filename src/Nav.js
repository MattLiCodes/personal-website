import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {/* <svg
        id="logo"
        width="807"
        height="104"
        viewBox="0 0 807 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.396 2.35201V1.85201H102.896H88.928H88.604L88.4716 2.14775L52.064 83.496L15.6564 2.14775L15.524 1.85201H15.2H1.08801H0.588013V2.35201V102V102.5H1.08801H14.192H14.692V102V29.8967L46.9995 102.204L47.1318 102.5H47.456H56.672H56.9966L57.1287 102.204L89.292 30.0459V102V102.5H89.792H102.896H103.396V102V2.35201ZM132.607 102.5H132.958L133.078 102.17L141.022 80.18H184.096L192.041 102.17L192.16 102.5H192.511H206.335H207.048L206.805 101.83L170.661 2.03773L170.542 1.708H170.191H155.071H154.721L154.601 2.03713L118.313 101.829L118.069 102.5H118.783H132.607ZM284.427 1.632V1.132H283.927H215.959H215.459V1.632V12.288V12.788H215.959H242.963V102V102.5H243.463H256.567H257.067V102V12.788H283.927H284.427V12.288V1.632ZM362.333 1.632V1.132H361.833H293.865H293.365V1.632V12.288V12.788H293.865H320.869V102V102.5H321.369H334.473H334.973V102V12.788H361.833H362.333V12.288V1.632ZM455.791 1.632V1.132H455.291H442.187H441.687V1.632V45.196H391.567V1.632V1.132H391.067H377.963H377.463V1.632V102V102.5H377.963H391.067H391.567V102V56.996H441.687V102V102.5H442.187H455.291H455.791V102V1.632ZM527.846 45.84V45.34H527.346H491.27V12.788H531.666H532.166V12.288V1.48801V0.988007H531.666H477.666H477.166V1.48801V102V102.5H477.666H531.666H532.166V102V91.2V90.7H531.666H491.27V57.14H527.346H527.846V56.64V45.84ZM678.118 1.77118L678.304 1.132H677.638H663.526H663.14L663.042 1.50629L641.483 84.5008L618.937 1.50093L618.837 1.132H618.454H603.766H603.389L603.285 1.49529L579.598 84.8224L558.171 1.50746L558.074 1.132H557.686H543.718H543.059L543.237 1.76654L571.317 102.279L571.42 102.648L571.803 102.644L586.347 102.5L586.716 102.496L586.821 102.143L610.526 22.988L633.382 102.139L633.486 102.5H633.862H648.55H648.926L649.03 102.139L678.118 1.77118ZM779.109 91.344V90.844H778.609H743.973V1.632V1.132H743.473H730.369H729.869V1.632V102V102.5H730.369H778.609H779.109V102V91.344ZM806.13 1.632V1.132H805.63H792.526H792.026V1.632V102V102.5H792.526H805.63H806.13V102V1.632ZM162.559 19.8196L179.993 68.524H145.125L162.559 19.8196Z"
          stroke="white"
        />
      </svg> */}

      <div id="content">
        <ul>
          <Link to="/who">
            <li data-text="Who's Matt?">
              <a href="#">Who's Matt?</a>
            </li>
          </Link>
          <Link to="/skills">
            <li data-text="Skills & Interests">
              <a href="#">Skills & Interests</a>
            </li>
          </Link>
          <Link to="/projects">
            <li data-text="Selected Projects">
              <a href="#">Selected Projects</a>
            </li>
          </Link>
          <Link to="/brain">
            <li data-text="Brain">
              <a href="#">Brain</a>
            </li>
          </Link>
          <li data-text="Resume">
            <a
              href="https://drive.google.com/file/d/1n2-eTOhZwc93DfUL3Zf9g7d6o-Qm7KYS/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

// const logo = document.querySelectorAll("#logo path");

// for (let i = 0; i < logo.length; i++) {
//   console.log(logo[i].getTotalLength());
// }

// var myVar;
// function myFunction() {
//   //   document.getElementById("ul").style.display = "none";
//   myVar = setTimeout(showPage, 4500);
// }

// function showPage() {
//   document.getElementById("logo").style.display = "none";
//   document.getElementById("content").style.display = "flex";
//   document.getElementById("content").style.animation = "fadein 2s";
// }

export default Nav;
