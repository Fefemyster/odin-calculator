let currentArray = []; //Array for getting value
let secondArray = []; //Array for getting second value
let currentNumber = " "; //First number for operation
let operator = " "; //Operator Input
let secondNumber = " "; //Second number for operation
let operatorSelected = false; // For tracking wether operator is selected
let result;

//1. Make selection
//We get a nodeList of our buttons that have class = ".btn"
// and then we work with it
const allButtons = document.querySelectorAll(".btn"); //nodeList

const operatorButtons = document.querySelectorAll(".btnOperator"); //nodeList

const resultOutput = document.querySelector("#output");

const resultButton = document.querySelector("#btnEqual");

const clearButton = document.querySelector("#btnClear");

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
        //3. Get second number using the second array after operator is selected
        secondArray.push(value);

        // Convert array -> string -> number
        secondNumber = Number(secondArray.join("")); //Turn this into an int and updates global value

        console.log(secondNumber);
      }
    });
  });
}

//4. Get operator
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

//5. Need the calculator to accept initial negative values
//6. The calculator should be able to record the result and use it for another operation
// Example = 3+2+3 make it 5+3 and so on

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

//Clear button that will reset values for all variables and input
clearButton.addEventListener("click", () => {
  currentArray = []; //Array for getting value
  secondArray = []; //Array for getting second value
  currentNumber = " "; //First number for operation
  operator = " "; //Operator Input
  secondNumber = " "; //Second number for operation
  operatorSelected = false; // For tracking wether operator is selected
});

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
