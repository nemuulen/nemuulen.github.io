import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 lg:px-12 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="mb-2">
            <span className="text-3xl md:text-4xl font-bold text-[#0F172A]">
              Let's work{' '}
            </span>
            <span 
              style={{ fontFamily: 'var(--font-script)' }} 
              className="text-[#012169] text-4xl md:text-5xl"
            >
              together
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block text-lg md:text-xl font-semibold text-[#012169] hover:text-[#00539B] transition-colors duration-300"
          >
            {personalInfo.email}
          </a>
        </motion.div>

        <div className="border-t border-[#E2E8F0] pt-4 mb-4" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-6">
            <a 
              href={personalInfo.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-medium text-[#64748B] hover:text-[#012169] transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href={personalInfo.linkedin}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-medium text-[#64748B] hover:text-[#012169] transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-xs font-medium text-[#64748B] hover:text-[#012169] transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-[#64748B]">© {currentYear} Nemuulen Togtbaatar</p>
            <p className="text-xs text-[#94A3B8] mt-1">Duke Kunshan University</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}