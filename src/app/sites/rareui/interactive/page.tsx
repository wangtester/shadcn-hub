"use client";

import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wand2, Sparkles, Home, Layers, Settings, Share2, Bookmark } from "lucide-react";

export default function RareUIInteractivePage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="RareUI · 流体与罕见微交互 (Fluid & Micro)"
        description="抓取自 rareui.com 的代表性组件：物理模拟蠕动的 Fluid Orb 光晕球与自适应悬浮岛"
      />

      {/* Component 1: Fluid Orb */}
      <Section title="Component 1: Fluid Orb 流体光晕球" description="由非规则贝塞尔曲率与高斯模糊构成的梦幻流动球体">
        <div className="relative h-64 w-full rounded-2xl border bg-zinc-950 overflow-hidden flex items-center justify-center">
          {/* 蠕动流体光晕 */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 blur-2xl opacity-75 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 blur-xl opacity-60 animate-[spin_8s_linear_infinite]" />

          <div className="relative z-10 text-center space-y-2">
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">Fluid Orb 核心渲染</Badge>
            <p className="text-xl font-bold text-white tracking-tight">物理感官的流动光晕</p>
            <p className="text-xs text-zinc-400 max-w-sm">常作为 AI 智能体对话中枢、语音唤醒与灵感卡片的主题焦点</p>
          </div>
        </div>
      </Section>

      {/* Component 2: Floating Action Island */}
      <Section title="Component 2: Floating Action Island 悬浮灵动岛" description="脱离常规文档流、固定悬浮于底部的高密度胶囊控制条">
        <div className="p-8 rounded-2xl border bg-muted/20 flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground">现代移动端与桌面端通用的底部悬浮胶囊：</p>
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-white/20 bg-background/80 backdrop-blur-xl shadow-2xl">
            <button className="h-9 px-3 rounded-full hover:bg-muted text-xs font-medium flex items-center gap-1.5 transition-colors">
              <Home className="h-3.5 w-3.5" /> 首页
            </button>
            <button className="h-9 px-3 rounded-full hover:bg-muted text-xs font-medium flex items-center gap-1.5 transition-colors">
              <Layers className="h-3.5 w-3.5" /> 组件库
            </button>
            <button className="h-9 px-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> AI 生成
            </button>
            <button className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
              <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
              <Share2 className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}
