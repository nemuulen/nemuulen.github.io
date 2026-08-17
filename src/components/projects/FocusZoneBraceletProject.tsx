/**
 * Focus Zone Bracelet (MEDIART202) - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface FocusZoneBraceletProjectProps {
  onBack: () => void;
}

export function FocusZoneBraceletProject({ onBack }: FocusZoneBraceletProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Focus Zone Bracelet",
    subtitle: "MEDIART202 | AY24 S2",
    coverImage: "/images/projects/focus-ss.png",
    tags: [
      "Product Design",
      "Wearable Tech",
      "Branding",
      "Business Model",
      "Design Research",
    ],
    timeline: "MEDIART202 | AY24 S2",

    overview:
      "A wearable product concept designed to support people who struggle with sustained attention and procrastination. Developed as a team project with Xinyan Lin, the Focus Zone Bracelet was presented as the flagship product of 'Synergy' - a design-and-technology venture built around the idea that assistive tools should be as fashionable as they are functional.",

    sections: [
      {
        title: "The Brand: Synergy",
        content: (
          <div>
            <p className="mb-3">
              Synergy was founded on the vision of making life easier through design and technology.
              Its mission is to solve problems and improve quality of life by designing innovative,
              fashionable, and easy-to-use gadgets integrated with technology.
            </p>
            <p>
              The logo expresses the synergy between design and technology, with a gradient color
              palette denoting an innovative and interdisciplinary approach.
            </p>
          </div>
        ),
      },
      {
        title: "Design Approach",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Integration of fashion and technology</strong> - bridging the gap between
                usability and aesthetics so assistive wearables feel like accessories, not medical devices
              </li>
              <li>
                <strong>User-focused design</strong> - grounding the concept in the real needs,
                preferences, and frustrations of people who struggle to concentrate
              </li>
              <li>
                <strong>Iterative validation</strong> - market research and user testing built into the
                development process rather than treated as an afterthought
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Business Model",
        content: (
          <p>
            The process book develops a full business model canvas for the product, covering value
            propositions, key activities and partners, customer relationships and segments, distribution
            channels, and cost structure - spanning an e-commerce platform, flagship physical stores,
            retail partnerships, and social media-driven brand building.
          </p>
        ),
      },
    ],

    links: [],
    documents: [
      {
        title: "Project Process Book",
        description: "Full design process, brand identity, and business model",
        fileName: "focus-zone-bracelet-process-book.pdf",
      },
    ],
    gallery: ["/images/projects/focus-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
