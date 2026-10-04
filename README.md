<div align="center">

# 🌌 shadcn-hub
### The Panoramic Component Benchmark & Multi-Ecosystem Workbench for shadcn/ui
**Compare, inspect, and benchmark 64 official core components and 9 curated ecosystem libraries side-by-side.**

<p align="center">
  <b>English</b> | <a href="README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="https://base-ui.com"><img src="https://img.shields.io/badge/@base--ui/react-v1.8-ea580c?style=for-the-badge" alt="Base UI" /></a>
  <a href="https://github.com/wangtester/shadcn-hub/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/wangtester/shadcn-hub/ci.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=CI" alt="CI Status" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License" /></a>
  <a href="https://wangtester.github.io/shadcn-hub/"><img src="https://api.visitorbadge.io/api/visitors?path=wangtester.shadcn-hub&label=Visitors&labelColor=%2327272a&countColor=%236366f1&style=for-the-badge" alt="Visitors" /></a>
</p>

<p align="center">
  <b>An all-in-one, zero-omission design system workbench.</b><br/>
  100% interactive running code, strict 1:1 parity between displayed counts and actual rendered components, zero build errors.
</p>

<!-- 10 Ecosystem Quick Navigation Index -->
<p align="center">
  <b>📦 Implemented Ecosystems &amp; Direct Index:</b><br/>
  <a href="#1-official-shadcnui-core-library-64-components"><code>shadcn/ui Core (64)</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>BoardUI (19 Charts &amp; AI)</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>ShadcnStore (39 Blocks)</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>Refero Styles (9 Styles)</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>HeroUI Pro</code></a><br/>
  <a href="#2-ecosystem--vertical-extensions"><code>beUI Motion</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>RareUI Physical</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>Transitions.dev</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>BeautifulUI</code></a> •
  <a href="#2-ecosystem--vertical-extensions"><code>ShadcnSpace</code></a>
</p>

<p align="center">
  <a href="https://wangtester.github.io/shadcn-hub/">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Try_It_Online-indigo?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

<!-- Adaptive Light/Dark Vector Banner -->
<p align="center">
  <a href="https://wangtester.github.io/shadcn-hub/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/banner-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="public/banner-light.svg">
      <img alt="shadcn-hub Panoramic Workbench" src="public/banner-light.svg" width="100%">
    </picture>
  </a>
</p>

[🚀 Live Demo](https://wangtester.github.io/shadcn-hub/) •
[✨ Key Features](#-key-features) •
[🗺️ Ecosystem Matrix](#️-ecosystem-matrix--component-breakdown) •
[🎨 9 Design Languages](#-9-modern-design-languages-live-benchmark) •
[🚀 Quick Start](#-quick-start) •
[📁 Architecture](#-project-architecture) •
[🤝 Credits](#-credits--acknowledgements)

---

</div>

## 💡 Why shadcn-hub?

In modern frontend and full-stack development, headless UI powered by [shadcn/ui](https://ui.shadcn.com) has become the de-facto standard. However, the ecosystem has become **highly fragmented**:
- Looking for industrial dashboards and charts? You head to **[BoardUI](https://www.boardui.com)**.
- Searching for marketing blocks and e-commerce storefronts? You visit **[ShadcnStore](https://shadcnstore.com)**.
- Exploring design guidelines (Linear, Geist, Apple, Stripe)? You research **[Refero Design](https://styles.refero.design)**.
- Need SaaS workspace applications? You check out **[HeroUI Pro](https://heroui.pro)**.
- Craving micro-interactions, typewriters, or fluid animations? You jump between **[beUI](https://beui.dev)**, **[RareUI](https://www.rareui.com)**, **[Transitions.dev](https://transitions.dev)**, and **[BeautifulUI](https://www.beautifului.dev)**.

Switching between a dozen disparate websites is tedious. Moreover, many showcase galleries suffer from **fake numbers or static placeholder mockups** that don't actually run. Crucially, the newest **shadcn base-nova** architecture has migrated to `@base-ui/react`, introducing significant API shifts compared to legacy Radix conventions.

**`shadcn-hub`** solves this completely — it aggregates the **official 64 core components** and **9 leading ecosystem libraries** into a unified, high-fidelity workbench with **dual-layer navigation, global `⌘ + K` search, 100% interactive running code, and strict 1:1 count parity**.

---

## ✨ Key Features

- 🎯 **100% Exact 1:1 Parity (Zero Fake Stats)**
  Every badge and number matches the actual rendered React code and interactive cards. No empty placeholders, no exaggerated counts.
- 🧭 **Dual-Layer Fluid Navigation**
  - **Top Sticky Ecosystem Switcher**: Seamlessly switch between the 10 ecosystems; native Dark/Light theme toggle.
  - **Left Responsive Sidebar Drawer**: Multi-dimensional categorisation by functional domain, block type, or visual design language.
- 🔍 **Global Command Palette (`⌘ + K` / `Ctrl + K`)**
  Fuzzy-search across all 64 core components, 19 charts, 39 business blocks, and 9 design styles with instant keyboard navigation.
- ⚡ **Cutting-Edge Tech Stack**
  - **Next.js 16 (App Router + Turbopack)**: Blazing fast compilation and 48 pre-rendered static pages.
  - **Tailwind CSS v4**: Powered by native CSS variables.
  - **Base UI (base-nova)**: Standardised on `@base-ui/react`.
  - **Lucide Icons**: Comprehensive scalable vector icon set.

---

## 🗺️ Ecosystem Matrix & Component Breakdown

| # | Ecosystem / Site | Source URL | Rendered Items | Core Categories & Scope |
| :-: | :--- | :--- | :-: | :--- |
| **01** | **shadcn/ui Core** | [ui.shadcn.com](https://ui.shadcn.com) | **64 Components** | Forms (17), Layout (8), Overlay (8), Data (9), Nav (5), Feedback (8), Extended (9) |
| **02** | **BoardUI** | [boardui.com](https://www.boardui.com) | **19 Charts + AI Kit** | 19 dashboard charts; AI Thinking Chain, Token Monitor, Web Search stream |
| **03** | **ShadcnStore** | [shadcnstore.com](https://shadcnstore.com) | **39 Block Types + Shop** | All 39 vertical section categories (Hero, Bento, Pricing...); Cart drawer |
| **04** | **Refero Styles** | [refero.design](https://styles.refero.design) | **9 Styles + Tokens** | Linear, Geist, Apple, Neo-Brutalism, Stripe, Supabase... tokens & real UI |
| **05** | **HeroUI Pro** | [heroui.pro](https://heroui.pro) | **Marketing + App Kit** | Interactive pricing cycle switcher, feature matrix, SaaS team table |
| **06** | **ShadcnSpace** | [shadcnspace.com](https://shadcnspace.com) | **Marketing, Dash, Pages** | Bento grids, CLI installation snippets, KPI metrics, modern Auth pages |
| **07** | **beUI** | [beui.dev](https://beui.dev) | **Motion & Animation** | Typewriter text, smooth odometer numbers, border-beam buttons, spotlight |
| **08** | **RareUI** | [rareui.com](https://www.rareui.com) | **Physical Interactions** | Fluid Orb, Dynamic Island floating bar, ambient reflection cards |
| **09** | **Transitions.dev** | [transitions.dev](https://transitions.dev) | **Smooth Transitions** | Spring tabs, staggered cascading list entry, morphing geometry |
| **10** | **BeautifulUI** | [beautifului.dev](https://www.beautifului.dev) | **Modern Aesthetics** | Aurora gradient glow background, frosted glassmorphism, prism refraction |

---

### 📦 Official shadcn/ui Core Components (64/64)

<details>
<summary><b>Click to expand full 64-component checklist</b></summary>

```
├── 📝 Forms (17)
│   ├── Button, ButtonGroup, Input, InputGroup, Field, Textarea
│   ├── Select, NativeSelect, Checkbox, RadioGroup, Switch, Slider
│   └── Toggle, ToggleGroup, InputOTP, Label, DatePicker
├── 📐 Layout (8)
│   ├── Card, Accordion, Tabs, Separator
│   └── Collapsible, AspectRatio, Resizable, ScrollArea
├── 💬 Overlay (8)
│   ├── Dialog, AlertDialog, Sheet, Drawer, Popover
│   └── HoverCard, Tooltip, ContextMenu
├── 📊 Data Display (9)
│   ├── Table, DataTable, Calendar, Chart, Carousel
│   └── Avatar, Badge, Combobox, Command
├── 🧭 Navigation (5)
│   └── Breadcrumb, NavigationMenu, Menubar, Pagination, DropdownMenu
├── 🔔 Feedback (8)
│   └── Alert, Toast, Progress, Skeleton, Spinner, Kbd, Empty, Message
└── 🧩 Extended & Typography (9)
    ├── Attachment, Item, Marker, Direction, Questionnaire, MessageScroller, Sidebar,
    └── Bubble, Typography (Official Typeset & Headings)
```

</details>

---

## 🎨 9 Modern Design Languages Live Benchmark

Located under `src/app/sites/refero/styles/`, you can test and benchmark 9 prominent frontend design styles side-by-side:

1. **Linear Monochromatic Minimal**: Deep neutral backgrounds, 1px subtle borders, ultra-compact padding, shortcut-driven.
2. **Vercel Geist**: Pure black and white contrast (`#000000` / `#ffffff`), single-pixel geometric lines, high information density.
3. **Apple Smooth**: Continuous super-ellipse squircle corners, soft diffuse shadows, generous whitespace.
4. **Neo-Brutalism**: Vibrant high-saturation colors, 2px/3px stark black borders, hard offset drop shadows.
5. **Stripe Fintech**: Multi-stop gradient glows, luxurious financial elevation, clean tabular numerals.
6. **Supabase Dark Neon**: Charcoal black paired with vibrant emerald neon (`#10b981`), terminal hacker aesthetic.
7. **Raycast Desktop**: macOS native feel, semi-transparent frosted glass, multi-level floating command bars.
8. **Notion Document**: Warm paper tone (`#FAF9F6`), refined serif-leaning typography, immersive writing experience.
9. **Perplexity AI Fluid**: Soft radial ambient glow, subtle shimmering borders, fluid conversational flow.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: `>= 20.x LTS` (Node.js 22+ or 24 LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `bun`

### 1. Clone the repository
```bash
git clone git@github.com:wangtester/shadcn-hub.git
cd shadcn-hub
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open **`http://localhost:3001`** in your browser to explore the full interactive workbench.

### 4. Build for production
```bash
npm run build
npm run start
```
> Rigorous TypeScript type-checking and Turbopack static compilation guarantees zero build warnings.

---

## 📁 Project Architecture

```text
shadcn-hub/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with TopNav & TooltipProvider
│   │   ├── page.tsx                # Ecosystem Hub hall
│   │   ├── globals.css             # Tailwind CSS v4 variables
│   │   ├── shadcn/                 # 64 Official Core Components
│   │   │   ├── forms/              # Forms (17 items)
│   │   │   ├── layout/             # Layout (8 items)
│   │   │   ├── overlay/            # Overlay (8 items)
│   │   │   ├── data/               # Data display (9 items)
│   │   │   ├── navigation/         # Navigation (5 items)
│   │   │   ├── feedback/           # Feedback (8 items)
│   │   │   └── extended/           # Extended & Typography (9 items)
│   │   └── sites/                  # 9 Derivative Ecosystems
│   │       ├── boardui/            # 19 Charts + AI Agentic suite
│   │       ├── shadcnstore/        # 39 Section blocks + E-Commerce store
│   │       ├── refero/             # 9 Design languages & design tokens
│   │       ├── heroui/             # SaaS pricing & team admin application
│   │       ├── beui/               # Typewriter & border-beam micro-interactions
│   │       ├── rareui/             # Fluid Orb & Dynamic Island physics
│   │       ├── transitions/        # Spring tabs & staggered lists
│   │       ├── beautifului/        # Aurora glow & frosted glass cards
│   │       └── shadcnspace/        # Bento grid & modern Auth
│   ├── components/
│   │   ├── top-nav.tsx             # Sticky horizontal ecosystem switcher
│   │   ├── global-search.tsx       # Global Cmd + K command palette
│   │   ├── sidebar-layout.tsx      # Responsive categorisation drawer
│   │   ├── section.tsx             # Standardised Section & PageHeader
│   │   └── ui/                     # Atomic Base UI components
│   └── lib/
│       └── utils.ts                # cn() class utility
├── components.json                 # shadcn/ui configuration
├── package.json
└── README.md
```

---

## 🤝 Credits & Acknowledgements

This workbench stands on the shoulders of these incredible open-source projects and design communities:
- [shadcn/ui](https://ui.shadcn.com) by [@shadcn](https://twitter.com/shadcn)
- [Base UI](https://base-ui.com) by MUI Team
- [Lucide Icons](https://lucide.dev)
- [BoardUI](https://www.boardui.com)
- [ShadcnStore](https://shadcnstore.com)
- [Refero Design](https://styles.refero.design)
- [HeroUI Pro](https://heroui.pro)
- [beUI](https://beui.dev)
- [RareUI](https://www.rareui.com)
- [Transitions.dev](https://transitions.dev)
- [BeautifulUI](https://www.beautifului.dev)
- [ShadcnSpace](https://shadcnspace.com)

---

## 📄 License

Licensed under the [MIT License](LICENSE). Contributions, stars 🌟, and feedback are warmly welcomed!
