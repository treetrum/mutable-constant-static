import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mutableconstant.com",
  publicDir: "static",
  markdown: {
    syntaxHighlight: "prism"
  }
});
