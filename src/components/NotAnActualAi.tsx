import { motion } from "motion/react";
import { Search, Sprout, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import {
  awards,
  certificates,
  leadership,
  ventures,
  volunteerWork,
  workExperience,
} from "../data/personal";

interface NotAnActualAiProps {
  onViewProject: (projectId: string) => void;
}

interface SearchRecord {
  id: string;
  label: string;
  type: string;
  text: string;
  projectId?: string;
}

interface Flower {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const FLOWER_KEY = "nemuulen-notanactualai-garden";
const FLOWER_COLORS = ["#012169", "#00539B", "#10B981", "#F59E0B", "#EC4899"];

const keywordGroups: Record<string, string[]> = {
  ai: ["ai", "agent", "agents", "llm", "generative", "machine learning", "ml", "openai"],
  product: ["product", "pm", "manager", "strategy", "roadmap", "mvp", "startup", "business"],
  ux: ["ux", "ui", "design", "figma", "prototype", "research", "user", "usability"],
  leadership: ["leadership", "leader", "president", "manager", "team", "organized", "club"],
  mobile: ["mobile", "app", "react native", "ios", "android", "swift", "xcode"],
  web: ["web", "website", "wordpress", "vite", "react", "frontend"],
  data: ["data", "visualization", "analytics", "dashboard", "research", "survey"],
  education: ["education", "teaching", "student", "counselor", "learning", "language"],
  social: ["social", "community", "wellbeing", "volunteer", "impact", "culture"],
  awards: ["award", "certificate", "fellow", "prize", "externship", "hackathon"],
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ");
}

function getQueryTerms(query: string) {
  const normalized = normalize(query);
  const rawTerms = normalized.split(/\s+/).filter((term) => term.length > 1);
  const expanded = new Set(rawTerms);

  Object.entries(keywordGroups).forEach(([group, terms]) => {
    if (terms.some((term) => normalized.includes(term))) {
      expanded.add(group);
      terms.forEach((term) => expanded.add(term));
    }
  });

  return [...expanded];
}

function scoreRecord(record: SearchRecord, terms: string[]) {
  const text = normalize(`${record.label} ${record.type} ${record.text}`);
  return terms.reduce((score, term) => {
    if (text.includes(term)) return score + (term.length > 3 ? 2 : 1);
    return score;
  }, 0);
}

function createFlower(): Flower {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    x: 8 + Math.random() * 84,
    y: 16 + Math.random() * 70,
    size: 0.7 + Math.random() * 0.7,
    color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
  };
}

function FlowerShape({ flower }: { flower: Flower }) {
  const petalStyle = {
    position: "absolute" as const,
    width: `${12 * flower.size}px`,
    height: `${18 * flower.size}px`,
    borderRadius: "999px 999px 0 999px",
    backgroundColor: flower.color,
    opacity: 0.82,
    transformOrigin: `50% ${12 * flower.size}px`,
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{
        position: "absolute",
        left: `${flower.x}%`,
        top: `${flower.y}%`,
        width: `${34 * flower.size}px`,
        height: `${34 * flower.size}px`,
      }}
    >
      {[0, 72, 144, 216, 288].map((rotation) => (
        <span
          key={rotation}
          aria-hidden
          style={{
            ...petalStyle,
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -85%) rotate(${rotation}deg)`,
          }}
        />
      ))}
      <span
        aria-hidden
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `${9 * flower.size}px`,
          height: `${9 * flower.size}px`,
          transform: "translate(-50%, -50%)",
          borderRadius: "999px",
          backgroundColor: "#F8FAFC",
          border: "1px solid rgba(15, 23, 42, 0.18)",
        }}
      />
    </motion.div>
  );
}

export function NotAnActualAi({ onViewProject }: NotAnActualAiProps) {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(
    "Ask me things like show AI projects, show leadership, or what proves UX research."
  );
  const [matches, setMatches] = useState<SearchRecord[]>([]);
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(FLOWER_KEY);
      if (saved) setFlowers(JSON.parse(saved));
    } catch {
      setFlowers([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(FLOWER_KEY, JSON.stringify(flowers.slice(-24)));
    } catch {
      // localStorage may be disabled; the garden still works for this session.
    }
  }, [flowers]);

  const records = useMemo<SearchRecord[]>(() => {
    const projectRecords = projects.map((project) => ({
      id: `project-${project.id}`,
      label: project.title,
      type: "Project",
      text: [
        project.description,
        project.category,
        project.tags.join(" "),
        project.timeline,
        project.award,
        project.funding,
      ]
        .filter(Boolean)
        .join(" "),
      projectId: project.id,
    }));

    const experienceRecords = workExperience.map((job, index) => ({
      id: `experience-${index}`,
      label: `${job.position} at ${job.company}`,
      type: "Experience",
      text: [job.location, job.timeline, job.responsibilities.join(" ")].join(" "),
      projectId: (job as { projectId?: string }).projectId,
    }));

    const ventureRecords = ventures.map((venture, index) => ({
      id: `venture-${index}`,
      label: `${venture.position}, ${venture.organization}`,
      type: "Venture",
      text: [venture.timeline, venture.achievements.join(" ")].join(" "),
      projectId: venture.projectId,
    }));

    const leadershipRecords = leadership.map((role, index) => ({
      id: `leadership-${index}`,
      label: `${role.position}, ${role.organization}`,
      type: "Leadership",
      text: [role.location, role.timeline, role.achievements.join(" ")].join(" "),
    }));

    const serviceRecords = volunteerWork.map((role, index) => ({
      id: `service-${index}`,
      label: `${role.position}, ${role.organization}`,
      type: "Service",
      text: [role.location, role.timeline, role.achievements.join(" ")].join(" "),
    }));

    const recognitionRecords = [...awards, ...certificates].map((item, index) => ({
      id: `recognition-${index}`,
      label: item.title,
      type: "Recognition",
      text: [item.organization, item.year, (item as { description?: string }).description].join(" "),
      projectId: (item as { projectId?: string }).projectId,
    }));

    return [
      ...projectRecords,
      ...experienceRecords,
      ...ventureRecords,
      ...leadershipRecords,
      ...serviceRecords,
      ...recognitionRecords,
    ];
  }, []);

  const runSearch = (nextQuery = query) => {
    const trimmed = nextQuery.trim();
    if (!trimmed) {
      setAnswer("Type a tiny mission and I will point you to the most relevant parts of the portfolio.");
      setMatches([]);
      return;
    }

    const terms = getQueryTerms(trimmed);
    const ranked = records
      .map((record) => ({ record, score: scoreRecord(record, terms) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => item.record);

    if (ranked.length === 0) {
      setAnswer("Oops, I don't have info on that. Ask directly from her!");
      setMatches([]);
      setFlowers((current) => [...current.slice(-23), createFlower()]);
      return;
    }

    const projectCount = ranked.filter((item) => item.type === "Project").length;
    const top = ranked[0];
    const lead = projectCount > 0 ? `${projectCount} project match${projectCount === 1 ? "" : "es"}` : `${ranked.length} relevant match${ranked.length === 1 ? "" : "es"}`;
    setAnswer(
      `notanactualai found ${lead}. The strongest signal is ${top.label}, and the other matches help show the same thread from different angles.`
    );
    setMatches(ranked);
    setFlowers((current) => [...current.slice(-23), createFlower()]);
  };

  const examples = ["show AI projects", "show leadership", "what proves UX research"];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 items-stretch">
        <div className="border border-[#E2E8F0] bg-white shadow-sm rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-5 h-5 text-[#012169]" />
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A]">notanactualai</h2>
              <p className="text-sm text-[#64748B]">
                A no-cost, browser-only guide to Nemuulen's work.
              </p>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              runSearch();
            }}
            className="flex flex-col sm:flex-row gap-2 mb-3"
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try: show AI projects"
              className="flex-1 px-4 py-3 border border-[#CBD5E1] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:border-[#012169]"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-[#012169] hover:bg-[#00539B] text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Ask
            </button>
          </form>

          <div className="flex flex-wrap gap-2 mb-4">
            {examples.map((example) => (
              <button
                key={example}
                onClick={() => {
                  setQuery(example);
                  runSearch(example);
                }}
                className="px-3 py-1.5 border border-[#E2E8F0] rounded-full text-xs font-medium text-[#475569] hover:border-[#012169] hover:text-[#012169] transition-colors"
              >
                {example}
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 mb-4">
            <p className="text-sm text-[#334155] leading-relaxed">{answer}</p>
          </div>

          {matches.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {matches.map((match) => (
                <button
                  key={match.id}
                  onClick={() => match.projectId && onViewProject(match.projectId)}
                  disabled={!match.projectId}
                  className="text-left p-3 border border-[#E2E8F0] rounded-lg hover:border-[#012169] disabled:hover:border-[#E2E8F0] transition-colors"
                >
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">
                    {match.type}
                  </span>
                  <span className="block text-sm font-semibold text-[#0F172A]">
                    {match.label}
                  </span>
                  {match.projectId && (
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#012169]">
                      See more
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative min-h-[320px] border border-[#E2E8F0] rounded-2xl overflow-hidden bg-[#F8FAFC]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(1, 33, 105, 0.18) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-[#0F172A]">persistent little garden</p>
              <p className="text-xs text-[#64748B]">Each question blooms a saved flower here.</p>
            </div>
            <Sprout className="w-5 h-5 text-[#10B981]" />
          </div>

          <div aria-hidden style={{ position: "absolute", inset: "4rem 0.75rem 0.75rem" }}>
            {flowers.map((flower) => (
              <FlowerShape key={flower.id} flower={flower} />
            ))}
          </div>

          {flowers.length === 0 && (
            <div className="absolute inset-x-6 bottom-8 text-sm text-[#64748B]">
              Ask something to plant the first one.
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
