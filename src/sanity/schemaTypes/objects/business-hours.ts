import { defineType, defineField } from "sanity";

export const businessHours = defineType({
	name: "businessHours",
	title: "Business Hours",
	type: "object",
	fields: [
		defineField({ name: "monday", title: "Monday", type: "string" }),
		defineField({ name: "tuesday", title: "Tuesday", type: "string" }),
		defineField({ name: "wednesday", title: "Wednesday", type: "string" }),
		defineField({ name: "thursday", title: "Thursday", type: "string" }),
		defineField({ name: "friday", title: "Friday", type: "string" }),
		defineField({ name: "saturday", title: "Saturday", type: "string" }),
		defineField({ name: "sunday", title: "Sunday", type: "string" }),
	],
});
