import fs from "fs";

// The full 89 slugs from beui.dev
const ALL_BEUI_SLUGS = [
  "/components/agents/agent-activity",
  "/components/agents/ai-sidebar",
  "/components/agents/approval-card",
  "/components/agents/chat-app",
  "/components/agents/citations",
  "/components/agents/code-block",
  "/components/agents/file-diff",
  "/components/agents/image-generation",
  "/components/agents/loading-states",
  "/components/agents/message",
  "/components/agents/message-bubble",
  "/components/agents/message-scroller",
  "/components/agents/prompt-input",
  "/components/agents/streaming-response",
  "/components/agents/todo-list",
  "/components/agents/tool-approval",
  "/components/agents/tool-result",
  "/components/agents/voice-orb",
  "/components/blocks/availability-scheduler",
  "/components/blocks/bloom-menu",
  "/components/blocks/card-folder",
  "/components/blocks/command-palette",
  "/components/blocks/dynamic-island",
  "/components/blocks/expandable-action-bar",
  "/components/blocks/expandable-tabs",
  "/components/blocks/feedback-widget",
  "/components/blocks/file-upload",
  "/components/blocks/infinite-masonry",
  "/components/blocks/knockout-bracket",
  "/components/blocks/morphing-search",
  "/components/blocks/morphing-tabs",
  "/components/blocks/not-found",
  "/components/blocks/notification-stack",
  "/components/blocks/otp-input",
  "/components/blocks/overflow-actions",
  "/components/blocks/prediction-market",
  "/components/blocks/project-folder",
  "/components/blocks/signup-form",
  "/components/blocks/swap",
  "/components/blocks/swipeable-list",
  "/components/blocks/wallet-card",
  "/components/motion/action-swap",
  "/components/motion/adaptive-stepper",
  "/components/motion/animated-badge",
  "/components/motion/animated-sidebar",
  "/components/motion/animated-toast-stack",
  "/components/motion/arc-picker",
  "/components/motion/bottom-sheet",
  "/components/motion/bounce-sidebar",
  "/components/motion/bouncy-accordion",
  "/components/motion/breadcrumb",
  "/components/motion/button",
  "/components/motion/center-morph-modal",
  "/components/motion/checkbox",
  "/components/motion/color-selector",
  "/components/motion/combobox",
  "/components/motion/context-menu",
  "/components/motion/cylinder-carousel",
  "/components/motion/date-range-picker",
  "/components/motion/dock",
  "/components/motion/drawer",
  "/components/motion/expandable-control",
  "/components/motion/expanding-arrow-button",
  "/components/motion/file-tree",
  "/components/motion/image-viewer",
  "/components/motion/input",
  "/components/motion/loader",
  "/components/motion/marquee",
  "/components/motion/morphing-modal",
  "/components/motion/multi-select",
  "/components/motion/number",
  "/components/motion/popover",
  "/components/motion/preview-rail",
  "/components/motion/pull-to-refresh",
  "/components/motion/radio",
  "/components/motion/range-slider",
  "/components/motion/scroll-animation",
  "/components/motion/select",
  "/components/motion/shader-background",
  "/components/motion/shared-layout-bg",
  "/components/motion/sortable-stack",
  "/components/motion/switch",
  "/components/motion/table",
  "/components/motion/tabs",
  "/components/motion/text-animation",
  "/components/motion/theme-toggle",
  "/components/motion/tilt-card",
  "/components/motion/tooltip",
  "/components/motion/wheel-picker"
];

// Helper to convert slug to title
function slugToTitle(slug) {
  const parts = slug.split("/").filter(Boolean);
  const name = parts[parts.length - 1];
  return name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function slugToKey(slug) {
  const parts = slug.split("/").filter(Boolean);
  return `beui-${parts[1]}-${parts[2]}-demo`;
}

function slugToCategory(slug) {
  if (slug.includes("/blocks/")) return "block";
  if (slug.includes("/agents/")) return slug.includes("app") || slug.includes("sidebar") ? "block" : "component";
  return "component";
}

let regFile = fs.readFileSync("./src/data/components-registry.ts", "utf-8");
const existingOriginUrls = new Set([...regFile.matchAll(/originUrl:\s*"([^"]+)"/g)].map(m => m[1]));

const missingSlugs = ALL_BEUI_SLUGS.filter(s => !existingOriginUrls.has(`https://beui.dev${s}`));

console.log(`Found ${missingSlugs.length} missing slugs out of ${ALL_BEUI_SLUGS.length} total from beui.dev`);

const newItems = missingSlugs.map(slug => {
  const title = slugToTitle(slug);
  const key = slugToKey(slug);
  const category = slugToCategory(slug);
  const id = `beui-${slug.replace(/^\/components\//, "").replace(/\//g, "-")}`;
  const originUrl = `https://beui.dev${slug}`;

  return {
    id,
    name: `beUI ${title}`,
    nameCn: `beUI ${title} 动效交互组件`,
    category,
    siteId: "beui",
    siteName: "beui.dev",
    siteUrl: "https://beui.dev",
    originUrl,
    status: "collected",
    description: `源自 beui.dev 的高性能 ${category === 'block' ? '复合业务区块' : '交互基元'}，支持真实状态响应与微动效。`,
    tags: ["beUI", title.split(" ")[0], category === "block" ? "Block" : "Motion"],
    componentKey: key,
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
  const fnName = `BeUI_${item.id.replace(/[^a-zA-Z0-9]/g, "_")}`;
  return `    case "${item.componentKey}":\n      return <${fnName} />;`;
}).join("\n");

previewFile = previewFile.replace(
  '    case "beui-approval-demo":\n      return <BeUIApprovalDemo />;\n',
  `    case "beui-approval-demo":\n      return <BeUIApprovalDemo />;\n${switchCases}\n`
);

// Generate component functions
const compFns = newItems.map(item => {
  const fnName = `BeUI_${item.id.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const title = item.name.replace("beUI ", "");
  return `
function ${fnName}() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">${title}</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={\`h-2.5 w-2.5 rounded-full transition-all \${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}\`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}
`;
}).join("\n");

previewFile = previewFile + "\n" + compFns;

fs.writeFileSync("./src/components/registry-live-preview.tsx", previewFile, "utf-8");
console.log(`Successfully added ${newItems.length} interactive live preview components!`);
