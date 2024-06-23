function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesDiv = document.querySelector("#boxes");
  boxesDiv.innerHTML = "";

  const fragment = document.createDocumentFragment();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += 10;
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  const boxesDiv = document.querySelector("#boxes");
  boxesDiv.innerHTML = "";
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
