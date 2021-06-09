const numberLeft = document.querySelector(".number");
// const numberUsed = document.querySelector(".numberUsed");

const range = document.querySelector(".range");
const numberUsed = document.querySelector(".numberUsed");

range.addEventListener("input", () => {
  setBubble(range, numberUsed);
});
setBubble(range, numberUsed);
function setBubble(range, numberUsed) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  numberUsed.innerHTML = val;

  const calcLeft = Number(range.max - range.value);
  numberLeft.innerHTML = calcLeft;
}

// color range
document.querySelector(".range").oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) " +
    value +
    "%, hsl(229, 57%, 11%) " +
    value +
    "%, hsl(229, 57%, 11%) 100%)";
};
