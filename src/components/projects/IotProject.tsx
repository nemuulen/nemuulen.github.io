/**
 * INFOSCI201 Interaction & Physical Computing - Project Detail Page
 *
 * Content sourced from the INFOSCI201 midterm documentation (desk lamp)
 * and the final project proposal (shagai racing game).
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
      "Arduino",
      "C++",
      "Unity",
      "C#",
      "3D Printing",
      "Sensors",
      "Physical Computing",
      "Serial Communication",
    ],
    timeline: "INFOSCI201",

    overview:
      "Two Arduino builds exploring how physical input can be made to feel responsive and legible. The midterm is an interactive desk lamp that senses its environment and runs a Pomodoro timer; the final is a two-player racing game inspired by the Mongolian shagai tradition, where an Arduino controller drives a Unity scene over serial.",

    sections: [
      {
        title: "Midterm — Interactive Desk Lamp",
        content: (
          <div>
            <p className="mb-3">
              An Arduino-based desk lamp combining ambient sensing, manual control, and a
              Pomodoro-style study timer, housed in a custom 3D-printed enclosure modelled on the
              Mario question block. The translucent white shell diffuses the RGB LED across all four
              faces while the black base hides the electronics.
            </p>
            <p className="mb-2"><strong>Two operating modes:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Sensor mode</strong> - ambient light sets brightness and temperature sets
                colour. As the room gets brighter the LED follows; as the room warms, the lamp shifts
                toward a cooler, bluish tone, keeping the light visually comfortable without input
              </li>
              <li>
                <strong>Manual mode</strong> - full control from an IR remote: power, brightness up
                and down, hue warmer and colder, and nine direct brightness presets on the number keys
              </li>
            </ul>
            <p className="mt-3 mb-2"><strong>Pomodoro timer:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li>A 25-minute focus and 5-minute break loop, started from the remote</li>
              <li>Time can be adjusted on the fly - add 5 minutes, subtract 3 minutes</li>
              <li>Pause and resume, with buzzer feedback on transitions</li>
              <li>Status, live temperature and ambient light readings shown on a 16x2 RGB LCD</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Final — Shagai Racing Game",
        content: (
          <div>
            <p className="mb-3">
              A two-player racing game built around a random, luck-based mechanism with genuine
              strategic decision-making on top. The design draws on the Mongolian{" "}
              <strong>shagai</strong> tradition, in which four distinct shapes determine outcomes and
              two horses race to the finish line.
            </p>
            <p className="mb-2">
              Each roll produces four shapes - ♥, ▲, ■ and ● - and the split between them is what
              makes the game interesting:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Hearts (♥) move your horse forward</strong> and are never stored - they are
                spent the moment they are rolled
              </li>
              <li>
                <strong>Triangles, squares and circles (▲ ■ ●) act as currency</strong>, accumulating
                so players can bank them and combine them into special powers
              </li>
            </ul>
            <p className="mt-3 mb-2"><strong>The three powers:</strong></p>
            <ul style={{ listStyleType: "disc" }}>
              <li><strong>Mud Trap</strong> - slow the opposing horse</li>
              <li><strong>Whip Boost</strong> - accelerate your own</li>
              <li><strong>Foresight</strong> - see what is coming before committing</li>
            </ul>
            <p className="mt-3">
              The tension is that a roll heavy in hearts advances you now, while a roll heavy in
              shapes buys you a decisive move later - so a bad-looking roll is not necessarily a bad
              roll.
            </p>
          </div>
        ),
      },
      {
        title: "Arduino ↔ Unity Architecture",
        content: (
          <div>
            <p className="mb-3">
              The Arduino Uno acts as the sole physical controller - roll, confirm, left and right -
              while Unity owns presentation: the 3D track, hurdles, horse animation, roll display,
              currency bar, power menu, foresight UI and game-over panel.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>Serial communication carries shape values between the two systems</li>
              <li>
                A 4-roll buffer collects all four shapes before anything is processed, so a turn is
                evaluated as a complete unit rather than shape by shape
              </li>
              <li>Two LEDs indicate whose turn it is, toggling once Unity acknowledges a move</li>
              <li>
                The Arduino blocks further input while awaiting Unity, preventing the physical and
                digital sides from drifting out of sync
              </li>
              <li>
                A piezo buzzer gives click feedback on every accepted press, plus an eight-note
                ascending fanfare on victory
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "What I Learned",
        content: (
          <p>
            Both projects were developed iteratively, with several design changes and outright
            failures before reaching a stable version - starting with something as basic as testing
            whether a 5mm LED in parallel was brighter than an RGB LED, and finding it was not. The
            hardest part was never the wiring but the handshake: debouncing buttons, gating input
            while waiting on the other side of the serial link, and making sure every action produced
            immediate light or sound. Those details mattered far more to how the devices felt than
            any individual feature did.
          </p>
        ),
      },
    ],

    links: [],
    documents: [
      {
        title: "Midterm Documentation",
        description: "Desk lamp: features, circuit, components and development iterations",
        fileName: "infosci201-midterm-desk-lamp.pdf",
      },
      {
        title: "Final Project Proposal",
        description: "Shagai racing game: concept, mechanics, components and process",
        fileName: "infosci201-final-shagai-race.pdf",
      },
    ],
    gallery: [
      "/images/projects/infosci201-midterm.png",
      "/images/projects/infosci201-final.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
