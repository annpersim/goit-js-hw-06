const value = document.querySelector("#value");

let counterValue = 0;

const btns = document.querySelectorAll("button");
btns.forEach((btn) =>
  btn.addEventListener("click", function onBtnClick(event) {
    const actions = this.dataset.action;
    if (actions === "decrement") {
      counterValue--;
    } else {
      counterValue++;
    }
    value.textContent = counterValue;
  })
);
