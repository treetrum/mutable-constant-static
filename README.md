# Mutable Constant - Astro Static

This site now runs on Astro as a pure static markdown blog.

### Requirements

- Node.js 20+
- pnpm

### Development

Install dependencies:

```sh
pnpm install
```

Run the dev server:

```sh
pnpm dev
```

### Build and preview

Build the production site:

```sh
pnpm build
```

Preview the generated output locally:

```sh
pnpm preview
```

### Content model

- Blog posts live in `src/posts/**/*.md`
- Frontmatter keys: `title`, `slug`, `date` (and optional `status`)
- Post URLs are generated as `/:year/:slug`

### Deploying

This site is hosted on Netlify with automatic deployments enabled.

- Pushing to `master` deploys production
- Pushing to `develop` deploys `develop.mutableconstant.com`
