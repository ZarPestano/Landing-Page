import "./css/styles.css";

document.querySelector("#nav").innerHTML = `
  <section class="block navbar">
        <ul class=" navbar__list list list--inline">
          <li class="navbar__item list__item">
            <a href="/" onclick="route()">Home</a>
          </li>
          <li class="navbar__item list__item">
            <a href="/projects" onclick="route()">Projects</a>
          </li>
        </ul>
  </section>
`;

// document.querySelector("#footer").innerHTML = `
// `;
