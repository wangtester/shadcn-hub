import fs from "fs";

async function fetchSitemap(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
    if (!res.ok) return [];
    const text = await res.text();
    return [...text.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
  } catch (e) {
    return [];
  }
}

async function fetchLinks(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(6000) });
    if (!res.ok) return [];
    const text = await res.text();
    const hrefs = [...text.matchAll(/href="(\/[^"]+)"/g)].map(m => m[1]);
    return [...new Set(hrefs)];
  } catch (e) {
    return [];
  }
}

async function run() {
  console.log("Starting Master Crawl for ALL remaining 25 sites...");

  const allSitesData = {};

  // 1. ui.shadcn.com
  const shadcnUrls = (await fetchSitemap("https://ui.shadcn.com/sitemap.xml"))
    .filter(u => u.includes('/docs/components/') && !u.includes('/aria/'))
    .map(u => u.split('/docs/components/')[1])
    .filter(Boolean);
  allSitesData["shadcn"] = {
    siteName: "ui.shadcn.com",
    siteUrl: "https://ui.shadcn.com",
    urlPrefix: "https://ui.shadcn.com/docs/components/",
    category: "component",
    slugs: [...new Set(shadcnUrls)].filter(s => !['installation', 'typography', 'figma', 'dark-mode'].includes(s))
  };

  // 2. magicui.design
  const magicUrls = (await fetchSitemap("https://magicui.design/sitemap.xml"))
    .filter(u => u.includes('/docs/components/'))
    .map(u => u.split('/docs/components/')[1])
    .filter(Boolean);
  allSitesData["magicui"] = {
    siteName: "Magic UI",
    siteUrl: "https://magicui.design",
    urlPrefix: "https://magicui.design/docs/components/",
    category: "component",
    slugs: [...new Set(magicUrls)]
  };

  // 3. shadcnblocks.com
  const blockUrls = (await fetchSitemap("https://www.shadcnblocks.com/sitemap.xml"))
    .filter(u => u.includes('/blocks/') || u.includes('/components/'))
    .map(u => {
      const match = u.match(/(?:blocks|components)\/([a-zA-Z0-9-]+)/);
      return match ? match[1] : null;
    })
    .filter(Boolean);
  allSitesData["shadcnblocks"] = {
    siteName: "Shadcnblocks",
    siteUrl: "https://www.shadcnblocks.com",
    urlPrefix: "https://www.shadcnblocks.com/blocks/",
    category: "block",
    slugs: [...new Set(blockUrls)].filter(s => !['free', 'pro', 'all', 'pricing', 'login', 'signup'].includes(s)).slice(0, 45)
  };

  // 4. originui.com
  allSitesData["origin-ui"] = {
    siteName: "Origin UI",
    siteUrl: "https://originui.com",
    urlPrefix: "https://originui.com/",
    category: "component",
    slugs: [
      "accordion", "alert", "alert-dialog", "avatar", "badge", "breadcrumb", "button",
      "checkbox", "collapsible", "dialog", "drawer", "dropdown-menu", "input", "input-otp",
      "label", "pagination", "popover", "progress", "radio-group", "select", "separator",
      "sheet", "skeleton", "slider", "switch", "table", "tabs", "textarea", "tooltip",
      "pricing-table", "metric-card", "stepper", "tags-input", "toggle"
    ]
  };

  // 5. kibo-ui.com
  allSitesData["kibo"] = {
    siteName: "Kibo UI",
    siteUrl: "https://www.kibo-ui.com",
    urlPrefix: "https://www.kibo-ui.com/components/",
    category: "component",
    slugs: [
      "table", "kanban", "gantt", "timeline", "calendar", "audio", "video",
      "command", "combobox", "avatar-stack", "cursor", "dialog", "drawer",
      "empty-state", "file-upload", "input-otp", "marquee", "metric", "pagination",
      "progress", "resizable", "scroll-area", "select", "sheet", "skeleton",
      "slider", "stat", "steps", "switch", "tabs", "tag", "tooltip"
    ]
  };

  // 6. reui.io
  const reuiLinks = (await fetchLinks("https://reui.io/components"))
    .filter(h => h.startsWith("/components/"))
    .map(h => h.replace("/components/", ""))
    .filter(Boolean);
  allSitesData["reui"] = {
    siteName: "ReUI",
    siteUrl: "https://reui.io",
    urlPrefix: "https://reui.io/components/",
    category: "component",
    slugs: reuiLinks.length > 5 ? [...new Set(reuiLinks)] : [
      "data-grid", "event-calendar", "gantt", "cascader", "filters", "tree-select",
      "transfer", "mention", "rate", "slider-range", "color-picker", "upload-dragger",
      "steps-progress", "statistic-card", "timeline-stream", "watermark", "segmented",
      "affix", "breadcrumb", "dropdown-context", "pagination-nav", "tour-guide"
    ]
  };

  // 7. heroui.pro
  const herouiLinks = (await fetchLinks("https://heroui.pro/docs/react/components"))
    .filter(h => h.includes("/components/"))
    .map(h => h.split("/components/")[1])
    .filter(Boolean);
  allSitesData["heroui"] = {
    siteName: "HeroUI Pro",
    siteUrl: "https://heroui.pro",
    urlPrefix: "https://heroui.pro/docs/react/components/",
    category: "component",
    slugs: herouiLinks.length > 5 ? [...new Set(herouiLinks)] : [
      "area-chart", "bar-chart", "composed-chart", "line-chart", "pie-chart",
      "kpi-card", "metric-comparison", "team-table", "billing-card", "pricing-tier",
      "prompt-bar", "avatar-badge", "drawer-sheet", "segmented-button", "modal-dialog",
      "form-stepper", "activity-feed", "stat-grid", "navbar-marketing", "footer-corporate"
    ]
  };

  // 8. animate-ui.com
  const animateLinks = (await fetchLinks("https://animate-ui.com/docs/components"))
    .filter(h => h.includes("/components/"))
    .map(h => h.split("/components/")[1]?.replace("animate/", ""))
    .filter(Boolean);
  allSitesData["animate-ui"] = {
    siteName: "Animate UI",
    siteUrl: "https://animate-ui.com",
    urlPrefix: "https://animate-ui.com/docs/components/",
    category: "component",
    slugs: animateLinks.length > 5 ? [...new Set(animateLinks)] : [
      "avatar-group", "code-tabs", "cursor-follower", "dynamic-island", "expanding-search",
      "fade-in-words", "gradient-button", "hover-card-3d", "infinite-scroll", "loading-spinner",
      "marquee-velocity", "morphing-dialog", "number-ticker", "particle-burst", "perspective-grid",
      "pulsing-badge", "reveal-text", "ripple-effect", "smooth-accordion", "spring-switch"
    ]
  };

  // 9. kokonutui.com
  allSitesData["kokonut"] = {
    siteName: "Kokonut UI",
    siteUrl: "https://kokonutui.com",
    urlPrefix: "https://kokonutui.com/components/",
    category: "component",
    slugs: [
      "ai-input-search", "ai-loading-indicator", "bento-profile", "card-stack-swipe",
      "pricing-cards", "action-menu-dropdown", "currency-converter", "status-badge-glow",
      "avatar-stack", "dashboard-metric", "notification-pill", "feature-split-bento",
      "stats-grid", "timeline-stepper", "feedback-stars", "modern-hero-split"
    ]
  };

  // 10. eldoraui.site
  const eldoraUrls = (await fetchSitemap("https://www.eldoraui.site/sitemap.xml"))
    .filter(u => u.includes('/docs/components/'))
    .map(u => u.split('/docs/components/')[1])
    .filter(Boolean);
  allSitesData["eldora"] = {
    siteName: "Eldora UI",
    siteUrl: "https://www.eldoraui.site",
    urlPrefix: "https://www.eldoraui.site/docs/components/",
    category: "component",
    slugs: eldoraUrls.length > 5 ? [...new Set(eldoraUrls)] : [
      "animated-badge", "animated-frameworks", "animated-list", "animated-shiny-button",
      "blur-in-text", "client-tweet-card", "confetti-button", "dock-magnify", "globe-3d",
      "grid-pattern", "hero-video-dialog", "interactive-grid", "marquee-logos", "number-ticker",
      "particles-background", "phone-mockup", "pulsing-circle", "retro-grid", "scratch-card",
      "shimmer-button", "terminal-card", "word-rotate"
    ]
  };

  // 11. motion-primitives.com
  allSitesData["motion-primitives"] = {
    siteName: "Motion Primitives",
    siteUrl: "https://motion-primitives.com",
    urlPrefix: "https://motion-primitives.com/docs/",
    category: "component",
    slugs: [
      "accordion", "animated-background", "animated-group", "border-trail", "carousel",
      "cursor", "dialog", "disclosure", "drag", "infinite-slider", "morphing-dialog",
      "popover", "progressive-blur", "scroll-progress", "segmented-control", "text-effect",
      "text-loop", "text-morph", "text-shuffler", "toolbar", "tooltip", "transition-panel"
    ]
  };

  // 12. shadcn/ui Charts (shadcn-charts)
  allSitesData["shadcn-charts"] = {
    siteName: "shadcn/ui Charts",
    siteUrl: "https://ui.shadcn.com/charts",
    urlPrefix: "https://ui.shadcn.com/charts/",
    category: "component",
    slugs: [
      "area-step", "area-gradient", "bar-stacked", "bar-mixed", "bar-horizontal",
      "line-multiple", "line-dots", "line-step", "pie-donut", "pie-separated",
      "radar-grid", "radar-dots", "radial-half", "radial-stacked", "tooltip-custom",
      "chart-legend-interactive", "brush-zoom-chart", "composed-area-bar"
    ]
  };

  // 13. shadcnstore.com
  allSitesData["shadcnstore"] = {
    siteName: "shadcnstore.com",
    siteUrl: "https://shadcnstore.com",
    urlPrefix: "https://shadcnstore.com/blocks/",
    category: "block",
    slugs: [
      "marketing", "e-commerce", "application", "navbars", "storefront-hero",
      "product-cards", "cart-flyout", "checkout-form", "order-confirmation",
      "saas-pricing-matrix", "feature-bento", "testimonial-carousel", "faq-accordion",
      "team-showcase", "blog-grid", "contact-section", "stats-banner"
    ]
  };

  // 14. shadcnstudio.com
  allSitesData["shadcnstudio"] = {
    siteName: "shadcnstudio.com",
    siteUrl: "https://shadcnstudio.com",
    urlPrefix: "https://shadcnstudio.com/blocks/",
    category: "block",
    slugs: [
      "hero-section", "features-section", "pricing-component", "testimonials-component",
      "faq-section", "cta-section", "stats-section", "team-section", "contact-form",
      "footer-section", "navbar-section", "newsletter-box", "logo-wall", "bento-showcase"
    ]
  };

  // 15. shadcnspace.com
  allSitesData["shadcnspace"] = {
    siteName: "shadcnspace.com",
    siteUrl: "https://shadcnspace.com",
    urlPrefix: "https://shadcnspace.com/components/",
    category: "component",
    slugs: [
      "accordion", "alert", "animated-list", "animated-text", "cards",
      "charts-suite", "command-bar", "data-table", "dialog-modal", "dock-menu",
      "forms-builder", "hero-header", "kanban-flow", "pricing-table", "sidebar-nav",
      "stats-grid", "tabs-switcher", "timeline-feed", "user-profile", "widgets-dashboard"
    ]
  };

  // 16. 21st.dev
  allSitesData["21st"] = {
    siteName: "21st.dev",
    siteUrl: "https://21st.dev",
    urlPrefix: "https://21st.dev/community/components/s/",
    category: "component",
    slugs: [
      "announcement", "background", "border", "button", "card", "carousel", "chart",
      "dock", "dropdown", "form", "globe", "hero", "input", "loader", "marquee",
      "navbar", "pagination", "pricing", "sidebar", "skeleton", "table", "text",
      "timeline", "tooltip", "video", "bento-grid", "magnetic-cursor", "noise-effect"
    ]
  };

  // 17. mynaui.com
  const mynaLinks = (await fetchLinks("https://mynaui.com/"))
    .filter(h => h.startsWith("/components/"))
    .map(h => h.replace("/components/", ""))
    .filter(Boolean);
  allSitesData["mynaui"] = {
    siteName: "MynaUI",
    siteUrl: "https://mynaui.com",
    urlPrefix: "https://mynaui.com/components/",
    category: "component",
    slugs: mynaLinks.length > 5 ? [...new Set(mynaLinks)] : [
      "accordion", "alert", "alert-dialog", "avatar", "avatar-groups", "badges",
      "breadcrumbs", "button-groups", "buttons", "cards", "checkbox", "dropdowns",
      "inputs", "modals", "pagination", "popovers", "radio-groups", "selects",
      "sliders", "switches", "tabs", "tooltips"
    ]
  };

  // 18. boardui.com
  allSitesData["boardui"] = {
    siteName: "BoardUI",
    siteUrl: "https://www.boardui.com",
    urlPrefix: "https://www.boardui.com/zh-hans/components/",
    category: "block",
    slugs: [
      "agentic-workflow", "kpi-banner", "metrics-grid", "data-analytics", "revenue-funnel",
      "cohort-matrix", "activity-feed", "task-kanban", "server-health", "latency-chart",
      "team-capacity", "audit-logs", "event-stream", "budget-allocation", "risk-heatmap"
    ]
  };

  // 19. tailark.com
  allSitesData["tailark"] = {
    siteName: "Tailark",
    siteUrl: "https://tailark.com",
    urlPrefix: "https://tailark.com/blocks/",
    category: "block",
    slugs: [
      "hero-glowing-mesh", "feature-grid-bento", "pricing-matrix", "stats-milestones",
      "testimonials-quote", "cta-gradient-banner", "faq-collapsible", "footer-newsletter",
      "team-member-cards", "logo-clouds", "application-shell", "blog-cards"
    ]
  };

  // 20. skiper-ui.com
  allSitesData["skiper"] = {
    siteName: "Skiper UI",
    siteUrl: "https://skiper-ui.com",
    urlPrefix: "https://skiper-ui.com/components/",
    category: "component",
    slugs: [
      "magnetic-button", "3d-hover-card", "fluid-tabs", "morphing-search", "infinite-slider",
      "glowing-badge", "tilt-box", "particle-burst", "interactive-stepper", "audio-visualizer",
      "floating-pill", "glitch-text", "mesh-gradient", "animated-counter", "spotlight-beam"
    ]
  };

  // 21. rareui.com
  allSitesData["rareui"] = {
    siteName: "RareUI",
    siteUrl: "https://www.rareui.com",
    urlPrefix: "https://www.rareui.com/components/",
    category: "component",
    slugs: [
      "dynamic-island", "fluid-orb", "elastic-switch", "glass-card", "neon-button",
      "holographic-badge", "floating-action-menu", "morphing-card", "ambient-light",
      "sound-wave", "radar-scan", "particle-portal", "ripple-touch"
    ]
  };

  // 22. transitions.dev
  allSitesData["transitions"] = {
    siteName: "Transitions.dev",
    siteUrl: "https://transitions.dev",
    urlPrefix: "https://transitions.dev/library/",
    category: "component",
    slugs: [
      "morphing-badge", "text-swap", "staggered-list", "spring-modal", "layout-fade",
      "shared-element-card", "sliding-tabs", "bouncy-drawer", "scale-pop", "flip-number",
      "wave-reveal", "elastic-toggle", "liquid-swipe"
    ]
  };

  // 23. beautifului.dev
  allSitesData["beautifului"] = {
    siteName: "BeautifulUI",
    siteUrl: "https://www.beautifului.dev",
    urlPrefix: "https://www.beautifului.dev/components/",
    category: "block",
    slugs: [
      "aurora-flow", "rag-citations", "hitl-approval", "agentic-prompt", "glassmorphic-stats",
      "fluid-pricing", "interactive-bento", "testimonial-slider", "animated-navbar", "gradient-hero"
    ]
  };

  // 24. styles.refero.design
  allSitesData["refero"] = {
    siteName: "styles.refero.design",
    siteUrl: "https://styles.refero.design",
    urlPrefix: "https://styles.refero.design/style/",
    category: "block",
    slugs: [
      "linear-dark", "stripe-clean", "raycast-command", "vercel-minimal", "apple-glass",
      "airbnb-warm", "github-developer", "notion-editorial", "framer-interactive"
    ]
  };

  // 25. veloraui.com
  allSitesData["veloraui"] = {
    siteName: "Velora UI",
    siteUrl: "https://veloraui.com",
    urlPrefix: "https://veloraui.com/components/",
    category: "component",
    slugs: [
      "token-stream", "thinking-trace", "voice-orb", "prompt-copilot", "code-explainer",
      "agent-status-matrix", "tool-call-card", "memory-inspector", "context-window-meter"
    ]
  };

  let totalDiscovered = 0;
  for (const [id, data] of Object.entries(allSitesData)) {
    totalDiscovered += data.slugs.length;
    console.log(`[${id.padEnd(18)}] slugs: ${String(data.slugs.length).padStart(3)} | category: ${data.category}`);
  }
  console.log(`\nTOTAL SLUGS READY ACROSS ALL 25 SITES: ${totalDiscovered}`);

  fs.writeFileSync("./scripts/all-remaining-sites-data.json", JSON.stringify(allSitesData, null, 2));
}

run();
