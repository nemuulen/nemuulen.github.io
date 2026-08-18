import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  personalInfo,
  education,
  ventures,
  leadership,
  volunteerWork,
  awards,
  certificates,
  workExperience
} from '../data/personal';
import {
  GraduationCap,
  Award,
  Users,
  Briefcase,
  MapPin,
  Mail,
  Phone,
  Download,
  Rocket,
  Heart,
  BadgeCheck,
  ArrowRight
} from 'lucide-react';

interface AboutProps {
  onViewProject?: (projectId: string) => void;
}

/**
 * Types `text` out on mount at a steady rate.
 *
 * - The full string is always rendered underneath at zero opacity so the
 *   block reserves its final height up front and nothing below it shifts.
 * - Honours prefers-reduced-motion by showing the text immediately.
 * - Screen readers get the complete string, not the partial one.
 */
function Typewriter({
  text,
  className = '',
  style
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setCount(text.length);
      return;
    }

    const CHARS_PER_SECOND = 130;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const next = Math.min(
        text.length,
        Math.floor(((now - start) / 1000) * CHARS_PER_SECOND)
      );
      setCount(next);
      if (next < text.length) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  // NOTE: src/index.css is a frozen, pre-compiled Tailwind build (no Tailwind
  // in the pipeline), so any class not already in that file is a no-op.
  // Anything custom here is therefore expressed as an inline style.
  return (
    <span className={className} style={{ display: 'grid', ...style }}>
      {/* Height reservation layer - holds the final height so nothing shifts. */}
      <span aria-hidden style={{ gridArea: '1 / 1', visibility: 'hidden' }}>
        {text}
      </span>
      <span style={{ gridArea: '1 / 1' }} aria-label={text}>
        <span aria-hidden>{text.slice(0, count)}</span>
        {!done && (
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, times: [0, 0.5, 0.5, 1], repeat: Infinity }}
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              marginLeft: '2px',
              verticalAlign: '-0.15em',
              backgroundColor: '#012169',
            }}
          />
        )}
      </span>
    </span>
  );
}

export function About({ onViewProject }: AboutProps) {
  /**
   * Link rendered on any entry that has a matching project page.
   * Wrapped in a block-level div so it always starts on its own line,
   * even when the preceding sibling is inline (e.g. a date span).
   */
  const SeeMore = ({ projectId }: { projectId?: string }) =>
    projectId && onViewProject ? (
      <div className="block mt-2">
        <button
          onClick={() => onViewProject(projectId)}
          className="group inline-flex items-center gap-1 text-xs font-semibold text-[#012169] transition-colors"
        >
          See more
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    ) : null;

  return (
    <div className="min-h-screen pt-20 pb-10 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-3">
            <span
              style={{ fontFamily: 'var(--font-script)' }}
              className="text-[#012169] text-6xl md:text-7xl block mb-1"
            >
              Nemuulen
            </span>
            <span className="block text-3xl md:text-4xl font-bold text-[#0F172A]">
              Togtbaatar
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative max-w-2xl mx-auto mb-6"
            style={{ marginTop: '2rem' }}
          >
            {/* Thin accent rule above the summary */}
            <span
              className="block rounded-full bg-[#012169] mx-auto mb-5"
              style={{ width: '40px', height: '3px' }}
            />

            <Typewriter
              text={personalInfo.bio}
              className="text-sm text-[#475569] text-left"
              style={{ lineHeight: 1.8 }}
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-5">
            <div className="flex items-center gap-2 text-[#475569]">
              <MapPin className="w-4 h-4 text-[#012169]" />
              {personalInfo.location}
            </div>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-[#012169] hover:underline">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 text-[#475569] hover:text-[#012169]">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </a>
          </div>

          <motion.a
            href="/files/Nemuulen_GradCV.pdf"
            download="Nemuulen_Togtbaatar_CV.pdf"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#012169] hover:bg-[#00539B] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download My CV
          </motion.a>
        </motion.div>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-[#012169]" />
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Education
            </h2>
          </div>

          <div className="border border-[#E2E8F0] rounded-2xl p-5 bg-white shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {education.institution}
                </h3>
                <p className="text-[#012169]">{education.degree}</p>
                <p className="text-xs text-[#94A3B8] mt-1">{education.location}</p>
              </div>
              <div className="text-right mt-3 md:mt-0">
                <p className="text-sm text-[#475569]">{education.timeline}</p>
                <p className="text-sm font-semibold text-[#012169]">GPA: {education.gpa}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] mb-3">
              <p className="text-xs font-semibold text-[#94A3B8] mb-2">Relevant Coursework</p>
              <p className="text-sm text-[#475569]">
                {education.coursework.join(', ')}
              </p>
            </div>

            {education.honors && (
              <div className="flex flex-wrap gap-2 pt-3 border-t border-[#E2E8F0]">
                {education.honors.map((honor) => (
                  <span key={honor} className="text-xs px-3 py-1 bg-[#012169]/10 text-[#012169] rounded-md font-medium">
                    {honor}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-[#012169]" />
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Experience
            </h2>
          </div>

          <div className="space-y-3">
            {workExperience.map((job, index) => (
              <div
                key={`${job.company}-${job.position}-${index}`}
                className="border border-[#E2E8F0] rounded-2xl p-5 bg-white shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-[#0F172A]">{job.position}</h3>
                    <p className="text-sm text-[#012169]">{job.company}</p>
                    <p className="text-xs text-[#94A3B8] mt-1">{job.location}</p>
                  </div>
                  <span className="text-xs text-[#94A3B8] mt-2 md:mt-0">{job.timeline}</span>
                </div>
                <ul className="space-y-1 pt-2 border-t border-[#E2E8F0]">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-[#475569] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#012169] rounded-full mt-1.5 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
                <SeeMore projectId={(job as { projectId?: string }).projectId} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Ventures / Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="w-5 h-5 text-[#012169]" />
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Ventures
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {ventures.map((venture, index) => (
              <div
                key={`${venture.organization}-${index}`}
                className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm flex flex-col"
              >
                <h3 className="font-bold text-[#0F172A] text-sm">{venture.organization}</h3>
                <p className="text-sm text-[#012169]">{venture.position}</p>
                <span className="text-xs text-[#94A3B8]">{venture.timeline}</span>
                <ul className="space-y-1 mt-2 flex-1">
                  {venture.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-xs text-[#475569] flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#012169] rounded-full mt-1.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <SeeMore projectId={venture.projectId} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* Leadership & Volunteer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[#012169]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Leadership
              </h2>
            </div>

            <div className="space-y-3">
              {leadership.map((role, index) => (
                <div
                  key={`${role.organization}-${role.position}-${index}`}
                  className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm"
                >
                  <h3 className="font-bold text-[#0F172A] text-sm">{role.position}</h3>
                  <p className="text-sm text-[#012169]">{role.organization}</p>
                  <span className="text-xs text-[#94A3B8]">{role.timeline}</span>
                  {role.achievements.length > 0 && (
                    <ul className="space-y-1 mt-2">
                      {role.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-[#475569] flex items-start gap-2">
                          <span className="w-1 h-1 bg-[#012169] rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#012169]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Volunteer Work
              </h2>
            </div>

            <div className="space-y-3">
              {volunteerWork.map((role, index) => (
                <div
                  key={`${role.organization}-${role.position}-${index}`}
                  className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm"
                >
                  <h3 className="font-bold text-[#0F172A] text-sm">{role.position}</h3>
                  <p className="text-sm text-[#012169]">{role.organization}</p>
                  <span className="text-xs text-[#94A3B8]">{role.timeline}</span>
                  <ul className="space-y-1 mt-2">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-[#475569] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#012169] rounded-full mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Awards & Certificates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#012169]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Awards
              </h2>
            </div>

            <div className="space-y-3">
              {awards.map((award) => (
                <div
                  key={award.title}
                  className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm"
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-[#0F172A] text-sm flex-1">{award.title}</h3>
                    {award.placement && (
                      <span className="text-xs px-2 py-0.5 bg-[#10B981]/10 text-[#10B981] rounded font-semibold">
                        {award.placement}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#475569]">{award.organization}</p>
                  <span className="text-xs text-[#94A3B8]">{award.year}</span>
                  {award.description && (
                    <p className="text-xs text-[#64748B] mt-2">{award.description}</p>
                  )}
                  <SeeMore projectId={award.projectId} />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="w-5 h-5 text-[#012169]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Certificates
              </h2>
            </div>

            <div className="space-y-3">
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="border border-[#E2E8F0] rounded-2xl p-4 bg-white shadow-sm"
                >
                  <h3 className="font-bold text-[#0F172A] text-sm">{cert.title}</h3>
                  <p className="text-sm text-[#475569]">{cert.organization}</p>
                  <span className="text-xs text-[#94A3B8]">{cert.year}</span>
                  <SeeMore projectId={(cert as { projectId?: string }).projectId} />
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { category: 'Programming', skills: personalInfo.skills.programming },
              { category: 'Tools & Technologies', skills: personalInfo.skills.tools },
              { category: 'Design & Media', skills: personalInfo.skills.design },
              { category: 'Languages', skills: personalInfo.skills.languages },
              { category: 'Soft Skills', skills: personalInfo.skills.soft },
              { category: 'Interests', skills: personalInfo.interests }
            ].map((skillGroup) => (
              <div key={skillGroup.category}>
                <p className="text-xs font-semibold text-[#94A3B8] mb-2">{skillGroup.category}</p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 border border-[#E2E8F0] rounded-md text-[#475569] hover:border-[#012169] hover:bg-[#012169]/5 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
