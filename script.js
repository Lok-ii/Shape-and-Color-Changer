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

colorButton.addEventListener("click", (event) => {
  let color = Math.round(Math.random() * 30);
  circle.style.backgroundColor = colors[color];
});

let shapes = [];

let innerCircle = document.querySelector(".innerCircle");
shapes.push(innerCircle);
let square = document.querySelector(".square");
shapes.push(square);
let rectangle = document.querySelector(".rectangle");
shapes.push(rectangle);
let triangle = document.querySelector(".triangle");
shapes.push(triangle);


let shapeButton = document.querySelector(".shapeButton");

shapeButton.addEventListener("click", ()=> {
    let innerShape = Math.round(Math.random() * 3);
    if(shapes[innerShape] == triangle){
        triangle.classList.remove("hidden");
        square.classList.add("hidden");
        rectangle.classList.add("hidden");
        innerCircle.classList.add("hidden");
    }else if(shapes[innerShape] == square){
        triangle.classList.add("hidden");
        rectangle.classList.add("hidden");
        innerCircle.classList.add("hidden");
        square.classList.remove("hidden");
    }else if(shapes[innerShape] == rectangle){
        triangle.classList.add("hidden");
        square.classList.add("hidden");
        innerCircle.classList.add("hidden");        
        rectangle.classList.remove("hidden");
    }else if(shapes[innerShape] == innerCircle){
        triangle.classList.add("hidden");
        square.classList.add("hidden");
        rectangle.classList.add("hidden");       
        innerCircle.classList.remove("hidden");
    }
});

