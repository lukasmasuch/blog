import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mermaid from "astro-mermaid";

export default defineConfig({
  site: "https://lukasmasuch.com",
  integrations: [
    mermaid({
      theme: "base",
      autoTheme: false,
      mermaidConfig: {
        theme: "base",
        themeVariables: {
          background: "#ffffff",
          primaryColor: "#e3f2fd",
          secondaryColor: "#fff3e0",
          tertiaryColor: "#f1f8e9",
          primaryTextColor: "#1a1a1a",
          secondaryTextColor: "#1a1a1a",
          lineColor: "#64748b",
        },
      },
    }),
    mdx(),
    sitemap(),
    tailwind(),
  ],
});
