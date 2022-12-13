const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const list = document.querySelector(".item");
const category = list.querySelector("h2");
console.log(`Category: ${category.textContent}`);
const elements = list.querySelectorAll("li");
console.log(`Elements: ${elements.length}`);

const listFirstSibling = list.nextElementSibling;
const categoryFirstSibling = listFirstSibling.querySelector("h2");
console.log(`Category: ${categoryFirstSibling.textContent}`);
const elementsFirstSibling = listFirstSibling.querySelectorAll("li");
console.log(`Elements: ${elementsFirstSibling.length}`);

const listSecondSibling = listFirstSibling.nextElementSibling;
const categorySecondSibling = listSecondSibling.querySelector("h2");
console.log(`Category: ${categorySecondSibling.textContent}`);
const elementsSecondSibling = listSecondSibling.querySelectorAll("li");
console.log(`Elements: ${elementsSecondSibling.length}`);
