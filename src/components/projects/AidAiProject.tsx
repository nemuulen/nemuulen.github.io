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
        title: "The Problem",
        content: (
          <p>
            In a medical emergency, the people first on the scene are almost never medically trained,
            and the critical minutes are lost to not knowing what to do. Text-based first aid guides
            fail exactly when they are needed most - nobody scrolls a manual while someone is
            bleeding. AID-AI was built around that constraint: the interface had to work when the
            user is panicking, one-handed, and possibly unable to look at the screen.
          </p>
        ),
      },
      {
        title: "Hackathon Experience",
        content: (
          <p>
            Built as Team Aspiration during the 24-hour DKU Hackathon in January 2024. The team
            prototyped, tested and integrated every feature in Xcode inside the time limit and took
            2nd Prize. Working to a hard deadline forced brutal scoping - we cut anything that could
            not be demonstrated live and concentrated on making the multi-modal recognition loop
            convincing end to end.
          </p>
        ),
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
