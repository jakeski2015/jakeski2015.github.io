# jakeski2015.github.io

My personal website, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and hosted on GitHub Pages at https://jakeski2015.github.io.

## Run locally

```sh
npm install
npm run dev       # live-reloading dev server at http://localhost:4321
npm run build     # outputs the static site to dist/
npm run preview   # serves dist/ locally
```

## Updating content

All text lives in [`src/data/resume.ts`](src/data/resume.ts): profile/links, About, experience, skills, education.
Components in `src/components/` only render that data.

To show a **Resume** button, put the PDF at `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `resume.ts`.

## Structure

```
src/
  data/resume.ts        # all content
  layouts/Base.astro    # <head>, SEO / link-preview tags, scroll fade-in
  pages/index.astro     # page assembled from sections
  components/           # Nav, Hero, About, Experience, Skills, Education, Contact, Footer
  styles/global.css     # Tailwind + theme (font, accent color)
public/                 # static files served as-is (favicon, resume)
```

## Deployment

Every push to `main` builds and deploys automatically via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). One-time setup: repo Settings → Pages → Source: **GitHub Actions**.
