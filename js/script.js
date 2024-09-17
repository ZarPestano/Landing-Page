const slider = document.querySelector(".slider");
const output = document.querySelector(".slider-output");

slider.oninput = function () {
  output.innerText = this.value;
};
