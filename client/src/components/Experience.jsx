import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience, education } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Education</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A chronological timeline of my professional roles, engineering projects, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience / Internship Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Internships & Industry Experience</span>
            </h3>

            <div className="relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {experience.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#070a12] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-neon-cyan"></div>

                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 group-hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          ✓ Completed Internship
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                      <span className="text-cyan-400 font-semibold">{item.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capstone Project Card for Infosys Internship */}
                    <div className="mt-5 p-4 rounded-xl bg-white/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                          <span>Internship Capstone Project</span>
                        </span>
                        <a
                          href="https://github.com/BharathVijayRajkumar/Government-Subsidy-Grant-Disbursement-Tracking-System"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-cyan-300 hover:text-white hover:underline flex items-center gap-1"
                        >
                          <span>View Code on GitHub</span>
                          <span className="text-cyan-400">↗</span>
                        </a>
                      </div>
                      <h5 className="text-sm font-bold text-white mb-1">
                        Government Subsidy & Grant Disbursement Tracking System
                      </h5>
                      <p className="text-xs text-slate-300 leading-relaxed mb-2">
                        Engineered a transparent grant management web system using Java Spring Boot layered architecture (Controller, Service, Repository), Spring Data JPA, Hibernate, MySQL, and React.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">Java</span>
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">Spring Boot</span>
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">React.js</span>
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">MySQL</span>
                        <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">JPA/Hibernate</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-violet-400" />
              <span>Academic Background</span>
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-violet-500/40 transition-all hover:bg-surface-light"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-mono bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {edu.period}
                  </span>
                  {edu.score && (
                    <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {edu.score}
                    </span>
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-sm font-medium text-cyan-400 mb-3">
                  {edu.institution}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Core Competencies & Theoretical Foundation */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-surface to-surface-light">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                Core Strengths & CS Areas of Interest
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Proficient in Data Structures & Algorithms, Object-Oriented Programming (Java/Python), and Database Management Systems with a focus on writing clean, modular, and maintainable software.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Data Structures & Algorithms
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  OOP & Design Principles
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  DBMS & SQL Architecture
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Computer Networks
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  Operating Systems
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

