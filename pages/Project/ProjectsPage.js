import TemplatePage from "../TemplatePage.js";
import ProjectsData from "../../assets/data/projects.js";

import shortenText from "../../tools/shortenText.js";

import SideBar from "./SideBar.js";
import toggleSidebar from "../../tools/toggleSidebar.js";

// import setFilters from "../../tools/setFilters.js";

export default class extends TemplatePage {
  constructor() {
    super();
  }

  async getHTML(projects = ProjectsData.results) {
    return `
        ${SideBar()}
        <section class="block projects" id="projects" data-aos="fade-down">
            <h2 class="projects-heading">Projects</h2>
            <div class="project-grid grid">
              ${projects.map((project) => projectContent(project)).join("")}
            </div>
        </section> 
        `;
  }

  #filter(filters, filterType, projects) {
    Array.from(filters).forEach((filter) => {
      filter.addEventListener("click", async () => {
        const filtered = projects.filter((project) =>
          project[filterType].includes(filter.textContent)
        );
        document.getElementById("page-content").innerHTML = await this.getHTML(
          filtered
        );
        this.activateFeatures();
      });
    });
  }

  #getFilter(filterList) {
    let filterNodes = filterList.children;
    let filter = filterNodes.item(filterNodes.length - 1).children;
    return filter;
  }

  #setFilters(projects) {
    let filters = document.querySelectorAll(".sidebar__group");
    let categoriesList = filters[0];
    let technologiesList = filters[1];
    let librariesList = filters[2];

    let categories = this.#getFilter(categoriesList);
    let technologies = this.#getFilter(technologiesList);
    let libraries = this.#getFilter(librariesList);

    this.#filter(categories, "category", projects);
    this.#filter(technologies, "technology", projects);
    this.#filter(libraries, "library", projects);
  }

  activateFeatures() {
    toggleSidebar();
    this.#setFilters(ProjectsData.results);
  }
}

const projectContent = (project) => {
  let maxCharLength = 150;

  return `
  <div class="project-group card">
    <a href="/projects/${project.id}" onclick="route()">
       <img
       class="project-image"
       src="${project.image}";
       alt="Cover page of project ${project.name}"
        />
    </a>
    <div class="project-content">
      <h2 class="project-title">${project.name}</h2>
      <h4 class="project-category">
        <span class="heading--primary">Category:</span> ${project.category}
      </h4>
      <h4 class="project-technology">
         <span class="heading--secondary">Technology:</span> ${project.technology.join(
           ", "
         )}
      </h4>
      <p class="project-description">${shortenText(
        project.description,
        maxCharLength
      )}</p>
      <a href="/projects/${project.id}" onclick="route()">
        <button class="btn btn--primary">View Details</button>
      </a>
    </div>
  </div>`;
};
