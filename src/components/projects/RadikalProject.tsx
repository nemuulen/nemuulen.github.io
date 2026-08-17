/**
 * RADIKAL Project Detail Page
 * 
 * 🎨 How to Customize:
 * 1. Update the `overview` text with your project description
 * 2. Add more sections in the `sections` array (e.g., Features, Challenges, Results)
 * 3. Add external links in the `links` array
 * 4. Upload PDFs to /public/files/projects/ and list them in `documents`
 * 5. Add more images to the `gallery` array
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";
import { ExternalLink, Github } from "lucide-react";

interface RadikalProjectProps {
  onBack: () => void;
}

export function RadikalProject({ onBack }: RadikalProjectProps) {
  const projectData: ProjectDetailData = {
    // ==================== PROJECT INFO ====================
    title: "RADIKAL",
    subtitle: "AI-Powered Chinese Character Learning App",
    coverImage: "/images/projects/radikal.png",
    tags: ["React Native", "AI Integration", "Figma", "Supabase", "Mobile UI/UX"],
    timeline: "Apr 2025 - Present",
    funding: "¥15,000 CNY Seed Funding",
    
    // ==================== OVERVIEW ====================
    overview: "Our project addresses a critical gap in the Chinese language learning market by creating a gamified, AI-enhanced application that revolutionizes character and word memorization. While existing solutions follow rigid curricula with limited content flexibility, our platform empowers independent learners to explore topics of personal interest through creative, interactive memorization techniques. By combining game mechanics with personalized AI assistance, we transform the traditionally challenging process of Chinese character acquisition into an engaging experience where learners create meaningful connections between characters, meanings, and pronunciations. This approach not only improves retention rates but promotes deeper cultural understanding and linguistic curiosity. With the growing global interest in Chinese language and culture, our solution arrives at an optimal time to capture market share in the educational technology sector." ,
    
    // ==================== CONTENT SECTIONS ====================
    sections: [
      {
        title: "Key words",
        content: (
          <div>
            <p className="mb-4">Mandarin Chinese, character radical, personalized, gamification, Artificial intelligence</p>
          </div>
        ),
      },
      {
        title: "Key Features",
        content: (
          <div>
            <p className="mb-4">Our platform differentiates itself through gamified learning mechanics, personalized memory association, AI-powered assistance, and interactive character construction, functioning as a flexible supplement to existing Chinese language education. We estimate our addressable market at approximately 150 million learners worldwide.</p>
          </div>
        ),
      },
      {
        title: "Technical Implementation",
        content: <p>Updating Soon</p>,
      },
      {
        title: "Impact & Results",
        content: <p>Updating Soon</p>,
      },
    ],

    links: [
      // {
      //   label: "View Demo",
      //   url: "https://your-demo-url.com",
      //   icon: <ExternalLink className="w-4 h-4" />,
      // },
      // {
      //   label: "GitHub Repository",
      //   url: "https://github.com/yourusername/radikal",
      //   icon: <Github className="w-4 h-4" />,
      // },
    ],
    

    documents: [
      {
        title: "Project Proposal",
        description: "Initial project proposal and planning document by Team WISION",
        fileName: "radikal-proposal.pdf",
      },
    ],
    
    // ==================== IMAGE GALLERY ====================
    // Add more project screenshots/images here
    gallery: [
      // "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "/images/projects/radikal.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
