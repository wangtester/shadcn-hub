"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ShadcnStoreFeaturesPage() {
  return (
    <div className="space-y-12">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">Marketing Blocks</Badge>
          <span className="text-xs text-muted-foreground font-mono">Features & Bento Grids</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Features · 产品特性矩阵与便当盒区块
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          直观传达产品价值与核心技术指标，采用非对称 Bento 排版与多维图标卡片。
        </p>
      </div>

      {/* Block 1: Bento Grid 特性矩阵 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Block #01: Bento Grid 非对称特性矩阵
          </h2>
          <Badge variant="outline" className="text-[10px]">3-Column Bento</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: 跨 2 列大卡片 */}
          <div className="md:col-span-2 rounded-2xl border bg-gradient-to-br from-card via-card to-blue-500/5 p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-[10px]">核心引擎</Badge>
              <h3 className="text-xl md:text-2xl font-bold">分布式高可用边缘渲染架构</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-lg">
                在全球 320+ 个边缘 PoP 节点自动分发静态预渲染资产，首屏 TTFB 稳定控制在 20ms 以内，无畏突发百万并发峰值。
              </p>
            </div>
            <div className="pt-6 grid grid-cols-3 gap-3 border-t mt-6">
              <div>
                <p className="text-xs text-muted-foreground">全球延迟</p>
                <p className="text-lg font-black text-blue-600 font-mono mt-0.5">&lt; 20ms</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">SLA 履约率</p>
                <p className="text-lg font-black text-emerald-600 font-mono mt-0.5">99.99%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">边缘节点</p>
                <p className="text-lg font-black text-foreground font-mono mt-0.5">320+</p>
              </div>
            </div>
          </div>

          {/* Card 2: 单列卡片 */}
          <div className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold">企业级安全合规</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                全链路通过 SOC2 Type II 审计，全站默认开启 256 位传输层加密与 RBAC 权限隔离。
              </p>
            </div>
            <div className="pt-4 text-xs font-semibold text-purple-600 flex items-center gap-1">
              <span>阅读合规白皮书</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>

          {/* Card 3: 底部 3 张并排卡片 */}
          <div className="rounded-2xl border bg-card/60 p-6 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
              <Zap className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold">极速热重载</h4>
            <p className="text-xs text-muted-foreground">Turbopack 秒级增量编译，保存即见反馈。</p>
          </div>

          <div className="rounded-2xl border bg-card/60 p-6 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
              <Cpu className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold">AI Agent 原生</h4>
            <p className="text-xs text-muted-foreground">专为流式推理与智能体决策设计的回调挂钩。</p>
          </div>

          <div className="rounded-2xl border bg-card/60 p-6 space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2">
              <Database className="h-4 w-4" />
            </div>
            <h4 className="text-sm font-bold">无缝数据流绑定</h4>
            <p className="text-xs text-muted-foreground">解耦状态机，一键套接 Supabase 与 Prisma。</p>
          </div>
        </div>
      </div>
    </div>
  );
}
