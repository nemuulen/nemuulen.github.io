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
    tags: ["WordPress", "Figma", "Web Design", "Graphic Design", "Web Management", "Canva"],
    timeline: "Sep 2024 - Dec, 2025",
    
    overview: "Intersections: A Journal of Language, Culture, and Ideas is an online magazine featuring writing in Chinese and English by members of the Duke Kunshan community.",
    
    sections: [
      {
        title: "My duties",
        content: <p> Developed and maintained club website using WordPress, updated 20+ pages with student articles and multimedia
        content, redesigned and debugged the website layout. </p>,
      },
    ],
    
    links: [
      {
        label: "Visit the Website",
        url: "https://sites.duke.edu/intersections/",
      },
    ],
    documents: [],
    gallery: ["/images/projects/intersections-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
