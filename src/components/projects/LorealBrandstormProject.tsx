/**
 * L'Oréal Brandstorm 2025 Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface LorealBrandstormProjectProps {
  onBack: () => void;
}

export function LorealBrandstormProject({ onBack }: LorealBrandstormProjectProps) {
  const projectData: ProjectDetailData = {
    title: "L'Oréal Brandstorm 2025",
    subtitle: "Global Business Innovation Competition",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop",
    tags: ["Business Innovation", "Strategy", "Presentation", "Design Thinking"],
    timeline: "2025",
    award: "Exhibition Certificate",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Competition Challenge",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Our Solution",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Presentation & Results",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
