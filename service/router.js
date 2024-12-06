import routes from "./routes.js";
import setActiveNav from "../tools/activeNav.js";
import SideBar from "../pages/Project/SideBar.js";

document.addEventListener("click", (e) => {
  const isInvalidTargets = () => {
    return (
      !(
        e.target.matches(".navbar__item") ||
        e.target.matches(".project-group img") ||
        e.target.matches(".project-group button")
      ) ||
      e.target.matches(".project-detail img") ||
      e.target.matches(".project-detail button")
    );
  };

  if (isInvalidTargets(e)) return;

  e.preventDefault();
  route();
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.currentTarget.href);
  handleLocation();
};

export const getCurrentRoute = () => {
  var location = window.location.pathname;
  if (location.length == 0) location = "/";
  return routes[location] || routes[404];
};

export const getCurrentPage = async (route, projects = undefined) => {
  const html = new route.page();
  document.getElementById("main-content").innerHTML = await html.getHTML(
    projects
  );
};

const getSideBar = async (route) => {
  const html = new route.page();
  document.getElementById("side-bar").innerHTML = await html.getSideBar();
  html.activateFeatures();
};

const handleLocation = () => {
  const route = getCurrentRoute(routes);
  getCurrentPage(route);
  getSideBar(route);

  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);

  setActiveNav();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
