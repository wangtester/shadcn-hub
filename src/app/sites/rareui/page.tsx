"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Orbit, Sparkles, Wand2, ArrowRight, ExternalLink } from "lucide-react";

export default function RareUIOverview() {
  const [orbColor, setOrbColor] = useState("from-purple-500 via-pink-500 to-indigo-500");

  const colors = [
    { label: "霓虹极光", value: "from-purple-500 via-pink-500 to-indigo-500" },
    { label: "青蓝赛博", value: "from-cyan-500 via-blue-500 to-emerald-500" },
    { label: "烈焰暖阳", value: "from-amber-500 via-rose-500 to-orange-500" },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/30">RareUI 稀缺组件库</Badge>
          <a
            href="https://www.rareui.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-purple-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>rareui.com</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">RareUI · 罕见而惊艳的高阶交互动效</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          逆向工程还原全球先锋网站中的稀缺微动效。下方直接嵌入代表性 Fluid Orb 流体球与发光悬浮卡，点击直接交互。
        </p>
      </div>

      {/* 嵌入组件 1: Fluid Orb 流体彩虹球 */}
      <div className="relative rounded-2xl border bg-zinc-950 overflow-hidden p-8 text-white flex flex-col items-center justify-center min-h-[220px]">
        {/* Dynamic Orb */}
        <div className={`w-40 h-40 rounded-full bg-gradient-to-tr ${orbColor} blur-2xl opacity-70 animate-pulse transition-all duration-700 pointer-events-none`} />

        <div className="relative z-10 text-center space-y-3 -mt-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs">
            <Orbit className="h-3.5 w-3.5 text-purple-400" />
            <span>Fluid Orb 流体蠕动球</span>
          </div>
          <h2 className="text-xl font-bold">自适应物理渐变混合光球</h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setOrbColor(c.value)}
                className="px-3 py-1 rounded-xl text-xs bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-colors"
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 嵌入组件 2: 悬浮发光卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs relative overflow-hidden group">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">Magnetic Glow · 磁吸悬浮发光卡</CardTitle>
            <CardDescription className="text-xs">鼠标悬停时产生柔和的外扩多层霓虹光环</CardDescription>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center">
            <div className="p-4 rounded-xl border bg-gradient-to-r from-card to-purple-500/10 border-purple-500/30 text-xs font-semibold flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>悬浮触发外扩霓虹</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border bg-card/60 shadow-xs relative overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">Floating Island · 悬浮微操作岛</CardTitle>
            <CardDescription className="text-xs">仿动态岛灵动的药丸状上下文交互栏</CardDescription>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center">
            <div className="px-5 py-2.5 rounded-full border bg-card/90 shadow-xl backdrop-blur-md flex items-center gap-3 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-bold">Rare Island 激活</span>
              <span className="text-muted-foreground font-mono">⌘K</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
