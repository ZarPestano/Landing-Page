let navItems = document.querySelectorAll(".navbar__item");
let activeNav = document.querySelector(".navbar__active");

navItems.forEach((navItem) =>
  navItem.addEventListener("click", () => {
    activeNav.classList.remove("navbar__active");
    navItem.classList.toggle("navbar__active");
    activeNav = navItem;
  })
);
