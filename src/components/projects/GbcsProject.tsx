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
    timeline: "Feb 2025 - Present",

    overview:
      "Ongoing remote internship with GBCS Group LTD SkyIT in Calgary, Canada, building responsive, high-performance websites with generative AI woven into the production workflow rather than bolted on at the end.",

    sections: [
      {
        title: "What I Do",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Use generative AI to create custom assets, then architect and build responsive,
                high-performance websites primarily on Hostinger's WordPress AI Builder
              </li>
              <li>
                Conduct rigorous testing to ensure output meets professional standards of UX and UI,
                rather than shipping AI output unreviewed
              </li>
              <li>
                Manage and optimize the WordPress ecosystem - plugin integration, theme
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
