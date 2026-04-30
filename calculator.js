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
