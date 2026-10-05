"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  X,
  RotateCcw,
  Volume2,
  SkipForward,
  Maximize2,
  Highlighter,
  Palette,
  MapPin,
  MousePointer2,
  Grid3x3,
  Zap,
  Lock,
  Code2,
  Database,
  Cloud,
  Terminal,
  Cpu,
  Globe,
  Boxes,
  Braces,
  Layers,
  Binary,
  Server,
  Rss,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

/* =========================================================================
 * Magic UI — part3
 *
 * 10 个互不复用骨架的交互式迷你实现。
 * 关键约束：渲染路径里没有 Math.random / Date.now / window / document；
 * 随机与计时只发生在 useEffect / 事件回调里（本文件甚至不需要随机数）。
 * 所有 @keyframes 通过模块级 <style> 注入，避免改动 globals.css。
 * ========================================================================= */

/** 只含 ASCII 的全局关键帧，模块级单实例。 */
const MU_KEYFRAMES = `
@keyframes mu-glare-sweep {
  from { transform: translateX(-130%); }
  to   { transform: translateX(430%); }
}
@keyframes mu-globe-spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
}
@keyframes mu-pin-ring {
  0%   { transform: translate(-50%, -50%) scale(0.35); opacity: 0.9; }
  70%  { transform: translate(-50%, -50%) scale(1.1); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0; }
}
@keyframes mu-grid-breath {
  0%, 100% { opacity: 0.08; }
  50%      { opacity: 0.42; }
}
@keyframes mu-scan {
  from { background-position: 0 0; }
  to   { background-position: 0 64px; }
}
@keyframes mu-dash {
  from { transform: translateX(-28px); }
  to   { transform: translateX(96px); }
}
@keyframes mu-hex-flow {
  0%, 100% { opacity: 0.78; }
  50%      { opacity: 1; }
}
@keyframes mu-cloud-spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
}
`;

function MuKeyframes() {
  return <style dangerouslySetInnerHTML={{ __html: MU_KEYFRAMES }} />;
}

/** 规整 slider 回调值（Base UI 可能是 number 或 number[]）。 */
function muSliderValue(v: number | readonly number[], fallback: number): number {
  if (typeof v === "number") return v;
  if (Array.isArray(v) && typeof v[0] === "number") return v[0];
  return fallback;
}

/* ------------------------------------------------------------------ *
 * 1. glare-hover — 卡片 hover 时斜向眩光扫过，角度 / 颜色可切换
 * ------------------------------------------------------------------ */

const GLARE_COLORS: { id: string; label: string; css: string }[] = [
  { id: "white", label: "Pearl", css: "rgba(255,255,255,0.9)" },
  { id: "cyan", label: "Ice", css: "rgba(103,232,249,0.85)" },
  { id: "violet", label: "Nova", css: "rgba(167,139,250,0.85)" },
  { id: "amber", label: "Solar", css: "rgba(252,211,77,0.85)" },
];

const GLARE_ANGLES = [25, 54, 78];

function MuGlareHoverDemo() {
  const [angle, setAngle] = React.useState(54);
  const [colorId, setColorId] = React.useState("cyan");
  const [replay, setReplay] = React.useState(0);
  const color = GLARE_COLORS.find((c) => c.id === colorId) ?? GLARE_COLORS[0];

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="group flex h-[152px] overflow-hidden rounded-xl border bg-neutral-950">
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 90% at 12% 0%, rgba(56,189,248,0.22), transparent 58%), radial-gradient(120% 100% at 100% 100%, rgba(129,140,248,0.30), transparent 60%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative z-10 flex h-full flex-col justify-between p-3.5">
            <span className="w-fit rounded-full border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[9px] tracking-widest text-white/70">
              GLARE / HOVER
            </span>
            <div className="text-white">
              <p className="text-[13px] font-semibold leading-tight">Reflective Surface</p>
              <p className="mt-0.5 font-mono text-[10px] text-white/50">
                angle {angle}° · {color.label.toLowerCase()}
              </p>
            </div>
          </div>

          {/* 斜向眩光：hover 时随 group-hover 播放一次；replay 键重放 */}
          <div
            key={replay}
            className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100"
          >
            <div className="absolute inset-0 overflow-hidden" style={{ transform: `rotate(${angle}deg)` }}>
              <div
                className="absolute inset-y-[-60%] left-0 w-[42%] group-hover:animate-[mu-glare-sweep_1150ms_cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${color.css} 42%, rgba(255,255,255,0.95) 50%, ${color.css} 58%, transparent 100%)`,
                  filter: "blur(1.5px)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex w-[126px] shrink-0 flex-col justify-center gap-2.5 border-l border-neutral-800 bg-neutral-900/60 p-3">
          <div>
            <p className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-white/35">Angle</p>
            <div className="flex gap-1">
              {GLARE_ANGLES.map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => {
                    setAngle(a);
                    setReplay((r) => r + 1);
                  }}
                  className={cn(
                    "flex-1 rounded-md border px-1 py-1 font-mono text-[9px] transition-colors",
                    angle === a
                      ? "border-sky-400/50 bg-sky-400/15 text-sky-200"
                      : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/70",
                  )}
                >
                  {a}°
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-white/35">Glare</p>
            <div className="flex gap-1.5">
              {GLARE_COLORS.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-label={c.label}
                  onClick={() => {
                    setColorId(c.id);
                    setReplay((r) => r + 1);
                  }}
                  className={cn(
                    "h-4 w-4 rounded-full border transition-transform",
                    colorId === c.id ? "scale-110 border-white/80" : "border-white/20 hover:scale-105",
                  )}
                  style={{ backgroundColor: c.css }}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setReplay((r) => r + 1)}
            className="inline-flex items-center justify-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[9px] text-white/60 transition-colors hover:border-white/25 hover:text-white"
          >
            <RotateCcw className="h-2.5 w-2.5" /> replay sweep
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 2. globe — 纯 CSS 点阵地球，经线 / 纬线 + 自转 + 脉冲定位点
 * ------------------------------------------------------------------ */

const GLOBE_DOTS = Array.from({ length: 40 }, (_, i) => ({
  x: 6 + ((i % 10) * 9.6 + Math.floor(i / 10) * 2.4),
  y: 12 + (Math.floor(i / 10) * 25 + (i % 3) * 7),
  s: i % 7 === 0 ? 3 : 2,
}));

const GLOBE_TICKS = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);

const GLOBE_PINS = [
  { lat: -34, rot: 22, label: "Auckland" },
  { lat: 12, rot: 148, label: "Lagos" },
  { lat: 46, rot: 262, label: "Reykjavik" },
  { lat: -8, rot: 315, label: "Quito" },
];

function MuGlobeDemo() {
  const [active, setActive] = React.useState(GLOBE_PINS[1].label);

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="flex h-[168px] items-center justify-center gap-4 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 px-3">
        <div className="relative h-[150px] w-[116px] shrink-0">
          <div className="absolute left-0 right-0 top-0 text-center font-mono text-[8px] tracking-[0.25em] text-white/25">
            ORBIT VIEW
          </div>

          {/* 经线：竖直椭圆族 */}
          <div className="absolute left-1/2 top-[22px] h-[104px] w-[104px] -translate-x-1/2">
            <div className="absolute inset-0 rounded-full border border-sky-400/25" />
            <div className="absolute inset-y-0 left-1/2 w-[66px] -translate-x-1/2 rounded-full border border-sky-400/20" />
            <div className="absolute inset-y-0 left-1/2 w-[26px] -translate-x-1/2 rounded-full border border-sky-400/15" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-sky-400/45" />
          </div>

          {/* 纬线：水平椭圆族 */}
          <div className="absolute left-1/2 top-[22px] h-[104px] w-[104px] -translate-x-1/2">
            <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-sky-400/40" />
            <div className="absolute left-1/2 top-1/2 h-[30px] w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
            <div className="absolute left-1/2 top-1/2 h-[74px] w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/15" />
          </div>

          {/* 刻度环 */}
          <div className="absolute left-1/2 top-[26px] h-[96px] w-[96px] -translate-x-1/2">
            {GLOBE_TICKS.map((t) => (
              <span
                key={t}
                className="absolute left-1/2 top-1/2 h-px w-[3px] origin-left bg-sky-300/30"
                style={{ transform: `rotate(${t}deg) translateX(48px)` }}
              />
            ))}
          </div>

          {/* 点阵球面（自转） */}
          <div
            className="absolute left-1/2 top-[22px] h-[104px] w-[104px] -translate-x-1/2 animate-[mu-globe-spin_26s_linear_infinite] [transform-style:preserve-3d]"
          >
            {GLOBE_DOTS.map((d, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-sky-300/75"
                style={{
                  left: `${d.x}%`,
                  top: `${d.y}%`,
                  height: d.s,
                  width: d.s,
                  opacity: 0.22 + (i % 5) * 0.15,
                }}
              />
            ))}
          </div>

          {/* 脉冲定位标记（反向自转抵消球面旋转） */}
          <div className="absolute left-1/2 top-[22px] h-[104px] w-[104px] -translate-x-1/2">
            {GLOBE_PINS.map((p) => {
              const isActive = active === p.label;
              const topPct =
                50 - 46 * Math.sin((p.lat * Math.PI) / 180) * Math.cos((p.rot * Math.PI) / 180);
              return (
                <div
                  key={p.label}
                  className="absolute left-0 top-0 h-full w-full"
                  style={{
                    transform: `rotateY(${p.rot}deg)`,
                    animation: "mu-globe-spin 26s linear infinite reverse",
                  }}
                >
                  <button
                    type="button"
                    aria-label={p.label}
                    onMouseEnter={() => setActive(p.label)}
                    onFocus={() => setActive(p.label)}
                    className="absolute"
                    style={{ top: `${topPct}%`, left: "calc(50% - 5px)", transform: "translateY(-50%)" }}
                  >
                    <span
                      className={cn(
                        "absolute left-1/2 top-1/2 h-5 w-5 rounded-full border transition-colors",
                        isActive
                          ? "animate-[mu-pin-ring_1.6s_ease-out_infinite] border-emerald-300/70"
                          : "border-emerald-300/0",
                      )}
                      style={{ transform: "translate(-50%, -50%)" }}
                    />
                    <span
                      className={cn(
                        "relative block h-[7px] w-[7px] rounded-full transition-all",
                        isActive
                          ? "bg-emerald-300 shadow-[0_0_8px_2px_rgba(110,231,183,0.55)]"
                          : "bg-emerald-400/50",
                      )}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute bottom-[8px] left-1/2 h-[12px] w-[104px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-md" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">Live location</p>
          <p className="mt-1 flex items-center gap-1 truncate text-[13px] font-semibold text-white">
            <MapPin className="h-3 w-3 shrink-0 text-emerald-300" />
            {active}
          </p>
          <p className="mt-1 font-mono text-[10px] leading-relaxed text-white/40">
            点阵球面 · 26s 自转
            <br />
            hover 定位点切换地名
          </p>
          <div className="mt-2 flex gap-1">
            {GLOBE_PINS.map((p) => (
              <button
                key={p.label}
                type="button"
                aria-label={p.label}
                onClick={() => setActive(p.label)}
                onMouseEnter={() => setActive(p.label)}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  active === p.label ? "bg-emerald-300" : "bg-white/15 hover:bg-white/30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 3. glyph-matrix — 等宽字符矩阵 text-scramble，逐个落定
 * ------------------------------------------------------------------ */

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=<>/";
const GLYPH_WORDS = ["GLYPH MATRIX", "TEXT SCRAMBLE", "SETTLE DOWN", "MAGIC UI"];

function MuGlyphMatrixDemo() {
  const [display, setDisplay] = React.useState(GLYPH_WORDS[0]);
  const [locked, setLocked] = React.useState(GLYPH_WORDS[0].length);
  const [wordIndex, setWordIndex] = React.useState(0);
  const [pass, setPass] = React.useState(0);
  const target = GLYPH_WORDS[wordIndex];

  // 逐个落定
  React.useEffect(() => {
    let revealed = 0;
    let interval = 0;
    const reset = window.setTimeout(() => {
      setDisplay(target);
      setLocked(0);
      interval = window.setInterval(() => {
        revealed += 1;
        setLocked(revealed);
        if (revealed >= target.length) window.clearInterval(interval);
      }, 190);
    }, 0);
    return () => {
      window.clearTimeout(reset);
      if (interval) window.clearInterval(interval);
    };
  }, [target, pass]);

  // 未落定的字符持续跳变（随机性完全来自确定性索引，渲染只用 state）
  React.useEffect(() => {
    if (locked >= target.length) return;
    const id = window.setInterval(() => {
      setDisplay(
        target
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < locked) return ch;
            return GLYPHS[(i * 7 + pass * 5 + locked * 11) % GLYPHS.length];
          })
          .join(""),
      );
    }, 70);
    return () => window.clearInterval(id);
  }, [locked, target, pass]);

  const noise = Array.from({ length: 3 }, (_, r) => {
    const src = display.length > 0 ? display : target;
    let out = "";
    for (let i = 0; i < 30; i += 1) {
      const ch = src[(r * 6 + i) % src.length];
      out += ch === " " ? " " : GLYPHS[(i * 3 + r * 13 + pass * 7) % GLYPHS.length];
    }
    return out;
  });

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="h-[158px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-emerald-300/70">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            glyph-matrix
          </span>
          <span className="font-mono text-[9px] text-white/30">
            {Math.min(locked, target.length)}/{target.length} settled
          </span>
        </div>

        <div className="space-y-[3px] font-mono text-[10px] leading-none text-emerald-300/25">
          {noise.map((line, i) => (
            <p key={i} className="truncate tracking-[0.14em]">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-2 flex items-end justify-between gap-2">
          <p className="truncate font-mono text-[17px] font-bold leading-none tracking-[0.14em]">
            {display.split("").map((ch, i) => (
              <span
                key={i}
                className={cn(
                  "transition-colors duration-150",
                  i < locked ? "text-white" : "text-emerald-300/80",
                )}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </p>
          <button
            type="button"
            onClick={() => {
              setWordIndex((w) => (w + 1) % GLYPH_WORDS.length);
              setPass((p) => p + 1);
            }}
            className="inline-flex shrink-0 items-center gap-1 rounded-md border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 font-mono text-[9px] text-emerald-200 transition-colors hover:border-emerald-400/50 hover:text-emerald-100"
          >
            <RotateCcw className="h-2.5 w-2.5" /> scramble
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 4. grid-pattern — SVG 正交网格 + 呼吸方格 + 尺寸 / 线宽滑块
 * ------------------------------------------------------------------ */

const GRID_BREATH = Array.from({ length: 14 }, (_, i) => ({
  col: (i * 5) % 12,
  row: (i * 3) % 5,
  delay: (i % 6) * 0.42,
}));

function MuGridPatternDemo() {
  const rawId = React.useId();
  const patternId = `mu-grid-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const [cell, setCell] = React.useState(28);
  const [weight, setWeight] = React.useState(1);
  const [hover, setHover] = React.useState<number | null>(null);

  const cols = 12;
  const rows = 5;
  const stage = 140;

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="h-[164px] rounded-xl border bg-card p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <Grid3x3 className="h-3 w-3 text-primary" /> grid-pattern
          </span>
          <span className="font-mono text-[9px] text-muted-foreground">
            {cell}px · {weight.toFixed(1)}px
          </span>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-muted/20" style={{ height: stage }}>
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern
                id={patternId}
                width={cell}
                height={cell}
                patternUnits="userSpaceOnUse"
                x={weight / 2}
                y={weight / 2}
              >
                <path
                  d={`M ${cell} 0 L 0 0 0 ${cell}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={weight}
                  className="text-foreground/20"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>

          <div className="absolute inset-0">
            {GRID_BREATH.map((b, i) => (
              <div
                key={i}
                className="absolute rounded-[2px] bg-primary"
                style={{
                  left: b.col * cell + 1,
                  top: b.row * cell + 1,
                  width: Math.max(2, cell - 2),
                  height: Math.max(2, cell - 2),
                  animation: `mu-grid-breath 2.6s ease-in-out ${b.delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* hover 高亮覆盖层（按格子尺寸实时对齐） */}
          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
              gridTemplateRows: `repeat(${rows}, ${cell}px)`,
            }}
          >
            {Array.from({ length: cols * rows }, (_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`cell ${k + 1}`}
                onMouseEnter={() => setHover(k)}
                onMouseLeave={() => setHover((h) => (h === k ? null : h))}
                className={cn(
                  "rounded-[3px] border border-transparent transition-colors",
                  hover === k ? "border-primary/70 bg-primary/30" : "hover:bg-primary/10",
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-1.5 grid grid-cols-2 gap-3">
          <div>
            <div className="mb-0.5 flex justify-between text-[9px] text-muted-foreground">
              <span>格子尺寸</span>
              <span className="font-mono">{cell}</span>
            </div>
            <Slider
              value={[cell]}
              min={14}
              max={44}
              step={1}
              onValueChange={(v) => setCell(muSliderValue(v, 28))}
            />
          </div>
          <div>
            <div className="mb-0.5 flex justify-between text-[9px] text-muted-foreground">
              <span>线宽</span>
              <span className="font-mono">{weight.toFixed(1)}</span>
            </div>
            <Slider
              value={[weight]}
              min={0.5}
              max={3}
              step={0.1}
              onValueChange={(v) => setWeight(muSliderValue(v, 1))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 5. hero-video-dialog — 渐变量封面 + 动画弹出播放器对话框
 * ------------------------------------------------------------------ */

function MuHeroVideoDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(28);

  const total = 252;
  const shown = Math.round((progress / 100) * total);

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="h-[162px] overflow-hidden rounded-xl border bg-card p-3">
        <div className="flex h-full gap-3">
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setPlaying(true);
            }}
            className="group relative w-[46%] shrink-0 overflow-hidden rounded-lg border text-left"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.9), rgba(14,165,233,0.75) 45%, rgba(15,23,42,0.95))",
            }}
          >
            <span className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(115deg,rgba(255,255,255,.75)_1px,transparent_1px)] [background-size:16px_16px]" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-sm transition-transform group-hover:scale-110">
                <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
              </span>
            </span>
            <span className="absolute bottom-1.5 right-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[8px] text-white/90">
              04:12
            </span>
          </button>

          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                Featured film
              </p>
              <p className="mt-1 text-[13px] font-semibold leading-tight text-foreground">
                Behind the Interface
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">
                点击封面播放按钮，弹出带 scale / fade 动画的视频对话框。
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary">
                HD 1080p
              </span>
              <span className="font-mono">dialog / modal</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="w-[94%] overflow-hidden rounded-lg border bg-neutral-950 shadow-2xl"
              initial={{ scale: 0.84, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 6 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
            >
              <div className="relative h-[86px] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(56,189,248,0.35), rgba(99,102,241,0.45) 50%, rgba(2,6,23,0.95))",
                  }}
                />
                <div className="absolute inset-0 animate-[mu-scan_3.2s_linear_infinite] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:100%_4px]" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close video"
                  className="absolute right-1.5 top-1.5 rounded-md border border-white/15 bg-black/40 p-1 text-white/70 transition-colors hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    aria-label={playing ? "Pause" : "Play"}
                    onClick={() => setPlaying((p) => !p)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
                  </button>
                </div>
                <span className="absolute bottom-1.5 left-2 font-mono text-[8px] tracking-widest text-white/50">
                  {playing ? "NOW PLAYING" : "PAUSED"}
                </span>
              </div>

              <div className="space-y-1.5 p-2.5">
                <div className="relative h-1 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-sky-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                  {playing && (
                    <div
                      className="absolute inset-y-0 left-0 w-6 animate-[mu-dash_1.8s_linear_infinite] bg-white/30"
                      style={{ marginLeft: `${progress}%` }}
                    />
                  )}
                </div>
                <div className="flex items-center justify-between text-white/60">
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="h-3 w-3" />
                    <SkipForward className="h-3 w-3" />
                    <span className="font-mono text-[9px]">
                      0:{String(shown % 60).padStart(2, "0")} / 4:12
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={progress}
                      onChange={(e) => setProgress(Number(e.target.value))}
                      className="h-1 w-16 accent-sky-400"
                      aria-label="Seek"
                    />
                    <Maximize2 className="h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 6. hexagon-pattern — 蜂窝图案：描边流光 + hover 高亮 + 尺寸滑块
 * ------------------------------------------------------------------ */

function MuHexagonPatternDemo() {
  const rawId = React.useId();
  const suffix = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const patternId = `mu-hex-${suffix}`;
  const gradId = `mu-hexgrad-${suffix}`;
  const [size, setSize] = React.useState(26);
  const [hover, setHover] = React.useState<number | null>(null);

  const stepX = size;
  const stepY = size * 1.732;
  const cols = Math.ceil(344 / stepX) + 1;
  const rows = Math.ceil(104 / stepY) + 1;

  const hexPoints = React.useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 180) * (60 * i + 30);
        return `${(size * 0.52 * Math.cos(a)).toFixed(2)},${(size * 0.52 * Math.sin(a)).toFixed(2)}`;
      }).join(" "),
    [size],
  );

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="h-[160px] rounded-xl border bg-card p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <span className="inline-block h-3 w-3 bg-primary/60 [clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0_50%)]" />
            hexagon-pattern
          </span>
          <span className="font-mono text-[9px] text-muted-foreground">
            r={size} · {hover === null ? "hover a cell" : `cell #${hover + 1}`}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-neutral-950" style={{ height: 104 }}>
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="45%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <pattern id={patternId} width={stepX} height={stepY} patternUnits="userSpaceOnUse">
                <g stroke={`url(#${gradId})`} strokeWidth="1.1" fill="none">
                  <polygon points={hexPoints} transform={`translate(${stepX / 2} 0)`} />
                  <polygon points={hexPoints} transform={`translate(0 ${stepY / 2})`} />
                  <polygon points={hexPoints} transform={`translate(${stepX} ${stepY / 2})`} />
                  <polygon points={hexPoints} transform={`translate(${stepX / 2} ${stepY})`} />
                </g>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#${patternId})`}
              className="animate-[mu-hex-flow_5s_ease-in-out_infinite]"
            />
          </svg>

          <div
            className="absolute inset-0 grid"
            style={{
              gridTemplateColumns: `repeat(${cols}, ${stepX}px)`,
              gridTemplateRows: `repeat(${rows}, ${stepY}px)`,
            }}
          >
            {Array.from({ length: cols * rows }, (_, k) => (
              <button
                key={k}
                type="button"
                aria-label={`hex cell ${k + 1}`}
                onMouseEnter={() => setHover(k)}
                onMouseLeave={() => setHover((h) => (h === k ? null : h))}
                className="transition-colors"
                style={{
                  clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)",
                  backgroundColor: hover === k ? "rgba(34,211,238,0.3)" : "transparent",
                  boxShadow: hover === k ? "inset 0 0 12px rgba(34,211,238,0.5)" : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-1.5 flex items-center gap-3">
          <span className="shrink-0 text-[9px] text-muted-foreground">六边形尺寸</span>
          <Slider
            value={[size]}
            min={16}
            max={40}
            step={1}
            onValueChange={(v) => setSize(muSliderValue(v, 26))}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 7. highlighter — 马克笔高亮从左到右扫过（宽度动画）
 * ------------------------------------------------------------------ */

const HL_COLORS = [
  { id: "yellow", label: "Yellow", css: "rgba(250,204,21,0.6)" },
  { id: "green", label: "Green", css: "rgba(74,222,128,0.55)" },
  { id: "pink", label: "Pink", css: "rgba(244,114,182,0.55)" },
  { id: "sky", label: "Sky", css: "rgba(56,189,248,0.5)" },
];

function MuHighlighterDemo() {
  const [colorId, setColorId] = React.useState("yellow");
  const [text, setText] = React.useState("Magic UI ships 70+ animated blocks");
  const [runId, setRunId] = React.useState(0);
  const [swept, setSwept] = React.useState(false);
  const color = HL_COLORS.find((c) => c.id === colorId) ?? HL_COLORS[0];

  // 挂载 / 重播后下一帧把宽度推到 100%，触发从左到右的宽度过渡
  React.useEffect(() => {
    let sweep = 0;
    const start = window.setTimeout(() => {
      setSwept(false);
      sweep = window.setTimeout(() => setSwept(true), 30);
    }, 0);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(sweep);
    };
  }, [runId]);

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="h-[160px] rounded-xl border bg-card p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <Highlighter className="h-3 w-3 text-primary" /> highlighter
          </span>
          <span className="flex items-center gap-1.5">
            <Palette className="h-3 w-3 text-muted-foreground" />
            {HL_COLORS.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-label={c.label}
                onClick={() => {
                  setColorId(c.id);
                  setRunId((r) => r + 1);
                }}
                className={cn(
                  "h-3.5 w-3.5 rounded-full border transition-transform",
                  colorId === c.id ? "scale-110 border-foreground/60" : "border-border hover:scale-105",
                )}
                style={{ backgroundColor: c.css }}
              />
            ))}
          </span>
        </div>

        <div className="flex min-h-[70px] items-center rounded-lg bg-muted/30 px-3 py-3">
          <p className="text-[15px] font-medium leading-snug text-foreground">
            <span className="relative inline-block px-1">
              <span
                className="absolute bottom-[2px] top-[6px] -rotate-1 rounded-[3px]"
                style={{
                  width: swept ? "100%" : "0%",
                  backgroundColor: color.css,
                  transition: "width 900ms cubic-bezier(0.25, 0.9, 0.3, 1)",
                }}
              />
              <span className="relative">{text || "type something…"}</span>
            </span>
          </p>
        </div>

        <div className="mt-1.5 flex items-center gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="改文字…"
            aria-label="Highlighted text"
            className="h-6 min-w-0 flex-1 rounded-md border bg-background px-2 text-[10px] outline-none focus-visible:border-ring"
          />
          <button
            type="button"
            onClick={() => setRunId((r) => r + 1)}
            className="inline-flex h-6 shrink-0 items-center gap-1 rounded-md border bg-background px-2 text-[9px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="h-2.5 w-2.5" /> 重播
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 8. hyper-text — 逐字符乱码跳变后收敛，带颜色闪烁
 * ------------------------------------------------------------------ */

const HYPER_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%*+=<>";
const HYPER_WORDS = ["HYPER TEXT", "SCRAMBLE FX", "MAGIC MOTION", "SIGNAL LOCK"];
const HYPER_SLOTS = 16;

function MuHyperTextDemo() {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const word = HYPER_WORDS[wordIndex].slice(0, HYPER_SLOTS);

  React.useEffect(() => {
    const id = window.setInterval(() => setTick((t) => (t + 1) % 360), 150);
    return () => window.clearInterval(id);
  }, []);

  // 用 tick 的确定性索引选出一小簇「乱码位」，渲染阶段不做任何随机
  const solidGlitch: boolean[] = Array.from({ length: word.length }, () => false);
  const ghostGlitch: boolean[] = Array.from({ length: word.length }, () => false);
  if (active) {
    for (let k = 0; k < 4; k += 1) {
      const a = (tick * 3 + k * 5 + wordIndex * 2) % word.length;
      solidGlitch[a] = true;
      const b = (tick * 5 + k * 7 + 1) % word.length;
      ghostGlitch[b] = true;
    }
  }

  const renderWord = (glitch: boolean[], seed: number, tone: "solid" | "ghost") =>
    word.split("").map((ch, i) => {
      if (ch === " ") return <span key={`${tone}-${i}`} className="inline-block w-2" />;
      const bad = glitch[i];
      const glyph = bad ? HYPER_CHARS[(i * 7 + seed * 11) % HYPER_CHARS.length] : ch;
      return (
        <span
          key={`${tone}-${i}`}
          className={cn(
            "inline-block transition-colors duration-100",
            bad
              ? "text-fuchsia-500"
              : tone === "ghost"
                ? "text-primary/25"
                : "text-foreground",
          )}
        >
          {glyph}
        </span>
      );
    });

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[150px] flex-col justify-between overflow-hidden rounded-xl border bg-card p-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            hyper-text / {active ? "scrambling" : "idle"}
          </span>
          <span className="font-mono text-[9px] text-muted-foreground">hover 乱码 · click 换词</span>
        </div>

        <button
          type="button"
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onClick={() => setWordIndex((w) => (w + 1) % HYPER_WORDS.length)}
          className="relative block w-full text-left"
        >
          <span className="absolute inset-0 flex items-center font-mono text-[22px] font-bold tracking-[0.08em] opacity-45 blur-[0.6px]">
            {renderWord(ghostGlitch, tick, "ghost")}
          </span>
          <span className="relative flex items-center font-mono text-[22px] font-bold tracking-[0.08em]">
            {renderWord(solidGlitch, tick + 3, "solid")}
          </span>
        </button>

        <div className="flex items-center gap-2">
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-[width] duration-200"
              style={{ width: `${((tick % 20) + 1) * 5}%` }}
            />
          </div>
          {HYPER_WORDS.map((w, i) => (
            <span
              key={w}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === wordIndex ? "bg-primary" : "bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 9. icon-cloud — CSS 3D 球面图标云：自转 + 鼠标视差 + hover 名称
 * ------------------------------------------------------------------ */

type CloudIcon = {
  label: string;
  color: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const CLOUD_ICONS: CloudIcon[] = [
  { label: "Database", color: "text-emerald-400", Icon: Database },
  { label: "Terminal", color: "text-sky-400", Icon: Terminal },
  { label: "Cpu", color: "text-violet-400", Icon: Cpu },
  { label: "Code2", color: "text-amber-400", Icon: Code2 },
  { label: "Cloud", color: "text-cyan-400", Icon: Cloud },
  { label: "Lock", color: "text-rose-400", Icon: Lock },
  { label: "Zap", color: "text-yellow-400", Icon: Zap },
  { label: "Globe", color: "text-blue-400", Icon: Globe },
  { label: "Boxes", color: "text-orange-400", Icon: Boxes },
  { label: "Braces", color: "text-lime-400", Icon: Braces },
  { label: "Layers", color: "text-fuchsia-400", Icon: Layers },
  { label: "Binary", color: "text-teal-400", Icon: Binary },
  { label: "Server", color: "text-indigo-400", Icon: Server },
  { label: "Rss", color: "text-pink-400", Icon: Rss },
];

/** 确定性球面螺旋分布（Fibonacci sphere），无随机。 */
const CLOUD_NODES = CLOUD_ICONS.map((icon, i) => {
  const y = 1 - (i / (CLOUD_ICONS.length - 1)) * 2;
  const radius = Math.sqrt(Math.max(0, 1 - y * y));
  const theta = i * 2.399963229728653;
  return { icon, x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
});

function MuIconCloudDemo() {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [hoverLabel, setHoverLabel] = React.useState<string | null>(null);
  const radius = 44;

  return (
    <div className="relative overflow-hidden text-xs">
      <MuKeyframes />
      <div className="flex h-[170px] items-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 px-2">
        <div
          className="relative flex-1 [perspective:620px]"
          onMouseMove={(e) => {
            const box = e.currentTarget.getBoundingClientRect();
            setTilt({
              x: ((e.clientY - box.top) / Math.max(1, box.height) - 0.5) * -16,
              y: ((e.clientX - box.left) / Math.max(1, box.width) - 0.5) * 24,
            });
          }}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <div
            className="relative mx-auto h-[140px] w-[130px] transition-transform duration-300 ease-out [transform-style:preserve-3d]"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="absolute left-1/2 top-1/2 h-0 w-0 animate-[mu-cloud-spin_22s_linear_infinite] [transform-style:preserve-3d]">
              {CLOUD_NODES.map((n, i) => (
                <div
                  key={n.icon.label}
                  className="absolute left-0 top-0 [transform-style:preserve-3d]"
                  style={{
                    transform: `translate3d(${n.x * radius}px, ${n.y * radius}px, ${n.z * radius}px)`,
                  }}
                >
                  <div
                    className="[transform-style:preserve-3d]"
                    style={{ animation: `mu-cloud-spin 22s linear infinite reverse ${i * 0.9}s` }}
                  >
                    <button
                      type="button"
                      aria-label={n.icon.label}
                      onMouseEnter={() => setHoverLabel(n.icon.label)}
                      onMouseLeave={() => setHoverLabel((l) => (l === n.icon.label ? null : l))}
                      onFocus={() => setHoverLabel(n.icon.label)}
                      onBlur={() => setHoverLabel(null)}
                      className="-translate-x-1/2 -translate-y-1/2 rounded-md border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm transition-transform duration-200 hover:scale-[1.35] hover:border-white/30"
                    >
                      <n.icon.Icon className={cn("h-3.5 w-3.5", n.icon.color)} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
          </div>
        </div>

        <div className="w-[112px] shrink-0 pl-1">
          <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">Icon cloud</p>
          <p className="mt-1 truncate text-[12px] font-semibold text-white">
            {hoverLabel ?? "14 nodes"}
          </p>
          <p className="mt-1 font-mono text-[9px] leading-relaxed text-white/40">
            tilt {tilt.y.toFixed(0)}° / {tilt.x.toFixed(0)}°
            <br />
            Fibonacci 球面分布
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {CLOUD_ICONS.slice(0, 6).map((c) => (
              <span
                key={c.label}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  hoverLabel === c.label ? "bg-white" : "bg-white/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 10. interactive-grid-pattern — 鼠标点亮格子 + 邻格跟随 + 计数 / 重置
 * ------------------------------------------------------------------ */

const IGRID_COLS = 12;
const IGRID_ROWS = 5;
const IGRID_TOTAL = IGRID_COLS * IGRID_ROWS;

function MuInteractiveGridPatternDemo() {
  const [hover, setHover] = React.useState<number | null>(null);
  const [lit, setLit] = React.useState<number[]>([]);
  const litSet = React.useMemo(() => new Set(lit), [lit]);

  const neighbors: number[] = [];
  if (hover !== null) {
    const hx = hover % IGRID_COLS;
    const hy = Math.floor(hover / IGRID_COLS);
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        const dist = Math.abs(dx) + Math.abs(dy);
        if (dist > 2) continue;
        const nx = hx + dx;
        const ny = hy + dy;
        if (nx < 0 || ny < 0 || nx >= IGRID_COLS || ny >= IGRID_ROWS) continue;
        neighbors.push(ny * IGRID_COLS + nx);
      }
    }
  }

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="h-[164px] rounded-xl border bg-card p-2.5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <MousePointer2 className="h-3 w-3 text-primary" /> interactive-grid
          </span>
          <span className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9px] text-primary">
              已点亮 {lit.length} 格
            </span>
            <button
              type="button"
              onClick={() => setLit([])}
              className="inline-flex items-center gap-1 rounded-md border bg-background px-1.5 py-0.5 text-[9px] text-muted-foreground transition-colors hover:text-foreground"
            >
              <RotateCcw className="h-2.5 w-2.5" /> 重置
            </button>
          </span>
        </div>

        <div className="rounded-lg border bg-muted/20 p-1.5">
          <div
            className="grid gap-[3px]"
            style={{ gridTemplateColumns: `repeat(${IGRID_COLS}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: IGRID_TOTAL }, (_, k) => {
              const order = neighbors.indexOf(k);
              const isHover = hover === k;
              const isLit = litSet.has(k);
              const nearby = !isHover && order >= 0;
              return (
                <button
                  key={k}
                  type="button"
                  aria-label={`grid ${k + 1}`}
                  onMouseEnter={() => {
                    setHover(k);
                    setLit((prev) => (prev.includes(k) ? prev : [...prev, k]));
                  }}
                  onMouseLeave={() => setHover((h) => (h === k ? null : h))}
                  onClick={() =>
                    setLit((prev) => (prev.includes(k) ? prev.filter((v) => v !== k) : [...prev, k]))
                  }
                  className={cn(
                    "h-[13px] rounded-[3px] border transition-all duration-150",
                    isHover
                      ? "border-primary bg-primary/70"
                      : isLit
                        ? "border-primary/40 bg-primary/45"
                        : nearby
                          ? "border-primary/25 bg-primary/20"
                          : "border-border bg-background",
                  )}
                  style={{
                    opacity: isHover ? 1 : isLit ? 0.78 : nearby ? 0.6 - Math.max(0, order - 1) * 0.18 : 1,
                    transform: isHover ? "scale(1.12)" : "scale(1)",
                  }}
                />
              );
            })}
          </div>
        </div>

        <p className="mt-1.5 font-mono text-[9px] text-muted-foreground">
          鼠标经过自动点亮并带相邻 1~2 格透明跟随；点击可切换单格。
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * 导出契约（key 必须与 componentKey 完全一致）
 * ------------------------------------------------------------------ */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-glare-hover-demo": MuGlareHoverDemo,
  "magicui-globe-demo": MuGlobeDemo,
  "magicui-glyph-matrix-demo": MuGlyphMatrixDemo,
  "magicui-grid-pattern-demo": MuGridPatternDemo,
  "magicui-hero-video-dialog-demo": MuHeroVideoDialogDemo,
  "magicui-hexagon-pattern-demo": MuHexagonPatternDemo,
  "magicui-highlighter-demo": MuHighlighterDemo,
  "magicui-hyper-text-demo": MuHyperTextDemo,
  "magicui-icon-cloud-demo": MuIconCloudDemo,
  "magicui-interactive-grid-pattern-demo": MuInteractiveGridPatternDemo,
};
