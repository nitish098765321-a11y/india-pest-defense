import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "node:path";

// SPA build for Vercel / Netlify / any static host.
// This bypasses TanStack Start's SSR Worker output (which only targets Cloudflare)
// and produces a plain client-rendered React app from the same routes/.
export default defineConfig({
  configFile: false as never,
  plugins: [
    tsConfigPaths(),
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: { "@": path.resolve(process.cwd(), "src") },
  },
  build: {
    outDir: "dist-spa",
    emptyOutDir: true,
  },
});
