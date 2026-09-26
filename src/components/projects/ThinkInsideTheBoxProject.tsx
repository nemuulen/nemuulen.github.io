/**
 * TOTB / ThinkInsideTheBox Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface ThinkInsideTheBoxProjectProps {
  onBack: () => void;
}

export function ThinkInsideTheBoxProject({ onBack }: ThinkInsideTheBoxProjectProps) {
  const projectData: ProjectDetailData = {
    title: "TOTB",
    subtitle: "ThinkInsideTheBox | AI-Driven Ideation Platform",
    coverImage: "/images/projects/think-inside-the-box.png",
    tags: [
      "AI Product",
      "Product Strategy",
      "Ideation",
      "Startup Tools",
      "UX Architecture",
    ],
    timeline: "Sep 2026 - Present",

    overview:
      "ThinkInsideTheBox is an AI-driven ideation platform designed to help people turn early creative ideas into structured startup workflows. The project centers on a constraint-based ideation framework: instead of asking users to brainstorm from a blank page, it guides them through focused prompts, planning structure, and AI-assisted next steps.",

    sections: [
      {
        title: "Product Vision",
        content: (
          <p>
            The goal is to make early-stage ideation more actionable. Many startup ideas begin as
            loose inspiration, but stall before they become testable concepts. ThinkInsideTheBox
            frames creativity through useful constraints so users can move from initial concept to
            problem definition, audience, value proposition, and execution plan.
          </p>
        ),
      },
      {
        title: "My Role",
        content: (
          <p>
            As founder, I defined the end-to-end product vision, designed the user-centric ideation
            framework, and architected AI-assisted planning features that transform creative concepts
            into viable business models.
          </p>
        ),
      },
      {
        title: "Core Experience",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Constraint-based prompts that narrow broad ideas into specific problem spaces</li>
              <li>Structured startup workflows for audience, need, solution, differentiation, and risks</li>
              <li>AI-assisted planning that turns rough concepts into business model building blocks</li>
              <li>Guided iteration loops so users can refine ideas instead of treating the first answer as final</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Current Status",
        content: (
          <p>
            The project is in early product definition, with emphasis on the ideation framework,
            user flow, and AI planning architecture before moving into implementation.
          </p>
        ),
      },
    ],

    links: [],
    documents: [],
    gallery: ["/images/projects/think-inside-the-box.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
