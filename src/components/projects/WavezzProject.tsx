/**
 * Wavezz Project Detail Page
 *
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface WavezzProjectProps {
  onBack: () => void;
}

export function WavezzProject({ onBack }: WavezzProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Wavezz",
    subtitle: "Community Building & Wellbeing Initiative",
    coverImage: "/images/projects/wavezz.png",
    tags: ["Figma", "UI/UX Design", "Social Impact", "Community Building", "Wellbeing"],
    timeline: "Aug 2025 - Present",
    award: "UN Millennium Fellowship",

    overview:
      "Wavezz is a community building and wellbeing initiative developed during the Millennium Fellowship, a civic leadership program run by United Nations Academic Impact and the Millennium Campus Network. The project explores how digital community engagement and personal productivity can help students sustain everyday wellbeing habits through social motivation and lightweight structure.",

    sections: [
      {
        title: "The Millennium Fellowship",
        content: (
          <p>
            Selected as a Millennium Fellow from over 60,000 applicants worldwide through United
            Nations Academic Impact and the Millennium Campus Network. The fellowship combined
            structured civic leadership training with webinars led by UN leaders, which shaped the
            project management and social impact strategy behind Wavezz.
          </p>
        ),
      },
      {
        title: "Design & Prototyping",
        content: (
          <div>
            <p className="mb-3">
              Built interactive prototypes for the digital wellness platform using Figma. The beta
              concept was shaped by problem-discovery research and market analysis into early
              feature directions:
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
            The premise behind Wavezz is that wellbeing habits fail privately and succeed socially.
            Most habit trackers treat consistency as a solo discipline problem; Wavezz treats it as a
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
            shaped Wavezz into something deliberately narrow rather than an everything-app for
            wellbeing.
          </p>
        ),
      },
    ],

    links: [],
    documents: [],
    gallery: ["/images/projects/wavezz.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
