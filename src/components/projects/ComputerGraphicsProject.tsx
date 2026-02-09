/**
 * Interactive 3D Graphics Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface ComputerGraphicsProjectProps {
  onBack: () => void;
}

export function ComputerGraphicsProject({ onBack }: ComputerGraphicsProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Interactive 3D Graphics",
    subtitle: "Computer Graphics Coursework Project",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&h=900&fit=crop",
    tags: ["Computer Graphics", "3D Design", "Unity", "C++", "Rendering"],
    timeline: "Fall 2024",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Technical Implementation",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Rendering Techniques",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Learning Outcomes",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
