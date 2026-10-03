"use client";

import { useState, useEffect } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

export default function BeUITextPage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Build agentic dashboards with shadcn/ui & Motion.";
  const [count, setCount] = useState(0);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      if (idx <= fullText.length) {
        setTypedText(fullText.slice(0, idx));
        idx++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 18450;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <PageHeader
        title="beUI · 文本动态特效 (Text Animations)"
        description="抓取自 beui.dev 的文本动态表现：终端打字机、数字平滑翻牌自增与文字光斑掠过"
      />

      {/* Typing Effect */}
      <Section title="Effect 1: Typing Animation 打字机动态呈现" description="字符逐字显现并带有光标闪烁动效">
        <div className="p-6 rounded-xl border bg-zinc-950 font-mono text-zinc-100 flex items-center min-h-[70px]">
          <span className="text-emerald-400 mr-2">&gt;</span>
          <span className="text-base font-semibold">{typedText}</span>
          <span className="inline-block w-2.5 h-5 bg-primary ml-1 animate-pulse" />
        </div>
      </Section>

      {/* Number Ticker */}
      <Section title="Effect 2: Number Ticker 统计数字平滑滚动" description="数据加载入场时的平滑递增动画">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-bold">总代码交付行数</p>
            <p className="text-4xl font-extrabold font-mono text-primary mt-2">
              {count.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground mt-1">行高质量代码</p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-bold">接口性能提升</p>
            <p className="text-4xl font-extrabold font-mono text-emerald-500 mt-2">
              +{(count / 200).toFixed(1)}%
            </p>
            <p className="text-xs text-muted-foreground mt-1">比传统 SSR 快</p>
          </div>
          <div className="p-6 rounded-xl border bg-card">
            <p className="text-xs text-muted-foreground uppercase font-bold">活跃开发者社区</p>
            <p className="text-4xl font-extrabold font-mono text-indigo-500 mt-2">
              {Math.floor(count / 15).toLocaleString()}+
            </p>
            <p className="text-xs text-muted-foreground mt-1">星标支持者</p>
          </div>
        </div>
      </Section>

      {/* Text Shimmer */}
      <Section title="Effect 3: Text Shimmer 文字高光掠过动画" description="高亮微光由左至右平滑扫描">
        <div className="p-8 rounded-xl border bg-muted/20 text-center">
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent">
            ✦ AI-Powered Component Generation Pipeline ✦
          </p>
        </div>
      </Section>
    </div>
  );
}
