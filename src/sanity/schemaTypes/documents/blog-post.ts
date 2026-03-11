import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const blogPost = defineType({
	name: "blogPost",
	title: "Blog Post",
	type: "document",
	icon: DocumentTextIcon,
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
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				defineArrayMember({ type: "block" }),
				defineArrayMember({ type: "image", options: { hotspot: true } }),
			],
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "teamMember" }],
		}),
		defineField({
			name: "relatedPosts",
			title: "Related Posts",
			type: "array",
			of: [
				defineArrayMember({
					type: "reference",
					to: [{ type: "blogPost" }],
				}),
			],
			validation: (rule) => rule.max(3),
		}),
		defineField({
			name: "seo",
			title: "SEO",
			type: "seo",
		}),
	],
	orderings: [
		{
			title: "Published Date",
			name: "publishedAtDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "category",
			media: "featuredImage",
		},
	},
});
