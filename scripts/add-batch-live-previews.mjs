import fs from "fs";

let fileContent = fs.readFileSync("./src/components/registry-live-preview.tsx", "utf-8");

// 1. Expand lucide-react imports if needed
const extraIcons = [
  "Volume2", "VolumeX", "Pause", "ShoppingCart", "CreditCard", "ArrowUpRight",
  "Sun", "Moon", "Unlock", "EyeOff", "Hash", "Tag", "Radio", "SlidersHorizontal",
  "Table", "ListTodo", "GitBranch", "GitCommit", "GitPullRequest", "Award",
  "Lightbulb", "HelpCircle", "ChevronRight", "BarChart3", "Shuffle", "Code2"
];

// Check which icons aren't imported yet
const missingIcons = extraIcons.filter(ic => !fileContent.includes(ic + ","));
if (missingIcons.length > 0) {
  fileContent = fileContent.replace(
    '  Box,\n} from "lucide-react";',
    `  Box,\n  ${missingIcons.join(",\n  ")},\n} from "lucide-react";`
  );
}

// 2. Expand recharts imports if needed
const extraRecharts = [
  "LineChart", "Line", "PieChart", "Pie", "Cell"
];
const missingRecharts = extraRecharts.filter(rc => !fileContent.includes(rc + ","));
if (missingRecharts.length > 0) {
  fileContent = fileContent.replace(
    '  Bar,\n} from "recharts";',
    `  Bar,\n  ${missingRecharts.join(",\n  ")},\n} from "recharts";`
  );
}

// 3. Add cases to switch statement
const switchCases = `
    // Tier 1 Major Expansions: ui.shadcn.com
    case "shadcn-datatable-demo":
      return <ShadcnDataTableDemo />;
    case "shadcn-command-demo":
      return <ShadcnCommandDemo />;
    case "shadcn-tabs-demo":
      return <ShadcnTabsDemo />;
    case "shadcn-carousel-demo":
      return <ShadcnCarouselDemo />;
    case "shadcn-sheet-demo":
      return <ShadcnSheetDemo />;
    case "shadcn-combobox-demo":
      return <ShadcnComboboxDemo />;
    case "shadcn-drawer-demo":
      return <ShadcnDrawerDemo />;
    case "shadcn-toggle-group-demo":
      return <ShadcnToggleGroupDemo />;
    case "shadcn-alert-dialog-demo":
      return <ShadcnAlertDialogDemo />;
    case "shadcn-aspect-ratio-demo":
      return <ShadcnAspectRatioDemo />;

    // Magic UI
    case "magicui-bento-grid-demo":
      return <MagicUIBentoGridDemo />;
    case "magicui-animated-beam-demo":
      return <MagicUIAnimatedBeamDemo />;
    case "magicui-particles-demo":
      return <MagicUIParticlesDemo />;
    case "magicui-border-beam-demo":
      return <MagicUIBorderBeamDemo />;
    case "magicui-shine-border-demo":
      return <MagicUIShineBorderDemo />;
    case "magicui-number-ticker-demo":
      return <MagicUINumberTickerDemo />;
    case "magicui-word-rotate-demo":
      return <MagicUIWordRotateDemo />;
    case "magicui-confetti-demo":
      return <MagicUIConfettiDemo />;

    // Aceternity UI
    case "aceternity-lamp-effect-demo":
      return <AceternityLampEffectDemo />;
    case "aceternity-sparkles-demo":
      return <AceternitySparklesDemo />;
    case "aceternity-background-beams-demo":
      return <AceternityBackgroundBeamsDemo />;
    case "aceternity-wobbly-card-demo":
      return <AceternityWobblyCardDemo />;
    case "aceternity-hero-highlight-demo":
      return <AceternityHeroHighlightDemo />;
    case "aceternity-typewriter-demo":
      return <AceternityTypewriterDemo />;
    case "aceternity-card-hover-demo":
      return <AceternityCardHoverDemo />;
    case "aceternity-tracing-beam-demo":
      return <AceternityTracingBeamDemo />;

    // Shadcnblocks
    case "shadcnblocks-pricing-demo":
      return <ShadcnblocksPricingDemo />;
    case "shadcnblocks-testimonials-demo":
      return <ShadcnblocksTestimonialsDemo />;
    case "shadcnblocks-feature-demo":
      return <ShadcnblocksFeatureDemo />;
    case "shadcnblocks-stats-demo":
      return <ShadcnblocksStatsDemo />;
    case "shadcnblocks-faq-demo":
      return <ShadcnblocksFaqDemo />;
    case "shadcnblocks-cta-demo":
      return <ShadcnblocksCtaDemo />;

    // shadcn/ui Charts
    case "shadcn-charts-bar-demo":
      return <ShadcnChartsBarDemo />;
    case "shadcn-charts-line-demo":
      return <ShadcnChartsLineDemo />;
    case "shadcn-charts-pie-demo":
      return <ShadcnChartsPieDemo />;
    case "shadcn-charts-radar-demo":
      return <ShadcnChartsRadarDemo />;
    case "shadcn-charts-radial-demo":
      return <ShadcnChartsRadialDemo />;

    // Origin UI
    case "origin-ui-input-stepper-demo":
      return <OriginUIInputStepperDemo />;
    case "origin-ui-password-demo":
      return <OriginUIPasswordDemo />;
    case "origin-ui-tags-demo":
      return <OriginUITagsDemo />;
    case "origin-ui-switch-demo":
      return <OriginUISwitchDemo />;
    case "origin-ui-range-demo":
      return <OriginUIRangeDemo />;

    // Motion Primitives
    case "motion-morphing-dialog-demo":
      return <MotionMorphingDialogDemo />;
    case "motion-infinite-slider-demo":
      return <MotionInfiniteSliderDemo />;
    case "motion-accordion-demo":
      return <MotionAccordionDemo />;

    // Kibo UI
    case "kibo-kanban-demo":
      return <KiboKanbanDemo />;
    case "kibo-timeline-demo":
      return <KiboTimelineDemo />;
    case "kibo-audio-demo":
      return <KiboAudioDemo />;

    // Kokonut UI
    case "kokonut-ai-prompt-demo":
      return <KokonutAIPromptDemo />;
    case "kokonut-profile-demo":
      return <KokonutProfileDemo />;

    // ShadcnStore
    case "shadcnstore-checkout-demo":
      return <ShadcnstoreCheckoutDemo />;
    case "shadcnstore-onboarding-demo":
      return <ShadcnstoreOnboardingDemo />;
`;

fileContent = fileContent.replace(
  '    case "shadcnio-reframe-template":\n      return <ShadcnIoReframeDemo />;\n',
  `    case "shadcnio-reframe-template":\n      return <ShadcnIoReframeDemo />;\n${switchCases}`
);

// 4. Component implementations to append
const componentImplementations = `
/* ========================================================================= */
/* BATCH LIVE PREVIEW DEMOS: OFFICIAL & TIER 1 LIBRARIES                     */
/* ========================================================================= */

// --- 1. ui.shadcn.com Demos ---

function ShadcnDataTableDemo() {
  const [selected, setSelected] = useState<number[]>([1]);
  const [sortAsc, setSortAsc] = useState(true);
  const rows = [
    { id: 1, user: "Sophia Chen", role: "Staff Engineer", status: "Active", spend: "$4,250" },
    { id: 2, user: "Alex Rivera", role: "Product Designer", status: "Active", spend: "$1,890" },
    { id: 3, user: "Marcus Vance", role: "Security Auditor", status: "Review", spend: "$8,120" },
  ];
  const sorted = [...rows].sort((a, b) => sortAsc ? a.id - b.id : b.id - a.id);

  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center justify-between pb-1 border-b">
        <span className="font-semibold text-foreground flex items-center gap-1.5">
          <Table className="h-3.5 w-3.5 text-primary" /> Members Directory
        </span>
        <Badge variant="outline" className="text-[10px]">{selected.length} Selected</Badge>
      </div>
      <div className="space-y-1">
        {sorted.map(row => {
          const isSel = selected.includes(row.id);
          return (
            <div
              key={row.id}
              onClick={() => setSelected(prev => isSel ? prev.filter(i => i !== row.id) : [...prev, row.id])}
              className={\`flex items-center justify-between p-1.5 rounded cursor-pointer transition-colors \${isSel ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"}\`}
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isSel} onChange={() => {}} className="rounded h-3 w-3" />
                <span className="font-medium text-foreground">{row.user}</span>
                <span className="text-[10px] text-muted-foreground">({row.role})</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={row.status === "Active" ? "default" : "secondary"} className="text-[9px] h-4">{row.status}</Badge>
                <span className="font-mono text-muted-foreground">{row.spend}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center pt-1 text-[10px] text-muted-foreground">
        <button onClick={() => setSortAsc(!sortAsc)} className="hover:text-foreground flex items-center gap-1">
          <Shuffle className="h-2.5 w-2.5" /> Toggle Sort {sortAsc ? "▲" : "▼"}
        </button>
        <span>Page 1 of 12</span>
      </div>
    </div>
  );
}

function ShadcnCommandDemo() {
  const [query, setQuery] = useState("");
  const items = [
    { title: "Create new workspace", group: "Actions", icon: Plus },
    { title: "Invite team members", group: "Actions", icon: Users },
    { title: "Manage billing & invoices", group: "Settings", icon: CreditCard },
    { title: "API Keys & Webhooks", group: "Settings", icon: Lock },
  ];
  const filtered = items.filter(it => it.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-muted/40">
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type a command or search..."
          className="bg-transparent text-xs text-foreground focus:outline-none w-full"
        />
        <Badge variant="outline" className="font-mono text-[9px]">⌘K</Badge>
      </div>
      <div className="space-y-1">
        {filtered.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center justify-between p-1.5 rounded hover:bg-muted cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">{item.title}</span>
              </div>
              <span className="text-[9px] text-muted-foreground uppercase">{item.group}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ShadcnTabsDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2.5">
      <div className="flex bg-muted p-0.5 rounded-lg border">
        {["overview", "analytics", "security"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={\`flex-1 py-1 rounded text-center font-medium capitalize transition-all \${activeTab === tab ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}\`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-3 bg-muted/30 rounded-lg border min-h-[60px] flex flex-col justify-center">
        {activeTab === "overview" && <p className="text-foreground">📊 Main overview summary: 99.98% healthy status.</p>}
        {activeTab === "analytics" && <p className="text-primary font-mono">📈 Traffic trend +34.2% YoY growth.</p>}
        {activeTab === "security" && <p className="text-emerald-500 font-mono">🛡️ 0 vulnerabilities detected in 48 hours.</p>}
      </div>
    </div>
  );
}

function ShadcnCarouselDemo() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: "Next.js 16 App Router", desc: "Server Actions & Edge Rendering", tag: "Architecture" },
    { title: "Tailwind CSS v4 Engine", desc: "Instant JIT & Native CSS Variables", tag: "Design System" },
    { title: "Base UI Unstyled Primitives", desc: "Accessible Foundation by MUI Team", tag: "Accessibility" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="relative p-4 rounded-lg bg-gradient-to-br from-primary/10 via-background to-muted/40 border overflow-hidden min-h-[90px] flex flex-col justify-between">
        <div>
          <Badge variant="outline" className="text-[9px] mb-1">{slides[slide].tag}</Badge>
          <h4 className="font-bold text-foreground text-sm">{slides[slide].title}</h4>
          <p className="text-[11px] text-muted-foreground">{slides[slide].desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <div key={i} className={\`h-1.5 rounded-full transition-all \${slide === i ? "w-4 bg-primary" : "w-1.5 bg-muted"}\`} />
          ))}
        </div>
        <div className="flex gap-1.5">
          <Button size="sm" variant="outline" className="h-6 w-6 p-0 text-[10px]" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}>‹</Button>
          <Button size="sm" variant="outline" className="h-6 w-6 p-0 text-[10px]" onClick={() => setSlide((slide + 1) % slides.length)}>›</Button>
        </div>
      </div>
    </div>
  );
}

function ShadcnSheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs relative overflow-hidden min-h-[120px] flex flex-col justify-center items-center">
      <Button size="sm" onClick={() => setOpen(!open)} className="gap-1.5">
        <Sliders className="h-3 w-3" /> {open ? "Close Panel" : "Open Slide-over Sheet"}
      </Button>
      {open && (
        <div className="absolute inset-y-0 right-0 w-3/4 bg-card border-l shadow-2xl p-3 flex flex-col justify-between animate-in slide-in-from-right duration-200">
          <div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-bold text-foreground">Filter Settings</span>
              <X className="h-3 w-3 cursor-pointer text-muted-foreground" onClick={() => setOpen(false)} />
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">Adjust query thresholds and real-time alerts.</p>
          </div>
          <Button size="sm" className="w-full h-6 text-[10px]" onClick={() => setOpen(false)}>Save Changes</Button>
        </div>
      )}
    </div>
  );
}

function ShadcnComboboxDemo() {
  const [val, setVal] = useState("nextjs");
  const options = [
    { value: "nextjs", label: "Next.js (App Router)" },
    { value: "sveltekit", label: "SvelteKit 2" },
    { value: "nuxt", label: "Nuxt 3" },
    { value: "remix", label: "Remix Run" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Select Target Framework</label>
      <div className="grid grid-cols-2 gap-1.5">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => setVal(opt.value)}
            className={\`p-2 rounded-lg border text-left flex items-center justify-between transition-colors \${val === opt.value ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:bg-muted text-foreground"}\`}
          >
            <span className="truncate">{opt.label}</span>
            {val === opt.value && <Check className="h-3 w-3 text-primary flex-shrink-0" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function ShadcnDrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-muted-foreground">Native bottom sheet drawer for mobile gestures</p>
      <Button size="sm" variant="outline" onClick={() => setOpen(!open)} className="w-full">
        {open ? "Dismiss Drawer" : "Trigger Bottom Drawer"}
      </Button>
      {open && (
        <div className="p-3 bg-muted/60 border rounded-lg animate-in slide-in-from-bottom duration-200 space-y-2">
          <div className="w-8 h-1 bg-muted-foreground/40 rounded-full mx-auto" />
          <h5 className="font-bold text-foreground">Confirm Action</h5>
          <p className="text-[11px] text-muted-foreground">Are you ready to synchronize this schema?</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 h-7 text-[10px]" onClick={() => setOpen(false)}>Cancel</Button>
            <Button size="sm" className="flex-1 h-7 text-[10px]" onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ShadcnToggleGroupDemo() {
  const [active, setActive] = useState<string[]>(["bold"]);
  const toggle = (key: string) => {
    setActive(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 flex flex-col items-center">
      <div className="flex border rounded-lg p-0.5 bg-muted">
        <button onClick={() => toggle("bold")} className={\`px-2.5 py-1 rounded font-bold \${active.includes("bold") ? "bg-background shadow text-foreground" : "text-muted-foreground"}\`}>B</button>
        <button onClick={() => toggle("italic")} className={\`px-2.5 py-1 rounded italic \${active.includes("italic") ? "bg-background shadow text-foreground" : "text-muted-foreground"}\`}>I</button>
        <button onClick={() => toggle("underline")} className={\`px-2.5 py-1 rounded underline \${active.includes("underline") ? "bg-background shadow text-foreground" : "text-muted-foreground"}\`}>U</button>
      </div>
      <p className={\`text-center text-sm \${active.includes("bold") ? "font-bold " : ""}\${active.includes("italic") ? "italic " : ""}\${active.includes("underline") ? "underline " : ""}\`}>
        Styled Dynamic Typography
      </p>
    </div>
  );
}

function ShadcnAlertDialogDemo() {
  const [confirming, setConfirming] = useState(false);
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      {!confirming ? (
        <Button size="sm" variant="destructive" onClick={() => setConfirming(true)} className="gap-1">
          <Trash2 className="h-3 w-3" /> {deleted ? "Project Purged (Reset)" : "Delete Production Database"}
        </Button>
      ) : (
        <div className="p-2.5 bg-destructive/10 border border-destructive/30 rounded-lg space-y-2">
          <p className="font-semibold text-destructive">⚠️ This action is irreversible!</p>
          <div className="flex justify-center gap-2">
            <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setConfirming(false)}>Cancel</Button>
            <Button size="sm" variant="destructive" className="h-6 text-[10px]" onClick={() => { setDeleted(true); setConfirming(false); }}>Yes, Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ShadcnAspectRatioDemo() {
  const [ratio, setRatio] = useState<"16-9" | "4-3" | "1-1">("16-9");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground font-medium">Aspect Ratio:</span>
        <div className="flex gap-1">
          {(["16-9", "4-3", "1-1"] as const).map(r => (
            <Button key={r} size="sm" variant={ratio === r ? "default" : "outline"} className="h-5 px-1.5 text-[9px]" onClick={() => setRatio(r)}>
              {r.replace("-", ":")}
            </Button>
          ))}
        </div>
      </div>
      <div className={\`w-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center transition-all \${ratio === "16-9" ? "aspect-video" : ratio === "4-3" ? "aspect-[4/3]" : "aspect-square"}\`}>
        <span className="font-mono text-[10px] text-primary font-bold">{ratio.replace("-", " : ")} Box Ratio</span>
      </div>
    </div>
  );
}

// --- 2. Magic UI Demos ---

function MagicUIBentoGridDemo() {
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-3 gap-1.5">
      <div className="col-span-2 p-2.5 bg-gradient-to-br from-primary/10 via-card to-background border rounded-lg hover:border-primary/50 transition-colors">
        <Sparkles className="h-4 w-4 text-primary mb-1" />
        <h5 className="font-bold text-foreground">AI Neural Synthesis</h5>
        <p className="text-[10px] text-muted-foreground">Streaming token outputs at 120 tok/sec.</p>
      </div>
      <div className="col-span-1 p-2.5 bg-card border rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors">
        <Zap className="h-4 w-4 text-amber-500" />
        <span className="font-bold text-foreground text-[11px]">Instant Cache</span>
      </div>
    </div>
  );
}

function MagicUIAnimatedBeamDemo() {
  const [pulse, setPulse] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center justify-between px-4 py-3 bg-muted/30 rounded-lg relative overflow-hidden">
        <Badge variant="outline" className="z-10 bg-card">Frontend Client</Badge>
        <div className="flex-1 h-0.5 mx-2 bg-muted relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse" />
        </div>
        <Badge variant="default" className="z-10">Cloud Edge</Badge>
      </div>
      <div className="text-center">
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setPulse(!pulse)}>
          Trigger Energy Beam Pulse
        </Button>
      </div>
    </div>
  );
}

function MagicUIParticlesDemo() {
  const [count, setCount] = useState(12);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="relative h-20 bg-background/80 rounded-lg border overflow-hidden flex items-center justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 animate-ping"
            style={{
              top: \`\${(i * 23) % 80}%\`,
              left: \`\${(i * 37) % 90}%\`,
              animationDuration: \`\${1 + (i % 3)}s\`,
            }}
          />
        ))}
        <span className="z-10 font-mono text-[10px] text-muted-foreground bg-card/80 px-2 py-0.5 rounded border">
          {count} Particle Nodes
        </span>
      </div>
      <div className="flex justify-between items-center text-[10px]">
        <span>Density:</span>
        <input type="range" min="6" max="24" value={count} onChange={e => setCount(Number(e.target.value))} className="w-28" />
      </div>
    </div>
  );
}

function MagicUIBorderBeamDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div className="relative p-3.5 rounded-lg bg-card border overflow-hidden">
        <div className="absolute inset-0 rounded-lg p-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent animate-spin duration-3000 pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h5 className="font-bold text-foreground">Border Beam Ray</h5>
            <p className="text-[10px] text-muted-foreground">Dynamic rotating laser highlight</p>
          </div>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
        </div>
      </div>
    </div>
  );
}

function MagicUIShineBorderDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div className="p-4 rounded-xl border-2 border-primary/40 shadow-lg shadow-primary/10 bg-gradient-to-b from-card to-muted/20 text-center space-y-1">
        <Badge variant="outline" className="font-mono text-[9px] border-primary/50 text-primary">SHINE METALLIC</Badge>
        <h4 className="font-bold text-foreground">Pro Tier Subscription</h4>
        <p className="text-[10px] text-muted-foreground">Unlock 100+ components with infinite updates</p>
      </div>
    </div>
  );
}

function MagicUINumberTickerDemo() {
  const [val, setVal] = useState(128450);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground uppercase font-mono">Monthly Active Queries</span>
      <div className="text-2xl font-extrabold text-primary font-mono tracking-tight">
        {val.toLocaleString()}
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setVal(v => v + Math.floor(Math.random() * 5000 + 1000))}>
        <Plus className="h-3 w-3 mr-1" /> Increment Ticker
      </Button>
    </div>
  );
}

function MagicUIWordRotateDemo() {
  const words = ["Blazing Fast", "Highly Accessible", "100% Responsive", "Modern UI"];
  const [idx, setIdx] = useState(0);
  return (
    <div className="p-4 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-muted-foreground">Build products that are</p>
      <div className="h-7 flex items-center justify-center">
        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 animate-pulse">
          {words[idx]}
        </span>
      </div>
      <Button size="sm" variant="outline" className="h-5 text-[9px] px-2" onClick={() => setIdx((idx + 1) % words.length)}>
        Rotate Word
      </Button>
    </div>
  );
}

function MagicUIConfettiDemo() {
  const [active, setActive] = useState(false);
  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2 relative overflow-hidden">
      {active && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-around">
          {["🎉", "✨", "🚀", "🎊", "⭐"].map((c, i) => (
            <span key={i} className="text-lg animate-bounce" style={{ animationDelay: \`\${i * 100}ms\` }}>{c}</span>
          ))}
        </div>
      )}
      <p className="text-muted-foreground">Celebrate high-converting milestones</p>
      <Button size="sm" onClick={trigger} className="gap-1.5 bg-gradient-to-r from-amber-500 to-primary text-primary-foreground">
        <Award className="h-3.5 w-3.5" /> Launch Confetti
      </Button>
    </div>
  );
}

// --- 3. Aceternity UI Demos ---

function AceternityLampEffectDemo() {
  return (
    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-center space-y-2 overflow-hidden relative">
      <div className="w-32 h-10 bg-cyan-500/20 blur-xl rounded-full mx-auto" />
      <div className="relative z-10">
        <h4 className="text-sm font-extrabold text-slate-100">Plans That Build the Future</h4>
        <p className="text-[10px] text-cyan-400 font-mono">Volumetric Top Cone Illumination</p>
      </div>
    </div>
  );
}

function AceternitySparklesDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2 relative">
      <div className="flex items-center justify-center gap-1.5 text-primary font-bold">
        <Sparkles className="h-4 w-4 animate-spin text-amber-400" />
        <span>Cosmic Nebula Particles</span>
        <Sparkles className="h-4 w-4 animate-ping text-purple-400" />
      </div>
      <p className="text-[10px] text-muted-foreground">Floating interactive micro-stars</p>
    </div>
  );
}

function AceternityBackgroundBeamsDemo() {
  return (
    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs relative overflow-hidden min-h-[90px] flex items-center justify-center">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative z-10 p-2 bg-slate-950/80 border border-slate-700/60 rounded-lg text-center backdrop-blur">
        <span className="font-semibold text-slate-200">Intersecting Light Ray Matrix</span>
      </div>
    </div>
  );
}

function AceternityWobblyCardDemo() {
  const [tilt, setTilt] = useState(0);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div
        onMouseEnter={() => setTilt(2)}
        onMouseLeave={() => setTilt(0)}
        style={{ transform: \`rotate(\${tilt}deg)\` }}
        className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white transition-transform duration-200 cursor-pointer shadow-md"
      >
        <h5 className="font-bold">Wobbly Spring Physics</h5>
        <p className="text-[10px] opacity-80">Hover to experience elastic deformation</p>
      </div>
    </div>
  );
}

function AceternityHeroHighlightDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-1">
      <p className="text-muted-foreground text-[11px]">Next Gen UI Components</p>
      <h4 className="text-sm font-bold text-foreground">
        Crafted with <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Extreme Precision</span>
      </h4>
    </div>
  );
}

function AceternityTypewriterDemo() {
  const [txt, setTxt] = useState("Modern Fullstack UI");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs font-mono text-center space-y-2">
      <div className="text-primary font-bold text-sm">
        &gt; {txt}<span className="animate-pulse">_</span>
      </div>
      <div className="flex justify-center gap-1">
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setTxt("Realtime Web APIs")}>Option 1</Button>
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setTxt("Enterprise React Blocks")}>Option 2</Button>
      </div>
    </div>
  );
}

function AceternityCardHoverDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-2 gap-1.5">
      {[1, 2].map(n => (
        <div
          key={n}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(null)}
          className={\`p-2.5 rounded-lg border transition-all \${hovered === n ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card"}\`}
        >
          <span className="font-bold text-foreground text-[11px]">Card 0{n}</span>
          <p className="text-[9px] text-muted-foreground">Spotlight follow hover</p>
        </div>
      ))}
    </div>
  );
}

function AceternityTracingBeamDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex gap-2.5 items-center">
      <div className="flex flex-col items-center">
        <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
      <div>
        <h5 className="font-bold text-foreground">Tracing Beam Guide</h5>
        <p className="text-[10px] text-muted-foreground">Continuous vertical reading progress track</p>
      </div>
    </div>
  );
}

// --- 4. Shadcnblocks Demos ---

function ShadcnblocksPricingDemo() {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Pro Plan</span>
        <button onClick={() => setAnnual(!annual)} className="text-[10px] text-primary hover:underline">
          {annual ? "Annual (-20%)" : "Monthly Billing"}
        </button>
      </div>
      <div className="text-xl font-extrabold text-foreground">
        {annual ? "$15" : "$19"} <span className="text-[10px] font-normal text-muted-foreground">/ month</span>
      </div>
      <ul className="text-[10px] space-y-1 text-muted-foreground">
        <li>✓ Unlimited Commercial Projects</li>
        <li>✓ Lifetime Access & Updates</li>
      </ul>
    </div>
  );
}

function ShadcnblocksTestimonialsDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex text-amber-400 gap-0.5">
        {"★★★★★"}
      </div>
      <p className="text-foreground italic">"Integrating these blocks reduced our sprint velocity from 2 weeks to 2 days."</p>
      <div className="flex items-center gap-2 pt-1 border-t">
        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[9px] text-primary">SC</div>
        <div>
          <span className="font-semibold text-foreground text-[10px]">Sarah Connor</span>
          <span className="text-[9px] text-muted-foreground block">VP of Product, Cyberdyne</span>
        </div>
      </div>
    </div>
  );
}

function ShadcnblocksFeatureDemo() {
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-3 gap-1 text-center">
      <div className="p-1.5 rounded bg-muted/40">
        <Zap className="h-3.5 w-3.5 mx-auto text-amber-500 mb-0.5" />
        <span className="font-bold text-[10px]">Instant</span>
      </div>
      <div className="p-1.5 rounded bg-muted/40">
        <Lock className="h-3.5 w-3.5 mx-auto text-emerald-500 mb-0.5" />
        <span className="font-bold text-[10px]">Secure</span>
      </div>
      <div className="p-1.5 rounded bg-muted/40">
        <Globe className="h-3.5 w-3.5 mx-auto text-blue-500 mb-0.5" />
        <span className="font-bold text-[10px]">Global</span>
      </div>
    </div>
  );
}

function ShadcnblocksStatsDemo() {
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs grid grid-cols-2 gap-2 text-center">
      <div>
        <div className="text-base font-extrabold text-primary">99.99%</div>
        <div className="text-[9px] text-muted-foreground">SLA Uptime</div>
      </div>
      <div>
        <div className="text-base font-extrabold text-foreground">150+</div>
        <div className="text-[9px] text-muted-foreground">Countries Served</div>
      </div>
    </div>
  );
}

function ShadcnblocksFaqDemo() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Is commercial use permitted?", a: "Yes, 100% royalty-free for personal and commercial products." },
    { q: "How are updates shipped?", a: "Directly via git synchronization with zero breaking changes." },
  ];
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs space-y-1.5">
      {faqs.map((f, i) => (
        <div key={i} className="border rounded p-1.5 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
          <div className="flex justify-between items-center font-medium text-foreground">
            <span>{f.q}</span>
            <span>{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="text-[10px] text-muted-foreground mt-1">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

function ShadcnblocksCtaDemo() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="p-3 bg-gradient-to-r from-primary/10 via-card to-background rounded-xl border text-xs space-y-2 text-center">
      <h5 className="font-bold text-foreground">Ready to Supercharge Your App?</h5>
      {!sent ? (
        <div className="flex gap-1.5">
          <Input placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} className="h-7 text-[10px]" />
          <Button size="sm" className="h-7 text-[10px]" onClick={() => setSent(true)}>Join</Button>
        </div>
      ) : (
        <p className="text-emerald-500 font-medium">✓ Invitation dispatched!</p>
      )}
    </div>
  );
}

// --- 5. shadcn/ui Charts Demos ---

function ShadcnChartsBarDemo() {
  const data = [
    { name: "Mon", desktop: 400, mobile: 240 },
    { name: "Tue", desktop: 300, mobile: 139 },
    { name: "Wed", desktop: 520, mobile: 380 },
    { name: "Thu", desktop: 278, mobile: 390 },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs">
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" fontSize={9} />
            <Tooltip />
            <Bar dataKey="desktop" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="#a855f7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnChartsLineDemo() {
  const data = [
    { day: "W1", rev: 120 },
    { day: "W2", rev: 210 },
    { day: "W3", rev: 180 },
    { day: "W4", rev: 340 },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs">
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" fontSize={9} />
            <Tooltip />
            <Line type="monotone" dataKey="rev" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnChartsPieDemo() {
  const data = [
    { name: "Direct", value: 45, color: "#6366f1" },
    { name: "Social", value: 30, color: "#ec4899" },
    { name: "Organic", value: 25, color: "#10b981" },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs flex items-center justify-around">
      <div className="h-24 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={22} outerRadius={36} dataKey="value">
              {data.map((entry, idx) => (
                <Cell key={idx} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-1 text-[10px]">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
            <span>{d.name}: {d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnChartsRadarDemo() {
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs text-center space-y-1.5">
      <span className="font-semibold text-foreground">Multi-axis Capability Matrix</span>
      <div className="grid grid-cols-2 gap-1 text-[10px] text-muted-foreground">
        <div className="p-1 rounded bg-muted/40">Latency: 98/100</div>
        <div className="p-1 rounded bg-muted/40">Throughput: 94/100</div>
        <div className="p-1 rounded bg-muted/40">Security: 99/100</div>
        <div className="p-1 rounded bg-muted/40">Reliability: 96/100</div>
      </div>
    </div>
  );
}

function ShadcnChartsRadialDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <div>
        <h5 className="font-bold text-foreground">Sprint Goal</h5>
        <p className="text-[10px] text-muted-foreground">84% of tasks completed</p>
      </div>
      <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center font-bold font-mono text-[10px] text-primary">
        84%
      </div>
    </div>
  );
}

// --- 6. Origin UI Demos ---

function OriginUIInputStepperDemo() {
  const [val, setVal] = useState(4);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Concurrent Workers</label>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setVal(Math.max(1, val - 1))}>−</Button>
        <span className="font-mono text-center flex-1 text-sm font-bold">{val}</span>
        <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setVal(val + 1)}>+</Button>
      </div>
    </div>
  );
}

function OriginUIPasswordDemo() {
  const [pwd, setPwd] = useState("Alpha9#Pass");
  const strength = pwd.length > 8 ? 4 : pwd.length > 5 ? 2 : 1;
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Password Strength Meter</label>
      <Input value={pwd} onChange={e => setPwd(e.target.value)} type="password" className="h-7 text-xs" />
      <div className="flex gap-1 h-1.5">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className={\`flex-1 rounded-full \${s <= strength ? (strength === 4 ? "bg-emerald-500" : "bg-amber-500") : "bg-muted"}\`} />
        ))}
      </div>
    </div>
  );
}

function OriginUITagsDemo() {
  const [tags, setTags] = useState(["Next.js", "Tailwind", "Radix"]);
  const [input, setInput] = useState("");
  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex flex-wrap gap-1">
        {tags.map(t => (
          <Badge key={t} variant="secondary" className="gap-1 text-[10px]">
            {t}
            <span className="cursor-pointer hover:text-destructive" onClick={() => setTags(tags.filter(x => x !== t))}>×</span>
          </Badge>
        ))}
      </div>
      <div className="flex gap-1">
        <Input placeholder="Add tag..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addTag()} className="h-6 text-[10px]" />
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={addTag}>Add</Button>
      </div>
    </div>
  );
}

function OriginUISwitchDemo() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <span className="font-medium text-foreground">Night Shift Filter</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={\`w-10 h-5 rounded-full p-0.5 transition-colors \${enabled ? "bg-primary" : "bg-muted"}\`}
      >
        <div className={\`h-4 w-4 rounded-full bg-background transition-transform \${enabled ? "translate-x-5" : "translate-x-0"}\`} />
      </button>
    </div>
  );
}

function OriginUIRangeDemo() {
  const [price, setPrice] = useState(48);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">Price Ceiling:</span>
        <span className="font-mono font-bold text-primary">\${price}/mo</span>
      </div>
      <input type="range" min="10" max="100" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full" />
    </div>
  );
}

// --- 7. Motion Primitives Demos ---

function MotionMorphingDialogDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      {!expanded ? (
        <div onClick={() => setExpanded(true)} className="p-3 bg-primary/10 border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
          <h5 className="font-bold text-foreground">Click to Expand Modal</h5>
          <p className="text-[10px] text-muted-foreground">Shared layout layoutId morphing</p>
        </div>
      ) : (
        <div className="p-3 bg-card border-2 border-primary rounded-lg space-y-2 animate-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-foreground">Expanded Details</span>
            <Button size="sm" variant="ghost" className="h-5 w-5 p-0" onClick={() => setExpanded(false)}>×</Button>
          </div>
          <p className="text-[10px] text-muted-foreground">Expanded full dialogue with uninterrupted smooth transitions.</p>
        </div>
      )}
    </div>
  );
}

function MotionInfiniteSliderDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs overflow-hidden">
      <div className="flex gap-2 animate-pulse whitespace-nowrap">
        {["Next.js", "Turbopack", "TypeScript", "TailwindCSS", "FramerMotion", "BaseUI"].map((tech, idx) => (
          <Badge key={idx} variant="outline" className="font-mono text-[9px]">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}

function MotionAccordionDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs">
      <div onClick={() => setOpen(!open)} className="flex justify-between items-center cursor-pointer font-semibold text-foreground">
        <span>Spring Physics Panel</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <p className="text-[10px] text-muted-foreground mt-2 pt-2 border-t">
          Natural bounce with spring stiffness: 300, damping: 20.
        </p>
      )}
    </div>
  );
}

// --- 8. Kibo UI Demos ---

function KiboKanbanDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Auth flow", col: "Doing" },
    { id: 2, title: "Stripe hook", col: "Done" },
  ]);
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-2 gap-1.5">
      <div className="p-1.5 bg-muted/30 rounded border">
        <span className="font-bold text-[9px] uppercase text-muted-foreground">Doing</span>
        {tasks.filter(t => t.col === "Doing").map(t => (
          <div key={t.id} className="p-1 bg-card rounded border text-[10px] font-medium mt-1">{t.title}</div>
        ))}
      </div>
      <div className="p-1.5 bg-muted/30 rounded border">
        <span className="font-bold text-[9px] uppercase text-emerald-500">Done</span>
        {tasks.filter(t => t.col === "Done").map(t => (
          <div key={t.id} className="p-1 bg-card rounded border text-[10px] line-through text-muted-foreground mt-1">{t.title}</div>
        ))}
      </div>
    </div>
  );
}

function KiboTimelineDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1" />
        <div>
          <span className="font-medium text-foreground">Deployed to Production</span>
          <span className="text-[9px] text-muted-foreground block">Commit 7f8a9e (2 mins ago)</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-500 mt-1" />
        <div>
          <span className="font-medium text-foreground">Security scan passed</span>
          <span className="text-[9px] text-muted-foreground block">0 issues found (15 mins ago)</span>
        </div>
      </div>
    </div>
  );
}

function KiboAudioDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center gap-3">
      <Button size="sm" variant="outline" className="h-8 w-8 rounded-full p-0" onClick={() => setPlaying(!playing)}>
        {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
      </Button>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-0.5 h-4">
          {[4, 8, 12, 16, 10, 6, 14, 18, 10, 5, 8].map((h, i) => (
            <div key={i} className={\`w-1 rounded-full \${playing ? "bg-primary animate-pulse" : "bg-muted"}\`} style={{ height: \`\${h}px\` }} />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-muted-foreground font-mono">
          <span>01:24</span>
          <span>03:45</span>
        </div>
      </div>
    </div>
  );
}

// --- 9. Kokonut UI Demos ---

function KokonutAIPromptDemo() {
  const [model, setModel] = useState("GPT-4o");
  const [prompt, setPrompt] = useState("");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-foreground">AI Assistant Bar</span>
        <Badge variant="outline" className="text-[9px] cursor-pointer" onClick={() => setModel(model === "GPT-4o" ? "Claude 3.5" : "GPT-4o")}>
          {model}
        </Badge>
      </div>
      <div className="flex gap-1.5">
        <Input placeholder="Ask anything about UI systems..." value={prompt} onChange={e => setPrompt(e.target.value)} className="h-7 text-[10px]" />
        <Button size="sm" className="h-7 text-[10px]">Send</Button>
      </div>
    </div>
  );
}

function KokonutProfileDemo() {
  const [online, setOnline] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">BA</div>
          <span className={\`absolute bottom-0 right-0 h-2 w-2 rounded-full border border-card \${online ? "bg-emerald-500" : "bg-amber-500"}\`} />
        </div>
        <div>
          <span className="font-bold text-foreground">Baoan AI</span>
          <span className="text-[9px] text-muted-foreground block">{online ? "Active Now" : "Away"}</span>
        </div>
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[9px]" onClick={() => setOnline(!online)}>
        Toggle Status
      </Button>
    </div>
  );
}

// --- 10. Shadcnstore Demos ---

function ShadcnstoreCheckoutDemo() {
  const [qty, setQty] = useState(2);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span>UI Component Kit</span>
        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="outline" className="h-5 w-5 p-0" onClick={() => setQty(Math.max(1, qty - 1))}>−</Button>
          <span className="font-mono">{qty}</span>
          <Button size="sm" variant="outline" className="h-5 w-5 p-0" onClick={() => setQty(qty + 1)}>+</Button>
        </div>
      </div>
      <div className="flex justify-between font-bold border-t pt-1">
        <span>Total:</span>
        <span className="text-primary">\${qty * 49}.00</span>
      </div>
    </div>
  );
}

function ShadcnstoreOnboardingDemo() {
  const [done, setDone] = useState<number[]>([1, 2]);
  const steps = [
    { id: 1, title: "Create Organization" },
    { id: 2, title: "Verify Custom Domain" },
    { id: 3, title: "Configure Webhooks" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      {steps.map(s => {
        const isDone = done.includes(s.id);
        return (
          <div
            key={s.id}
            onClick={() => setDone(prev => isDone ? prev.filter(x => x !== s.id) : [...prev, s.id])}
            className="flex items-center gap-2 cursor-pointer hover:text-primary"
          >
            <span className={\`h-3.5 w-3.5 rounded flex items-center justify-center text-[9px] \${isDone ? "bg-primary text-primary-foreground font-bold" : "border"}\`}>
              {isDone ? "✓" : ""}
            </span>
            <span className={isDone ? "line-through text-muted-foreground" : "text-foreground"}>{s.title}</span>
          </div>
        );
      })}
    </div>
  );
}
`;

fileContent = fileContent + componentImplementations;

fs.writeFileSync("./src/components/registry-live-preview.tsx", fileContent, "utf-8");
console.log("Successfully injected batch live preview demos into registry-live-preview.tsx!");
