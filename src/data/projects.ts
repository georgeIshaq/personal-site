export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  award?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Spark",
    subtitle: "AI-powered game creation platform",
    description:
      "A sophisticated platform that enables anyone to create video games through natural language. Evolved from a 6-hour hackathon prototype into a full production system with AI code generation, live preview, asset creation, and version control.",
    tags: ["TypeScript", "Next.js", "Claude AI", "MCP"],
    link: "https://github.com/georgeIshaq/gameBuilder",
    award: "YC AI Hackathon Winner — 2nd place overall, 100+ teams. Guaranteed YC interview.",
  },
  {
    title: "AppLovin Data Challenge",
    subtitle: "1,600x database query optimization",
    description:
      "Optimized queries on a 245M-row, 20GB dataset from 62 seconds down to 39 milliseconds. Built pre-aggregated rollup tables in Arrow IPC format with an intelligent query router achieving 80-90% cache hit rates.",
    tags: ["Python", "Polars", "DuckDB", "Arrow IPC"],
    link: "https://github.com/georgeIshaq/Calhacks_AppLovin_Challenge",
    award: "Cal Hacks x AppLovin Challenge",
  },
];

export interface Award {
  title: string;
  event: string;
  placement: string;
  year: string;
}

export const awards: Award[] = [
  {
    title: "GameForge",
    event: "Y Combinator AI Coding Agents Hackathon",
    placement: "2nd place overall + Game Genesis track winner",
    year: "2025",
  },
  {
    title: "RainForce",
    event: "Agents in The Loop Hackathon",
    placement: "1st place + N8N track winner",
    year: "2025",
  },
  {
    title: "Medibot",
    event: "Stanford TreeHacks",
    placement: "3rd place, InterSystems ML category",
    year: "2023",
  },
];
