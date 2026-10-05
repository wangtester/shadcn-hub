import fs from 'fs';

let content = fs.readFileSync('src/components/registry-live-preview.tsx', 'utf8');

// 1. Add switch cases before default
const switchAddition = `
    // Extra Rich Components
    case "shadcn-calendar":
      return <ShadcnCalendarDemo />;
    case "magicui-beam":
      return <MagicUIBeamDemo />;
    case "aceternity-sparkles":
      return <AceternitySparklesDemo />;
    case "boardui-kpi-banner":
      return <BoardUIKpiBannerDemo />;
    case "shadcnstore-hero":
      return <ShadcnStoreHeroDemo />;
    case "refero-geist":
      return <ReferoGeistDemo />;
    case "heroui-prompt-bar":
      return <HeroUIPromptBarDemo />;
    case "shadcnspace-marketing":
      return <ShadcnSpaceMarketingDemo />;
    case "beui-typewriter":
      return <BeUITypewriterDemo />;
    case "rareui-fluid-orb":
      return <RareUIFluidOrbDemo />;
    case "transitions-text-swap":
      return <TransitionsTextSwapDemo />;
    case "beautifului-rag":
      return <BeautifulUIRagDemo />;
    case "shadcnio-checker":
      return <ShadcnIoCheckerDemo />;
    case "tailark-bento":
      return <TailarkBentoDemo />;
    case "velora-voice-orb":
      return <VeloraVoiceOrbDemo />;
    case "motion-animated-bg":
      return <MotionAnimatedBgDemo />;
    case "skiper-magnetic-button":
      return <SkiperMagneticButtonDemo />;
    case "eldora-phone-mockup":
      return <EldoraPhoneMockupDemo />;
    case "kibo-code-snippet":
      return <KiboCodeSnippetDemo />;
    case "kokonut-glass-card":
      return <KokonutGlassCardDemo />;
    case "animate-pulsing-status":
      return <AnimatePulsingStatusDemo />;
    case "origin-stepper-slider":
      return <OriginStepperSliderDemo />;
    case "reui-file-upload":
      return <ReUIFileUploadDemo />;
    case "mynaui-pill-badges":
      return <MynaUIPillBadgesDemo />;
    case "shadcn-charts-bar":
      return <ShadcnChartsBarDemo />;
    case "shadcnstudio-hero":
      return <ShadcnStudioHeroDemo />;
`;

content = content.replace('    default:', switchAddition + '\n    default:');

// 2. Add component implementations at the end
const componentAdditions = `
/* ========================================================================= */
/* Additional Rich Live Previews for Full 28 Sites                          */
/* ========================================================================= */

function ShadcnCalendarDemo() {
  const [selectedDay, setSelectedDay] = useState(15);
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2 max-w-[260px] mx-auto text-center">
      <div className="flex items-center justify-between font-bold pb-1 border-b">
        <span>October 2026</span>
        <Badge variant="outline" className="text-[10px] font-mono">Day {selectedDay}</Badge>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[10px]">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
          <span key={d} className="text-muted-foreground font-medium">{d}</span>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={\`p-1 rounded-md transition-colors font-mono \${
              selectedDay === day ? "bg-primary text-primary-foreground font-bold" : "hover:bg-muted"
            }\`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

function MagicUIBeamDemo() {
  return (
    <div className="relative p-6 rounded-xl border bg-muted/20 flex items-center justify-between overflow-hidden">
      <div className="w-10 h-10 rounded-xl bg-card border flex items-center justify-center font-bold text-xs shadow-md z-10">
        API
      </div>
      <div className="flex-1 relative mx-4 h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          animate={{ x: [-100, 300] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        />
      </div>
      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30 z-10">
        AI
      </div>
    </div>
  );
}

function AceternitySparklesDemo() {
  return (
    <div className="relative p-6 rounded-xl border bg-black text-center space-y-2 overflow-hidden min-h-[120px] flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25)_0%,transparent_70%)]" />
      <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 z-10">
        Aceternity Sparkles
      </span>
      <h4 className="text-base font-extrabold text-white z-10 tracking-tight">
        Next Dimension Interfaces
      </h4>
    </div>
  );
}

function BoardUIKpiBannerDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs flex items-center justify-between gap-4">
      <div>
        <span className="text-[10px] text-muted-foreground">Monthly Recurring Revenue</span>
        <div className="text-base font-extrabold font-mono text-foreground">$128,450.00</div>
      </div>
      <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 font-mono text-xs">
        +24.8% QoQ
      </Badge>
    </div>
  );
}

function ShadcnStoreHeroDemo() {
  const [val, setVal] = useState("");
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-b from-card to-muted/30 text-xs space-y-2 text-center">
      <Badge variant="outline" className="text-[10px] text-primary">Production-grade Blocks</Badge>
      <h4 className="text-sm font-bold text-foreground">Launch Products at Lightning Speed</h4>
      <div className="flex gap-1.5 max-w-xs mx-auto pt-1">
        <Input
          placeholder="your@work-email.com"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="h-7 text-xs bg-background"
        />
        <Button size="sm" className="h-7 text-xs shrink-0">Get Started</Button>
      </div>
    </div>
  );
}

function ReferoGeistDemo() {
  return (
    <div className="p-4 rounded-xl border bg-black text-white text-xs font-mono space-y-2">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 text-[10px] text-neutral-400">
        <span>Vercel Geist System</span>
        <span>0.10.4-canary</span>
      </div>
      <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
        $ npx create-next-app@latest --typescript
      </div>
    </div>
  );
}

function HeroUIPromptBarDemo() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className={\`flex items-center gap-2 p-2 rounded-xl border bg-background transition-all \${active ? "border-pink-500/60 shadow-md ring-2 ring-pink-500/20" : ""}\`}>
        <Sparkles className="h-4 w-4 text-pink-500 shrink-0" />
        <input
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Ask HeroUI assistant to configure workspace permissions..."
          className="flex-1 bg-transparent border-0 outline-none text-xs text-foreground placeholder:text-muted-foreground"
        />
        <Button size="sm" className="h-6 px-2 text-[10px] bg-pink-600 hover:bg-pink-700 text-white">
          Send
        </Button>
      </div>
    </div>
  );
}

function ShadcnSpaceMarketingDemo() {
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-r from-teal-500/10 via-background to-card text-xs space-y-2">
      <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/20 text-[10px]">ShadcnSpace</Badge>
      <h4 className="text-sm font-bold text-foreground">Turn Data Into Beautiful Stories</h4>
      <p className="text-[11px] text-muted-foreground">Comprehensive dashboard widgets crafted for modern apps.</p>
    </div>
  );
}

function BeUITypewriterDemo() {
  const [text, setText] = useState("Empower designers with code.");
  const [key, setKey] = useState(0);
  return (
    <div className="p-4 rounded-xl border bg-card text-center space-y-2">
      <div key={key} className="font-mono text-xs font-bold text-primary flex items-center justify-center gap-1">
        <span>{text}</span>
        <span className="w-1.5 h-3 bg-primary animate-pulse" />
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setKey(k => k + 1)}>
        Replay Typewriter
      </Button>
    </div>
  );
}

function RareUIFluidOrbDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 blur-sm shadow-xl"
      />
      <span className="text-[10px] text-muted-foreground font-mono mt-3">RareUI Fluid Physics Orb</span>
    </div>
  );
}

function TransitionsTextSwapDemo() {
  const [idx, setIdx] = useState(0);
  const words = ["Blazing Fast", "Ultra Smooth", "Type Safe", "Pixel Perfect"];
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="p-5 rounded-xl border bg-muted/20 text-center space-y-1">
      <span className="text-[10px] text-muted-foreground uppercase font-mono">Transitions.dev</span>
      <div className="h-6 overflow-hidden">
        <motion.div
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-sm font-extrabold text-teal-600 dark:text-teal-400"
        >
          {words[idx]}
        </motion.div>
      </div>
    </div>
  );
}

function BeautifulUIRagDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">RAG Source Citations</span>
        <Badge variant="outline" className="text-[10px] font-mono text-emerald-600">3 chunks / 0.94 score</Badge>
      </div>
      <div className="p-2 rounded bg-muted/40 text-[10px] font-mono text-muted-foreground truncate">
        [#chunk_1] doc://knowledge/nextjs16.md#auth-layer (similarity: 0.96)
      </div>
    </div>
  );
}

function ShadcnIoCheckerDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> WCAG 2.1 A11y Scanner
        </span>
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[10px]">
          100 / 100 PASS
        </Badge>
      </div>
      <p className="text-[10px] text-muted-foreground">All contrast ratios & ARIA attributes conform to AAA criteria.</p>
    </div>
  );
}

function TailarkBentoDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl border bg-slate-950 text-white text-xs">
      <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
        <span className="text-[10px] text-slate-400">Cold Start Latency</span>
        <div className="text-base font-extrabold font-mono text-indigo-400">12ms</div>
      </div>
      <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
        <span className="text-[10px] text-slate-400">Edge Uptime SLA</span>
        <div className="text-base font-extrabold font-mono text-emerald-400">99.99%</div>
      </div>
    </div>
  );
}

function VeloraVoiceOrbDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card space-y-2">
      <div className="flex items-center gap-1 h-8">
        {[20, 60, 90, 40, 75, 100, 30, 80].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [10, h * 0.35, 10] }}
            transition={{ repeat: Infinity, duration: 1 + i * 0.1, ease: "easeInOut" }}
            className="w-1.5 bg-cyan-500 rounded-full"
          />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Listening for voice intent...</span>
    </div>
  );
}

function MotionAnimatedBgDemo() {
  const [tab, setTab] = useState("all");
  const tabs = [
    { id: "all", label: "All Items" },
    { id: "components", label: "Components" },
    { id: "blocks", label: "Blocks" },
  ];
  return (
    <div className="flex justify-center p-4 rounded-xl border bg-muted/20">
      <div className="flex gap-1 p-1 rounded-xl bg-card border shadow-xs relative">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={\`relative px-3 py-1 text-xs font-medium rounded-lg transition-colors z-10 \${
              tab === t.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }\`}
          >
            {tab === t.id && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-muted rounded-lg shadow-xs -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SkiperMagneticButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md cursor-pointer"
      >
        Magnetic Hover Trigger
      </motion.button>
      <span className="text-[10px] text-muted-foreground font-mono mt-2">Skiper UI magnetic physics response</span>
    </div>
  );
}

function EldoraPhoneMockupDemo() {
  return (
    <div className="max-w-[200px] mx-auto rounded-3xl border-4 border-muted bg-card shadow-xl overflow-hidden p-2 text-center text-xs space-y-2">
      <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
      <div className="py-4 space-y-1">
        <h5 className="font-bold text-xs text-foreground">iPhone 17 Pro</h5>
        <p className="text-[10px] text-muted-foreground">Dynamic Island Active</p>
      </div>
    </div>
  );
}

function KiboCodeSnippetDemo() {
  const [copied, setCopied] = useState(false);
  const code = \`npm i @kibo-ui/avatar-stack\`;
  return (
    <div className="p-3 rounded-xl border bg-neutral-950 text-white text-xs font-mono space-y-1">
      <div className="flex items-center justify-between text-[10px] text-neutral-400 pb-1 border-b border-neutral-800">
        <span>bash</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="flex items-center gap-1 hover:text-white"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="text-emerald-400 pt-1">$ {code}</div>
    </div>
  );
}

function KokonutGlassCardDemo() {
  return (
    <div className="p-5 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-xl text-center space-y-1 text-xs">
      <h4 className="font-bold text-foreground">Frosted Glass Surface</h4>
      <p className="text-[10px] text-muted-foreground">High refractive blur with subtle specular rim highlights.</p>
    </div>
  );
}

function AnimatePulsingStatusDemo() {
  const [status, setStatus] = useState<"healthy" | "warning">("healthy");
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border bg-muted/20 space-y-2">
      <div
        onClick={() => setStatus(status === "healthy" ? "warning" : "healthy")}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background shadow-xs cursor-pointer text-xs"
      >
        <span className={\`w-2 h-2 rounded-full animate-ping \${status === "healthy" ? "bg-emerald-500" : "bg-amber-500"}\`} />
        <span className="font-medium font-mono text-[11px]">
          Cluster: {status === "healthy" ? "99.98% Healthy" : "Degraded Warning"}
        </span>
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Click badge to toggle health state</span>
    </div>
  );
}

function OriginStepperSliderDemo() {
  const [val, setVal] = useState([3]);
  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between font-bold">
        <span>Discrete Step Level</span>
        <span className="font-mono text-primary">Level {val[0]} / 5</span>
      </div>
      <Slider
        value={val}
        onValueChange={(v) => {
          if (Array.isArray(v)) setVal([...v]);
          else if (typeof v === "number") setVal([v]);
        }}
        min={1}
        max={5}
        step={1}
      />
    </div>
  );
}

function ReUIFileUploadDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center text-[11px] font-medium">
        <span>payload-archive-v2.zip</span>
        <span className="text-emerald-500 font-mono">78%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-[78%] rounded-full" />
      </div>
    </div>
  );
}

function MynaUIPillBadgesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 rounded-xl border bg-card text-xs">
      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1 text-[11px] font-medium font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Operational
      </span>
      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center gap-1 text-[11px] font-medium font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Synced
      </span>
    </div>
  );
}

function ShadcnChartsBarDemo() {
  const data = [
    { label: "Q1", desktop: 120, mobile: 60 },
    { label: "Q2", desktop: 190, mobile: 90 },
    { label: "Q3", desktop: 280, mobile: 140 },
    { label: "Q4", desktop: 340, mobile: 210 },
  ];
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold">Quarterly Growth</span>
        <Badge variant="outline" className="font-mono text-[10px]">Stacked Bar</Badge>
      </div>
      <div className="h-24 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="desktop" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="hsl(var(--primary)/0.4)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnStudioHeroDemo() {
  return (
    <div className="p-5 rounded-xl border bg-zinc-950 text-white text-xs space-y-2 text-center">
      <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px]">
        Shadcn Studio Pro
      </Badge>
      <h3 className="text-base font-extrabold text-white tracking-tight">
        Enterprise SaaS Design Systems
      </h3>
      <p className="text-[11px] text-zinc-400 max-w-sm mx-auto">
        Built for modern teams building AI tools, developer platforms, and fintech apps.
      </p>
    </div>
  );
}
`;

content += '\n' + componentAdditions;
fs.writeFileSync('src/components/registry-live-preview.tsx', content, 'utf8');
console.log('Successfully updated src/components/registry-live-preview.tsx');
