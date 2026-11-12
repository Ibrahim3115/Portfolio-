import { motion } from 'framer-motion';
import { ArrowDown, GitBranch, Link, Download, ArrowRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function ProfilePhoto() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto flex items-center justify-center">
      {/* Ambient glow behind the frame */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl scale-110 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, transparent 70%)' }}
      />

      {/* Animated gradient border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          padding: '2px',
          background: 'conic-gradient(from 0deg, #6366f1, #818cf8, #a5b4fc, #6366f1)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          borderRadius: '1.5rem',
        }}
      />

      {/* Static subtle border fallback + hover group */}
      <motion.div
        whileHover={{ scale: 1.04, y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          boxShadow: '0 0 0 2px rgba(99,102,241,0.5), 0 8px 40px rgba(99,102,241,0.2)',
          background: '#161b22',
        }}
      >
        <img
          src="/profile.png"
          alt="Mohammed Ibrahim"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            borderRadius: '1.5rem',
          }}
        />

        {/* Subtle inner vignette overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(13,17,23,0.4) 100%)',
          }}
        />
      </motion.div>

      {/* Corner accent brackets — matching existing SVG style */}
      {[
        { top: '-10px', left: '-10px', borderTop: '2px solid #6366f1', borderLeft: '2px solid #6366f1', borderRadius: '4px 0 0 0' },
        { top: '-10px', right: '-10px', borderTop: '2px solid #6366f1', borderRight: '2px solid #6366f1', borderRadius: '0 4px 0 0' },
        { bottom: '-10px', left: '-10px', borderBottom: '2px solid #6366f1', borderLeft: '2px solid #6366f1', borderRadius: '0 0 0 4px' },
        { bottom: '-10px', right: '-10px', borderBottom: '2px solid #6366f1', borderRight: '2px solid #6366f1', borderRadius: '0 0 4px 0' },
      ].map((style, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 pointer-events-none"
          style={{ ...style, opacity: 0.7 }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#21262d] bg-[#161b22] text-[#8b949e] text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0f6fc] leading-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-[#6366f1]">Mohammed<br />Ibrahim.</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-[#8b949e] font-medium mb-6">
              Computer Science Engineer{' '}
              <span className="text-[#484f58]">|</span>{' '}
              AI Enthusiast{' '}
              <span className="text-[#484f58]">|</span>{' '}
              Software Developer
            </motion.p>

            <motion.p variants={item} className="text-[#8b949e] leading-relaxed mb-8 max-w-lg">
              I enjoy building practical software solutions using programming, artificial intelligence, and modern technologies. I am passionate about learning, experimenting, and turning ideas into working applications.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6366f1] hover:bg-[#818cf8] text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                View My Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="/resume-placeholder.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#21262d] hover:border-[#6366f1] text-[#8b949e] hover:text-[#f0f6fc] font-semibold rounded-xl transition-all duration-200 text-sm bg-[#161b22]"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 mt-8">
              <a href="https://github.com/Ibrahim3115" target="_blank" rel="noopener noreferrer" className="text-[#484f58] hover:text-[#f0f6fc] transition-colors">
                <GitBranch size={20} />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-[#484f58] hover:text-[#f0f6fc] transition-colors">
                <Link size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hidden md:flex justify-center items-center"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#484f58]"
        >
          <span className="text-xs">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
