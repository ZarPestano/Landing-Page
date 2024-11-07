import "./css/styles.css";

document.querySelector("#nav").innerHTML = `
  <section class="block navbar">
        <ul class="navbar__list list list--inline">
          <li class="list__item">
            <a class="navbar__active navbar__item" href="/" onclick="route()">Home</a>
          </li>
          <li class="list__item">
            <a class="navbar__item"  href="/projects" onclick="route()">Projects</a>
          </li>
        </ul>
  </section>
`;

// document.querySelector("#footer").innerHTML = `
// `;
