const keyboardContainer = document.querySelector(".keyboard-container");
const displayContainer = document.querySelector(".display-container");
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
  const numberButton = document.createElement("button");
  numberButton.innerHTML = `${buttonValue}`;
  setButtonColor(numberButton, buttonValue);
  numberButton.setAttribute("class", "calc-button");
  numberButton.style.fontSize = `20pt`;
  numberButton.style.width = `${setButtonSize(container, buttonValue)}px`;
  numberButton.style.height = `${setButtonSize(container)}px`;
  numberButton.onclick = () => {
    console.log(buttonValue);
  };
  return numberButton;
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
