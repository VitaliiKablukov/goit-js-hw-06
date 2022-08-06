function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector(".widget");
console.log(widget);
const buttonChangeColor = widget.querySelector(".change-color");
console.log(buttonChangeColor);
const outputColor = widget.querySelector(".color");
console.log(outputColor);
const bodyStyle = document.querySelector("body");
console.log(bodyStyle);
buttonChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  console.log(color);
  bodyStyle.style.backgroundColor = color;
  outputColor.textContent = color;
});
