// Payload CMS Types — matches the collections defined in patientfy-cms

export type PayloadMedia = {
  id: number;
  url: string;
  alt?: string;
  filename: string;
  width?: number;
  height?: number;
};

export type SEO = {
  title?: string;
  description?: string;
};

export type Service = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  image?: PayloadMedia | null;
  treatments?: Treatment[];
  seo?: SEO;
};

export type Treatment = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  image?: PayloadMedia | null;
  aboutImage?: PayloadMedia | null;
  accordionItems?: { title: string; content: string; id?: string }[];
  faqs?: { question: string; answer: string; id?: string }[];
  service?: Service | null;
  seo?: SEO;
};

export type TeamMember = {
  id: number;
  name: string;
  slug: string;
  role?: string;
  image?: PayloadMedia | null;
  bio?: Record<string, unknown>;
  order?: number;
  seo?: SEO;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  publishedAt?: string;
  excerpt?: string;
  category?: string;
  featuredImage?: PayloadMedia | null;
  body?: Record<string, unknown>;
  author?: TeamMember | null;
  relatedPosts?: BlogPost[];
  seo?: SEO;
};

export type Location = {
  id: number;
  name: string;
  slug: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  phone?: string;
  email?: string;
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  mapEmbedUrl?: string;
  directionsUrl?: string;
  image?: PayloadMedia | null;
  order?: number;
  seo?: SEO;
};

export type Testimonial = {
  id: number;
  quote: string;
  authorName: string;
  authorMeta?: string;
  rating?: number;
  order?: number;
};

export type SiteSettings = {
  id: number;
  practiceName?: string;
  phone?: string;
  email?: string;
  logo?: PayloadMedia | null;
  ctaEyebrow?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  reviewRating?: number;
  reviewCount?: number;
  socialLinks?: { platform: string; url: string; id?: string }[];
  seo?: SEO;
};

export type Page = {
  id: number;
  title: string;
  slug: string;
  eyebrow?: string;
  description?: string;
  body?: Record<string, unknown>;
  seo?: SEO;
};
