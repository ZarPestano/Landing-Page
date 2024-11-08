import TemplatePage from "./TemplatePage.js";
import HomeData from "../assets/data/home.js";

export default class extends TemplatePage {
  async getHTML() {
    return `
     <section class="block about" id="about">
       <div class="about-content">
         <h2 class="about-heading">${HomeData.title}</h2>
         <div class="about-grid grid grid--1x2">
           <img
             class="about-image"
             src="${HomeData.image}"
             alt="My Profile Picture"
             data-aos="fade-in"
           />
           <div class="about-description" data-aos="fade-left">
             ${HomeData.description
               .map((paragraph) => `<p>${paragraph}</p>`)
               .join("")}
           </div>
         </div>
         <div data-aos="fade-up">
          <ul class="about-badges list list--inline">
          ${HomeData.technologies
            .map(
              (badge) => `
              <li class="about-list-item list__item">
                <span class="about-badge badge badge--primary">${badge}</span>
              </li>`
            )
            .join("")}
          </ul>
          <ul class="about-badges list list--inline">
          ${HomeData.libraries
            .map(
              (badge) => `
              <li class="about-list-item list__item">
                <span class="about-badge badge badge--primary">${badge}</span>
              </li>`
            )
            .join("")}
          </ul>
          <ul class="about-badges list list--inline">
          ${HomeData.miscTechnologies
            .map(
              (badge) => `
              <li class="about-list-item list__item">
                <span class="about-badge badge badge--primary">${badge}</span>
              </li>`
            )
            .join("")}
          </ul>
         </div>
       </div>
     </section>
     `;
  }
}
