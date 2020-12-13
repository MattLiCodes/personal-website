import "./App.css";
import "./Brain.css";
import React from "react";
import { Link } from "react-router-dom";
import IsometricGrid, { Cell } from "react-isometric-grid";
import dynamics from "dynamics.js";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Brain() {
  const dict = {
    1: "#06d6a0",
    2: "#fdc90d",
    3: "#72195a",
    4: "#118ab2",
    5: "#ee4266",
  };
  return (
    <div class="fade-in">
      <Link to={"/"}>
        <h1 id="title-brain" class="fade-in">
          Brain
        </h1>
      </Link>
      <div id="brain-text">
        <h1 id="intro">
          This is my <span id="brain-word">brain.</span>
        </h1>
        <h1 id="desc">
          <p>
            I call this brain because it contains all the points of inspiration
            that I draw from on a daily basis. I try to update this as much as
            possible as I continue to grow and evolve as a person.{" "}
          </p>
          <br></br>
          <p>
            I love trying out new things, no matter how diverse they may be, and
            so seeing how all my experiences connect is always very interesting.
          </p>
        </h1>
      </div>
      <div id="grid">
        <IsometricGrid
          shadow
          transform="rotateX(45deg) rotateZ(45deg)"
          stackItemsAnimation={{
            properties: function (pos) {
              return {
                translateZ: (pos + 1) * 30,
                rotateZ: getRandomInt(-4, 4),
              };
            },
            options: function (pos, itemstotal) {
              return {
                type: dynamics.bezier,
                duration: 500,
                points: [
                  { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                  { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                ],
                delay: (itemstotal - pos - 1) * 40,
              };
            },
          }}
          style={{ height: "800px", width: "900px" }}
        >
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
          <Cell
            layers={[
              "",
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
              dict[getRandomInt(1, 5)],
            ]}
          />
        </IsometricGrid>
      </div>
    </div>
  );
}

export default Brain;
