"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, MousePointerClick, Zap, ExternalLink } from "lucide-react";

export default function BeUIOverview() {
  const [pulseCount, setPulseCount] = useState(0);

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-cyan-500/10 text-cyan-600 border-cyan-500/30">beUI 动效库</Badge>
          <a
            href="https://beui.dev"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>beui.dev</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">beUI · 现代交互动画与物理动效</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          基于 Motion 与 Tailwind CSS 构建的高级动画组件。下方直接嵌入代表性动效卡片与按钮，点击即刻体验，无需二次跳转。
        </p>
      </div>

      {/* 嵌入组件 1: 流光按钮与微触觉反馈 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">Shimmer & Ripple 动态流光按钮</CardTitle>
            <CardDescription className="text-xs">按下触发真实阻尼回弹与流光外扩</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => setPulseCount((prev) => prev + 1)}
              className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg hover:shadow-cyan-500/25 active:scale-95 transition-all duration-150 flex items-center gap-2"
            >
              <MousePointerClick className="h-4 w-4" />
              <span>点击触发微动效反馈 ({pulseCount})</span>
            </button>
            <p className="text-[11px] text-muted-foreground">支持 active:scale-95 触觉反馈</p>
          </CardContent>
        </Card>

        {/* 嵌入组件 2: Spotlight 光斑跟随卡片 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          <CardHeader className="pb-3 relative z-10">
            <CardTitle className="text-base font-bold">Spotlight 光斑跟随卡片</CardTitle>
            <CardDescription className="text-xs">高对比度环境下的微光扩散聚焦</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center text-center p-6 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-2">
              <Zap className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold">自适应暗色高光容器</p>
            <p className="text-[11px] text-muted-foreground mt-1 max-w-xs">
              通过真实物理衰减计算，光斑随鼠标游移呈现细腻光影层级。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
