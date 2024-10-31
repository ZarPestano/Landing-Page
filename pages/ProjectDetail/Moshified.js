import ProjectData from "../../public/data/projects.js";
import ProjectDetailPage from "./ProjectDetailPage";

// export default new ProjectDetailPage(ProjectData.results[0]);

export default class extends ProjectDetailPage {
  constructor() {
    super();
    this.project = ProjectData.results[0];
  }
}
