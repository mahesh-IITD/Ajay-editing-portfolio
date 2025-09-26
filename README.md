## AJAY — Video Editor Portfolio (Next.js)

Modern, fully responsive portfolio built with Next.js, TailwindCSS, and Framer Motion.

Do not commit `node_modules`. Run `npm ci` or `npm install` locally to install dependencies before running or deploying.

### Quickstart

```bash
npm install
npm run dev
```

- Local dev: visit `http://localhost:3000`
- Production: `npm run build && npm run start`

### Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run start` – run production server
- `npm run lint` – lint

### Tech
- Next.js 14 (App Router)
- TailwindCSS 3
- Framer Motion 11
- next-themes (dark/light)

### Features
- Hero with fullscreen video/image background and CTA
- Lazy-loaded showreel (YouTube)
- JSON-driven gallery with category filters and modal
- About with animated skill badges
- Services with hover effects
- Testimonials carousel
- Contact form posting to API route (env-secured)
- Sticky navbar, smooth scrolling, dark/light toggle with saved preference
- SEO meta + OpenGraph video preview
- Optimized images via `next/image`

### Environment Variables
Create `.env.local` (never commit). Set these on Vercel Project Settings → Environment Variables as well:

```
EMAIL_API_KEY=your-provider-key
CONTACT_EMAIL=your-destination@email.com
```

The contact API validates `EMAIL_API_KEY` exists. Integrate any provider (e.g., SMTP, Resend) as needed.

### Deploying to Vercel
1. Push repo to GitHub/GitLab/Bitbucket (without `node_modules`).
2. Import to Vercel and select this project.
3. Add env vars: `EMAIL_API_KEY`, `CONTACT_EMAIL`.
4. Vercel will run `npm install` and `npm run build` automatically.
5. Set Production Branch and deploy.

### CDN vs npm
All core libraries are installed via npm. If you prefer CDN for client-only extras, add them via `<script>` in `app/layout.tsx` and document them here. No CDN libraries are used by default.

### Notes
- Images and videos are embedded from remote sources. No large media files are bundled.
- Update `data/projects.json` to manage gallery items.

### Folder Structure
```
app/
  api/contact/route.ts
  globals.css
  layout.tsx
  page.tsx
components/
  *.tsx
data/
  projects.json
public/
  (optional static assets)
```

### License
MIT


