const numpadContainer = document.querySelector(".numpad-container");
const calcOperators = [
  `&divide;`,
  `&times;`,
  `&minus;`,
  `&plus;`,
  `&equals;`,
  `.`,
];

function createNumButton(container, buttonVal) {
  const numberButton = document.createElement("button");
  numberButton.setAttribute("class", "calc-button");
  numberButton.innerHTML = `${buttonVal}`;
  numberButton.style.fontSize = `20pt`;
  numberButton.style.width = `${getNumButtonSize(container)}px`;
  numberButton.style.height = `${getNumButtonSize(container)}px`;
  numberButton.onclick = () => {
    console.log(buttonVal);
  };
  return numberButton;
}

function getNumButtonSize(container) {
  return container.clientWidth / 3;
}

function createNumpad(container) {
  for (let i = 9; i >= 0; i--) {
    container.appendChild(createNumButton(container, i));
  }
}

createNumpad(numpadContainer);
