import { motion } from "motion/react";
import { Search } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";
import {
  awards,
  certificates,
  leadership,
  personalInfo,
  ventures,
  volunteerWork,
  workExperience,
} from "../data/personal";
import { Garden } from "./garden/Garden";
import { PLOT_COUNT, useGarden } from "./garden/useGarden";
import "./NotAnActualAi.css";

interface NotAnActualAiProps {
  onViewProject: (projectId: string) => void;
}

type RecordType = "Project" | "Experience" | "Venture" | "Leadership" | "Service" | "Recognition";

interface SearchRecord {
  id: string;
  label: string;
  type: RecordType;
  /** Space-padded word string, so `includes(" term ")` only matches whole words and phrases. */
  words: string;
  projectId?: string;
}

type Answer =
  | { kind: "idle" }
  | { kind: "empty" }
  | { kind: "none" }
  | { kind: "results"; query: string; top: SearchRecord; counts: [RecordType, number][]; matchedOn: string[] };

const PLURALS: Record<RecordType, [string, string]> = {
  Project: ["project", "projects"],
  Experience: ["role", "roles"],
  Venture: ["venture", "ventures"],
  Leadership: ["leadership role", "leadership roles"],
  Service: ["service role", "service roles"],
  Recognition: ["award or certificate", "awards and certificates"],
};

const keywordGroups: Record<string, string[]> = {
  ai: ["ai", "agent", "agents", "llm", "generative", "machine learning", "ml", "openai"],
  product: ["product", "pm", "strategy", "roadmap", "mvp", "startup", "business"],
  ux: ["ux", "ui", "design", "figma", "prototype", "user", "usability", "interview"],
  leadership: ["leadership", "leader", "president", "team", "organized", "club"],
  mobile: ["mobile", "app", "react native", "ios", "android", "swift", "xcode"],
  web: ["web", "website", "wordpress", "vite", "react", "frontend"],
  data: ["data", "visualization", "analytics", "dashboard", "survey"],
  education: ["education", "teaching", "student", "counselor", "learning", "language"],
  social: ["social", "community", "wellbeing", "volunteer", "impact", "culture"],
  awards: ["award", "certificate", "fellow", "prize", "externship", "hackathon"],
};

const STOPWORDS = new Set(
  "a an the and or of to in on at for with by from is are was were be been do does did any about me my her his she he it its this that these those what which who how why where when show tell find give list proves prove see work works project projects thing things some can has have i".split(
    " "
  )
);

const examples = ["show AI projects", "show leadership", "what proves UX research"];

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function toWords(value: string) {
  return ` ${normalize(value).replace(/[.-]/g, " ")} `;
}

/** Returns query terms with weights: words the visitor typed count 3, synonyms from a matched group count 1. */
function getQueryTerms(query: string) {
  const typed = normalize(query)
    .replace(/[.-]/g, " ")
    .split(" ")
    .filter((term) => term.length > 1 && !STOPWORDS.has(term));
  const padded = ` ${typed.join(" ")} `;
  const weights = new Map(typed.map((term) => [term, 3]));

  Object.entries(keywordGroups).forEach(([group, terms]) => {
    if (!terms.some((term) => padded.includes(` ${term} `))) return;
    [group, ...terms].forEach((term) => {
      if (!weights.has(term)) weights.set(term, 1);
    });
  });

  return weights;
}

function matchesWord(words: string, term: string) {
  if (words.includes(` ${term} `) || words.includes(` ${term}s `)) return true;
  return term.length > 3 && term.endsWith("s") && words.includes(` ${term.slice(0, -1)} `);
}

const validProjectIds = new Set(projects.map((project) => project.id));

function linkable(projectId?: string) {
  return projectId && validProjectIds.has(projectId) ? projectId : undefined;
}

const records: SearchRecord[] = [
  ...projects.map((project) => ({
    id: `project-${project.id}`,
    label: project.title,
    type: "Project" as const,
    words: toWords(
      [project.title, project.description, project.category, project.tags.join(" "), project.timeline, project.award, project.funding]
        .filter(Boolean)
        .join(" ")
    ),
    projectId: project.id,
  })),
  ...workExperience.map((job, index) => ({
    id: `experience-${index}`,
    label: `${job.position} at ${job.company}`,
    type: "Experience" as const,
    words: toWords([job.position, job.company, job.location, job.timeline, job.responsibilities.join(" ")].join(" ")),
    projectId: linkable((job as { projectId?: string }).projectId),
  })),
  ...ventures.map((venture, index) => ({
    id: `venture-${index}`,
    label: `${venture.position}, ${venture.organization}`,
    type: "Venture" as const,
    words: toWords([venture.position, venture.organization, venture.timeline, venture.achievements.join(" ")].join(" ")),
    projectId: linkable(venture.projectId),
  })),
  ...leadership.map((role, index) => ({
    id: `leadership-${index}`,
    label: `${role.position}, ${role.organization}`,
    type: "Leadership" as const,
    words: toWords(["leadership", role.position, role.organization, role.location, role.timeline, role.achievements.join(" ")].join(" ")),
  })),
  ...volunteerWork.map((role, index) => ({
    id: `service-${index}`,
    label: `${role.position}, ${role.organization}`,
    type: "Service" as const,
    words: toWords([role.position, role.organization, role.location, role.timeline, role.achievements.join(" ")].join(" ")),
  })),
  ...[...awards, ...certificates].map((item, index) => ({
    id: `recognition-${index}`,
    label: item.title,
    type: "Recognition" as const,
    words: toWords(
      [item.title, item.organization, item.year, (item as { description?: string }).description].filter(Boolean).join(" ")
    ),
    projectId: linkable((item as { projectId?: string }).projectId),
  })),
];

function search(query: string) {
  const terms = getQueryTerms(query);
  const matchedOn = new Set<string>();

  const ranked = records
    .map((record) => {
      let score = 0;
      terms.forEach((weight, term) => {
        if (!matchesWord(record.words, term)) return;
        score += weight;
        if (weight > 1) matchedOn.add(term);
      });
      return { record, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || Number(b.record.type === "Project") - Number(a.record.type === "Project"))
    .slice(0, 6)
    .map((item) => item.record);

  return { ranked, matchedOn: [...matchedOn] };
}

function summarizeCounts(counts: [RecordType, number][]) {
  return counts.map(([type, count]) => `${count} ${PLURALS[type][count === 1 ? 0 : 1]}`).join(", ");
}

export function NotAnActualAi({ onViewProject }: NotAnActualAiProps) {
  const [query, setQuery] = useState("");
  const [lastAsked, setLastAsked] = useState("");
  const [answer, setAnswer] = useState<Answer>({ kind: "idle" });
  const [matches, setMatches] = useState<SearchRecord[]>([]);
  const [gardenStatus, setGardenStatus] = useState("");
  const { flowers, plant, reset } = useGarden();

  const runSearch = (nextQuery = query) => {
    const trimmed = nextQuery.trim();
    if (!trimmed) {
      setAnswer({ kind: "empty" });
      setMatches([]);
      return;
    }

    setLastAsked(trimmed.toLowerCase());
    const flower = plant(trimmed);
    const planted = Math.min(flowers.length + 1, PLOT_COUNT);
    setGardenStatus(`A ${flower.color} ${flower.species} bloomed (${planted}/${PLOT_COUNT}).`);

    const { ranked, matchedOn } = search(trimmed);
    setMatches(ranked);
    if (ranked.length === 0) {
      setAnswer({ kind: "none" });
      return;
    }

    const counts = new Map<RecordType, number>();
    ranked.forEach((record) => counts.set(record.type, (counts.get(record.type) ?? 0) + 1));
    setAnswer({ kind: "results", query: trimmed, top: ranked[0], counts: [...counts].sort((a, b) => b[1] - a[1]), matchedOn });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="naa"
    >
      <div className="naa-card">
        <div className="naa-head">
          <Search aria-hidden className="naa-head-icon" />
          <div>
            <h2 className="naa-title">notanactualai</h2>
            <p className="naa-subtitle">A no-cost, browser-only guide to Nemuulen's work.</p>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            runSearch();
          }}
          className="naa-form"
        >
          <label htmlFor="naa-query" className="naa-sr-only">
            Ask about Nemuulen's work
          </label>
          <input
            id="naa-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: show AI projects"
            autoComplete="off"
            className="naa-input"
          />
          <button type="submit" className="naa-ask">
            Ask
          </button>
        </form>

        <div className="naa-chips">
          {examples.map((example) => {
            const active = lastAsked === example.toLowerCase();
            return (
              <button
                key={example}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setQuery(example);
                  runSearch(example);
                }}
                className={`naa-chip${active ? " naa-chip--active" : ""}`}
              >
                {example}
              </button>
            );
          })}
        </div>

        <div className="naa-answer" aria-live="polite">
          {answer.kind === "idle" && <p>Ask me things like show AI projects, show leadership, or what proves UX research.</p>}
          {answer.kind === "empty" && <p>Type a question and I will point you to the most relevant parts of the portfolio.</p>}
          {answer.kind === "none" && (
            <p>
              Oops, I don't have anything on that yet.{" "}
              <a href={`mailto:${personalInfo.email}`} className="naa-link">
                Ask her directly!
              </a>
            </p>
          )}
          {answer.kind === "results" && (
            <p>
              Found {summarizeCounts(answer.counts)} for “{answer.query}”. Top match: <strong>{answer.top.label}</strong>.
              {answer.matchedOn.length > 0 && (
                <span className="naa-matched"> Matched on {answer.matchedOn.join(", ")}.</span>
              )}
            </p>
          )}
        </div>

        {matches.length > 0 && (
          <ul className="naa-results">
            {matches.map((match) => {
              const body = (
                <>
                  <span className="naa-result-type">{match.type}</span>
                  <span className="naa-result-label">{match.label}</span>
                  {match.projectId && <span className="naa-result-link">See more</span>}
                </>
              );
              return (
                <li key={match.id}>
                  {match.projectId ? (
                    <button
                      type="button"
                      onClick={() => onViewProject(match.projectId!)}
                      className="naa-result naa-result--link"
                    >
                      {body}
                    </button>
                  ) : (
                    <div className="naa-result">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <Garden flowers={flowers} status={gardenStatus} onReset={reset} />
    </motion.section>
  );
}
