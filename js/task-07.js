const input = document.querySelector("#font-size-control");
console.log(input);
input.addEventListener("input", (rangeInput) => {
  console.log(rangeInput.currentTarget.value);
  const text = document.querySelector("#text");
  const valueInput = rangeInput.currentTarget.value;
  console.log(valueInput);
  text.style.fontSize = `${valueInput}px`;
});
