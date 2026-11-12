import { GitBranch, Link, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#21262d] py-10 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 bg-[#6366f1] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              MI
            </span>
            <div>
              <p className="text-[#f0f6fc] font-semibold text-sm">Mohammed Ibrahim R</p>
              <p className="text-[#484f58] text-xs">CS Engineering Student</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Ibrahim3115" target="_blank" rel="noopener noreferrer"
              className="text-[#484f58] hover:text-[#f0f6fc] transition-colors">
              <GitBranch size={18} />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
              className="text-[#484f58] hover:text-[#f0f6fc] transition-colors">
              <Link size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-[#21262d] mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[#484f58] text-xs">
          <p>&copy; {year} Mohammed Ibrahim R. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed &amp; built with <Heart size={11} className="text-[#6366f1] mx-1" /> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
