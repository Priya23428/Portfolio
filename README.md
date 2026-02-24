# Haripriya's Portfolio — AR & Unity Developer

A cinematic, motion-driven portfolio website built with **Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + react-three-fiber**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

## ✨ Features

- **7 cinematic pages** with unique animation styles and smooth fullpage transitions
- **3D hero scene** (react-three-fiber) with floating torus knot and particles
- **Project cards** with 3D tilt hover effect and category filtering
- **Animated skill bars** with counting number animations
- **Contact form** with Zod validation, honeypot spam protection, and EmailJS integration
- **Card-flip resume** preview with inline PDF viewer
- **Coding profile cards** with pop-in 3D perspective animations
- **Responsive** design — mobile hamburger menu, simplified 3D on mobile
- **prefers-reduced-motion** support throughout
- **SEO optimized** — OpenGraph, Twitter Cards, JSON-LD structured data
- **Config-driven** — update projects, skills, coding profiles, and social links via config files

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Hero + About Me
│   ├── cta/page.tsx          # Call to Action
│   ├── resume/page.tsx       # Resume preview + download
│   ├── projects/page.tsx     # Projects grid with filtering
│   ├── skills/page.tsx       # Skills bars & counters
│   ├── contact/page.tsx      # Contact form
│   └── coding/page.tsx       # Coding profile cards
├── components/
│   ├── layout/               # Navbar, PageTransition, GradientBackground, SocialLinks
│   ├── three/                # HeroScene (3D scene)
│   └── motion/               # Shared Framer Motion variants
├── config/                   # Data configs (projects, skills, socials, etc.)
├── lib/                      # Hooks (useReducedMotion, useIsMobile)
└── public/                   # Static assets (resume.pdf, project images)
```

## 📝 How to Update Content

### Projects
Edit `src/config/projects.ts` — add, remove, or modify project entries:
```ts
{
  id: 'my-project',
  title: 'My New Project',
  description: 'Description here...',
  tech: ['Unity', 'C#'],
  category: 'unity', // unity | ar | blender | webgl | other
  thumbnail: '/projects/my-project.jpg',
  platform: 'Android',
  demoUrl: 'https://...',
  repoUrl: 'https://github.com/...',
}
```

### Skills
Edit `src/config/skills.ts` — adjust proficiency levels (0–100).

### Coding Profiles
Edit `src/config/codingProfiles.ts` — update stats and profile URLs.

### Social Links
Edit `src/config/socials.ts` — add or modify social media links.

### Resume
Replace `public/resume.pdf` with your actual PDF file.

## 📧 EmailJS Setup

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `from_name`, `from_email`, `subject`, `message`
4. Copy your Service ID, Template ID, and Public Key
5. Add them to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
   ```
6. Uncomment the EmailJS code in `src/app/contact/page.tsx` (search for "EmailJS integration")

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repository at [vercel.com](https://vercel.com).

### Netlify
```bash
npm run build
# Deploy the `.next` folder
```

### GitHub Pages
```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the `out` folder
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Navy 900 (background) | `#0a0f1c` |
| Blue 500 (primary) | `#3b82f6` |
| Cyan 400 (accent) | `#22d3ee` |
| Gold 400 (highlight) | `#f59e0b` |
| Font (body) | Inter |
| Font (code) | JetBrains Mono |
| Easing | `cubic-bezier(0.22, 0.9, 0.33, 1)` |

## ⚡ Performance Notes

- **3D scenes** use `dynamic()` import with SSR disabled — zero impact on initial bundle
- **Mobile devices** get simplified 3D (fewer particles, no secondary geometry)
- **prefers-reduced-motion** users get simple opacity fades instead of complex animations
- **Static generation** — all pages are pre-rendered at build time for fast TTFB
- **Canvas gradient backgrounds** use `requestAnimationFrame` and auto-pause when reduced motion is active

## 📋 Assets Used

| Asset | Source | Notes |
|-------|--------|-------|
| Inter font | Google Fonts | Body text |
| JetBrains Mono | Google Fonts | Code/stats |
| React Icons | `react-icons` | Social/platform icons |
| 3D geometry | Procedural (Three.js) | Torus knot, particles — replace with GLB models |
| Resume preview | Stylized placeholder | Replace `public/resume.pdf` with actual file |
| Project thumbnails | Gradient placeholders | Add real images to `public/projects/` |

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router, SSR/SSG)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D**: react-three-fiber + @react-three/drei + Three.js
- **Forms**: React Hook Form + Zod
- **Email**: EmailJS
- **Icons**: react-icons

## 📄 License

MIT License — feel free to use and modify.
