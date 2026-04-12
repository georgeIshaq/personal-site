export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: "Legion Health",
    role: "Software Engineer",
    location: "San Francisco, CA",
    period: "Apr 2026 – Present",
    current: true,
    bullets: [],
  },
  {
    company: "Stealth Startup",
    role: "Fullstack Software Engineer Intern",
    location: "San Francisco, CA",
    period: "May – Sep 2025",
    bullets: [
      "Delivered 8 core MVP features — real-time chat, push notifications, listings, and payments — for a mobile-first C2C marketplace.",
      "Built a realtime messaging system with offline sync and conflict resolution, supporting 1K concurrent users and designed for 10K+.",
      "Implemented Stripe Connect payment flows with KYC, conditional disbursement, and idempotency handling for network instability.",
    ],
  },
  {
    company: "Hawsib",
    role: "Software Engineer Intern",
    location: "Bethlehem",
    period: "Apr – Sep 2024",
    bullets: [
      "Developed the hit.ps e-commerce platform, contributing to a site generating over $20K in revenue and 100K+ visits.",
      "Engineered a Python automation bot that streamlined product listing via API calls, improving listing speed by 50%.",
    ],
  },
  {
    company: "Minerva University",
    role: "Cornerstone Curriculum Intern",
    location: "San Francisco, CA",
    period: "Apr – Aug 2023",
    bullets: [
      "Guided 200+ incoming freshmen in Python fundamentals and data analysis, achieving a 95% course pass rate.",
    ],
  },
];
