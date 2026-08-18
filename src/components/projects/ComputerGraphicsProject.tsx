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
    
    overview:
      "Coursework exploring code as an artistic medium rather than purely a functional tool. Across the semester I designed and developed computer graphics through creative coding, generative design, computer-aided composition, and animation - building interactive graphics and a playable game in Processing.",

    sections: [
      {
        title: "Approach",
        content: (
          <p>
            The premise of the course is that a program can be a piece of visual art in its own
            right. Rather than drawing a fixed image, you write the rules that generate it - then
            adjust parameters, randomness and repetition until something unexpected emerges. Much of
            the work involved deliberately giving up direct control and designing the system that
            produces the outcome instead.
          </p>
        ),
      },
      {
        title: "Areas Covered",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Creative coding</strong> - drawing with loops, trigonometry and colour theory
                in Processing
              </li>
              <li>
                <strong>Generative design</strong> - rule-based compositions where randomness and
                iteration produce results that are never identical twice
              </li>
              <li>
                <strong>Computer-aided composition</strong> - using code to explore layout, symmetry
                and repetition faster than by hand
              </li>
              <li>
                <strong>Animation</strong> - motion driven by frame-based state and easing
              </li>
              <li>
                <strong>Interaction</strong> - responding to mouse and keyboard input, culminating in
                a playable game
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Gallery",
        content: (
          <p>
            The images below are selected outputs from across the semester, spanning generative
            pattern studies, colour and composition experiments, and stills from the interactive
            pieces. The full portfolio, with process notes for each piece, is linked above.
          </p>
        ),
      },
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
