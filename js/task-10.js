function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controls = document.querySelector("#controls");
const createBtn = controls.querySelector(`button[data-create]`);
const destroyBtn = controls.querySelector(`button[data-destroy]`);
const box = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  if (amount > 100) {
    return alert("Please input number 1-100");
  } else {
    let widthHeight = 20;
    for (let i = 0; i < amount; i += 1) {
      const createDiv = document.createElement("div");
      createDiv.style.width = `${widthHeight}px`;
      createDiv.style.height = `${widthHeight}px`;
      createDiv.style.backgroundColor = getRandomHexColor();
      widthHeight += 10;
      box.append(createDiv);
    }
  }
}
function destroyBoxes() {
  box.innerHTML = "";
}
createBtn.addEventListener("click", () => {
  createBoxes(controls.firstElementChild.value);
});
destroyBtn.addEventListener("click", destroyBoxes);
