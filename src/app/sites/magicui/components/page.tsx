"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  Database,
  Cloud,
  Cpu,
  Server,
  Code2,
  Workflow,
  Radio,
  Play,
  RotateCw,
  Share2,
} from "lucide-react";

export default function MagicUIComponentsPage() {
  const [beamActive, setBeamActive] = useState(true);
  const [rippleKey, setRippleKey] = useState(0);

  const triggerRipple = () => {
    setRippleKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-10 max-w-5xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs font-mono bg-indigo-500/10 text-indigo-600 border-indigo-500/30">
            Magic UI Components
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">5 项高阶动效实装</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">动效交互核心组件库</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Magic UI 最受设计工程师推崇的 5 款核心动效基元，包含微动效跑马灯、节点数据光束、轨道公转与流光边框。
        </p>
      </div>

      {/* 1. Marquee 跑马灯 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              1. Marquee 无缝跑马灯 (双向无限循环)
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              通过无缝水平循环滚动的徽章流与评价卡，展示客户评价、技术栈或合作伙伴，鼠标悬停时自动平滑暂停。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">CSS Hardware Accelerated</Badge>
        </div>

        <Card className="overflow-hidden border-border bg-card/50">
          <div className="relative flex flex-col gap-3 py-6 overflow-hidden">
            {/* 左右羽化遮罩 */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* 第一排正向滚动 */}
            <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
              {[
                { name: "Next.js", desc: "React Framework", tag: "App Router" },
                { name: "Tailwind CSS", desc: "Utility-First CSS", tag: "v4.0" },
                { name: "shadcn/ui", desc: "Re-usable components", tag: "Radix" },
                { name: "TypeScript", desc: "Type safety", tag: "Strict" },
                { name: "Turbopack", desc: "Ultra-fast bundler", tag: "Rust" },
                { name: "Lucide Icons", desc: "Clean vector glyphs", tag: "1400+" },
                { name: "Next.js", desc: "React Framework", tag: "App Router" },
                { name: "Tailwind CSS", desc: "Utility-First CSS", tag: "v4.0" },
                { name: "shadcn/ui", desc: "Re-usable components", tag: "Radix" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-background/80 shadow-2xs hover:border-primary/50 transition-colors w-60 shrink-0"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-xs text-primary shrink-0">
                    {tech.name.slice(0, 2)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold truncate">{tech.name}</span>
                      <span className="text-[9px] px-1 py-0.2 rounded bg-muted text-muted-foreground font-mono">{tech.tag}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 第二排反向滚动 */}
            <div className="flex w-max gap-4 animate-marquee-reverse hover:[animation-play-state:paused]">
              {[
                { name: "BoardUI", desc: "Dashboard & Charts", tag: "19 Cards" },
                { name: "Magic UI", desc: "Design Engineer", tag: "Motion" },
                { name: "Aceternity", desc: "Visual Aesthetics", tag: "Lamp" },
                { name: "Refero", desc: "Real UI Benchmarking", tag: "Tokens" },
                { name: "RareUI", desc: "Physical Micro-Interactions", tag: "Fluid" },
                { name: "beUI", desc: "Text & Card Spotlight", tag: "Glow" },
                { name: "BoardUI", desc: "Dashboard & Charts", tag: "19 Cards" },
                { name: "Magic UI", desc: "Design Engineer", tag: "Motion" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-background/80 shadow-2xs hover:border-primary/50 transition-colors w-60 shrink-0"
                >
                  <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center font-bold text-xs text-indigo-600 shrink-0">
                    {tech.name.slice(0, 2)}
                  </div>
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold truncate">{tech.name}</span>
                      <span className="text-[9px] px-1 py-0.2 rounded bg-indigo-500/10 text-indigo-600 font-mono">{tech.tag}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground truncate">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* 2. Animated Beam 动态数据流光束 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              2. Animated Beam 节点数据光束 (API 与网络流可视化)
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              模拟微服务、API 网关与数据库之间的数据流转，在节点间投射流动光波与脉冲。
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setBeamActive((v) => !v)}
            className="text-xs h-7 gap-1"
          >
            <Radio className="h-3 w-3" />
            <span>{beamActive ? "暂停数据流" : "恢复数据流"}</span>
          </Button>
        </div>

        <Card className="p-8 border-border bg-gradient-to-b from-card to-muted/20 relative overflow-hidden">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-3xl mx-auto py-4">
            {/* 左侧源端 */}
            <div className="flex flex-col gap-6 z-10">
              <div className="flex items-center gap-3 p-3 rounded-2xl border bg-background shadow-xs w-44">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Cloud className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Cloud Gateway</div>
                  <div className="text-[10px] text-muted-foreground font-mono">edge.us-east.1</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl border bg-background shadow-xs w-44">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Vector Database</div>
                  <div className="text-[10px] text-muted-foreground font-mono">pgvector cluster</div>
                </div>
              </div>
            </div>

            {/* 中间核心处理 Hub */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative h-20 w-20 rounded-3xl border-2 border-primary/40 bg-background shadow-lg flex flex-col items-center justify-center gap-1">
                <div className="h-10 w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-bold font-mono">AI CORE</span>
                {beamActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                )}
              </div>
              <span className="text-[11px] text-muted-foreground font-medium mt-2">LLM Orchestration</span>
            </div>

            {/* 右侧目标端 */}
            <div className="flex flex-col gap-6 z-10">
              <div className="flex items-center gap-3 p-3 rounded-2xl border bg-background shadow-xs w-44">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0">
                  <Workflow className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Agent Runtime</div>
                  <div className="text-[10px] text-muted-foreground font-mono">Autonomous task</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl border bg-background shadow-xs w-44">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                  <Server className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Client Webhook</div>
                  <div className="text-[10px] text-muted-foreground font-mono">HTTP 200 OK</div>
                </div>
              </div>
            </div>

            {/* SVG 连线数据光束 */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none stroke-muted-foreground/20"
              style={{ strokeWidth: "2" }}
            >
              <line x1="25%" y1="35%" x2="50%" y2="50%" strokeDasharray="4 4" />
              <line x1="25%" y1="65%" x2="50%" y2="50%" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="75%" y2="35%" strokeDasharray="4 4" />
              <line x1="50%" y1="50%" x2="75%" y2="65%" strokeDasharray="4 4" />

              {beamActive && (
                <>
                  <circle r="4" fill="#6366f1">
                    <animateMotion
                      path="M 220 70 L 380 110"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="#10b981">
                    <animateMotion
                      path="M 220 150 L 380 110"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="#a855f7">
                    <animateMotion
                      path="M 380 110 L 540 70"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="#f59e0b">
                    <animateMotion
                      path="M 380 110 L 540 150"
                      dur="2.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}
            </svg>
          </div>
        </Card>
      </section>

      {/* 3. Border Beam 流光边框卡片 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              3. Border Beam 流光卡片边框 (无休止环绕流光)
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              光束在卡片边缘无尽环绕流动，常用于产品主打方案、Pro 订阅卡或重点推荐区域。
            </p>
          </div>
          <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-500/30">
            High Conversion CTA
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A: 极客流光订阅卡 */}
          <div className="relative rounded-2xl p-[1.5px] overflow-hidden bg-gradient-to-r from-transparent via-primary/20 to-transparent">
            {/* 环绕流光光斑 */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#6366f1_0deg,#a855f7_120deg,transparent_180deg)] animate-[spin_4s_linear_infinite]" />
            <div className="relative rounded-[15px] bg-card p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    PRO ARCHITECTURE
                  </Badge>
                  <span className="text-xs font-mono font-bold text-primary">Border Beam Active</span>
                </div>
                <h3 className="text-lg font-bold">全托管企业级 AI 节点</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  具备流光高亮边框，提供 99.99% SLA 保障、专属隔离 VPC 部署与无限并发流式吞吐。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black">$49</span>
                  <span className="text-xs text-muted-foreground"> / 月</span>
                </div>
                <Button size="sm" className="text-xs font-semibold">
                  立即订阅
                </Button>
              </div>
            </div>
          </div>

          {/* Card B: 极光柔雾流光 */}
          <div className="relative rounded-2xl p-[1.5px] overflow-hidden">
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#ec4899_0deg,#8b5cf6_140deg,transparent_200deg)] animate-[spin_5s_linear_infinite]" />
            <div className="relative rounded-[15px] bg-card p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-pink-600 border-pink-500/30">
                    AURORA GLOW
                  </Badge>
                  <span className="text-xs font-mono text-muted-foreground">Speed: 5.0s</span>
                </div>
                <h3 className="text-lg font-bold">Design Tokens 自动同步器</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  在 Figma 样式更新时毫秒级推送至 Tailwind CSS 变量树，设计师与前端工程师告别重复手动对齐。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t flex items-center justify-between">
                <span className="text-xs text-muted-foreground">支持 Figma Plugin v3</span>
                <Button variant="secondary" size="sm" className="text-xs font-semibold">
                  安装集成
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Orbiting Circles 卫星同心圆轨道 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              4. Orbiting Circles 卫星轨道系统 (生态集成与公转)
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              展示产品核心周围丰富的生态插件与技术栈，不同半径的同心圆以不同速率平滑旋转。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">Pure CSS Transform</Badge>
        </div>

        <Card className="h-96 relative flex items-center justify-center overflow-hidden border-border bg-card">
          {/* 中心核心 */}
          <div className="z-20 h-16 w-16 rounded-2xl bg-primary text-primary-foreground shadow-xl flex flex-col items-center justify-center font-bold text-xs gap-1">
            <Sparkles className="h-6 w-6" />
            <span className="text-[9px] font-mono tracking-tighter">HUB</span>
          </div>

          {/* 内圈轨道 (半径 90px) */}
          <div className="absolute h-[180px] w-[180px] rounded-full border border-dashed border-primary/20 pointer-events-none" />
          <div
            className="absolute z-10 animate-[spin_12s_linear_infinite]"
            style={{ width: "180px", height: "180px" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full border bg-background shadow-md flex items-center justify-center text-indigo-500 hover:scale-125 transition-transform cursor-pointer">
              <Code2 className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full border bg-background shadow-md flex items-center justify-center text-emerald-500 hover:scale-125 transition-transform cursor-pointer">
              <Database className="h-4 w-4" />
            </div>
          </div>

          {/* 外圈轨道 (半径 160px) */}
          <div className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-muted-foreground/20 pointer-events-none" />
          <div
            className="absolute z-10 animate-[spin_24s_linear_infinite_reverse]"
            style={{ width: "320px", height: "320px" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full border bg-background shadow-md flex items-center justify-center text-purple-500 hover:scale-125 transition-transform cursor-pointer">
              <Cloud className="h-4 w-4" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-9 w-9 rounded-full border bg-background shadow-md flex items-center justify-center text-amber-500 hover:scale-125 transition-transform cursor-pointer">
              <Zap className="h-4 w-4" />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 h-9 w-9 rounded-full border bg-background shadow-md flex items-center justify-center text-pink-500 hover:scale-125 transition-transform cursor-pointer">
              <Workflow className="h-4 w-4" />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 h-9 w-9 rounded-full border bg-background shadow-md flex items-center justify-center text-sky-500 hover:scale-125 transition-transform cursor-pointer">
              <Cpu className="h-4 w-4" />
            </div>
          </div>
        </Card>
      </section>

      {/* 5. Ripple 交互水波纹容器 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              5. Interactive Ripple 扩散水波纹 (聚焦交互背景)
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              点击卡片中央触发向外扩散的多层级同心圆涟漪，常用于主视觉 Hero 背景与唤醒提示。
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={triggerRipple}
            className="text-xs h-7 gap-1"
          >
            <Play className="h-3 w-3" />
            <span>触发水波涟漪</span>
          </Button>
        </div>

        <Card
          onClick={triggerRipple}
          className="h-72 relative flex flex-col items-center justify-center overflow-hidden border-border bg-gradient-to-b from-card to-background cursor-pointer select-none group"
        >
          {/* 同心圆波纹 */}
          <div key={rippleKey} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[140, 220, 300, 380, 460].map((size, idx) => (
              <div
                key={idx}
                className="absolute rounded-full border border-primary/20 animate-ping opacity-30"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${3 + idx * 0.8}s`,
                  animationIterationCount: "infinite",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-md">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
              <Radio className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">全网拓扑雷达已就绪</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              轻点任意区域激发微物理震荡波，波纹将以声学阻尼函数向外平滑衰减。
            </p>
            <span className="text-[10px] text-primary font-mono mt-3 px-2 py-0.5 rounded-full bg-primary/10">
              CLICK TO PULSE
            </span>
          </div>
        </Card>
      </section>
    </div>
  );
}
