"use client";

import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Compass, Shield, Stars } from "lucide-react";

export default function RareUICardsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="RareUI · 悬浮发光卡片 (Glow Cards)"
        description="抓取自 rareui.com 的彩虹漫反射光芒与超质感展示面卡片"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rainbow Edge Card */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-xl group">
          <div className="rounded-2xl bg-zinc-950 p-6 text-zinc-100 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-center mb-3">
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] border-0">
                  彩虹微流光
                </Badge>
                <Stars className="h-4 w-4 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Rainbow Gradient Rim</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                利用 1px 外包裹层精准模拟次世代硬件的高硬度阳极氧化彩虹边缘，无需加载复杂 3D 模型即可达到极致质感。
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-zinc-800 text-xs text-zinc-500 font-mono">
              rare-ui/rainbow-rim-card
            </div>
          </div>
        </div>

        {/* Ambient Glow Card */}
        <div className="relative rounded-2xl border border-zinc-800 bg-[#090a0f] p-6 text-zinc-100 shadow-2xl overflow-hidden flex flex-col justify-between">
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />
          <div>
            <div className="flex justify-between items-center mb-3">
              <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 text-[10px]">
                环境光反射
              </Badge>
              <Compass className="h-4 w-4 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">Ambient Glow Surface</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              在右下角与关键操作节点处模拟全局光照（Ambient Light），使界面充满物理维度的生动质感。
            </p>
          </div>
          <div className="pt-6 mt-4 border-t border-zinc-800 text-xs text-zinc-500 font-mono">
            rare-ui/ambient-glow-card
          </div>
        </div>
      </div>
    </div>
  );
}
