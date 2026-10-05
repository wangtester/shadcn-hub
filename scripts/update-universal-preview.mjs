import fs from "fs";

let code = fs.readFileSync("./src/components/registry-live-preview.tsx", "utf-8");

const replacementDefault = `    default:
      return <UniversalInteractivePreview componentKey={componentKey} />;
  }
}

/* ========================================================================= */
/* UNIVERSAL INTERACTIVE IN-SITU LIVE PREVIEW ENGINE                         */
/* ========================================================================= */

function UniversalInteractivePreview({ componentKey }: { componentKey: string }) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(42);
  const [mode, setMode] = useState<"live" | "inspect">("live");
  const [theme, setTheme] = useState<"primary" | "emerald" | "amber" | "rose">("primary");
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const [copied, setCopied] = useState(false);

  // Derive human-readable name from componentKey
  const raw = componentKey.replace(/-demo$/, "");
  const parts = raw.split("-");
  const sitePrefix = parts[0];
  const componentName = parts.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Interactive Component";

  const isBlock = raw.includes("block") || raw.includes("hero") || raw.includes("pricing") ||
                  raw.includes("feature") || raw.includes("faq") || raw.includes("cta") ||
                  raw.includes("footer") || raw.includes("navbar") || raw.includes("section") ||
                  raw.includes("testimonials") || raw.includes("stats") || raw.includes("bento");

  const themeClasses = {
    primary: "text-primary border-primary/30 bg-primary/10",
    emerald: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10",
    amber: "text-amber-500 border-amber-500/30 bg-amber-500/10",
    rose: "text-rose-500 border-rose-500/30 bg-rose-500/10",
  }[theme];

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (isBlock) {
    return (
      <div className="p-3 bg-card rounded-xl border text-xs space-y-2.5 overflow-hidden transition-all shadow-xs">
        {/* Top interactive toolbar */}
        <div className="flex items-center justify-between pb-1.5 border-b text-[10px]">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground truncate max-w-[130px]">{componentName}</span>
            <Badge variant="outline" className={\`text-[8px] font-mono px-1 py-0 \${themeClasses}\`}>
              {isBlock ? "BLOCK" : "UI"}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewport(viewport === "desktop" ? "mobile" : "desktop")}
              className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="切换桌面/移动端视口"
            >
              {viewport === "desktop" ? <Monitor className="h-3 w-3" /> : <Smartphone className="h-3 w-3 text-primary" />}
            </button>
            <button
              onClick={() => setTheme(t => t === "primary" ? "emerald" : t === "emerald" ? "amber" : t === "amber" ? "rose" : "primary")}
              className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              title="切换主题色彩"
            >
              <Sparkles className="h-3 w-3 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Live Block Layout Container */}
        <div className={\`p-3 rounded-lg border bg-gradient-to-b from-card to-muted/20 transition-all duration-200 \${viewport === "mobile" ? "max-w-[200px] mx-auto text-[11px]" : "w-full"}\`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className={\`h-2 w-2 rounded-full \${active ? "bg-emerald-500 animate-ping" : "bg-muted-foreground/40"}\`} />
              <span className="font-mono text-[9px] text-muted-foreground">Status: {active ? "Engaged" : "Ready"}</span>
            </div>
            <span className="font-mono text-[9px] text-primary font-bold">Live Context</span>
          </div>

          <div className="space-y-1.5 text-center py-1">
            <h5 className="font-bold text-foreground text-xs leading-snug">{componentName}</h5>
            <p className="text-[10px] text-muted-foreground line-clamp-1">In-situ responsive composition with dynamic state dispatch</p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-2">
            <Button
              size="sm"
              variant={active ? "default" : "outline"}
              className="h-6 text-[9px] px-2"
              onClick={() => setActive(!active)}
            >
              {active ? "Triggered ✓" : "Test Trigger"}
            </Button>
            <div className="flex items-center justify-between border rounded bg-background/80 px-1.5">
              <span className="text-[9px] text-muted-foreground">Metric:</span>
              <span className="font-mono font-bold text-primary text-[10px]">{count}</span>
              <button onClick={() => setCount(c => c + 1)} className="text-[9px] hover:text-primary font-bold pl-1">+</button>
            </div>
          </div>
        </div>

        {/* Bottom meta stats */}
        <div className="flex items-center justify-between text-[9px] text-muted-foreground pt-0.5">
          <span>Viewport: {viewport.toUpperCase()}</span>
          <button onClick={handleCopy} className="hover:text-primary transition-colors flex items-center gap-1">
            {copied ? <Check className="h-2.5 w-2.5 text-emerald-500" /> : <Copy className="h-2.5 w-2.5" />}
            {copied ? "Copied" : "Copy Slug"}
          </button>
        </div>
      </div>
    );
  }

  // Component Live Preview
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center overflow-hidden transition-all shadow-xs">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate max-w-[140px]">{componentName}</span>
        <div className="flex items-center gap-1">
          <Badge
            variant={active ? "default" : "outline"}
            className="text-[8px] cursor-pointer font-mono"
            onClick={() => setActive(!active)}
          >
            {active ? "Active" : "Interactive"}
          </Badge>
          <button
            onClick={() => setMode(m => m === "live" ? "inspect" : "live")}
            className="text-[9px] font-mono text-muted-foreground hover:text-primary p-0.5"
            title="Toggle inspect mode"
          >
            {mode === "live" ? "⚡" : "⚙"}
          </button>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/5 via-muted/30 to-background border flex flex-col items-center justify-center min-h-[70px] space-y-1.5 relative">
        {mode === "live" ? (
          <>
            <div className={\`h-3.5 w-3.5 rounded-full transition-all duration-300 \${active ? "bg-primary scale-125 shadow-md shadow-primary/40 animate-pulse" : "bg-muted-foreground/30 scale-100"}\`} />
            <span className="font-mono text-[10px] text-muted-foreground">
              State: {active ? "Triggered (True)" : "Waiting Input"}
            </span>
            <div className="flex items-center gap-1 pt-0.5">
              <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setCount(v => Math.max(0, v - 1))}>−</Button>
              <span className="font-mono text-[10px] font-bold text-primary min-w-[24px] text-center">{count}</span>
              <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setCount(v => v + 1)}>+</Button>
              <Button size="sm" variant={active ? "default" : "outline"} className="h-5 px-2 text-[9px] ml-1" onClick={() => setActive(!active)}>
                Toggle
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full text-left space-y-1 font-mono text-[9px] text-muted-foreground p-1 bg-background/60 rounded">
            <div>key: {raw}</div>
            <div>prefix: {sitePrefix}</div>
            <div>status: collected (in-situ)</div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between text-[9px] text-muted-foreground pt-0.5">
        <span className="truncate max-w-[120px] font-mono">#{sitePrefix}</span>
        <button onClick={handleCopy} className="hover:text-primary transition-colors flex items-center gap-1">
          {copied ? <Check className="h-2.5 w-2.5 text-emerald-500" /> : <Copy className="h-2.5 w-2.5" />}
          {copied ? "Copied" : "Copy ID"}
        </button>
      </div>
    </div>
  );
}
`;

const defaultRegex = /    default:\s*return \(\s*<div className="p-6 text-center text-xs text-muted-foreground border rounded-xl bg-muted\/20">\s*组件交互已收录，正在装载实时上下文\.\.\.\s*<\/div>\s*\);\s*}\s*}/;

if (defaultRegex.test(code)) {
  code = code.replace(defaultRegex, replacementDefault);
  fs.writeFileSync("./src/components/registry-live-preview.tsx", code, "utf-8");
  console.log("Successfully replaced default placeholder with UniversalInteractivePreview engine!");
} else {
  console.log("Could not find default regex, trying fallback replace...");
  const targetStr = `    default:
      return (
        <div className="p-6 text-center text-xs text-muted-foreground border rounded-xl bg-muted/20">
          组件交互已收录，正在装载实时上下文...
        </div>
      );
  }
}`;
  if (code.includes(targetStr)) {
    code = code.replace(targetStr, replacementDefault);
    fs.writeFileSync("./src/components/registry-live-preview.tsx", code, "utf-8");
    console.log("Successfully replaced via exact match!");
  } else {
    console.error("Failed to find target string in registry-live-preview.tsx");
  }
}
