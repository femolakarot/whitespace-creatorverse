# Whitespace Creatorverse

This is a Next.js project using the `app` directory and Tailwind.

Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view locally.

Vercel Deployment (recommended)

1. Push your repo to GitHub.
2. Import the repository in Vercel (vercel.com) and connect GitHub.
3. Use the default build command `npm run build` and `next start` for production preview.
4. If you need environment variables, add them in Vercel > Project Settings > Environment Variables.

Notes for Vercel optimization

- `next.config.ts` includes `output: 'standalone'` and `swcMinify: true` to produce optimized builds.
- Keep the Node.js version consistent between local and Vercel (set under Project Settings).
- The project uses client-side GSAP and framer-motion; these are bundled during build.

Features implemented

- Two "worlds": Creatorverse (landing) and Elite Circle, toggled via a flip switch in the header.
- 3D flip animation implemented with GSAP.
- Editable social handles and footer via an in-app editor (header -> Edit Socials).
- FAQ accordion on the landing page using `framer-motion`.

If you'd like, I can run a local build now to validate the production build.
