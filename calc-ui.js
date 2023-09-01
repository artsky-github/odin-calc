/*import {
  firstNumb,
  secondNumb,
  currentOperator,
  operate,
} from "./calculate.js";*/

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

function createButton(container, buttonValue) {
  const calcButton = document.createElement("button");
  calcButton.innerHTML = `${buttonValue}`;
  setButtonColor(calcButton, buttonValue);
  calcButton.setAttribute("class", "calc-button");
  calcButton.style.width = `${setButtonSize(container, buttonValue)}px`;
  calcButton.style.height = `${setButtonSize(container) - 10}px`;
  calcButton.onclick = () => {
    const collection = container.children;
    switch (buttonValue) {
      case "CE":
        inputText.innerHTML = inputText.innerHTML.slice(0, -1);
        if (inputText.innerHTML.includes(".") === false) {
          collection[17].style.filter = "brightness(1)";
        }
        break;
      case "C":
        inputText.innerHTML = "";
        collection[17].style.filter = "brightness(1)";
        break;
      case ".":
        if (inputText.innerHTML.includes(".") === true) {
          break;
        }
        inputText.innerHTML += `${buttonValue}`;
        calcButton.style.filter = "brightness(0.9)";
        break;
      default:
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
