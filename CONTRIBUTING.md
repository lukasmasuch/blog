# Contributing

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build and deploy to Cloudflare Pages             |

## Writing Blog Posts

Blog posts live in `src/content/blog/`. Each post should be in its own directory with an `index.md` or `index.mdx` file:

```
src/content/blog/
├── my-post/
│   ├── index.mdx
│   ├── image1.png
│   └── image2.svg
```

Frontmatter format:

```yaml
---
title: "My Post Title"
description: "A brief description for SEO and previews"
date: "Apr 5 2026"
draft: false  # optional, set to true to hide from production
---
```

## Configuration

- Site settings: `src/consts.ts`
- Astro config: `astro.config.mjs`
- Tailwind config: `tailwind.config.mjs`
