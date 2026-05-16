let currentArray = []; //Array for getting value
let secondArray = []; //Array for getting second value
let currentNumber = " "; //First number for operation
let operator = " "; //Operator Input
let secondNumber = " "; //Second number for operation
let operatorSelected = false; // For tracking wether operator is selected
let result = 0;

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

//operate the first set of numbers and save that result
// currentNumber should be replace as the result
// this result should be add to the second number but this second number
// need to be reset when inputting the second operator

//4. Get operator
function getOperator() {
  operatorButtons.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      if (secondNumber !== " ") {
        operate();
      }

      operator = e.target.innerHTML;
      operatorSelected = true;

      resultOutput.value += operator;
      console.log("Operator:", operator);
    });
  });
}

//5. Need the calculator to accept initial negative values

/*
This is called asynchronous behavior:

Your main script runs top → bottom
Event listeners run later, when triggered
*/

// 6. The calculator should be able to record the result and use it for another operation
// The result should be save when inputting a second operator - operator
// selected equal true could call operate and store initial result

// Example = 3+2+3 make it 5+3 and so on
//Your calculator should not evaluate more than a single pair of numbers at a time.
// operate can be call when pressing the next operator key and store
// the result of the initial operation to then operate it with the second value

function operate() {
  switch (operator) {
    case "+":
      result = currentNumber + secondNumber;
      console.log(`Result: ${result}`);
      break;
    case "-":
      result = currentNumber - secondNumber;
      console.log(`Result: ${result}`);
      break;
    case "/":
      result = currentNumber / secondNumber;
      console.log(`Result: ${result}`);
      break;
    case "x":
      result = currentNumber * secondNumber;
      console.log(`Result: ${result}`);
      break;
  }

  // Save result as first number
  currentNumber = result;

  // Reset second number for next operation
  secondNumber = "";
  secondArray = [];

  // Show result
  resultOutput.value = result;
}

getInputValue();
getOperator();

//This function call must pop when = is selected
// Need to fix it since secondNumber is not updating
resultButton.addEventListener("click", () => {
  operate();
});

//Clear button that will reset values for all variables and input
clearButton.addEventListener("click", () => {
  currentArray = []; //Array for getting value
  secondArray = []; //Array for getting second value
  currentNumber = " "; //First number for operation
  operator = " "; //Operator Input
  secondNumber = " "; //Second number for operation
  operatorSelected = false; // For tracking wether operator is selected
  document.getElementById("output").value = "";
});

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
