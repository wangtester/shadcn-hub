"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  ExternalLink,
  Laptop,
  Terminal,
  Folder,
  Settings,
  MessageSquare,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function MagicUIOverviewPage() {
  const [activeDock, setActiveDock] = useState<string>("finder");
  const [shimmerClicked, setShimmerClicked] = useState(false);

  const dockItems = [
    { id: "finder", label: "Finder", icon: <Folder className="h-5 w-5 text-blue-500" /> },
    { id: "terminal", label: "Terminal", icon: <Terminal className="h-5 w-5 text-emerald-500" /> },
    { id: "chat", label: "Messages", icon: <MessageSquare className="h-5 w-5 text-pink-500" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-5 w-5 text-amber-500" /> },
  ];

  return (
    <div className="space-y-10">
      {/* 顶部标语与来源 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 font-medium">Magic UI 全生态</Badge>
          <a
            href="https://magicui.design/docs/components"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-indigo-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>magicui.design/docs/components</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Magic UI · 设计工程师的高级动效库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          专为 Landing Page 与高转化界面打造的微交互圣经。下方直接嵌入官方最受推崇的代表性实机组件，点击即刻体验，无需跳转。
        </p>
      </div>

      {/* 嵌入组件 1: macOS 风格 Dock 交互坞 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              1. Dock · macOS 拟真弹性交互坞
            </h2>
            <p className="text-xs text-muted-foreground">鼠标悬浮时产生平滑物理缩放波形，支持点击激活微状态</p>
          </div>
          <Badge variant="outline" className="text-[10px]">直接嵌入运行</Badge>
        </div>

        <div className="p-8 rounded-2xl border bg-gradient-to-b from-card/80 to-muted/30 backdrop-blur-md flex flex-col items-center justify-center min-h-[160px]">
          <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-card/90 border shadow-2xl backdrop-blur-xl">
            {dockItems.map((item) => {
              const isActive = activeDock === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveDock(item.id)}
                  className={`p-3 rounded-xl transition-all duration-200 relative group hover:-translate-y-2 hover:scale-125 ${
                    isActive ? "bg-muted shadow-xs" : "hover:bg-muted/60"
                  }`}
                >
                  {item.icon}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-[10px] px-2 py-0.5 rounded shadow-sm whitespace-nowrap pointer-events-none">
                    {item.label}
                  </div>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-[11px] text-muted-foreground mt-4">
            当前激活应用: <span className="font-bold text-foreground capitalize">{activeDock}</span>
          </p>
        </div>
      </div>

      {/* 嵌入组件 2: Shimmer Button & Border Beam 流光边框 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shimmer Button */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">2. Shimmer Button · 珍珠光泽流动按钮</CardTitle>
            <CardDescription className="text-xs">斜向流光持续在暗色按钮四周律动掠过</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => setShimmerClicked(true)}
              className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-95 transition-transform"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 py-1 text-xs font-semibold text-white backdrop-blur-3xl gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>{shimmerClicked ? "已触发高阶微交互！" : "即刻体验 Shimmer Button"}</span>
              </span>
            </button>
            <p className="text-[11px] text-muted-foreground">原生纯 CSS 实现，零 JS 掉帧隐患</p>
          </CardContent>
        </Card>

        {/* Border Beam 卡片 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs relative overflow-hidden">
          <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
            <div className="w-full h-full rounded-2xl bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent animate-[shine_4s_linear_infinite]" />
          </div>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">3. Border Beam · 环绕追踪光束</CardTitle>
            <CardDescription className="text-xs">一束高亮微光沿卡片四周边框做闭环追踪巡游</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center text-center p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-2">
              <Zap className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold">自闭合光子轨迹卡片</p>
            <p className="text-[11px] text-muted-foreground mt-1 max-w-xs">
              适合重点推介定价卡（Featured Pricing）、推荐产品或 VIP 徽章容器。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
