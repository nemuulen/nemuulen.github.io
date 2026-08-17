/**
 * AID-AI Project Detail Page
 * 
 * 🎨 How to Customize: See RadikalProject.tsx for detailed instructions
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface AidAiProjectProps {
  onBack: () => void;
}

export function AidAiProject({ onBack }: AidAiProjectProps) {
  const projectData: ProjectDetailData = {
    title: "AID-AI",
    subtitle: "AI-Powered Emergency Medical Response Application",
    coverImage: "/images/projects/aid-ai-ss.png",
    tags: ["AI/ML", "Xcode", "Voice Recognition", "Image Processing", "Swift"],
    timeline: "Jan 2024",
    award: "2nd Prize - DKU Hackathon",

    overview: "AID-AI is an AI-powered first aid application built within a 24-hour hackathon, designed to guide bystanders through emergency medical response using multi-modal AI. The app combines image and voice recognition with facial recognition for patient identification, helping users react quickly and correctly in emergency situations.",

    sections: [
      {
        title: "AI Capabilities",
        content: <p>The app integrates multi-modal recognition, using image processing to identify visible injuries, voice recognition to let users describe symptoms hands-free, and facial recognition to help identify patients for medical records and follow-up care.</p>,
      },
      {
        title: "Hackathon Experience",
        content: <p>Built as part of the DKU Hackathon, the team prototyped, tested, and integrated all features in Xcode within the 24-hour time limit, earning 2nd Prize for the project.</p>,
      },
    ],

    links: [],
    documents: [
      {
        title: "Introducing Aid.AI",
        description: "Hackathon pitch deck by Team Aspiration",
        fileName: "introducing-aid-ai.pdf",
      },
    ],
    gallery: ["/images/projects/aid-ai-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
