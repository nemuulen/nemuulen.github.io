/**
 * INFOSCI103 "Phantom Friend" Presentation - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface Infosci103ProjectProps {
  onBack: () => void;
}

export function Infosci103Project({ onBack }: Infosci103ProjectProps) {
  const projectData: ProjectDetailData = {
    title: "“Phantom Friend” or “Just a Box with Information”",
    subtitle: "INFOSCI103 Final Presentation",
    coverImage: "/images/projects/infosci103-ss.png",
    tags: [
      "HCI",
      "Research Analysis",
      "Voice Assistants",
      "Anthropomorphism",
      "Presentation",
    ],
    timeline: "INFOSCI103",

    overview:
      "Final presentation analyzing Pradhan, Findlater, and Lazar's 2019 study on how older adults personify and ontologically categorize smart speaker-based voice assistants. The presentation walks through the study's goals, methodology, and contributions, then opens discussion on how and why people attribute human traits to AI systems.",

    sections: [
      {
        title: "Research Questions in the Study",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li><strong>How</strong> do older adults personify voice assistants in their homes?</li>
              <li><strong>When</strong> do they categorize voice assistants as "object-like" versus "human-like"?</li>
              <li><strong>What</strong> are their perceptions of voice assistants in terms of filling social roles?</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Background: Anthropomorphism of Technology",
        content: (
          <div>
            <p className="mb-3">
              Anthropomorphism is the attribution of human traits, emotions, or intentions to non-human
              entities. Voice and spoken dialogue systems - and interfaces with a "face" or physical
              presence - tend to support more anthropomorphism.
            </p>
            <p>
              Nass and Moon (2000) frame politeness toward devices as an "overlearned social behavior"
              rather than a conscious belief that computers are human-like. Prior work found users
              referring to Alexa as "she," "her," "bff," and "someone to talk to," with multi-user
              households more likely to personify their devices.
            </p>
          </div>
        ),
      },
      {
        title: "Methodology & Limitations",
        content: (
          <div>
            <p className="mb-3">
              The researchers placed Amazon Echo Dot devices in the homes of seven individuals aged 65
              to 83 with no prior experience and low technology use, for three weeks. Data collection
              combined weekly in-person interviews, daily diary check-ins by phone, and usage logs,
              analyzed with a constructivist grounded theory approach.
            </p>
            <p className="mb-2"><strong>Strengths:</strong> forced adoption made it possible to observe change over time.</p>
            <p><strong>Limitations:</strong> daily calls may have prompted more frequent device use, and with only seven participants the study did not aim for generalizable results.</p>
          </div>
        ),
      },
      {
        title: "Discussion Questions",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Do you personify AI? How and why - and how would you assign a gender?</li>
              <li>Do you say "please" or "thank you" to voice assistants? Do you notice a difference in the response?</li>
            </ul>
          </div>
        ),
      },
    ],

    links: [],
    documents: [
      {
        title: "Presentation Slides",
        description: "Full INFOSCI103 final presentation deck",
        fileName: "infosci103-phantom-friend-presentation.pdf",
      },
    ],
    gallery: ["/images/projects/infosci103-ss.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
