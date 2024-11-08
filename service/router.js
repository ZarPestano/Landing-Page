import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import MoshifiedPage from "../pages/ProjectDetail/Moshified.js";
import AsteroidsPage from "../pages/ProjectDetail/Asteroids.js";
import GameHubPage from "../pages/ProjectDetail/GameHub.js";

import setActiveNav from "../tools/activeNav.js";

const pageTitle = "Portfolio";

export const routes = {
  404: {
    page: ErrorPage,
    navItem: null,
    path: "../pages/ErrorPage.js",
    title: "404 | " + pageTitle,
    description: "Page Not Found"
  },

  "/": {
    page: HomePage,
    navItem: 0,
    path: "../pages/HomePage.js",
    title: "Home | " + pageTitle,
    description: "Home Page of Zar's Portfolio"
  },

  "/projects": {
    page: ProjectsPage,
    navItem: 1,
    path: "../pages/ProjectsPage.js",
    title: "Projects | " + pageTitle,
    description: "Project Page of Zar's Portfolio"
  },

  "/projects/1": {
    page: MoshifiedPage,
    navItem: 1,
    path: "../pages/ProjectDetail/Moshified.js",
    title: "Moshified | " + pageTitle,
    description: "Moshified Cloud Hosting Detail Page"
  },

  "/projects/2": {
    page: AsteroidsPage,
    navItem: 1,
    path: "../pages/ProjectDetail/Asteroids.js",
    title: "Asteroids | " + pageTitle,
    description: "Asteroid Game Detail Page"
  },

  "/projects/3": {
    page: GameHubPage,
    navItem: 1,
    path: "../pages/ProjectDetail/GameHub.js",
    title: "GameHub | " + pageTitle,
    description: "GameHub Detail Page"
  }
};

document.addEventListener("click", (e) => {
  console.log();
  if (
    !(
      e.target.matches(".navbar__item") ||
      e.target.matches(".project-group img") ||
      e.target.matches(".project-group button")
    ) ||
    e.target.matches(".project-detail img") ||
    e.target.matches(".project-detail button")
  ) {
    return;
  }

  e.preventDefault();
  route();
  setActiveNav(routes);
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.currentTarget.href);
  handleLocation();
};

const handleLocation = async () => {
  var location = window.location.pathname;
  if (location.length == 0) location = "/";

  const route = routes[location] || routes[404];
  const html = new route.page();

  document.getElementById("page-content").innerHTML = await html.getHTML();
  html.activateFeatures();

  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
setActiveNav(routes);
