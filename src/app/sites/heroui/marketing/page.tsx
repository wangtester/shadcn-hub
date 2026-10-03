"use client";

import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, ArrowRight, Heart, Star, Shield, Zap } from "lucide-react";

export default function HeroUIMarketingPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="HeroUI Pro · 营销与视觉表现组件"
        description="抓取自 heroui.pro 的标志性大圆角设计、柔和暗色背景、高饱和度渐变徽标与拟态卡片"
      />

      {/* HeroUI 标志性 Glow Hero */}
      <Section title="Block 1: HeroUI 柔光霓虹 Hero" description="结合大圆角与径向渐变背光的现代科技首屏">
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-b from-pink-500/10 via-card to-card p-8 md:p-14 text-center">
          {/* 背光光晕 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-pink-500/15 blur-3xl pointer-events-none rounded-full" />

          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-500 mb-6 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            <span>HeroUI Pro 旗舰设计语言</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
            让每一个组件都拥有 <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">极致圆润质感</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            摒弃生硬的直角边框，采用 iOS 与 macOS 同级别的超平滑倒角曲率，兼具优雅质感与无障碍规范。
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold shadow-lg shadow-pink-500/25 border-0">
              立即探索组件库
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 rounded-2xl">
              在线交互演练场
            </Button>
          </div>
        </div>
      </Section>

      {/* 特色特性卡片 */}
      <Section title="Block 2: 磨砂玻璃拟态特性卡 (Glassmorphic Cards)" description="带大圆角与细微内阴影的 HeroUI 标志性卡片">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "自适应色彩提取", icon: <PaletteIcon className="h-5 w-5 text-pink-500" />, desc: "根据用户壁纸或品牌色一键衍生出多阶梯深浅配色。" },
            { title: "流体平滑手势", icon: <Zap className="h-5 w-5 text-purple-500" />, desc: "所有抽屉、弹窗和菜单均配备阻尼感精确的手势拖拽反馈。" },
            { title: "全键盘完全合规", icon: <Shield className="h-5 w-5 text-indigo-500" />, desc: "符合 W3C ARIA 规范，焦点环具备微发光动态追踪动效。" },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl border-white/10 bg-card/60 backdrop-blur-md shadow-xs hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-muted/60 flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <CardTitle className="text-base font-bold">{item.title}</CardTitle>
                <CardDescription className="text-xs leading-relaxed mt-1">
                  {item.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

function PaletteIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  );
}
