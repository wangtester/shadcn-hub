"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Layers, ArrowUpRight, Zap, Eye, MousePointer } from "lucide-react";

export default function AceternityCardsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-cyan-500/10 text-cyan-500 border-cyan-500/20 font-medium">Aceternity Cards</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方 4 大顶奢 3D 视觉卡片</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">视觉卡片 · 3D 透视与眩光反光交互</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          通过真实的 CSS 3D transform、多层 perspective 景深与鼠标跟随反光，赋予传统平面卡片以殿堂级的立体质感。
        </p>
      </div>

      {/* 1. 3D Card Effect & Glare Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 3D Card Effect */}
        <div className="group/card rounded-2xl border bg-gradient-to-br from-card to-cyan-500/5 p-6 shadow-xs hover:shadow-2xl transition-all duration-300 [perspective:1000px]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-cyan-500 font-bold uppercase tracking-wider">3D Perspective</span>
            <Badge variant="outline" className="text-[10px]">CSS 3D</Badge>
          </div>
          <div className="relative rounded-xl overflow-hidden border bg-zinc-950 p-6 text-white group-hover/card:[transform:rotateX(8deg)_rotateY(-8deg)_translateZ(20px)] transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">Aceternity 3D Card</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              悬停时触发 3D 倾斜角度，卡片内容根据 Z 轴层级分离漂浮，呈现深邃层次。
            </p>
            <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-800">
              <span className="text-xs font-mono text-cyan-400">$29 / month</span>
              <button className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-xs font-semibold text-black transition-colors">
                立即解锁
              </button>
            </div>
          </div>
        </div>

        {/* Glare Card */}
        <div className="group/glare relative rounded-2xl border bg-card/60 p-6 shadow-xs overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover/glare:translate-x-full transition-transform duration-700 pointer-events-none" />
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-blue-500 font-bold uppercase tracking-wider">Glare Hover</span>
            <Badge variant="outline" className="text-[10px]">反光材质</Badge>
          </div>
          <div className="rounded-xl border bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">Titanium Series</span>
              <Zap className="h-4 w-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black mt-2 tracking-tight">OLED Black Edition</div>
            <p className="text-xs text-zinc-400 mt-2">
              具有高折射率金属全息眩光层，鼠标掠过时触发柔和高光掠影。
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex justify-between">
              <span>有限限量</span>
              <span className="text-white font-mono">042 / 500</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Focus Cards 聚焦点亮卡片组 */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">Focus Cards · 聚焦点亮矩阵</h2>
          <p className="text-xs text-muted-foreground">当光标悬停某一卡片时，该卡片保持锐利高光，其余未聚焦卡片自动平滑虚化衰减</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "神经渲染核心", desc: "自适应光线步进算法", tag: "AI Compute", color: "from-cyan-500/20" },
            { title: "全息透镜滤镜", desc: "次世代 3D 着色器管道", tag: "Shaders", color: "from-purple-500/20" },
            { title: "物理粒子引擎", desc: "千万级流体实时解算", tag: "Fluid Dynamics", color: "from-pink-500/20" },
          ].map((card, idx) => {
            const isHovered = hoveredCard === idx;
            const isAnyHovered = hoveredCard !== null;
            const isDimmed = isAnyHovered && !isHovered;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-2xl border bg-card/80 transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "scale-105 border-cyan-500/60 shadow-xl shadow-cyan-500/10"
                    : isDimmed
                    ? "opacity-40 blur-[1px] scale-95"
                    : "hover:border-border"
                }`}
              >
                <Badge variant="outline" className="text-[10px] mb-2">{card.tag}</Badge>
                <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{card.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-cyan-500 font-medium">
                  <span>聚焦查看架构</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
