# Bharath R — Full-Stack Developer Portfolio (MERN Architecture)

A professional, high-performance, neo-modern portfolio website built with the **MERN** ecosystem (React, Vite, Node.js, Express, MongoDB/JSON store), styled with **Tailwind CSS**, and enhanced with **Framer Motion** and an **interactive developer CLI terminal**.

---

## 🌟 Key Features

- **Sleek Neo-Modern Dark Aesthetic**: Deep-slate background (`#070a12`), glassmorphism cards, glowing ambient radial gradients, and smooth micro-interactions.
- **Dynamic Hero Section**: Real-time rotating role typing effect, live availability status beacon, quick CTA buttons, and impact metric counters.
- **Interactive Developer CLI Terminal (`Ctrl + K`)**: An authentic terminal modal where recruiters and developers can type commands like `help`, `skills`, `projects`, `experience`, `contact`, and `whoami`.
- **Comprehensive Skills Matrix**: Filterable category views (Frontend, Backend & APIs, Databases, DevOps & Cloud) with visual proficiency bars.
- **Showcase Projects with Architecture Drawer**: Categorized projects (MERN Stack, Full Stack, AI & Full Stack, Cloud & Backend) with metrics badges, tags, GitHub links, live demos, and technical architecture modals.
- **Career & Education Timeline**: Interactive vertical milestones tracking professional accomplishments.
- **Live Contact Form**: Connected to Node/Express backend (`/api/contact`) with validation, status notifications, and confetti celebrations upon delivery.
- **Built-in Resume Modal**: In-browser curriculum vitae viewer with one-click print-to-PDF formatting.
- **Single-Source Configuration**: Easily update all your data in seconds via `client/src/data/portfolioData.js`.

---

## 📁 Project Architecture

```
Portfolio/
├── client/                     # Frontend Application (React + Vite + Tailwind CSS)
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── components/         # Modular UI Components
│   │   │   ├── Navbar.jsx      # Glassmorphic header with navigation & CTAs
│   │   │   ├── Hero.jsx        # Dynamic headline, typewriter, and stats
│   │   │   ├── About.jsx       # Narrative bio & 4 architectural pillars
│   │   │   ├── Skills.jsx      # Filterable skills matrix with progress indicators
│   │   │   ├── Projects.jsx    # Projects grid & filter tabs
│   │   │   ├── ProjectCard.jsx # Card with hover effects & metrics
│   │   │   ├── ProjectModal.jsx# In-depth architectural details popup
│   │   │   ├── Experience.jsx  # Vertical milestone & education timeline
│   │   │   ├── Contact.jsx     # Interactive contact form & socials
│   │   │   ├── TerminalModal.jsx # Interactive CLI terminal (Ctrl+K)
│   │   │   ├── ResumeModal.jsx # Formatted CV viewer & printable resume
│   │   │   ├── Footer.jsx      # Footer with back-to-top & social links
│   │   │   └── Icons.jsx       # Crisp SVG icons for GitHub & LinkedIn
│   │   ├── data/
│   │   │   └── portfolioData.js# 💡 Central configuration file for all portfolio data
│   │   ├── App.jsx             # Main application container
│   │   ├── index.css           # Tailwind directives & neo-modern utilities
│   │   └── main.jsx            # Application entrypoint
│   ├── tailwind.config.js      # Custom colors, glows, and animations
│   ├── vite.config.js          # Vite config with backend API proxy (/api -> 5000)
│   └── package.json
│
├── server/                     # Backend API (Node.js + Express)
│   ├── server.js               # Express server with /api/contact & /api/health
│   ├── messages.json           # Contact form submissions log
│   └── package.json
│
├── package.json                # Root scripts to run client & server concurrently
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Start Both Frontend & Backend Concurrently
From the root `Portfolio` directory, run:

```bash
npm run dev
```

This will run:
- **Client (Vite React)** at: `http://localhost:5173`
- **Server (Express API)** at: `http://localhost:5000`

### 3. Individual Commands
If you wish to run them separately:

- **Frontend Only**:
  ```bash
  cd client
  npm run dev
  ```

- **Backend Only**:
  ```bash
  cd server
  npm run dev
  ```

- **Build Client for Production**:
  ```bash
  cd client
  npm run build
  ```

---

## ✏️ How to Customize Your Portfolio

All personal information, social links, project details, and skills are centralized in:

📂 `client/src/data/portfolioData.js`

To update your data:
1. Open `client/src/data/portfolioData.js`.
2. Update your GitHub/LinkedIn links, bio, and contact email (`bharathrajkumar25@gmail.com`).
3. Add or modify projects, skills, or experience entries.
4. Save the file — Vite will instantly Hot-Module-Reload (HMR) your changes without restarting the server!

---

## 🚢 Deployment Options

### Option A: Full-Stack on Render / Railway
1. Push your repository to GitHub.
2. In [Render](https://render.com) or [Railway](https://railway.app), create a new **Web Service**.
3. Set Build Command: `npm run build`
4. Set Start Command: `npm start` (which serves the Express API and frontend static files from `server/server.js`).

### Option B: Frontend on Vercel / Netlify
1. Connect your repository to [Vercel](https://vercel.com).
2. Set Root Directory to `client`.
3. Framework Preset: **Vite**.
4. Deploy with one click!

