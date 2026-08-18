/**
 * INFOSCI201 Interaction & Physical Computing - Project Detail Page
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface IotProjectProps {
  onBack: () => void;
}

export function IotProject({ onBack }: IotProjectProps) {
  const projectData: ProjectDetailData = {
    title: "Interaction & Physical Computing",
    subtitle: "INFOSCI201 | Arduino & Unity",
    coverImage: "/images/projects/infosci201-midterm.png",
    tags: [
      "3D Printing",
      "Arduino",
      "C++",
      "Unity",
      "C#",
      "Sensors",
      "Physical Computing",
      "Serial Communication",
    ],
    timeline: "INFOSCI201",

    overview:
      "Coursework in interaction and physical computing, built around two Arduino projects: an infrared-controlled ambient smart lamp with live environmental readout, and a two-player horse race game where physical controls drive a Unity scene over serial. Both projects focus on the same question - how to make physical input feel responsive and legible to the person holding the controller.",

    sections: [
      {
        title: "Project 1 — IR Smart Lamp",
        content: (
          <div>
            <p className="mb-3">
              An ambient RGB lamp driven entirely by a standard NEC infrared remote, housed in a
              custom 3D-printed enclosure modelled on the Mario question block. The translucent white
              shell diffuses the RGB LED evenly across all four faces, while the black base holds the
              Arduino, sensors, and cabling out of sight.
            </p>
            <p className="mb-3">
              The lamp decodes IR commands, maps them to lighting state, and mirrors the current
              status on a 16x2 RGB LCD alongside live sensor readings.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li><strong>Power toggle</strong> on the remote's power key</li>
              <li><strong>Brightness</strong> stepped up and down via the arrow keys, clamped to a 20–255 range so the lamp never fully blacks out unintentionally</li>
              <li><strong>Colour temperature</strong> crossfaded along a red-to-blue axis using a single hue value mapped across the R and B channels</li>
              <li><strong>Nine direct brightness presets</strong> bound to the numeric keys for instant recall</li>
              <li><strong>EQ key</strong> resets the lamp to neutral hue at full brightness</li>
              <li><strong>Live readout</strong> of LM35 temperature and ambient light level on the LCD, plus audible feedback from a piezo buzzer on every accepted command</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Project 2 — Horse Race Game (Arduino + Unity)",
        content: (
          <div>
            <p className="mb-3">
              A two-player physical controller driving a 3D horse race rendered in Unity. The Arduino
              owns game state and randomness; Unity owns presentation, running the track, hurdles,
              horse animation, and win screen. The two communicate over a 230400-baud serial link.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                A roll button generates four random symbol values - square, circle, heart, triangle -
                and streams them to Unity, where each player accumulates a running tally per symbol
              </li>
              <li>Left, right, and confirm buttons let the active player navigate and commit choices</li>
              <li>Two LEDs indicate whose turn it is, toggling automatically once Unity acknowledges a move</li>
              <li>The Arduino blocks further input while waiting on Unity, preventing desynchronised state between the physical and digital sides</li>
              <li>A buzzer provides click feedback, plus an eight-note ascending victory fanfare triggered by a sentinel value from Unity</li>
            </ul>
          </div>
        ),
      },
      {
        title: "What I Learned",
        content: (
          <p>
            The hardest part of both projects was not the wiring but the handshake. Debouncing
            physical buttons, gating input while waiting for the other side of the serial link, and
            giving every action immediate audio or light feedback turned out to matter far more to
            how the devices felt than any individual feature did.
          </p>
        ),
      },
    ],

    links: [],
    documents: [],
    gallery: [
      "/images/projects/infosci201-midterm.png",
      "/images/projects/infosci201-final.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
