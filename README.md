# Yenula Nimneth Portfolio

Personal developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. It showcases featured projects, skills, education, milestones, contact details, and a downloadable CV in a polished single-page experience.

## Overview

This portfolio is designed to present:

- Personal introduction and value proposition
- Technical skills and tools
- Featured software and UI/UX projects
- Education and learning journey
- Contact form powered by EmailJS
- Downloadable CV served from the portfolio itself

## Tech Stack

### Core

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

### UI and Interaction

- Framer Motion
- Lucide React

### Integrations

- EmailJS for the contact form

## Main Sections

- `Hero`
- `About`
- `Value Proposition`
- `Education`
- `Skills`
- `Projects`
- `Milestones`
- `Contact`

These sections are assembled in [app/page.tsx](/abs/path/c:/Users/Yenula/my-portfolio/app/page.tsx:1).

## Project Structure

```text
my-portfolio/
|- app/
|- components/
|  |- sections/
|  `- ...
|- public/
|  |- cv/
|  |- profile/
|  |- projects/
|  `- certificates/
|- .env.local
|- package.json
`- README.md
```

## Features

- Dark-only portfolio experience
- Smooth motion and section reveals
- Dynamic project cards and modal details
- Custom cursor toggle
- Back-to-top button and page progress indicator
- Contact form with client-side validation
- CV download from the `public` folder

## CV Download

Your CV is currently stored at:

- [public/cv/Yenula-Nimneth-CV.html](/abs/path/c:/Users/Yenula/my-portfolio/public/cv/Yenula-Nimneth-CV.html:1)

It is exposed in the app at:

- `/cv/Yenula-Nimneth-CV.html`

The download buttons are used in:

- [components/sections/Hero.tsx](/abs/path/c:/Users/Yenula/my-portfolio/components/sections/Hero.tsx:217)
- [components/sections/Contact.tsx](/abs/path/c:/Users/Yenula/my-portfolio/components/sections/Contact.tsx:204)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment variables

Create a `.env.local` file in the project root.

Use variable names like these:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- Do not commit real keys to GitHub.
- `NEXT_PUBLIC_` variables are exposed to the browser, so only use public client-safe values there.
- If the EmailJS values are missing, the contact form will show a configuration warning instead of sending.

### 3. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Static Assets

Files placed in `public/` are served directly by Next.js.

Examples:

- `public/profile/profile-photo.JPG` -> `/profile/profile-photo.JPG`
- `public/projects/burgify.png` -> `/projects/burgify.png`
- `public/cv/Yenula-Nimneth-CV.html` -> `/cv/Yenula-Nimneth-CV.html`

## Notes

- The contact form uses EmailJS from the client side.
- The site currently uses a dark-only theme.
- The portfolio is built as a single-page experience with section-based navigation.

## Future Improvements

- Export the CV as PDF for recruiter-friendly downloads
- Add a live deployment link
- Add screenshots or previews to the README
- Add form success/error analytics
- Add tests for important UI behavior
