import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Globe, Brain, Database } from 'lucide-react';
import { skills } from '../data/portfolio';

const iconMap = { Code2, Globe, Brain, Database };

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#161b22]/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest">Technical Skills</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] mt-2">What I Work With</h2>
            <p className="text-[#8b949e] mt-3 max-w-xl mx-auto text-sm">
              A collection of technologies and tools I&apos;ve worked with across academic projects and personal exploration.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon];
            return (
              <FadeIn key={skill.category} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#161b22] border border-[#21262d] rounded-2xl p-6 h-full hover:border-[#6366f1]/30 transition-colors duration-300"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
                      {Icon && <Icon size={18} className="text-[#6366f1]" />}
                    </div>
                    <h3 className="text-[#f0f6fc] font-semibold text-sm">{skill.category}</h3>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 bg-[#0d1117] border border-[#21262d] text-[#8b949e] text-xs rounded-lg font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
