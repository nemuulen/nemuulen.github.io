import { motion } from 'motion/react';
import { ArrowRight, Github, Award } from 'lucide-react';
import { Project } from '../data/projects';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewProject: (projectId: string) => void;
}

export function ProjectCard({ project, index, onViewProject }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div className="h-full flex flex-col border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#012169] transition-all duration-300 bg-white shadow-sm hover:shadow-lg">
        
        <div className="relative overflow-hidden aspect-[16/10]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-white/95 text-[#012169] text-xs uppercase tracking-wider rounded-full font-semibold">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 bg-[#012169] text-white text-xs uppercase tracking-wider rounded-full font-semibold">
                Featured
              </span>
            </div>
          )}

          {project.award && (
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 px-2.5 py-1.5 bg-[#10B981]/90 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
                <Award className="w-3 h-3" />
                <span>{project.award}</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-4">
          {(project.timeline || project.funding) && (
            <div className="flex flex-wrap gap-2 mb-1.5 text-xs text-[#94A3B8]">
              {project.timeline && <span>{project.timeline}</span>}
              {project.funding && <span className="text-[#012169]">• {project.funding}</span>}
            </div>
          )}

          <h3 className="text-xl font-bold text-[#0F172A] mb-1.5 group-hover:text-[#012169] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-[#475569] mb-3 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-[#012169]/10 text-[#012169] rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2.5 border-t border-[#E2E8F0]">
            {/* Primary action - View Project Details Page */}
            <button
              onClick={() => onViewProject(project.id)}
              className="group/link inline-flex items-center text-sm font-semibold text-[#012169] hover:text-[#00539B]"
            >
              View Project
              <ArrowRight className="ml-1 w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" />
            </button>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-[#475569] hover:text-[#012169]"
              >
                <Github className="mr-1 w-3 h-3" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}