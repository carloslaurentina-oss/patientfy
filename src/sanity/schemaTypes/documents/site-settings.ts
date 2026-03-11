import { defineType, defineField, defineArrayMember } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	icon: CogIcon,
	fields: [
		defineField({
			name: "practiceName",
			title: "Practice Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "phone",
			title: "Phone Number",
			type: "string",
		}),
		defineField({
			name: "email",
			title: "Email",
			type: "string",
			validation: (rule) => rule.email(),
		}),
		defineField({
			name: "logo",
			title: "Logo",
			type: "image",
		}),
		defineField({
			name: "ctaEyebrow",
			title: "Global CTA Eyebrow",
			type: "string",
		}),
		defineField({
			name: "ctaHeading",
			title: "Global CTA Heading",
			type: "string",
		}),
		defineField({
			name: "ctaDescription",
			title: "Global CTA Description",
			type: "text",
			rows: 3,
		}),
		defineField({
			name: "ctaPrimaryText",
			title: "Global CTA Primary Button Text",
			type: "string",
		}),
		defineField({
			name: "ctaPrimaryLink",
			title: "Global CTA Primary Button Link",
			type: "string",
		}),
		defineField({
			name: "ctaSecondaryText",
			title: "Global CTA Secondary Button Text",
			type: "string",
		}),
		defineField({
			name: "ctaSecondaryLink",
			title: "Global CTA Secondary Button Link",
			type: "string",
		}),
		defineField({
			name: "reviewRating",
			title: "Review Rating",
			description: "e.g. 4.9",
			type: "number",
		}),
		defineField({
			name: "reviewCount",
			title: "Review Count",
			description: "e.g. 200+",
			type: "string",
		}),
		defineField({
			name: "socialLinks",
			title: "Social Links",
			type: "array",
			of: [
				defineArrayMember({
					type: "object",
					fields: [
						defineField({
							name: "platform",
							title: "Platform",
							type: "string",
							options: {
								list: [
									{ title: "Facebook", value: "facebook" },
									{ title: "Instagram", value: "instagram" },
									{ title: "Twitter/X", value: "twitter" },
									{ title: "LinkedIn", value: "linkedin" },
									{ title: "YouTube", value: "youtube" },
									{ title: "TikTok", value: "tiktok" },
								],
							},
						}),
						defineField({
							name: "url",
							title: "URL",
							type: "url",
						}),
					],
					preview: {
						select: { title: "platform", subtitle: "url" },
					},
				}),
			],
		}),
		defineField({
			name: "seo",
			title: "Default SEO",
			type: "seo",
		}),
	],
	preview: {
		prepare() {
			return { title: "Site Settings" };
		},
	},
});
