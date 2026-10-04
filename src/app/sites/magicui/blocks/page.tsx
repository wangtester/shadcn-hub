"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Globe,
  FileCode,
  Bell,
  CheckCircle2,
  Terminal,
  ExternalLink,
  ChevronRight,
  Search,
} from "lucide-react";

export default function MagicUIBlocksPage() {
  const [activeTab, setActiveTab] = useState<"bento" | "meteors" | "retro">("bento");

  return (
    <div className="space-y-10 max-w-5xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs font-mono bg-indigo-500/10 text-indigo-600 border-indigo-500/30">
            Magic UI Blocks
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">3 款高质感落地页区块</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">着陆页与营销高质感区块库</h1>
        <p className="text-sm text-muted-foreground mt-1">
          专为 Landing Page 和功能特性推介打造的高转化区块，结合非对称 Bento 排版与透视 3D 复古网格。
        </p>
      </div>

      {/* 区块 1: Magic Bento Grid */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Block #01: Magic Bento Grid 非对称便当盒架构
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              利用不同长宽比的网格单元构建丰富的故事线，每张卡片均内嵌专属微动效。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">Responsive 3-Column</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: 跨 2 列的大尺寸特性卡 */}
          <Card className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-card to-muted/20 border-border group hover:border-primary/40 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] text-indigo-600 border-indigo-500/30">
                  Global Latency
                </Badge>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg font-bold mt-2">全球毫秒级边缘加速节点</CardTitle>
              <CardDescription className="text-xs">
                在六大洲 280+ 边缘数据中心完成自动就近路由，端到端延迟低至 12ms。
              </CardDescription>
            </CardHeader>
            <CardContent className="h-44 relative flex items-center justify-center overflow-hidden">
              {/* 背景雷达波纹与世界节点模拟 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <div className="w-56 h-56 rounded-full border border-primary/20 animate-ping" />
                <div className="w-40 h-40 rounded-full border border-primary/30" />
                <div className="w-24 h-24 rounded-full border border-dashed border-primary/40" />
              </div>
              <div className="relative z-10 flex items-center gap-3 bg-background/80 backdrop-blur px-4 py-2 rounded-xl border shadow-xs">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium">Anycast IP: 198.51.100.44 · 0 packet loss</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0 text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
              <span>99.999% High Availability</span>
              <ChevronRight className="h-3 w-3" />
            </CardFooter>
          </Card>

          {/* Card 2: 垂直通知卡 */}
          <Card className="relative overflow-hidden bg-card border-border hover:border-primary/40 transition-all flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] text-amber-600 border-amber-500/30">
                  Real-time Feed
                </Badge>
                <Bell className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-base font-bold mt-2">即时事件流感知</CardTitle>
              <CardDescription className="text-xs">
                系统关键事件毫秒推送。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 py-1">
              {[
                { title: "新节点上线", time: "刚刚", type: "success" },
                { title: "TLS 证书已轮换", time: "2m 前", type: "info" },
                { title: "跨区容灾测试", time: "15m 前", type: "warn" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/40 border text-xs"
                >
                  <span className="font-medium truncate">{item.title}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">{item.time}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="pt-2 text-[11px] text-muted-foreground">
              集成 Webhook 与 Slack
            </CardFooter>
          </Card>

          {/* Card 3: 代码与安全 */}
          <Card className="relative overflow-hidden bg-card border-border hover:border-primary/40 transition-all flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] text-emerald-600 border-emerald-500/30">
                  Zero Trust
                </Badge>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-base font-bold mt-2">零信任加密传输</CardTitle>
              <CardDescription className="text-xs">
                端到端 mTLS 双向认证通道。
              </CardDescription>
            </CardHeader>
            <CardContent className="py-2">
              <div className="p-3 rounded-lg bg-muted/60 font-mono text-[11px] text-muted-foreground space-y-1">
                <div>$ curl -sSL https://api.mesh</div>
                <div className="text-emerald-600 font-semibold">&gt; 200 OK (TLS_AES_256_GCM)</div>
              </div>
            </CardContent>
            <CardFooter className="pt-2 text-[11px] text-muted-foreground">
              SOC2 Type II 认证标准
            </CardFooter>
          </Card>

          {/* Card 4: 跨 2 列的极速性能 */}
          <Card className="md:col-span-2 relative overflow-hidden bg-gradient-to-tr from-card via-muted/10 to-background border-border hover:border-primary/40 transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] text-purple-600 border-purple-500/30">
                  Turbopack Powered
                </Badge>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg font-bold mt-2">毫秒级冷启动与零感知切换</CardTitle>
              <CardDescription className="text-xs">
                采用微前端模块联邦与轻量 Islands 架构，大幅降低首次可交互时间（TTI）。
              </CardDescription>
            </CardHeader>
            <CardContent className="h-28 flex items-center justify-around">
              <div className="text-center">
                <div className="text-2xl font-black text-primary">0.12s</div>
                <div className="text-[11px] text-muted-foreground">First Contentful Paint</div>
              </div>
              <div className="h-8 w-[1px] bg-border" />
              <div className="text-center">
                <div className="text-2xl font-black text-emerald-600">100/100</div>
                <div className="text-[11px] text-muted-foreground">Lighthouse Performance</div>
              </div>
              <div className="h-8 w-[1px] bg-border" />
              <div className="text-center">
                <div className="text-2xl font-black text-indigo-600">0ms</div>
                <div className="text-[11px] text-muted-foreground">Cumulative Layout Shift</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 区块 2: Meteors 流星卡片 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Block #02: Meteors 流星划破夜空特性卡
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              斜切 215° 划过的多轨道流星拖尾，为黑暗模式带来深邃梦幻的宇宙科幻质感。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">Pure CSS Meteor Trails</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-zinc-900 to-black p-8 text-white shadow-xl">
            {/* 流星轨道 */}
            <span className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent" />
            <span
              className="absolute top-1/4 left-1/3 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[60px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
              style={{ animationDelay: "1.2s" }}
            />
            <span
              className="absolute top-3/4 left-2/3 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[70px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
              style={{ animationDelay: "2.4s" }}
            />

            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-purple-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">次世代量子计算引擎</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                在每秒数百万次高频交易环境下，流星粒子渲染管线提供极致流畅的视觉呈现，支持 60FPS 丝滑不掉帧。
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button size="sm" className="bg-white text-black hover:bg-zinc-200 text-xs font-semibold">
                  立即启动沙盒
                </Button>
                <span className="text-[11px] text-zinc-400 font-mono">20+ Active Meteors</span>
              </div>
            </div>
          </div>

          {/* Card B */}
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-indigo-950 via-slate-900 to-black p-8 text-white shadow-xl">
            <span
              className="absolute top-1/3 left-1/4 h-0.5 w-0.5 rounded-full bg-cyan-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[80px] before:h-[1px] before:bg-gradient-to-r before:from-[#06b6d4] before:to-transparent"
              style={{ animationDelay: "0.5s" }}
            />
            <span
              className="absolute top-2/3 left-1/2 h-0.5 w-0.5 rounded-full bg-indigo-400 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[60px] before:h-[1px] before:bg-gradient-to-r before:from-[#6366f1] before:to-transparent"
              style={{ animationDelay: "1.8s" }}
            />

            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">AI Agent 指令流沙箱</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                全隔离安全沙盒环境，支持 Python、Node.js 与 Bash 实时交互运行，流星轨迹象征实时执行的任务指令。
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button size="sm" variant="outline" className="text-xs font-semibold border-white/20 hover:bg-white/10 text-white">
                  查看控制台
                </Button>
                <span className="text-[11px] text-zinc-400 font-mono">Isolated Runtime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 区块 3: Retro Grid Hero 首屏营销区块 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Block #03: Retro Grid 3D 网格首屏营销区块
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              复古未来主义透视网格配合顶部渐变光晕，是众多硅谷初创公司官网首屏的标志性视觉。
            </p>
          </div>
          <Badge variant="outline" className="text-[10px]">Landing Page Hero</Badge>
        </div>

        <div className="relative overflow-hidden rounded-2xl border bg-background py-16 px-6 text-center shadow-lg">
          {/* 3D 透视复古网格背景 */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden opacity-60"
            style={{
              perspective: "200px",
            }}
          >
            <div
              className="absolute inset-0 [transform:rotateX(35deg)]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(120, 119, 198, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 119, 198, 0.2) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                height: "300%",
                width: "100%",
                transformOrigin: "center 0",
              }}
            />
          </div>

          {/* 顶部中央高光晕染 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl pointer-events-none" />

          {/* 内容区 */}
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 border border-indigo-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Magic UI · The Future of Landing Pages</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight">
              让每一次交互，都令人心驰神往
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              基于纯 CSS 与现代化微交互构建，为专业设计工程师赋予打造天花板级产品界面的超能力。
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <Button className="gap-2 text-xs font-semibold shadow-xs">
                <span>立即开始集成</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button variant="outline" className="text-xs font-semibold">
                查看 Github 源码
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
