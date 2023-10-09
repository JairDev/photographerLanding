import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    sanity({
      projectId: "xcku21u8",
      dataset: "production",
      title: "Photo Portfolio",
      apiVersion: "2023-09-26",
      studioBasePath: "/admin",
      plugins: [deskTool(), visionTool()],
    }),
    react(),
  ],
  image: {
    domains: ["cdn.sanity.io"],
  },
});
