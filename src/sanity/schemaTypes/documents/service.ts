import { defineType, defineField, defineArrayMember } from "sanity";
import { StarIcon } from "@sanity/icons";

export const service = defineType({
	name: "service",
	title: "Service",
	type: "document",
	icon: StarIcon,
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
			name: "description",
			title: "Description",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "treatments",
			title: "Related Treatments",
			type: "array",
			of: [
				defineArrayMember({
					type: "reference",
					to: [{ type: "treatment" }],
				}),
			],
		}),
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
		}),
	],
	preview: {
		select: { title: "title", media: "image" },
	},
});
