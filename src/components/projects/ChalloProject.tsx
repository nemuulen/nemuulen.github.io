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
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop",
    tags: ["React Native", "Figma", "UI/UX Design", "Social Impact", "Community Building"],
    timeline: "Aug 2025 - Dec 2025",
    award: "UN Millennium Fellowship",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Project Goals",
        content: <p>Updating Soon</p>,
      },
      {
        title: "UN Millennium Fellowship",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Community Impact",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
