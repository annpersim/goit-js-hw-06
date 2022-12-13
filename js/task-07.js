const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.value = 16;

fontSize.addEventListener("input", (event) => {
  text.style.fontSize = +fontSize.value + "px";
});
