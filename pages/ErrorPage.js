import TemplatePage from "./TemplatePage.js";

export default class extends TemplatePage {
  async getHTML() {
    return `
    <p>Error 404: Page Not Found</p>
    `;
  }
}
