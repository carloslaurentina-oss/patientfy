import { defineType, defineField } from "sanity";
import { PinIcon } from "@sanity/icons";

export const location = defineType({
	name: "location",
	title: "Location",
	type: "document",
	icon: PinIcon,
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name", maxLength: 96 },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "address",
			title: "Street Address",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "city",
			title: "City",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "state",
			title: "State",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "zip",
			title: "ZIP Code",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "phone",
			title: "Phone",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (rule) => rule.email(),
		}),
		defineField({
			name: "hours",
			title: "Business Hours",
			type: "businessHours",
		}),
		defineField({
			name: "mapEmbedUrl",
			title: "Google Maps Embed URL",
			type: "url",
		}),
		defineField({
			name: "directionsUrl",
			title: "Google Maps Directions URL",
			type: "url",
		}),
		defineField({
			name: "image",
			title: "Location Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
		}),
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
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
		select: { title: "name", subtitle: "city" },
	},
});
