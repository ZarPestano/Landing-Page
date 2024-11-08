export default function projectFilter() {
  let filterIcon = document.querySelector(".sidebar--filter");
  let closeIcon = document.querySelector(".sidebar--close");
  let sidebar = document.querySelector(".sidebar");

  filterIcon.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
  });
  closeIcon.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active");
  });
}
