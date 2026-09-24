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
      "A remote internship with GBCS Group LTD SkyIT in Calgary, Canada, architecting and deploying a responsive company introduction website on Hostinger's WordPress. GBCS operates across logistics, shipping, aviation and freight, so the work meant translating a corporate brand with global operations into a fast, credible web presence across desktop, tablet, and mobile.",

    sections: [
      {
        title: "What I Did",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Architected and deployed a responsive company introduction website on Hostinger's
                WordPress
              </li>
              <li>
                Executed mobile and tablet orientation fixes and visual optimization to ensure
                cross-device consistency
              </li>
              <li>
                Completed continuous UI/UX reviews in direct collaboration with company executive
                leadership and refined pages to improve delivery of core messages
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
        url: "https://gbcsgroup.com/",
      },
    ],
    documents: [],
    gallery: ["/images/projects/gbcs-cover.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
