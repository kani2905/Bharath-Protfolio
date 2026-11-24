import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Cpu, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Terminal,
  HeartHandshake
} from 'lucide-react';

export default function Skills() {
  const { categories, keyStrengths, areasOfInterest, softSkills } = portfolioData.skills;
  const { certifications } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const allSkills = categories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.name }))
  );

  const filteredSkills =
    activeCategory === 'All'
      ? categories
      : categories.filter((cat) => cat.name === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">Core Competencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A comprehensive overview of programming languages, web frameworks, database systems, and professional certifications.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
              activeCategory === 'All'
                ? 'bg-cyan-500 text-white shadow-neon-cyan'
                : 'glass-card text-slate-400 hover:text-white hover:border-cyan-500/30'
            }`}
          >
            All Categories ({allSkills.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-2 ${
                activeCategory === cat.name
                  ? 'bg-cyan-500 text-white shadow-neon-cyan'
                  : 'glass-card text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredSkills.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-neon-cyan/20"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {cat.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  {cat.skills.length} Competencies
                </span>
              </div>

              {/* Skills List with Proficiency Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5">
                      <span className="font-medium text-slate-200 group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-700 ease-out group-hover:from-cyan-400 group-hover:to-violet-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths & Computer Science Areas of Interest */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Key Strengths */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Strengths</span>
            </h3>
            <ul className="space-y-3">
              {keyStrengths.map((str, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas of Interest */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Areas of Interest (CS)</span>
            </h3>
            <ul className="space-y-3">
              {areasOfInterest.map((area, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-violet-400" />
              <span>Professional Soft Skills</span>
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {softSkills.map((soft, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Professional Training Showcase */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              <span>Certifications & Professional Training</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Credentials and specialized coursework accredited by NPTEL, AWS Academy, Infosys, and FutureSkills Prime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-white/10 hover:border-amber-400/40 transition-all hover:bg-surface-light group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {cert.badge}
                  </span>
                  <Award className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-cyan-400 font-medium mt-1">
                  {cert.issuer}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {cert.type}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
