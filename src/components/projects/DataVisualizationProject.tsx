
import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface DataVisualizationProjectProps {
  onBack: () => void;
}

export function DataVisualizationProject({ onBack }: DataVisualizationProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Global Student Mobility Dashboard: Visualizing International Education Flows and Economic Correlations",
    subtitle: "INFOSCI301 Final Project",
    coverImage: "https://github.com/nemuulen/INFOSCI301_Final_Project/raw/main/301_Nemuulen_Yiqing_Poster.png",
    tags: ["Data Visualization","Python", "Research", "Analytics"],
    timeline: "Feb 2024 - May 2024",
    
    overview: "This project analyzes global trends in international student mobility by examining inbound and outbound student flows across countries over time. Using data from UNESCO and the World Bank, we created an interactive dashboard that visualizes these trends and explores correlations with economic indicators. The dashboard allows users to explore student mobility patterns, identify key source and destination countries, and analyze how economic factors influence international education flows. This project provides insights into the dynamics of global student mobility and its relationship with economic conditions, offering valuable information for policymakers, educators, and researchers in the field of international education.",
    
    sections: [
      {
        title: "Research Questions",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Which countries are the largest senders and receivers of international students, and how does this correlate with their GDP?</li>
              <li>How have student mobility patterns evolved over the past two decades, particularly in relation to economic changes and what is the future direction?</li>
              <li>Are there identifiable regional trends in student migration linked to economic indicators?</li>
            </ul>
          </div>
        ),
      },
      {
        title: "What I learned",
        content: <p>Throughout this project, we experienced a significant learning curve that strengthened both our technical and collaborative capacities. We learned how to manage a complex pipeline - from sourcing and cleaning international datasets to deploying a live visualization dashboard - while maintaining consistency and clarity in our narrative. Working as a team, we each took on different but interconnected roles in design, analysis, and development, gaining a deeper appreciation for the interdisciplinary nature of data visualization. Our work also challenged us to reflect on broader issues of equity, inclusion, and accessibility in how we communicate data. Importantly, this project helped us connect our academic interests to real-world challenges, particularly those aligned with the UN Sustainable Development Goals. Through each step, we developed a more critical and creative perspective on how data can inform, inspire, and empower decision-making in global education.</p>,
      },
      {
        title: "Technical details",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Programming Language: Python</li>
              <li>Data Manipulation: pandas</li>
              <li>Data Visualization: plotly, matplotlib</li>
              <li>Web Framework: streamlit</li>
              <li>Development Environment: Google Colab, VS Code</li>
              <li>Version Control: GitHub</li>
            </ul>
          </div>
        ),
      },
    ],
    
    links: [
      {
        label: "Github Repository",
        url: "https://github.com/nemuulen/INFOSCI301_Final_Project",
      },
    ],
    documents: [],
    gallery: ["/images/projects/vis1.png", "/images/projects/vis2.png", "/images/projects/vis3.png",  "/images/projects/vis4.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
