/**
 * IoT Physical Computing Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface IotProjectProps {
  onBack: () => void;
}

export function IotProject({ onBack }: IotProjectProps) {
  const projectData: ProjectDetailData = {
    title: "IoT Physical Computing",
    subtitle: "Interactive IoT Devices with Arduino",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop",
    tags: ["Arduino", "IoT", "Hardware", "Sensors", "Physical Computing"],
    timeline: "Spring 2024",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Hardware Design",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Software Integration",
        content: <p>Updating Soon</p>,
      },
      {
        title: "User Interaction",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
