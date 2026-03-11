// Documents
import { service } from "./documents/service";
import { treatment } from "./documents/treatment";
import { teamMember } from "./documents/team-member";
import { blogPost } from "./documents/blog-post";
import { location } from "./documents/location";
import { testimonial } from "./documents/testimonial";
import { siteSettings } from "./documents/site-settings";
import { page } from "./documents/page";

// Objects
import { seo } from "./objects/seo";
import { businessHours } from "./objects/business-hours";
import { accordionItem } from "./objects/accordion-item";
import { faq } from "./objects/faq";

export const schemaTypes = [
	// Documents
	siteSettings,
	service,
	treatment,
	teamMember,
	blogPost,
	location,
	testimonial,
	page,

	// Objects
	seo,
	businessHours,
	accordionItem,
	faq,
];
