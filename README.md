# Visnunathan — Portfolio

Premium dark portfolio. Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion.
Statically exported — hosts on **GitHub Pages** for free.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages (free hosting)

The repo includes a workflow at `.github/workflows/deploy.yml` that builds and deploys automatically on every push to `main`.

### One-time setup

1. **Create the repo** on GitHub. Easiest is to name it `portfolio` (which matches the default base path).
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/visnunathan8/portfolio.git
   git push -u origin main
   ```

2. **Enable Pages**: GitHub repo → **Settings → Pages → Source = "GitHub Actions"**.

3. Push. The workflow runs, builds the static site, and deploys to:
   ```
   https://visnunathan8.github.io/portfolio/
   ```

### Custom repo name

If you name the repo something other than `portfolio`, edit `.github/workflows/deploy.yml`:
```yaml
NEXT_PUBLIC_BASE_PATH: /your-repo-name
```

### Hosting at the root (e.g. `visnunathan8.github.io`)

Name your repo exactly `visnunathan8.github.io`, then in the workflow set:
```yaml
NEXT_PUBLIC_BASE_PATH: ""
```

## Build manually

```bash
npm run build
# static site lives in ./out — drag-drop to Netlify, Vercel, Cloudflare Pages, or any static host
```

## Where to edit content

**Everything lives in [`content/data.ts`](content/data.ts).**

- `profile` — name, title, links, résumé URL
- `metrics` — animated counter cards
- `about` — long-form story + pillars
- `experience` — timeline entries
- `projects` — featured projects + more work + code/live links
- `toolbox` — skills grouped by usage
- `achievements`, `why` — highlights and recruiter pitch

Drop your résumé PDF at `public/resume.pdf` (already done).

## Features
- ⌘K command palette
- Recruiter Mode — full-screen recruiter pitch
- Vee — interactive draggable mascot with cycling achievements
- Animated impact metrics
- Project filter by stack tag + expandable case-study modal
- Sticky scroll progress + section dot nav
- Cursor glow, gradient borders, glass cards
- Fully responsive, accessible, SEO basics
