// const allItemLength = document.querySelectorAll(".item").length;
// console.log(`Number of categories: ${allItemLength}`);
const categoriesId = document.querySelector("#categories");
const allItemLength = categoriesId.querySelectorAll(".item").length;
console.log(`Number of categories: ${allItemLength}`);

const allItem = document.querySelectorAll(".item");
const valueCategories = allItem.forEach((element) => {
  const text = element.querySelector("h2");
  const categoriesElemennts = element.querySelectorAll("li").length;
  console.log(`Category: ${text.textContent} Elements: ${categoriesElemennts}`);
});
