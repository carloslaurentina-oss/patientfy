// Services
export const ALL_SERVICES_QUERY = `*[_type == "service"] | order(title asc) {
  _id, title, description, "slug": slug.current,
  "image": image.asset->url
}`;

export const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id, title, description, "slug": slug.current,
  "image": image.asset->url,
  treatments[]-> {
    _id, title, description, "slug": slug.current,
    "image": image.asset->url
  },
  seo
}`;

// Treatments
export const ALL_TREATMENTS_QUERY = `*[_type == "treatment"] | order(title asc) {
  _id, title, description, "slug": slug.current,
  "image": image.asset->url
}`;

export const TREATMENT_BY_SLUG_QUERY = `*[_type == "treatment" && slug.current == $slug][0] {
  _id, title, description, "slug": slug.current,
  "image": image.asset->url,
  "aboutImage": aboutImage.asset->url,
  accordionItems[] { _key, title, content },
  faqs[] { _key, question, answer },
  service-> { _id, title, "slug": slug.current },
  seo
}`;

// Team Members
export const ALL_TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc) {
  _id, name, role, "slug": slug.current,
  "image": image.asset->url
}`;

export const TEAM_MEMBER_BY_SLUG_QUERY = `*[_type == "teamMember" && slug.current == $slug][0] {
  _id, name, role, "slug": slug.current,
  "image": image.asset->url,
  bio,
  seo
}`;

// Blog Posts
export const ALL_BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id, title, excerpt, category, "slug": slug.current,
  publishedAt,
  "featuredImage": featuredImage.asset->url
}`;

export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id, title, excerpt, category, "slug": slug.current,
  publishedAt,
  "featuredImage": featuredImage.asset->url,
  body,
  author-> { _id, name, role, "image": image.asset->url },
  relatedPosts[]-> { _id, title, "slug": slug.current },
  seo
}`;

// Locations
export const ALL_LOCATIONS_QUERY = `*[_type == "location"] | order(order asc) {
  _id, name, address, city, state, zip, phone, email,
  "slug": slug.current,
  hours, mapEmbedUrl, directionsUrl,
  "image": image.asset->url
}`;

export const LOCATION_BY_SLUG_QUERY = `*[_type == "location" && slug.current == $slug][0] {
  _id, name, address, city, state, zip, phone, email,
  "slug": slug.current,
  hours, mapEmbedUrl, directionsUrl,
  "image": image.asset->url,
  seo
}`;

// Testimonials
export const ALL_TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id, quote, authorName, authorMeta, rating
}`;

// Site Settings
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  _id, practiceName, phone, email,
  "logo": logo.asset->url,
  ctaEyebrow, ctaHeading, ctaDescription,
  ctaPrimaryText, ctaPrimaryLink,
  ctaSecondaryText, ctaSecondaryLink,
  reviewRating, reviewCount,
  socialLinks[] { _key, platform, url },
  seo
}`;
