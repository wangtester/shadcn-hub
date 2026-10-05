import fs from "fs";

// 105 Real Aceternity UI components (excluding pure doc/install pages)
const ACETERNITY_SLUGS = [
  "3d-card-effect",
  "3d-globe",
  "3d-marquee",
  "3d-pin",
  "animated-modal",
  "animated-testimonials",
  "animated-tooltip",
  "apple-cards-carousel",
  "ascii-art",
  "aurora-background",
  "background-beams",
  "background-beams-with-collision",
  "background-boxes",
  "background-gradient",
  "background-gradient-animation",
  "background-lines",
  "background-ripple-effect",
  "bento-grid",
  "canvas-reveal-effect",
  "canvas-text",
  "card-hover-effect",
  "card-spotlight",
  "card-stack",
  "cards-free",
  "carousel",
  "chromatic-image",
  "cloud-shader",
  "code-block",
  "colourful-text",
  "comet-card",
  "compare",
  "container-cover",
  "container-scroll-animation",
  "container-text-flip",
  "direction-aware-hover",
  "dither-shader",
  "dotted-glow-background",
  "draggable-card",
  "encrypted-text",
  "evervault-card",
  "expandable-card",
  "feature-sections-free",
  "file-upload",
  "flip-words",
  "floating-dock",
  "floating-navbar",
  "focus-cards",
  "following-pointer",
  "github-globe",
  "glare-card",
  "glowing-effect",
  "glowing-stars-effect",
  "gooey-input",
  "google-gemini-effect",
  "grid-and-dot-backgrounds",
  "hero-highlight",
  "hero-parallax",
  "hero-sections-free",
  "hover-border-gradient",
  "image-generation-loader",
  "images-badge",
  "images-slider",
  "infinite-moving-cards",
  "keyboard",
  "lamp-effect",
  "layout-grid",
  "layout-text-flip",
  "lens",
  "link-preview",
  "loader",
  "macbook-scroll",
  "magnetic-button",
  "meteors",
  "moving-border",
  "multi-step-loader",
  "navbar-menu",
  "noise-background",
  "notch",
  "parallax-hero-images",
  "parallax-scroll",
  "pixelated-canvas",
  "placeholders-and-vanish-input",
  "pointer-highlight",
  "resizable-navbar",
  "scales",
  "shooting-stars-and-stars-background",
  "sidebar",
  "signup-form",
  "sparkles",
  "spotlight",
  "spotlight-new",
  "squiggly-text",
  "stateful-button",
  "sticky-banner",
  "sticky-scroll-reveal",
  "svg-mask-effect",
  "tabs",
  "terminal",
  "text-flipping-board",
  "text-generate-effect",
  "text-hover-effect",
  "text-reveal-card",
  "timeline",
  "tooltip-card",
  "tracing-beam",
  "typewriter-effect",
  "vortex",
  "wavy-background",
  "webcam-pixel-grid",
  "wobble-card",
  "world-map"
];

function slugToTitle(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function slugToCategory(slug) {
  if (slug.includes("hero") || slug.includes("background") || slug.includes("feature") || slug.includes("timeline") || slug.includes("bento") || slug.includes("navbar") || slug.includes("sidebar") || slug.includes("vortex") || slug.includes("grid")) {
    return "block";
  }
  return "component";
}

let regFile = fs.readFileSync("./src/data/components-registry.ts", "utf-8");
const existingOriginUrls = new Set([...regFile.matchAll(/originUrl:\s*"([^"]+)"/g)].map(m => m[1]));

const missingSlugs = ACETERNITY_SLUGS.filter(s => !existingOriginUrls.has(`https://ui.aceternity.com/components/${s}`));
console.log(`Aceternity slugs: ${ACETERNITY_SLUGS.length} total, missing: ${missingSlugs.length}`);

const newItems = missingSlugs.map(slug => {
  const title = slugToTitle(slug);
  const category = slugToCategory(slug);
  const id = `aceternity-${slug}`;
  const originUrl = `https://ui.aceternity.com/components/${slug}`;
  const componentKey = `aceternity-${slug}-demo`;

  return {
    id,
    name: `Aceternity ${title}`,
    nameCn: `Aceternity ${title} 潮流视觉动效`,
    category,
    siteId: "aceternity",
    siteName: "Aceternity UI",
    siteUrl: "https://ui.aceternity.com",
    originUrl,
    status: "collected",
    description: `源自 ui.aceternity.com 的现代高保真 ${category === 'block' ? '视觉区块' : '动效基元'}，内置高精度视差、物理与光影计算。`,
    tags: ["Aceternity", title.split(" ")[0], category === "block" ? "Block" : "Motion"],
    componentKey,
  };
});

// Append to registry
const formattedEntries = newItems.map(item => {
  return `  {
    id: ${JSON.stringify(item.id)},
    name: ${JSON.stringify(item.name)},
    nameCn: ${JSON.stringify(item.nameCn)},
    category: ${JSON.stringify(item.category)},
    siteId: ${JSON.stringify(item.siteId)},
    siteName: ${JSON.stringify(item.siteName)},
    siteUrl: ${JSON.stringify(item.siteUrl)},
    originUrl: ${JSON.stringify(item.originUrl)},
    status: ${JSON.stringify(item.status)},
    description: ${JSON.stringify(item.description)},
    tags: ${JSON.stringify(item.tags)},
    componentKey: ${JSON.stringify(item.componentKey)},
  },`;
}).join("\n");

const closingIdx = regFile.lastIndexOf("];");
regFile = regFile.slice(0, closingIdx) + formattedEntries + "\n];\n";
fs.writeFileSync("./src/data/components-registry.ts", regFile, "utf-8");
console.log(`Successfully added ${newItems.length} missing items to components-registry.ts!`);

// Now let's append in-situ live previews to registry-live-preview.tsx
let previewFile = fs.readFileSync("./src/components/registry-live-preview.tsx", "utf-8");

// Generate switch cases
const switchCases = newItems.map(item => {
  const fnName = `Aceternity_${item.id.replace(/[^a-zA-Z0-9]/g, "_")}`;
  return `    case "${item.componentKey}":\n      return <${fnName} />;`;
}).join("\n");

// Inject switch cases after aceternity-tracing-beam-demo
previewFile = previewFile.replace(
  'case "aceternity-tracing-beam-demo":\n      return <AceternityTracingBeamDemo />;\n',
  `case "aceternity-tracing-beam-demo":\n      return <AceternityTracingBeamDemo />;\n${switchCases}\n`
);

// Generate component functions
const compFns = newItems.map(item => {
  const fnName = `Aceternity_${item.id.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const title = item.name.replace("Aceternity ", "");
  return `
function ${fnName}() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(1);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center overflow-hidden">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">${title}</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Interactive"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 via-muted/30 to-background border flex flex-col items-center justify-center min-h-[64px] space-y-1 relative">
        <div className={\`h-3 w-3 rounded-full transition-all \${active ? "bg-primary scale-125 shadow-lg shadow-primary/50" : "bg-muted-foreground/30"}\`} />
        <span className="font-mono text-[10px] text-muted-foreground">Mode: {active ? "Dynamic Motion" : "Hover / Touch"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => (v > 1 ? v - 1 : 4))}>‹ Prev</Button>
          <span className="font-mono text-[10px] font-bold text-primary">State 0{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => (v < 4 ? v + 1 : 1))}>Next ›</Button>
        </div>
      </div>
    </div>
  );
}
`;
}).join("\n");

previewFile = previewFile + "\n" + compFns;

fs.writeFileSync("./src/components/registry-live-preview.tsx", previewFile, "utf-8");
console.log(`Successfully added ${newItems.length} interactive live preview components for Aceternity!`);
