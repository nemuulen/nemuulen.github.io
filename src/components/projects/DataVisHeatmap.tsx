
import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface DataVisHeatmapProjectProps {
  onBack: () => void;
}

export function DataVisHeatmapProject({ onBack }: DataVisHeatmapProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Redesigning Heat Stress Risk Maps",
    subtitle: "INFOSCI301 Midterm Project",
    coverImage: "https://github.com/nemuulen/heat_stress_data_visualization/raw/main/Project_poster.png",
    tags: ["Data Visualization","Python", "Research", "Analytics"],
    timeline: "Feb 2024 - May 2024",
    
    overview: "This repository focuses on redesigning existing spatial data into a dynamic and browser-based visualization using design principles.",
    
    sections: [
      {
        title: "Features",
        content: <p> This repository focuses on redesigning existing spatial data into a dynamic and browser-based visualization using design principles. The redesigned map shows heat stress risks across the United States using temperature and humidity data. This interactive Folium-based map helps users explore heat index categories with real-time controls for marker appearance, category filtering, and more!</p>,
      },
      {
        title: "Technical details",
        content: <p> <ul style={{ listStyleType: "disc" }}>
        <li> Programming Language: Python </li>
        <li> Data Manipulation: pandas, branca, folium </li>
        <li> Version Control: GitHub</li>
        </ul></p>,
      },
    ],
    
    links: [
      {
        label: "Github Repository",
        url: "https://github.com/nemuulen/heat_stress_data_visualization",
      },
    ],
    documents: [],
    gallery: [],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
