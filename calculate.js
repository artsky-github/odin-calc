export let firstNumb;
export let currentOperator;
export let secondNumb;

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

export function operate(a, b, operator) {
  switch (operator) {
    case "&plus;":
      addTwoNumbs(a, b);
      break;
    case "&minus;":
      subtractTwoNumbs(a, b);
      break;
    case "&times;":
      multiplyTwoNumbs(a, b);
      break;
    case "&divide;":
      divideTwoNumbs(a, b);
      break;
  }
}
