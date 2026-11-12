import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, ExternalLink, Search, Camera, Shield, ImageOff } from 'lucide-react';
import { projects } from '../data/portfolio';

const iconMap = { Search, Camera, Shield };

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function ProjectImagePlaceholder({ icon, gradient }) {
  const Icon = iconMap[icon];
  return (
    <div className={`w-full h-48 bg-gradient-to-br ${gradient} border-b border-[#21262d] flex flex-col items-center justify-center gap-3 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-[#0d1117]/40" />
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-14 h-14 rounded-2xl bg-[#6366f1]/20 border border-[#6366f1]/30 flex items-center justify-center">
          {Icon && <Icon size={24} className="text-[#6366f1]" />}
        </div>
        <div className="flex items-center gap-1.5 text-[#484f58] text-xs">
          <ImageOff size={12} />
          <span>Project Preview Coming Soon</span>
        </div>
      </div>
      {/* Decorative grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${icon}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#6366f1" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${icon})`} />
      </svg>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest">Projects</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] mt-2">Featured Work</h2>
            <p className="text-[#8b949e] mt-3 max-w-xl mx-auto text-sm">
              A selection of projects I&apos;ve been building — each one a hands-on exploration of different technologies and ideas.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-[#161b22] border border-[#21262d] rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#6366f1]/30 transition-colors duration-300"
              >
                {/* Image Placeholder */}
                <ProjectImagePlaceholder icon={project.icon} gradient={project.gradient} />

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Status + Title */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-[#f0f6fc] font-bold text-lg leading-tight">{project.title}</h3>
                      {project.subtitle && (
                        <p className="text-[#8b949e] text-sm mt-0.5">{project.subtitle}</p>
                      )}
                    </div>
                    <span className="shrink-0 px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#8b949e] text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-xs rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#0d1117] border border-[#21262d] hover:border-[#6366f1]/40 text-[#8b949e] hover:text-[#f0f6fc] rounded-xl text-xs font-medium transition-all duration-200"
                    >
                      <GitBranch size={14} />
                      GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#6366f1] hover:bg-[#818cf8] text-white rounded-xl text-xs font-medium transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#161b22] border border-[#21262d] text-[#484f58] rounded-xl text-xs font-medium cursor-not-allowed">
                        <ExternalLink size={14} />
                        Demo Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/Ibrahim3115"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#21262d] hover:border-[#6366f1]/40 text-[#8b949e] hover:text-[#f0f6fc] rounded-xl text-sm font-medium transition-all duration-200 bg-[#161b22]"
            >
              <GitBranch size={16} />
              View All on GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
