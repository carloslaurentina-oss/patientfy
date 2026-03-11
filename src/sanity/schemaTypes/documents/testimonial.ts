import { defineType, defineField } from "sanity";
import { CommentIcon } from "@sanity/icons";

export const testimonial = defineType({
	name: "testimonial",
	title: "Testimonial",
	type: "document",
	icon: CommentIcon,
	fields: [
		defineField({
			name: "quote",
			title: "Quote",
			type: "text",
			rows: 4,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "authorName",
			title: "Author Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "authorMeta",
			title: "Author Meta",
			description: "e.g. 'Patient since 2023'",
			type: "string",
		}),
		defineField({
			name: "rating",
			title: "Rating",
			type: "number",
			validation: (rule) => rule.min(1).max(5).required(),
			initialValue: 5,
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
		}),
	],
	orderings: [
		{
			title: "Display Order",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: { title: "authorName", subtitle: "authorMeta" },
	},
});
