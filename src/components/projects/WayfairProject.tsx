/**
 * Wayfair AI Agent Engineering Externship - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface WayfairProjectProps {
  onBack: () => void;
}

export function WayfairProject({ onBack }: WayfairProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Wayfair AI Agent Engineering Externship",
    subtitle: "AI Agent Engineering for Business Intelligence",
    coverImage: "/images/projects/wayfair-market-dashboard.png",
    tags: ["AI Agents", "Business Intelligence", "Market Intelligence", "Generative AI"],
    timeline: "Jun 2026 - Aug 2026",
    award: "Wayfair Externship Certificate",

    overview:
      "A remote externship with Wayfair (Boston, Massachusetts) focused on AI Agent Engineering for Business Intelligence. My final project was a Rugs Market Intelligence AI Agent Demo: a connected set of agents designed to help Wayfair's rugs category team automate trend discovery, monitor competitors, and generate content ideas for shag rugs.",

    sections: [
      {
        title: "Focus Areas",
        content: (
          <p>
            The externship centred on designing and reasoning about AI agents applied to business
            intelligence use cases - translating messy business questions into structured,
            agent-driven workflows that support faster and more reliable decision-making.
          </p>
        ),
      },
      {
        title: "Final Demo: Rugs Market Intelligence",
        content: (
          <div>
            <p className="mb-3">
              The final presentation brought multiple agents into one market intelligence workflow
              for the rugs category team. The demo focused on shag rug trends, competitor pricing,
              assortment monitoring, and brand-aligned content generation.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Search volume for "shag rug" was framed as growing 22% year over year, with spikes
                around neutral high-pile and Moroccan geometric styles
              </li>
              <li>
                Premium shag rug basket size increased when bundled with care-kit accessories such as
                rug pads and stain-guard spray
              </li>
              <li>
                Bold gradient and colour-block designs were positioned as emerging with the 25-35
                audience through TikTok home-makeover signals
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Agent System",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Moodboard Generator:</strong> turns concise design prompts into AI-curated
                visual moodboards for emerging rug styles
              </li>
              <li>
                <strong>Trend Discovery Agent:</strong> analyzes social and design signals to produce
                structured trend reports with visual evidence
              </li>
              <li>
                <strong>Competitor Monitoring Agent:</strong> tracks e-commerce pricing, assortment
                shifts, discounts, and catalog changes across home decor retailers
              </li>
              <li>
                <strong>AI Insights & Content Agent:</strong> converts structured trend and competitor
                data into brand-aligned marketing copy
              </li>
              <li>
                <strong>Market Intelligence Dashboard:</strong> centralizes agent outputs into a live
                command center for category decisions
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Why Agents for BI",
        content: (
          <p>
            Business intelligence at retail scale is rarely limited by a shortage of data. It is
            limited by the distance between the question someone actually asks and the query that
            would answer it. Agent engineering is interesting here precisely because that gap is a
            reasoning problem rather than a dashboard problem - the agent has to decompose an
            ambiguous request, choose the right sources, and be honest about what it cannot
            determine.
          </p>
        ),
      },
      {
        title: "What I Took From It",
        content: (
          <p>
            The programme connected directly to work I was already doing. RADIKAL leans on LLMs for
            generative content, and the same discipline applies in both settings: models are
            unreliable narrators, so most of the engineering effort goes into constraining them -
            grounding outputs in real data, validating before anything reaches a user, and designing
            for the cases where the model is confidently wrong.
          </p>
        ),
      },
      {
        title: "Future Improvements",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Connect SKU performance metrics so trend signals can be tied to real sales data</li>
              <li>Expand social media inputs for earlier trend discovery</li>
              <li>Use predictive demand modeling inside the dashboard feed</li>
              <li>Refine prompts for more brand-aligned and creative content suggestions</li>
            </ul>
          </div>
        ),
      },
    ],

    links: [],
    documents: [
      {
        title: "Externship Certificate",
        description: "Completion certificate issued on August 24, 2026",
        fileName: "wayfair-externship-certificate.pdf",
      },
    ],
    gallery: [
      "/images/projects/wayfair-trend-discovery.png",
      "/images/projects/wayfair-competitor-monitoring.png",
      "/images/projects/wayfair-market-dashboard.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
