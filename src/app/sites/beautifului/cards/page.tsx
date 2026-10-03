"use client";

import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gem, Sparkles, Shield, ArrowUpRight } from "lucide-react";

export default function BeautifulUICardsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="BeautifulUI · 创意拟态卡片 (Creative Glass Cards)"
        description="抓取自 beautifului.dev 的多重半透明玻璃拟态卡片与精细漫反射边框"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Glass Card 1 */}
        <div className="relative rounded-3xl border border-white/20 dark:border-white/10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl p-7 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Glassmorphism Panel</span>
              <Badge variant="outline" className="text-[10px]">磨砂透光</Badge>
            </div>
            <h3 className="text-xl font-bold tracking-tight">半透明磨砂毛玻璃卡片</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              采用 backdrop-blur-2xl 与 1px 浅白描边，能够与底层背景产生高保真度的色彩交织与物理折射，常用于高奢品牌或艺术展示页面。
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
            <span className="text-xs text-muted-foreground">材质：超清高透磨砂</span>
            <Button size="sm" variant="outline" className="rounded-full text-xs h-7 gap-1">
              查看源码 <ArrowUpRight className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Glass Card 2 */}
        <div className="relative rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-card to-card p-7 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-500">Prism Light Card</span>
              <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 text-[10px]">棱镜折射</Badge>
            </div>
            <h3 className="text-xl font-bold tracking-tight">色彩折射立体卡片</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              内嵌动态紫色光晕与内发光阴影，将传统平面卡片升华为具备纵深维度的立体容器。
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-purple-500/10">
            <span className="text-xs text-muted-foreground">材质：动态棱镜渐变</span>
            <Button size="sm" className="rounded-full text-xs h-7 gap-1 bg-purple-600 hover:bg-purple-500 text-white">
              立即套用 <ArrowUpRight className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
