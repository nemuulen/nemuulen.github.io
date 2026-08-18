/**
 * GBCS Group SkyIT - AI Web Development Internship - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface GbcsProjectProps {
  onBack: () => void;
}

export function GbcsProject({ onBack }: GbcsProjectProps) {
  const projectData: ProjectDetailData = {
    title: "GBCS Group SkyIT",
    subtitle: "AI Web Development Internship",
    tags: [
      "WordPress",
      "Generative AI",
      "Web Development",
      "UI/UX Testing",
      "Hostinger",
    ],
    timeline: "Mar 2025 - Jun 2026",

    overview:
      "A remote internship with GBCS Group LTD SkyIT in Calgary, Canada, building responsive, high-performance websites with generative AI woven into the production workflow rather than bolted on at the end.",

    sections: [
      {
        title: "What I Did",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Used generative AI to create custom assets, then architected and built responsive,
                high-performance websites primarily on Hostinger's WordPress AI Builder
              </li>
              <li>
                Conducted rigorous testing to ensure output met professional standards of UX and UI,
                rather than shipping AI output unreviewed
              </li>
              <li>
                Managed and optimized the WordPress ecosystem - plugin integration, theme
                configuration, and back-end settings - to ensure a seamless live environment
              </li>
            </ul>
          </div>
        ),
      },
    ],

    links: [
      {
        label: "Visit GBCS",
        url: "https://gbcs.com",
      },
    ],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
