# Deploying to Vercel / Netlify (via GitHub)

This project is built on **TanStack Start v1** with the Cloudflare Worker
preset wired in by Lovable. It produces an SSR Worker bundle, not a static
SPA, so a one-click "framework: Other" deploy on Vercel/Netlify will not
serve the site correctly out of the box.

You have **two recommended paths**:

## Option A — Publish from Lovable (recommended, zero config)

Click **Publish** in the Lovable editor. The site is deployed to a free
`*.lovable.app` domain (and you can attach a custom domain from
Settings → Domains). This uses the Cloudflare preset the project is already
configured for and requires no GitHub connection.

## Option B — Deploy to Vercel from GitHub (manual setup)

If you specifically want Vercel, you need to switch the build target from
Cloudflare to Vercel. After connecting GitHub → Vercel:

1. In Vercel project **Settings → General**, set:
   - Framework Preset: **Other**
   - Build Command: `bun run build`
   - Output Directory: leave blank (Vercel will auto-detect)
2. Switch the TanStack Start preset by replacing
   `@lovable.dev/vite-tanstack-config` (Cloudflare-only) with the official
   TanStack Start Vercel preset. In `vite.config.ts`:

   ```ts
   import { defineConfig } from "vite";
   import { tanstackStart } from "@tanstack/react-start/plugin/vite";
   import viteReact from "@vitejs/plugin-react";
   import tailwindcss from "@tailwindcss/vite";
   import tsConfigPaths from "vite-tsconfig-paths";

   export default defineConfig({
     plugins: [
       tsConfigPaths(),
       tailwindcss(),
       tanstackStart({ target: "vercel" }),
       viteReact(),
     ],
   });
   ```
3. Remove `wrangler.jsonc` and the cloudflare plugin from `package.json`.
4. Push to GitHub — Vercel will build and deploy automatically.

## Option C — Netlify

Same as Option B, but use `target: "netlify"` in the `tanstackStart` plugin
options. Netlify auto-detects the `.netlify/` build output.

---

**Note:** Lovable's editor expects the Cloudflare preset, so if you switch
to Vercel/Netlify presets locally you may want to keep editing happening in
the Lovable UI (Cloudflare) and only switch presets on a GitHub branch you
deploy from.
