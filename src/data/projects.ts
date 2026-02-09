export interface Project {
  id: string;
  title: string;
  description: string;
  category:
    | "web"
    | "app"
    | "design"
    | "class"
    | "others"
    | "all";
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  timeline?: string;
  funding?: string;
  award?: string;
  detailPage?: string; // Internal route to project detail page
}

export const projects: Project[] = [
  {
    id: "radikal",
    title: "RADIKAL",
    description:
      "AI-powered Chinese character learning app designed to help students master radicals through personalized learning paths and interactive story-making. Secured ¥15,000 CNY in seed funding and tested with 100+ students.",
    category: "app",
    tags: [
      "React Native",
      "AI Integration",
      "Figma",
      "Supabase",
      "Mobile UI/UX",
    ],
    image:
      "https://images.unsplash.com/photo-1583389409210-0234eee7cdce?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://example.com/radikal-demo",
    githubUrl: "https://github.com/yourusername/radikal",
    featured: true,
    timeline: "Apr 2025 - Present",
    funding: "¥15,000 CNY Seed Funding",
  },
  {
    id: "challo",
    title: "Challo",
    description:
      "Community building and wellbeing initiative developed as a Millennium Fellow. Selected from 60,000+ applicants worldwide. Built interactive prototypes and engaged with UN leaders on social impact project management.",
    category: "app",
    tags: [
      "React Native",
      "Figma",
      "UI/UX Design",
      "Social Impact",
      "Community Building",
    ],
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "https://example.com/challo-demo",
    githubUrl: "https://github.com/yourusername/challo",
    featured: true,
    timeline: "Aug 2025 - Dec 2025",
    award: "UN Millennium Fellowship",
  },
  {
    id: "aid-ai",
    title: "AID-AI",
    description:
      "AI-powered emergency medical response application with multi-modal capabilities including image and voice recognition, and facial recognition for patient identification. Built during 24-hour hackathon.",
    category: "app",
    tags: [
      "AI/ML",
      "Xcode",
      "Voice Recognition",
      "Image Processing",
      "Swift",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/aid-ai-demo",
    githubUrl: "https://github.com/yourusername/aid-ai",
    featured: true,
    timeline: "Jan 2024",
    award: "2nd Prize - DKU Hackathon",
  },
  {
    id: "dku-intersections",
    title: "DKU Intersections Website",
    description:
      "Redesigned and maintained the Duke Kunshan University Intersections website using WordPress and Figma. Created visually appealing graphics aligned with university brand guidelines while ensuring cross-platform consistency.",
    category: "web",
    tags: [
      "WordPress",
      "Figma",
      "Web Design",
      "Graphic Design",
      "Brand Identity",
    ],
    image:
      "https://sites.duke.edu/intersections/files/2023/09/a-journal-of-language-culture-and-ideas.jpg",
    demoUrl: "https://sites.duke.edu/intersections/",
    featured: false,
    timeline: "Sep 2024 - Present",
  },
  {
    id: "viral-campaign",
    title: "Campus Marketing Campaign",
    description:
      "Earned 3rd place with 500,000 MNT prize in Creative Campus Marketing Competition.",
    category: "design",
    tags: [
      "Marketing",
      "Video Editing",
      "Adobe Premiere Pro",
      "Campaign Management",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/campaign-showcase",
    featured: false,
    timeline: "Jun 2023 - Jul 2023",
    award: "3rd Place - 500,000 MNT Prize",
  },
  {
    id: "data-visualization",
    title: "Data Visualization: International Student Flow",
    description:
      "Analyzed survey data from DKU students using Excel and Power BI to identify trends in entrepreneurship program participation. Researched global best practices and prepared detailed reports for university leadership.",
    category: "design",
    tags: [
      "Python",
      "Data Visualization",
      "Research",
      "Data Analysis",
      "Data processing",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/data-analysis-report",
    featured: false,
    timeline: "Feb 2024 - May 2024",
  },
  {
    id: "loreal-brandstorm",
    title: "L'Oréal Brandstorm 2025",
    description:
      "Participated in L'Oréal's global business innovation competition, developing creative solutions for real-world marketing challenges. Earned exhibition certificate for innovative approach to brand strategy.",
    category: "design",
    tags: [
      "Business Innovation",
      "Strategy",
      "Presentation",
      "Design Thinking",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/loreal-presentation",
    featured: false,
    timeline: "2025",
    award: "Exhibition Certificate",
  },
  {
    id: "computer-graphics",
    title: "Interactive 3D Graphics",
    description:
      "Built interactive graphics and a game as part of Computer Graphics coursework.",
    category: "class",
    tags: [
      "Computer Graphics",
      "Processing IDE",
      "Java",
      "Game",
    ],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/3d-graphics-demo",
    githubUrl:
      "https://github.com/yourusername/computer-graphics",
    featured: false,
    timeline: "Fall 2024",
  },
  {
    id: "iot-project",
    title: "IoT Physical Computing",
    description:
      "Designed and prototyped interactive IoT devices using Arduino for the Interaction and Physical Computing course. Created hardware-software integrations that respond to user input and environmental sensors.",
    category: "class",
    tags: [
      "Arduino",
      "IoT",
      "Hardware",
      "Sensors",
      "Physical Computing",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    demoUrl: "https://example.com/iot-showcase",
    githubUrl: "https://github.com/yourusername/iot-project",
    featured: false,
    timeline: "Spring 2024",
  },
];