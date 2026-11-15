import { defineConfig } from "astro/config";

// Adresse définitive du site : à mettre à jour quand le domaine sera acheté.
export default defineConfig({
  site: "https://lenclos-guadeloupe.com",
  trailingSlash: "always",
  build: { format: "directory" },
});
