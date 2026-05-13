let currentArray = []; //Array for getting value
let secondArray = []; //Array for getting second value
let currentNumber = " "; //First number for operation
let operator = " "; //Operator Input
let secondNumber = " "; //Second number for operation
let operatorSelected = false; // For tracking wether operator is selected

//1. Make selection
//We get a nodeList of our buttons that have class = ".btn"
// and then we work with it
const allButtons = document.querySelectorAll(".btn"); //nodeList

const operatorButtons = document.querySelectorAll(".btnOperator"); //nodeList

const resultOutput = document.querySelector("#output");

const resultButton = document.querySelector("#btnEqual");

//2. Register a click event to all of the number buttons and get value

function getInputValue() {
  allButtons.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      let value = e.target.innerHTML;
      resultOutput.value += value;

      if (operatorSelected === false) {
        currentArray.push(value);

        // Convert array -> string -> number
        currentNumber = Number(currentArray.join("")); //Turn this into an int and updates global value

        console.log(currentNumber);
      } else {
        secondArray.push(value);

        // Convert array -> string -> number
        secondNumber = Number(secondArray.join("")); //Turn this into an int and updates global value

        console.log(secondNumber);
      }
      //Need to clear number after selecting an operator for getting second value

      //3. Get second number using the second array after operator is selected
    });
  });
}

//2. Get operator
function getOperator() {
  operatorButtons.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      operator = e.target.innerHTML;
      operatorSelected = true;
      resultOutput.value += operator;
      console.log("Operator:", operator);
    });
  });
}

/*
This is called asynchronous behavior:

Your main script runs top → bottom
Event listeners run later, when triggered
*/

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
    case "x":
      console.log(x * y);
      break;
  }
}

getInputValue();
getOperator();

//This function call must pop when = is selected
resultButton.addEventListener("click", () => {
  operate(currentNumber, secondNumber, operator);
});

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
