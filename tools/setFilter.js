import { getCurrentRoute, getCurrentPage } from "../service/router";
import ProjectsData from "../assets/data/projects.js";

const projects = ProjectsData.results;
const activeFilters = {
  category: [],
  technology: [],
  library: [],
};

let filteredProjects = [];

export default function setFilters() {
  let filters = document.querySelectorAll(".sidebar__group");
  let categoriesList = filters[0];
  let technologiesList = filters[1];
  let librariesList = filters[2];

  let categories = getFilters(categoriesList);
  let technologies = getFilters(technologiesList);
  let libraries = getFilters(librariesList);

  enableFilter(categories, "category");
  enableFilter(technologies, "technology");
  enableFilter(libraries, "library");

  disableFilter(categories, "category");
  disableFilter(technologies, "technology");
  disableFilter(libraries, "library");
}

function disableFilter(filters, filterType) {
  Array.from(filters).forEach((filter) => {
    filter.children[1].addEventListener("click", async () => {
      toggleActiveNav(filter);
      let dFIndex = activeFilters[filterType].indexOf(filterName(filter));
      activeFilters[filterType].splice(dFIndex, 1)[0];

      const toBeDeletedIndex = [];
      for (const p of filteredProjects) {
        if (isActiveProject(p)) continue;

        let index = filteredProjects.indexOf(p);
        toBeDeletedIndex.unshift(index);
      }

      for (const i of toBeDeletedIndex) filteredProjects.splice(i, 1);

      getCurrentPage(
        getCurrentRoute(),
        isEmpty(filteredProjects) ? projects : filteredProjects
      );
    });
  });
}

function enableFilter(filters, filterType) {
  Array.from(filters).forEach((filter) => {
    filter.children[0].addEventListener("click", async () => {
      const addedFilter = filterName(filter);

      if (isEmpty(filteredProjects)) {
        if (!hasActiveFilter()) {
          filteredProjects = projects.filter((project) =>
            project[filterType].includes(addedFilter)
          );
        }

        const newFilteredProjects = projects.filter((project) =>
          project[filterType].includes(addedFilter)
        );
        for (const p of newFilteredProjects)
          if (!filteredProjects.includes(p)) filteredProjects.push(p);
      }

      if (hasActiveFilter() && !isEmpty(activeFilters[filterType])) {
        const newFilteredProjects = projects.filter((project) =>
          project[filterType].includes(addedFilter)
        );
        for (const p of newFilteredProjects)
          if (!filteredProjects.includes(p)) filteredProjects.push(p);
      }

      if (hasActiveFilter() && isEmpty(activeFilters[filterType])) {
        filteredProjects = filteredProjects.filter((project) =>
          project[filterType].includes(addedFilter)
        );
      }

      toggleActiveNav(filter);
      activeFilters[filterType].push(addedFilter);

      // console.log(filteredProjects);
      getCurrentPage(getCurrentRoute(), filteredProjects);
    });
  });
}

const isActiveProject = (project) => {
  let flatActiveFilters = [];
  if (hasActiveFilter())
    for (const aF of Object.values(activeFilters))
      flatActiveFilters = [...flatActiveFilters, ...aF];

  for (const rF of flatActiveFilters)
    if (
      project["category"].includes(rF) ||
      project["technology"].includes(rF) ||
      project["library"].includes(rF)
    )
      return true;

  return false;
};

function toggleActiveNav(filter) {
  const filters = document.querySelectorAll(".sidebar__item");
  filters.forEach((f) => {
    if (f === filter) f.classList.toggle("sidebar__item--active");
  });
}

function getFilters(filterList) {
  let filterNodes = filterList.children;
  let filters = filterNodes.item(filterNodes.length - 1).children;
  return filters;
}

function filterName(filter) {
  return filter.children[0].textContent;
}

function isEmpty(array) {
  return Array.isArray(array) && array.length === 0;
}

function hasActiveFilter() {
  for (const filter of Object.values(activeFilters))
    if (!isEmpty(filter)) return true;

  return false;
}
