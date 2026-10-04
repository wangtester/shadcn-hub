"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ExternalLink, Wand2, Compass, Layers, CheckCircle2, Box, Cpu } from "lucide-react";

export default function MagicUIOverviewPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      {/* 顶部标语 */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-background p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="outline" className="bg-indigo-500/10 text-indigo-600 border-indigo-500/30 font-mono text-xs">
            magicui.design
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Design Engineers 动效圣经
          </Badge>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          Magic UI：专为设计工程师打造的高级 UI 库
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl leading-relaxed">
          在现代 Web 产品中，“设计工程师（Design Engineer）”正在重新定义产品的品质边界。Magic UI 弥合了 Figma 设计稿与生产级代码之间的鸿沟，
          提供开箱即用的 Marquee、Bento Grid、Animated Beam、Meteors 等高质量动效与区块，让每一个 Landing Page 和功能介绍都具备殿堂级的交互质感。
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/sites/magicui/components">
            <Button className="gap-2 text-xs md:text-sm font-semibold shadow-xs">
              <Sparkles className="h-4 w-4" />
              <span>探索 5 款核心动效组件</span>
            </Button>
          </Link>
          <Link href="/sites/magicui/blocks">
            <Button variant="outline" className="gap-2 text-xs md:text-sm font-semibold">
              <Layers className="h-4 w-4" />
              <span>浏览 Bento 与营销区块</span>
            </Button>
          </Link>
          <a
            href="https://magicui.design"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground ml-2 font-medium"
          >
            <span>访问 Magic UI 官方文档</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* 核心设计哲学拆解 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-indigo-500/20 bg-indigo-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-2">
              <Sparkles className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">Subtle & Delightful 细腻微动效</CardTitle>
            <CardDescription className="text-xs">
              动效不是为了炫技，而是为了引导注意力与传递层级。所有交互均拥有精准的物理阻尼与流光衰减。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-purple-500/20 bg-purple-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 mb-2">
              <Layers className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">Bento-First 非对称空间架构</CardTitle>
            <CardDescription className="text-xs">
              针对现代复杂业务特性展示，提供基于 Bento Grid 的模块化卡片叙事能力，视觉重心错落有致。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="border-pink-500/20 bg-pink-500/5">
          <CardHeader className="pb-2">
            <div className="h-8 w-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-600 mb-2">
              <Cpu className="h-4 w-4" />
            </div>
            <CardTitle className="text-base">shadcn/ui 原生无缝融合</CardTitle>
            <CardDescription className="text-xs">
              与 Tailwind CSS v4 及 shadcn 共享设计变量体系（Tokens），无需额外复杂的引入配置即可一键复制套用。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* 实录收录导航 */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight">本站收录的 Magic UI 专区</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">Components</Badge>
                <span className="text-xs text-muted-foreground font-mono">/sites/magicui/components</span>
              </div>
              <CardTitle className="text-base mt-2">核心动效组件 (5 项实装)</CardTitle>
              <CardDescription className="text-xs">
                收录 Marquee 跑马灯、Animated Beam 动态数据流、Border Beam 流光边框、Orbiting Circles 行星轨道、Ripple 水波纹容器。
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/sites/magicui/components" className="w-full">
                <Button variant="secondary" size="sm" className="w-full justify-between text-xs">
                  <span>查看实机交互体验</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">Blocks</Badge>
                <span className="text-xs text-muted-foreground font-mono">/sites/magicui/blocks</span>
              </div>
              <CardTitle className="text-base mt-2">Bento 与着陆页区块 (3 项实装)</CardTitle>
              <CardDescription className="text-xs">
                收录 Magic Bento Grid 互动网格、Meteors 划破星空特性卡、Retro Grid 3D 网格营销落地页首屏。
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/sites/magicui/blocks" className="w-full">
                <Button variant="secondary" size="sm" className="w-full justify-between text-xs">
                  <span>查看完整区块架构</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
