const counterValue = {
  value: 0,
  buttonDecrement() {
    this.value -= 1;
  },
  buttonIncrement() {
    this.value += 1;
  },
};
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const valueEL = document.querySelector("#value");
buttonDecrement.addEventListener("click", function () {
  counterValue.buttonDecrement();
  valueEL.textContent = counterValue.value;
});
buttonIncrement.addEventListener("click", function () {
  counterValue.buttonIncrement();
  valueEL.textContent = counterValue.value;
});