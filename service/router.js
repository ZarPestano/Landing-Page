import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import ProjectsPage from "../pages/ProjectsPage.js";
import MoshifiedPage from "../pages/ProjectDetail/Moshified.js";
import AsteroidsPage from "../pages/ProjectDetail/Asteroids.js";
import GameHubPage from "../pages/ProjectDetail/GameHub.js";
import ProjectData from "../public/data/projects.js";

const pageTitle = "Portfolio";

const routes = {
  404: {
    view: ErrorPage,
    path: "../pages/ErrorPage.js",
    title: "404 | " + pageTitle,
    description: "Page Not Found",
  },

  "/": {
    view: HomePage,
    path: "../pages/HomePage.js",
    title: "Home | " + pageTitle,
    description: "Home Page of Zar's Portfolio",
  },

  "/projects": {
    view: ProjectsPage,
    path: "../pages/ProjectsPage.js",
    title: "Projects | " + pageTitle,
    description: "Project Page of Zar's Portfolio",
  },

  "/projects/1": {
    view: MoshifiedPage,
    path: "../pages/ProjectDetail/Moshified.js",
    title: "Moshified | " + pageTitle,
    description: "Moshified Cloud Hosting Detail Page",
  },

  "/projects/2": {
    view: AsteroidsPage,
    path: "../pages/ProjectDetail/Asteroids.js",
    title: "Asteroids | " + pageTitle,
    description: "Asteroid Game Detail Page",
  },

  "/projects/3": {
    view: GameHubPage,
    path: "../pages/ProjectDetail/GameHub.js",
    title: "GameHub | " + pageTitle,
    description: "GameHub Detail Page",
  },
};

document.addEventListener("click", (e) => {
  if (
    !e.target.matches("navbar__item a") ||
    !e.target.matches("project-group a")
  ) {
    return;
  }

  e.preventDefault();
  route();
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
  const html = new route.view();
  document.getElementById("page-content").innerHTML = await html.getHTML();
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
