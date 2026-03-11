import { defineType, defineField, defineArrayMember } from "sanity";
import { ActivityIcon } from "@sanity/icons";

export const treatment = defineType({
	name: "treatment",
	title: "Treatment",
	type: "document",
	icon: ActivityIcon,
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
			name: "accordionItems",
			title: "About This Treatment",
			description: "What It Is, How It Works, How It Helps",
			type: "array",
			of: [defineArrayMember({ type: "accordionItem" })],
		}),
		defineField({
			name: "aboutImage",
			title: "About Section Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "faqs",
			title: "FAQs",
			type: "array",
			of: [defineArrayMember({ type: "faq" })],
		}),
		defineField({
			name: "service",
			title: "Parent Service",
			type: "reference",
			to: [{ type: "service" }],
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
