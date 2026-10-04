"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink, Zap, Layers, MapPin, ArrowRight } from "lucide-react";

export default function AceternityOverviewPage() {
  const [pinHovered, setPinHovered] = useState(false);

  return (
    <div className="space-y-10">
      {/* 顶部标语与来源 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 font-medium">Aceternity 全生态</Badge>
          <a
            href="https://ui.aceternity.com/components"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-cyan-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>ui.aceternity.com/components</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Aceternity UI · 暗黑极客视差与 3D 艺术美学</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          开创性的 3D 透视倾斜、Lamp 聚光神灯与流光轨迹系统。下方直接嵌入官方最著名的代表性实机组件，点击直接交互。
        </p>
      </div>

      {/* 嵌入组件 1: Lamp Effect 聚光神灯舞台 */}
      <div className="relative rounded-2xl border bg-zinc-950 overflow-hidden text-center py-12 px-6">
        {/* Lamp Cone 光锥 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/30 blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-cyan-400 shadow-[0_0_20px_#06b6d4]" />

        <div className="relative z-10 max-w-lg mx-auto space-y-3">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs font-mono">
            Aceternity Lamp Core
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
            Lamp Effect 聚光舞台
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            神灯光锥从上方倾泻而下，柔和漫反射点亮核心标题。无需冗长跳转，直接在此感知聚光呼吸感。
          </p>
        </div>
      </div>

      {/* 嵌入组件 2: 3D Pin 针点悬浮浮层 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          onMouseEnter={() => setPinHovered(true)}
          onMouseLeave={() => setPinHovered(false)}
          className="rounded-2xl border bg-card/60 p-6 shadow-xs relative group cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <CardTitle className="text-base font-bold">3D Pin · 针点立体悬浮卡</CardTitle>
            <Badge variant="outline" className="text-[10px]">3D Pin</Badge>
          </div>
          <div className="p-6 rounded-xl border bg-zinc-900 text-white relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
            {pinHovered && (
              <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                <MapPin className="h-3 w-3" /> Pin 激活
              </div>
            )}
            <h4 className="font-bold text-sm">San Francisco · Cluster 01</h4>
            <p className="text-xs text-zinc-400 mt-1">边缘节点算力池已部署完成，延迟小于 4ms。</p>
          </div>
          <p className="text-[11px] text-muted-foreground mt-3">鼠标移入触发 3D 浮层悬起与坐标指示针点</p>
        </div>

        {/* 嵌入组件 3: Hover Border Gradient */}
        <div className="rounded-2xl border bg-card/60 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <CardTitle className="text-base font-bold">Hover Border Gradient · 渐变光斑环绕</CardTitle>
              <Badge variant="outline" className="text-[10px]">Radial Border</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              跟随光标实时计算角度的渐变高光边框，让操作具有真实的物理光线折射感。
            </p>
          </div>

          <div className="pt-6">
            <div className="p-4 rounded-xl border border-cyan-500/40 bg-gradient-to-r from-card via-cyan-500/5 to-card flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-500" />
                <span className="text-xs font-semibold">体验光斑跟随微交互</span>
              </div>
              <Button size="sm" className="rounded-xl text-xs bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">
                触碰激活
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
