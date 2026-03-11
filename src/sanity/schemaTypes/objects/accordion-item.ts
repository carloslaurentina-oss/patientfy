import { defineType, defineField } from "sanity";

export const accordionItem = defineType({
	name: "accordionItem",
	title: "Accordion Item",
	type: "object",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "content",
			title: "Content",
			type: "text",
			rows: 4,
			validation: (rule) => rule.required(),
		}),
	],
});
