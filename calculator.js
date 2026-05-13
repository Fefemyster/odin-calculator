let x = []; //Array for getting value
let currentNumber = " "; //First number for operation
let operator = " "; //Operator Input
let secondNumber = " "; //Second number for operation

//1. Make selection
//We get a nodeList of our buttons that have class = ".btn"
// and then we work with it
const allButtons = document.querySelectorAll(".btn");

const resultOutput = document.querySelector("#output");

const operatorButtons = document.querySelectorAll(".btnOperator");

//2. Register a click event to all of the buttons and get value

function getInputValue(element, array) {
  element.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      console.log(bt);
      let value = e.target.innerHTML;
      resultOutput.value += value;
      array.push(value);

      // Convert array -> string -> number
      currentNumber = Number(array.join("")); //Turn this into an int and updates global value

      console.log(currentNumber);

      //Need to clear number after selecting an operator for getting second value

      // This is now a single number
    });
  });
}

//2. Get operator and reset currentNumber
function getOperator() {
  operatorButtons.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let value = e.target.innerHTML;
      let operator = e.target.innerHTML;
      console.log(operator);
      resultOutput.value += operator;
    });
  });
}

/*
This is called asynchronous behavior:

Your main script runs top → bottom
Event listeners run later, when triggered
*/

//This function must pop when = is selected
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

let firsInputValue = getInputValue(allButtons, x);
let operatorInputValue = getOperator();

operate(firsInputValue, secondNumber, operatorInputValue);

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
