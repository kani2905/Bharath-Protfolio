import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Phone,
  GraduationCap, 
  FileDown, 
  Sparkles,
  Layers,
  Database
} from 'lucide-react';

export default function About({ onOpenResume }) {
  const { about, personal, education } = portfolioData;

  const pillarIcons = [
    <Layers className="w-5 h-5 text-cyan-400" />,
    <Zap className="w-5 h-5 text-amber-400" />,
    <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    <Cpu className="w-5 h-5 text-violet-400" />
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KNOW MORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Bharath</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            {about.headline}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Profile Card / Code Window */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 relative border border-white/10 shadow-glass overflow-hidden">
              {/* Profile Card Header with Real Avatar */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-sky-400 to-violet-500 shadow-neon-cyan">
                    <img
                      src={personal.avatar || "/profile.jpg"}
                      alt={personal.name}
                      className="w-full h-full object-cover object-top rounded-[14px]"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070a12]"></span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {personal.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">B.Tech IT @ Sona College</p>
                  <p className="text-xs text-slate-400 mt-0.5">{personal.location}</p>
                </div>
              </div>

              {/* Header bar mimicking an IDE terminal */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  developer.config.json
                </div>
              </div>

              {/* Code snippet presentation */}
              <pre className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto pb-4">
                <code>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-cyan-400">developer</span> = &#123;{'\n'}
                  {'  '}<span className="text-slate-400">name:</span> <span className="text-emerald-300">"{personal.name}"</span>,{'\n'}
                  {'  '}<span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.Tech Information Technology"</span>,{'\n'}
                  {'  '}<span className="text-slate-400">college:</span> <span className="text-emerald-300">"Sona College of Technology, Salem"</span>,{'\n'}
                  {'  '}<span className="text-slate-400">cgpa:</span> <span className="text-amber-300">"7.42 / 10"</span>,{'\n'}
                  {'  '}<span className="text-slate-400">languages:</span> [<span className="text-cyan-300">"Java"</span>, <span className="text-cyan-300">"Python"</span>, <span className="text-cyan-300">"JavaScript"</span>],{'\n'}
                  {'  '}<span className="text-slate-400">backend:</span> [<span className="text-violet-300">"Spring Boot"</span>, <span className="text-violet-300">"Node.js"</span>, <span className="text-violet-300">"Express"</span>],{'\n'}
                  {'  '}<span className="text-slate-400">frontend:</span> [<span className="text-cyan-300">"React.js"</span>, <span className="text-cyan-300">"HTML5/CSS"</span>],{'\n'}
                  {'  '}<span className="text-slate-400">databases:</span> [<span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"MongoDB"</span>],{'\n'}
                  {'  '}<span className="text-slate-400">openToWork:</span> <span className="text-amber-400">true</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              {/* Meta details list */}
              <div className="space-y-3 pt-3 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-violet-400 flex-shrink-0" />
                  <span>{education[0].degree} — {education[0].institution} ({education[0].score})</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{personal.phone}</span>
                </div>
              </div>

              {/* Resume Download CTA */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={onOpenResume}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl transition-all shadow-neon-cyan"
                >
                  <FileDown className="w-4 h-4" />
                  <span>View Detailed Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & 4 Architectural Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <span>Crafting High-Impact Digital Experiences</span>
              </h3>
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-surface-light/80"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                    {pillarIcons[index % pillarIcons.length]}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

