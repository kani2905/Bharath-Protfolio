import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Printer, Phone, Mail, MapPin, Globe, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, about, skills, experience, education, projects, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-4xl max-h-[94vh] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#0b0f19] px-6 py-4 flex items-center justify-between border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-semibold text-white">
              Curriculum Vitae — {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 shadow-neon-cyan transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-[#0a0e1a] text-slate-200 text-sm">
          {/* Resume Header with Headshot */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b border-white/10 pb-5 gap-5">
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-black tracking-wide text-white">
                {personal.name.toUpperCase()}
              </h1>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs text-slate-300 mt-2 font-mono">
                <span className="text-emerald-400 font-semibold">Mobile: {personal.phone}</span>
                <span className="text-slate-600">|</span>
                <a href={`mailto:${personal.email}`} className="text-cyan-400 hover:underline">
                  E-mail: {personal.email}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs text-slate-300 mt-1.5 font-mono">
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  LinkedIn: bharathr-it
                </a>
                <span className="text-slate-600">|</span>
                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  GitHub: BharathVijayRajkumar
                </a>
              </div>
            </div>
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg flex-shrink-0 bg-slate-900">
              <img
                src={personal.avatar || "/profile.jpg"}
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Core Competencies & Key Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
                Core Competencies
              </h2>
              <ul className="text-xs sm:text-sm space-y-1.5 text-slate-300">
                <li><strong className="text-white">• Programming Languages:</strong> Java, Python</li>
                <li><strong className="text-white">• Frontend:</strong> HTML, CSS, JavaScript, React.js</li>
                <li><strong className="text-white">• Backend:</strong> Java, Spring Boot, Node.js, Express.js</li>
                <li><strong className="text-white">• Database:</strong> MySQL, MongoDB</li>
                <li><strong className="text-white">• Tools / Platforms:</strong> VS Code, GitHub</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
                Key Strengths & Areas of Interest
              </h2>
              <ul className="text-xs sm:text-sm space-y-1.5 text-slate-300">
                {skills.keyStrengths.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
                <li className="pt-1 text-slate-400">
                  <strong className="text-white">Areas of Interest:</strong> Operating Systems, DBMS, Computer Networks
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">• {edu.degree}</span>
                    <span className="text-slate-400"> — {edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-emerald-400 font-semibold">{edu.score}</span>
                    <span className="text-slate-500">({edu.period})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
              Internship
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white text-sm">
                    {exp.company} — {exp.role} ({exp.period})
                  </h3>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-white text-sm">
                      {idx + 1}. {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    <strong>Description:</strong> {proj.description}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    <strong>Technologies:</strong> {proj.tags.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Soft Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
                Certifications & Professional Training
              </h2>
              <ul className="text-xs space-y-1 text-slate-300">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    • <strong>{c.title}</strong> — <span className="text-cyan-400">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold border-b border-white/10 pb-1 mb-2">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skills.softSkills.map((soft, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10">
                    {soft}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
