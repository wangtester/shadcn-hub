"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import type { MotionValue } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Check,
  Code2,
  CornerDownLeft,
  FileText,
  Home,
  Lock,
  Play,
  Settings,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------------- */
/* 1. magicui-safari-demo — CSS 画出的 Safari 窗口，可切换标签页                */
/* ------------------------------------------------------------------------- */

type MuSafariTab = {
  id: string;
  label: string;
  path: string;
  accent: string;
  icon: React.ReactNode;
};

const MU_SAFARI_TABS: MuSafariTab[] = [
  {
    id: "home",
    label: "Home",
    path: "magicui.design",
    accent: "from-sky-500/20 to-indigo-500/5",
    icon: <Home className="h-2.5 w-2.5 text-sky-500" />,
  },
  {
    id: "docs",
    label: "Docs",
    path: "magicui.design/docs/components",
    accent: "from-violet-500/20 to-fuchsia-500/5",
    icon: <FileText className="h-2.5 w-2.5 text-violet-500" />,
  },
  {
    id: "settings",
    label: "Settings",
    path: "magicui.design/account/preferences",
    accent: "from-emerald-500/20 to-teal-500/5",
    icon: <Settings className="h-2.5 w-2.5 text-emerald-500" />,
  },
];

function MuSafariDemo() {
  const [active, setActive] = React.useState<string>("home");
  const tab = MU_SAFARI_TABS.find((t) => t.id === active) ?? MU_SAFARI_TABS[0];

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="rounded-xl border bg-muted/30 shadow-xs overflow-hidden h-[164px] flex flex-col">
        {/* traffic lights + address bar */}
        <div className="flex items-center gap-2 border-b bg-card/80 px-2.5 py-1.5">
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <div className="mx-auto flex h-6 w-[70%] items-center gap-1.5 rounded-md border bg-background px-2">
            <Lock className="h-3 w-3 shrink-0 text-emerald-500" />
            <span className="truncate font-mono text-[10px] text-muted-foreground">{tab.path}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground shrink-0">
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>

        {/* tabs */}
        <div className="flex items-end gap-1 border-b bg-muted/50 px-2 pt-1.5">
          {MU_SAFARI_TABS.map((t) => {
            const isAct = t.id === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={`flex items-center gap-1.5 rounded-t-md border border-b-0 px-2 py-1 text-[10px] transition-colors ${
                  isAct ? "bg-card text-foreground" : "bg-transparent text-muted-foreground hover:bg-card/60"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            );
          })}
        </div>

        {/* page */}
        <div className={`flex-1 overflow-hidden bg-gradient-to-br ${tab.accent} bg-card p-2`}>
          {active === "home" && (
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 rounded-full border bg-background/80 px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground">
                  <Sparkles className="h-2.5 w-2.5 text-primary" /> 78 animated components
                </span>
                <p className="text-[13px] font-semibold leading-tight text-foreground">
                  Beautiful UI you can copy & paste.
                </p>
                <p className="text-[10px] text-muted-foreground">Built on React, Tailwind and Motion.</p>
              </div>
              <div className="flex gap-1.5">
                {["Marquee", "Dock", "Bento", "Terminal"].map((c) => (
                  <span key={c} className="rounded-md border bg-card/90 px-1.5 py-0.5 text-[9px] shadow-xs">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {active === "docs" && (
            <div className="flex h-full gap-2">
              <div className="w-20 shrink-0 space-y-1 rounded-lg border bg-card/90 p-1.5">
                {["Install", "Dock", "Marquee", "Shimmer"].map((s, i) => (
                  <div
                    key={s}
                    className={`truncate rounded px-1 py-0.5 text-[9px] ${
                      i === 2 ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="min-w-0 flex-1 rounded-lg border bg-neutral-950 p-2 font-mono text-[9px] leading-relaxed text-neutral-300">
                <div className="text-emerald-400">$ pnpm dlx shadcn@latest add marquee</div>
                <div className="text-neutral-500">{"// registry item resolved"}</div>
                <div>
                  <span className="text-sky-400">export</span> const Marquee = () =&gt;
                </div>
                <div className="pl-3">
                  <span className="text-fuchsia-400">&quot;use client&quot;</span>;
                </div>
              </div>
            </div>
          )}

          {active === "settings" && (
            <div className="h-full space-y-1 overflow-hidden rounded-lg border bg-card/90 p-1.5">
              {[
                { label: "Reduce motion", on: false },
                { label: "Dark appearance", on: false },
                { label: "Autoplay previews", on: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between rounded-md px-1 py-1 text-[10px]">
                  <span className="text-foreground">{row.label}</span>
                  <span
                    className={`flex h-3.5 w-6 items-center rounded-full p-0.5 ${
                      row.on ? "justify-end bg-emerald-500" : "justify-start bg-muted"
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-background shadow-xs" />
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1 px-1 pt-0.5 text-[9px] text-muted-foreground">
                <Check className="h-2.5 w-2.5 text-emerald-500" /> Synced with iCloud keychain
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 2. magicui-scroll-based-velocity-demo — 鼠标/滑块驱动速度，行间反向          */
/* ------------------------------------------------------------------------- */

const MU_SBV_ROWS: { text: string; base: number; size: string; tone: string }[] = [
  { text: "SCROLL BASED VELOCITY", base: 0.6, size: "text-[15px]", tone: "text-foreground" },
  { text: "MOVE THE POINTER · CHANGE THE PACE", base: 0.95, size: "text-[11px]", tone: "text-muted-foreground" },
  { text: "FASTER FASTER FASTER", base: 0.42, size: "text-[19px]", tone: "text-primary" },
];

function MuScrollBasedVelocityDemo() {
  const [power, setPower] = React.useState<number>(46);
  const velocity = useMotionValue<number>(power);

  React.useEffect(() => {
    velocity.set(power);
  }, [power, velocity]);

  return (
    <div className="relative overflow-hidden text-xs">
      <div
        className="relative flex h-[150px] flex-col justify-center gap-1.5 rounded-xl border bg-muted/20 py-2 select-none"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          velocity.set(((e.clientX - rect.left) / rect.width) * 100);
        }}
        onPointerLeave={() => velocity.set(power)}
      >
        {/* edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-card to-transparent" />

        {MU_SBV_ROWS.map((row, i) => (
          <MuVelocityRow key={row.text} row={row} index={i} velocity={velocity} />
        ))}

        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t bg-card/70 px-2 py-1 backdrop-blur-sm">
          <span className="font-mono text-[9px] text-muted-foreground">vel</span>
          <input
            type="range"
            min={0}
            max={100}
            value={power}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPower(Number(e.target.value))}
            className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
            aria-label="Scroll velocity"
          />
          <span className="w-8 text-right font-mono text-[9px] tabular-nums text-primary">{power}</span>
        </div>
      </div>
    </div>
  );
}

function MuVelocityRow({
  row,
  index,
  velocity,
}: {
  row: { text: string; base: number; size: string; tone: string };
  index: number;
  velocity: MotionValue<number>;
}) {
  const x = useMotionValue<number>(0);
  const offset = React.useRef<number>(index * -60);
  const dir = index % 2 === 0 ? 1 : -1;
  const span = `${row.text}  ·  `;

  useAnimationFrame(() => {
    const step = velocity.get() * row.base * 0.18 * dir;
    offset.current = (offset.current - step) % 220;
    if (offset.current > 0) offset.current -= 220;
    x.set(offset.current);
  });

  return (
    <motion.div style={{ x }} className="flex w-[260%] whitespace-nowrap will-change-transform">
      <span className={`${row.size} ${row.tone} font-semibold tracking-tight`}>{span.repeat(4)}</span>
      <span className={`${row.size} ${row.tone} font-semibold tracking-tight`}>{span.repeat(4)}</span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------------- */
/* 3. magicui-scroll-progress-demo — 顶部进度条 + 百分比 + 圆环切换             */
/* ------------------------------------------------------------------------- */

function MuScrollProgressDemo() {
  const [progress, setProgress] = React.useState<number>(0);
  const [ring, setRing] = React.useState<boolean>(false);
  const scroller = React.useRef<HTMLDivElement | null>(null);
  const radius = 15;
  const circumference = 2 * Math.PI * radius;

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="h-[168px] overflow-hidden rounded-xl border bg-card">
        <div className="relative flex items-center justify-between gap-2 border-b bg-muted/40 px-2 py-1.5">
          <span className="flex items-center gap-1 font-medium text-foreground">
            <FileText className="h-3 w-3 text-primary" /> release-notes.md
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {Math.round(progress)}%
            </span>
            {ring ? (
              <svg width="34" height="34" viewBox="0 0 36 36" className="shrink-0 -my-1">
                <circle cx="18" cy="18" r={radius} fill="none" strokeWidth="3" className="stroke-muted" />
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  stroke="url(#mu-sp-gradient)"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - progress / 100)}
                  transform="rotate(-90 18 18)"
                  style={{ transition: "stroke-dashoffset 220ms cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
                <defs>
                  <linearGradient id="mu-sp-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <button
                type="button"
                onClick={() => setRing(true)}
                className="rounded-md border bg-background px-1.5 py-0.5 text-[9px] text-muted-foreground hover:text-foreground"
              >
                ring
              </button>
            )}
            {ring && (
              <button
                type="button"
                onClick={() => setRing(false)}
                className="rounded-md border bg-background px-1.5 py-0.5 text-[9px] text-muted-foreground hover:text-foreground"
              >
                bar
              </button>
            )}
          </div>
          {!ring && (
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-muted">
              <span
                className="block h-full rounded-r-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                style={{
                  width: `${progress}%`,
                  transition: "width 260ms cubic-bezier(0.22, 1, 0.36, 1)",
                  boxShadow: "0 0 8px rgba(99,102,241,0.5)",
                }}
              />
            </span>
          )}
        </div>

        <div ref={scroller} onScroll={onScroll} className="h-[132px] overflow-y-auto px-2.5 py-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-primary">v4.2.0</p>
          <h4 className="mt-0.5 text-[13px] font-semibold text-foreground">Animated components refresh</h4>
          <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
            Every preview now runs a real mini implementation. Scroll this panel to drive the progress
            indicator, then flip it into a circular gauge with the ring button.
          </p>
          <ul className="mt-2 space-y-1.5">
            {[
              "Velocity marquee reacts to pointer speed",
              "Shimmer and shiny buttons animate on hover",
              "Cursor smoothing uses spring physics",
              "Striped pattern exposes angle + width controls",
            ].map((line) => (
              <li key={line} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                <Check className="mt-0.5 h-2.5 w-2.5 shrink-0 text-emerald-500" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
            semper — end of document.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 4. magicui-shimmer-button-demo — 持续扫过的微光条                          */
/* ------------------------------------------------------------------------- */

function MuShimmerButtonDemo() {
  const [clicks, setClicks] = React.useState<number>(0);
  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative flex h-[132px] flex-col items-center justify-center gap-3 rounded-xl border bg-muted/20">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(60% 60% at 50% 0%, rgba(99,102,241,0.18), transparent 70%)",
          }}
        />
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          className="group relative overflow-hidden rounded-lg bg-neutral-900 px-5 py-2 font-medium text-white shadow-lg ring-1 ring-white/15 transition-colors duration-300 hover:bg-neutral-800"
        >
          <span
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 -skew-x-12 blur-md"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), rgba(56,189,248,0.55), transparent)",
              animation: "mu-shimmer-sweep 2.1s linear infinite",
            }}
          />
          <span className="relative flex items-center gap-2 text-[13px]">
            <Sparkles className="h-3.5 w-3.5" />
            Shimmer Button
          </span>
        </button>
        <p className="relative text-[10px] text-muted-foreground">
          {clicks === 0 ? "A gradient slice sweeps across forever" : `Clicked ${clicks}× · hover brightens it`}
        </p>
      </div>
      <style>{`@keyframes mu-shimmer-sweep { 0% { transform: translateX(0) } 100% { transform: translateX(420%) } }`}</style>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 5. magicui-shiny-button-demo — 发光线框 + hover 颜色扫过填充               */
/* ------------------------------------------------------------------------- */

function MuShinyButtonDemo() {
  const [pressed, setPressed] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative flex h-[140px] flex-col items-center justify-center gap-3 rounded-xl border bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_100%,rgba(217,70,239,0.22),transparent_70%)]" />
        <button
          type="button"
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onPointerLeave={() => setPressed(false)}
          onClick={() => setCount((c) => c + 1)}
          className="group relative rounded-lg p-[1.2px] outline-none"
          style={{
            backgroundImage: "linear-gradient(115deg, rgba(168,85,247,0.9), rgba(236,72,153,0.9), rgba(56,189,248,0.9))",
            boxShadow: pressed ? "0 0 12px rgba(217,70,239,0.35)" : "0 0 22px rgba(168,85,247,0.45)",
            transition: "box-shadow 200ms ease, transform 120ms ease",
            transform: pressed ? "scale(0.965)" : "scale(1)",
          }}
        >
          <span className="relative flex overflow-hidden rounded-[7px] bg-neutral-950 px-5 py-2">
            <span
              className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-fuchsia-500/90 via-violet-500/90 to-sky-400/90 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span className="relative flex items-center gap-2 text-[13px] font-semibold text-white">
              <Zap className="h-3.5 w-3.5" />
              Pro Upgrade
            </span>
          </span>
        </button>
        <p className="relative text-[10px] text-neutral-400">
          {pressed ? "Pressing…" : count > 0 ? `Upgraded ${count}× — glow glides in on hover` : "Hover for the sweep, press for depth"}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 6. magicui-smooth-cursor-demo — 惯性光标 + hover 放大变形                  */
/* ------------------------------------------------------------------------- */

const MU_CURSOR_SPOTS = [
  { label: "Preview", x: 22, y: 30 },
  { label: "Export", x: 74, y: 28 },
  { label: "Reset", x: 46, y: 74 },
];

function MuSmoothCursorDemo() {
  const [armed, setArmed] = React.useState<boolean>(false);
  const [hovering, setHovering] = React.useState<boolean>(false);
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);
  const opacity = useMotionValue<number>(0);
  const softX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.6 });
  const softY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.6 });
  const softOpacity = useSpring(opacity, { stiffness: 220, damping: 26 });

  return (
    <div className="relative overflow-hidden text-xs">
      <div
        className={`relative h-[152px] overflow-hidden rounded-xl border bg-card ${
          armed ? "cursor-none" : "cursor-default"
        }`}
        onPointerEnter={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left);
          y.set(e.clientY - rect.top);
          opacity.set(1);
          setArmed(true);
        }}
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          x.set(e.clientX - rect.left);
          y.set(e.clientY - rect.top);
        }}
        onPointerLeave={() => {
          opacity.set(0);
          setArmed(false);
          setHovering(false);
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,120,140,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(120,120,140,0.12)_1px,transparent_1px)] bg-[size:18px_18px]" />

        {MU_CURSOR_SPOTS.map((spot) => (
          <button
            key={spot.label}
            type="button"
            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
            onPointerEnter={() => setHovering(true)}
            onPointerLeave={() => setHovering(false)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-background px-2.5 py-1 text-[10px] font-medium shadow-xs transition-colors hover:border-primary/60 hover:text-primary"
          >
            {spot.label}
          </button>
        ))}

        <motion.div
          style={{ x: softX, y: softY, opacity: softOpacity }}
          className="pointer-events-none absolute left-0 top-0 z-10"
        >
          <motion.div
            animate={{
              width: hovering ? 42 : 16,
              height: hovering ? 42 : 16,
              borderRadius: hovering ? 14 : 999,
              backgroundColor: hovering ? "rgba(56,189,248,0.18)" : "rgba(99,102,241,0.85)",
              borderColor: hovering ? "rgba(56,189,248,0.9)" : "rgba(99,102,241,0.9)",
            }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="-translate-x-1/2 -translate-y-1/2 border"
          />
        </motion.div>

        <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-muted-foreground">
          {armed ? "custom cursor armed · spring lag" : "move the pointer inside to arm the cursor"}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 7. magicui-sparkles-text-demo — 固定坐标星点 + 延迟数组                    */
/* ------------------------------------------------------------------------- */

type MuSparkle = { left: number; top: number; size: number; delay: number; duration: number };

const MU_SPARKLES: MuSparkle[] = [
  { left: 6, top: 30, size: 10, delay: 0.0, duration: 1.6 },
  { left: 13, top: 68, size: 7, delay: 0.35, duration: 2.1 },
  { left: 21, top: 12, size: 9, delay: 0.9, duration: 1.4 },
  { left: 29, top: 76, size: 6, delay: 0.15, duration: 2.4 },
  { left: 36, top: 22, size: 11, delay: 1.25, duration: 1.8 },
  { left: 44, top: 62, size: 7, delay: 0.6, duration: 2.0 },
  { left: 52, top: 8, size: 8, delay: 1.7, duration: 1.5 },
  { left: 58, top: 80, size: 10, delay: 0.45, duration: 2.2 },
  { left: 66, top: 26, size: 6, delay: 1.05, duration: 1.9 },
  { left: 73, top: 70, size: 9, delay: 0.25, duration: 1.7 },
  { left: 80, top: 16, size: 8, delay: 1.45, duration: 2.3 },
  { left: 87, top: 58, size: 11, delay: 0.75, duration: 1.6 },
  { left: 93, top: 34, size: 7, delay: 1.9, duration: 2.0 },
  { left: 3, top: 78, size: 8, delay: 1.15, duration: 1.5 },
];

const MU_SPARKLE_COLORS: { name: string; dot: string; glow: string }[] = [
  { name: "amber", dot: "#fbbf24", glow: "rgba(251,191,36,0.55)" },
  { name: "violet", dot: "#a78bfa", glow: "rgba(167,139,250,0.55)" },
  { name: "cyan", dot: "#22d3ee", glow: "rgba(34,211,238,0.55)" },
];

function MuSparklesTextDemo() {
  const [count, setCount] = React.useState<number>(10);
  const [colorIndex, setColorIndex] = React.useState<number>(0);
  const theme = MU_SPARKLE_COLORS[colorIndex];

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative flex h-[128px] flex-col items-center justify-center gap-3 rounded-xl border bg-background">
        <div className="relative px-3 py-2">
          {MU_SPARKLES.map((s, i) => {
            const visible = i < count;
            return (
              <span
                key={`${s.left}-${s.top}`}
                className="pointer-events-none absolute"
                style={{
                  left: `${s.left}%`,
                  top: `${s.top}%`,
                  opacity: visible ? 1 : 0,
                  transition: "opacity 300ms ease",
                }}
              >
                <Star
                  style={{
                    width: s.size,
                    height: s.size,
                    color: theme.dot,
                    filter: `drop-shadow(0 0 4px ${theme.glow})`,
                    animation: visible
                      ? `mu-sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`
                      : "none",
                  }}
                  strokeWidth={1.5}
                  fill="currentColor"
                />
              </span>
            );
          })}
          <span className="relative bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 bg-clip-text text-[20px] font-bold tracking-tight text-transparent">
            Sparkles Text
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCount((c) => (c >= 14 ? 6 : c + 4))}
            className="rounded-full border bg-card px-2 py-0.5 text-[9px] text-muted-foreground hover:text-foreground"
          >
            stars {count}
          </button>
          <button
            type="button"
            onClick={() => setColorIndex((i) => (i + 1) % MU_SPARKLE_COLORS.length)}
            className="flex items-center gap-1 rounded-full border bg-card px-2 py-0.5 text-[9px] text-muted-foreground hover:text-foreground"
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.dot }} />
            {theme.name}
          </button>
        </div>
      </div>
      <style>{`@keyframes mu-sparkle { 0%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg) } 45% { opacity: 1; transform: scale(1.15) rotate(35deg) } 70% { opacity: 0.35; transform: scale(0.8) rotate(60deg) } }`}</style>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 8. magicui-spinning-text-demo — SVG textPath 环形文字 + 中心按钮           */
/* ------------------------------------------------------------------------- */

function MuSpinningTextDemo() {
  const [fast, setFast] = React.useState<boolean>(false);
  const [spins, setSpins] = React.useState<number>(0);

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative flex h-[168px] items-center justify-center rounded-xl border bg-gradient-to-br from-card via-muted/20 to-card">
        <div className="relative h-[148px] w-[148px]">
          <div
            className="absolute inset-0"
            style={{
              animation: `mu-spin-cw ${fast ? 3.2 : 14}s linear infinite`,
            }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="mu-spin-arc" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="fill-current text-[8.4px] font-semibold tracking-[0.24em] text-muted-foreground">
                <textPath href="#mu-spin-arc" startOffset="50%" textAnchor="middle">
                  MAGIC UI · SPINNING TEXT ·
                </textPath>
              </text>
            </svg>
          </div>

          <div
            className="absolute inset-[14px]"
            style={{ animation: `mu-spin-ccw ${fast ? 4.4 : 20}s linear infinite` }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path id="mu-spin-arc-inner" d="M 50,50 m -30,0 a 30,30 0 1,0 60,0 a 30,30 0 1,0 -60,0" />
              </defs>
              <text className="fill-current text-[6.4px] font-medium tracking-[0.3em] text-primary">
                <textPath href="#mu-spin-arc-inner" startOffset="50%" textAnchor="middle">
                  HOVER TO SPEED UP
                </textPath>
              </text>
            </svg>
          </div>

          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_65%)]" />

          <button
            type="button"
            onPointerEnter={() => setFast(true)}
            onPointerLeave={() => setFast(false)}
            onClick={() => setSpins((s) => s + 1)}
            className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-card shadow-xs transition-transform hover:scale-110 active:scale-95"
            aria-label="Play spinning text"
          >
            <Play className="h-4 w-4 text-primary" />
          </button>
        </div>

        <span className="absolute bottom-1.5 left-2 font-mono text-[9px] text-muted-foreground">
          {fast ? "boosted ×4.4" : spins > 0 ? `played ${spins}× · hover the disc` : "textPath ring · hover to accelerate"}
        </span>
      </div>
      <style>{`@keyframes mu-spin-cw { to { transform: rotate(360deg) } } @keyframes mu-spin-ccw { to { transform: rotate(-360deg) } }`}</style>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 9. magicui-striped-pattern-demo — 角度 / 宽度 / 颜色 实时可调               */
/* ------------------------------------------------------------------------- */

const MU_STRIPE_PALETTES: { name: string; a: string; b: string; text: string }[] = [
  { name: "indigo", a: "#6366f1", b: "#a5b4fc", text: "#4338ca" },
  { name: "emerald", a: "#10b981", b: "#6ee7b7", text: "#047857" },
  { name: "rose", a: "#f43f5e", b: "#fda4af", text: "#be123c" },
  { name: "slate", a: "#334155", b: "#94a3b8", text: "#1e293b" },
];

function MuStripedPatternDemo() {
  const [angle, setAngle] = React.useState<number>(45);
  const [width, setWidth] = React.useState<number>(6);
  const [palette, setPalette] = React.useState<number>(0);
  const theme = MU_STRIPE_PALETTES[palette];
  const normalized = ((angle % 360) + 360) % 360;

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[172px] flex-col gap-2 rounded-xl border bg-card p-2">
        <div
          className="relative flex flex-1 items-center justify-center overflow-hidden rounded-lg border"
          style={{
            backgroundImage: `repeating-linear-gradient(${normalized}deg, ${theme.a} 0px, ${theme.a} ${width}px, ${theme.b} ${width}px, ${theme.b} ${width * 2}px)`,
          }}
        >
          <div className="rounded-md border border-white/40 bg-white/85 px-2.5 py-1.5 text-center shadow-xs backdrop-blur-sm">
            <p className="text-[11px] font-semibold" style={{ color: theme.text }}>
              Striped Pattern
            </p>
            <p className="font-mono text-[9px] text-neutral-600">
              {normalized}° · {width}px · {theme.name}
            </p>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="flex items-center gap-2">
            <span className="w-10 shrink-0 text-[9px] text-muted-foreground">angle</span>
            <input
              type="range"
              min={0}
              max={180}
              value={angle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAngle(Number(e.target.value))}
              className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              aria-label="Stripe angle"
            />
            <span className="w-7 text-right font-mono text-[9px] tabular-nums text-foreground">{angle}</span>
          </label>
          <label className="flex items-center gap-2">
            <span className="w-10 shrink-0 text-[9px] text-muted-foreground">width</span>
            <input
              type="range"
              min={2}
              max={14}
              value={width}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWidth(Number(e.target.value))}
              className="h-1 flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
              aria-label="Stripe width"
            />
            <span className="w-7 text-right font-mono text-[9px] tabular-nums text-foreground">{width}</span>
          </label>
          <div className="flex items-center gap-2">
            <span className="w-10 shrink-0 text-[9px] text-muted-foreground">color</span>
            <div className="flex gap-1.5">
              {MU_STRIPE_PALETTES.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setPalette(i)}
                  aria-label={`Stripe color ${p.name}`}
                  className={`h-4 w-7 rounded-sm border transition-transform ${
                    i === palette ? "scale-110 ring-2 ring-ring/60" : "hover:scale-105"
                  }`}
                  style={{ backgroundImage: `repeating-linear-gradient(45deg, ${p.a} 0 3px, ${p.b} 3px 6px)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------- */
/* 10. magicui-terminal-demo — 自动打字 + 可输入命令                            */
/* ------------------------------------------------------------------------- */

type MuTerminalLine = { id: number; kind: "cmd" | "out" | "ok" | "warn"; text: string };

const MU_TERMINAL_SCRIPT: { kind: MuTerminalLine["kind"]; text: string }[] = [
  { kind: "cmd", text: "pnpm dlx shadcn@latest add terminal" },
  { kind: "out", text: "✔ checking registry..." },
  { kind: "out", text: "✔ installing dependencies (2 packages)" },
  { kind: "ok", text: "Done. terminal.tsx added to src/components/magicui" },
];

function MuTerminalReply(raw: string): { kind: MuTerminalLine["kind"]; text: string } {
  const cmd = raw.trim();
  if (cmd.length === 0) return { kind: "warn", text: "empty command" };
  if (cmd === "help") return { kind: "out", text: "commands: help · ls · clear · whoami" };
  if (cmd === "ls") return { kind: "out", text: "app  components  lib  registry.json" };
  if (cmd === "whoami") return { kind: "out", text: "guest@magicui-preview" };
  if (cmd.startsWith("pnpm") || cmd.startsWith("npm")) return { kind: "ok", text: `queued: ${cmd} (simulated)` };
  return { kind: "warn", text: `command not found: ${cmd.split(" ")[0]}` };
}

function MuTerminalDemo() {
  const [lineIndex, setLineIndex] = React.useState<number>(0);
  const [charIndex, setCharIndex] = React.useState<number>(0);
  const [extra, setExtra] = React.useState<MuTerminalLine[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [tick, setTick] = React.useState<number>(0);
  const scroller = React.useRef<HTMLDivElement | null>(null);
  const nextId = React.useRef<number>(0);

  // typewriter — all timer logic lives in the effect and is cleaned up on unmount
  React.useEffect(() => {
    if (lineIndex >= MU_TERMINAL_SCRIPT.length) return;
    const line = MU_TERMINAL_SCRIPT[lineIndex];
    if (charIndex < line.text.length) {
      const t = window.setTimeout(() => setCharIndex((c) => c + 1), line.kind === "cmd" ? 34 : 12);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 420);
    return () => window.clearTimeout(t);
  }, [lineIndex, charIndex]);

  // keep the transcript pinned to the bottom without touching layout during render
  React.useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lineIndex, charIndex, extra, tick]);

  const finished = lineIndex >= MU_TERMINAL_SCRIPT.length;

  const submit = () => {
    const raw = value;
    setValue("");
    setExtra((prev) => [
      ...prev,
      { id: nextId.current++, kind: "cmd", text: raw },
      { ...MuTerminalReply(raw), id: nextId.current++ },
    ]);
    if (raw.trim() === "clear") setExtra([]);
  };

  const toneOf = (kind: MuTerminalLine["kind"]): string => {
    if (kind === "cmd") return "text-neutral-100";
    if (kind === "ok") return "text-emerald-400";
    if (kind === "warn") return "text-amber-400";
    return "text-neutral-400";
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[176px] flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/80 px-2 py-1.5">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </span>
          <span className="mx-auto truncate font-mono text-[10px] text-neutral-400">zsh — magicui@preview</span>
          <Code2 className="h-3 w-3 text-neutral-500" />
        </div>

        <div ref={scroller} className="flex-1 space-y-0.5 overflow-y-auto px-2.5 py-2 font-mono text-[10px] leading-relaxed">
          {MU_TERMINAL_SCRIPT.map((line, i) => {
            if (i > lineIndex) return null;
            const text = i === lineIndex ? line.text.slice(0, charIndex) : line.text;
            return (
              <div key={line.text} className={toneOf(line.kind)}>
                {line.kind === "cmd" ? (
                  <>
                    <span className="text-emerald-400">➜ </span>
                    <span className="text-sky-400">~</span> {text}
                    {i === lineIndex && (
                      <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-[1px] bg-neutral-300 align-middle animate-pulse" />
                    )}
                  </>
                ) : (
                  text
                )}
              </div>
            );
          })}

          {extra.map((line) => (
            <div key={line.id} className={toneOf(line.kind)}>
              {line.kind === "cmd" ? (
                <>
                  <span className="text-emerald-400">➜ </span>
                  <span className="text-sky-400">~</span> {line.text}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}

          {finished && (
            <div className="text-neutral-100">
              <span className="text-emerald-400">➜ </span>
              <span className="text-sky-400">~</span> typed input, press Enter
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5 border-t border-neutral-800 bg-neutral-900/60 px-2 py-1.5">
          <span className="font-mono text-[10px] text-emerald-400">➜</span>
          <input
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
              setTick((t) => t + 1);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") submit();
            }}
            placeholder="try: help · ls · whoami · clear"
            aria-label="Terminal command input"
            className="min-w-0 flex-1 bg-transparent font-mono text-[10px] text-neutral-100 placeholder:text-neutral-600 focus:outline-none"
          />
          <button
            type="button"
            onClick={submit}
            className="flex items-center gap-1 rounded border border-neutral-700 px-1.5 py-0.5 font-mono text-[9px] text-neutral-400 transition-colors hover:border-neutral-500 hover:text-neutral-100"
          >
            <CornerDownLeft className="h-2.5 w-2.5" /> run
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute right-2 top-[34px] flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/90 px-1.5 py-0.5 font-mono text-[9px] text-neutral-500">
        <ArrowUp className="h-2.5 w-2.5" />
        {finished ? "idle" : "streaming"}
      </div>
    </div>
  );
}

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-safari-demo": MuSafariDemo,
  "magicui-scroll-based-velocity-demo": MuScrollBasedVelocityDemo,
  "magicui-scroll-progress-demo": MuScrollProgressDemo,
  "magicui-shimmer-button-demo": MuShimmerButtonDemo,
  "magicui-shiny-button-demo": MuShinyButtonDemo,
  "magicui-smooth-cursor-demo": MuSmoothCursorDemo,
  "magicui-sparkles-text-demo": MuSparklesTextDemo,
  "magicui-spinning-text-demo": MuSpinningTextDemo,
  "magicui-striped-pattern-demo": MuStripedPatternDemo,
  "magicui-terminal-demo": MuTerminalDemo,
};
