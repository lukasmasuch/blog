# Setup Instructions

This guide walks you through deploying your Astro blog to Cloudflare Pages with your custom subdomain.

## Prerequisites

- Node.js 18+ (you have v24, which is great)
- A Cloudflare account (free tier works)
- Your domain (lukasmasuch.com) already on Cloudflare DNS
- A GitHub account (for the repository)

## Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `lukasmasuch/blog`)

2. Initialize and push:
   ```bash
   git add .
   git commit -m "Initial blog setup"
   git remote add origin git@github.com:lukasmasuch/blog.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)

2. Navigate to **Workers & Pages** > **Pages**

3. Click **Create a project** > **Connect to Git**

4. Select your GitHub repository (`lukasmasuch/blog`)

5. Configure the build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 20 (or higher, set via environment variable if needed)

6. Click **Save and Deploy**

   Cloudflare will automatically build and deploy your site.

## Step 3: Set Up Custom Domain

After the first deployment:

1. Go to your Pages project in Cloudflare Dashboard

2. Click **Custom domains** tab

3. Click **Set up a custom domain**

4. Enter your domain (e.g., `lukasmasuch.com` or `blog.lukasmasuch.com`)

5. Cloudflare will automatically configure the DNS since your domain is already on Cloudflare

### Option A: Root domain (lukasmasuch.com)

If you want your blog at the root domain:
- Enter `lukasmasuch.com`
- Cloudflare adds a CNAME record automatically

### Option B: Subdomain (blog.lukasmasuch.com)

If you prefer a subdomain:
- Enter `blog.lukasmasuch.com`
- Cloudflare adds a CNAME record automatically

## Step 4: Verify SSL

Cloudflare automatically provisions SSL certificates. Your site should be available at:
- `https://lukasmasuch.com` (or your subdomain)

This usually takes 1-2 minutes after domain configuration.

## Step 5: Set Up Automatic Deployments

With the GitHub connection, every push to `main` automatically triggers a new deployment.

To deploy manually or from CLI:

```bash
# Install wrangler globally (optional)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

## Environment Variables (Optional)

If you need environment variables:

1. Go to your Pages project > **Settings** > **Environment variables**

2. Add any variables needed (none required for this basic setup)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Adding New Blog Posts

1. Create a new directory in `src/content/blog/`:
   ```
   src/content/blog/my-new-post/
   ├── index.mdx
   └── any-images.png
   ```

2. Add frontmatter to your post:
   ```yaml
   ---
   title: "My New Post"
   description: "A brief description"
   date: "Apr 6 2026"
   ---
   ```

3. Write your content in Markdown or MDX

4. **Mermaid diagrams** are supported out of the box:
   ````markdown
   ```mermaid
   flowchart LR
       A[Start] --> B[End]
   ```
   ````

5. Commit and push:
   ```bash
   git add .
   git commit -m "Add new post: My New Post"
   git push
   ```

5. Cloudflare automatically deploys within ~1 minute

## Troubleshooting

### Build fails

- Check Node.js version in Cloudflare (set `NODE_VERSION` env var to `20`)
- Run `npm run build` locally to see errors

### Images not loading

- For MDX files, import images and use them as components
- For Markdown files, place images in `public/` and reference with `/image.png`

### Custom 404 page

The theme includes a 404 page at `src/pages/404.astro`. Cloudflare Pages automatically uses `dist/404.html`.

## Useful Links

- [Astro Documentation](https://docs.astro.build)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [astro-nano Theme](https://github.com/markhorn-dev/astro-nano)
- [astro-mermaid](https://github.com/joesaby/astro-mermaid) - Mermaid diagram support
