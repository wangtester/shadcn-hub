"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Camera,
  Droplets,
  Flame,
  Globe,
  Heart,
  Minus,
  Music,
  Palette,
  Play,
  Plus,
  RotateCcw,
  Rocket,
  Save,
  Share2,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

type MuIcon = React.ComponentType<{ className?: string }>;

const MU_RANGE_CLASS = "w-full cursor-pointer accent-primary";

/* ========================================================================= */
/* 1. magicui-noise-texture-demo — feTurbulence 噪点覆盖层                     */
/* ========================================================================= */

type MuNoiseGrain = { label: string; freq: number };

const MU_NOISE_GRAINS: MuNoiseGrain[] = [
  { label: "Fine", freq: 1.4 },
  { label: "Medium", freq: 0.8 },
  { label: "Coarse", freq: 0.24 },
];

function MuNoiseTextureDemo() {
  const [opacity, setOpacity] = React.useState(48);
  const [freq, setFreq] = React.useState(0.8);

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-noise{0%{transform:translate3d(0,0,0)}20%{transform:translate3d(-3%,2%,0)}40%{transform:translate3d(2%,-3%,0)}60%{transform:translate3d(-3%,-1%,0)}80%{transform:translate3d(3%,2%,0)}100%{transform:translate3d(0,0,0)}}`}</style>
      <div className="relative isolate flex h-[112px] items-center justify-center overflow-hidden rounded-xl border bg-gradient-to-br from-indigo-500/25 via-card to-fuchsia-500/20">
        <div className="relative z-10 text-center">
          <p className="text-[13px] font-semibold tracking-tight text-foreground">Grain Overlay</p>
          <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
            feTurbulence · fractalNoise
          </p>
        </div>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -left-1/4 -top-1/4 h-[150%] w-[150%]"
          style={{
            opacity: opacity / 100,
            mixBlendMode: "overlay",
            animation: "mu-part5-noise 0.7s step-end infinite",
          }}
        >
          <filter id="mu-part5-noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves={4}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#mu-part5-noise-filter)" />
        </svg>
        <span className="absolute bottom-1.5 right-2 z-10 rounded border bg-card/70 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground">
          {opacity}%
        </span>
      </div>
      <label className="mt-2 flex items-center gap-2">
        <span className="w-12 shrink-0 font-mono text-[10px] text-muted-foreground">opacity</span>
        <input
          type="range"
          min={0}
          max={100}
          value={opacity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOpacity(Number(event.target.value))
          }
          className={MU_RANGE_CLASS}
        />
      </label>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="w-12 shrink-0 font-mono text-[10px] text-muted-foreground">grain</span>
        {MU_NOISE_GRAINS.map((grain) => (
          <button
            key={grain.label}
            type="button"
            onClick={() => setFreq(grain.freq)}
            className={cn(
              "rounded border px-1.5 py-0.5 text-[9px] transition-colors",
              Math.abs(freq - grain.freq) < 0.01
                ? "border-primary/50 bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            )}
          >
            {grain.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. magicui-orbiting-circles-demo — 多轨道环绕图标，hover 暂停               */
/* ========================================================================= */

type MuOrbitItem = { Icon: MuIcon; tint: string };
type MuOrbitRing = { radius: number; duration: number; reverse: boolean; items: MuOrbitItem[] };

const MU_ORBIT_RINGS: MuOrbitRing[] = [
  {
    radius: 26,
    duration: 11,
    reverse: false,
    items: [
      { Icon: Zap, tint: "text-amber-500" },
      { Icon: Heart, tint: "text-rose-500" },
    ],
  },
  {
    radius: 44,
    duration: 17,
    reverse: true,
    items: [
      { Icon: Star, tint: "text-violet-500" },
      { Icon: Globe, tint: "text-sky-500" },
      { Icon: Rocket, tint: "text-emerald-500" },
    ],
  },
  {
    radius: 62,
    duration: 24,
    reverse: false,
    items: [
      { Icon: Camera, tint: "text-cyan-500" },
      { Icon: Bell, tint: "text-orange-500" },
      { Icon: Music, tint: "text-pink-500" },
      { Icon: Flame, tint: "text-red-500" },
    ],
  },
];

function MuOrbitingCirclesDemo() {
  const [ringCount, setRingCount] = React.useState(2);
  const [paused, setPaused] = React.useState(false);
  const rings = MU_ORBIT_RINGS.slice(0, ringCount);

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-orbit{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
      <div
        className="relative mx-auto flex h-[150px] w-[150px] items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {rings.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className="absolute left-1/2 top-1/2"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              marginLeft: -ring.radius,
              marginTop: -ring.radius,
            }}
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-border/70" />
            <div
              className="absolute inset-0"
              style={{
                animation: `mu-part5-orbit ${ring.duration}s linear infinite`,
                animationDirection: ring.reverse ? "reverse" : "normal",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {ring.items.map((item, itemIndex) => {
                const angle =
                  (360 / ring.items.length) * itemIndex + ringIndex * 26;
                const rad = (angle * Math.PI) / 180;
                const x = ring.radius * Math.sin(rad);
                const y = -ring.radius * Math.cos(rad);
                return (
                  <div
                    key={itemIndex}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                  >
                    <div
                      className="flex h-6 w-6 items-center justify-center rounded-full border bg-card shadow-xs"
                      style={{
                        animation: `mu-part5-orbit ${ring.duration}s linear infinite`,
                        animationDirection: ring.reverse ? "normal" : "reverse",
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    >
                      <item.Icon className={cn("h-3 w-3", item.tint)} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border bg-gradient-to-br from-primary to-fuchsia-500 text-primary-foreground shadow-lg">
          <Sparkles className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted-foreground">
          {paused ? "orbit paused" : `${ringCount} orbit${ringCount > 1 ? "s" : ""} live`}
        </span>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="remove orbit"
            onClick={() => setRingCount((count) => Math.max(1, count - 1))}
            className="flex h-5 w-5 items-center justify-center rounded border text-muted-foreground hover:bg-muted"
          >
            <Minus className="h-3 w-3" />
          </button>
          <span className="w-4 text-center font-mono text-[10px] text-foreground">{ringCount}</span>
          <button
            type="button"
            aria-label="add orbit"
            onClick={() => setRingCount((count) => Math.min(MU_ORBIT_RINGS.length, count + 1))}
            className="flex h-5 w-5 items-center justify-center rounded border text-muted-foreground hover:bg-muted"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. magicui-pixel-image-demo — 方块拼合 / hover 马赛克                        */
/* ========================================================================= */

const MU_PIXEL_COLS = 16;
const MU_PIXEL_ROWS = 10;
const MU_PIXEL_CELL = 12;
const MU_PIXEL_SKY = ["#312e81", "#4c1d95", "#6d28d9", "#a21caf", "#db2777", "#f97316"];

type MuPixelCell = {
  color: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  rot: number;
  delay: number;
};

function muPixelColor(row: number, col: number): string {
  const sun = Math.hypot(col - 7.5, (row - 4.2) * 1.6);
  if (sun < 2.1) return "#fef3c7";
  if (sun < 2.9) return "#fdba74";
  if (row >= 7) return (col * 3 + row) % 5 === 0 ? "#4f46e5" : "#1e1b4b";
  return MU_PIXEL_SKY[Math.min(row, MU_PIXEL_SKY.length - 1)];
}

const MU_PIXELS: MuPixelCell[] = Array.from(
  { length: MU_PIXEL_COLS * MU_PIXEL_ROWS },
  (_, index) => {
    const row = Math.floor(index / MU_PIXEL_COLS);
    const col = index % MU_PIXEL_COLS;
    return {
      color: muPixelColor(row, col),
      x: col * MU_PIXEL_CELL,
      y: row * MU_PIXEL_CELL,
      dx: ((index * 37) % 121) - 60,
      dy: ((index * 53) % 81) - 40,
      rot: ((index * 29) % 181) - 90,
      delay: (row + col) * 26,
    };
  }
);

function muPixelTransform(cell: MuPixelCell, assembled: boolean, mosaic: boolean): string {
  if (!assembled) {
    return `translate(${cell.dx}px, ${cell.dy}px) rotate(${cell.rot}deg) scale(0.25)`;
  }
  if (mosaic) {
    return `translate(${cell.dx * 0.4}px, ${cell.dy * 0.4}px) rotate(${cell.rot * 0.5}deg) scale(0.5)`;
  }
  return "translate(0px, 0px) rotate(0deg) scale(1)";
}

function MuPixelImageDemo() {
  const [run, setRun] = React.useState(0);
  const [assembled, setAssembled] = React.useState(false);
  const [mosaic, setMosaic] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 90);
    return () => clearTimeout(timer);
  }, [run]);

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted-foreground">
          {assembled ? `${MU_PIXEL_COLS}×${MU_PIXEL_ROWS} tiles` : "decoding tiles…"}
        </span>
        <button
          type="button"
          onClick={() => {
            setMosaic(false);
            setAssembled(false);
            setRun((value) => value + 1);
          }}
          className="flex items-center gap-1 rounded border px-1.5 py-0.5 text-[9px] text-muted-foreground transition-colors hover:bg-muted"
        >
          <RotateCcw className="h-2.5 w-2.5" /> replay
        </button>
      </div>
      <div
        onMouseEnter={() => setMosaic(true)}
        onMouseLeave={() => setMosaic(false)}
        className="relative mx-auto h-[120px] w-[192px] overflow-hidden rounded-lg border bg-neutral-950"
      >
        {MU_PIXELS.map((cell, index) => {
          // 拼合（assembled 且未 hover）时用较长的错峰延迟做波浪式归位，
          // hover 散开 / 重置时用较短延迟，保证手感干脆。
          const delay = assembled && !mosaic ? cell.delay : cell.delay * 0.25;
          return (
            <span
              key={index}
              className="absolute block"
              style={{
                left: cell.x,
                top: cell.y,
                width: MU_PIXEL_CELL - 1,
                height: MU_PIXEL_CELL - 1,
                backgroundColor: cell.color,
                opacity: assembled ? 1 : 0,
                filter: mosaic ? "saturate(0.55) brightness(0.9)" : "none",
                transform: muPixelTransform(cell, assembled, mosaic),
                transition: `transform 620ms cubic-bezier(.22,1,.36,1) ${delay}ms, opacity 400ms ease ${delay}ms, filter 300ms linear`,
                willChange: "transform",
              }}
            />
          );
        })}
      </div>
      <p className="mt-1 text-center font-mono text-[9px] text-muted-foreground">
        hover the frame to scramble
      </p>
    </div>
  );
}

/* ========================================================================= */
/* 4. magicui-pointer-demo — SVG 光标自动移动并点击                             */
/* ========================================================================= */

type MuPointerTarget = { label: string; x: number; y: number; Icon: MuIcon; tint: string };
type MuPointerPhase = "idle" | "moving" | "clicked";
type MuPointerRipple = { id: number; x: number; y: number };

const MU_POINTER_HOME = { x: 14, y: 88 };
const MU_POINTER_TARGETS: MuPointerTarget[] = [
  { label: "Save", x: 136, y: 22, Icon: Save, tint: "text-emerald-500" },
  { label: "Run", x: 30, y: 62, Icon: Play, tint: "text-sky-500" },
  { label: "Share", x: 132, y: 104, Icon: Share2, tint: "text-violet-500" },
];

function MuPointerDemo() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [phase, setPhase] = React.useState<MuPointerPhase>("idle");
  const [ripples, setRipples] = React.useState<MuPointerRipple[]>([]);
  const seqRef = React.useRef(0);
  const target = MU_POINTER_TARGETS[activeIndex];

  React.useEffect(() => {
    if (phase !== "moving") return;
    const seq = seqRef.current + 1;
    seqRef.current = seq;
    const timer = setTimeout(() => {
      setPhase("clicked");
      setRipples((prev) => [...prev.slice(-3), { id: seq, x: target.x, y: target.y }]);
    }, 620);
    return () => clearTimeout(timer);
  }, [phase, target.x, target.y]);

  const status =
    phase === "idle"
      ? "cursor idle · pick a target"
      : phase === "moving"
        ? `moving → ${target.label}`
        : `clicked ${target.label} ✓`;

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative h-[136px] overflow-hidden rounded-xl border bg-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-[size:14px_14px] opacity-60" />
        {MU_POINTER_TARGETS.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => {
              setActiveIndex(index);
              setPhase("moving");
            }}
            style={{ left: item.x, top: item.y }}
            className={cn(
              "absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[10px] font-medium shadow-xs transition-colors",
              activeIndex === index && phase !== "idle"
                ? "border-primary/60 text-foreground"
                : "text-muted-foreground hover:border-primary/40"
            )}
          >
            <item.Icon className={cn("h-3 w-3", item.tint)} />
            {item.label}
          </button>
        ))}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="pointer-events-none absolute z-20 h-7 w-7 rounded-full border-2 border-primary"
            style={{ left: ripple.x - 14, top: ripple.y - 14 }}
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ))}
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-30"
          initial={false}
          animate={phase === "idle" ? MU_POINTER_HOME : { x: target.x, y: target.y }}
          transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
        >
          <svg width="18" height="22" viewBox="0 0 18 22" aria-hidden="true">
            <path
              d="M2 1.6 L2 17.4 L6.3 13.3 L9.2 19.8 L11.9 18.5 L9.1 12.2 L15.2 12.1 Z"
              fill="#ffffff"
              stroke="#0f172a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono text-[10px] text-muted-foreground">{status}</span>
        <button
          type="button"
          onClick={() => {
            setPhase("idle");
            setRipples([]);
          }}
          className="rounded border px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground transition-colors hover:bg-muted"
        >
          reset
        </button>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. magicui-progressive-blur-demo — 上下渐进模糊遮罩                          */
/* ========================================================================= */

type MuBlurLevel = { label: string; layers: number; blur: number };

const MU_BLUR_LEVELS: MuBlurLevel[] = [
  { label: "Soft", layers: 2, blur: 2 },
  { label: "Medium", layers: 3, blur: 4 },
  { label: "Strong", layers: 4, blur: 8 },
];

const MU_BLUR_ITEMS: { title: string; body: string }[] = [
  { title: "Progressive Blur", body: "上下边缘用多层 backdrop-blur 做渐隐遮罩。" },
  { title: "Layer stack", body: "每一层只覆盖一个窄带，越靠边缘模糊越强。" },
  { title: "Scroll reveal", body: "内容滚动到中间时完全清晰，边缘自动虚化。" },
  { title: "Mask gradient", body: "mask-image 线性渐变让模糊层平滑衔接。" },
  { title: "Configurable", body: "可切换 Soft / Medium / Strong 三档强度。" },
  { title: "Zero dependency", body: "纯 CSS backdrop-filter，无额外依赖。" },
];

function MuProgressiveBlurDemo() {
  const [levelIndex, setLevelIndex] = React.useState(1);
  const level = MU_BLUR_LEVELS[levelIndex];

  const overlay = (direction: "to bottom" | "to top") =>
    Array.from({ length: level.layers }, (_, index) => {
      const start = (index / level.layers) * 100;
      const end = ((index + 1) / level.layers) * 100;
      const blur = level.blur * (level.layers - index);
      const mask = `linear-gradient(${direction}, rgba(0,0,0,1) ${start}%, rgba(0,0,0,0) ${end}%)`;
      return (
        <div
          key={`${direction}-${index}`}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      );
    });

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="relative h-[126px] overflow-hidden rounded-xl border bg-card">
        <div className="h-full overflow-y-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="space-y-2">
            {MU_BLUR_ITEMS.map((item) => (
              <div key={item.title} className="rounded-lg border bg-muted/30 p-2">
                <p className="text-[11px] font-semibold text-foreground">{item.title}</p>
                <p className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-9">{overlay("to bottom")}</div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-9">{overlay("to top")}</div>
        <span className="pointer-events-none absolute right-2 top-1.5 font-mono text-[9px] text-muted-foreground">
          scroll ↕
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {MU_BLUR_LEVELS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setLevelIndex(index)}
              className={cn(
                "rounded border px-1.5 py-0.5 text-[9px] transition-colors",
                index === levelIndex
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="font-mono text-[9px] text-muted-foreground">
          {level.layers} layers · {level.blur}px
        </span>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. magicui-pulsating-button-demo — 外圈脉冲光环                             */
/* ========================================================================= */

type MuPulseColor = { label: string; color: string; soft: string };

const MU_PULSE_COLORS: MuPulseColor[] = [
  { label: "Violet", color: "#8b5cf6", soft: "rgba(139,92,246,0.85)" },
  { label: "Cyan", color: "#06b6d4", soft: "rgba(6,182,212,0.85)" },
  { label: "Rose", color: "#f43f5e", soft: "rgba(244,63,94,0.85)" },
];

function MuPulsatingButtonDemo() {
  const [on, setOn] = React.useState(true);
  const [colorIndex, setColorIndex] = React.useState(0);
  const palette = MU_PULSE_COLORS[colorIndex];

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-pulse{0%{transform:scale(0.92);opacity:0.75}75%{transform:scale(2.05);opacity:0}100%{transform:scale(2.05);opacity:0}}`}</style>
      <div className="flex h-[104px] flex-col items-center justify-center gap-3">
        <div className="relative inline-flex items-center justify-center">
          {[0, 1].map((ringIndex) => (
            <span
              key={ringIndex}
              className="pointer-events-none absolute inset-0 rounded-full border-2"
              style={{
                borderColor: palette.soft,
                opacity: on ? 1 : 0,
                animation: on
                  ? `mu-part5-pulse 1.9s cubic-bezier(.2,.6,.3,1) ${ringIndex * 0.65}s infinite`
                  : "none",
                transition: "opacity 250ms linear",
              }}
            />
          ))}
          <button
            type="button"
            onClick={() => setOn((value) => !value)}
            className="relative z-10 rounded-full px-5 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: palette.color,
              boxShadow: `0 10px 26px -12px ${palette.soft}`,
            }}
          >
            <Zap className="mr-1 inline h-3.5 w-3.5" />
            {on ? "Pulsating" : "Paused"}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground">pulse</span>
          {MU_PULSE_COLORS.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={item.label}
              onClick={() => setColorIndex(index)}
              className={cn(
                "h-4 w-4 rounded-full border-2 transition-transform hover:scale-110",
                index === colorIndex ? "border-foreground/50" : "border-transparent"
              )}
              style={{ backgroundColor: item.color }}
            />
          ))}
          <span className="ml-1 font-mono text-[10px] text-foreground">{on ? "ON" : "OFF"}</span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 7. magicui-rainbow-button-demo — 流动彩虹渐变按钮                            */
/* ========================================================================= */

const MU_RAINBOW_GRADIENT =
  "linear-gradient(90deg, #ff3d71, #ff8a00, #ffe600, #34d399, #22d3ee, #6366f1, #a855f7, #ff3d71)";

function MuRainbowButtonDemo() {
  const [hovered, setHovered] = React.useState(false);
  const [outline, setOutline] = React.useState(false);
  const [clicks, setClicks] = React.useState(0);
  const duration = hovered ? 1.1 : 3.4;
  const slide = `mu-part5-rainbow ${duration}s linear infinite`;

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-rainbow{from{background-position:0% 50%}to{background-position:200% 50%}}`}</style>
      <div className="flex h-[126px] flex-col items-center justify-center gap-3">
        <div
          className="rounded-full"
          style={{
            backgroundImage: MU_RAINBOW_GRADIENT,
            backgroundSize: "200% 100%",
            animation: slide,
            padding: outline ? 2 : 0,
            filter: hovered ? "brightness(1.16) saturate(1.2)" : "none",
            boxShadow: hovered
              ? "0 12px 32px -12px rgba(168,85,247,0.75)"
              : "0 8px 22px -16px rgba(168,85,247,0.6)",
            transition: "filter 200ms linear, box-shadow 200ms linear, padding 200ms linear",
          }}
        >
          <button
            type="button"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setClicks((value) => value + 1)}
            className={cn(
              "rounded-full px-6 py-2 text-xs font-semibold transition-transform",
              outline && "bg-card",
              hovered && "scale-[1.04]"
            )}
            style={
              outline
                ? undefined
                : { backgroundColor: "transparent", color: "#ffffff", textShadow: "0 1px 3px rgba(0,0,0,0.35)" }
            }
          >
            {outline ? (
              <span
                style={{
                  display: "inline-block",
                  backgroundImage: MU_RAINBOW_GRADIENT,
                  backgroundSize: "200% 100%",
                  animation: slide,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Rainbow Button
              </span>
            ) : (
              <>Rainbow Button{clicks > 0 ? ` · ${clicks}` : ""}</>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOutline((value) => !value)}
            className="flex items-center gap-1 rounded border px-1.5 py-0.5 text-[9px] text-muted-foreground transition-colors hover:bg-muted"
          >
            <Palette className="h-2.5 w-2.5" /> {outline ? "outline" : "solid"}
          </button>
          <span className="font-mono text-[9px] text-muted-foreground">
            {hovered ? "hover · gradient 3×" : "hover to accelerate"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 8. magicui-retro-grid-demo — 透视地平线 + 滚动网格 + 落日                    */
/* ========================================================================= */

type MuRetroTheme = {
  label: string;
  sky: string;
  line: string;
  sun: string;
  glow: string;
};

const MU_RETRO_THEMES: MuRetroTheme[] = [
  {
    label: "Sunset",
    sky: "linear-gradient(180deg, #1b0b2e 0%, #431470 55%, #7c1d6f 100%)",
    line: "rgba(244,114,182,0.75)",
    sun: "linear-gradient(180deg, #fde68a 0%, #fb7185 100%)",
    glow: "rgba(251,113,133,0.55)",
  },
  {
    label: "Cyber",
    sky: "linear-gradient(180deg, #04141f 0%, #062b3f 55%, #0a4b5c 100%)",
    line: "rgba(34,211,238,0.75)",
    sun: "linear-gradient(180deg, #a5f3fc 0%, #2563eb 100%)",
    glow: "rgba(34,211,238,0.5)",
  },
  {
    label: "Amber",
    sky: "linear-gradient(180deg, #180d02 0%, #3b1d05 55%, #7c2d12 100%)",
    line: "rgba(251,191,36,0.7)",
    sun: "linear-gradient(180deg, #fef08a 0%, #f97316 100%)",
    glow: "rgba(251,191,36,0.45)",
  },
];

function MuRetroGridDemo() {
  const [themeIndex, setThemeIndex] = React.useState(0);
  const theme = MU_RETRO_THEMES[themeIndex];

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-grid{from{background-position:0 0}to{background-position:0 32px}}`}</style>
      <div
        className="relative h-[140px] overflow-hidden rounded-xl border"
        style={{ background: theme.sky }}
      >
        <div
          className="absolute left-1/2 top-[46%] h-16 w-16 -translate-x-1/2 -translate-y-full rounded-full"
          style={{ backgroundImage: theme.sun, boxShadow: `0 0 46px 10px ${theme.glow}` }}
        />
        <div
          className="absolute left-0 right-0 top-[46%] h-px"
          style={{ background: theme.line, boxShadow: `0 0 14px ${theme.line}` }}
        />
        <div
          className="absolute inset-x-0 bottom-0 top-[46%] overflow-hidden"
          style={{ perspective: "110px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateX(64deg)",
              transformOrigin: "50% 0%",
              backgroundImage: `linear-gradient(${theme.line} 1px, transparent 1px), linear-gradient(90deg, ${theme.line} 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              animation: "mu-part5-grid 1.1s linear infinite",
              opacity: 0.8,
            }}
          />
        </div>
        <span className="absolute left-2 top-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/70">
          Retro Grid
        </span>
      </div>
      <div className="mt-1.5 flex items-center gap-1">
        {MU_RETRO_THEMES.map((item, index) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setThemeIndex(index)}
            className={cn(
              "rounded border px-1.5 py-0.5 text-[9px] transition-colors",
              index === themeIndex
                ? "border-primary/50 bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted"
            )}
          >
            {item.label}
          </button>
        ))}
        <span className="ml-auto font-mono text-[9px] text-muted-foreground">rotateX 64°</span>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 9. magicui-ripple-button-demo — 按钮内部点击坐标波纹                         */
/* ========================================================================= */

type MuButtonRipple = { id: number; x: number; y: number; size: number };

function MuRippleButtonDemo() {
  const [ripples, setRipples] = React.useState<MuButtonRipple[]>([]);
  const [count, setCount] = React.useState(0);
  const idRef = React.useRef(0);

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.2;
    const id = idRef.current + 1;
    idRef.current = id;
    setRipples((prev) => [
      ...prev.slice(-3),
      {
        id,
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2,
        size,
      },
    ]);
    setCount((value) => value + 1);
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-ripple{from{transform:scale(0.12);opacity:0.85}to{transform:scale(1);opacity:0}}`}</style>
      <div className="flex h-[118px] flex-col items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleRipple}
          className="relative overflow-hidden rounded-full bg-neutral-900 px-6 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
        >
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="pointer-events-none absolute rounded-full"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.06) 70%)",
                animation: "mu-part5-ripple 620ms ease-out forwards",
              }}
            />
          ))}
          <span className="relative z-10 flex items-center gap-1.5">
            <Droplets className="h-3.5 w-3.5" /> Ripple Button
          </span>
        </button>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span className="text-muted-foreground">
            clicks <span className="text-foreground">{count}</span>
          </span>
          <span className="text-muted-foreground">ripples {Math.min(count, 4)}</span>
          <button
            type="button"
            onClick={() => {
              setRipples([]);
              setCount(0);
            }}
            className="rounded border px-1.5 py-0.5 text-[9px] transition-colors hover:bg-muted"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 10. magicui-ripple-demo — 面板任意位置多层同心水波纹                         */
/* ========================================================================= */

type MuWaterBurst = { id: number; x: number; y: number; rings: number; duration: number };

function MuRippleDemo() {
  const [bursts, setBursts] = React.useState<MuWaterBurst[]>([]);
  const [rings, setRings] = React.useState(3);
  const [speed, setSpeed] = React.useState(1.2);
  const [total, setTotal] = React.useState(0);
  const [hint, setHint] = React.useState("click anywhere in the pond");
  const idRef = React.useRef(0);

  const spawn = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    const id = idRef.current + 1;
    idRef.current = id;
    setBursts((prev) => [...prev.slice(-2), { id, x, y, rings, duration: speed }]);
    setTotal((value) => value + 1);
    setHint(`x ${x} · y ${y}`);
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`@keyframes mu-part5-water{from{transform:scale(0.1);opacity:0.85}to{transform:scale(1);opacity:0}}`}</style>
      <div
        onClick={spawn}
        className="relative h-[136px] cursor-crosshair overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 50% 130%, rgba(34,211,238,0.22), transparent 60%)",
        }}
      >
        {bursts.map((burst) =>
          Array.from({ length: burst.rings }, (_, ringIndex) => (
            <span
              key={`${burst.id}-${ringIndex}`}
              className="pointer-events-none absolute rounded-full border"
              style={{
                left: burst.x - 120,
                top: burst.y - 120,
                width: 240,
                height: 240,
                borderColor:
                  ringIndex % 2 === 0 ? "rgba(34,211,238,0.7)" : "rgba(167,139,250,0.6)",
                animation: `mu-part5-water ${burst.duration}s cubic-bezier(.2,.7,.3,1) ${
                  ringIndex * (burst.duration / burst.rings) * 0.6
                }s forwards`,
              }}
            />
          ))
        )}
        <span className="pointer-events-none absolute right-2 top-1.5 font-mono text-[9px] text-cyan-300/80">
          {total} drops
        </span>
        <span className="pointer-events-none absolute left-2 top-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">
          Ripple
        </span>
        <span className="pointer-events-none absolute inset-x-0 bottom-1.5 text-center font-mono text-[9px] text-cyan-200/70">
          {hint}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <label className="flex flex-1 items-center gap-1.5">
          <span className="shrink-0 font-mono text-[10px] text-muted-foreground">rings</span>
          <input
            type="range"
            min={1}
            max={5}
            value={rings}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setRings(Number(event.target.value))
            }
            className={MU_RANGE_CLASS}
          />
          <span className="w-3 shrink-0 text-right font-mono text-[10px] text-foreground">
            {rings}
          </span>
        </label>
        <label className="flex flex-1 items-center gap-1.5">
          <span className="shrink-0 font-mono text-[10px] text-muted-foreground">speed</span>
          <input
            type="range"
            min={0.6}
            max={2.4}
            step={0.2}
            value={speed}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSpeed(Number(event.target.value))
            }
            className={MU_RANGE_CLASS}
          />
          <span className="w-8 shrink-0 text-right font-mono text-[10px] text-foreground">
            {speed.toFixed(1)}s
          </span>
        </label>
      </div>
    </div>
  );
}

/* ========================================================================= */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-noise-texture-demo": MuNoiseTextureDemo,
  "magicui-orbiting-circles-demo": MuOrbitingCirclesDemo,
  "magicui-pixel-image-demo": MuPixelImageDemo,
  "magicui-pointer-demo": MuPointerDemo,
  "magicui-progressive-blur-demo": MuProgressiveBlurDemo,
  "magicui-pulsating-button-demo": MuPulsatingButtonDemo,
  "magicui-rainbow-button-demo": MuRainbowButtonDemo,
  "magicui-retro-grid-demo": MuRetroGridDemo,
  "magicui-ripple-button-demo": MuRippleButtonDemo,
  "magicui-ripple-demo": MuRippleDemo,
};
