const pageTitle = "Portfolio";

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

const routes = {
  404: {
    path: "/pages/404.html",
    title: "404 | " + pageTitle,
    description: "Page Not Found",
  },

  "/": {
    path: "/pages/index.html",
    title: "Home | " + pageTitle,
    description: "Home Page of Zar's Portfolio",
  },

  "/projects": {
    path: "/pages/projects.html",
    title: "Projects | " + pageTitle,
    description: "Project Page of Zar's Portfolio",
  },
};

const handleLocation = async () => {
  var location = window.location.pathname;
  if (location.length == 0) location = "/";

  const route = routes[location] || routes[404];
  const html = await fetch(route.path).then((data) => data.text());
  document.getElementById("page-content").innerHTML = html;
  document.title = route.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
