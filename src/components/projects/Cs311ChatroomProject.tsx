/**
 * CS311 Multi-Client TCP Chatroom with LLM Integration - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface Cs311ChatroomProjectProps {
  onBack: () => void;
}

export function Cs311ChatroomProject({ onBack }: Cs311ChatroomProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Multi-Client TCP Chatroom with LLM Integration",
    subtitle: "COMPSCI 311 Project",
    coverImage: "/images/projects/cs311_multiclient_chatroom.png",
    tags: ["Python", "TCP Sockets", "LLM Integration", "Networking", "Multithreading"],
    timeline: "Spring 2026",

    overview:
      "A terminal-based multi-client chatroom built on top of TCP sockets in Python. The system includes a central chat server, a human terminal client, and an LLM-powered client that behaves like a genuine chat participant rather than a separate assistant window - joining the same room, following the same wire protocol, and reacting to conversation with realistic timing and personality.",

    sections: [
      {
        title: "Core Chat Features",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Multiple clients can connect to one server at the same time, each with a unique nickname</li>
              <li>Join and leave messages include the current number of connected people</li>
              <li>Messages use newline-delimited framing on top of TCP for reliable parsing</li>
              <li>Each nickname is shown in a shared room color (red, blue, green, or purple), assigned by the server</li>
            </ul>
          </div>
        ),
      },
      {
        title: "LLM Chat Behavior",
        content: (
          <div>
            <p className="mb-3">
              The LLM client does more than call a model API on every incoming line - it layers several pieces of local logic before ever sending a reply:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>Uses a sliding history window and a bounded unread-message queue to keep context and memory usage under control</li>
              <li>Adds think time and settle time so replies don't feel instant or mechanical</li>
              <li>Decides whether to participate based on mentions, direct questions, room size, and recent activity</li>
              <li>Filters duplicate, paraphrased, or pile-on responses when multiple LLMs share the room</li>
              <li>Stops initiating new questions if the room ignores an earlier one</li>
              <li>Selects from one of four personality profiles at startup</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technical Details",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Language: Python 3</li>
              <li>Networking: raw TCP sockets with a custom newline-delimited text protocol</li>
              <li>Concurrency: one thread per connected client on the server</li>
              <li>LLM integration: OpenAI-compatible API via the <code>openai</code> package, configured with <code>python-dotenv</code></li>
              <li>Terminal UX: <code>prompt_toolkit</code> for a clean human client experience</li>
            </ul>
          </div>
        ),
      },
    ],

    links: [
      {
        label: "GitHub Repository",
        url: "https://github.com/kyotoo33/CS311-Multi-client-chatroom-with-LLM-TCP",
      },
    ],

    documents: [
      {
        title: "Project Introduction",
        description: "Overview of the multi-client chatroom and LLM integration",
        fileName: "cs311-chatroom-intro.pdf",
      },
    ],

    gallery: ["/images/projects/cs311_multiclient_chatroom.png"],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
