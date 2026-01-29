import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  infinite,
  hippo,

  threejs,
  UPPCL,
  ICRS,
  horizon,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Architect",
    icon: web,
  },
  {
    title: "Data Visualization",
    icon: mobile,
  },
  {
    title: "Full Stack Engineer",
    icon: backend,
  },
  {
    title: "System Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Associate Software Engineer",
    companyName: "Infinite Computer Solutions",
    icon: infinite, 
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
      "Architecting the UPPCL MDM Analytics Dashboard using React, TypeScript, and Visx to visualize 5,000+ meter records.",
      "Engineered a scalable Node.js & PostgreSQL backend with Redis caching, reducing network calls by 35% and achieving TTFB under 2s.",
      "Built the BEST ICRS Complaint Portal serving 2,000+ daily users, featuring WCAG 2.1 AA accessibility and an AI chatbot automating 40% of queries.",
      "Implemented CI/CD workflows using Docker and Vercel, reducing release cycles from days to hours.",
    ],
  },
  {
    title: "Software Engineer Intern",
    companyName: "Infinite Computer Solutions",
    icon: infinite, 
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Developed modular dashboard UIs with Next.js SSR for the Infinite Horizon Employee Portal, reducing perceived load time by 40%.",
      "Designed an Elasticsearch-based search microservice with autocomplete and advanced filters.",
      "Optimized document storage using AWS S3 presigned URLs, cutting upload times by 60%.",
      "Collaborated with UX designers to translate Figma wireframes into pixel-perfect interactive interfaces.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    companyName: "Hippo Toys",
    icon: hippo, 
    iconBg: "#E6DEDD",
    date: "May 2023 - Nov 2023",
    points: [
      "Built a complete checkout flow UI with multi-step forms, Razorpay payment integration, and order tracking.",
      "Designed an admin analytics dashboard handling 10K+ records using TanStack Table with server-side pagination.",
      "Introduced JWT + Google OAuth authentication, improving onboarding efficiency by 20%.",
      "Optimized React performance by implementing code-splitting and lazy loading.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Ujjwal's optimization of our dashboard reduced load times significantly. His attention to detail is unmatched.",
    name: " Ratan Bhooshan",
    designation: "Technical Manager",
    company: "ICS",
  },
  {
    testimonial:
      "He successfully bridged the gap between complex backend logic and a beautiful. His Design's are exceptionaly good for Government Portals;  accessible user interface.",
    name: " Sunil Kumar",
    designation: " Senior Software Engineer",
    company: "ICS",
  },
  {
    testimonial:
      "The Fullstack app Ujjwal contributed to was a game-changer for our business. The checkout process he built is seamless and user-friendly.",
    name: "Sandeep Kumar",
    designation: "Founder",
    company: "Hippo Toys",
  },
];

const projects: TProject[] = [
  {
    name: "UPPCL Analytics",
    description:
      "A data-intensive dashboard for power distribution analytics monitoring 5,000+ meters. Features interactive Visx charts, Redis caching, and RBAC security.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "visx",
        color: "pink-text-gradient",
      },
    ],
    image: UPPCL, // Replace with your actual screenshot later
  },
  {
    name: "BEST ICRS Portal",
    description:
      "Public grievance redressal system serving 2,000+ users. Includes i18next multilingual support, AI chatbot integration, and WCAG 2.1 AA accessibility.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: ICRS, // Replace with your actual screenshot later
  },
  {
    name: "Infinite Horizon",
    description:
      "Employee management portal with Next.js SSR. Features AWS S3 document storage, Elasticsearch for instant retrieval, and modular SSO integration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "aws-s3",
        color: "green-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "pink-text-gradient",
      },
    ],
    image: horizon, // Replace with your actual screenshot later
  },
];

export { services, technologies, experiences, testimonials, projects };