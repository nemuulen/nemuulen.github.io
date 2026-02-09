/**
 * AID-AI Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface AidAiProjectProps {
  onBack: () => void;
}

export function AidAiProject({ onBack }: AidAiProjectProps) {
  const projectData: ProjectDetailData = {
    title: "AID-AI",
    subtitle: "AI-Powered Emergency Medical Response Application",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=900&fit=crop",
    tags: ["AI/ML", "Xcode", "Voice Recognition", "Image Processing", "Swift"],
    timeline: "Jan 2024",
    award: "2nd Prize - DKU Hackathon",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "AI Capabilities",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Hackathon Experience",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Technical Challenges",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
