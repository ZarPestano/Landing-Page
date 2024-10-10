const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const projects = document.querySelectorAll(".project-group");
const previousArrow = document.querySelector("#previous-arrow");
const nextArrow = document.querySelector("#next-arrow");

// finding active project
let activeProjI;
for (let projI = 0; projI < projects.length; projI++) {
  for (let classI = 0; classI < projects[projI].classList.length; classI++) {
    if (projects[projI].classList[classI] === "project-active") {
      activeProjI = projI;
      break;
    }
  }
}

nextArrow.addEventListener("click", function () {
  if (activeProjI + 1 < projects.length) {
    projects[activeProjI].classList.toggle("project-active");
    projects[activeProjI + 1].classList.toggle("project-active");
    activeProjI += 1;
  }
});

previousArrow.addEventListener("click", function () {
  if (activeProjI > 0) {
    projects[activeProjI].classList.toggle("project-active");
    projects[activeProjI - 1].classList.toggle("project-active");
    activeProjI -= 1;
  }
});

// const slider = document.querySelector(".slider");
// const output = document.querySelector(".slider-output");
// slider.oninput = function () {
//   output.innerText = this.value;
// };
