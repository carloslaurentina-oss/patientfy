import type { StructureResolver } from "sanity/structure";
import {
	CogIcon,
	UserIcon,
	StarIcon,
	ActivityIcon,
	DocumentTextIcon,
	PinIcon,
	CommentIcon,
	DocumentIcon,
} from "@sanity/icons";

const SINGLETONS = ["siteSettings"];

export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			// Singleton: Site Settings
			S.listItem()
				.title("Site Settings")
				.icon(CogIcon)
				.child(
					S.document()
						.schemaType("siteSettings")
						.documentId("siteSettings")
						.title("Site Settings"),
				),

			S.divider(),

			// Services & Treatments
			S.listItem()
				.title("Services & Treatments")
				.icon(StarIcon)
				.child(
					S.list()
						.title("Services & Treatments")
						.items([
							S.documentTypeListItem("service")
								.title("Services")
								.icon(StarIcon),
							S.documentTypeListItem("treatment")
								.title("Treatments")
								.icon(ActivityIcon),
						]),
				),

			// Team
			S.documentTypeListItem("teamMember").title("Team").icon(UserIcon),

			// Blog
			S.documentTypeListItem("blogPost").title("Blog").icon(DocumentTextIcon),

			// Locations
			S.documentTypeListItem("location").title("Locations").icon(PinIcon),

			// Testimonials
			S.documentTypeListItem("testimonial")
				.title("Testimonials")
				.icon(CommentIcon),

			S.divider(),

			// Pages
			S.documentTypeListItem("page").title("Pages").icon(DocumentIcon),

			// Remaining types (filtered)
			...S.documentTypeListItems().filter((listItem) => {
				const id = listItem.getId();
				return ![
					...SINGLETONS,
					"service",
					"treatment",
					"teamMember",
					"blogPost",
					"location",
					"testimonial",
					"page",
				].includes(id as string);
			}),
		]);
