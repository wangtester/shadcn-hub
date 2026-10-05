import fs from "fs";

let fileContent = fs.readFileSync("./src/components/registry-live-preview.tsx", "utf-8");

const switchCases = `
    // beui.dev Expanded Motion & Blocks
    case "beui-arc-picker-demo":
      return <BeUIArcPickerDemo />;
    case "beui-sortable-stack-demo":
      return <BeUISortableStackDemo />;
    case "beui-color-selector-demo":
      return <BeUIColorSelectorDemo />;
    case "beui-tilt-card-demo":
      return <BeUITiltCardDemo />;
    case "beui-arrow-button-demo":
      return <BeUIArrowButtonDemo />;
    case "beui-adaptive-stepper-demo":
      return <BeUIAdaptiveStepperDemo />;
    case "beui-wheel-picker-demo":
      return <BeUIWheelPickerDemo />;
    case "beui-toast-stack-demo":
      return <BeUIToastStackDemo />;
    case "beui-action-swap-demo":
      return <BeUIActionSwapDemo />;
    case "beui-dynamic-island-demo":
      return <BeUIDynamicIslandDemo />;
    case "beui-command-palette-demo":
      return <BeUICommandPaletteDemo />;
    case "beui-morphing-search-demo":
      return <BeUIMorphingSearchDemo />;
    case "beui-notification-stack-demo":
      return <BeUINotificationStackDemo />;
    case "beui-scheduler-demo":
      return <BeUISchedulerDemo />;
    case "beui-project-folder-demo":
      return <BeUIProjectFolderDemo />;
    case "beui-otp-demo":
      return <BeUIOtpDemo />;
    case "beui-feedback-demo":
      return <BeUIFeedbackDemo />;
    case "beui-voice-orb-demo":
      return <BeUIVoiceOrbDemo />;
    case "beui-approval-demo":
      return <BeUIApprovalDemo />;
`;

fileContent = fileContent.replace(
  '    case "shadcnstore-onboarding-demo":\n      return <ShadcnstoreOnboardingDemo />;\n',
  `    case "shadcnstore-onboarding-demo":\n      return <ShadcnstoreOnboardingDemo />;\n${switchCases}`
);

const componentDemos = `
/* ========================================================================= */
/* BEUI.DEV EXPANDED MOTION & BLOCK LIVE DEMOS                               */
/* ========================================================================= */

function BeUIArcPickerDemo() {
  const [angle, setAngle] = useState(45);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <div className="flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Arc Angle:</span>
        <span className="font-mono font-bold text-primary">{angle}°</span>
      </div>
      <div className="relative h-20 w-36 mx-auto border-t-4 border-l-4 border-r-4 border-primary/40 rounded-t-full flex items-end justify-center pb-2 bg-gradient-to-t from-transparent to-primary/10">
        <div
          className="h-7 w-1 bg-primary origin-bottom rounded-full transition-transform duration-100"
          style={{ transform: \`rotate(\${angle - 90}deg)\` }}
        />
      </div>
      <div className="flex justify-center gap-1.5">
        {[0, 45, 90, 135, 180].map(deg => (
          <Button key={deg} size="sm" variant={angle === deg ? "default" : "outline"} className="h-5 px-1.5 text-[9px]" onClick={() => setAngle(deg)}>
            {deg}°
          </Button>
        ))}
      </div>
    </div>
  );
}

function BeUISortableStackDemo() {
  const [cards, setCards] = useState(["Deploy v2.4", "Stripe Webhook", "Optimize Assets"]);
  const moveUp = (index: number) => {
    if (index === 0) return;
    const next = [...cards];
    const temp = next[index];
    next[index] = next[index - 1];
    next[index - 1] = temp;
    setCards(next);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="text-[10px] text-muted-foreground flex justify-between">
        <span>Sortable Stack</span>
        <span>Reorder</span>
      </div>
      {cards.map((c, i) => (
        <div key={c} className="p-2 rounded-lg border bg-muted/30 flex items-center justify-between hover:bg-muted transition-colors">
          <span className="font-medium text-foreground">{c}</span>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost" className="h-5 w-5 p-0 text-[10px]" disabled={i === 0} onClick={() => moveUp(i)}>▲</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BeUIColorSelectorDemo() {
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
  const [selected, setSelected] = useState(colors[0]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2.5">
      <span className="text-[10px] text-muted-foreground font-medium">Radial Palette Swatches</span>
      <div className="flex justify-center items-center gap-2">
        {colors.map(c => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            style={{ backgroundColor: c }}
            className={\`h-6 w-6 rounded-full transition-transform \${selected === c ? "scale-125 ring-2 ring-foreground shadow-md" : "hover:scale-110 opacity-70"}\`}
          />
        ))}
      </div>
      <div className="text-[10px] font-mono" style={{ color: selected }}>
        Active Theme Hex: {selected}
      </div>
    </div>
  );
}

function BeUITiltCardDemo() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
          setTilt({ x, y });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: \`perspective(600px) rotateX(\${tilt.y}deg) rotateY(\${tilt.x}deg)\` }}
        className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 via-card to-purple-500/20 border shadow-lg transition-transform duration-100 cursor-pointer text-center space-y-1"
      >
        <Badge variant="outline" className="text-[9px]">3D Parallax Hover</Badge>
        <h4 className="font-bold text-foreground">Interactive Tilt Matrix</h4>
        <p className="text-[10px] text-muted-foreground">Move mouse around card boundary</p>
      </div>
    </div>
  );
}

function BeUIArrowButtonDemo() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-4 bg-card rounded-xl border text-xs flex justify-center items-center">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 transition-all hover:pr-5 shadow"
      >
        <span>Explore Components</span>
        <ArrowRight className={\`h-3.5 w-3.5 transition-transform \${hovered ? "translate-x-1" : ""}\`} />
      </button>
    </div>
  );
}

function BeUIAdaptiveStepperDemo() {
  const [val, setVal] = useState(10);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-muted-foreground">Adaptive Counter</span>
        <span className="font-mono font-bold text-primary text-sm">{val} units</span>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => Math.max(0, v - 5))}>−5</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => Math.max(0, v - 1))}>−1</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => v + 1)}>+1</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => v + 5)}>+5</Button>
      </div>
    </div>
  );
}

function BeUIWheelPickerDemo() {
  const [hour, setHour] = useState(14);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <span className="text-[10px] text-muted-foreground">Wheel Perspective Hour Picker</span>
      <div className="h-16 overflow-hidden relative border rounded-lg bg-muted/20 flex flex-col items-center justify-center">
        <div className="text-[10px] text-muted-foreground opacity-40">{(hour - 1 + 24) % 24}:00</div>
        <div className="text-sm font-bold text-primary font-mono py-0.5">{hour}:00</div>
        <div className="text-[10px] text-muted-foreground opacity-40">{(hour + 1) % 24}:00</div>
      </div>
      <div className="flex justify-center gap-2">
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setHour((hour - 1 + 24) % 24)}>Scroll Up</Button>
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setHour((hour + 1) % 24)}>Scroll Down</Button>
      </div>
    </div>
  );
}

function BeUIToastStackDemo() {
  const [toasts, setToasts] = useState(["Deploy succeeded", "Security check passed"]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5 relative min-h-[90px]">
      <div className="flex justify-between items-center pb-1">
        <span className="text-[10px] font-medium text-foreground">Toast Stack Depth</span>
        <Button size="sm" variant="ghost" className="h-5 text-[9px] p-0" onClick={() => setToasts([...toasts, "New alert at " + new Date().toLocaleTimeString()])}>+ Push</Button>
      </div>
      {toasts.slice(-2).map((t, idx) => (
        <div key={idx} className="p-2 rounded-lg border bg-card shadow-sm flex items-center justify-between animate-in slide-in-from-top-1">
          <span className="text-[10px] font-medium text-foreground">{t}</span>
          <Check className="h-3 w-3 text-emerald-500" />
        </div>
      ))}
    </div>
  );
}

function BeUIActionSwapDemo() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const trigger = () => {
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-[10px] text-muted-foreground">Morphing Action State Machine</p>
      {state === "idle" && (
        <Button size="sm" onClick={trigger} className="w-32 h-7 text-[10px]">
          Download Bundle
        </Button>
      )}
      {state === "loading" && (
        <Button size="sm" disabled className="w-32 h-7 text-[10px] bg-primary/70">
          <Clock className="h-3 w-3 animate-spin mr-1" /> Generating...
        </Button>
      )}
      {state === "done" && (
        <Button size="sm" variant="outline" onClick={() => setState("idle")} className="w-32 h-7 text-[10px] border-emerald-500 text-emerald-500">
          <Check className="h-3 w-3 mr-1" /> Completed!
        </Button>
      )}
    </div>
  );
}

function BeUIDynamicIslandDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex flex-col items-center space-y-2">
      <div
        onClick={() => setExpanded(!expanded)}
        className={\`bg-slate-950 text-white rounded-full transition-all duration-300 cursor-pointer flex items-center shadow-lg \${expanded ? "px-4 py-2 w-52 justify-between" : "px-3 py-1 w-28 justify-center gap-1.5"}\`}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[10px]">{expanded ? "AirPods Connected" : "98%"}</span>
        {expanded && <span className="text-[9px] text-slate-400">Battery</span>}
      </div>
      <span className="text-[9px] text-muted-foreground">Click island to expand state</span>
    </div>
  );
}

function BeUICommandPaletteDemo() {
  const [query, setQuery] = useState("");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-muted/40 border">
        <Search className="h-3 w-3 text-muted-foreground" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Quick command launcher..."
          className="bg-transparent text-[10px] text-foreground w-full focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <div className="p-1 rounded hover:bg-muted cursor-pointer flex justify-between items-center">
          <span>Toggle Fullscreen Canvas</span>
          <Badge variant="outline" className="text-[8px]">⌘F</Badge>
        </div>
        <div className="p-1 rounded hover:bg-muted cursor-pointer flex justify-between items-center">
          <span>Switch Deployment Environment</span>
          <Badge variant="outline" className="text-[8px]">⌘E</Badge>
        </div>
      </div>
    </div>
  );
}

function BeUIMorphingSearchDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex justify-center items-center min-h-[80px]">
      {!open ? (
        <button onClick={() => setOpen(true)} className="p-2 rounded-full border bg-muted/40 hover:bg-muted transition-colors flex items-center gap-1.5 text-muted-foreground">
          <Search className="h-3.5 w-3.5" />
          <span className="text-[10px]">Search Docs</span>
        </button>
      ) : (
        <div className="flex gap-1.5 w-full animate-in zoom-in-95 duration-150">
          <Input autoFocus placeholder="Type keyword..." className="h-7 text-[10px] flex-1" />
          <Button size="sm" variant="ghost" className="h-7 text-[10px]" onClick={() => setOpen(false)}>×</Button>
        </div>
      )}
    </div>
  );
}

function BeUINotificationStackDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground">Aggregated Alerts</span>
        <Badge variant="secondary" className="text-[9px]">3 Unread</Badge>
      </div>
      <div className="p-1.5 rounded bg-muted/30 text-[10px] text-foreground">
        🚨 High CPU spike on us-east cluster (94%)
      </div>
      <div className="p-1.5 rounded bg-muted/30 text-[10px] text-foreground">
        ✨ New pull request ready for review (#42)
      </div>
    </div>
  );
}

function BeUISchedulerDemo() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const [selectedDay, setSelectedDay] = useState("Wed");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center text-[10px]">
        <span className="font-semibold text-foreground">Availability Slot</span>
        <span className="text-primary font-medium">{selectedDay} @ 15:00 UTC</span>
      </div>
      <div className="flex gap-1">
        {days.map(d => (
          <Button
            key={d}
            size="sm"
            variant={selectedDay === d ? "default" : "outline"}
            className="flex-1 h-6 text-[9px] p-0"
            onClick={() => setSelectedDay(d)}
          >
            {d}
          </Button>
        ))}
      </div>
    </div>
  );
}

function BeUIProjectFolderDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-lg border bg-amber-500/10 border-amber-500/30 flex items-center justify-between cursor-pointer hover:bg-amber-500/20 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Folder className="h-4 w-4 text-amber-500" />
          <span className="font-bold text-foreground">Brand Assets 2026</span>
        </div>
        <span className="text-[10px] text-muted-foreground">{open ? "Collapse" : "Open Binder"}</span>
      </div>
      {open && (
        <div className="pl-4 space-y-1 text-[10px] text-muted-foreground animate-in slide-in-from-top-1">
          <div className="flex items-center gap-1.5"><FileText className="h-3 w-3" /> logo-vector.svg</div>
          <div className="flex items-center gap-1.5"><FileText className="h-3 w-3" /> guidelines.pdf</div>
        </div>
      )}
    </div>
  );
}

function BeUIOtpDemo() {
  const [code, setCode] = useState(["4", "8", "", ""]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground">Single-Digit Segmented Code</span>
      <div className="flex justify-center gap-2">
        {code.map((digit, i) => (
          <input
            key={i}
            maxLength={1}
            value={digit}
            onChange={e => {
              const next = [...code];
              next[i] = e.target.value;
              setCode(next);
            }}
            className="h-8 w-8 text-center font-mono font-bold text-sm border rounded bg-card focus:border-primary focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
}

function BeUIFeedbackDemo() {
  const [rating, setRating] = useState<number | null>(4);
  const emojis = ["😡", "😕", "😐", "😊", "🤩"];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground">How was your interaction experience?</span>
      <div className="flex justify-center gap-2 text-base">
        {emojis.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setRating(idx)}
            className={\`transition-transform \${rating === idx ? "scale-125" : "opacity-50 hover:opacity-100"}\`}
          >
            {e}
          </button>
        ))}
      </div>
      {rating !== null && <p className="text-[9px] text-emerald-500 font-medium">Feedback registered: {emojis[rating]}</p>}
    </div>
  );
}

function BeUIVoiceOrbDemo() {
  const [speaking, setSpeaking] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex flex-col items-center space-y-2">
      <div
        onClick={() => setSpeaking(!speaking)}
        className={\`h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center cursor-pointer transition-all shadow-lg shadow-indigo-500/20 \${speaking ? "animate-pulse scale-105" : "opacity-60 scale-95"}\`}
      >
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <span className="text-[10px] text-muted-foreground">{speaking ? "AI Assistant Listening..." : "Paused (Tap to Talk)"}</span>
    </div>
  );
}

function BeUIApprovalDemo() {
  const [approved, setApproved] = useState<boolean | null>(null);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Action Authorization</span>
        <Badge variant="outline" className="text-[9px] font-mono">Bash Command</Badge>
      </div>
      <div className="p-1.5 bg-muted rounded font-mono text-[9px] text-muted-foreground overflow-x-auto">
        $ git push origin --force production
      </div>
      {approved === null ? (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 h-6 text-[10px]" onClick={() => setApproved(false)}>Reject</Button>
          <Button size="sm" className="flex-1 h-6 text-[10px]" onClick={() => setApproved(true)}>Approve</Button>
        </div>
      ) : (
        <p className={\`text-center font-medium \${approved ? "text-emerald-500" : "text-destructive"}\`}>
          {approved ? "✓ Command Dispatched" : "✗ Execution Aborted"}
        </p>
      )}
    </div>
  );
}
`;

fileContent = fileContent + componentDemos;

fs.writeFileSync("./src/components/registry-live-preview.tsx", fileContent, "utf-8");
console.log("Successfully added beui.dev live preview components!");
