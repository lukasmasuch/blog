# Lukas Masuch - Personal Blog

A minimal, lightning-fast personal blog built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), based on the [astro-nano](https://github.com/markhorn-dev/astro-nano) theme.

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

## Deployment

See [SETUP-INSTRUCTIONS.md](./SETUP-INSTRUCTIONS.md) for complete deployment instructions to Cloudflare Pages.

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

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run deploy`          | Build and deploy to Cloudflare Pages             |
