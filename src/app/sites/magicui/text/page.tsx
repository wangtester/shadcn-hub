"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Type, Wand2, Terminal } from "lucide-react";

export default function MagicUITextPage() {
  // Number Ticker 状态
  const [tickerVal, setTickerVal] = useState(128450);

  // Word Rotate 状态
  const words = ["极速渲染", "优雅微动效", "设计工程师", "React 19 原生", "极简质感"];
  const [wordIndex, setWordIndex] = useState(0);

  // Typing Animation 状态
  const fullText = "Design Engineers are redefining the web with Magic UI.";
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  // Scramble Text 状态
  const targetScramble = "ANTIGRAVITY";
  const [scrambled, setScrambled] = useState(targetScramble);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setTypingIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [typingIndex]);

  const triggerScramble = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%";
    let iterations = 0;
    const interval = setInterval(() => {
      setScrambled(
        targetScramble
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return targetScramble[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iterations >= targetScramble.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 font-medium">Magic UI Text</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方 6 大经典文本排版动效</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">文本动效 · 极富生命力的字体微交互</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          Magic UI 专为落地页标题、统计数字与状态提示打造的动态排版基元。所有组件直接在此交互运行。
        </p>
      </div>

      {/* 1. Animated Shiny Text & Sparkles Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shiny Text */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Animated Shiny Text · 流光渐变文字</CardTitle>
              <Badge variant="secondary" className="text-[10px]">CSS Shimmer</Badge>
            </div>
            <CardDescription className="text-xs">光束自左向右周期性掠过文字表面</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-8 bg-zinc-950 rounded-xl m-4 border border-zinc-800">
            <span className="text-2xl font-bold bg-gradient-to-r from-zinc-500 via-white to-zinc-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
              ✨ ✨ Magic UI Next Generation
            </span>
          </CardContent>
        </Card>

        {/* Word Rotate */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Word Rotate · 词汇翻转轮播</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Auto Carousel</Badge>
            </div>
            <CardDescription className="text-xs">标题重点关键词平滑淡入滑出切换</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-8 m-4 rounded-xl border bg-muted/20">
            <div className="text-lg text-muted-foreground flex items-center gap-2">
              <span>构建属于您的</span>
              <span className="font-extrabold text-2xl text-indigo-500 transition-all duration-300">
                {words[wordIndex]}
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">每 2.2 秒自动切换下一组关键词</p>
          </CardContent>
        </Card>
      </div>

      {/* 2. Number Ticker & Typing Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Number Ticker */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">Number Ticker · 数字滚动递增</CardTitle>
              <CardDescription className="text-xs">平滑递增的大号统计指标展示</CardDescription>
            </div>
            <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1" onClick={() => setTickerVal((prev) => prev + Math.floor(Math.random() * 500) + 100)}>
              <RefreshCw className="h-3 w-3" /> 增量更新
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-8 m-4 rounded-xl border bg-card">
            <div className="text-4xl font-black font-mono tracking-tight text-foreground">
              ${tickerVal.toLocaleString()}
            </div>
            <span className="text-xs text-emerald-500 font-semibold mt-1">实时累积销售额</span>
          </CardContent>
        </Card>

        {/* Typing Animation */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Typing Animation · 打字机动效</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Typewriter</Badge>
            </div>
            <CardDescription className="text-xs">逐字符吐字与闪烁光标，适合产品 Slogan</CardDescription>
          </CardHeader>
          <CardContent className="p-6 m-4 rounded-xl border bg-zinc-950 font-mono text-emerald-400 text-sm min-h-[90px] flex items-center">
            <span>&gt; {displayedText}</span>
            <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
          </CardContent>
        </Card>
      </div>

      {/* 3. Scramble / Hyper Text */}
      <Card className="rounded-2xl border bg-card/60 shadow-xs p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-indigo-500" />
              <h3 className="font-bold text-base">Hyper Text · 动态乱码解密</h3>
            </div>
            <p className="text-xs text-muted-foreground mt-1">鼠标触发字符混淆随机演算，最终收敛至正确文字</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-black font-mono tracking-widest text-indigo-600 bg-indigo-500/10 px-4 py-2 rounded-xl border border-indigo-500/20">
              {scrambled}
            </div>
            <Button size="sm" className="rounded-xl text-xs bg-indigo-500 hover:bg-indigo-600 text-white" onClick={triggerScramble}>
              重新解密
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
