import { getCurrentRoute } from "../service/router";

export default function setActiveNav(routes) {
  const route = getCurrentRoute();

  let navItems = document.querySelectorAll(".navbar__item");
  navItems.forEach((navItem) => {
    navItem.classList.remove("navbar__active");
  });

  let activeNav = navItems[route.navItem];
  activeNav.classList.toggle("navbar__active");
}
