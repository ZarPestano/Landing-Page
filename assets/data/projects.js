import MoshifyImage from "../images/moshifywebproject-cropped-1000x563.png";
import AsteroidImage from "../images/asteroidsgameproject-cropped-1000x563.png";
import GameHubImage from "../images/gamehubwebproject-cropped-1000x563.png";

export default {
  count: 3,
  results: [
    {
      id: 1,
      name: "Moshified Cloud Hosting",
      slug: "moshified-cloud-hosting",
      category: "Front-End",
      technology: ["HTML", "CSS", "JavaScript"],
      library: ["AOS"],
      image: MoshifyImage,
      link: "https://moshifywebproject.netlify.app/",
      gitLink: "https://github.com/ZarPestano/MoshifyWeb.git",
      description:
        "A mobile-first, fully responsive cloud hosting website designed to deliver a seamless user experience across\
         all devices. Built with HTML and CSS, the site incorporates media queries for optimized viewing at different\
         screen widths. Scroll animations are powered by the AOS scroll library, enhancing engagement and providing\
         dynamic visual cues. JavaScript is used to implement collapsible menus, ensuring intuitive navigation on smaller\
         screens. Moshified effectively balances design and functionality, creating an engaging experience for users\
         exploring cloud hosting solutions."
    },
    {
      id: 2,
      name: "Asteroids Game Recreation",
      slug: "asteroids-game-recreation",
      category: "Front-End",
      technology: ["JavaScript"],
      library: ["n/a"],
      image: AsteroidImage,
      link: "https://asteroidsgameproject.netlify.app",
      gitLink: "https://github.com/ZarPestano/AsteroidsGame.git",
      description:
        "A modern web-based recreation of the classic 1979 Asteroids arcade game by Atari Inc., blending nostalgic\
         gameplay with updated browser based technologies. This project was built to be both accessible and enjoyable,\
         with intuitive controls for a seamless user experience. Players navigate with arrow keys and fire with the\
         space bar to challenge the high score, combining simple mechanics with dynamic visuals. The game highlights\
         programming skills in JavaScript, demonstrating interactive functionaility and real-time user feedback through\
         score-tracking and responsive controls."
    },
    {
      id: 3,
      name: "GameHub",
      slug: "gamehub",
      category: "Full-Stack",
      technology: ["React", "TypeScript"],
      library: ["Chakra-UI", "Axios", "React-Query", "Zustand", "React-Router"],
      image: GameHubImage,
      link: "https://gamehubwebproject.netlify.app",
      gitLink: "https://github.com/ZarPestano/GameHub.git",
      description:
        "A GameHub is a modern video game discovery web application designer for effortless exploration of gaming\
         content through a sleek, responsive interface. Powered by React, this project pulls real-time data from an online\
         third-party API, offering users up-to-date game details. GameHub leverages Chakra-UI for an accessible,\
         visually-appealing layout and uses React-Query and Axios to efficiently manage server-side data. Client state\
         management is streamlined with Zustand, while React-Router enables smooth, intuitive navigation. This project\
         demonstrates expertise in building efficient interactive applications that enhance the user experience through\
         a sophisticated, modular technology stack."
    }
  ]
};
