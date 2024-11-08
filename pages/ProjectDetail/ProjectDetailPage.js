import TemplatePage from "../TemplatePage";

const projectContent = (project) => {
  return `
  <div class="project-group project-detail">
    <img
    class="project-image"
    src="${project.image}";
    alt="Cover page of project ${project.name}"
     />
    <div class="project-content card">
      <h2 class="project-title">${project.name}</h2>
      <h4 class="project-category">
        <span class="heading--primary">Category:</span> ${project.category}
      </h4>
      <h4 class="project-technology">
         <span class="heading--secondary">Technology:</span> ${project.technology.join(
           ", "
         )}
      </h4>
      <h4 class="project-library">
         <span class="heading--accent">Library:</span> ${project.library.join(
           ", "
         )}
      </h4>
      <p class="project-description">${project.description}</p>
      <a href="${project.link}" target="_blank">
        <button class="btn btn--primary">View Live Project</button>
      </a>
      <a href="${project.gitLink}" target="_blank">
        <button class="btn btn--primary">View GitHub Code</button>
      </a>
    </div>
  </div>`;
};

export default class extends TemplatePage {
  constructor(project) {
    super();
    this.project = project;
  }

  async getHTML() {
    return ` 
    <section class="block projects" id="projects" data-aos="fade-down">
      ${projectContent(this.project)}
    </section> 
     `;
  }
}
