import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';

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

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#161b22]/30">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest">Education</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] mt-2">Academic Background</h2>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-12 bottom-0 w-px bg-[#21262d]" />

              {/* Education Card */}
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
                    <GraduationCap size={24} className="text-[#6366f1]" />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex-1 bg-[#161b22] border border-[#21262d] rounded-2xl p-6 hover:border-[#6366f1]/30 transition-colors duration-300">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-xs rounded-full font-medium mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]" />
                    Currently Enrolled
                  </span>

                  <h3 className="text-[#f0f6fc] text-xl font-bold mb-1">
                    B.E. Computer Science and Engineering
                  </h3>
                  <p className="text-[#6366f1] font-semibold text-sm mb-4">
                    Kalaignarkarunanidhi Institute of Technology (KIT)
                  </p>

                  <div className="flex flex-wrap gap-4 text-[#8b949e] text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="text-[#484f58]" />
                      <span>Final Year</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#484f58]" />
                      <span>Tiruppur, Tamil Nadu</span>
                    </div>
                  </div>

                  {/* Areas of focus */}
                  <div className="mt-5 pt-5 border-t border-[#21262d]">
                    <p className="text-[#484f58] text-xs uppercase tracking-wider font-medium mb-3">Areas of Interest</p>
                    <div className="flex flex-wrap gap-2">
                      {['Artificial Intelligence', 'Software Engineering', 'Computer Vision', 'Web Development', 'Cybersecurity'].map((area) => (
                        <span key={area} className="px-2.5 py-1 bg-[#0d1117] border border-[#21262d] text-[#8b949e] text-xs rounded-lg">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
