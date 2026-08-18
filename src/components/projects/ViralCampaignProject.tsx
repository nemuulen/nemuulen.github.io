/**
 * Campus Marketing Campaign Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface ViralCampaignProjectProps {
  onBack: () => void;
}

export function ViralCampaignProject({ onBack }: ViralCampaignProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Campus Marketing Campaign",
    subtitle: "Creative Campus Marketing Competition",
    coverImage: "/images/projects/campaign-ss.png",
    tags: ["Marketing", "Video Editing", "Adobe Premiere Pro", "Campaign Management"],
    timeline: "Jun 2024 - Jul 2024",
    award: "3rd Place - 500,000 MNT Prize",

    overview: "Competed with marketing professionals at a 2-stage campaign pitching competition hosted by Viral Agency, pitching original marketing campaigns for Coca-Cola and UNFAO Mongolia. Earned 3rd place and a 500,000 MNT prize.",

    sections: [
      {
        title: "Campaign Strategy",
        content: <p>Developed and pitched original campaign concepts for two major clients, Coca-Cola and UNFAO Mongolia, combining brand strategy with locally relevant creative execution.</p>,
      },
      {
        title: "Two Very Different Briefs",
        content: (
          <div>
            <p className="mb-3">
              The competition required pitching for two clients whose objectives could hardly be
              further apart, which was the real test:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Coca-Cola</strong> - a global brand with saturated awareness in Mongolia,
                where the task is not recognition but relevance and occasion
              </li>
              <li>
                <strong>UNFAO Mongolia</strong> - a UN agency with a behaviour-change and awareness
                mandate, where attention has to be earned rather than bought
              </li>
            </ul>
            <p className="mt-3">
              Moving between commercial and public-interest communication within a single competition
              demanded very different tones, success metrics, and creative strategies.
            </p>
          </div>
        ),
      },
      {
        title: "Production",
        content: (
          <p>
            Produced supporting digital content for the pitches using Adobe Premiere Pro as part of
            the Production &amp; Marketing team at Viral Agency, where I also produced five digital
            content pieces for major Mongolian corporations and assisted in drafting campaign
            proposals.
          </p>
        ),
      },
      {
        title: "Result",
        content: (
          <p>
            Placed 3rd with a 500,000 MNT prize in a two-stage pitching competition - competing as a
            student against working marketing professionals.
          </p>
        ),
      },
    ],

    links: [],
    documents: [],
    gallery: ["/images/projects/campaign-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
