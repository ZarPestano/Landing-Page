import TemplatePage from "./TemplatePage.js";
import ProjectsData from "../public/data/projects.js";
import shortenText from "../tools/shortenText.js";

const projectContent = (project) => {
  let maxCharLength = 150;

  return `
  <div class="project-group card">
    <a href="/projects/${project.id}" onclick="route()">
       <img
       class="project-image"
       src="${project.image}";
       alt=""
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

export default class extends TemplatePage {
  async getHTML() {
    return `
        <section class="block projects" id="projects" data-aos="fade-down">
            <h2 class="projects-heading">Projects</h2>
            <div class="project-grid grid">
              ${ProjectsData.results
                .map((project) => projectContent(project))
                .join("")}
            </div>
        </section> 
        `;
  }
}
