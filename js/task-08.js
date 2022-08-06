const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const newObject = {};
  event.preventDefault();
  console.log(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;
  console.log(email.value);
  console.log(password.value);
  if (email.value === "" || password.value === "") {
    return alert(`Все поля должны быть заполнены`);
  }
  if (email.value !== "" || password.value !== "") {
    newObject.email = email.value;
    newObject.password = password.value;
  }
  console.log(newObject);
  event.currentTarget.reset();
}
