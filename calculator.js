let x = []; //Array for getting value
let currentNumber = 0; //First number for operation
let operator = "-"; //Operator Input
let y = 0; //Second number for operation

//1. Make selection
//We get a nodeList of our buttons that have class = ".btn"
// and then we work with it
const allButtons = document.querySelectorAll(".btn");

const resultOutput = document.querySelector("#output");

//2. Register a click event to all of the buttons and get value

function getInputValue(element, array) {
  element.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let value = e.target.innerHTML;
      resultOutput.value += value;
      array.push(value);

      // Convert array -> string -> number
      currentNumber = Number(array.join("")); //Turn this into an int and updates global value

      console.log(currentNumber); // This is now a single number
    });
  });
}

getInputValue(allButtons, x);

/*
function operate(x, y, operator) {
  switch (operator) {
    case "+":
      console.log(x + y);
      break;
    case "-":
      console.log(x - y);
      break;
    case "/":
      console.log(x / y);
      break;
  }
}

operate(x, y, operator);

*/

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
