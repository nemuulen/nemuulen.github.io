import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Download, FileText } from "lucide-react";

interface ProjectSection {
  title: string;
  content: React.ReactNode;
}

interface ProjectLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

interface ProjectDocument {
  title: string;
  description?: string;
  fileName: string; // e.g., "project-report.pdf" - should be in /public/files/projects/
}

export interface ProjectDetailData {
  // Project Info
  title: string;
  subtitle?: string;
  coverImage: string;
  tags: string[];
  timeline?: string;
  award?: string;
  funding?: string;
  
  // Content Sections
  overview: string;
  sections: ProjectSection[];
  
  // External Links
  links?: ProjectLink[];
  
  // Documents (PDFs, etc.)
  documents?: ProjectDocument[];
  
  // Gallery Images
  gallery?: string[];
}

interface ProjectDetailTemplateProps {
  data: ProjectDetailData;
  onBack: () => void;
}

export function ProjectDetailTemplate({ data, onBack }: ProjectDetailTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#012169] hover:text-[#00539B] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm">Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-[#012169] mb-3">
              {data.title}
            </h1>
            {data.subtitle && (
              <p className="text-xl text-[#475569] mb-6">{data.subtitle}</p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap gap-3 mb-8">
              {data.timeline && (
                <span className="px-3 py-1.5 bg-[#012169]/10 text-[#012169] rounded-lg text-sm font-medium">
                  {data.timeline}
                </span>
              )}
              {data.award && (
                <span className="px-3 py-1.5 bg-[#00539B]/10 text-[#00539B] rounded-lg text-sm font-medium">
                  🏆 {data.award}
                </span>
              )}
              {data.funding && (
                <span className="px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                  💰 {data.funding}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs font-medium text-[#475569]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-12"
          >
            <img
              src={data.coverImage}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-8 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#012169] mb-4">Overview</h2>
            <p className="text-base text-[#475569] leading-relaxed">
              {data.overview}
            </p>
          </motion.div>

          {/* Custom Sections */}
          {data.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#012169] mb-4">
                {section.title}
              </h2>
              <div className="text-base text-[#475569] leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}

          {/* Documents Section */}
          {data.documents && data.documents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#012169] mb-4">
                Documents
              </h2>
              <div className="space-y-3">
                {data.documents.map((doc, index) => (
                  <a
                    key={index}
                    href={`/files/projects/${doc.fileName}`}
                    download
                    className="flex items-center gap-3 p-4 bg-white border border-[#E2E8F0] rounded-lg hover:border-[#012169] hover:shadow-md transition-all group"
                  >
                    <FileText className="w-6 h-6 text-[#012169]" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0F172A] group-hover:text-[#012169] transition-colors">
                        {doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-sm text-[#475569]">{doc.description}</p>
                      )}
                    </div>
                    <Download className="w-5 h-5 text-[#475569] group-hover:text-[#012169] transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links Section */}
          {data.links && data.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#012169] mb-4">Links</h2>
              <div className="flex flex-wrap gap-3">
                {data.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#012169] hover:bg-[#00539B] text-white rounded-lg transition-all hover:scale-105 text-sm font-semibold"
                  >
                    {link.icon || <ExternalLink className="w-4 h-4" />}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Image Gallery */}
          {data.gallery && data.gallery.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#012169] mb-4">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={image}
                      alt={`${data.title} - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="py-12 px-6 lg:px-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#012169] hover:bg-[#00539B] text-white rounded-lg transition-all hover:scale-105 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </section>
    </div>
  );
}
