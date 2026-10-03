import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gem, Layers } from "lucide-react";

export default function BeautifulUIOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-rose-500/10 text-rose-600 border-rose-500/30">美学视觉库</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://www.beautifului.dev</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">BeautifulUI · 艺术感与高颜值组件集合</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          BeautifulUI 聚焦于视觉美学与精致细节，汇聚了创新的极光背景、暗黑磨砂玻璃面（Glassmorphism）、
          微渐变高光徽章与动态交互网格，让界面摆脱千篇一律的白底方框，充满高级感与视觉吸引力。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/beautifului/accents">
            <Button size="sm">体验视觉亮点组件</Button>
          </Link>
          <Link href="/sites/beautifului/cards">
            <Button size="sm" variant="outline">体验创意拟态卡片</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/beautifului/accents" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-rose-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-rose-500" />
                视觉亮点组件 (Visual Accents)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              微渐变胶囊徽章、极光极地光晕、悬浮行动栏与高光粒子背景
            </p>
          </div>
        </Link>

        <Link href="/sites/beautifului/cards" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-rose-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Gem className="h-4 w-4 text-purple-500" />
                创意拟态卡片 (Creative Glass Cards)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              高斯模糊微透明面板、高反差微内阴影、多层悬停视差卡片
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
