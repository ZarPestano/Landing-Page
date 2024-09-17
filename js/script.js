const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// const slider = document.querySelector(".slider");
// const output = document.querySelector(".slider-output");
// slider.oninput = function () {
//   output.innerText = this.value;
// };
