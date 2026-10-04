"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Wand2, RefreshCw } from "lucide-react";

export default function AceternityEffectsPage() {
  const fullQuote = "Aceternity UI transforms regular interfaces into digital artworks.";
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const words = fullQuote.split(" ");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedWords(words.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const replayText = () => {
    setDisplayedWords([]);
    let index = 0;
    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedWords(words.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 font-medium">Aceternity Effects</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方光效与交互动效</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">光效动效 · 探照聚光与逐字流光</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          Spotlight 锥形聚光、Moving Border 旋转流光边框与 Text Generate 字符逐词高亮生成。直接嵌入运行。
        </p>
      </div>

      {/* 1. Spotlight 探照聚光 */}
      <div className="relative rounded-2xl border bg-zinc-950 overflow-hidden p-8 md:p-12 text-white">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-xl">
          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs mb-3">
            Spotlight Effect
          </Badge>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Spotlight · 锥形聚光探照舞台
          </h2>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            柔和的高斯模糊弥散光源从天而降，为居中的产品价值主张制造视觉重心，是现代暗色 Landing Page 的黄金配置。
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition-colors">
              探索聚光案例
            </button>
          </div>
        </div>
      </div>

      {/* 2. Moving Border & Text Generate */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Moving Border */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Moving Border · 环绕运动发光边框</CardTitle>
              <Badge variant="secondary" className="text-[10px]">SVG Path Animation</Badge>
            </div>
            <CardDescription className="text-xs">一粒微光沿着边框跑道高速巡回流转</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center p-6">
            <div className="relative p-[2px] overflow-hidden rounded-2xl">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#00000000,#06b6d4,#00000000)] animate-[spin_3s_linear_infinite]" />
              <div className="relative px-6 py-3 rounded-2xl bg-card border text-xs font-semibold flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-500" />
                <span>Aceternity Moving Border</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Text Generate */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">Text Generate · 逐词高亮生成</CardTitle>
              <CardDescription className="text-xs">模拟大模型流式推理逐词输出的平滑淡入动效</CardDescription>
            </div>
            <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1" onClick={replayText}>
              <RefreshCw className="h-3 w-3" /> 重播
            </Button>
          </CardHeader>
          <CardContent className="h-44 flex items-center justify-center p-6 bg-muted/10 rounded-xl m-4 border">
            <p className="text-base font-medium leading-relaxed text-center">
              {words.map((word, i) => (
                <span
                  key={i}
                  className={`inline-block mx-1 transition-all duration-300 ${
                    displayedWords.includes(word)
                      ? "opacity-100 translate-y-0 text-foreground"
                      : "opacity-0 translate-y-1 text-muted-foreground"
                  }`}
                >
                  {word}
                </span>
              ))}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
