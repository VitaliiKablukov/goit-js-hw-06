const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const categories = document.querySelector("#ingredients");
console.log(categories);

ingredients.forEach((element) => {
  const newLiElement = document.createElement("li");
  newLiElement.textContent = element;
  newLiElement.classList.add("item");
  categories.append(newLiElement);
});
// for (const element of ingredients) {
//   const newLiElement = document.createElement("li");
//   newLiElement.textContent = element;
//   newLiElement.classList.add("item");
//   categories.append(newLiElement);
// }
