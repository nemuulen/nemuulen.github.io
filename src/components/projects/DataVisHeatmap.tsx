
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
    
    overview:
      "Making climate data actionable: a redesign of static heat stress risk maps into a dynamic, browser-based visualization. The map shows heat stress risk across the United States derived from temperature and humidity, letting users explore heat index categories with real-time control over marker appearance and category filtering.",

    sections: [
      {
        title: "The Design Problem",
        content: (
          <p>
            Heat stress maps are typically published as static images with a fixed colour ramp. That
            works for a climatologist and fails for everyone else - a single frozen view cannot serve
            a public health officer, a city planner, and a resident all asking different questions of
            the same data. The redesign treats the map as an instrument to be adjusted rather than a
            picture to be read.
          </p>
        ),
      },
      {
        title: "What Changed",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Static raster output replaced with an interactive Folium map that can be panned,
                zoomed and queried in the browser
              </li>
              <li>
                Heat index categories made filterable, so a user can isolate only the risk bands they
                care about instead of decoding a dense composite
              </li>
              <li>
                Real-time controls over marker appearance, keeping the map legible at both national
                and local zoom levels
              </li>
              <li>
                Colour treatment revisited so that risk severity reads intuitively and survives
                common forms of colour vision deficiency
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technical Details",
        content: (
          <ul style={{ listStyleType: "disc" }}>
            <li>Programming language: Python</li>
            <li>Data manipulation and mapping: pandas, branca, folium</li>
            <li>Version control: GitHub</li>
          </ul>
        ),
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
