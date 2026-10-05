"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  ChevronRight,
  FileCode,
  Folder,
  FolderOpen,
  GripVertical,
  Layers,
  MapPin,
  Minus,
  MousePointerClick,
  Plus,
  RotateCcw,
  Route,
  Trash,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ========================================================================= */
/* Shared CSS (deterministic, injected once per mounted preview)             */
/* ========================================================================= */

const MU2_CSS = `
@keyframes mu2-sweep-fwd {
  0% { -webkit-mask-position: 84% 50%; mask-position: 84% 50%; }
  100% { -webkit-mask-position: 16% 50%; mask-position: 16% 50%; }
}
@keyframes mu2-sweep-rev {
  0% { -webkit-mask-position: 16% 50%; mask-position: 16% 50%; }
  100% { -webkit-mask-position: 84% 50%; mask-position: 84% 50%; }
}
@keyframes mu2-reveal-in {
  0%, 42% { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes mu2-band-fwd {
  0% { left: -16%; opacity: 0; }
  12% { opacity: 1; }
  86% { opacity: 1; }
  100% { left: 108%; opacity: 0; }
}
@keyframes mu2-band-rev {
  0% { left: 108%; opacity: 0; }
  12% { opacity: 1; }
  86% { opacity: 1; }
  100% { left: -16%; opacity: 0; }
}
@keyframes mu2-flicker {
  0%, 100% { opacity: 0.05; }
  38% { opacity: 0.9; }
  54% { opacity: 0.3; }
  72% { opacity: 0.72; }
}
@keyframes mu2-float3d {
  0% { transform: translate3d(0, 7px, -16px); }
  100% { transform: translate3d(0, -9px, 18px); }
}
@keyframes mu2-ping-ring {
  0% { transform: scale(0.7); opacity: 0.8; }
  100% { transform: scale(2.8); opacity: 0; }
}
.mu2-flicker-cell {
  animation-name: mu2-flicker;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.06;
}
.mu2-map-dot {
  display: block;
  margin: auto;
  height: 2.5px;
  width: 2.5px;
  border-radius: 999px;
  background-color: #7dd3fc;
}
`;

function Mu2Css() {
  return <style>{MU2_CSS}</style>;
}

/* ========================================================================= */
/* 1. magicui-blur-fade-demo                                                 */
/* ========================================================================= */

function MuBlurFadeDemo() {
  const [run, setRun] = React.useState(0);
  const [blur, setBlur] = React.useState(10);
  const lines: string[] = ["Blur fade reveal", "staggered by 140ms", "opacity + y + filter"];

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[154px] flex-col justify-between rounded-xl border bg-muted/30 p-3">
        <div className="space-y-1.5">
          {lines.map((line, i) => (
            <motion.div
              key={`${run}-${blur}-${i}`}
              initial={{ opacity: 0, y: 14, filter: `blur(${blur}px)` }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.14, duration: 0.7, ease: "easeOut" }}
              className={cn(
                "rounded-md border bg-card px-2 py-1 font-mono shadow-xs",
                i === 0 ? "font-semibold text-foreground" : "text-muted-foreground",
              )}
            >
              {line}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="xs"
            variant="outline"
            className="gap-1 font-mono"
            onClick={() => setRun((r) => r + 1)}
          >
            <RotateCcw className="h-3 w-3" />
            重播
          </Button>
          <div className="flex items-center gap-1">
            {[4, 10, 18].map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => {
                  setBlur(b);
                  setRun((r) => r + 1);
                }}
                className={cn(
                  "rounded-md border px-1.5 py-0.5 font-mono text-[9px] transition-colors",
                  blur === b
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                blur {b}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. magicui-code-comparison-demo                                           */
/* ========================================================================= */

type Mu2CodeToken = { t: string; c: string };

const MU2_CODE_BEFORE: Mu2CodeToken[][] = [
  [
    { t: "function", c: "text-fuchsia-500" },
    { t: " fmt(d) {", c: "text-foreground" },
  ],
  [
    { t: "  if", c: "text-fuchsia-500" },
    { t: " (d == ", c: "text-foreground" },
    { t: "null", c: "text-amber-500" },
    { t: ") ", c: "text-foreground" },
    { t: "return", c: "text-fuchsia-500" },
    { t: ' "";', c: "text-emerald-600" },
  ],
  [
    { t: "  var", c: "text-fuchsia-500" },
    { t: " s = d.toISOString();", c: "text-foreground" },
  ],
  [
    { t: "  return", c: "text-fuchsia-500" },
    { t: " s.slice(", c: "text-foreground" },
    { t: "0", c: "text-amber-500" },
    { t: ", ", c: "text-foreground" },
    { t: "10", c: "text-amber-500" },
    { t: ");", c: "text-foreground" },
  ],
  [{ t: "}", c: "text-foreground" }],
];

const MU2_CODE_AFTER: Mu2CodeToken[][] = [
  [
    { t: "const", c: "text-sky-500" },
    { t: " fmt = (d?: ", c: "text-foreground" },
    { t: "Date", c: "text-amber-500" },
    { t: ") =>", c: "text-foreground" },
  ],
  [
    { t: "  d?.toISOString().slice(", c: "text-foreground" },
    { t: "0", c: "text-amber-500" },
    { t: ", ", c: "text-foreground" },
    { t: "10", c: "text-amber-500" },
    { t: ") ?? ", c: "text-foreground" },
    { t: '""', c: "text-emerald-600" },
    { t: ";", c: "text-foreground" },
  ],
];

function MuCodeComparisonDemo() {
  const [pos, setPos] = React.useState(52);

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative h-[156px] overflow-hidden rounded-xl border bg-card">
        <div className="absolute inset-0 px-2 pb-2 pt-6">
          <pre className="space-y-[3px] font-mono text-[9.5px] leading-[13px]">
            {MU2_CODE_BEFORE.map((line, i) => (
              <div key={i} className="flex gap-1.5 whitespace-pre">
                <span className="w-2 shrink-0 select-none text-right text-muted-foreground/45">
                  {i + 1}
                </span>
                <span className="truncate">
                  {line.map((tk, j) => (
                    <span key={j} className={tk.c}>
                      {tk.t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>

        <div
          className="absolute inset-0 bg-primary/[0.06] px-2 pb-2 pt-6"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <pre className="space-y-[3px] font-mono text-[9.5px] leading-[13px]">
            {MU2_CODE_AFTER.map((line, i) => (
              <div key={i} className="flex gap-1.5 whitespace-pre">
                <span className="w-2 shrink-0 select-none text-right text-primary/50">
                  {i + 1}
                </span>
                <span className="truncate">
                  {line.map((tk, j) => (
                    <span key={j} className={tk.c}>
                      {tk.t}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
          <div className="mt-2 inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] text-emerald-600">
            -3 lines · no var
          </div>
        </div>

        <span className="absolute left-2 top-1.5 rounded border bg-card px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
          重构前
        </span>
        <span className="absolute right-2 top-1.5 rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] text-primary">
          重构后
        </span>

        <div className="absolute inset-y-0 w-px bg-primary/60" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-card shadow-xs">
            <GripVertical className="h-3 w-3 text-primary" />
          </div>
        </div>

        <input
          type="range"
          min={8}
          max={92}
          value={pos}
          aria-label="代码对比分隔线"
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. magicui-comic-text-demo                                                */
/* ========================================================================= */

type Mu2ComicTheme = {
  fill: string;
  stroke: string;
  shadow: string;
  ghost: string;
  surface: string;
  width: number;
};

const MU2_COMIC_THEMES: Mu2ComicTheme[] = [
  {
    fill: "#fde047",
    stroke: "#111827",
    shadow: "#f43f5e",
    ghost: "rgba(244,63,94,0.35)",
    surface: "#fff7ed",
    width: 2,
  },
  {
    fill: "#38bdf8",
    stroke: "#0f172a",
    shadow: "#a855f7",
    ghost: "rgba(168,85,247,0.35)",
    surface: "#eff6ff",
    width: 3,
  },
  {
    fill: "#fb7185",
    stroke: "#1f2937",
    shadow: "#22d3ee",
    ghost: "rgba(34,211,238,0.35)",
    surface: "#fef2f2",
    width: 4,
  },
];

function MuComicTextDemo() {
  const [step, setStep] = React.useState(0);
  const theme = MU2_COMIC_THEMES[step % MU2_COMIC_THEMES.length];

  const advance = () => setStep((s) => s + 1);

  return (
    <div className="relative overflow-hidden text-xs">
      <div
        role="button"
        tabIndex={0}
        aria-label="切换漫画文字配色与描边"
        onClick={advance}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            advance();
          }
        }}
        className="relative h-[156px] cursor-pointer select-none overflow-hidden rounded-xl border"
        style={{ backgroundColor: theme.surface }}
      >
        <svg className="absolute inset-0 h-full w-full text-foreground opacity-[0.16]" aria-hidden="true">
          <defs>
            <pattern id="mu2-halftone" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.7" fill="currentColor" />
              <circle cx="7.5" cy="7" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mu2-halftone)" />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <span
            className="font-black italic"
            style={{
              fontSize: 42,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: theme.fill,
              WebkitTextStroke: `${theme.width}px ${theme.stroke}`,
              textShadow: `4px 4px 0 ${theme.shadow}, 8px 8px 0 ${theme.ghost}, 0 0 1px ${theme.stroke}`,
              transform: "rotate(-7deg) skewX(-6deg)",
              paintOrder: "stroke fill",
            }}
          >
            COMIC!
          </span>
        </div>

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between font-mono text-[9px]">
          <span className="rounded border bg-card/85 px-1.5 py-0.5 text-muted-foreground">
            描边 {theme.width}px
          </span>
          <span className="rounded border bg-card/85 px-1.5 py-0.5 text-muted-foreground">
            点击切换配色 / 描边
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 4. magicui-cool-mode-demo                                                 */
/* ========================================================================= */

type Mu2BurstParticle = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  spin: number;
  size: number;
  emoji: string;
  color: string;
};

const MU2_COOL_EMOJIS: string[] = ["✨", "⭐", "💫", "🔥", "💥", "🎉", "⚡", "🫧"];
const MU2_COOL_COLORS: string[] = ["#f472b6", "#38bdf8", "#facc15", "#a3e635", "#c084fc"];

function MuCoolModeDemo() {
  const [particles, setParticles] = React.useState<Mu2BurstParticle[]>([]);
  const [clicks, setClicks] = React.useState(0);
  const idRef = React.useRef(0);

  /* Randomness only ever happens inside this event callback. */
  const spawn = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const batch: Mu2BurstParticle[] = Array.from({ length: 7 }, () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.7;
      const speed = 30 + Math.random() * 40;
      return {
        id: idRef.current++,
        x,
        y,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        spin: (Math.random() - 0.5) * 150,
        size: 10 + Math.round(Math.random() * 5),
        emoji: MU2_COOL_EMOJIS[Math.floor(Math.random() * MU2_COOL_EMOJIS.length)],
        color: MU2_COOL_COLORS[Math.floor(Math.random() * MU2_COOL_COLORS.length)],
      };
    });

    setClicks((c) => c + 1);
    setParticles((prev) => [...prev, ...batch].slice(-30));
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div
        onClick={spawn}
        className="relative h-[156px] cursor-crosshair select-none overflow-hidden rounded-xl border bg-gradient-to-br from-primary/10 via-muted/30 to-transparent"
      >
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <MousePointerClick className="mx-auto h-5 w-5 text-primary" />
            <p className="mt-1 font-mono text-[10px] text-muted-foreground">
              点击任意位置 → cool mode
            </p>
            <p className="mt-0.5 font-mono text-[9px] text-muted-foreground/70">
              {clicks} bursts · {particles.length} particles alive
            </p>
          </div>
        </div>

        <span className="pointer-events-none absolute bottom-2 right-2 rounded border bg-card/80 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
          x / y from event rect
        </span>

        {particles.map((p) => (
          <span
            key={p.id}
            className="pointer-events-none absolute block"
            style={{ left: p.x, top: p.y, marginLeft: -8, marginTop: -8 }}
          >
            <motion.span
              className="block"
              style={{ fontSize: p.size, lineHeight: 1, filter: `drop-shadow(0 0 6px ${p.color})` }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.2, rotate: 0 }}
              animate={{
                x: p.dx,
                y: p.dy,
                opacity: [0, 1, 1, 0],
                scale: [0.2, 1.3, 0.95, 0.65],
                rotate: p.spin,
              }}
              transition={{ duration: 0.95, ease: "easeOut", times: [0, 0.25, 0.7, 1] }}
              onAnimationComplete={() =>
                setParticles((prev) => prev.filter((item) => item.id !== p.id))
              }
            >
              {p.emoji}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. magicui-dia-text-reveal-demo                                           */
/* ========================================================================= */

function MuDiaTextRevealDemo() {
  const [run, setRun] = React.useState(0);
  const [dir, setDir] = React.useState<"fwd" | "rev">("fwd");

  const sweepMask =
    "linear-gradient(105deg, transparent 34%, #000 48%, #000 52%, transparent 66%)";
  const sweepName = dir === "fwd" ? "mu2-sweep-fwd" : "mu2-sweep-rev";
  const bandName = dir === "fwd" ? "mu2-band-fwd" : "mu2-band-rev";

  return (
    <div className="relative overflow-hidden text-xs">
      <Mu2Css />
      <div className="relative h-[156px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono text-2xl font-black tracking-[0.18em] text-white/10">
            DIA REVEAL
          </span>
        </div>

        <div key={`sweep-${run}-${dir}`} className="absolute inset-0 grid place-items-center">
          <span
            className="font-mono text-2xl font-black tracking-[0.18em]"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #38bdf8 0%, #a78bfa 38%, #f472b6 68%, #facc15 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitMaskImage: sweepMask,
              maskImage: sweepMask,
              WebkitMaskSize: "260% 100%",
              maskSize: "260% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              animationName: sweepName,
              animationDuration: "1.9s",
              animationTimingFunction: "ease-in-out",
              animationFillMode: "forwards",
            }}
          >
            DIA REVEAL
          </span>
        </div>

        <div key={`settled-${run}-${dir}`} className="absolute inset-0 grid place-items-center">
          <span
            className="font-mono text-2xl font-black tracking-[0.18em]"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #38bdf8 0%, #a78bfa 38%, #f472b6 68%, #facc15 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              animationName: "mu2-reveal-in",
              animationDuration: "1.9s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
            }}
          >
            DIA REVEAL
          </span>
        </div>

        <div
          key={`band-${run}-${dir}`}
          className="pointer-events-none absolute bottom-0 top-0 w-[52px]"
          style={{
            transform: "skewX(-18deg)",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            filter: "blur(5px)",
            animationName: bandName,
            animationDuration: "1.9s",
            animationTimingFunction: "ease-in-out",
            animationFillMode: "forwards",
          }}
        />

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between">
          <Button
            size="xs"
            variant="outline"
            className="gap-1 border-neutral-700 bg-neutral-900 font-mono text-neutral-300 hover:bg-neutral-800 hover:text-white"
            onClick={() => setRun((r) => r + 1)}
          >
            <RotateCcw className="h-3 w-3" />
            重播
          </Button>
          <div className="flex items-center gap-1">
            <ArrowLeftRight className="h-3 w-3 text-neutral-500" />
            {(["fwd", "rev"] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => {
                  setDir(d);
                  setRun((r) => r + 1);
                }}
                className={cn(
                  "rounded-md border px-1.5 py-0.5 font-mono text-[9px] transition-colors",
                  dir === d
                    ? "border-sky-400/50 bg-sky-400/15 text-sky-300"
                    : "border-neutral-700 text-neutral-400 hover:text-neutral-200",
                )}
              >
                {d === "fwd" ? "↘ 正向" : "↙ 反向"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. magicui-dot-pattern-demo                                               */
/* ========================================================================= */

function MuDotPatternDemo() {
  const [gap, setGap] = React.useState(14);
  const [radius, setRadius] = React.useState(56);
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 108, y: 62 });
  const [inside, setInside] = React.useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setInside(true);
  };

  const dotLayer = (color: string): React.CSSProperties => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1.6px)`,
    backgroundSize: `${gap}px ${gap}px`,
  });

  const mask = `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, #000 0%, rgba(0,0,0,0.4) 55%, transparent 100%)`;

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[156px] gap-2">
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => {
            setInside(false);
            setPos({ x: 108, y: 62 });
          }}
          className="relative flex-1 cursor-crosshair overflow-hidden rounded-xl border bg-card"
        >
          <div className="absolute inset-0" style={dotLayer("rgba(115,115,135,0.5)")} />
          <div
            className="absolute inset-0"
            style={{
              ...dotLayer("rgba(56,189,248,0.95)"),
              WebkitMaskImage: mask,
              maskImage: mask,
            }}
          />
          <div
            className="pointer-events-none absolute rounded-full border border-sky-400/40"
            style={{
              left: pos.x - radius,
              top: pos.y - radius,
              width: radius * 2,
              height: radius * 2,
            }}
          />
          <span className="absolute left-2 top-2 rounded border bg-card/85 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
            {inside ? "spotlight follows cursor" : "move your cursor"}
          </span>
        </div>

        <div className="w-[102px] shrink-0 space-y-3 rounded-xl border bg-muted/30 p-2">
          <label className="block">
            <span className="flex items-center justify-between text-[9px] text-muted-foreground">
              <span>点间距</span>
              <span className="font-mono text-foreground">{gap}px</span>
            </span>
            <input
              type="range"
              min={8}
              max={24}
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              className="mt-1 w-full accent-primary"
            />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-[9px] text-muted-foreground">
              <span>光斑半径</span>
              <span className="font-mono text-foreground">{radius}px</span>
            </span>
            <input
              type="range"
              min={24}
              max={92}
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="mt-1 w-full accent-primary"
            />
          </label>
          <p className="font-mono text-[9px] leading-tight text-muted-foreground/80">
            radial-gradient
            <br />
            + mask-image
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 7. magicui-dotted-map-demo                                                */
/* ========================================================================= */

type Mu2MapBand = { row: number; from: number; to: number };

const MU2_MAP_COLS = 48;
const MU2_MAP_ROWS = 15;

const MU2_MAP_BANDS: Mu2MapBand[] = [
  { row: 0, from: 16, to: 20 },
  { row: 1, from: 4, to: 13 },
  { row: 1, from: 17, to: 21 },
  { row: 2, from: 2, to: 14 },
  { row: 2, from: 24, to: 29 },
  { row: 2, from: 30, to: 43 },
  { row: 3, from: 2, to: 13 },
  { row: 3, from: 23, to: 30 },
  { row: 3, from: 31, to: 44 },
  { row: 4, from: 3, to: 12 },
  { row: 4, from: 23, to: 31 },
  { row: 4, from: 32, to: 45 },
  { row: 5, from: 5, to: 11 },
  { row: 5, from: 24, to: 30 },
  { row: 5, from: 33, to: 45 },
  { row: 6, from: 7, to: 11 },
  { row: 6, from: 23, to: 31 },
  { row: 6, from: 34, to: 44 },
  { row: 7, from: 9, to: 12 },
  { row: 7, from: 13, to: 17 },
  { row: 7, from: 23, to: 32 },
  { row: 7, from: 36, to: 42 },
  { row: 8, from: 13, to: 18 },
  { row: 8, from: 24, to: 32 },
  { row: 8, from: 38, to: 41 },
  { row: 9, from: 13, to: 19 },
  { row: 9, from: 25, to: 31 },
  { row: 10, from: 13, to: 19 },
  { row: 10, from: 26, to: 31 },
  { row: 11, from: 14, to: 18 },
  { row: 11, from: 26, to: 29 },
  { row: 11, from: 39, to: 44 },
  { row: 12, from: 14, to: 17 },
  { row: 12, from: 27, to: 28 },
  { row: 12, from: 38, to: 45 },
  { row: 13, from: 15, to: 16 },
  { row: 13, from: 39, to: 44 },
];

const MU2_MAP_CELLS: Array<{ row: number; col: number }> = (() => {
  const seen = new Set<string>();
  const cells: Array<{ row: number; col: number }> = [];
  for (const band of MU2_MAP_BANDS) {
    for (let col = band.from; col <= band.to; col++) {
      if ((band.row * 7 + col * 13) % 23 === 0) continue;
      const key = `${band.row}:${col}`;
      if (seen.has(key)) continue;
      seen.add(key);
      cells.push({ row: band.row, col });
    }
  }
  return cells;
})();

type Mu2Route = {
  id: string;
  from: string;
  to: string;
  a: [number, number];
  b: [number, number];
  c: [number, number];
};

/* viewBox space: x 0..100, y 0..60 */
const MU2_ROUTES: Mu2Route[] = [
  { id: "pacific", from: "SFO", to: "TYO", a: [12.5, 16], b: [85.4, 16], c: [49, -10] },
  { id: "atlantic", from: "AMS", to: "GRU", a: [52.1, 12], b: [33.3, 36], c: [34, 6] },
  { id: "indian", from: "SYD", to: "BOM", a: [85.4, 48], b: [70.8, 24], c: [90, 20] },
];

function mu2QuadPoint(
  a: [number, number],
  c: [number, number],
  b: [number, number],
  t: number,
): [number, number] {
  const mt = 1 - t;
  return [
    mt * mt * a[0] + 2 * mt * t * c[0] + t * t * b[0],
    mt * mt * a[1] + 2 * mt * t * c[1] + t * t * b[1],
  ];
}

const MU2_ROUTE_STEPS: number[] = [0, 0.25, 0.5, 0.75, 1];

type Mu2RouteGeom = Mu2Route & { path: string; xs: string[]; ys: string[] };

const MU2_ROUTE_GEOM: Mu2RouteGeom[] = MU2_ROUTES.map((route) => {
  const points = MU2_ROUTE_STEPS.map((t) => mu2QuadPoint(route.a, route.c, route.b, t));
  return {
    ...route,
    path: `M${route.a[0]},${route.a[1]} Q${route.c[0]},${route.c[1]} ${route.b[0]},${route.b[1]}`,
    xs: points.map((p) => `${p[0].toFixed(2)}%`),
    ys: points.map((p) => `${((p[1] / 60) * 100).toFixed(2)}%`),
  };
});

function MuDottedMapDemo() {
  const [routeIndex, setRouteIndex] = React.useState(0);
  const route = MU2_ROUTE_GEOM[routeIndex % MU2_ROUTE_GEOM.length];

  const markerTop = (p: [number, number]) => `${((p[1] / 60) * 100).toFixed(2)}%`;

  return (
    <div className="relative overflow-hidden text-xs">
      <Mu2Css />
      <div className="relative h-[156px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-2">
        <div className="relative h-[104px] w-full">
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${MU2_MAP_COLS}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${MU2_MAP_ROWS}, minmax(0, 1fr))`,
            }}
          >
            {MU2_MAP_CELLS.map((cell) => (
              <span
                key={`${cell.row}-${cell.col}`}
                className="mu2-map-dot"
                style={{
                  gridColumn: cell.col + 1,
                  gridRow: cell.row + 1,
                  opacity: 0.3 + ((cell.row * 3 + cell.col * 5) % 5) * 0.13,
                }}
              />
            ))}
          </div>

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={route.path}
              fill="none"
              stroke="rgba(125,211,252,0.6)"
              strokeWidth={1}
              strokeDasharray="2 2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {[route.a, route.b].map((point, i) => (
            <span
              key={i}
              className="absolute block h-2 w-2"
              style={{ left: `${point[0]}%`, top: markerTop(point), marginLeft: -4, marginTop: -4 }}
            >
              {i === 0 ? (
                <span
                  className="absolute inset-0 rounded-full bg-sky-400"
                  style={{
                    animationName: "mu2-ping-ring",
                    animationDuration: "2.4s",
                    animationTimingFunction: "ease-out",
                    animationIterationCount: "infinite",
                  }}
                />
              ) : (
                <>
                  <span className="absolute -inset-[5px] rounded-full border border-sky-400/40" />
                  <span className="absolute -inset-[2px] rounded-full border border-sky-400/80" />
                </>
              )}
              <span className="relative block h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_8px_2px_rgba(56,189,248,0.7)]" />
            </span>
          ))}

          <motion.span
            key={route.id}
            className="absolute z-10 block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_3px_rgba(56,189,248,0.85)]"
            style={{ left: route.xs[0], top: route.ys[0], marginLeft: -3, marginTop: -3 }}
            animate={{ left: route.xs, top: route.ys, scale: [0.9, 1.5, 1.1, 1.5, 0.9] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              times: MU2_ROUTE_STEPS,
            }}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded border border-neutral-700 bg-neutral-900/80 px-1.5 py-0.5 font-mono text-[9px] text-neutral-300">
            <MapPin className="h-2.5 w-2.5 text-sky-400" />
            {route.from} → {route.to}
          </span>
          <button
            type="button"
            onClick={() => setRouteIndex((i) => i + 1)}
            className="inline-flex items-center gap-1 rounded-md border border-neutral-700 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400 transition-colors hover:text-sky-300"
          >
            <Route className="h-2.5 w-2.5" />
            换路线
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 8. magicui-file-tree-demo                                                 */
/* ========================================================================= */

type Mu2TreeNode = {
  id: string;
  name: string;
  kind: "folder" | "file";
  children?: Mu2TreeNode[];
};

const MU2_INITIAL_TREE: Mu2TreeNode[] = [
  {
    id: "src",
    name: "src",
    kind: "folder",
    children: [
      {
        id: "src/app",
        name: "app",
        kind: "folder",
        children: [
          { id: "src/app/page.tsx", name: "page.tsx", kind: "file" },
          { id: "src/app/layout.tsx", name: "layout.tsx", kind: "file" },
        ],
      },
      {
        id: "src/components",
        name: "components",
        kind: "folder",
        children: [{ id: "src/components/button.tsx", name: "button.tsx", kind: "file" }],
      },
      { id: "src/index.ts", name: "index.ts", kind: "file" },
    ],
  },
  { id: "package.json", name: "package.json", kind: "file" },
  { id: "README.md", name: "README.md", kind: "file" },
];

function mu2RemoveNode(nodes: Mu2TreeNode[], id: string): Mu2TreeNode[] {
  return nodes
    .filter((node) => node.id !== id)
    .map((node) => (node.children ? { ...node, children: mu2RemoveNode(node.children, id) } : node));
}

function mu2AddChild(nodes: Mu2TreeNode[], parentId: string, child: Mu2TreeNode): Mu2TreeNode[] {
  return nodes.map((node) => {
    if (node.id === parentId) {
      return { ...node, children: [...(node.children ?? []), child] };
    }
    if (node.children) {
      return { ...node, children: mu2AddChild(node.children, parentId, child) };
    }
    return node;
  });
}

function mu2CollectFolders(nodes: Mu2TreeNode[], acc: string[]): string[] {
  for (const node of nodes) {
    if (node.kind === "folder") {
      acc.push(node.id);
      if (node.children) mu2CollectFolders(node.children, acc);
    }
  }
  return acc;
}

function mu2CountFiles(nodes: Mu2TreeNode[]): number {
  let total = 0;
  for (const node of nodes) {
    if (node.kind === "file") total += 1;
    if (node.children) total += mu2CountFiles(node.children);
  }
  return total;
}

type Mu2TreeRow = { node: Mu2TreeNode; depth: number };

function mu2Flatten(
  nodes: Mu2TreeNode[],
  expanded: Record<string, boolean>,
  depth: number,
  acc: Mu2TreeRow[],
): Mu2TreeRow[] {
  for (const node of nodes) {
    acc.push({ node, depth });
    if (node.kind === "folder" && expanded[node.id] && node.children) {
      mu2Flatten(node.children, expanded, depth + 1, acc);
    }
  }
  return acc;
}

function MuFileTreeDemo() {
  const [tree, setTree] = React.useState<Mu2TreeNode[]>(MU2_INITIAL_TREE);
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({
    src: true,
    "src/app": true,
  });
  const [selected, setSelected] = React.useState<string>("src/app/page.tsx");
  const newIdRef = React.useRef(1);

  const rows = mu2Flatten(tree, expanded, 0, []);
  const fileCount = mu2CountFiles(tree);
  const allFolders = mu2CollectFolders(tree, []);
  const allOpen = allFolders.every((id) => expanded[id]);

  const addFile = (parentId: string) => {
    const n = newIdRef.current;
    newIdRef.current += 1;
    const id = `mu2-new-${n}`;
    setTree((prev) => mu2AddChild(prev, parentId, { id, name: `new-file-${n}.tsx`, kind: "file" }));
    setExpanded((prev) => ({ ...prev, [parentId]: true }));
    setSelected(id);
  };

  const removeNode = (id: string) => {
    setTree((prev) => mu2RemoveNode(prev, id));
    if (selected === id) setSelected("");
  };

  const toggleAll = () => {
    if (allOpen) {
      setExpanded({});
    } else {
      const next: Record<string, boolean> = {};
      for (const id of allFolders) next[id] = true;
      setExpanded(next);
    }
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[160px] flex-col rounded-xl border bg-card p-2">
        <div className="mb-1 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
            explorer · {fileCount} files
          </span>
          <button
            type="button"
            onClick={toggleAll}
            className="rounded border px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {allOpen ? "全部收起" : "全部展开"}
          </button>
        </div>

        <div className="flex-1 overflow-auto pr-0.5">
          {rows.map(({ node, depth }) => {
            const isFolder = node.kind === "folder";
            const open = Boolean(expanded[node.id]);
            const isSelected = selected === node.id;
            return (
              <div
                key={node.id}
                onClick={() => {
                  setSelected(node.id);
                  if (isFolder) setExpanded((prev) => ({ ...prev, [node.id]: !prev[node.id] }));
                }}
                className={cn(
                  "group flex cursor-pointer items-center gap-1 rounded-md py-[2px] pr-1 font-mono text-[10px]",
                  isSelected
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted/60",
                )}
                style={{ paddingLeft: 4 + depth * 12 }}
              >
                {isFolder ? (
                  <ChevronRight
                    className={cn(
                      "h-3 w-3 shrink-0 transition-transform duration-150",
                      open && "rotate-90",
                    )}
                  />
                ) : (
                  <span className="w-3 shrink-0" />
                )}
                {isFolder ? (
                  open ? (
                    <FolderOpen className="h-3 w-3 shrink-0 text-amber-500" />
                  ) : (
                    <Folder className="h-3 w-3 shrink-0 text-amber-500" />
                  )
                ) : (
                  <FileCode className="h-3 w-3 shrink-0 text-sky-500" />
                )}
                <span className="truncate">{node.name}</span>

                <span className="ml-auto flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover:opacity-100">
                  {isFolder && (
                    <button
                      type="button"
                      aria-label="新建文件"
                      onClick={(e) => {
                        e.stopPropagation();
                        addFile(node.id);
                      }}
                      className="grid h-3.5 w-3.5 place-items-center rounded border text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      <Plus className="h-2.5 w-2.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    aria-label="删除"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeNode(node.id);
                    }}
                    className="grid h-3.5 w-3.5 place-items-center rounded border text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash className="h-2.5 w-2.5" />
                  </button>
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-1 truncate border-t pt-1 font-mono text-[9px] text-muted-foreground">
          selected: <span className="text-primary">{selected || "—"}</span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 9. magicui-flickering-grid-demo                                           */
/* ========================================================================= */

const MU2_GRID_GAP = 2;

const MU2_FLICKER_DELAYS: number[] = [
  0, 0.7, 1.9, 0.3, 2.4, 1.1, 3.2, 0.5, 2.8, 1.6, 0.2, 2.1, 3.4, 0.9, 1.4, 2.6, 0.4, 1.8, 3.0,
  0.6, 2.3, 1.2, 3.6, 0.8, 1.7, 2.9, 0.1, 2.2, 3.3, 1.0, 1.5, 2.5, 0.7, 3.1, 1.3, 2.0, 0.9, 2.7,
  3.5, 0.3,
];

function MuFlickeringGridDemo() {
  const [size, setSize] = React.useState(14);
  const [speed, setSpeed] = React.useState(2.4);
  const [hover, setHover] = React.useState<{ row: number; col: number } | null>(null);
  const [box, setBox] = React.useState<{ w: number; h: number }>({ w: 320, h: 104 });
  const boxRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const update = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const pitch = size + MU2_GRID_GAP;
  const cols = Math.max(1, Math.ceil((box.w + MU2_GRID_GAP) / pitch));
  const rows = Math.max(1, Math.ceil((box.h + MU2_GRID_GAP) / pitch));
  const cells = React.useMemo(() => {
    const list: Array<{ row: number; col: number }> = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        list.push({ row, col });
      }
    }
    return list;
  }, [cols, rows]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / pitch);
    const row = Math.floor((e.clientY - rect.top) / pitch);
    if (col < 0 || row < 0 || col >= cols || row >= rows) {
      setHover(null);
      return;
    }
    setHover((prev) => (prev && prev.row === row && prev.col === col ? prev : { row, col }));
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <Mu2Css />
      <div className="flex h-[156px] gap-2">
        <div
          ref={boxRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setHover(null)}
          className="relative flex-1 overflow-hidden rounded-xl border bg-muted/20"
        >
          <div
            className="absolute inset-0 grid content-start"
            style={{
              gridTemplateColumns: `repeat(${cols}, ${size}px)`,
              gridAutoRows: `${size}px`,
              gap: MU2_GRID_GAP,
            }}
          >
            {cells.map(({ row, col }) => {
              const index = row * cols + col;
              const active = (row * 5 + col * 3) % 3 !== 0;
              return (
                <span
                  key={index}
                  className={cn(
                    "block rounded-[2px]",
                    active ? "mu2-flicker-cell bg-primary/70" : "bg-primary/70",
                    hover && hover.row === row && hover.col === col && "bg-primary",
                  )}
                  style={
                    active
                      ? {
                          animationDuration: `${speed}s`,
                          animationDelay: `${MU2_FLICKER_DELAYS[index % MU2_FLICKER_DELAYS.length]}s`,
                        }
                      : { opacity: 0.08 }
                  }
                />
              );
            })}
          </div>

          {hover && (
            <>
              <div
                className="pointer-events-none absolute left-0 right-0 bg-primary/15"
                style={{ top: hover.row * pitch, height: size }}
              />
              <div
                className="pointer-events-none absolute bottom-0 top-0 bg-primary/15"
                style={{ left: hover.col * pitch, width: size }}
              />
            </>
          )}

          <span className="pointer-events-none absolute bottom-1.5 right-1.5 rounded border bg-card/85 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
            {hover ? `row ${hover.row} · col ${hover.col}` : `${cells.length} cells`}
          </span>
        </div>

        <div className="w-[100px] shrink-0 space-y-3 rounded-xl border bg-muted/30 p-2">
          <label className="block">
            <span className="flex items-center justify-between text-[9px] text-muted-foreground">
              <span>格子</span>
              <span className="font-mono text-foreground">{size}px</span>
            </span>
            <input
              type="range"
              min={10}
              max={22}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-1 w-full accent-primary"
            />
          </label>
          <label className="block">
            <span className="flex items-center justify-between text-[9px] text-muted-foreground">
              <span>闪烁</span>
              <span className="font-mono text-foreground">{speed.toFixed(1)}s</span>
            </span>
            <input
              type="range"
              min={12}
              max={40}
              value={Math.round(speed * 10)}
              onChange={(e) => setSpeed(Number(e.target.value) / 10)}
              className="mt-1 w-full accent-primary"
            />
          </label>
          <p className="font-mono text-[9px] leading-tight text-muted-foreground/80">
            deterministic
            <br />
            delay array
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 10. magicui-floating-3d-particles-demo                                    */
/* ========================================================================= */

const MU2_DOT_SPOTS: Array<[number, number]> = [
  [12, 24],
  [28, 70],
  [44, 16],
  [58, 54],
  [72, 30],
  [86, 74],
  [20, 46],
  [66, 86],
  [38, 88],
  [52, 38],
  [80, 16],
  [8, 62],
];

const MU2_DOT_HUES: string[] = ["#38bdf8", "#a78bfa", "#f472b6", "#facc15", "#34d399"];

const MU2_LAYER_DEPTHS: number[] = [-150, -105, -60, -15, 30, 75, 120];

function MuFloating3DParticlesDemo() {
  const [layerCount, setLayerCount] = React.useState(4);
  const [tilt, setTilt] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const clampLayers = (n: number) => Math.min(MU2_LAYER_DEPTHS.length, Math.max(2, n));

  return (
    <div className="relative overflow-hidden text-xs">
      <Mu2Css />
      <div
        onClick={() => setLayerCount((n) => (n >= MU2_LAYER_DEPTHS.length ? 2 : n + 1))}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        className="relative h-[156px] cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900"
        style={{ perspective: "640px" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${(-tilt.y * 14).toFixed(2)}deg) rotateY(${(tilt.x * 18).toFixed(2)}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {MU2_LAYER_DEPTHS.slice(0, layerCount).map((depth, i) => (
            <div
              key={depth}
              className="absolute inset-0"
              style={{ transform: `translateZ(${depth}px)`, transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  animationName: "mu2-float3d",
                  animationDuration: `${5 + i * 0.7}s`,
                  animationTimingFunction: "ease-in-out",
                  animationDelay: `${i * 0.35}s`,
                  animationIterationCount: "infinite",
                  animationDirection: "alternate",
                }}
              >
                {MU2_DOT_SPOTS.slice(i, i + 6).map((spot, j) => {
                  const dotSize = 2 + ((i + j) % 3);
                  return (
                    <span
                      key={`${i}-${j}`}
                      className="absolute rounded-full"
                      style={{
                        left: `${spot[0]}%`,
                        top: `${spot[1]}%`,
                        width: dotSize,
                        height: dotSize,
                        backgroundColor: MU2_DOT_HUES[(i + j) % MU2_DOT_HUES.length],
                        boxShadow: `0 0 ${4 + dotSize * 2}px ${MU2_DOT_HUES[(i + j) % MU2_DOT_HUES.length]}`,
                        opacity: 0.35 + i * 0.09,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <span className="pointer-events-none absolute left-2 top-2 inline-flex items-center gap-1 rounded border border-neutral-700 bg-neutral-900/80 px-1.5 py-0.5 font-mono text-[9px] text-neutral-300">
          <Layers className="h-2.5 w-2.5 text-sky-400" />
          {layerCount} layers
        </span>

        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between">
          <span className="pointer-events-none font-mono text-[9px] text-neutral-500">
            点击容器增减层 · 移动鼠标视差
          </span>
          <span className="flex items-center gap-1">
            <button
              type="button"
              aria-label="减少粒子层"
              onClick={(e) => {
                e.stopPropagation();
                setLayerCount((n) => clampLayers(n - 1));
              }}
              className="grid h-4 w-4 place-items-center rounded border border-neutral-700 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <Minus className="h-2.5 w-2.5" />
            </button>
            <button
              type="button"
              aria-label="增加粒子层"
              onClick={(e) => {
                e.stopPropagation();
                setLayerCount((n) => clampLayers(n + 1));
              }}
              className="grid h-4 w-4 place-items-center rounded border border-neutral-700 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <Plus className="h-2.5 w-2.5" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* Export contract                                                           */
/* ========================================================================= */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-blur-fade-demo": MuBlurFadeDemo,
  "magicui-code-comparison-demo": MuCodeComparisonDemo,
  "magicui-comic-text-demo": MuComicTextDemo,
  "magicui-cool-mode-demo": MuCoolModeDemo,
  "magicui-dia-text-reveal-demo": MuDiaTextRevealDemo,
  "magicui-dot-pattern-demo": MuDotPatternDemo,
  "magicui-dotted-map-demo": MuDottedMapDemo,
  "magicui-file-tree-demo": MuFileTreeDemo,
  "magicui-flickering-grid-demo": MuFlickeringGridDemo,
  "magicui-floating-3d-particles-demo": MuFloating3DParticlesDemo,
};
