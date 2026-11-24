import React, { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Bharath R CLI [Version 1.0.0]\nType "help" to view available developer commands, or "projects" to see featured code.`
    }
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newEntry = { type: 'user', text: `$ ${cmd}` };

    let output = '';

    switch (trimmed) {
      case 'help':
        output = [
          'Available Commands:',
          '  help           - Show this list of commands',
          '  whoami         - Display developer profile and summary',
          '  skills         - List core technical competencies',
          '  projects       - List featured engineering projects',
          '  experience     - Show internship & career history',
          '  education      - Show academic qualifications & CGPA',
          '  certifications - Show NPTEL, AWS, Infosys credentials',
          '  contact        - Display contact phone, email & socials',
          '  date           - Display current system date & time',
          '  sudo           - Administrative access request',
          '  clear          - Clear the terminal screen',
          '  exit           - Close the terminal window'
        ].join('\n');
        break;

      case 'whoami':
      case 'bio':
        output = [
          `Name:        ${portfolioData.personal.name}`,
          `Role:        ${portfolioData.personal.title}`,
          `College:     ${portfolioData.personal.college}`,
          `Degree:      B.Tech Information Technology (CGPA: 7.42/10)`,
          `Languages:   Java, Python, JavaScript, SQL`,
          `Location:    ${portfolioData.personal.location}`,
          `Status:      ${portfolioData.personal.availability}`
        ].join('\n');
        break;

      case 'skills':
        output = portfolioData.skills.categories
          .map(
            (c) =>
              `[${c.name}]\n` +
              c.skills.map((s) => `  • ${s.name.padEnd(25)} [${s.level}%]`).join('\n')
          )
          .join('\n\n');
        break;

      case 'projects':
        output = portfolioData.projects
          .map(
            (p, idx) =>
              `${idx + 1}. ${p.title} (${p.category})\n   Tags: ${p.tags.join(', ')}\n   Desc: ${p.description}\n   Code: ${p.githubUrl}`
          )
          .join('\n\n');
        break;

      case 'experience':
        output = portfolioData.experience
          .map(
            (e) =>
              `Role:    ${e.role} @ ${e.company} (${e.period})\nLoc:     ${e.location}\nDetails: ${e.description}`
          )
          .join('\n\n');
        break;

      case 'education':
        output = portfolioData.education
          .map(
            (e) =>
              `Degree:      ${e.degree}\nInstitution: ${e.institution}\nScore:       ${e.score} (${e.period})\nDetails:     ${e.description}`
          )
          .join('\n\n');
        break;

      case 'certifications':
        output = portfolioData.certifications
          .map((c, i) => `${i + 1}. ${c.title} — ${c.issuer} (${c.type})`)
          .join('\n');
        break;

      case 'contact':
        output = [
          `Mobile:   ${portfolioData.personal.phone}`,
          `Email:    ${portfolioData.personal.email}`,
          `GitHub:   ${portfolioData.personal.github}`,
          `LinkedIn: ${portfolioData.personal.linkedin}`,
          `Location: ${portfolioData.personal.location}`
        ].join('\n');
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'sudo':
      case 'sudo rm -rf /':
        output = 'Permission denied: Nice try! User is not in the sudoers file. This incident will be reported.';
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      case '':
        output = '';
        break;

      default:
        output = `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`;
        break;
    }

    setHistory((prev) => [...prev, newEntry, { type: 'response', text: output }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-card w-full max-w-3xl h-[560px] rounded-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Window Header Bar */}
        <div className="bg-[#0b0f19] px-4 py-3 flex items-center justify-between border-b border-white/10 select-none">
          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:brightness-125 transition-all"
              title="Close"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>bharath@developer: ~ (zsh)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto bg-[#070a12]/95 text-slate-200 text-xs sm:text-sm leading-relaxed space-y-3 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'user' ? (
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span>{item.text}</span>
                </div>
              ) : item.type === 'system' ? (
                <div className="text-slate-400 p-2 rounded bg-white/5 border border-white/5">
                  {item.text}
                </div>
              ) : (
                <div className="text-emerald-300 font-mono pl-2">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Prompt Input */}
          <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command (e.g. help, skills, projects)..."
              className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono placeholder-slate-600"
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Helper */}
        <div className="bg-[#0b0f19] px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
          <span>Type <code className="text-cyan-400">help</code> for list</span>
          <span>Press ESC or click outside to exit</span>
        </div>
      </div>
    </div>
  );
}

