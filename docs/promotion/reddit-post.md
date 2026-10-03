# Reddit Post

**Target Subreddits**: `r/nextjs`, `r/reactjs`, `r/webdev`  
**Title**:
> I built an open-source hub to benchmark and compare all 61 shadcn components and 9 curated ecosystem libraries in Next.js 16

---

### Body:

Hey everyone!

As the shadcn/ui ecosystem has exploded over the past year, tons of amazing derivative libraries and block collections have appeared (BoardUI for charts, ShadcnStore for SaaS blocks, Refero for design style tokens, and various micro-interaction kits like beUI and RareUI).

However, exploring and comparing them has been cumbersome:
- They are scattered across dozens of individual URLs.
- Many showcase directories only have screenshots or incomplete previews.
- With the transition to Base UI (shadcn base-nova) and Tailwind CSS v4, keeping track of modern syntax and conventions can get tricky.

To solve this for myself and the community, I built and open-sourced **shadcn-hub**:
🌐 **Live Demo**: https://wangtester.github.io/shadcn-hub/
👉 **GitHub Repo**: https://github.com/wangtester/shadcn-hub

### What's included:
- **shadcn/ui Core**: All **61 core components** across 7 categories fully rendered and interactive (Forms, Layout, Overlay, Data, Navigation, Feedback, and Extended).
- **BoardUI**: **19 production-grade charts** (Area, Radar, Funnel, Sankey, Heatmap, Speedometer, etc.) + **AI Agentic UI kit** (Reasoning/Thinking chain, token usage meter, multi-source web search streams).
- **ShadcnStore**: All **39 section categories** mapped with interactive blocks + full E-Commerce storefront drawer.
- **Refero Styles**: **9 distinct modern design languages** live in action (Linear minimal, Vercel Geist, Apple Smooth, Neo-Brutalism, Stripe Fintech, Supabase Dark Neon, Raycast, Notion Document, Perplexity AI Fluid).
- **Micro-Interactions**: HeroUI Pro, beUI, RareUI, Transitions.dev, and BeautifulUI.

### Tech Stack:
- Next.js 16 (App Router + Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- @base-ui/react
- Global `⌘ + K` search palette
- 100% strict 1:1 parity between displayed counts and actual rendered code

Code is completely open source under the MIT license. Hope this serves as a helpful reference and workbench for anyone building or designing with shadcn!

Feedback, suggestions, and PRs are super welcome.
