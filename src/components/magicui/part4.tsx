"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Image as ImageIcon,
  LayoutGrid,
  MessageCircle,
  Minus,
  Music,
  Pause,
  Play,
  Plus,
  Wifi,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Shared deterministic constants (no Math.random on the render path)  */
/* ------------------------------------------------------------------ */

type MeteorSpec = {
  left: number;
  delay: number;
  duration: number;
  size: number;
};

/** Fixed meteor field: position/delay/duration are derived from the index only. */
const METEORS: MeteorSpec[] = Array.from({ length: 12 }, (_, i) => ({
  left: (i * 8.3) % 88,
  delay: (i * 0.41) % 3.6,
  duration: 1.5 + ((i * 7) % 9) / 10,
  size: 1.2 + ((i * 3) % 5) / 6,
}));

/** Bar heights for the "photos" screen miniature. */
const ARCHIVE_BARS: number[] = [34, 52, 41, 66, 47, 72, 38, 58];

const SPARK_COLORS: string[] = ["#60a5fa", "#a78bfa", "#f472b6", "#34d399", "#fbbf24"];

/* ------------------------------------------------------------------ */
/* 1. Interactive Hover Button                                         */
/* ------------------------------------------------------------------ */

function MuInteractiveHoverButtonDemo() {
  const [hovering, setHovering] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[130px] flex-col items-center justify-center gap-2.5">
        <button
          type="button"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onMouseMove={handleMove}
          className={cn(
            "group relative isolate w-[228px] overflow-hidden rounded-full border px-5 py-3",
            "transition-colors duration-500",
            hovering ? "border-primary/60" : "border-border bg-background",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute left-0 top-0 -z-10 h-2 w-2 rounded-full bg-primary",
              "transition-transform ease-out",
              hovering ? "duration-500" : "duration-300",
            )}
            style={{
              transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${hovering ? 140 : 0})`,
            }}
          />
          <span className="flex items-center justify-center gap-1.5">
            <span
              className={cn(
                "font-semibold tracking-wide transition-colors duration-500",
                hovering ? "text-primary-foreground" : "text-foreground",
              )}
            >
              Hover Me
            </span>
            <ArrowRight
              className={cn(
                "h-3.5 w-3.5 transition-all duration-500",
                hovering
                  ? "translate-x-0 opacity-100 text-primary-foreground"
                  : "-translate-x-2 opacity-0 text-primary",
              )}
            />
          </span>
        </button>
        <p className="font-mono text-[10px] text-muted-foreground">
          circle blooms from {Math.round(pos.x)}, {Math.round(pos.y)}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 2. iPhone                                                           */
/* ------------------------------------------------------------------ */

type PhoneAppId = "home" | "chat" | "photos" | "music";

const PHONE_TABS: { id: PhoneAppId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "home", label: "Home", icon: LayoutGrid },
  { id: "chat", label: "Chat", icon: MessageCircle },
  { id: "photos", label: "Photos", icon: ImageIcon },
  { id: "music", label: "Music", icon: Music },
];

function MuIphoneDemo() {
  const [app, setApp] = React.useState<PhoneAppId>("home");
  const [islandPing, setIslandPing] = React.useState(false);
  const activeIndex = PHONE_TABS.findIndex((tab) => tab.id === app);

  const flashIsland = () => {
    setIslandPing(true);
    window.setTimeout(() => setIslandPing(false), 420);
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[176px] items-center justify-center gap-5">
        <div className="relative h-[168px] w-[86px] shrink-0 rounded-[22px] border-[3px] border-neutral-800 bg-neutral-950 p-[3px] shadow-lg">
          {/* side buttons */}
          <span className="absolute -left-[5px] top-9 h-5 w-[3px] rounded-l-sm bg-neutral-700" />
          <span className="absolute -left-[5px] top-[62px] h-5 w-[3px] rounded-l-sm bg-neutral-700" />
          <button
            type="button"
            onClick={flashIsland}
            aria-label="Side button"
            className="absolute -right-[5px] top-[46px] h-8 w-[3px] rounded-r-sm bg-neutral-700 transition-colors hover:bg-primary"
          />

          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-neutral-900">
            <div className="absolute left-1/2 top-[5px] z-20 h-[9px] w-[28px] -translate-x-1/2 rounded-full bg-black">
              <span
                className={cn(
                  "absolute right-[3px] top-1/2 h-[3px] w-[3px] -translate-y-1/2 rounded-full bg-neutral-600 transition-all",
                  islandPing && "bg-primary shadow-[0_0_5px_2px_rgba(59,130,246,0.7)]",
                )}
              />
            </div>

            {/* status bar */}
            <div className="relative z-10 flex items-center justify-between px-2 pt-[6px] text-[6px] font-medium text-white/90">
              <span className="font-mono tracking-tight">9:41</span>
              <span className="flex items-center gap-[3px]">
                <Wifi className="h-[6px] w-[6px]" />
                <span className="flex h-[5px] w-[9px] items-center rounded-[1px] border border-white/70 p-[1px]">
                  <span className="h-full w-2/3 rounded-[1px] bg-white" />
                </span>
              </span>
            </div>

            {/* app content */}
            <div className="relative mt-[7px] h-[86px] px-2">
              <AnimatePresence mode="wait">
                {app === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-1.5"
                  >
                    <p className="text-[8px] font-semibold text-white/90">Good morning</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {["Notes", "Wallet", "Maps", "Clock"].map((name, i) => (
                        <div
                          key={name}
                          className="flex flex-col gap-1 rounded-md bg-white/[0.06] p-1.5"
                          style={{ background: `linear-gradient(140deg, ${SPARK_COLORS[i]}33, rgba(255,255,255,0.04))` }}
                        >
                          <span
                            className="h-3.5 w-3.5 rounded-[5px]"
                            style={{ backgroundColor: SPARK_COLORS[i] }}
                          />
                          <span className="text-[6px] text-white/70">{name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {app === "chat" && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-1"
                  >
                    <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-white/10 px-1.5 py-1 text-[6px] leading-tight text-white/85">
                      Ship the glass UI tonight?
                    </div>
                    <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-primary px-1.5 py-1 text-[6px] leading-tight text-primary-foreground">
                      Already deployed 🚀
                    </div>
                    <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-white/10 px-1.5 py-1 text-[6px] leading-tight text-white/85">
                      Island ping received.
                    </div>
                  </motion.div>
                )}

                {app === "photos" && (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-2"
                  >
                    <div className="grid grid-cols-4 gap-1">
                      {SPARK_COLORS.map((color) => (
                        <span
                          key={color}
                          className="h-6 rounded-[4px]"
                          style={{ background: `linear-gradient(150deg, ${color}, ${color}22)` }}
                        />
                      ))}
                    </div>
                    <div className="flex h-9 items-end gap-[2px]">
                      {ARCHIVE_BARS.map((height, i) => (
                        <span
                          key={i}
                          className="flex-1 rounded-t-[2px] bg-white/25"
                          style={{ height: `${height}%`, backgroundColor: SPARK_COLORS[i % SPARK_COLORS.length] }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {app === "music" && (
                  <motion.div
                    key="music"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-9 w-9 rounded-md bg-gradient-to-br from-fuchsia-500 to-sky-400" />
                      <span className="space-y-1">
                        <span className="block text-[7px] font-semibold text-white/90">Kinetic Drift</span>
                        <span className="block text-[6px] text-white/50">Magic UI · Single</span>
                      </span>
                    </div>
                    <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/15">
                      <span className="block h-full w-2/5 rounded-full bg-white/80" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* tab bar */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-around border-t border-white/10 bg-black/50 px-1 py-[5px] backdrop-blur-sm">
              {PHONE_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === app;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setApp(tab.id)}
                    aria-label={tab.label}
                    className={cn(
                      "flex flex-col items-center gap-[2px] rounded-md px-1 py-[2px] transition-colors",
                      isActive ? "text-primary" : "text-white/45 hover:text-white/80",
                    )}
                  >
                    <Icon className="h-[9px] w-[9px]" />
                    <span className="text-[5px] leading-none">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-[130px] space-y-2">
          <p className="text-[11px] font-semibold text-foreground">iPhone 16 Pro</p>
          <p className="text-[10px] leading-relaxed text-muted-foreground">
            Switch apps from the tab bar, or press the side button to ping the Dynamic Island.
          </p>
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="outline"
              className="h-6 px-2 text-[10px]"
              onClick={() => setApp(PHONE_TABS[(activeIndex + 1) % PHONE_TABS.length].id)}
            >
              Next app
            </Button>
            <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]" onClick={flashIsland}>
              Side button
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Kinetic Text                                                     */
/* ------------------------------------------------------------------ */

const KINETIC_WORD = "KINETIC";

function MuKineticTextDemo() {
  const [offset, setOffset] = React.useState<number | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setOffset(Math.min(Math.max(ratio, 0), 1));
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[140px] flex-col items-center justify-center gap-4">
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => setOffset(null)}
          className="flex cursor-crosshair select-none justify-center px-2 font-black tracking-tight"
        >
          {KINETIC_WORD.split("").map((char, i) => {
            const center = i / (KINETIC_WORD.length - 1);
            const distance = offset === null ? 0 : center - offset;
            const shiftY = distance * 20;
            const tilt = distance * 34;
            const weight = offset === null ? 700 : Math.round(900 - Math.abs(distance) * 260);
            return (
              <span
                key={`${char}-${i}`}
                className="inline-block text-[30px] leading-none text-foreground transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: `translateY(${shiftY.toFixed(2)}px) rotate(${tilt.toFixed(2)}deg)`,
                  fontWeight: weight,
                  color:
                    offset === null
                      ? undefined
                      : `hsl(${262 - Math.abs(distance) * 80} 85% ${62 - Math.abs(distance) * 16}%)`,
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <span className="font-mono">{offset === null ? "idle" : `${Math.round(offset * 100)}%`}</span>
          <span className="hidden h-1 w-24 overflow-hidden rounded-full bg-muted sm:block">
            <span
              className="block h-full rounded-full bg-primary transition-all duration-150"
              style={{ width: `${(offset ?? 0) * 100}%` }}
            />
          </span>
          <span>move the cursor sideways</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Lens                                                             */
/* ------------------------------------------------------------------ */

const LENS_FACTORS: number[] = [1.6, 2.4, 3.4];

const LENS_TILES: { top: number; left: number; size: number; color: string }[] = [
  { top: 10, left: 12, size: 34, color: "#6366f1" },
  { top: 52, left: 46, size: 26, color: "#ec4899" },
  { top: 26, left: 74, size: 30, color: "#22d3ee" },
  { top: 78, left: 22, size: 22, color: "#f59e0b" },
];

function MuLensDemo() {
  const [lens, setLens] = React.useState<{ x: number; y: number } | null>(null);
  const [factorIndex, setFactorIndex] = React.useState(0);
  const factor = LENS_FACTORS[factorIndex];
  const size = 76;

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setLens({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[168px] flex-col items-center justify-center gap-2">
        <div
          onMouseMove={handleMove}
          onMouseLeave={() => setLens(null)}
          className="relative h-[108px] w-[228px] cursor-none overflow-hidden rounded-xl border border-neutral-800"
          style={{
            backgroundColor: "#0b1020",
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          {/* magnified layer */}
          <div
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{
              transformOrigin: lens ? `${lens.x}px ${lens.y}px` : "center",
              transform: `scale(${lens ? factor : 1})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: "#0b1020",
                backgroundImage:
                  "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            {LENS_TILES.map((tile) => (
              <span
                key={tile.color}
                className="absolute rounded-md"
                style={{
                  top: tile.top,
                  left: tile.left,
                  width: tile.size,
                  height: tile.size,
                  background: `linear-gradient(150deg, ${tile.color}, ${tile.color}22)`,
                }}
              />
            ))}
            <span className="absolute bottom-2 left-3 text-[11px] font-bold tracking-[0.24em] text-white/80">
              MAGNIFY
            </span>
            <span className="absolute right-3 top-2 font-mono text-[9px] text-primary">lens.tsx</span>
          </div>

          {/* lens glass */}
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute z-20 rounded-full border-2 border-white/75",
              "shadow-[0_0_0_2px_rgba(15,23,42,0.55),0_10px_24px_-6px_rgba(0,0,0,0.75)]",
              "transition-opacity duration-200",
              lens ? "opacity-100" : "opacity-0",
            )}
            style={{
              width: size,
              height: size,
              left: (lens?.x ?? 0) - size / 2,
              top: (lens?.y ?? 0) - size / 2,
              background:
                "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.45), rgba(255,255,255,0.06) 42%, transparent 62%)",
            }}
          >
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-neutral-950/85 px-2 py-[1px] font-mono text-[9px] text-white/85">
              {factor.toFixed(1)}×
            </span>
          </div>

          {!lens && (
            <span className="absolute inset-0 z-10 flex items-center justify-center text-[10px] text-white/60">
              hover to inspect
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            size="sm"
            variant="outline"
            className="h-6 w-6 p-0"
            aria-label="Zoom out"
            onClick={() => setFactorIndex((i) => (i - 1 + LENS_FACTORS.length) % LENS_FACTORS.length)}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="font-mono text-[10px] text-muted-foreground">{factor.toFixed(1)}× zoom</span>
          <Button
            size="sm"
            variant="outline"
            className="h-6 w-6 p-0"
            aria-label="Zoom in"
            onClick={() => setFactorIndex((i) => (i + 1) % LENS_FACTORS.length)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Light Rays                                                       */
/* ------------------------------------------------------------------ */

function MuLightRaysDemo() {
  const [fromTop, setFromTop] = React.useState(true);

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`
        @keyframes mu-ray-sway {
          0%, 100% { transform: translate(-50%, -50%) rotate(-16deg) scaleY(1); }
          50% { transform: translate(-50%, -50%) rotate(18deg) scaleY(1.06); }
        }
        @keyframes mu-ray-breathe {
          0%, 100% { opacity: .5; }
          50% { opacity: .95; }
        }
      `}</style>
      <div className="relative h-[160px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <div
          className="absolute left-1/2 h-[560px] w-[560px]"
          style={{
            top: fromTop ? "-300px" : "50%",
            background:
              "conic-gradient(from 180deg at 50% 50%, transparent 0deg, rgba(125,211,252,0.85) 12deg, transparent 26deg, transparent 48deg, rgba(196,181,253,0.8) 60deg, transparent 74deg, transparent 96deg, rgba(244,114,182,0.7) 110deg, transparent 124deg, transparent 156deg, rgba(125,211,252,0.6) 168deg, transparent 182deg)",
            filter: "blur(9px)",
            transform: "translate(-50%, -50%)",
            animation: "mu-ray-sway 7s ease-in-out infinite, mu-ray-breathe 4.5s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_18%,rgba(5,5,5,0.92)_78%)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-1.5">
          <span className="text-lg font-semibold tracking-tight text-white">Light Rays</span>
          <span className="text-[10px] text-white/55">volumetric beams behind your hero</span>
          <button
            type="button"
            onClick={() => setFromTop((value) => !value)}
            className="mt-1 rounded-full border border-white/25 bg-white/10 px-3 py-[3px] text-[10px] font-medium text-white/90 transition-colors hover:bg-white/20"
          >
            Source: {fromTop ? "top" : "center"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 6. Line Shadow Text                                                 */
/* ------------------------------------------------------------------ */

const SHADOW_DIRECTIONS: { id: string; label: string; step: number; color: string; sweep: boolean }[] = [
  { id: "right", label: "↘ right", step: 1, color: "rgba(99,102,241,0.85)", sweep: false },
  { id: "left", label: "↙ left", step: -1, color: "rgba(236,72,153,0.85)", sweep: false },
  { id: "sweep", label: "⇢ sweep", step: 1, color: "rgba(56,189,248,0.85)", sweep: true },
];

function MuLineShadowTextDemo() {
  const [dirIndex, setDirIndex] = React.useState(0);
  const [hovering, setHovering] = React.useState(false);
  const direction = SHADOW_DIRECTIONS[dirIndex];
  const layers = hovering ? 14 : 7;
  const strokeShift = hovering ? 1.5 : 1;
  const px = direction.sweep ? 2.4 : strokeShift;

  const textShadow = Array.from({ length: layers }, (_, i) => {
    const offset = (i + 1) * px * direction.step;
    const y = direction.sweep ? (i + 1) * 0.5 * direction.step : offset;
    return `${offset.toFixed(2)}px ${y.toFixed(2)}px 0 ${direction.color}`;
  }).join(", ");

  const totalShift = layers * px * direction.step;

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[150px] flex-col items-center justify-center gap-3 px-3">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="flex w-full cursor-default items-center justify-center overflow-hidden py-1"
        >
          <span
            className="select-none whitespace-nowrap text-[26px] font-black leading-none tracking-tight text-foreground transition-[text-shadow] duration-500 will-change-[text-shadow]"
            style={{ textShadow }}
          >
            LINE SHADOW
          </span>
          <span
            aria-hidden
            className="pointer-events-none ml-2 h-3 w-[2px] rounded-full transition-all duration-500"
            style={{
              backgroundColor: direction.color,
              transform: `translateX(${totalShift * 0.6}px)`,
              opacity: hovering ? 1 : 0.35,
            }}
          />
        </div>
        <div className="flex items-center gap-1">
          {SHADOW_DIRECTIONS.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setDirIndex(i)}
              className={cn(
                "rounded-full border px-2 py-[2px] font-mono text-[10px] transition-colors",
                i === dirIndex
                  ? "border-transparent bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
          <span className="ml-1 text-[10px] text-muted-foreground">{hovering ? "stretch" : "hover to stretch"}</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Magic Card                                                       */
/* ------------------------------------------------------------------ */

function MuMagicCardDemo() {
  const [pointer, setPointer] = React.useState<{ x: number; y: number } | null>(null);
  const [entered, setEntered] = React.useState(false);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setPointer({ x, y });
    setEntered(x > rect.width * 0.62 && y < rect.height * 0.42);
  };

  const reset = () => {
    setPointer(null);
    setEntered(false);
  };

  const angle = pointer ? (Math.atan2(pointer.y - 36, pointer.x - 70) * 180) / Math.PI + 90 : 0;

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[164px] items-center justify-center">
        <div
          onMouseMove={handleMove}
          onMouseLeave={reset}
          className={cn(
            "relative h-[132px] w-[232px] overflow-hidden rounded-xl border p-4",
            "bg-card transition-colors duration-300",
            pointer ? "border-primary/50" : "border-border",
          )}
        >
          {/* mouse-following radial glow */}
          <div
            aria-hidden
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              opacity: pointer ? 1 : 0,
              background: `radial-gradient(200px circle at ${pointer?.x ?? 0}px ${pointer?.y ?? 0}px, rgba(129,140,248,0.28), transparent 72%)`,
            }}
          />
          {/* rotating border highlight */}
          <div
            aria-hidden
            className="absolute -inset-[1px] rounded-xl p-[1.5px] transition-opacity duration-500"
            style={{
              opacity: pointer ? 0.9 : 0,
              background: `conic-gradient(from ${angle.toFixed(1)}deg at 50% 50%, transparent 0deg, rgba(129,140,248,0.9) 42deg, rgba(56,189,248,0.85) 74deg, transparent 132deg)`,
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />
          <div className="relative space-y-1.5">
            <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-primary">
              <Zap className="h-3 w-3" /> spotlight card
            </span>
            <p className="text-[12px] font-semibold leading-snug text-foreground">
              A glow that never leaves your cursor behind.
            </p>
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              move the mouse across the surface to steer both the radial light and the conic border.
            </p>
            <div className="flex items-center gap-1.5 pt-0.5">
              {["react", "motion", "tailwind"].map((tag) => (
                <span
                  key={tag}
                  className={cn(
                    "rounded-full border px-2 py-[1px] font-mono text-[9px] transition-colors",
                    entered ? "border-primary/50 text-primary" : "border-border text-muted-foreground",
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 8. Meteors                                                          */
/* ------------------------------------------------------------------ */

function MuMeteorsDemo() {
  const [wave, setWave] = React.useState(0);
  const [waves, setWaves] = React.useState(0);

  const triggerWave = () => {
    setWave((value) => (value + 1) % 1000);
    setWaves((value) => (value > 98 ? 1 : value + 1));
  };

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`
        @keyframes mu-meteor-fall {
          0% { transform: rotate(215deg) translateX(0); opacity: 0; }
          12% { opacity: 1; }
          72% { opacity: 1; }
          100% { transform: rotate(215deg) translateX(-300px); opacity: 0; }
        }
      `}</style>
      <div className="relative h-[168px] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* ambient loop field */}
          {METEORS.map((meteor, i) => (
            <span
              key={`ambient-${i}`}
              className="absolute top-0 block h-[2px] rounded-full"
              style={{
                left: `${meteor.left}%`,
                width: `${46 * meteor.size}px`,
                backgroundColor: "#e0f2fe",
                boxShadow: "0 0 6px 1px rgba(125,211,252,0.85)",
                animation: `mu-meteor-fall ${meteor.duration}s linear ${meteor.delay}s infinite`,
              }}
            >
              <span className="absolute -top-[1px] right-0 h-[4px] w-[4px] rounded-full bg-white/90" />
            </span>
          ))}
          {/* burst wave, remounted per trigger via key */}
          {wave > 0 &&
            METEORS.map((meteor, i) => (
              <span
                key={`burst-${wave}-${i}`}
                className="absolute top-0 block h-[2px] rounded-full"
                style={{
                  left: `${(meteor.left + 4) % 96}%`,
                  width: "58px",
                  backgroundColor: "#fef3c7",
                  boxShadow: "0 0 8px 1px rgba(251,191,36,0.9)",
                  animation: `mu-meteor-fall ${0.85 + meteor.delay * 0.12}s linear ${meteor.delay * 0.22}s both`,
                }}
              />
            ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 top-auto z-10 flex items-center justify-between gap-2 border-t border-white/10 bg-black/45 px-3 py-2 backdrop-blur-sm">
          <div>
            <p className="text-[11px] font-semibold leading-tight text-white">Meteor Shower</p>
            <p className="text-[9px] leading-tight text-white/50">
              {waves > 0 ? `${waves} wave${waves > 1 ? "s" : ""} released` : "hover or click to summon a wave"}
            </p>
          </div>
          <button
            type="button"
            onClick={triggerWave}
            onMouseEnter={triggerWave}
            className="rounded-full border border-sky-400/40 bg-sky-400/15 px-3 py-[3px] text-[10px] font-medium text-sky-100 transition-colors hover:bg-sky-400/30"
          >
            Trigger rain
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Morphing Text                                                    */
/* ------------------------------------------------------------------ */

const MORPH_INTERVAL_MS = 1900;

function MuMorphingTextDemo() {
  const [words, setWords] = React.useState<string[]>(["Design", "Motion", "Systems", "Craft"]);
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [draft, setDraft] = React.useState("Design, Motion, Systems, Craft");

  React.useEffect(() => {
    if (paused || words.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, MORPH_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, words]);

  const commit = (value: string) => {
    setDraft(value);
    const next = value
      .split(",")
      .map((word) => word.trim())
      .filter((word) => word.length > 0)
      .slice(0, 6);
    if (next.length > 0) {
      setWords(next);
      setIndex(0);
    }
  };

  const current = words[index] ?? "";

  return (
    <div className="relative overflow-hidden text-xs">
      <div className="flex h-[160px] flex-col items-center justify-center gap-3 px-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">morphing text</span>
        <div className="relative flex h-[42px] w-full items-center justify-center overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={current}
              initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.3, filter: "blur(10px)" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute whitespace-nowrap bg-gradient-to-r from-primary via-fuchsia-500 to-sky-400 bg-clip-text text-[26px] font-black leading-none tracking-tight text-transparent"
            >
              {current}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex w-full max-w-[250px] items-center gap-1.5">
          <input
            value={draft}
            onChange={(event) => commit(event.target.value)}
            placeholder="word, word, word"
            className="h-6 min-w-0 flex-1 rounded-md border border-border bg-background px-2 font-mono text-[10px] text-foreground outline-none focus:border-primary"
          />
          <button
            type="button"
            aria-label={paused ? "Resume morphing" : "Pause morphing"}
            onClick={() => setPaused((value) => !value)}
            className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors",
              paused ? "border-primary/50 bg-primary/10 text-primary" : "border-border text-muted-foreground",
            )}
          >
            {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
          </button>
        </div>
        <div className="flex items-center gap-1">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === index ? "w-4 bg-primary" : "w-1 bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 10. Neon Gradient Card                                              */
/* ------------------------------------------------------------------ */

function MuNeonGradientCardDemo() {
  const [hovering, setHovering] = React.useState(false);
  const [count, setCount] = React.useState(3);

  return (
    <div className="relative overflow-hidden text-xs">
      <style>{`
        @keyframes mu-neon-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="flex h-[172px] items-center justify-center">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn(
            "relative w-[236px] rounded-2xl p-[1.5px] transition-shadow duration-500",
            hovering
              ? "shadow-[0_0_28px_-2px_rgba(217,70,239,0.65)]"
              : "shadow-[0_0_16px_-6px_rgba(217,70,239,0.45)]",
          )}
        >
          {/* flowing neon ring */}
          <span
            aria-hidden
            className="absolute -inset-[40%] rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #22d3ee, #6366f1, #d946ef, #f472b6, #22d3ee)",
              animation: "mu-neon-spin 5s linear infinite",
              filter: hovering ? "blur(5px) saturate(1.5)" : "blur(4px)",
              transition: "filter 400ms ease",
            }}
          />
          {/* inner card */}
          <div className="relative overflow-hidden rounded-[15px] bg-neutral-950 px-4 py-3.5">
            <span
              aria-hidden
              className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-fuchsia-500/25 blur-2xl transition-opacity duration-500"
              style={{ opacity: hovering ? 1 : 0.45 }}
            />
            <div className="relative space-y-2">
              <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.16em] text-fuchsia-300">
                <Zap className="h-3 w-3" /> neon pro
              </span>
              <p className="text-[13px] font-semibold leading-tight text-white">
                Gradient border that flows forever
              </p>
              <p className="text-[10px] leading-relaxed text-white/55">
                Hover the card to intensify the outer glow, or launch a node.
              </p>
              <div className="flex items-center gap-2 pt-0.5">
                <Button
                  size="sm"
                  className="h-6 border-0 bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-2.5 text-[10px] text-white hover:from-fuchsia-400 hover:to-indigo-400"
                  onClick={() => setCount((value) => value + 1)}
                >
                  <Zap className="mr-1 h-3 w-3" /> Launch node
                </Button>
                <span className="font-mono text-[10px] text-white/60">{count} nodes live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-interactive-hover-button-demo": MuInteractiveHoverButtonDemo,
  "magicui-iphone-demo": MuIphoneDemo,
  "magicui-kinetic-text-demo": MuKineticTextDemo,
  "magicui-lens-demo": MuLensDemo,
  "magicui-light-rays-demo": MuLightRaysDemo,
  "magicui-line-shadow-text-demo": MuLineShadowTextDemo,
  "magicui-magic-card-demo": MuMagicCardDemo,
  "magicui-meteors-demo": MuMeteorsDemo,
  "magicui-morphing-text-demo": MuMorphingTextDemo,
  "magicui-neon-gradient-card-demo": MuNeonGradientCardDemo,
};
