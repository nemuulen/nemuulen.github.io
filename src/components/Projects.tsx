import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { useState } from 'react';

type CategoryFilter = 'all' | 'web' | 'app' | 'design' | 'class' | 'others';

interface ProjectsProps {
  onViewProject: (projectId: string) => void;
}

export function Projects({ onViewProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const categories = [
    { id: 'all' as CategoryFilter, label: 'All Projects' },
    { id: 'web' as CategoryFilter, label: 'Web' },
    { id: 'app' as CategoryFilter, label: 'App' },
    { id: 'design' as CategoryFilter, label: 'Design' },
    { id: 'class' as CategoryFilter, label: 'Class Project' },
    { id: 'others' as CategoryFilter, label: 'Others' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 pb-10 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <h1 className="mb-3">
            <span className="text-5xl md:text-6xl font-bold text-[#0F172A]">
              All{' '}
            </span>
            <span 
              style={{ fontFamily: 'var(--font-script)' }} 
              className="text-[#012169] text-6xl md:text-7xl"
            >
              Projects
            </span>
          </h1>
          
          <p className="text-[#475569] max-w-2xl mx-auto">
            A collection of work spanning web development, mobile applications, design systems, and AI research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-6 pb-4 border-b border-[#E2E8F0]"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-[#012169] text-white shadow-lg'
                  : 'border border-[#E2E8F0] text-[#475569] hover:border-[#012169]'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProjectCard project={project} index={index} onViewProject={onViewProject} />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#94A3B8] py-12">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}