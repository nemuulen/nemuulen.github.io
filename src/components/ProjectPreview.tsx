import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

interface ProjectPreviewProps {
  onNavigateToProjects: () => void;
  onViewProject: (projectId: string) => void;
}

export function ProjectPreview({ onNavigateToProjects, onViewProject }: ProjectPreviewProps) {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="py-10 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#0F172A]">
              Featured{' '}
            </span>
            <span 
              style={{ fontFamily: 'var(--font-script)' }} 
              className="text-[#012169] text-5xl md:text-6xl"
            >
              Projects
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onViewProject={onViewProject} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={onNavigateToProjects}
            className="group inline-flex items-center px-5 py-2.5 bg-[#012169] hover:bg-[#00539B] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}