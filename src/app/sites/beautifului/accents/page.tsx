"use client";

import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Gem, Zap, Flame, Compass, Star } from "lucide-react";

export default function BeautifulUIAccentsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="BeautifulUI · 视觉亮点组件 (Visual Accents)"
        description="抓取自 beautifului.dev 的高光微渐变徽章、极光色彩背景与拟态光晕"
      />

      {/* Gradient Badges */}
      <Section title="Accent 1: 渐变光晕徽标 (Gradient Badges)" description="多色调复合渐变微胶囊标签">
        <div className="flex flex-wrap gap-4 items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 shadow-sm shadow-purple-500/30">
            <Sparkles className="h-3.5 w-3.5" /> 旗舰星标
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-400 to-cyan-500 shadow-sm shadow-emerald-500/30">
            <Zap className="h-3.5 w-3.5" /> 实时极速
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-amber-400 to-orange-500 shadow-sm shadow-amber-500/30">
            <Flame className="h-3.5 w-3.5" /> 热门推荐
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 shadow-sm shadow-rose-500/30">
            <Gem className="h-3.5 w-3.5" /> 高阶设计
          </span>
        </div>
      </Section>

      {/* Aurora Background */}
      <Section title="Accent 2: Aurora 极光流光背景卡片" description="在暗黑底色上渲染漫游的极光色彩">
        <div className="relative rounded-3xl p-8 overflow-hidden border border-white/10 bg-zinc-950 text-white min-h-[220px] flex flex-col justify-between shadow-2xl">
          {/* 极光层 */}
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 blur-[80px] opacity-40 pointer-events-none" />
          <div className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-600 blur-[80px] opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <Badge className="bg-white/10 backdrop-blur-md border-white/20 text-white mb-3">极光视觉层</Badge>
            <h3 className="text-2xl font-black tracking-tight">Aurora Fluid Visuals</h3>
            <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
              融合了双重高斯模糊球体与色彩渐变。即使在简单的文本容器后方，也能营造极高品质的视听级未来感氛围。
            </p>
          </div>
          <div className="relative z-10 pt-4 flex gap-3">
            <Button size="sm" className="rounded-full bg-white text-black hover:bg-zinc-200 font-bold text-xs">探索极光规范</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
