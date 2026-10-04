"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Gem, Layers, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

export default function BeautifulUIOverview() {
  const [activeTab, setActiveTab] = useState("aurora");

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-rose-500/10 text-rose-600 border-rose-500/30">BeautifulUI 全生态</Badge>
          <a
            href="https://www.beautifului.dev"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-rose-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>beautifului.dev</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">BeautifulUI · 艺术级拟态玻璃与高光美学</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          汇聚极光极地光晕、暗黑磨砂玻璃面（Glassmorphism）与微渐变高光。下方直接嵌入代表性拟态组件，点击即刻体验。
        </p>
      </div>

      {/* 嵌入组件 1: 极光弥散发光玻璃拟态卡片 */}
      <div className="relative rounded-2xl border overflow-hidden p-8 bg-zinc-950 text-white shadow-xl">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-rose-500/30 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-rose-400" />
            <span>Aurora Glassmorphism 卡片</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight">高透明度毛玻璃与光子渐变融合</h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            BeautifulUI 独家调校的高斯模糊衰减与微白边内描边，即使在高对比度图像上方也能保持文字清晰可读。
          </p>
          <div className="pt-2 flex gap-3">
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs font-bold shadow-lg hover:opacity-90 transition-opacity">
              体验交互质感
            </button>
          </div>
        </div>
      </div>

      {/* 嵌入组件 2: 创意拟态卡片与微渐变胶囊 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border bg-card/60 p-6 backdrop-blur-md shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Gem className="h-4 w-4 text-purple-500" />
              <h3 className="font-bold text-sm">Glass Card · 多层视差磨砂</h3>
            </div>
            <Badge variant="outline" className="text-[10px]">Glassmorphism</Badge>
          </div>
          <p className="text-xs text-muted-foreground">内嵌微弱反射光层，支持悬浮微景深回弹。</p>
          <div className="p-4 rounded-xl border bg-gradient-to-b from-white/5 to-white/0 border-white/10">
            <div className="flex items-center justify-between text-xs">
              <span>状态检测</span>
              <span className="text-emerald-500 font-bold">100% 优雅</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-card/60 p-6 backdrop-blur-md shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-rose-500" />
              <h3 className="font-bold text-sm">AI-Native 决策卡 (HITL)</h3>
            </div>
            <Badge variant="outline" className="text-[10px]">Decision</Badge>
          </div>
          <p className="text-xs text-muted-foreground">针对高风险操作设计的智能体人工确认卡片。</p>
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="rounded-xl text-xs bg-rose-500 hover:bg-rose-600 text-white">批准操作</Button>
            <Button size="sm" variant="outline" className="rounded-xl text-xs">驳回并修正</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
