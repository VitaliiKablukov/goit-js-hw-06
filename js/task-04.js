const minusBtn = document.querySelector(`button[data-action="decrement"]`);
const plusBtn = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});
