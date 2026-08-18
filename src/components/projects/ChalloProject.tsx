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
          <div>
            <p className="mb-3">
              Built interactive prototypes for the digital wellness platform using Figma and React
              Native. The prototype covers the full loop a member moves through:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Challenge programs</strong> - structured multi-day challenges such as morning
                routines and wellness habits, tracked as progress through a set number of days
              </li>
              <li>
                <strong>Streaks and points</strong> - daily consistency is the core metric, rewarded
                with a running streak count and a points balance
              </li>
              <li>
                <strong>Badges</strong> - unlockable achievements that mark milestones, with locked
                badges visible to signal what is still ahead
              </li>
              <li>
                <strong>Leaderboard</strong> - light competitive framing across the member base
              </li>
              <li>
                <strong>Communities</strong> - interest-based groups so challenges are undertaken
                alongside other people rather than alone
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Why Community",
        content: (
          <p>
            The premise behind Challo is that wellbeing habits fail privately and succeed socially.
            Most habit trackers treat consistency as a solo discipline problem; Challo treats it as a
            belonging problem, pairing each challenge with a group of people doing the same thing at
            the same time. The gamification exists to make that shared effort visible, not to
            manufacture pressure.
          </p>
        ),
      },
      {
        title: "The Fellowship Experience",
        content: (
          <p>
            Beyond building the product, the Millennium Fellowship was a semester-long civic
            leadership curriculum. Sessions with UN leaders covered project management, measuring
            social impact, and scoping an initiative so that it stays achievable - lessons that
            shaped Challo into something deliberately narrow rather than an everything-app for
            wellbeing.
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
