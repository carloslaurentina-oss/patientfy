import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
	name: "starter",
	title: "Starter",
	projectId: "1q1uliu2",
	dataset: "production",
	plugins: [structureTool({ structure }), visionTool()],
	schema: {
		types: schemaTypes,
	},
});
