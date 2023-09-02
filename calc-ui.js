import { operate } from "./calculate.js";

const keyboardContainer = document.querySelector(".keyboard-container");
const collection = keyboardContainer.children;
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
let saveNumber;

console.log(collection);

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
          collection[1].style.filter = null;
          inputText.innerHTML = inputText.innerHTML.slice(1);
        } else {
          if (inputText.innerHTML.slice(-1) === ".") {
            collection[17].style.filter = null;
            inputText.innerHTML = inputText.innerHTML.slice(0, -1);
          } else {
            inputText.innerHTML = inputText.innerHTML.slice(0, -1);
          }
        }
        break;
      case "C":
        inputText.innerHTML = "";
        collection[17].style.filter = null;
        collection[1].style.filter = null;
        break;
      case ".":
        if (inputText.innerHTML.includes(".") === true) {
          break;
        }
        inputText.innerHTML += `${buttonValue}`;
        collection[17].style.filter = "brightness(0.9)";
        break;
      case "&plusmn;":
        if (inputText.innerHTML.includes("-") === true) {
          break;
        }
        inputText.innerHTML = `-` + inputText.innerHTML;
        collection[1].style.filter = "brightness(0.9)";
        break;
      case "&divide;":
        if (inputText.innerHTML === "") {
          firstNumb = 0;
        } else {
          firstNumb = parseFloat(inputText.innerHTML);
        }
        currentOperator = buttonValue;
        isOperatorActive = true;
        saveNumber = false;
        console.log(firstNumb, currentOperator);
        collection[0].style.filter = "brightness(0.9)";
        break;
      case "&times;":
        break;
      case "&equals;":
        if (saveNumber === false) {
          secondNumb = parseFloat(inputText.innerHTML);
        }
        console.log(firstNumb, secondNumb, currentOperator);
        inputText.innerHTML = `${operate(
          firstNumb,
          secondNumb,
          currentOperator
        )}`;
        firstNumb = Math.round(parseFloat(inputText.innerHTML) * 10000) / 10000;
        saveNumber = true;
        break;
      default:
        if (inputText.innerHTML.length === 14) {
          break;
        }
        if (isOperatorActive === true) {
          inputText.innerHTML = "";
          isOperatorActive = false;
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
