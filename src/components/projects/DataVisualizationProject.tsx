/**
 * Entrepreneurship Data Analysis Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface DataVisualizationProjectProps {
  onBack: () => void;
}

export function DataVisualizationProject({ onBack }: DataVisualizationProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Entrepreneurship Data Analysis",
    subtitle: "Student Survey Analysis & Insights",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    tags: ["Power BI", "Excel", "Data Visualization", "Research", "Analytics"],
    timeline: "Feb 2024 - May 2024",
    
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    sections: [
      {
        title: "Research Methodology",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Data Analysis & Insights",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Recommendations",
        content: <p>Updating Soon</p>,
      },
    ],
    
    links: [],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
