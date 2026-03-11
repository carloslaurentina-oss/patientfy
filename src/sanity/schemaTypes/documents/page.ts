import { defineType, defineField } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export const page = defineType({
	name: "page",
	title: "Page",
	type: "document",
	icon: DocumentIcon,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eyebrow",
			title: "Eyebrow Text",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
		}),
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
		}),
	],
	preview: {
		select: { title: "title", subtitle: "slug.current" },
	},
});
