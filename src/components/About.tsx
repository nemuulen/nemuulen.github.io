import { motion } from 'motion/react';
import { personalInfo, education, leadership, awards, workExperience } from '../data/personal';
import { GraduationCap, Award, Users, Briefcase, MapPin, Mail, Phone, Download } from 'lucide-react';

export function About() {
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
          
          <p className="text-lg text-[#475569] max-w-3xl mx-auto mb-4 leading-relaxed">
            {personalInfo.bio}
          </p>

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
            href="/files/Nemuulen_gradCV.docx"
            download="Nemuulen_Togtbaatar_CV.docx"
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
              </div>
            ))}
          </div>
        </motion.section>

        {/* Leadership & Awards */}
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
                  <ul className="space-y-1 mt-2">
                    {role.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-[#475569] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#012169] rounded-full mt-1 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
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
        >
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { category: 'Programming', skills: personalInfo.skills.programming },
              { category: 'Frameworks', skills: personalInfo.skills.frameworks },
              { category: 'Design', skills: personalInfo.skills.design },
              { category: 'Tools', skills: personalInfo.skills.tools },
              { category: 'Languages', skills: personalInfo.skills.languages }
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