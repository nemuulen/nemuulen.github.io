/**
 * Wayfair AI Agent Engineering Externship - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface WayfairProjectProps {
  onBack: () => void;
}

export function WayfairProject({ onBack }: WayfairProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Wayfair AI Agent Engineering Externship",
    subtitle: "AI Agent Engineering for Business Intelligence",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    tags: ["AI Agents", "Business Intelligence", "Generative AI"],
    timeline: "Jun 2026 - Aug 2026",
    award: "Wayfair Externship Certificate",

    overview:
      "A remote externship with Wayfair (Boston, Massachusetts) focused on AI Agent Engineering for Business Intelligence. The program explored how agentic AI workflows can be applied to real business intelligence problems, from data analysis to decision support, at enterprise scale.",

    sections: [
      {
        title: "Focus Areas",
        content: (
          <p>
            The externship centered on designing and reasoning about AI agents applied to business intelligence
            use cases - translating messy business questions into structured, agent-driven workflows that support
            faster and more reliable decision-making.
          </p>
        ),
      },
    ],

    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
