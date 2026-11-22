// Single source of truth for all site content.
// To update the site, edit this file — components just render it.

export const profile = {
  name: "Jake Jendzurski",
  firstName: "Jake",
  eyebrow: "Software Engineer · UMD CS '27",
  tagline: "Backend, AI, and distributed systems engineer.",
  email: "jakeski5@terpmail.umd.edu",
  linkedin: "https://www.linkedin.com/in/jake-jendzurski",
  github: "https://github.com/jakeski2015",
  // Set to "/resume.pdf" (and add public/resume.pdf) to show the Resume button.
  resumeUrl: undefined as string | undefined,
};

export const about: string[] = [
  "Hi, I'm Jake, a senior studying Computer Science at the University of Maryland, College Park. I'm a software engineer focused on backend, AI, and distributed systems, with experience at Amazon, Bloomberg, Snapchat, and Forkcast.",
  "Outside of my career, I spend my time climbing ranks: Diamond in Brawlhalla for 5+ years, Immortal in Valorant, and a Ranked Bedwars sweat. It started with .io games on an old laptop when I was 13, where I won multiple international tournaments.",
  "I'm driven by chasing the next achievement and solving novel problems, wherever that leads. If that's what you're looking for, reach out.",
];

export type Job = {
  company: string;
  url?: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Amazon",
    role: "Software Development Intern",
    location: "Seattle, WA",
    dates: "Sep 2026 – Present",
    bullets: [
      "Built a new backend for frontend service from scratch as the sole engineer",
      "Enabled automated testing for thousands of case resolution workplans, projected to cut app developers' manual review by over 90%",
      "Quickly migrated 25 APIs in two weeks, each rolled out gradually with A/B testing",
    ],
    tech: ["Java", "AWS Lambda", "AWS CDK", "Cognito"],
  },
  {
    company: "Bloomberg",
    role: "Software Engineer Intern",
    location: "New York, NY",
    dates: "Jun – Aug 2026",
    bullets: [
      "Enabled advanced testing on the open-source BlazingMQ, finding 50+ bugs",
      "Built a chaos testing framework for a seven node cluster that found 10+ bugs in one night",
      "Led org wide adoption of fuzz testing: 30+ fuzz tests, 20+ bugs, nightly CI runs",
    ],
    tech: ["C++", "Docker", "Pumba", "LibFuzzer"],
  },
  {
    company: "Forkcast",
    url: "https://forkcast.fit/",
    role: "Founding Software Engineer",
    location: "Washington, D.C.",
    dates: "Apr 2026 – Present",
    bullets: [
      "One of 6 engineers on a 8 person startup piloting with 10+ restaurants in the DMV area",
      "Our forecasts projected $15K+ in savings for our first pilot restaurant in one season",
      "Owned fuzzy menu matching (cut manual work by 95%+), an ROI analytics pipeline, and several product views",
    ],
    tech: ["Python", "TypeScript", "Claude API"],
  },
  {
    company: "Snap Inc.",
    role: "Software Engineer Intern",
    location: "Santa Monica, CA",
    dates: "May – Aug 2025",
    bullets: [
      "Cut duplicate Jira reports by 37% with LLM-embedding similarity search over 20K+ reports",
      "Reached ~90% recall and 95% precision, measured with an offline evaluation framework I built",
      "Served it through gRPC to internal tools across Snap",
    ],
    tech: ["Python", "Vertex AI", "PostgreSQL", "gRPC"],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "Python", "C++", "TypeScript", "Kotlin", "C", "SQL"] },
  {
    label: "Tools & Frameworks",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "gRPC", "REST", "Node.js", "React"],
  },
  {
    label: "Focus Areas",
    items: ["Backend Infrastructure", "Distributed Systems", "API Design", "CI/CD", "Testing & Fuzzing", "Applied AI"],
  },
];

export const education = {
  school: "University of Maryland, College Park",
  degree: "B.S. in Computer Science",
  dates: "Expected May 2027",
  gpa: "3.7",
  courses: ["Algorithms", "Advanced Data Structures", "Analysis of Algorithms", "Computer Architecture", "Compilers", "Language Theory", "Object Oriented Programming", "Probability Theory"],
};
