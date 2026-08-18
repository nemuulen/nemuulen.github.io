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
    timeline: "Aug 2024 - Dec 2025",
    
    overview: "Intersections: A Journal of Language, Culture, and Ideas is an online magazine featuring writing in Chinese and English by members of the Duke Kunshan community.",
    
    sections: [
      {
        title: "My Role",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Developed and maintained the club website in WordPress, updating 20+ pages with
                student articles and multimedia content
              </li>
              <li>Redesigned and debugged the site layout for consistency across devices</li>
              <li>
                Organised campus-wide showcases to attract new writers and grow readership
              </li>
              <li>
                Designed promotional posters and digital content in Canva and Adobe Illustrator,
                aligned to university brand guidelines
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "The Editorial Challenge",
        content: (
          <p>
            Intersections publishes in both Chinese and English, which makes layout consistency
            genuinely difficult - the two scripts have different line heights, character density and
            reading rhythms, and a template tuned for one tends to look wrong in the other. A large
            part of the maintenance work was keeping bilingual articles legible and visually
            coherent within a single WordPress theme.
          </p>
        ),
      },
      {
        title: "Beyond Publishing",
        content: (
          <p>
            A student journal only works if writers keep submitting, so the role was as much
            community-building as web development. Running showcases and designing promotional
            material for them mattered to the site's health just as much as the pages themselves.
          </p>
        ),
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
