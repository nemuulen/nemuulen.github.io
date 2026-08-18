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
        title: "Production",
        content: <p>Produced supporting digital content for the pitches using Adobe Premiere Pro as part of the Production & Marketing team at Viral Agency.</p>,
      },
    ],

    links: [],
    documents: [],
    gallery: ["/images/projects/campaign-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
