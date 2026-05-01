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

//Create the functions that update one of your
// number variables when the calculator’s
// digit buttons are clicked.
// Your calculator’s display
// should also update to reflect the value
// of that number variable.

//1. Get the value on the button and update the display
const buttonNumbers = document.querySelector(".buttons");

buttonNumbers.addEventListener("click", (e) => {
  let target = e.target;
  if (target.matches("button")) {
    let value = target.innerHTML;

    document.querySelector("#output").value += value;
  }
});

operate(x, y, operator);
