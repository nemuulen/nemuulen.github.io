import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/personal';

interface NavigationProps {
  currentPage: 'home' | 'projects' | 'about' | 'forfun';
  onNavigate: (page: 'home' | 'projects' | 'about' | 'forfun') => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            style={{ fontFamily: 'var(--font-script)' }}
            className="text-4xl text-[#012169] hover:scale-105 transition-transform duration-300"
          >
            Nemuulen
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'forfun', label: 'For Fun' }
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => onNavigate(nav.id as any)}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  currentPage === nav.id
                    ? 'text-[#012169]'
                    : 'text-[#475569] hover:text-[#012169]'
                }`}
              >
                {nav.label}
                {currentPage === nav.id && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#012169]" 
                  />
                )}
              </button>
            ))}
            
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-[#E2E8F0]">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#012169] transition-colors duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#012169] transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-[#94A3B8] hover:text-[#012169] transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button className="md:hidden text-[#012169]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-[#E2E8F0] mt-2 pt-4"
          >
            <div className="flex flex-col gap-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'forfun', label: 'For Fun' }
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => {
                    onNavigate(nav.id as any);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-semibold py-2 ${
                    currentPage === nav.id ? 'text-[#012169]' : 'text-[#475569]'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
              
              <div className="flex items-center gap-4 pt-3 border-t border-[#E2E8F0]">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#012169]">
                  <Github className="w-4 h-4" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#012169]">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-[#94A3B8] hover:text-[#012169]">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
