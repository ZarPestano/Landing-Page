import TemplatePage from "./TemplatePage.js";
import ProjectsData from "../public/data/projects.js";

const projectContent = (project) => {
  return `
  <div class="project-group">
    <a href="${project.link}" target="_blank">
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
      <p class="project-description">${project.description}</p>
      <a href="${project.link}" target="_blank">
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
