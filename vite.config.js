import Inspect from "vite-plugin-inspect";
import { resolve } from "path";

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        home: resolve(__dirname, "./pages/index.html"),
        projects: resolve(__dirname, "./pages/projects.html"),
        error: resolve(__dirname, "./pages/404.html"),
      },
    },
  },
};
