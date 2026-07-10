import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],

  base: command === "build" ? "/escape-retreat-admin/" : "/",

  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
}));
