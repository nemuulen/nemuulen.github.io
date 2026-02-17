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
    title: "Code as Artistic Medium",
    subtitle: "Computer Graphics (CS208) Coursework Project",
    coverImage: "/images/projects/cs208-ss.png",
    tags: ["Computer Graphics", "3D Design", "Processing IDE", "Java", "Game Development", "UI/UX Design"],
    timeline: "Fall 2024",
    
    overview: "Designed and developed computer graphics through the lenses of creative coding, generative design, computer-aided composition, and animation. Built interactive graphics and a game as part of Computer Graphics coursework.",
    
    sections: [
    ],
    
    links: [
      {
        label: "View Project Portfolio",
        url: "https://bilguuns.my.canva.site/cs208-nemuulen-portfolio",
      }
    ],
    documents: [],
    gallery: ["/images/projects/cs208_1.png", "/images/projects/cs208_2.png", "/images/projects/cs208_3.png", "/images/projects/cs208_4.png", "/images/projects/cs208_5.png", "/images/projects/cs208_6.png", "/images/projects/cs208_7.png", "/images/projects/cs208_8.png", "/images/projects/cs208_9.png", "/images/projects/cs208_10.png",  "/images/projects/cs208_11.png", "/images/projects/cs208_12.png", "/images/projects/cs208_13.png", "/images/projects/cs208_14.png", "/images/projects/cs208_15.png", "/images/projects/cs208_16.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
