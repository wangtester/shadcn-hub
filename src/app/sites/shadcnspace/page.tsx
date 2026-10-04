"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, ExternalLink, TrendingUp, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ShadcnSpaceOverview() {
  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">457+ 生产级区块</Badge>
          <a
            href="https://shadcnspace.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-emerald-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>shadcnspace.com</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnSpace · 生产级落地页与仪表盘区块库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          开箱即用的落地页与控制台模块。下方直接嵌入精选营销 Hero 与业务指标卡片，点击即刻体验。
        </p>
      </div>

      {/* 嵌入组件 1: 营销首屏 Hero 区块 */}
      <div className="rounded-2xl border bg-gradient-to-b from-card to-muted/20 p-8 text-center space-y-4 shadow-xs">
        <Badge variant="outline" className="text-xs font-mono">
          🚀 Next.js 15 + Tailwind CSS v4 Ready
        </Badge>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground max-w-xl mx-auto">
          将产品推向市场的极速现代化 Blocks
        </h2>
        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
          经过严格可访问性与响应式断点测试，完美对齐设计规范。
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Button size="sm" className="rounded-xl text-xs bg-emerald-600 hover:bg-emerald-700 text-white">
            立即部署区块
          </Button>
          <Button size="sm" variant="outline" className="rounded-xl text-xs">
            查阅技术文档
          </Button>
        </div>
      </div>

      {/* 嵌入组件 2: 仪表盘核心指标双卡 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold">总交易额 (GMV)</CardTitle>
            <Badge className="bg-emerald-500/10 text-emerald-600 text-[10px]">Realtime</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black font-mono tracking-tight">$842,910.00</div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-600 font-semibold">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>+23.4% 环比昨日</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold">合规验证通过率</CardTitle>
            <Badge variant="outline" className="text-[10px]">SOC2 Type II</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black font-mono tracking-tight text-emerald-600">99.98%</div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>所有安全基线审计已全绿通过</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
