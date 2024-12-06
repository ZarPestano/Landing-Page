import ErrorPage from "../pages/ErrorPage.js";
import HomePage from "../pages/HomePage.js";
import ProjectsPage from "../pages/Project/ProjectsPage.js";
import MoshifiedPage from "../pages/ProjectDetail/Moshified.js";
import AsteroidsPage from "../pages/ProjectDetail/Asteroids.js";
import GameHubPage from "../pages/ProjectDetail/GameHub.js";

const pageTitle = "Portfolio";

export default {
  404: {
    page: ErrorPage,
    navItem: null,
    path: "../pages/ErrorPage.js",
    title: "404 | " + pageTitle,
    description: "Page Not Found",
  },

  "/": {
    page: HomePage,
    navItem: 0,
    path: "../pages/HomePage.js",
    title: "Home | " + pageTitle,
    description: "Home Page of Zar's Portfolio",
  },

  "/projects": {
    page: ProjectsPage,
    navItem: 1,
    path: "../pages/Project/ProjectsPage.js",
    title: "Projects | " + pageTitle,
    description: "Project Page of Zar's Portfolio",
  },

  "/projects/1": {
    page: MoshifiedPage,
    navItem: 1,
    path: "../pages/ProjectDetail/Moshified.js",
    title: "Moshified | " + pageTitle,
    description: "Moshified Cloud Hosting Detail Page",
  },

  "/projects/2": {
    page: AsteroidsPage,
    navItem: 1,
    path: "../pages/ProjectDetail/Asteroids.js",
    title: "Asteroids | " + pageTitle,
    description: "Asteroid Game Detail Page",
  },

  "/projects/3": {
    page: GameHubPage,
    navItem: 1,
    path: "../pages/ProjectDetail/GameHub.js",
    title: "GameHub | " + pageTitle,
    description: "GameHub Detail Page",
  },
};
