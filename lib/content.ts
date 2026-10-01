export const profile = {
  name: "Sam Warren",
  role: "Software engineer",
  email: "sam@junctiontech.ca",
  bio: [
    "I’m a full-stack engineer from Victoria, BC. I design and build software for public services and private corporations.",
    "I’ve spent most of my career making government systems easier to use: road safety, health records, emergency support. Today I run Junction and build an energy data platform at Jupiter Power.",
  ],
};

export type Role = {
  company: string;
  href?: string;
  title: string;
  years: string;
  summary: string;
};

export const experience: Role[] = [
  {
    company: "Jupiter Power",
    href: "https://jupiterpower.io",
    title: "Full-stack engineer",
    years: "2026–now",
    summary: "An energy data platform.",
  },
  {
    company: "Junction",
    href: "https://junctiontech.ca",
    title: "Founder",
    years: "2025–now",
    summary: "An independent software consultancy.",
  },
  {
    company: "Vantix Systems",
    href: "https://www.vantixsystems.com",
    title: "Senior software engineer",
    years: "2025–2026",
    summary: "Full-stack work on several Alberta government ministry systems.",
  },
  {
    company: "Quartech",
    href: "https://quartech.com",
    title: "Full-stack developer",
    years: "2019–2025",
    summary: "BC government systems: Health Gateway, RoadSafetyBC forms, InvasivesBC.",
  },
  {
    company: "itgroove",
    title: "Application developer",
    years: "2018",
    summary: "A billing system and a React Native app for logging client time.",
  },
];

export const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samwarrendev" },
  { label: "X", href: "https://x.com/samwarrendev" },
];
