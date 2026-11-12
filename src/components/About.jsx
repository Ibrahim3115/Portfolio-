import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Code2, Lightbulb } from 'lucide-react';

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
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

export default function About() {
  const highlights = [
    { icon: GraduationCap, label: 'Final Year B.E. CSE', sub: 'KIT, Tiruppur' },
    { icon: Code2, label: 'Software Developer', sub: 'Python & Web Dev' },
    { icon: Lightbulb, label: 'AI Enthusiast', sub: 'LLM Applications' },
    { icon: MapPin, label: 'Location', sub: 'Tiruppur, Tamil Nadu' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f0f6fc] mt-2">Who I Am</h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Visual card */}
          <FadeIn delay={0.1}>
            <div className="bg-[#161b22] border border-[#21262d] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6366f1]/5 rounded-full blur-2xl" />
              {/* Monogram */}
              <div className="w-20 h-20 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-[#6366f1] text-2xl font-bold">MI</span>
              </div>
              <h3 className="text-[#f0f6fc] text-xl font-bold mb-1">Mohammed Ibrahim R</h3>
              <p className="text-[#8b949e] text-sm mb-6">CS Engineering Student</p>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {highlights.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-[#0d1117] rounded-xl p-3 border border-[#21262d]">
                    <Icon size={16} className="text-[#6366f1] mb-2" />
                    <p className="text-[#f0f6fc] text-xs font-semibold">{label}</p>
                    <p className="text-[#484f58] text-xs">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-6 pt-6 border-t border-[#21262d]">
                <p className="text-[#484f58] text-sm italic leading-relaxed">
                  &quot;I believe in learning by building — every project is an opportunity to grow.&quot;
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Text */}
          <div className="space-y-5">
            <FadeIn delay={0.15}>
              <p className="text-[#8b949e] leading-relaxed">
                I&apos;m a final-year B.E. Computer Science and Engineering student at Kalaignarkarunanidhi Institute of Technology in Tiruppur, Tamil Nadu. My journey in computer science has been driven by curiosity and a genuine interest in understanding how technology can solve real-world problems.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#8b949e] leading-relaxed">
                I enjoy working on software development projects, particularly those involving artificial intelligence, machine learning, and Python. Building applications that are both functional and thoughtful gives me a sense of accomplishment — from automating repetitive tasks to exploring how large language models can be applied practically.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-[#8b949e] leading-relaxed">
                Whether it&apos;s writing clean backend code, experimenting with computer vision, or building a web interface, I approach each project as a learning experience. I enjoy solving programming challenges and picking up new technologies along the way.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[#8b949e] leading-relaxed">
                I&apos;m actively looking to grow as a software engineer — taking on real responsibilities, contributing to meaningful projects, and working alongside people from whom I can learn. I&apos;m eager to bring my enthusiasm and work ethic into a professional environment.
              </p>
            </FadeIn>
            <FadeIn delay={0.35}>
              <div className="flex flex-wrap gap-2 pt-2">
                {['AI & ML', 'Python', 'Web Development', 'Computer Vision', 'Open Source'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#6366f1]/10 border border-[#6366f1]/20 text-[#818cf8] text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
