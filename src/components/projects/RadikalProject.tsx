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
    coverImage: "https://images.unsplash.com/photo-1583389409210-0234eee7cdce?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React Native", "AI Integration", "Figma", "Supabase", "Mobile UI/UX"],
    timeline: "Apr 2025 - Present",
    funding: "¥15,000 CNY Seed Funding",
    
    // ==================== OVERVIEW ====================
    // Replace this with your actual project description
    overview: "Updating Soon - Detailed information about this project will be added here.",
    
    // ==================== CONTENT SECTIONS ====================
    // Add custom sections here - Examples: Features, Technical Details, Challenges, Results
    sections: [
      {
        title: "Key Features",
        content: (
          <div>
            <p className="mb-4">Updating Soon</p>
            {/* Example of how to add content:
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered radical recognition</li>
              <li>Personalized learning paths</li>
              <li>Interactive story-making feature</li>
              <li>Progress tracking and analytics</li>
            </ul>
            */}
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
    
    // ==================== EXTERNAL LINKS ====================
    // Add your project links here
    links: [
      // Uncomment and update when ready:
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
    
    // ==================== DOCUMENTS (PDFs, etc.) ====================
    // Upload files to /public/files/projects/ and list them here
    documents: [
      // Example:
      // {
      //   title: "Project Proposal",
      //   description: "Initial project proposal and planning document",
      //   fileName: "radikal-proposal.pdf", // File should be at /public/files/projects/radikal-proposal.pdf
      // },
      // {
      //   title: "User Research Report",
      //   description: "Findings from user testing with 100+ students",
      //   fileName: "radikal-user-research.pdf",
      // },
    ],
    
    // ==================== IMAGE GALLERY ====================
    // Add more project screenshots/images here
    gallery: [
      // Example:
      // "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      // "/images/projects/radikal-screenshot-1.png",
      // "/images/projects/radikal-screenshot-2.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
