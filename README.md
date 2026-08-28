# Hanu Aapa — Personal Portfolio

A modern, high-performance personal portfolio website built for **Hanu Aapa**, Full-Stack AI App Developer.

## Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)
- **Email Service**: [Resend](https://resend.com/)

---

## Local Development & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local` and add your Resend API key:
```bash
cp .env.example .env.local
```
Inside `.env.local`:
```env
RESEND_API_KEY=re_123456789...
```

> **Note:** The `RESEND_API_KEY` environment variable is required to power the contact form email delivery. Do **never** commit `.env.local` or hardcode API keys in source code.

### 3. Run Build & Start
To test the production build locally:
```bash
npm run build
npm start
```

For live local development with hot reload:
```bash
npm run dev
```

---

## Deployment Setup (Render)

This project is configured for seamless deployment on [Render](https://render.com) as a **Node Web Service**.

### Configuration Steps:
1. Connect this repository to Render.
2. Render will automatically detect `render.yaml` or you can manually configure:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
3. Under **Environment Variables** in the Render Dashboard, add:
   - `RESEND_API_KEY`: Your live API key from Resend.

---

## Placeholders & Customization Notes

When ready for full production branding, make sure to update:
- **Instagram & GitHub Links**: Replace the `#` href placeholders in `components/Footer.tsx` and `components/Hero.tsx` with your actual social profile links.
- **Profile Photo**: If using a real profile picture, place your image at `public/images/profile.jpg`. The Hero component will automatically detect and display it.
