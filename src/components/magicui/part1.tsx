"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  CreditCard,
  Fingerprint,
  Play,
  Plus,
  Sparkles,
  UserPlus,
  Volume2,
  Wifi,
  X,
  Zap,
} from "lucide-react";

/* ========================================================================= */
/* 1. magicui-android-demo                                                   */
/* ========================================================================= */

const MU_ANDROID_KEYFRAMES = `
@keyframes mu-android-boot { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
@keyframes mu-android-scan { 0% { transform: translateX(-100%); } 100% { transform: translateX(320%); } }
`;

function MuAndroidDemo() {
  const [tab, setTab] = React.useState(0);
  const [wifi, setWifi] = React.useState(true);
  const [brightness, setBrightness] = React.useState(72);

  const msgs: { from: string; text: string; time: string }[] = [
    { from: "Mia", text: "ship it 🚀", time: "now" },
    { from: "Kenji", text: "build is green", time: "2m" },
    { from: "Ada", text: "review requested", time: "9m" },
  ];
  const stats: { label: string; value: string; sub: string }[] = [
    { label: "CPU", value: "34%", sub: "8 cores" },
    { label: "Battery", value: "82%", sub: "4h 12m left" },
    { label: "Storage", value: "128", sub: "GB free" },
  ];
  const prefs: { label: string; on: boolean }[] = [
    { label: "Sync", on: true },
    { label: "Haptics", on: false },
  ];
  const nav: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: "chat", label: "Chat", icon: <Bell className="h-3 w-3" /> },
    { id: "stats", label: "Stats", icon: <Zap className="h-3 w-3" /> },
    { id: "setup", label: "Setup", icon: <Fingerprint className="h-3 w-3" /> },
  ];

  return (
    <div className="relative overflow-hidden text-xs">
      <style dangerouslySetInnerHTML={{ __html: MU_ANDROID_KEYFRAMES }} />
      <div className="flex h-[172px] items-center justify-center gap-3">
        {/* phone */}
        <div className="relative shrink-0" style={{ width: 106, height: 164 }}>
          {/* side buttons */}
          <span className="absolute -right-[2px] top-7 h-5 w-[3px] rounded-r-sm bg-neutral-600" />
          <span className="absolute -right-[2px] top-14 h-8 w-[3px] rounded-r-sm bg-neutral-600" />
          <span className="absolute -left-[2px] top-11 h-5 w-[3px] rounded-l-sm bg-neutral-500/70" />
          {/* body */}
          <div className="h-full w-full rounded-[16px] border border-neutral-700 bg-neutral-900 p-[5px] shadow-[0_10px_28px_-14px_rgba(0,0,0,0.7)]">
            <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-neutral-950">
              {/* punch hole camera */}
              <span className="absolute left-1/2 top-[6px] z-30 h-2 w-2 -translate-x-1/2 rounded-full bg-neutral-800 ring-1 ring-neutral-700">
                <span className="absolute left-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-sky-400/40" />
              </span>
              {/* badge row */}
              <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-neutral-900/80 px-2 pt-[3px] pb-[2px] font-mono text-[6px] text-neutral-500">
                <span className="pl-5">9:41</span>
                <span className="flex items-center gap-1">
                  <Wifi className="h-2 w-2" />
                  <span className="rounded-[2px] border border-neutral-600 px-[2px]">82</span>
                </span>
              </div>
              {/* screen */}
              <div className="absolute inset-0 flex flex-col px-2 pb-[22px] pt-[20px]">
                <p className="text-[8px] font-semibold leading-none text-neutral-200">
                  {tab === 0 ? "Inbox" : tab === 1 ? "Device" : "Settings"}
                </p>

                <div className="mt-[5px] flex-1 space-y-[3px] overflow-hidden">
                  {tab === 0 &&
                    msgs.map((m, i) => (
                      <div
                        key={m.from}
                        className="rounded-[5px] border border-neutral-800 bg-neutral-900/90 px-[4px] py-[3px]"
                        style={{ animation: `mu-android-boot 420ms ease-out ${i * 70}ms both` }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[7px] font-medium text-neutral-200">{m.from}</span>
                          <span className="font-mono text-[5px] text-neutral-500">{m.time}</span>
                        </div>
                        <p className="truncate text-[6px] leading-tight text-neutral-400">{m.text}</p>
                      </div>
                    ))}

                  {tab === 1 &&
                    stats.map((s, i) => (
                      <div
                        key={s.label}
                        className="rounded-[5px] border border-emerald-900/50 bg-gradient-to-br from-emerald-500/10 to-transparent px-[4px] py-[3px]"
                        style={{ animation: `mu-android-boot 420ms ease-out ${i * 70}ms both` }}
                      >
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-[6px] uppercase tracking-wide text-emerald-400/80">
                            {s.label}
                          </span>
                          <span className="font-mono text-[9px] font-bold text-emerald-300">{s.value}</span>
                        </div>
                        <p className="text-[6px] leading-tight text-neutral-500">{s.sub}</p>
                      </div>
                    ))}

                  {tab === 2 && (
                    <div className="space-y-[4px]" style={{ animation: "mu-android-boot 420ms ease-out both" }}>
                      <button
                        type="button"
                        onClick={() => setWifi((w) => !w)}
                        className="flex w-full items-center justify-between rounded-[5px] border border-neutral-800 bg-neutral-900/80 px-[5px] py-[4px]"
                      >
                        <span className="flex items-center gap-[3px] text-[7px] text-neutral-300">
                          <Wifi className="h-2.5 w-2.5" /> Wi-Fi
                        </span>
                        <span
                          className={`relative h-[9px] w-[18px] rounded-full transition-colors ${
                            wifi ? "bg-sky-500" : "bg-neutral-700"
                          }`}
                        >
                          <span
                            className={`absolute top-[1px] h-[7px] w-[7px] rounded-full bg-white transition-all ${
                              wifi ? "left-[10px]" : "left-[1px]"
                            }`}
                          />
                        </span>
                      </button>
                      {prefs.map((p) => (
                        <div
                          key={p.label}
                          className="flex items-center justify-between rounded-[5px] border border-neutral-800 bg-neutral-900/80 px-[5px] py-[4px]"
                        >
                          <span className="text-[7px] text-neutral-300">{p.label}</span>
                          <span className={`text-[6px] font-mono ${p.on ? "text-sky-400" : "text-neutral-500"}`}>
                            {p.on ? "ON" : "OFF"}
                          </span>
                        </div>
                      ))}
                      <div className="rounded-[5px] border border-neutral-800 bg-neutral-900/80 px-[5px] py-[4px]">
                        <div className="flex items-center gap-[3px] text-[7px] text-neutral-300">
                          <Volume2 className="h-2.5 w-2.5" /> Brightness
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={100}
                          value={brightness}
                          aria-label="Brightness"
                          onChange={(e) => setBrightness(Number(e.target.value))}
                          className="mt-[3px] h-[3px] w-full cursor-pointer appearance-none rounded-full bg-neutral-700 accent-sky-400"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* bottom nav */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-neutral-800 bg-neutral-900/95 py-[4px]">
                {nav.map((n, i) => {
                  const active = tab === i;
                  return (
                    <button
                      key={n.id}
                      type="button"
                      aria-label={n.label}
                      onClick={() => setTab(i)}
                      className={`flex flex-col items-center gap-[1px] rounded-[5px] px-[5px] py-[2px] transition-colors ${
                        active ? "bg-sky-500/15 text-sky-300" : "text-neutral-500 hover:text-neutral-300"
                      }`}
                    >
                      {n.icon}
                      <span className="text-[5px] font-medium leading-none">{n.label}</span>
                    </button>
                  );
                })}
              </div>
              {/* scanline */}
              <span
                className="pointer-events-none absolute left-0 top-0 z-20 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"
                style={{ animation: "mu-android-scan 3.4s linear infinite" }}
              />
            </div>
          </div>
        </div>

        {/* side readout */}
        <div className="flex w-[128px] shrink-0 flex-col gap-1.5">
          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Android 15</p>
          <p className="text-[10px] leading-snug text-foreground">
            底部导航可切换 <span className="text-sky-500">3 个 App 页面</span>
          </p>
          <div className="flex flex-wrap gap-1">
            {nav.map((n, i) => (
              <button
                key={n.id}
                type="button"
                onClick={() => setTab(i)}
                className={`rounded-full border px-2 py-[2px] text-[9px] transition-colors ${
                  tab === i
                    ? "border-sky-500/60 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                    : "border-border text-muted-foreground hover:bg-muted/60"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
          <p className="font-mono text-[9px] text-muted-foreground">
            亮度 {brightness}% · Wi-Fi {wifi ? "on" : "off"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. magicui-animated-circular-progress-bar-demo                            */
/* ========================================================================= */

const MU_RING_EASING = (t: number): number => 1 - Math.pow(1 - t, 3);

const MU_RING_TARGETS: number[] = [68, 92, 45, 100, 76];

function MuProgressRing({ size, progress }: { size: number; progress: number }) {
  const radius = (size - 10) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <defs>
        <linearGradient id="mu-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={7}
        className="text-muted-foreground/20"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#mu-ring-grad)"
        strokeWidth={7}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - Math.min(1, Math.max(0, progress / 100)))}
        style={{ filter: "drop-shadow(0 0 4px rgba(56,189,248,0.45))" }}
      />
    </svg>
  );
}

function MuAnimatedCircularProgressBarDemo() {
  const [target, setTarget] = React.useState(MU_RING_TARGETS[0]);
  const [run, setRun] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const [ticks, setTicks] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const settle = window.setTimeout(() => {
        setProgress(target);
        setTicks(target);
      }, 0);
      return () => window.clearTimeout(settle);
    }
    let frame = 0;
    const start = performance.now();
    const duration = 1100;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = MU_RING_EASING(t);
      setProgress(target * eased);
      setTicks(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, run]);

  return (
    <div className="relative flex h-[168px] items-center justify-center gap-5 overflow-hidden text-xs">
      <div className="relative flex items-center justify-center">
        <MuProgressRing size={104} progress={progress} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-mono text-xl font-bold tabular-nums text-foreground">{ticks}</span>
          <span className="text-[9px] uppercase tracking-widest text-muted-foreground">percent</span>
        </div>
      </div>

      <div className="flex w-[132px] flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <Zap className="h-3.5 w-3.5 text-indigo-500" />
          <span className="text-[11px] font-semibold text-foreground">Ring progress</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400"
            style={{ width: `${Math.round(progress)}%` }}
          />
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="inline-flex h-6 items-center gap-1 rounded-md bg-primary px-2 text-[10px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Play className="h-3 w-3" /> 重播
          </button>
          <button
            type="button"
            onClick={() => {
              const current = MU_RING_TARGETS.indexOf(target);
              setTarget(MU_RING_TARGETS[(current + 1) % MU_RING_TARGETS.length]);
            }}
            className="inline-flex h-6 items-center gap-1 rounded-md border border-border bg-background px-2 text-[10px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Sparkles className="h-3 w-3" /> 目标 {target}%
          </button>
        </div>
        <p className="font-mono text-[9px] text-muted-foreground">stroke-dashoffset · 1.1s ease-out</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. magicui-animated-gradient-text-demo                                    */
/* ========================================================================= */

const MU_GRADIENT_KEYFRAMES = `
@keyframes mu-grad-flow {
  from { background-position: 0% 50%; }
  to { background-position: -200% 50%; }
}
`;

const MU_GRADIENT_PRESETS: { name: string; css: string }[] = [
  { name: "Aurora", css: "linear-gradient(90deg,#6366f1,#22d3ee,#34d399,#6366f1)" },
  { name: "Sunset", css: "linear-gradient(90deg,#f97316,#ec4899,#8b5cf6,#f97316)" },
  { name: "Mono", css: "linear-gradient(90deg,#111827,#9ca3af,#111827)" },
];

function MuAnimatedGradientTextDemo() {
  const [text, setText] = React.useState("Animated Gradient Text");
  const [preset, setPreset] = React.useState(0);
  const gradient = MU_GRADIENT_PRESETS[preset];

  return (
    <div className="relative flex h-[150px] flex-col justify-center gap-3 overflow-hidden text-xs">
      <style dangerouslySetInnerHTML={{ __html: MU_GRADIENT_KEYFRAMES }} />
      <div className="flex flex-col items-center gap-1">
        <span
          className="max-w-full truncate bg-clip-text text-center text-[26px] font-extrabold leading-tight tracking-tight text-transparent"
          style={{
            backgroundImage: gradient.css,
            backgroundSize: "200% 100%",
            animation: "mu-grad-flow 3.2s linear infinite",
          }}
        >
          {text || "Type something…"}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          {gradient.name} palette · bg-clip-text
        </span>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 p-1.5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="输入文字…"
          aria-label="Gradient text content"
          className="h-7 min-w-0 flex-1 rounded-md border border-input bg-background px-2 text-[11px] text-foreground outline-none transition-colors focus-visible:border-ring"
        />
        {MU_GRADIENT_PRESETS.map((p, i) => (
          <button
            key={p.name}
            type="button"
            aria-label={`palette ${p.name}`}
            onClick={() => setPreset(i)}
            className={`h-6 rounded-md border px-2 text-[10px] transition-colors ${
              preset === i
                ? "border-primary/50 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 4. magicui-animated-grid-pattern-demo                                     */
/* ========================================================================= */

const MU_GRID_KEYFRAMES = `
@keyframes mu-grid-cell {
  0% { background-color: transparent; }
  8% { background-color: rgba(99,102,241,0.85); }
  22% { background-color: rgba(99,102,241,0); }
  100% { background-color: transparent; }
}
`;

const MU_GRID_DOT = {
  backgroundImage: "radial-gradient(circle, rgba(120,120,135,0.55) 1px, transparent 1.1px)",
  backgroundSize: "20px 20px",
};
const MU_GRID_LINE = {
  backgroundImage:
    "linear-gradient(to right, rgba(120,120,135,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,135,0.35) 1px, transparent 1px)",
  backgroundSize: "20px 20px",
};

function MuAnimatedGridPatternDemo() {
  const [mode, setMode] = React.useState(0);
  const [big, setBig] = React.useState(false);
  const cols = 16;
  const rows = 8;
  const lit = new Set<number>([1, 18, 32, 57, 73, 88, 105, 121]);
  const litIndex = Array.from(lit);
  const size = big ? 24 : 20;

  return (
    <div className="relative h-[152px] overflow-hidden text-xs">
      <style dangerouslySetInnerHTML={{ __html: MU_GRID_KEYFRAMES }} />
      <div
        className={`absolute inset-0 ${mode === 0 ? "" : "opacity-90"}`}
        style={{
          backgroundImage:
            mode === 0
              ? "linear-gradient(to right, rgba(120,120,135,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,135,0.28) 1px, transparent 1px)"
              : MU_GRID_DOT.backgroundImage,
          backgroundSize: mode === 0 ? `${size}px ${size}px` : `${size}px ${size}px`,
        }}
      >
        <div
          className="grid h-full w-full"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
        >
          {Array.from({ length: cols * rows }).map((_, i) => {
            const order = lit.has(i) ? litIndex.indexOf(i) : -1;
            return (
              <div
                key={i}
                className="relative rounded-[2px]"
                style={
                  order >= 0
                    ? { animation: `mu-grid-cell 4.8s linear ${(order * 0.45).toFixed(2)}s infinite` }
                    : undefined
                }
              >
                <span
                  className="absolute inset-[15%] rounded-[3px] opacity-0 transition-opacity duration-150 hover:opacity-100"
                  style={{ backgroundColor: mode === 0 ? "rgba(99,102,241,0.28)" : "rgba(34,211,238,0.3)" }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="pointer-events-auto rounded-full border border-border bg-card/90 px-2.5 py-1 text-[10px] font-medium text-foreground shadow-xs backdrop-blur">
          {lit.size} 个方格按固定顺序亮起 · hover 单格高亮
        </span>
      </div>

      <div className="absolute bottom-2 left-2 flex gap-1.5">
        <button
          type="button"
          onClick={() => setMode(mode === 0 ? 1 : 0)}
          className="rounded-md border border-border bg-card/80 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur transition-colors hover:bg-muted"
        >
          {mode === 0 ? "Grid" : "Dot"}
        </button>
        <button
          type="button"
          onClick={() => setBig((b) => !b)}
          className="rounded-md border border-border bg-card/80 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur transition-colors hover:bg-muted"
        >
          {size}px
        </button>
      </div>

      <div className="absolute bottom-2 right-2 font-mono text-[9px] text-muted-foreground">
        16 × 8 · delay = index × 0.45s
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. magicui-animated-list-demo                                             */
/* ========================================================================= */

interface MuNotifyItem {
  id: number;
  type: number;
  template: number;
}

const MU_NOTIFY_POOL: { icon: React.ReactNode; title: string; body: string; tone: string }[] = [
  { icon: <CreditCard className="h-3.5 w-3.5" />, title: "New payment received", body: "$1,250.00 · Stripe", tone: "text-emerald-500 bg-emerald-500/10" },
  { icon: <Zap className="h-3.5 w-3.5" />, title: "Deployment succeeded", body: "production · 42s", tone: "text-indigo-500 bg-indigo-500/10" },
  { icon: <UserPlus className="h-3.5 w-3.5" />, title: "Someone joined the team", body: "sarah@acme.io", tone: "text-amber-500 bg-amber-500/10" },
];

function MuAnimatedListDemo() {
  const [items, setItems] = React.useState<MuNotifyItem[]>([
    { id: 1, type: 0, template: 0 },
    { id: 2, type: 1, template: 1 },
    { id: 3, type: 2, template: 2 },
  ]);
  const counter = React.useRef(3);

  const addItem = () => {
    counter.current += 1;
    const id = counter.current;
    setItems((prev) => [{ id, type: 0, template: id % MU_NOTIFY_POOL.length }, ...prev].slice(0, 5));
  };
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="relative flex h-[176px] flex-col overflow-hidden text-xs">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-foreground">
          <Bell className="h-3.5 w-3.5 text-primary" /> Notifications
          <span className="rounded-full bg-muted px-1.5 py-[1px] font-mono text-[9px] text-muted-foreground">
            {items.length}
          </span>
        </span>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex h-6 items-center gap-1 rounded-md border border-border bg-background px-2 text-[10px] font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Plus className="h-3 w-3" /> 追加一条
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <ul className="space-y-1.5">
          <AnimatePresence initial={false}>
            {items.map((item) => {
              const meta = MU_NOTIFY_POOL[item.template];
              return (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 22, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 26, height: 0, marginBottom: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1.5 shadow-xs"
                >
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${meta.tone}`}>
                    {meta.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-medium text-foreground">{meta.title}</span>
                    <span className="block truncate font-mono text-[9px] text-muted-foreground">{meta.body}</span>
                  </span>
                  <button
                    type="button"
                    aria-label="dismiss notification"
                    onClick={() => removeItem(item.id)}
                    className="grid h-5 w-5 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-card to-transparent" />
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. magicui-animated-shiny-text-demo                                       */
/* ========================================================================= */

const MU_SHINY_KEYFRAMES = `
@keyframes mu-shiny-sweep {
  0% { background-position: -150% 0; }
  60% { background-position: 250% 0; }
  100% { background-position: 250% 0; }
}
`;

function MuAnimatedShinyTextDemo() {
  const labels = ["✨ Introducing Magic UI", "🚀 Ship interfaces 10× faster", "🎨 200+ animated components"];
  const [index, setIndex] = React.useState(0);

  return (
    <div className="relative flex h-[140px] flex-col items-center justify-center gap-3 overflow-hidden text-xs">
      <style dangerouslySetInnerHTML={{ __html: MU_SHINY_KEYFRAMES }} />
      <button
        type="button"
        onClick={() => setIndex((i) => (i + 1) % labels.length)}
        className="group inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-muted/40 py-1.5 pl-1.5 pr-3 transition-colors hover:bg-muted/70"
      >
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-primary">
          New
        </span>
        <span className="relative overflow-hidden">
          <span className="invisible whitespace-nowrap text-[12px] font-medium">{labels[index]}</span>
          <span className="absolute inset-0 whitespace-nowrap text-[12px] font-medium text-muted-foreground">
            {labels[index]}
          </span>
          <span
            className="absolute inset-0 whitespace-nowrap text-[12px] font-medium text-white"
            style={{
              backgroundImage:
                "linear-gradient(100deg, rgba(255,255,255,0) 22%, rgba(255,255,255,0.95) 42%, rgba(190,215,255,0.95) 54%, rgba(255,255,255,0) 76%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              mixBlendMode: "screen",
              animation: "mu-shiny-sweep 2.6s ease-in-out infinite",
            }}
          >
            {labels[index]}
          </span>
        </span>
      </button>

      <div className="flex items-center gap-2">
        {labels.map((l, i) => (
          <button
            key={l}
            type="button"
            aria-label={`message ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              index === i ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
      <p className="font-mono text-[9px] text-muted-foreground">linear-gradient + background-clip: text sweep</p>
    </div>
  );
}

/* ========================================================================= */
/* 7. magicui-animated-theme-toggler-demo                                    */
/* ========================================================================= */

const MU_THEME_DAYS: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MU_THEME_BARS: number[] = [38, 62, 45, 80, 55, 92, 70];

function MuAnimatedThemeTogglerDemo() {
  const [dark, setDark] = React.useState(false);
  const [origin, setOrigin] = React.useState({ x: 50, y: 50 });

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.width > 0 ? ((event.clientX - rect.left) / rect.width) * 100 : 50;
    const y = rect.height > 0 ? ((event.clientY - rect.top) / rect.height) * 100 : 50;
    setOrigin({ x: Math.round(x), y: Math.round(y) });
    setDark((d) => !d);
  };

  const active = dark ? "dark" : "light";

  return (
    <div className="relative h-[164px] overflow-hidden rounded-xl text-xs">
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{ backgroundColor: dark ? "#0b1120" : "#f4f5f7" }}
      />
      {/* expanding circular wipe */}
      <AnimatePresence>
        <motion.span
          key={dark ? "to-dark" : "to-light"}
          className="pointer-events-none absolute h-[320px] w-[320px] rounded-full"
          style={{
            left: `${origin.x}%`,
            top: `${origin.y}%`,
            x: "-50%",
            y: "-50%",
            background: dark
              ? "radial-gradient(circle, rgba(56,189,248,0.35), rgba(56,189,248,0) 70%)"
              : "radial-gradient(circle, rgba(250,204,21,0.35), rgba(250,204,21,0) 70%)",
          }}
          initial={{ scale: 0, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      </AnimatePresence>

      <div className="relative flex h-full flex-col justify-between p-3">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold transition-colors duration-500" style={{ color: dark ? "#e2e8f0" : "#0f172a" }}>
              {dark ? "Dark mode" : "Light mode"}
            </p>
            <p className="font-mono text-[9px] transition-colors duration-500" style={{ color: dark ? "#7c8aa5" : "#64748b" }}>
              theme: {dark ? "midnight" : "daylight"}
            </p>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label="toggle theme"
            aria-pressed={dark}
            className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border transition-colors duration-500"
            style={{
              borderColor: dark ? "rgba(148,163,184,0.35)" : "rgba(15,23,42,0.12)",
              backgroundColor: dark ? "rgba(30,41,59,0.9)" : "rgba(255,255,255,0.9)",
            }}
          >
            <motion.span
              className="absolute inset-0"
              style={{
                background: dark
                  ? "radial-gradient(circle at 50% 50%, #0ea5e9, #0369a1)"
                  : "radial-gradient(circle at 50% 50%, #fde68a, #f59e0b)",
              }}
              animate={{ scale: dark ? 1 : 0.6, opacity: dark ? 0.18 : 0.35 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            />
            <motion.span
              className="relative"
              animate={{ rotate: dark ? 180 : 0, scale: dark ? 0.9 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {dark ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
                </svg>
              )}
            </motion.span>
          </button>
        </div>

        <div className="flex items-end justify-between gap-2">
          {MU_THEME_DAYS.map((day, i) => (
            <div key={day} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-sm transition-colors duration-500"
                style={{
                  height: `${Math.round((MU_THEME_BARS[i] / 100) * 44) + 6}px`,
                  backgroundColor: dark ? "rgba(56,189,248,0.55)" : "rgba(15,23,42,0.18)",
                  boxShadow: dark ? "0 0 10px -2px rgba(56,189,248,0.7)" : "none",
                }}
              />
              <span className="font-mono text-[8px] transition-colors duration-500" style={{ color: dark ? "#7c8aa5" : "#94a3b8" }}>
                {day}
              </span>
            </div>
          ))}
        </div>

        <p className="font-mono text-[9px] transition-colors duration-500" style={{ color: dark ? "#7c8aa5" : "#64748b" }}>
          wipe origin {origin.x}% / {origin.y}% · framer-motion spring
        </p>
      </div>
      <span className="sr-only">{active === "dark" ? "Dark theme active" : "Light theme active"}</span>
    </div>
  );
}

/* ========================================================================= */
/* 8. magicui-aurora-text-demo                                               */
/* ========================================================================= */

const MU_AURORA_KEYFRAMES = `
@keyframes mu-aurora-drift {
  0% { background-position: 0% 50%, 30% 40%, 70% 60%; }
  50% { background-position: 60% 50%, 75% 60%, 20% 40%; }
  100% { background-position: 120% 50%, 30% 40%, 70% 60%; }
}
@keyframes mu-aurora-band {
  0% { transform: translateX(-35%) scaleX(1); opacity: 0.5; }
  50% { transform: translateX(12%) scaleX(1.25); opacity: 0.9; }
  100% { transform: translateX(-35%) scaleX(1); opacity: 0.5; }
}
`;

const MU_AURORA_PALETTES: {
  name: string;
  text: string;
  band: string;
  caption: string;
}[] = [
  {
    name: "Polar",
    text: "linear-gradient(100deg,#22d3ee 10%,#a78bfa 45%,#34d399 70%,#22d3ee 95%)",
    band: "linear-gradient(100deg,#22d3ee,#a78bfa,#34d399)",
    caption: "#22d3ee · #a78bfa · #34d399",
  },
  {
    name: "Ember",
    text: "linear-gradient(100deg,#fb7185 10%,#f59e0b 45%,#f472b6 70%,#fb7185 95%)",
    band: "linear-gradient(100deg,#fb7185,#f59e0b,#f472b6)",
    caption: "#fb7185 · #f59e0b · #f472b6",
  },
  {
    name: "Cosmic",
    text: "linear-gradient(100deg,#60a5fa 10%,#e879f9 45%,#38bdf8 70%,#60a5fa 95%)",
    band: "linear-gradient(100deg,#60a5fa,#e879f9,#38bdf8)",
    caption: "#60a5fa · #e879f9 · #38bdf8",
  },
];

function MuAuroraTextDemo() {
  const [palette, setPalette] = React.useState(0);
  const active = MU_AURORA_PALETTES[palette];

  return (
    <div className="relative flex h-[160px] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-neutral-950 text-xs">
      <style dangerouslySetInnerHTML={{ __html: MU_AURORA_KEYFRAMES }} />
      <div
        className="pointer-events-none absolute -inset-x-10 top-1 h-24 opacity-70 blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(100deg, transparent 5%, rgba(34,211,238,0.85) 25%, rgba(167,139,250,0.85) 50%, rgba(52,211,153,0.85) 75%, transparent 95%)",
          animation: "mu-aurora-band 7s ease-in-out infinite",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.08),transparent_60%)]" />

      <p className="relative font-mono text-[9px] uppercase tracking-[0.35em] text-neutral-500">aurora text</p>
      <span
        className="relative bg-clip-text text-center text-[30px] font-extrabold leading-none tracking-tight text-transparent"
        style={{ backgroundImage: active.text, animation: "mu-aurora-drift 6s ease-in-out infinite" }}
      >
        Northern Lights
      </span>
      <p className="relative font-mono text-[9px] text-neutral-500">{active.caption}</p>

      <div className="relative flex gap-1.5">
        {MU_AURORA_PALETTES.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => setPalette(i)}
            className={`rounded-full border px-2 py-[3px] text-[10px] transition-colors ${
              palette === i
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-200"
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 9. magicui-avatar-circles-demo                                            */
/* ========================================================================= */

const MU_AVATARS: { initials: string; name: string; from: string; to: string }[] = [
  { initials: "AK", name: "Aiko", from: "#6366f1", to: "#22d3ee" },
  { initials: "BR", name: "Bruno", from: "#f97316", to: "#facc15" },
  { initials: "CM", name: "Chen", from: "#ec4899", to: "#8b5cf6" },
  { initials: "DL", name: "Dana", from: "#10b981", to: "#84cc16" },
  { initials: "EV", name: "Eero", from: "#0ea5e9", to: "#3b82f6" },
];

function MuAvatarCirclesDemo() {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const expanded = hovered !== null;

  return (
    <div className="relative flex h-[160px] flex-col items-center justify-center gap-3 overflow-hidden text-xs">
      <div className="flex flex-col items-center gap-1">
        <p className="text-[11px] font-semibold text-foreground">Trusted by builders</p>
        <p className="font-mono text-[9px] text-muted-foreground">hover 头像看名字 · 整圈散开</p>
      </div>

      <div
        className="relative flex h-[42px] items-center"
        onMouseLeave={() => setHovered(null)}
      >
        {MU_AVATARS.map((a, i) => {
          const isHot = hovered === i;
          const dim = expanded && !isHot;
          const spread = expanded ? (i - (MU_AVATARS.length - 1) / 2) * 13 : 0;
          return (
            <motion.div
              key={a.initials}
              className="relative"
              style={{ zIndex: isHot ? 40 : MU_AVATARS.length - i, marginLeft: i === 0 ? 0 : -12 }}
              onMouseEnter={() => setHovered(i)}
              animate={{ x: spread, y: isHot ? -8 : 0, scale: isHot ? 1.3 : 1, opacity: dim ? 0.55 : 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-full text-[11px] font-bold text-white shadow-md ring-2 ring-card"
                style={{ backgroundImage: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
              >
                {a.initials}
              </span>
              <AnimatePresence>
                {isHot && (
                  <motion.span
                    initial={{ opacity: 0, y: 4, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.85 }}
                    transition={{ duration: 0.16 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-[3px] text-[10px] font-medium text-popover-foreground shadow-md"
                  >
                    {a.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        <motion.span
          className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-border bg-muted text-[10px] font-semibold text-muted-foreground"
          animate={{ scale: expanded ? 1.1 : 1, opacity: expanded ? 0.7 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
          +99
        </motion.span>
      </div>

      <div className="flex h-4 items-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={hovered === null ? "idle" : hovered}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="font-mono text-[10px] text-muted-foreground"
          >
            {hovered === null ? `${MU_AVATARS.length} members in this shift` : `${MU_AVATARS[hovered].name} · online`}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 10. magicui-backlight-demo                                                */
/* ========================================================================= */

const MU_BACKLIGHT_ARCS = ["#38bdf8", "#a78bfa", "#34d399", "#fb7185", "#facc15"];

function MuBacklightDemo() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = React.useState<{ x: number; y: number } | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  const glow = pos === null ? "transparent" : "rgba(56,189,248,0.55)";
  const glowSecondary = pos === null ? "transparent" : "rgba(167,139,250,0.35)";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      className="relative h-[168px] overflow-hidden rounded-xl border border-border bg-card text-xs"
    >
      {/* backlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos === null ? 0 : 1,
          background: pos
            ? `radial-gradient(160px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 70%), radial-gradient(90px circle at ${pos.x}px ${pos.y}px, ${glowSecondary}, transparent 70%)`
            : undefined,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60 blur-2xl transition-opacity duration-500"
        style={{
          opacity: pos === null ? 0.25 : 0.75,
          background: pos
            ? `radial-gradient(120px circle at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.45), transparent 70%)`
            : "radial-gradient(120px circle at 50% 55%, rgba(56,189,248,0.35), transparent 70%)",
        }}
      />

      <div className="relative flex h-full items-center justify-between gap-3 p-3">
        {/* product card */}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card/80 px-3 py-2 shadow-sm backdrop-blur-sm">
          <div className="relative grid h-14 w-14 place-items-center rounded-lg bg-neutral-950">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-sky-500/20 to-violet-500/20" />
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="relative">
              <path d="M17 4.5 29.5 27H4.5Z" stroke="#e2e8f0" strokeWidth="1.4" strokeLinejoin="round" />
              <circle cx="17" cy="17" r="3" fill="#38bdf8" />
            </svg>
            <span className="absolute -bottom-1 -right-1 rounded-full border border-border bg-card px-1.5 py-[1px] font-mono text-[8px] text-muted-foreground">
              v4
            </span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-foreground">Aurora Board</p>
            <p className="font-mono text-[9px] text-muted-foreground">hover 移动鼠标 · 光晕跟随</p>
            <div className="mt-1 flex gap-[3px]">
              {MU_BACKLIGHT_ARCS.map((c) => (
                <span key={c} className="h-1.5 w-4 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        </div>

        {/* telemetry */}
        <div className="w-[104px] shrink-0 space-y-1 rounded-lg border border-border bg-muted/40 p-2">
          <p className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
            cursor <span className="text-foreground">{pos ? `${Math.round(pos.x)},${Math.round(pos.y)}` : "—"}</span>
          </p>
          <p className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
            glow <span className="text-foreground">{pos ? "active" : "centered"}</span>
          </p>
          <p className="flex items-center justify-between font-mono text-[9px] text-muted-foreground">
            radius <span className="text-foreground">160px</span>
          </p>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-2 left-3 font-mono text-[9px] text-muted-foreground">
        radial-gradient @ mouse coords
      </span>
    </div>
  );
}

/* ========================================================================= */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-android-demo": MuAndroidDemo,
  "magicui-animated-circular-progress-bar-demo": MuAnimatedCircularProgressBarDemo,
  "magicui-animated-gradient-text-demo": MuAnimatedGradientTextDemo,
  "magicui-animated-grid-pattern-demo": MuAnimatedGridPatternDemo,
  "magicui-animated-list-demo": MuAnimatedListDemo,
  "magicui-animated-shiny-text-demo": MuAnimatedShinyTextDemo,
  "magicui-animated-theme-toggler-demo": MuAnimatedThemeTogglerDemo,
  "magicui-aurora-text-demo": MuAuroraTextDemo,
  "magicui-avatar-circles-demo": MuAvatarCirclesDemo,
  "magicui-backlight-demo": MuBacklightDemo,
};
