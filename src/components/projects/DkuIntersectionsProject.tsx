/**
 * DKU Intersections Website Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface DkuIntersectionsProjectProps {
  onBack: () => void;
}

export function DkuIntersectionsProject({ onBack }: DkuIntersectionsProjectProps) {
  const projectData: ProjectDetailData = {
    title: "DKU Intersections Website",
    subtitle: "University Website Redesign & Maintenance",
    coverImage: "https://sites.duke.edu/intersections/files/2023/09/a-journal-of-language-culture-and-ideas.jpg",
    tags: ["WordPress", "Figma", "Web Design", "Graphic Design", "Brand Identity"],
    timeline: "Sep 2024 - Present",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Design Process",
        content: <p>Updating Soon</p>,
      },
      {
        title: "WordPress Implementation",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Brand Guidelines",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [
      {
        label: "Visit Website",
        url: "https://dukekunshan.edu.cn/intersections",
      },
    ],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
