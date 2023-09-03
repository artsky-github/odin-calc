import { operate } from "./calculate.js";

const keyboardContainer = document.querySelector(".keyboard-container");
const inputText = document.querySelector(".input-text");
const calcOperators = [
  `&divide;`,
  `&plusmn;`,
  `CE`,
  `C`,
  `&times;`,
  `&minus;`,
  `&plus;`,
  `&equals;`,
  `.`,
];
let firstNumb;
let secondNumb;
let currentOperator;
let isOperatorActive;
let isCalculated;
let saveNumber;

function createButton(container, buttonValue) {
  const calcButton = document.createElement("button");
  calcButton.innerHTML = `${buttonValue}`;
  setButtonColor(calcButton, buttonValue);
  calcButton.setAttribute("class", "calc-button");
  calcButton.style.width = `${setButtonSize(container, buttonValue)}px`;
  calcButton.style.height = `${setButtonSize(container) - 10}px`;
  calcButton.onclick = () => {
    switch (buttonValue) {
      case "CE":
        if (inputText.innerHTML.slice(0, 1) === "-") {
          inputText.innerHTML = inputText.innerHTML.slice(1);
        } else {
          if (inputText.innerHTML.slice(-1) === ".") {
            inputText.innerHTML = inputText.innerHTML.slice(0, -1);
          } else {
            inputText.innerHTML = inputText.innerHTML.slice(0, -1);
          }
        }
        break;
      case "C":
        inputText.innerHTML = "";
        firstNumb = undefined;
        secondNumb = undefined;
        currentOperator = undefined;
        break;
      case ".":
        if (inputText.innerHTML.includes(".") === true) {
          break;
        }
        if (inputText.innerHTML === "") {
          inputText.innerHTML = "0.";
          break;
        }
        inputText.innerHTML += `${buttonValue}`;
        break;
      case "&plusmn;":
        if (inputText.innerHTML.includes("-") === true) {
          break;
        }
        if (inputText.innerHTML === "") {
          inputText.innerHTML = `-0`;
          break;
        }
        inputText.innerHTML = `-` + inputText.innerHTML;
        break;
      case "&divide;":
      case "&times;":
      case "&plus;":
      case "&minus;":
        if (inputText.innerHTML === "") {
          firstNumb = 0;
        } else {
          firstNumb = parseFloat(inputText.innerHTML);
        }
        currentOperator = buttonValue;
        console.log(firstNumb, currentOperator);
        isOperatorActive = true;
        saveNumber = false;
        break;
      case "&equals;":
        if (saveNumber === false) {
          secondNumb = parseFloat(inputText.innerHTML);
        }
        if (firstNumb === undefined) {
          break;
        }
        console.log(firstNumb, secondNumb, currentOperator);
        inputText.innerHTML =
          `${operate(firstNumb, secondNumb, currentOperator)}`.length > 13
            ? parseFloat(
                `${operate(firstNumb, secondNumb, currentOperator)}`
              ).toExponential(5)
            : parseFloat(`${operate(firstNumb, secondNumb, currentOperator)}`);
        firstNumb = parseFloat(inputText.innerHTML);
        saveNumber = true;
        isCalculated = true;
        break;
      default:
        if (inputText.innerHTML.length === 13) {
          break;
        }
        if (inputText.innerHTML.includes("-0") === true) {
          inputText.innerHTML = inputText.innerHTML.slice(0, -1);
        }
        if (isOperatorActive === true) {
          inputText.innerHTML = "";
          isOperatorActive = false;
        }
        console.log(isCalculated);
        if (isCalculated === true) {
          inputText.innerHTML = "";
          firstNumb = buttonValue;
          isCalculated = false;
        }
        inputText.innerHTML += `${buttonValue}`;
        break;
    }
  };
  return calcButton;
}

function setButtonSize(container, buttonValue) {
  if (buttonValue === "&equals;") {
    return container.clientWidth / 2;
  }
  return container.clientWidth / 4;
}

function setButtonColor(button, buttonValue) {
  if (
    buttonValue === "&equals;" ||
    buttonValue === "CE" ||
    buttonValue === "C"
  ) {
    return (
      (button.style.backgroundColor = "darkorange"),
      (button.style.color = "white")
    );
  }
  return (button.style.backgroundColor = "lightgray");
}

function createKeyboard(container) {
  let loopCounter = 0;
  let arrayCounter = 0;
  for (let i = 0; i < 5; i++) {
    container.appendChild(createButton(container, calcOperators[arrayCounter]));
    arrayCounter++;
  }
  for (let i = 9; i >= 0; i--) {
    if (loopCounter === 3) {
      container.appendChild(
        createButton(container, calcOperators[arrayCounter])
      );
      arrayCounter++;
      if (i === 0) {
        container.appendChild(
          createButton(container, calcOperators[arrayCounter])
        );
      }
      loopCounter = 0;
    }
    container.appendChild(createButton(container, i));
    loopCounter++;
  }
}

createKeyboard(keyboardContainer);
