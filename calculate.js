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
  console.log(a / b);
  return a / b;
}

export function operate(a, b, operator) {
  switch (operator) {
    case "&plus;":
      return addTwoNumbs(a, b);
    case "&minus;":
      return subtractTwoNumbs(a, b);
    case "&times;":
      return multiplyTwoNumbs(a, b);
    case "&divide;":
      return divideTwoNumbs(a, b);
  }
}
