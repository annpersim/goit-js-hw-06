const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const recipeContainer = document.querySelector("#ingredients");
const makeLiElem = (ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;

  return liEl;
};

const recipe = ingredients.map(makeLiElem);
recipeContainer.append(...recipe);
