let firstNumb;
let currentOperator;
let secondNumb;

function addTwoNumbs(a, b) {
  return a + b;
}

function subtractTwoNumbs(a, b) {
  return a - b;
}

function multiplyTwoNumbs(a, b) {
  return a * b;
}

function divideTwoNumbs(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      addTwoNumbs(a, b);
      break;
    case "-":
      subtractTwoNumbs(a, b);
      break;
    case "*":
      multiplyTwoNumbs(a, b);
      break;
    case "/":
      divideTwoNumbs(a, b);
      break;
  }
}
