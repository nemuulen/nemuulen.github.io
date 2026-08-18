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
        title: "Why Mongolia First",
        content: (
          <p>
            Global review platforms cover Mongolia thinly, and the listings that do exist are often
            stale, unverified, or missing the details that actually decide where people go. Upick is
            built for the local market from the ground up - Mongolian-language interface throughout,
            district-level search, category-specific rating breakdowns rather than a single blunt
            star score, and specialty tags that reflect how people here actually choose a place: is
            it quiet, is the Wi-Fi good, is it suitable for working, is there rooftop seating, is it
            a date spot.
          </p>
        ),
      },
      {
        title: "Trust & Data Integrity",
        content: (
          <p>
            A review platform lives or dies on whether its content is real. We set explicit rules
            from the start: only manually collected public facts, owner-submitted official photos,
            official URLs, and original user reviews. Copied reviews, scraped ratings, unauthorised
            photos, and other platforms' user data are all out of bounds. Businesses can reply to
            reviews only once verified, and reviewers can comment anonymously - name and avatar
            hidden, badge still shown - so honest feedback does not carry a social cost in a small
            market where people know each other.
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
              <li>Design: custom design system, tokens and UI kit built in Figma</li>
              <li>Auth: email/password with verification, password reset and strength requirements</li>
              <li>Accessibility and localisation: language and theme switching, replayable onboarding</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Current Status",
        content: (
          <p>
            The app is a functional prototype with both the consumer and business experiences built
            out, including settings, legal pages, and account-deletion flows needed for app store
            review. Production launch still requires completing backend service-role work for final
            account deletion and moderation operations. Delivery, in-app payments, a full booking
            engine, and an AI recommendation engine are deliberately out of scope for the MVP.
          </p>
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
