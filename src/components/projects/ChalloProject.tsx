/**
 * Challo Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface ChalloProjectProps {
  onBack: () => void;
}

export function ChalloProject({ onBack }: ChalloProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Challo",
    subtitle: "Community Building & Wellbeing Initiative",
    tags: ["React Native", "Figma", "UI/UX Design", "Social Impact", "Community Building"],
    timeline: "Aug 2025 - Present",
    award: "UN Millennium Fellowship",

    overview:
      "Challo is a community building and wellbeing initiative founded during the Millennium Fellowship, a civic leadership program run by United Nations Academic Impact and the Millennium Campus Network. The project explores how gamified challenges, streaks, and small communities can support everyday wellbeing habits, and is being carried forward as a personal project.",

    sections: [
      {
        title: "The Millennium Fellowship",
        content: (
          <p>
            Selected as a Millennium Fellow from over 60,000 applicants worldwide through United
            Nations Academic Impact and the Millennium Campus Network. The fellowship combined
            structured civic leadership training with webinars led by UN leaders, which shaped the
            project management and social impact strategy behind Challo.
          </p>
        ),
      },
      {
        title: "Design & Prototyping",
        content: (
          <p>
            Built interactive prototypes for the digital wellness platform using Figma and React
            Native, covering challenge programs, streaks and badges, leaderboards, and community
            groups.
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
