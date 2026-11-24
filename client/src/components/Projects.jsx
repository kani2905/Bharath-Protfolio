import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Full-Stack MERN', 'Java Full Stack', 'IoT & AI', 'AI & Digital Forensics'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Showcasing HOLOID (Hospital Bed Management), Government Subsidy & Grant Tracking, Smart Wearable Glass with Emotion Detection, and Deepfake Forensic Analysis.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white shadow-neon-cyan'
                  : 'glass-card text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <div className="mt-16 glass-card rounded-2xl p-8 border border-white/10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">
            Looking for more repositories and open source work?
          </h3>
          <p className="text-sm text-slate-400 mb-6">
            I regularly publish experiments, utility libraries, and open-source contributions.
          </p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-cyan-400 transition-all"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Architecture / Details Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
