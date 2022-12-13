function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onColorBtnClick);
function onColorBtnClick(event) {
  const hexColor = getRandomHexColor();
  span.textContent = `${hexColor}`;
  body.style.backgroundColor = hexColor;
}
