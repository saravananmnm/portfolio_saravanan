# Saravanakumar G — Portfolio

A personal portfolio website for **Saravanakumar G**, Senior Flutter Developer & Technical Lead, built with React + Vite, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- **Dark theme** with animated particle canvas background
- **Framer Motion** scroll animations and micro-interactions  
- **Fully responsive** — mobile, tablet, desktop
- **Sections**: Hero · About · Skills · Experience Timeline · Projects · Contact Form · Footer
- **Contact form** that opens your native email client
- **SEO metadata** — Open Graph, Twitter Card, canonical URLs
- **Vercel-ready** deployment config

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Authenticate
vercel login

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Option 2 — Vercel Dashboard (No CLI)

1. Push this repo to GitHub / GitLab / Bitbucket
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repository
4. Vercel auto-detects Vite — just click **Deploy**
5. Done ✅

> `vercel.json` is pre-configured for SPA routing — no extra steps needed.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        — Fixed nav with scroll effect
│   │   ├── Hero.jsx          — Animated canvas background + stats
│   │   ├── About.jsx         — Bio + competencies + contact info
│   │   ├── Skills.jsx        — Skill cards with hover effects
│   │   ├── Experience.jsx    — Vertical timeline + education
│   │   ├── Projects.jsx      — Featured project cards
│   │   ├── Contact.jsx       — Contact form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── resume.js         ← All content lives here — edit this!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             ← CSS variables + fonts
├── index.html                ← SEO meta tags (edit title/description here)
├── vite.config.js
├── vercel.json
└── package.json
```

## 🎨 Customization

All resume content is in **`src/data/resume.js`** — update your name, bio, skills, experience, and projects there.

Colors are CSS variables in `src/index.css`:

```css
--accent-cyan:   #00d4ff;
--accent-blue:   #0066ff;
--accent-violet: #7c3aed;
--bg-primary:    #050810;
--bg-secondary:  #0a0f1e;
```

SEO metadata lives in `index.html` — update title, description, and OG tags with your deployed URL.

## 🛠️ Tech Stack

| Tool           | Version |
|----------------|---------|
| React          | 18      |
| Vite           | 6       |
| Tailwind CSS   | v4      |
| Framer Motion  | 11      |
| Lucide React   | Latest  |

---

Built for Saravanakumar G · Senior Flutter Developer
