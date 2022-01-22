"use strict";

let imposterDiv = [];
let imposterXPosition = [];
let colors = [
  "black",
  "green",
  "purple",
  "blue",
  "pink",
  "orange",
  "brown",
  "grey",
  "yellow",
  "white",
];

const numberOfImposters = 7;

document.getElementById("btn")
for (let i = 0; i < numberOfImposters; i++) {
  imposterDiv[i] = document.createElement("div");
  document.body.appendChild(imposterDiv[i]);
  imposterDiv[i].classList.add("imposter");
  imposterDiv[i].style.top = i * 15 + "%";
  // imposterDiv[i].style.bottom = i * 4 + "%";
  imposterDiv[i].style.backgroundColor = colors[i];
  imposterXPosition[i] = 0;
}

requestAnimationFrame(imposterTravel);

let restartBtn = function () {
  for (let i = 0; i < numberOfImposters; i++) {
    imposterXPosition[i] = 0;
  }
};


function imposterTravel() {
  for (let i = 0; i < numberOfImposters; i++) {
    imposterDiv[i].style.left = imposterXPosition[i] + "%";
    imposterXPosition[i] += Math.random();

    if (imposterXPosition[i] > 96) {
      alert(`The ${colors[i]} imposter won`);
      restartBtn();
    }
  }
  requestAnimationFrame(imposterTravel);
}


