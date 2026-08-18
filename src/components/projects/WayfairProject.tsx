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
            The externship centred on designing and reasoning about AI agents applied to business
            intelligence use cases - translating messy business questions into structured,
            agent-driven workflows that support faster and more reliable decision-making.
          </p>
        ),
      },
      {
        title: "Why Agents for BI",
        content: (
          <p>
            Business intelligence at retail scale is rarely limited by a shortage of data. It is
            limited by the distance between the question someone actually asks and the query that
            would answer it. Agent engineering is interesting here precisely because that gap is a
            reasoning problem rather than a dashboard problem - the agent has to decompose an
            ambiguous request, choose the right sources, and be honest about what it cannot
            determine.
          </p>
        ),
      },
      {
        title: "What I Took From It",
        content: (
          <p>
            The programme connected directly to work I was already doing. RADIKAL leans on LLMs for
            generative content, and the same discipline applies in both settings: models are
            unreliable narrators, so most of the engineering effort goes into constraining them -
            grounding outputs in real data, validating before anything reaches a user, and designing
            for the cases where the model is confidently wrong.
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
