"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bookmark,
  Compass,
  Zap,
} from "lucide-react";

export default function AceternityBlocksPage() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <div className="space-y-12 max-w-5xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs font-mono bg-cyan-500/10 text-cyan-600 border-cyan-500/30">
            Aceternity Blocks
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">2 款沉浸式科技区块</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">光束追踪与背景展台区块库</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Aceternity UI 在内容叙事与科技展台中广泛应用的标志性区块，提供长文光线追踪流与全景光束展台。
        </p>
      </div>

      {/* 区块 1: Tracing Beam */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              Block #01: Tracing Beam 垂直光束阅读追踪流
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              左侧随内容展开垂直延伸的光线路径，每个核心章节自动点亮对应的光束节点。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">Content Narrative</Badge>
        </div>

        <Card className="p-6 md:p-10 border-border bg-card">
          <div className="relative pl-6 md:pl-10 space-y-10">
            {/* 垂直追踪光线 */}
            <div className="absolute left-2 md:left-4 top-2 bottom-2 w-0.5 bg-muted">
              {/* 已激活的渐变光束 */}
              <div
                className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_10px_#22d3ee] transition-all duration-500"
                style={{ height: `${(activeStep / 3) * 100}%` }}
              />
            </div>

            {/* 步骤 1 */}
            <div
              onClick={() => setActiveStep(1)}
              className="relative cursor-pointer group"
            >
              <div
                className={`absolute -left-[27px] md:-left-[35px] top-1 h-5 w-5 rounded-full border-2 bg-background flex items-center justify-center transition-all ${
                  activeStep >= 1 ? "border-cyan-400 shadow-[0_0_10px_#22d3ee]" : "border-muted"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeStep >= 1 ? "bg-cyan-400" : "bg-muted"
                  }`}
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-500 font-semibold">PHASE 01</span>
                <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                  Design Tokens 标准化与原子规范抽离
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  在设计之初确立色彩坡度、圆角曲线（2xl / 3xl）与排版比例尺，为后续复杂组件开发奠定严格统一的工程基石。
                </p>
              </div>
            </div>

            {/* 步骤 2 */}
            <div
              onClick={() => setActiveStep(2)}
              className="relative cursor-pointer group"
            >
              <div
                className={`absolute -left-[27px] md:-left-[35px] top-1 h-5 w-5 rounded-full border-2 bg-background flex items-center justify-center transition-all ${
                  activeStep >= 2 ? "border-blue-500 shadow-[0_0_10px_#3b82f6]" : "border-muted"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeStep >= 2 ? "bg-blue-500" : "bg-muted"
                  }`}
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-blue-500 font-semibold">PHASE 02</span>
                <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                  注入细腻物理微交互与阻尼衰减
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  通过 Spring 物理弹簧模型与贝塞尔过渡，让卡片悬停、弹窗展开和标签切换均具备物理实物的自然质感。
                </p>
              </div>
            </div>

            {/* 步骤 3 */}
            <div
              onClick={() => setActiveStep(3)}
              className="relative cursor-pointer group"
            >
              <div
                className={`absolute -left-[27px] md:-left-[35px] top-1 h-5 w-5 rounded-full border-2 bg-background flex items-center justify-center transition-all ${
                  activeStep >= 3 ? "border-purple-500 shadow-[0_0_10px_#a855f7]" : "border-muted"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full transition-colors ${
                    activeStep >= 3 ? "bg-purple-500" : "bg-muted"
                  }`}
                />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-purple-500 font-semibold">PHASE 03</span>
                <h3 className="text-base font-bold group-hover:text-primary transition-colors">
                  生产级静态构建与极致性能调优
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  消除运行时计算损耗，将复杂的粒子与动效全部交给 GPU 硬件加速管线，保证 100% 静态化预渲染。
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 区块 2: Background Beams Hero Showcase */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Block #02: Background Beams 光束科技首屏展台
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              斜切交织的光束背景为企业级控制台、开发者发布会或重大功能上线提供高阶主视觉。
            </p>
          </div>
          <Badge variant="outline" className="text-[10px]">Showcase Hero</Badge>
        </div>

        <div className="relative overflow-hidden rounded-2xl border bg-slate-950 text-white p-10 md:p-16 text-center shadow-2xl">
          {/* 背景交错光线 SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-cyan-500/40"
            style={{ strokeWidth: "1.5" }}
          >
            <line x1="0" y1="20%" x2="100%" y2="80%" strokeDasharray="6 6" />
            <line x1="0" y1="80%" x2="100%" y2="20%" strokeDasharray="6 6" />
            <line x1="20%" y1="0" x2="80%" y2="100%" strokeDasharray="6 6" />
            <circle cx="50%" cy="50%" r="180" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
          </svg>

          {/* 径向光晕 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/20 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              <Zap className="h-3.5 w-3.5" />
              <span>Background Beams Active</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              连接全球智慧的神经中枢
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Aceternity 背景光束系统通过微妙的线性渐变与暗色网格交织，让每一场新版本发布都震撼人心。
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Button size="sm" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-xs shadow-lg shadow-cyan-500/30">
                申请技术内测
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-xs">
                阅读架构白皮书
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
