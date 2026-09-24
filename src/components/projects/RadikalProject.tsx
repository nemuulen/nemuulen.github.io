/**
 * RADIKAL Project Detail Page
 *
 * Content sourced from the Dii/IE169 project documentation:
 * proposal, midterm report, user research survey and prototype feedback survey.
 */

import { ProjectDetailTemplate, ProjectDetailData } from "./ProjectDetailTemplate";

interface RadikalProjectProps {
  onBack: () => void;
}

export function RadikalProject({ onBack }: RadikalProjectProps) {
  const projectData: ProjectDetailData = {
    title: "RADIKAL",
    subtitle: "AI-Powered Chinese Character Learning App",
    coverImage: "/images/projects/radikal.png",
    tags: [
      "React Native",
      "Expo",
      "Supabase",
      "AI Integration",
      "Figma",
      "Mobile UI/UX",
      "User Research",
    ],
    timeline: "Apr 2025 - Present",
    funding: "¥15,000 CNY Seed Funding",

    overview:
      "RADIKAL (formerly Chinese Radical Lab) is a gamified, AI-powered mobile application that tackles one of the hardest parts of learning Mandarin: memorising characters. Where existing platforms lock learners into rigid curricula, RADIKAL lets them import vocabulary from any source and build memory through interactive character construction, personalised associations, and AI-generated stories. Built by Team Wision under DKU's Dii entrepreneurship programme (project code IE169), it is co-founded with Bilguun Dugarsuren, where I serve as team leader, developer, and lead on data collection and communications. The product has reached 200+ users and has been iterated through usability research with 120+ students.",

    sections: [
      {
        title: "The Problem",
        content: (
          <div>
            <p className="mb-3">
              Chinese characters are a fundamentally different writing system from alphabetic
              languages, and learners consistently name them among the hardest parts of the language.
              Our own survey of 66 learners confirmed it: characters and tones tied as the most
              difficult element, at 32% and 38% respectively.
            </p>
            <p className="mb-3">The reasons learners gave were remarkably consistent:</p>
            <ul style={{ listStyleType: "disc" }}>
              <li>There are simply too many to memorise - "just the sheer amount of it makes me tired already"</li>
              <li>Similar-looking characters blur together - one respondent cited 辛 versus 幸</li>
              <li>Existing methods feel boring, overly formal, and offer no fun way in</li>
            </ul>
            <p className="mt-3">
              When asked what would actually help, learners asked for visual association, structure
              breakdown, storytelling, and radical deconstruction - precisely the techniques RADIKAL
              is built around.
            </p>
          </div>
        ),
      },
      {
        title: "Our Approach",
        content: (
          <div>
            <p className="mb-3">
              The core insight is that people rarely forget things they created themselves or felt
              something about. Rather than drilling repetition, RADIKAL asks learners to build and
              invent:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Character Lab</strong> - experiment with radicals to construct real characters,
                and decompose existing ones to see how they are built
              </li>
              <li>
                <strong>Guess the meaning</strong> - infer a character's sense from its components
                before being told the answer
              </li>
              <li>
                <strong>Personal memory notes</strong> - leave your own association for how to remember
                a character
              </li>
              <li>
                <strong>AI-generated stories</strong> - when a learner is stuck, AI suggests a creative
                sentence or story, regenerable to taste and tuned to the learner's age and interests
              </li>
              <li>
                <strong>Character of the Day</strong>, streaks, XP, badges and a leaderboard to sustain
                daily engagement
              </li>
            </ul>
            <p className="mt-3">
              Crucially, learners can import vocabulary from any source, so the app supplements
              whatever curriculum they are already following rather than competing with it.
            </p>
          </div>
        ),
      },
      {
        title: "Validating the Method",
        content: (
          <div>
            <p className="mb-3">
              Before building features, we tested whether radical-based learning actually works. We
              ran a survey with <strong>66 respondents</strong> across DKU, NYU Shanghai and other
              institutions, spanning beginner through advanced (48% beginner, 39% intermediate, 14%
              advanced).
            </p>
            <p className="mb-3">
              Embedded in the survey was a blind test. We taught the radical logic, then asked
              participants to infer the meaning of three characters they had not studied - 囧, 呆 and
              鲁. The mean score was <strong>2.82 out of 3</strong>, with roughly 36 of 38 respondents
              correct on each character.
            </p>
            <p className="mb-3">Other findings that shaped the product:</p>
            <ul style={{ listStyleType: "disc" }}>
              <li>Visual associations and mnemonics rated most effective; flashcards rated only "so-so"</li>
              <li>56% find resources through websites rather than app stores - which is why we built the web prototype first</li>
              <li>~55% already use some form of online resource, and Duolingo dominates, with grammar depth its most cited weakness</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Prototype & Public Demo",
        content: (
          <div>
            <p className="mb-3">
              We built a working web prototype first, on the reasoning that it is far faster to
              iterate on feedback before committing to mobile. It demonstrates the full core loop:
              radical-based learning, AI story elements, and game mechanics.
            </p>
            <p className="mb-3">
              On <strong>5 November 2025</strong> we demoed publicly at DKU's Chinese Teatime event to
              over <strong>30 participants</strong>, international students studying Chinese at every
              proficiency level. A follow-up prototype feedback survey drew{" "}
              <strong>32 responses</strong>, and among the three tested mechanics - story creating,
              guess the meaning, and Radical Lab - respondents rated the approach positively and
              asked for repeated quizzes, more interactivity, and AI chat practice.
            </p>
            <p>
              We ran a second showcase at Chinese Teatime on 25 March 2026, in collaboration with the
              Chinese as a Second Language Program.
            </p>
          </div>
        ),
      },
      {
        title: "Quarterly Milestones",
        content: (
          <div>
            <p className="mb-3">
              The midterm report documented progress across technical development, user research,
              community engagement, and team process as RADIKAL moved from concept toward a
              research-supported learning prototype.
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Built a web-based prototype first so the team could iterate faster before committing
                to the full mobile app
              </li>
              <li>
                Translated early wireframes into a clearer visual layout with basic navigation and
                gamification features
              </li>
              <li>
                Used the Chinese Teatime demo to test whether radical-based learning, stories, and
                visuals were understandable to real learners
              </li>
              <li>
                Turned public-demo feedback into product direction around guidance, interactivity,
                and personalization
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Technical Implementation",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li><strong>Frontend:</strong> React 18 + Vite 6 with Tailwind CSS and Shadcn/Radix UI</li>
              <li><strong>Backend:</strong> Supabase for PostgreSQL, Edge Functions, auth, storage and realtime features</li>
              <li><strong>Mobile:</strong> Capacitor iOS/Android shell, with iOS distributed through TestFlight and App Store submission in progress</li>
              <li><strong>AI:</strong> Kimi/Moonshot API through a Supabase Edge Function for short, radical-grounded mnemonic story generation</li>
              <li>
                <strong>Dataset:</strong> 18,958 rows covering 4,953 characters, 9,424 words, 4,581
                unclassified entries and 218 radicals, sourced from Unihan, CC-CEDICT, Make Me a
                Hanzi and ivankra/hsk30
              </li>
              <li>
                <strong>Web distribution:</strong> Radikal.one on Netlify as a PWA-capable single-page app
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: "Learning Modes",
        content: (
          <div>
            <p className="mb-3">
              The final report defines six learning modes, each aimed at a distinct cognitive skill:
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li><strong>Guess the Hanzi</strong> - quiz from mnemonic or definition to character</li>
              <li><strong>HanziLab</strong> - assemble radicals to construct real characters</li>
              <li><strong>Class Mode</strong> - teacher-managed decks and student progress tracking</li>
              <li><strong>Focus Mode</strong> - spaced repetition for characters due for review</li>
              <li><strong>Dictionary</strong> - browse and full-text search across the character and word database</li>
              <li><strong>Community</strong> - leaderboard, XP milestones and forum features</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Design Iteration",
        content: (
          <p>
            The home screen went through several rounds of visual direction - from a warm orange
            palette, through saturated red and purple gradients, to the cleaner white layout with
            accent colour that we settled on. Each round tightened the hierarchy between the daily
            challenge, the Character Lab entry point, and the leaderboard. The gallery below shows
            that progression in reverse chronological order.
          </p>
        ),
      },
      {
        title: "Business Model",
        content: (
          <div>
            <p className="mb-3">
              RADIKAL runs on a freemium model monetised through AI tokens, where each generation
              costs one token. Tokens are sold in bundles, earned free through daily streaks, or
              earned by watching ads, so the app stays usable for learners who cannot pay. For
              schools and universities we offer time-based institutional licences.
            </p>
            <p>
              We estimate a target market of roughly 15 million tech-savvy learners aged 10-25
              globally, within a digital language learning industry projected to reach $14.8 billion
              by 2028. The project supports UN SDG 4 (Quality Education).
            </p>
            <p className="mt-3">
              The final pricing plan includes a free tier with 3 daily tokens, paid token packs, and
              institutional licensing at $6 per student for a 6-month term.
            </p>
          </div>
        ),
      },
      {
        title: "Challenges",
        content: (
          <div>
            <p className="mb-3">
              The most significant challenge was our own inexperience. We intended to build mobile
              from the start, but quickly recognised we lacked depth in both UI/UX and mobile
              engineering - so we deliberately stepped back to a web prototype to learn faster and
              iterate cheaper.
            </p>
            <p>
              The second was data. Personalised learning, Character of the Day, and AI story
              generation all depend on a structured, reliable character dataset, and sourcing and
              cleaning an open one proved considerably harder than anticipated.
            </p>
          </div>
        ),
      },
      {
        title: "What's Next",
        content: (
          <div>
            <ul style={{ listStyleType: "disc" }}>
              <li>Convert the refined Figma UI into React Native components and ship the mobile app</li>
              <li>Finalise the HSK 1-4 dataset and radical hint library</li>
              <li>Implement personalised story generation driven by profile attributes (age and interests)</li>
              <li>Build out the rewards system - streaks, XP, badges - and leaderboard logic</li>
              <li>Run targeted feedback sessions with Mandarin learners at other institutions, including NYU Shanghai and XJTLU</li>
              <li>Publish to the App Store and Google Play</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Team",
        content: (
          <div>
            <p className="mb-2">
              <strong>Team Wision</strong> - DKU Dii Innovation & Entrepreneurship, project IE169
            </p>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                <strong>Nemuulen Togtbaatar</strong> (Computation &amp; Design, 2027) - Team Leader,
                Developer, data collection and survey distribution, communications
              </li>
              <li>
                <strong>Bilguun Dugarsuren</strong> (Applied Mathematics &amp; Computational Science,
                2028) - Survey and logic flow design, Developer, Team Treasurer
              </li>
            </ul>
          </div>
        ),
      },
    ],

    links: [
      {
        label: "Interactive Prototype",
        url: "https://dahlia-seven-32363242.figma.site",
      },
    ],

    documents: [
      {
        title: "Final Report",
        description: "Dii final report: product design, technical architecture, business model and go-to-market plan",
        fileName: "radikal-final-report.pdf",
      },
      {
        title: "Project Proposal",
        description: "Full entrepreneurship proposal: market analysis, business strategy, financials",
        fileName: "radikal-proposal.pdf",
      },
      {
        title: "Midterm Report",
        description: "Quarterly progress, challenges, roadmap and budget (IE169)",
        fileName: "radikal-midterm-report.pdf",
      },
      {
        title: "User Research Report",
        description: "Survey of 66 Chinese learners on pain points and memorisation methods",
        fileName: "radikal-user-research-report.pdf",
      },
      {
        title: "Prototype Feedback Report",
        description: "Feedback from 32 participants following the Chinese Teatime demo",
        fileName: "radikal-prototype-feedback.pdf",
      },
    ],

    gallery: [
      "/images/projects/radikal-banner.png",
      "/images/projects/radikal-ui-1.png",
      "/images/projects/radikal-ui-2.png",
      "/images/projects/radikal-ui-3.png",
      "/images/projects/radikal-ui-4.png",
      "/images/projects/radikal-poster.png",
    ],
  };

  return <ProjectDetailTemplate data={projectData} onBack={onBack} />;
}
