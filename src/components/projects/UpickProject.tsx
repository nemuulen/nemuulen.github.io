/**
 * Upick Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface UpickProjectProps {
  onBack: () => void;
}

export function UpickProject({ onBack }: UpickProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Upick",
    subtitle: "Pin. Identify. Comment. Know.",
    tags: ["React", "Vite", "Supabase", "Product Design", "UI/UX Design"],
    timeline: "Aug 2026 - Present",

    overview:
      "Upick is a Mongolia-first local discovery, reviews, events, and merchant promotion platform. It helps people discover restaurants, cafes, spas, entertainment venues, and camps/getaways through community reviews, saved places, badges, and verified business info. Co-founded and led development of the platform, designing the product architecture, user experience, and core recommendation flows from concept to a functional prototype.",

    sections: [
      {
        title: "My Role",
        content: (
          <p>
            As co-founder, I designed the product architecture, user experience, and core recommendation flows,
            translating user research into technical and product decisions. I led the product from concept to
            functional prototype, coordinating development and iterating on features based on user feedback.
          </p>
        ),
      },
      {
        title: "Consumer Features",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Home feed with category grid, featured places, deals, posts, and recommendations</li>
              <li>Search with mobile-friendly category, price, district, and specialty filters</li>
              <li>Map tab with compact filters and place previews</li>
              <li>Business detail pages with photos, ratings, category-specific score breakdowns, and reviews</li>
              <li>Anonymous commenting with visible badges, and event registration with confirmation flows</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Business Tools",
        content: (
          <p>
            A dedicated business admin experience covering overview analytics, public profile editing, event
            posting, review management with verified-owner replies, activity history, and plan-based account
            settings.
          </p>
        ),
      },
      {
        title: "Technical Details",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Frontend: Vite + React web app</li>
              <li>Backend: Supabase (auth, database, storage)</li>
              <li>Data seeding: Python scraper for initial place data</li>
              <li>Design: custom design system and UI kit built in Figma</li>
            </ul>
          </div>
        ),
      },
    ],

    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/nemuulen/upick",
      },
    ],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
