let colors = [
  "#F7CAC9",
  "#F4CCCC",
  "#EAD1DC",
  "#D9EAD3",
  "#D0EAD2",
  "#FAD02E",
  "#FAE1DD",
  "#FFE4E1",
  "#F5B7B1",
  "#F2D7D5",
  "#E6E6FA",
  "#F5CBAA",
  "#FFEBCD",
  "#FFF0F5",
  "#FAFAD2",
  "#E0FFFF",
  "#98FB98",
  "#FFDAB9",
  "#FFDEAD",
  "#FFE4B5",
  "#FFD700",
  "#FFFAF0",
  "#F0FFF0",
  "#FFF5EE",
  "#FFF8DC",
  "#FFFAFA",
  "#FAEBD7",
  "#FFEFD5",
  "#FFE4C4",
  "#FFE4E1",
];

let colorButton = document.querySelector(".color");
let circle = document.querySelector(".circle");

let audio = new Audio("./mixkit-plastic-bubble-click-1124.wav");

colorButton.addEventListener("click", (event) => {
  audio.play();
  let color = Math.round(Math.random() * 30);
  circle.style.backgroundColor = colors[color];
});

let shapes = ["innerCircle", "square", "rectangle", "triangle", "heart", "star-five", "cross", "yin-yang", "burst-12", "pacman", "diamond", "cone"];
let inner = document.querySelector("#inner");

let shapeButton = document.querySelector(".shapeButton");

shapeButton.addEventListener("click", () => {
  audio.play();
  let innerShape = Math.floor(Math.random() * shapes.length);
  inner.id = shapes[innerShape];
});
