export default function setActiveNav(routes) {
  var location = window.location.pathname;
  if (location.length == 0) location = "/";
  const route = routes[location] || routes[404];

  let navItems = document.querySelectorAll(".navbar__item");
  navItems.forEach((navItem) => {
    navItem.classList.remove("navbar__active");
  });

  let activeNav = navItems[route.navItem];
  activeNav.classList.toggle("navbar__active");
}
