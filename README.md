# NAPKIN Landing Page

A stunning, modern, production-grade frontend website for NAPKIN - an AI-powered Napkin-to-Reality Prototype Wizard.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom NAPKIN color palette
- **Framer Motion** for smooth, professional animations
- **Dark, cinematic design** with premium aesthetics
- **Fully responsive** mobile-first design
- **Modern UI interactions** including:
  - Scroll-triggered animations
  - Mouse parallax effects
  - Gradient animations
  - Text blur reveals
  - Animated counters
  - Bounce cards and glow effects

## 🎨 Color Palette

- `#000000` - Primary background
- `#222222` - Secondary background / cards
- `#1DCD9F` - Primary accent (buttons, highlights)
- `#169976` - Secondary accent (hover states, borders)
- `#F1EFEC` - Primary text
- `#D4C9BE` - Secondary text / muted text

## 📦 Installation

Due to PowerShell script execution restrictions, please follow these steps:

### Option 1: Using Command Prompt (Recommended)

1. Open **Command Prompt** (not PowerShell)
2. Navigate to the project directory:
   ```cmd
   cd c:\Users\Student\Desktop\COPY\napkin-landing
   ```
3. Install dependencies:
   ```cmd
   npm install
   ```
4. Run the development server:
   ```cmd
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 2: Enable PowerShell Scripts (Advanced)

1. Open PowerShell as Administrator
2. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Then proceed with `npm install` and `npm run dev`

## 🏗️ Project Structure

```
napkin-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with custom utilities
├── components/
│   ├── Navbar.tsx          # Animated navbar with scroll effects
│   ├── Hero.tsx            # Hero section with parallax
│   ├── DemoPreview.tsx     # Sketch-to-UI transformation demo
│   ├── Features.tsx        # Feature cards with animations
│   ├── HowItWorks.tsx      # Timeline component
│   ├── AdvancedShowcase.tsx # Advanced UI interactions
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎯 Sections

1. **Hero** - Bold headline with animated gradient underline and floating elements
2. **Demo Preview** - Interactive sketch-to-UI transformation showcase
3. **Features** - 5 feature cards with staggered scroll animations
4. **How It Works** - 4-step timeline with progress animations
5. **Advanced Showcase** - Grid of modern UI interactions
6. **CTA** - Strong call-to-action with glowing button
7. **Footer** - Minimal footer with social links

## 🛠️ Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Inter Font](https://fonts.google.com/specimen/Inter)

## 📱 Responsive Design

The landing page is fully responsive with:
- Mobile-first approach
- Breakpoints for tablets and desktops
- Touch-optimized interactions
- Animated mobile menu

## ✨ Animations

All animations are:
- Smooth and performant
- Scroll-triggered where appropriate
- Hardware-accelerated
- Tasteful and non-intrusive

## 🎭 Design Philosophy

- **Dark, cinematic, premium** - Futuristic AI product aesthetic
- **Minimal but expressive** - Strong typography hierarchy
- **Generous spacing** - Breathing room for content
- **Intentional interactions** - Every animation serves a purpose
- **Modern and handcrafted** - No generic templates

## 🚢 Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- Any static hosting service

```bash
npm run build
```

---

Built with ❤️ for the NAPKIN hackathon demo
