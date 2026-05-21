let currentArray = []; //Array for getting value
let secondArray = []; //Array for getting second value
let currentNumber = 0; //First number for operation
let operator = " "; //Operator Input
let secondNumber = 0; //Second number for operation
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

//4. Get operator
function getOperator() {
  operatorButtons.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      // Prevent operator being inputted before number
      if (currentArray.length === 0 && currentNumber === 0) {
        return;
      }

      if (secondArray.length > 0) {
        operate();
      }

      operator = e.target.innerHTML;
      operatorSelected = true;

      resultOutput.value += operator;
      console.log("Operator:", operator);
    });
  });
}

//5. Need the calculator to accept initial negative values -- Pending

//Make sure that your calculator only runs an operation when
// supplied with two numbers and an operator by the user. -- Done

//Issues to fix:
//When trying to operate a result with an operator and empty second value
// returns an error -- Fixed

//When dividing by zero the error does not pop -- Fixed

//If an operator is input initially with no current number
//calculator breaks -- Fixed on line 55

function operate() {
  if (secondArray.length === 0) {
    return;
  }
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
      if (secondNumber === 0) {
        alert("Can't divide by zero!");
        clearInput();
        return;
      }
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
  secondNumber = 0;
  secondArray = [];

  // Show result
  resultOutput.value = result.toFixed(3);
}

getInputValue();
getOperator();

resultButton.addEventListener("click", () => {
  operate();
});

clearButton.addEventListener("click", () => {
  clearInput();
});

function clearInput() {
  currentArray = []; //Array for getting value
  secondArray = []; //Array for getting second value
  currentNumber = 0; //First number for operation
  operator = " "; //Operator Input
  secondNumber = 0; //Second number for operation
  operatorSelected = false; // For tracking wether operator is selected
  document.getElementById("output").value = "";
}
