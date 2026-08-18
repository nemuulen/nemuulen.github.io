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
    coverImage: "/images/projects/gbcs-cover.png",
    tags: [
      "WordPress",
      "Generative AI",
      "Web Development",
      "UI/UX Testing",
      "Hostinger",
    ],
    timeline: "Mar 2025 - Jun 2026",

    overview:
      "A remote internship with GBCS Group LTD SkyIT in Calgary, Canada, building responsive, high-performance websites with generative AI woven into the production workflow rather than bolted on at the end. GBCS operates across logistics, shipping, aviation and freight, so the work meant translating a corporate brand with global operations into a fast, credible web presence.",

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
      {
        title: "Working With Generative AI",
        content: (
          <p>
            The interesting constraint of this role was that AI accelerates asset production but has
            no judgement about whether the result is actually good. Generated imagery and copy still
            has to survive a real UX review, hold up against the brand, and perform on a live site.
            Most of the work sat in that gap - deciding what to keep, what to regenerate, and what to
            build by hand instead.
          </p>
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
    gallery: ["/images/projects/gbcs-cover.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
