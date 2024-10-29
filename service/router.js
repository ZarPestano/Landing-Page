import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import ProjectsPage from "../pages/ProjectsPage.js";

const pageTitle = "Portfolio";

const routes = {
  404: {
    view: ErrorPage,
    title: "404 | " + pageTitle,
    description: "Page Not Found",
  },

  "/": {
    view: HomePage,
    title: "Home | " + pageTitle,
    description: "Home Page of Zar's Portfolio",
  },

  "/projects": {
    view: ProjectsPage,
    title: "Projects | " + pageTitle,
    description: "Project Page of Zar's Portfolio",
  },
};

document.addEventListener("click", (e) => {
  if (!e.target.matches("navbar__item a")) return;

  e.preventDefault();
  route();
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const handleLocation = async () => {
  var location = window.location.pathname;
  if (location.length == 0) location = "/";

  const route = new routes[location].view() || new routes[404].view();
  console.log(route.getHTML());
  document.getElementById("page-content").innerHTML = await route.getHTML();
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
