"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Copy,
  Check,
  Play,
  Zap,
  ShieldCheck,
  Star,
  Layers,
  ExternalLink,
} from "lucide-react";

export default function ShadcnStoreHeroPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* 头部说明 */}
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">Marketing Blocks</Badge>
          <span className="text-xs text-muted-foreground font-mono">Hero Sections 官方全景实装</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Hero Sections · 营销落地页首屏区块
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          专为高转化率产品落地页打造，包含 SaaS 微光、极客终端与非对称图文 3 款实机生产级 Blocks。
        </p>
      </div>

      {/* Block 1: Modern SaaS Glow Hero */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Block #01: Modern SaaS 发光落地首屏
          </h2>
          <Badge variant="outline" className="text-[10px]">Glow / CTA</Badge>
        </div>

        <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-card via-card to-blue-500/5 p-8 md:p-14 text-center shadow-xs">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-500/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Next.js 15 & React 19 原生对齐</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              重新定义现代 Web 开发的交互生产力
            </h3>

            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              基于精巧的原子设计理念，开箱即得符合现代人机工学与高转化率审美的全场景生产级区块。
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <Button size="sm" className="rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white px-5 shadow-sm gap-1.5">
                <span>即刻开始免费试用</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
              <Button size="sm" variant="outline" className="rounded-xl text-xs px-5 gap-1.5">
                <Play className="h-3 w-3" />
                <span>观看 2 分钟产品演示</span>
              </Button>
            </div>

            {/* 用户评价小背书 */}
            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-foreground">超过 14,000+</span>
              <span>资深工程师的一致选择</span>
            </div>
          </div>
        </section>
      </div>

      {/* Block 2: Terminal & Code Hero */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Block #02: Developer-First 开发者命令行首屏
          </h2>
          <Badge variant="outline" className="text-[10px]">CLI / Interactive</Badge>
        </div>

        <section className="rounded-2xl border bg-card/60 p-8 md:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-xs font-mono">Developer Toolkit</Badge>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                只需一行命令，所有组件尽在掌控
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                无需冗长配置，直接通过 shadcn CLI 将源码写入您的本地项目。完全透明、无黑盒封装，拥有 100% 代码控制权。
              </p>
              <div className="flex gap-3 pt-2">
                <Button size="sm" className="rounded-xl text-xs bg-indigo-600 hover:bg-indigo-700 text-white">
                  查阅 CLI 安装指南
                </Button>
              </div>
            </div>

            {/* 终端卡片 */}
            <div className="rounded-xl border bg-zinc-950 text-zinc-100 overflow-hidden shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/80 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-zinc-400 ml-2">bash - bash</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                  <span>{copied ? "已复制" : "复制代码"}</span>
                </button>
              </div>
              <div className="p-4 space-y-2 text-[11px] leading-relaxed">
                <div className="text-zinc-500"># 安装营销首屏 Blocks</div>
                <div className="text-emerald-400 flex items-center gap-1.5">
                  <span className="text-zinc-500">$</span>
                  <span>npx shadcn@latest add @shadcnstore/hero-section-1</span>
                </div>
                <div className="text-zinc-400 pt-1">✔ Resolving dependencies...</div>
                <div className="text-zinc-400">✔ Writing components/blocks/hero-section.tsx</div>
                <div className="text-indigo-400 font-bold">✔ Success! Component ready to render.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
