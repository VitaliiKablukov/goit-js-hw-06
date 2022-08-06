const validationInput = document.querySelector("#validation-input");
console.log(validationInput);
validationInput.addEventListener("blur", (text) => {
  const textInputLength = text.currentTarget.value.length;
  const validationLength = validationInput.dataset.length;
  if (textInputLength === Number(validationLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
