"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ExternalLink, Wand2, Compass, Layers, ShieldCheck, Eye } from "lucide-react";

export default function AceternityOverviewPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      {/* 顶部标语 */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-background p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-600 border-cyan-500/30 font-mono text-xs">
            ui.aceternity.com
          </Badge>
          <Badge variant="secondary" className="text-xs">
            暗黑极客美学典范
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Aceternity UI：将网站视觉拉升至艺术高度
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          由著名全栈设计师 Manu Arora 倾力打造。Aceternity 改变了传统 Web 组件“灰白平铺”的死板面貌，将 3D 透视倾斜、
          流体光锥、聚光神灯效应与高频星光粒子无缝植入 shadcn 与 Tailwind CSS 生态，让专业设计师的产品瞬间具备顶奢科技感。
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/sites/aceternity/components">
            <Button className="gap-2 text-xs md:text-sm font-semibold shadow-xs">
              <Sparkles className="h-4 w-4" />
              <span>体验 Lamp 聚光与 3D Pin 组件</span>
            </Button>
          </Link>
          <Link href="/sites/aceternity/blocks">
            <Button variant="outline" className="gap-2 text-xs md:text-sm font-semibold">
              <Layers className="h-4 w-4" />
              <span>查看 Tracing Beam 追踪区块</span>
            </Button>
          </Link>
          <a
            href="https://ui.aceternity.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground ml-2 font-medium"
          >
            <span>访问 Aceternity 官网</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* 3 大核心审美支柱 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-cyan-500/20 bg-cyan-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-600 mb-2">
              <Sparkles className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">Atmospheric 光影氛围渲染</CardTitle>
            <CardDescription className="text-xs">
              通过放射状渐变、光锥投射与反向高光，让原本二维平面的界面呈现出舞台剧般的纵深感。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-blue-500/20 bg-blue-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 mb-2">
              <Eye className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">3D Perspective 三维透视触感</CardTitle>
            <CardDescription className="text-xs">
              卡片跟随光标倾斜、图钉从平面弹出、粒子在空间漂浮，赋予数字界面物理世界的重力与触觉。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-purple-500/20 bg-purple-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-2">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">Copy-Paste 现代化免维护</CardTitle>
            <CardDescription className="text-xs">
              采用与 shadcn 完全一致的 Copy-Paste 源码所有权模式，无黑盒打包，所有动效变量透明可定制。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* 收录入口 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-[10px]">Visual Components</Badge>
              <span className="text-xs text-muted-foreground font-mono">/sites/aceternity/components</span>
            </div>
            <CardTitle className="text-base mt-2">聚光与 3D 视觉基元 (4 项实装)</CardTitle>
            <CardDescription className="text-xs">
              收录 Lamp Header（聚光神灯效应）、Sparkles & Stars（星空粒子）、3D Pin Card（空间图钉悬浮）、Hover Border Gradient（流动渐变边框）。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/sites/aceternity/components" className="w-full">
              <Button variant="secondary" size="sm" className="w-full justify-between text-xs">
                <span>体验视觉动效</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-[10px]">Immersive Blocks</Badge>
              <span className="text-xs text-muted-foreground font-mono">/sites/aceternity/blocks</span>
            </div>
            <CardTitle className="text-base mt-2">光束追踪与背景展台 (2 款区块)</CardTitle>
            <CardDescription className="text-xs">
              收录 Tracing Beam 页面长文阅读轨迹光线跟踪、Background Beams 全屏科技光网展台区块。
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/sites/aceternity/blocks" className="w-full">
              <Button variant="secondary" size="sm" className="w-full justify-between text-xs">
                <span>查看实景区块</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
