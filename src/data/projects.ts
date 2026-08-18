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
  /** Optional. When omitted the card renders a neutral branded placeholder. */
  image?: string;
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
      "Gamified, AI-powered app that turns Chinese character memorization into creative play through radical construction, personal memory notes, and AI-generated stories. Method validated with 66 learners; ¥15,000 CNY seed funded under DKU's Dii programme.",
    category: "app",
    tags: [
      "React Native",
      "Supabase",
      "AI Integration",
      "UI/UX",
      "User research",
    ],
    image:
      "/images/projects/radikal.png",
    featured: true,
    timeline: "Apr 2025 - Present",
    funding: "¥15,000 CNY Seed Funding",
  },
  {
    id: "challo",
    title: "Challo",
    description:
      "Community building and wellbeing initiative developed as a Millennium Fellow, selected from 60,000+ applicants worldwide through UN Academic Impact and the Millennium Campus Network.",
    category: "app",
    tags: [
      "React Native",
      "Figma",
      "UI/UX Design",
      "Social Impact",
      "Community Building",
      "Web design",
    ],
    featured: false,
    timeline: "Aug 2025 - Present",
    award: "UN Millennium Fellowship Certificate",
  },
  {
    id: "aid-ai",
    title: "AID-AI",
    description:
      "AI-powered first aid application with multi-modal capabilities including image and voice recognition, and facial recognition for patient identification. Built during 24-hour hackathon.",
    category: "app",
    tags: [
      "AI/ML",
      "Xcode",
      "Voice Recognition",
      "Image Processing",
      "Swift",
    ],
    image:
      "/images/projects/aid-ai-ss.png",
    featured: false,
    timeline: "Jan 2024",
    award: "2nd Prize - DKU Hackathon",
  },
  {
    id: "dku-intersections",
    title: "DKU Intersections Website",
    description:
      "Redesigned and maintained the Duke Kunshan University Intersections Journal website using WordPress. Created visually appealing graphics aligned with university brand guidelines while ensuring cross-platform consistency.",
    category: "web",
    tags: [
      "WordPress",
      "Web Design",
      "Graphic Design",
      "Web Management",
      "Canva",
    ],
    image:
      "https://sites.duke.edu/intersections/files/2023/09/a-journal-of-language-culture-and-ideas.jpg",
    demoUrl: "https://sites.duke.edu/intersections/",
    featured: true,
    timeline: "Aug 2024 - Dec 2025",
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
      "Campaign Proposal",
    ],
    image:
      "/images/projects/campaign-ss.png",
    featured: false,
    timeline: "Jun 2024 - Jul 2024",
    award: "3rd Place - 500,000 MNT Prize",
  },
  {
    id: "data-visualization",
    title: "Data Visualization: International Student Flow",
    description:
      "Global Student Mobility Dashboard: Visualizing International Education Flows and Economic Correlations.",
    category: "class",
    tags: [
      "Python",
      "Data Visualization",
      "Research",
      "Data Analysis",
      "Data processing",
    ],
    image:
      "https://github.com/nemuulen/INFOSCI301_Final_Project/raw/main/301_Nemuulen_Yiqing_Poster.png",
    demoUrl: "https://github.com/nemuulen/INFOSCI301_Final_Project",
    featured: true,
    timeline: "Feb 2024 - May 2024",
  },
  {
    id: "data-visualization-heatmap",
    title: "Redesigning Heat Stress Risk Maps",
    description:
      "Making Climate Data Actionable: Redesigning Heat Stress Risk Maps for Decision Support",
    category: "class",
    tags: [
      "Python",
      "Data Visualization",
      "Research",
      "Data Analysis",
      "Data processing",
    ],
    image:
      "https://github.com/nemuulen/heat_stress_data_visualization/raw/main/Project_poster.png",
    demoUrl: "https://github.com/nemuulen/heat_stress_data_visualization",
    featured: false,
    timeline: "Feb 2024 - May 2024",
  },
  {
    id: "computer-graphics",
    title: "Code as Artistic Medium",
    description:
      "Designed and developed computer graphics through the lenses of creative coding, generative design, computer-aided composition, and animation. Built interactive graphics and a game as part of Computer Graphics coursework.",
    category: "class",
    tags: [
      "Computer Graphics",
      "Processing IDE",
      "Java",
      "Game",
      "Artistic Coding",
    ],
    image:
      "/images/projects/cs208-ss.png",
    demoUrl: "https://bilguuns.my.canva.site/cs208-nemuulen-portfolio",
    featured: false,
    timeline: "Fall 2024",
  },
  {
    id: "iot-project",
    title: "Interaction & Physical Computing",
    description:
      "Two Arduino builds for INFOSCI201: a sensor-driven desk lamp with a Pomodoro timer in a 3D-printed Mario question-block enclosure, and a two-player racing game inspired by Mongolian shagai, where an Arduino controller drives a Unity scene over serial.",
    category: "class",
    tags: [
      "Arduino",
      "C++",
      "Unity",
      "3D Printing",
      "Sensors",
      "Physical Computing",
    ],
    image: "/images/projects/infosci201-final.png",
    featured: false,
    timeline: "INFOSCI201",
  },
  {
    id: "cs311-chatroom",
    title: "Multi-Client TCP Chatroom with LLM Integration",
    description:
      "Terminal-based multi-client chatroom built on TCP sockets in Python, featuring a human client and an LLM-powered client that behaves like a natural chat participant with timing and personality.",
    category: "class",
    tags: [
      "Python",
      "TCP Sockets",
      "LLM Integration",
      "Networking",
      "Multithreading",
      "Prompt Engineering",
    ],
    image: "/images/projects/cs311_multiclient_chatroom.png",
    githubUrl:
      "https://github.com/kyotoo33/CS311-Multi-client-chatroom-with-LLM-TCP",
    featured: false,
    timeline: "Spring 2026",
  },
  {
    id: "upick",
    title: "Upick",
    description:
      "Mongolia-first local discovery, reviews, events, and merchant promotion platform for restaurants, cafes, spas, and entertainment venues. Co-founded and led product architecture, UX, and recommendation flows from concept to functional mobile app.",
    category: "app",
    tags: [
      "React",
      "Vite",
      "Supabase",
      "Product Design",
      "UI/UX Design",
    ],
    githubUrl: "https://github.com/nemuulen/upick",
    featured: true,
    timeline: "Aug 2026 - Present",
  },
  {
    id: "gbcs-internship",
    title: "GBCS Group SkyIT - AI Web Development",
    description:
      "Internship architecting and building responsive, high-performance company website primarily on Hostinger's WordPress Builder.",
    category: "web",
    tags: [
      "WordPress",
      "Web Development",
      "UI/UX Testing",
      "Hostinger",
      "CSS",
    ],
    image: "/images/projects/gbcs-cover.png",
    demoUrl: "https://gbcs.com",
    featured: false,
    timeline: "Mar 2025 - Jun 2026",
  },
  {
    id: "focus-zone-bracelet",
    title: "Focus Zone Bracelet",
    description:
      "Wearable concept designed to help people struggling with focus and procrastination, developed with a full brand identity and business model under the fictional company 'Synergy' for MEDIART202.",
    category: "class",
    tags: [
      "Product Design",
      "Wearable Tech",
      "Branding",
      "Business Model",
      "Design Research",
      "Prototyping",
    ],
    image: "/images/projects/focus-ss.png",
    featured: false,
    timeline: "MEDIART202 | AY24 S2",
  },
  {
    id: "infosci103-phantom-friend",
    title: "\"Phantom Friend\" or \"Just a Box with Information\"",
    description:
      "Final presentation for INFOSCI103 analyzing Pradhan et al. (2019) on how older adults personify and ontologically categorize smart speaker-based voice assistants.",
    category: "class",
    tags: [
      "HCI",
      "Research Analysis",
      "Presentation",
    ],
    image: "/images/projects/infosci103-ss.png",
    featured: false,
    timeline: "INFOSCI103 | Midterm",
  },
  {
    id: "infosci103-final",
    title: "Unmasking Depression",
    description:
      "Social computing research examining whether online social network activity can indicate depressive symptoms, with an original study design applying the question to Mongolian university students through emoji use.",
    category: "class",
    tags: [
      "Social Computing",
      "Research Design",
      "Literature Review",
      "Mental Health",
      "Data Ethics",
    ],
    image: "/images/projects/unmaskingdepression.png",
    featured: false,
    timeline: "INFOSCI103 | Final",
  },
  {
    id: "wayfair-externship",
    title: "Wayfair AI Agent Engineering Externship",
    description:
      "Externship program applying AI agent engineering to real-world business intelligence problems at Wayfair, exploring agentic workflows and generative AI for enterprise decision-making.",
    category: "others",
    tags: [
      "AI Agents",
      "Business Intelligence",
      "Generative AI",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    featured: false,
    timeline: "Jun 2026 - Aug 2026",
    award: "Wayfair Externship Certificate",
  },
];