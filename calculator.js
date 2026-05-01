let x = 0;
let y = 0;
let operator = "-";

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

//1. Make selection
//We get a nodeList of our buttons that have class = ".btn"
// and then we work with it
const allButtons = document.querySelectorAll(".btn");

const resultOutput = document.querySelector("#output");

console.log(allButtons);
console.log(allButtons[3]);

//2. Register a click event to all of the buttons

allButtons.forEach((bt) => {
  bt.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    resultOutput.value += value;
  });
});

// Make the calculator work! You’ll need to store the
// first and second numbers input by the user and then operate() on them
// when the user presses the = button,
// according to the operator that was selected between the numbers.
