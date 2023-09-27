// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import projectSchema from "./sanity/schemas/project-schema";
import image from "./sanity/schemas/image-schema";

export default defineConfig({
  name: "photography",
  projectId: "xcku21u8",
  dataset: "production",
  title: "Photo Portfolio",
  apiVersion: "2023-09-26",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [projectSchema, image],
  },
});
