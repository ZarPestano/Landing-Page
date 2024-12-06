import { getCurrentRoute, getCurrentPage } from "../service/router";

const filteredProjects = [];

export default function setFilters(projects) {
  let filters = document.querySelectorAll(".sidebar__group");
  let categoriesList = filters[0];
  let technologiesList = filters[1];
  let librariesList = filters[2];

  let categories = getFilters(categoriesList);
  let technologies = getFilters(technologiesList);
  let libraries = getFilters(librariesList);

  filter(categories, "category", projects);
  filter(technologies, "technology", projects);
  filter(libraries, "library", projects);
}

function filter(filters, filterType, projects) {
  Array.from(filters).forEach((filter) => {
    filter.addEventListener("click", async () => {
      const newFilteredProjects = projects.filter((project) =>
        project[filterType].includes(filter.textContent)
      );

      setActive(filter);

      for (const p of newFilteredProjects)
        if (!filteredProjects.includes(p)) filteredProjects.push(p);

      const route = getCurrentRoute();
      getCurrentPage(route, filteredProjects);
    });
  });
}

function setActive(filter) {
  const filters = document.querySelectorAll(".sidebar__item");
  filters.forEach((f) => {
    if (f === filter) {
      console.log(f);
      f.classList.toggle("sidebar__item--active");
    }
  });
}

function getFilters(filterList) {
  let filterNodes = filterList.children;
  let filters = filterNodes.item(filterNodes.length - 1).children;
  return filters;
}
