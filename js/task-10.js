function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector(`button[data-create]`);
const destroyBtn = controls.querySelector(`button[data-destroy]`);
const box = document.querySelector("#boxes");

input.addEventListener("input", createBoxes);
createBtn.addEventListener("click", () => {});
destroyBtn.addEventListener("click", () => {
  box.innerHTML = "";
});
function createBoxes(amount) {
  const number = amount.currentTarget.value;
  console.log(number);
  for (let i = 0; i < number; i += 1) {
    const createDiv = document.createElement("div");
    box.append(createDiv);
  }
}
