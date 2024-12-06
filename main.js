import "./css/styles.css";
import LinkedinIcon from "./assets/icons/linkedin.svg";

document.querySelector("#nav").innerHTML = `
  <section class="block navbar">
    <ul class="navbar__list list list--inline">
      <li class="list__item">
        <a class="navbar__item" href="/" onclick="route()">Home</a>
      </li>
      <li class="list__item">
        <a class="navbar__item" href="/projects" onclick="route()">Projects</a>
      </li>
    </ul>
  </section>
`;

document.querySelector("#footer").innerHTML = `
  <div class="footer-container">
    <section class="block footer">
      <a
        class="footer-link"
        href="https://linkedin.com/in/eleazar-pestano-93b243123"
        target="_blank"
      >
        <img
          class="footer-icon"
          src="${LinkedinIcon}"
          alt="LinkedIn Link"
        />
      </a>
      <p class="footer-description">© 2024 Eleazar Pestano</p>
    </section>
  </div>
`;
