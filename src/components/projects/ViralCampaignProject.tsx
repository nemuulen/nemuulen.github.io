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
    subtitle: "Nationwide University Campaign Across Mongolia",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
    tags: ["Marketing", "Video Editing", "Adobe Premiere Pro", "Campaign Management"],
    timeline: "Jun 2023 - Jul 2023",
    award: "3rd Place - 500,000 MNT Prize",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Campaign Strategy",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Execution Across 10+ Campuses",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Results & Impact",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
