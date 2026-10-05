"use client";

import * as React from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  BarChart2,
  Gauge,
  Heart,
  MessageCircle,
  Pause,
  Play,
  Repeat2,
  RotateCcw,
  Waves,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ======================================================================== */
/* magicui-text-3d-flip-demo                                                */
/* ======================================================================== */

const MU_FLIP_WORDS: string[] = ["CREATE", "DESIGN", "DEPLOY", "SCALE"];

const MU_FLIP_SPEEDS: { id: string; label: string; duration: number }[] = [
  { id: "half", label: "0.5x", duration: 0.8 },
  { id: "normal", label: "1x", duration: 0.45 },
  { id: "double", label: "2x", duration: 0.22 },
];

function MuText3DFlipDemo() {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [speedIndex, setSpeedIndex] = React.useState(1);
  const speed = MU_FLIP_SPEEDS[speedIndex];
  const word = MU_FLIP_WORDS[wordIndex];

  const charVariants: Variants = {
    hidden: { rotateX: -92, y: 10, opacity: 0 },
    show: {
      rotateX: 0,
      y: 0,
      opacity: 1,
      transition: { duration: speed.duration, ease: "easeOut" },
    },
    hide: {
      rotateX: 92,
      y: -10,
      opacity: 0,
      transition: { duration: speed.duration * 0.7, ease: "easeIn" },
    },
  };

  const wordVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: speed.duration * 0.12 } },
    hide: {
      transition: { staggerChildren: speed.duration * 0.07, staggerDirection: -1 },
    },
  };

  return (
    <div
      className="relative flex h-[152px] flex-col items-center justify-center gap-2.5 overflow-hidden text-xs"
      style={{ perspective: "800px" }}
    >
      <button
        type="button"
        onClick={() => setWordIndex((i) => (i + 1) % MU_FLIP_WORDS.length)}
        aria-label="Flip to the next word"
        className="flex h-11 w-full items-center justify-center rounded-xl border border-dashed border-border/70 bg-muted/20 transition-colors hover:border-primary/50 hover:bg-muted/40"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={word}
            variants={wordVariants}
            initial="hidden"
            animate="show"
            exit="hide"
            className="flex items-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word.split("").map((ch, i) => (
              <motion.span
                key={`${ch}-${i}`}
                variants={charVariants}
                className={cn(
                  "inline-block text-3xl font-black tracking-tight",
                  i === word.length - 1 ? "text-primary" : "text-foreground",
                )}
                style={{
                  transformOrigin: "50% 50% -12px",
                  backfaceVisibility: "hidden",
                }}
              >
                {ch}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </button>

      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          {MU_FLIP_WORDS.map((w, i) => (
            <button
              key={w}
              type="button"
              onClick={() => setWordIndex(i)}
              className={cn(
                "rounded-md px-1.5 py-0.5 font-mono text-[10px] transition-colors",
                i === wordIndex
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {w.toLowerCase()}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Gauge className="h-3 w-3 text-muted-foreground" />
          {MU_FLIP_SPEEDS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSpeedIndex(i)}
              className={cn(
                "rounded-md border px-1.5 py-0.5 font-mono text-[10px] transition-colors",
                i === speedIndex
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground hover:bg-muted",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <span className="text-[10px] text-muted-foreground">
        Click the stage to flip · per-character rotateX
      </span>
    </div>
  );
}

/* ======================================================================== */
/* magicui-text-animate-demo                                                */
/* ======================================================================== */

type MuAnimPreset = "slide" | "scale" | "blur" | "type";
type MuAnimGrain = "word" | "char";

const MU_ANIM_PRESETS: { id: MuAnimPreset; label: string }[] = [
  { id: "slide", label: "Slide Up" },
  { id: "scale", label: "Scale" },
  { id: "blur", label: "Blur" },
  { id: "type", label: "Typing" },
];

const MU_ANIM_PHRASE = "Animate text with intent";

function MuTextAnimateDemo() {
  const [preset, setPreset] = React.useState<MuAnimPreset>("slide");
  const [grain, setGrain] = React.useState<MuAnimGrain>("word");
  const [runId, setRunId] = React.useState(0);

  const replay = (next: MuAnimPreset) => {
    setPreset(next);
    setRunId((r) => r + 1);
  };

  const units =
    grain === "word" ? MU_ANIM_PHRASE.split(" ") : MU_ANIM_PHRASE.split("");

  const unitVariants: Variants = {
    hidden:
      preset === "scale"
        ? { scale: 0.5, opacity: 0 }
        : preset === "blur"
          ? { filter: "blur(12px)", opacity: 0 }
          : { y: 16, opacity: 0 },
    show: {
      scale: 1,
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: preset === "blur" ? 0.7 : 0.45,
        ease: "easeOut",
      },
    },
  };

  const groupVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: grain === "word" ? 0.12 : 0.035,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <div className="relative flex h-[158px] flex-col justify-between overflow-hidden text-xs">
      <div className="flex flex-wrap items-center gap-1">
        {MU_ANIM_PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => replay(p.id)}
            className={cn(
              "rounded-md border px-1.5 py-0.5 text-[10px] font-medium transition-colors",
              p.id === preset
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:bg-muted",
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex h-[62px] items-center justify-center overflow-hidden rounded-xl border bg-muted/30 px-2">
        {preset === "type" ? (
          <span className="inline-flex items-center">
            <motion.span
              key={`type-${runId}`}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.15, ease: "linear" }}
              className="text-base font-semibold text-foreground"
            >
              {MU_ANIM_PHRASE}
            </motion.span>
            <span className="ml-0.5 h-4 w-[2px] animate-pulse rounded-full bg-primary" />
          </span>
        ) : (
          <motion.div
            key={`${preset}-${grain}-${runId}`}
            variants={groupVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1"
          >
            {units.map((u, i) => (
              <motion.span
                key={`${u}-${i}`}
                variants={unitVariants}
                className="text-base font-semibold text-foreground"
              >
                {u.trim() === "" ? "\u00A0" : u}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 rounded-lg border border-border p-0.5">
          {(["word", "char"] as MuAnimGrain[]).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => {
                setGrain(g);
                setRunId((r) => r + 1);
              }}
              className={cn(
                "rounded-md px-1.5 py-0.5 font-mono text-[10px] transition-colors",
                g === grain
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {g === "word" ? "per word" : "per char"}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setRunId((r) => r + 1)}
          className="inline-flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <RotateCcw className="h-3 w-3" />
          Replay
        </button>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* magicui-text-reveal-demo                                                 */
/* ======================================================================== */

type MuRevealDir = "ltr" | "rtl";

const MU_REVEAL_TEXT = "REVEAL THE UNSEEN";

function MuTextRevealDemo() {
  const [dir, setDir] = React.useState<MuRevealDir>("ltr");
  const [runId, setRunId] = React.useState(0);

  const hiddenClip = dir === "ltr" ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";
  const barFrom = dir === "ltr" ? "0%" : "100%";
  const barTo = dir === "ltr" ? "100%" : "0%";

  return (
    <div className="relative flex h-[150px] flex-col justify-between overflow-hidden text-xs">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Text Reveal
        </span>
        <div className="flex items-center gap-1 rounded-lg border border-border p-0.5">
          {(["ltr", "rtl"] as MuRevealDir[]).map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDir(d);
                setRunId((r) => r + 1);
              }}
              className={cn(
                "rounded-md px-1.5 py-0.5 font-mono text-[10px] transition-colors",
                d === dir
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted",
              )}
            >
              {d.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setRunId((r) => r + 1)}
        aria-label="Replay the reveal"
        className="relative h-[68px] w-full overflow-hidden rounded-xl border bg-muted/30 text-left transition-colors hover:border-primary/40"
      >
        <span className="absolute inset-0 flex items-center px-3 font-mono text-[15px] font-semibold tracking-[0.14em] text-muted-foreground/30">
          {MU_REVEAL_TEXT}
        </span>

        <motion.span
          key={`sweep-${dir}-${runId}`}
          initial={{ clipPath: hiddenClip }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center px-3 font-mono text-[15px] font-semibold tracking-[0.14em]"
        >
          <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
            {MU_REVEAL_TEXT}
          </span>
        </motion.span>

        <motion.span
          key={`bar-${dir}-${runId}`}
          initial={{ left: barFrom, opacity: 0 }}
          animate={{ left: barTo, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.25, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent"
        />
      </button>

      <div className="flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">
          clip-path mask sweep across a muted ghost layer
        </span>
        <button
          type="button"
          onClick={() => setRunId((r) => r + 1)}
          className="inline-flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <RotateCcw className="h-3 w-3" />
          Replay
        </button>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* magicui-tweet-card-demo                                                  */
/* ======================================================================== */

const MU_TWEET_STATS: {
  id: string;
  label: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { id: "reply", label: "Replies", count: "48", icon: MessageCircle },
  { id: "repost", label: "Reposts", count: "212", icon: Repeat2 },
  { id: "views", label: "Views", count: "84K", icon: BarChart2 },
];

function formatTweetLikes(value: number): string {
  if (value < 1000) return String(value);
  return `${(value / 1000).toFixed(1)}K`;
}

function MuTweetCardDemo() {
  const [liked, setLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(1284);

  const toggleLike = () => {
    setLikes((n) => n + (liked ? -1 : 1));
    setLiked((v) => !v);
  };

  return (
    <div className="relative h-[152px] overflow-hidden text-xs">
      <div className="group flex h-full flex-col gap-2 rounded-xl border bg-card p-3 transition-colors hover:border-sky-400/60">
        <div className="flex items-start gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-[11px] font-bold text-white">
            SC
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="truncate font-semibold text-foreground">
                Sarah Chen
              </span>
              <BadgeCheck className="h-3.5 w-3.5 shrink-0 fill-sky-500 text-card" />
              <span className="truncate text-[10px] text-muted-foreground">
                @sarahcodes · 2h
              </span>
            </div>
            <p className="mt-1 leading-snug text-foreground">
              Shipped the new Magic UI previews tonight — 70+ components, every
              one fully interactive. ✨
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-border/60 pt-2 text-muted-foreground">
          {MU_TWEET_STATS.slice(0, 2).map((s) => (
            <span
              key={s.id}
              className="inline-flex items-center gap-1 transition-colors hover:text-sky-500"
            >
              <s.icon className="h-3 w-3" />
              <span className="font-mono text-[10px]">{s.count}</span>
            </span>
          ))}

          <motion.button
            type="button"
            whileTap={{ scale: 0.8 }}
            onClick={toggleLike}
            aria-pressed={liked}
            className={cn(
              "inline-flex items-center gap-1 transition-colors",
              liked ? "text-rose-500" : "hover:text-rose-500",
            )}
          >
            <Heart
              className={cn("h-3 w-3", liked && "fill-rose-500 text-rose-500")}
            />
            <span className="font-mono text-[10px]">
              {formatTweetLikes(likes)}
            </span>
          </motion.button>

          <span className="ml-auto inline-flex items-center gap-1">
            <BarChart2 className="h-3 w-3" />
            <span className="font-mono text-[10px]">84K</span>
          </span>
        </div>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* magicui-typing-animation-demo                                            */
/* ======================================================================== */

const MU_TYPE_PHRASES: string[] = [
  "npx magicui@latest add typing-animation",
  "Blinking cursor, zero dependencies",
  "Type. Delete. Repeat. Forever.",
];

const MU_TYPE_SPEEDS: { id: string; label: string; ms: number }[] = [
  { id: "slow", label: "0.5x", ms: 190 },
  { id: "normal", label: "1x", ms: 95 },
  { id: "fast", label: "2x", ms: 45 },
];

function MuTypingAnimationDemo() {
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);
  const [speedIndex, setSpeedIndex] = React.useState(1);

  const base = MU_TYPE_SPEEDS[speedIndex].ms;

  React.useEffect(() => {
    const current = MU_TYPE_PHRASES[phraseIndex];

    if (!deleting && text === current) {
      const hold: ReturnType<typeof setTimeout> = setTimeout(
        () => setDeleting(true),
        base * 12,
      );
      return () => clearTimeout(hold);
    }

    if (deleting && text === "") {
      const swap: ReturnType<typeof setTimeout> = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % MU_TYPE_PHRASES.length);
      }, base * 3);
      return () => clearTimeout(swap);
    }

    const tick: ReturnType<typeof setTimeout> = setTimeout(
      () => {
        setText(
          deleting
            ? current.slice(0, Math.max(0, text.length - 1))
            : current.slice(0, text.length + 1),
        );
      },
      deleting ? base * 0.5 : base,
    );
    return () => clearTimeout(tick);
  }, [base, deleting, phraseIndex, text]);

  return (
    <div className="relative flex h-[148px] flex-col justify-between overflow-hidden text-xs">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-2 py-1.5">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          magicui/typing-animation
        </span>
        <span className="ml-auto font-mono text-[10px] text-muted-foreground">
          {phraseIndex + 1}/{MU_TYPE_PHRASES.length}
        </span>
      </div>

      <div className="flex h-[52px] items-center overflow-hidden rounded-lg bg-neutral-950 px-3">
        <span className="mr-1.5 font-mono text-[11px] text-emerald-400">$</span>
        <span className="truncate font-mono text-[12px] text-neutral-100">
          {text}
        </span>
        <span
          className={cn(
            "ml-0.5 inline-block h-3.5 w-[7px] bg-emerald-400",
            text === MU_TYPE_PHRASES[phraseIndex]
              ? "animate-pulse"
              : "opacity-90",
          )}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-[10px] text-muted-foreground">
          <Waves className="h-3 w-3" />
          loops through {MU_TYPE_PHRASES.length} phrases
        </span>
        <div className="flex items-center gap-1">
          <Gauge className="h-3 w-3 text-muted-foreground" />
          {MU_TYPE_SPEEDS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSpeedIndex(i)}
              className={cn(
                "rounded-md border px-1.5 py-0.5 font-mono text-[10px] transition-colors",
                i === speedIndex
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-transparent text-muted-foreground hover:bg-muted",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* magicui-video-text-demo                                                  */
/* ======================================================================== */

type MuVideoPalette = {
  id: string;
  label: string;
  gradient: string;
  glow: string;
};

const MU_VIDEO_PALETTES: MuVideoPalette[] = [
  {
    id: "neon",
    label: "Neon",
    gradient:
      "linear-gradient(100deg, #ff0080 0%, #7928ca 30%, #00d8ff 60%, #ff0080 100%)",
    glow: "#ff0080",
  },
  {
    id: "sunset",
    label: "Sunset",
    gradient:
      "linear-gradient(100deg, #ff9a00 0%, #ff4d6d 35%, #c9184a 65%, #ff9a00 100%)",
    glow: "#ff6b35",
  },
  {
    id: "aurora",
    label: "Aurora",
    gradient:
      "linear-gradient(100deg, #00f5a0 0%, #00d9f5 35%, #7c3aed 70%, #00f5a0 100%)",
    glow: "#00f5a0",
  },
];

function MuVideoTextDemo() {
  const [paletteIndex, setPaletteIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const palette = MU_VIDEO_PALETTES[paletteIndex];

  return (
    <div className="relative flex h-[156px] flex-col justify-between overflow-hidden text-xs">
      <div className="relative flex h-[96px] items-center justify-center overflow-hidden rounded-xl bg-neutral-950">
        <div
          className={cn(
            "absolute -left-6 top-2 h-24 w-24 animate-pulse rounded-full blur-2xl mix-blend-screen",
            !playing && "[animation-play-state:paused]",
          )}
          style={{ backgroundColor: palette.glow }}
        />
        <div
          className={cn(
            "absolute -right-4 bottom-0 h-20 w-24 animate-pulse rounded-full blur-2xl mix-blend-screen",
            !playing && "[animation-play-state:paused]",
          )}
          style={{ backgroundColor: palette.glow, animationDuration: "2.6s" }}
        />

        <motion.span
          animate={
            playing
              ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
              : { backgroundPosition: "50% 50%" }
          }
          transition={
            playing
              ? { duration: 4.5, repeat: Infinity, ease: "linear" }
              : { duration: 0.4 }
          }
          style={{
            backgroundImage: palette.gradient,
            backgroundSize: "300% 300%",
          }}
          className="relative z-10 bg-clip-text text-4xl font-black tracking-tight text-transparent"
        >
          MAGIC UI
        </motion.span>

        <span
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, transparent 1px, transparent 3px)",
          }}
        />

        <span className="absolute left-2 top-1.5 inline-flex items-center gap-1 rounded-full bg-black/50 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/80">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full bg-rose-500",
              playing && "animate-pulse",
            )}
          />
          {playing ? "rec" : "hold"}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          {MU_VIDEO_PALETTES.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPaletteIndex(i)}
              className={cn(
                "rounded-md border px-1.5 py-0.5 text-[10px] font-medium transition-colors",
                i === paletteIndex
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:bg-muted",
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          className="inline-flex items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

/* ======================================================================== */
/* magicui-warp-background-demo                                             */
/* ======================================================================== */

const MU_WARP_SPEEDS: { id: string; label: string; duration: number }[] = [
  { id: "cruise", label: "Cruise", duration: 2.4 },
  { id: "warp", label: "Warp", duration: 1.4 },
  { id: "ludicrous", label: "Ludicrous", duration: 0.8 },
];

const MU_WARP_RAYS =
  "repeating-conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.85) 0deg 0.45deg, transparent 0.45deg 6deg)";

const MU_WARP_MASK =
  "radial-gradient(circle at 50% 50%, transparent 5%, black 34%, black 72%, transparent 96%)";

const MU_WARP_STARS: { x: number; y: number; size: number; opacity: number }[] =
  [
    { x: 9, y: 18, size: 2, opacity: 0.5 },
    { x: 22, y: 74, size: 1, opacity: 0.4 },
    { x: 31, y: 12, size: 2, opacity: 0.6 },
    { x: 68, y: 82, size: 2, opacity: 0.45 },
    { x: 78, y: 22, size: 1, opacity: 0.5 },
    { x: 91, y: 62, size: 2, opacity: 0.4 },
    { x: 14, y: 46, size: 1, opacity: 0.35 },
    { x: 85, y: 88, size: 1, opacity: 0.5 },
  ];

function MuWarpBackgroundDemo() {
  const [speedIndex, setSpeedIndex] = React.useState(1);
  const speed = MU_WARP_SPEEDS[speedIndex];
  const thrust = (speedIndex + 1) * 32;

  return (
    <div className="relative flex h-[168px] items-center justify-center overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-xs">
      {[0, 1].map((layer) => (
        <motion.div
          key={`${speed.id}-${layer}`}
          className="absolute -inset-1/4"
          style={{
            backgroundImage: MU_WARP_RAYS,
            maskImage: MU_WARP_MASK,
            WebkitMaskImage: MU_WARP_MASK,
          }}
          animate={{ scale: [0.3, 1.9], opacity: [0.85, 0] }}
          transition={{
            duration: speed.duration,
            repeat: Infinity,
            ease: "linear",
            delay: (layer * speed.duration) / 2,
          }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0">
        {MU_WARP_STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.85) 85%)",
        }}
      />

      <div className="relative z-10 w-44 rounded-xl border border-white/15 bg-neutral-900/90 p-2.5 text-center shadow-lg backdrop-blur">
        <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300">
          <Waves className="h-3 w-3" />
          Warp Drive
        </span>
        <p className="mt-1 text-[11px] font-semibold text-white">
          Velocity · {speed.label}
        </p>
        <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-[width] duration-500"
            style={{ width: `${thrust}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-center gap-1">
          {MU_WARP_SPEEDS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSpeedIndex(i)}
              className={cn(
                "rounded-md px-1.5 py-0.5 font-mono text-[9px] transition-colors",
                i === speedIndex
                  ? "bg-cyan-400/20 text-cyan-200"
                  : "text-white/50 hover:bg-white/10 hover:text-white/80",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ======================================================================== */

export const MAGICUI_PART: Record<string, React.ComponentType> = {
  "magicui-text-3d-flip-demo": MuText3DFlipDemo,
  "magicui-text-animate-demo": MuTextAnimateDemo,
  "magicui-text-reveal-demo": MuTextRevealDemo,
  "magicui-tweet-card-demo": MuTweetCardDemo,
  "magicui-typing-animation-demo": MuTypingAnimationDemo,
  "magicui-video-text-demo": MuVideoTextDemo,
  "magicui-warp-background-demo": MuWarpBackgroundDemo,
};
