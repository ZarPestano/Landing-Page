import Categories from "../../assets/data/categories.js";
import Technologies from "../../assets/data/technologies.js";
import Libraries from "../../assets/data/libraries.js";

const sidebarContent = (title, filter) => {
  return `
      <div class="sidebar__group">
      <h3 class="heading--primary sidebar__title">${title}</h3>
      <ul class="sidebar__list list">
      ${filter.results
        .map(
          (type) => `
          <li class="sidebar__item list__item">${type.name}</li>`
        )
        .join("")}
      </ul>
      </div>`;
};

export default () => {
  return `
    <div class="sidebar--filter">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        height="48px" 
        viewBox="0 -960 960 960" 
        width="48px" fill="#49cae4">
        <path 
          d="M345-377h391L609-548 506-413l-68-87-93 123Zm-85 177q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18H260Zm0-60h560v-560H260v560ZM140-80q-24 0-42-18t-18-42v-620h60v620h620v60H140Zm120-740v560-560Z"/>
      </svg>
    </div>
    <aside class="sidebar">
      <div class="sidebar--close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#fff"
        >
        <path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
        </svg>
      </div>
      ${sidebarContent("Category", Categories)}
      ${sidebarContent("Technology", Technologies)}
      ${sidebarContent("Library", Libraries)}
    </aside>`;
};
