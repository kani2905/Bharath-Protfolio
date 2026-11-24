import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Database,
  Server,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenTerminal }) {
  const { personal } = portfolioData;

  const roles = [
    "Full-Stack Developer (MERN & Java)",
    "Java Full Stack Intern @ Infosys Springboard",
    "B.Tech IT @ Sona College of Technology",
    "Java & Spring Boot Developer",
    "IoT & Assistive Tech Engineer",
    "Python & Database Systems"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const techBadges = [
    { name: "Java", color: "text-amber-400 border-amber-500/20 bg-amber-500/5" },
    { name: "Python", color: "text-yellow-400 border-yellow-500/20 bg-yellow-500/5" },
    { name: "React.js", color: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5" },
    { name: "Spring Boot", color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" },
    { name: "Node.js & Express", color: "text-green-400 border-green-500/20 bg-green-500/5" },
    { name: "MongoDB", color: "text-emerald-300 border-emerald-500/20 bg-emerald-500/5" },
    { name: "MySQL", color: "text-blue-400 border-blue-500/20 bg-blue-500/5" },
    { name: "ESP32 & IoT", color: "text-violet-400 border-violet-500/20 bg-violet-500/5" }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-violet-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-glass border border-white/10 shadow-glass mb-6 animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              {personal.availability}
            </span>
          </div>

          {/* Profile Picture Avatar with Neon Glow */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-600 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse-slow"></div>
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-violet-500 shadow-neon-cyan">
              <img
                src={personal.avatar || "/profile.jpg"}
                alt={personal.name}
                className="w-full h-full object-cover object-top rounded-full bg-[#0d121f]"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-[#070a12] p-1 flex items-center justify-center border border-white/20 shadow-lg" title="Active & Ready for Opportunities">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight sm:leading-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
              {personal.name}
            </span>
          </h1>

          {/* Dynamic Animated Subtitle / Role */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-mono text-cyan-300 font-medium">
              &gt; {displayText}
              <span className="animate-pulse text-cyan-400 font-bold ml-1">_</span>
            </span>
          </div>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            {personal.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-neon-cyan transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 bg-surface-glass hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-xl transition-all transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Core Tech Stack Ribbon */}
          <div className="w-full max-w-3xl mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Core Tech Stack & Ecosystem
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              {techBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`px-3 py-1 text-xs font-medium rounded-lg border backdrop-blur-md transition-all hover:scale-105 cursor-default ${badge.color}`}
                >
                  {badge.name}
                </span>
              ))}
            </div>
          </div>

          {/* Live Impact Stats Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 text-center transition-all hover:border-cyan-500/30 hover:bg-surface-light/80"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
