import type { StaticImageData } from "next/image";

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  // logo: string | StaticImageData;
  // darkModeLogo?: string | StaticImageData;
  // logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  slug: string;
  name: string;
  objective: string;
  description: string;
  imporovement: string;
  url: string;
  gitUrl: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
