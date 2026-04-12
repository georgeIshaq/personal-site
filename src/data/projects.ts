export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  award?: string;
  loom?: string;
  loomThumbnail?: string;
}

export const featuredProjects: Project[] = [
  {
    title: "Spark",
    subtitle: "AI-powered game creation platform",
    description:
      "Create video games by describing them in natural language. Started as a 6-hour hackathon prototype, built into a full production platform as my Minerva capstone project. I built all of the agentic code generation — the system that turns prompts into playable games with live preview.",
    tags: ["TypeScript", "Next.js", "Claude AI", "Agentic Code Gen"],
    link: "https://splarve.com",
    award: "YC AI Hackathon Winner",
    loom: "https://www.loom.com/embed/3d13038095c94d01afb2892b81608933",
    loomThumbnail:
      "https://cdn.loom.com/sessions/thumbnails/3d13038095c94d01afb2892b81608933-0afc3200873c1eb4.jpg",
  },
  {
    title: "AppLovin Data Challenge",
    subtitle: "Database query optimization",
    description:
      "Optimized queries on a 245M-row, 20GB dataset. Built pre-aggregated rollup tables in Arrow IPC format with an intelligent query router.",
    tags: ["Python", "Polars", "DuckDB", "Arrow IPC"],
    link: "https://github.com/georgeIshaq/Calhacks_AppLovin_Challenge",
    award: "Cal Hacks x AppLovin",
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
