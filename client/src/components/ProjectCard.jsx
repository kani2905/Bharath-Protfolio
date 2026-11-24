import React from 'react';
import { Sparkles, ArrowUpRight, Info, Award } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onSelectProject }) {
  return (
    <div className="glass-card rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-neon-cyan/20 flex flex-col justify-between group p-6 sm:p-7">
      <div>
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/5">
          <div className="flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Featured</span>
              </span>
            )}
            {project.badge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Award className="w-3 h-3 text-amber-400" />
                <span>{project.badge}</span>
              </span>
            )}
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-white/5 text-slate-300 border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-2" />
        </h3>
        <p className="text-xs font-mono text-cyan-400/90 mt-1.5 mb-3.5">
          {project.subtitle}
        </p>

        {/* Metric Highlight Pill */}
        {project.metrics && (
          <div className="mb-4 px-3 py-1.5 rounded-xl text-xs font-mono bg-[#070a12]/80 text-emerald-400 border border-emerald-500/25 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
            <span className="truncate">{project.metrics}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectProject(project)}
          className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Architecture & Details</span>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all"
          title="View Code on GitHub"
        >
          <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span>View Code</span>
        </a>
      </div>
    </div>
  );
}
