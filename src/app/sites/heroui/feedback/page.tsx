"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Smile, Heart, ThumbsUp, Flame, Sparkles, TrendingUp, TrendingDown,
  Check, ArrowRight, CornerRightDown, Layers, MousePointerClick,
  Sliders, MoreVertical, Copy, Share2, Star, Trash2
} from "lucide-react";

export default function HeroUIFeedbackPage() {
  // Emoji 点赞状态
  const [reactions, setReactions] = useState<{ [key: string]: number }>({
    "🔥": 42,
    "❤️": 128,
    "🚀": 89,
    "✨": 64,
  });
  const [activeReaction, setActiveReaction] = useState<string | null>("❤️");

  // Segment 选择状态
  const [segment, setSegment] = useState("overview");

  // Stepper 当前步
  const [step, setStep] = useState(2);

  const toggleReaction = (emoji: string) => {
    if (activeReaction === emoji) {
      setActiveReaction(null);
      setReactions((prev) => ({ ...prev, [emoji]: prev[emoji] - 1 }));
    } else {
      if (activeReaction) {
        setReactions((prev) => ({ ...prev, [activeReaction]: prev[activeReaction] - 1 }));
      }
      setActiveReaction(emoji);
      setReactions((prev) => ({ ...prev, [emoji]: prev[emoji] + 1 }));
    }
  };

  return (
    <div className="space-y-10">
      {/* 头部 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-pink-500/10 text-pink-500 border-pink-500/20 font-medium">HeroUI Pro Interactions</Badge>
          <span className="text-xs text-muted-foreground font-mono">微交互与导航反馈基元</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Feedback & Navigation · 极致柔顺的手势与反馈</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          HeroUI 的标志性微交互规范：Emoji 反应互动条 (Emoji Reaction)、动态走势数字 (Number Value)、
          大圆角分段器 (Segment)、步骤向导条 (Stepper) 以及轻触弹性反馈 (Pressable Feedback)。
        </p>
      </div>

      {/* 1. Emoji Reaction & Number Value */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emoji Reaction */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smile className="h-4 w-4 text-pink-500" />
                <CardTitle className="text-base font-bold">Emoji Reaction Button · 表情互动胶囊</CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px]">微反馈</Badge>
            </div>
            <CardDescription className="text-xs">支持动态累加计数、轻触放大脉冲与选中高亮胶囊</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl border bg-muted/10 space-y-3">
              <p className="text-xs text-muted-foreground">“这个新版本的设计规范实在太惊艳了，大圆角和微光晕让人眼前一亮！”</p>

              {/* Reaction Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {Object.entries(reactions).map(([emoji, count]) => {
                  const isActive = activeReaction === emoji;
                  return (
                    <button
                      key={emoji}
                      onClick={() => toggleReaction(emoji)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-pink-500/15 border-pink-500/50 text-pink-600 scale-105 shadow-xs"
                          : "bg-card hover:bg-muted border-border/80 text-muted-foreground hover:scale-105"
                      }`}
                    >
                      <span className="text-sm">{emoji}</span>
                      <span className="text-[11px] font-mono">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Number Value */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                <CardTitle className="text-base font-bold">Number Value · 动态走势数字</CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px]">趋势标示</Badge>
            </div>
            <CardDescription className="text-xs">带有正负趋势色标、基线对比与货币格式化</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl border bg-card/40">
                <span className="text-[11px] text-muted-foreground">年化周转率</span>
                <div className="text-xl font-extrabold mt-1">94.2%</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-500 mt-1 font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  <span>+12.4% vs 去年同期</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border bg-card/40">
                <span className="text-[11px] text-muted-foreground">退订流失率</span>
                <div className="text-xl font-extrabold mt-1">0.82%</div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-500 mt-1 font-semibold">
                  <TrendingDown className="h-3 w-3" />
                  <span>-0.15% 持续改善</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2. Segment (大圆角分段选择器) & Stepper (步骤条) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Segment */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-purple-500" />
                <CardTitle className="text-base font-bold">Segment · 饱满分段切换胶囊</CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px]">HeroUI Segment</Badge>
            </div>
            <CardDescription className="text-xs">具有平滑背景滑块的高质感分段选择器</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-1 rounded-2xl bg-muted/30 border inline-flex gap-1 w-full">
              {[
                { id: "overview", label: "概览分析" },
                { id: "logs", label: "系统日志" },
                { id: "traffic", label: "流量拓扑" },
                { id: "config", label: "参数配置" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSegment(tab.id)}
                  className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    segment === tab.id
                      ? "bg-card text-foreground shadow-xs border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl border bg-muted/10 text-xs text-muted-foreground text-center">
              当前激活视窗: <span className="font-bold text-foreground capitalize">{segment}</span>
            </div>
          </CardContent>
        </Card>

        {/* Stepper */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-blue-500" />
                <CardTitle className="text-base font-bold">Stepper · 现代步骤向导条</CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px]">第 {step} / 3 步</Badge>
            </div>
            <CardDescription className="text-xs">清晰的完成、激活与未激活多状态节点流</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer" onClick={() => setStep(1)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= 1 ? "bg-pink-500 text-white shadow-xs" : "bg-muted text-muted-foreground"}`}>
                  {step > 1 ? <Check className="h-4 w-4" /> : "1"}
                </div>
                <span className="text-[11px] font-medium">配置基本信息</span>
              </div>

              <div className={`h-0.5 flex-1 transition-colors ${step >= 2 ? "bg-pink-500" : "bg-muted"}`} />

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer" onClick={() => setStep(2)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= 2 ? "bg-pink-500 text-white shadow-xs ring-4 ring-pink-500/20" : "bg-muted text-muted-foreground"}`}>
                  {step > 2 ? <Check className="h-4 w-4" /> : "2"}
                </div>
                <span className="text-[11px] font-bold text-foreground">绑定 API 密钥</span>
              </div>

              <div className={`h-0.5 flex-1 transition-colors ${step >= 3 ? "bg-pink-500" : "bg-muted"}`} />

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer" onClick={() => setStep(3)}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= 3 ? "bg-pink-500 text-white shadow-xs" : "bg-muted text-muted-foreground"}`}>
                  3
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">验证并发布</span>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <Button size="sm" variant="outline" className="rounded-xl text-xs" disabled={step <= 1} onClick={() => setStep(step - 1)}>
                上一步
              </Button>
              <Button size="sm" className="rounded-xl text-xs bg-pink-500 hover:bg-pink-600 text-white" disabled={step >= 3} onClick={() => setStep(step + 1)}>
                下一步
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. Pressable Feedback & Context Menu 模拟 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pressable Feedback */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <MousePointerClick className="h-4 w-4 text-amber-500" />
              <CardTitle className="text-base font-bold">Pressable Feedback · 触觉按压回弹</CardTitle>
            </div>
            <CardDescription className="text-xs">支持 active:scale-95、触感阻尼与高光发散</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2.5">
              <button className="px-4 py-2 rounded-xl bg-pink-500 text-white text-xs font-semibold shadow-xs hover:bg-pink-600 active:scale-95 transition-all duration-150">
                主操作 (Primary Glow)
              </button>
              <button className="px-4 py-2 rounded-xl border bg-card text-foreground text-xs font-semibold shadow-xs hover:bg-muted active:scale-95 transition-all duration-150">
                次操作 (Secondary)
              </button>
              <button className="px-4 py-2 rounded-xl border border-destructive/30 text-destructive text-xs font-semibold hover:bg-destructive/10 active:scale-95 transition-all duration-150">
                危险操作 (Destructive)
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Context Menu 模拟 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <MoreVertical className="h-4 w-4 text-purple-500" />
              <CardTitle className="text-base font-bold">Context Menu · 现代化右键菜单</CardTitle>
            </div>
            <CardDescription className="text-xs">具有磨砂材质、阴影层次与快捷键提示符</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-56 rounded-xl border bg-card/90 backdrop-blur-md shadow-xl p-1.5 space-y-1 text-xs">
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <span className="flex items-center gap-2"><Copy className="h-3.5 w-3.5 text-muted-foreground" /> 复制组件</span>
                <span className="text-[10px] text-muted-foreground font-mono">⌘C</span>
              </div>
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-muted cursor-pointer transition-colors">
                <span className="flex items-center gap-2"><Share2 className="h-3.5 w-3.5 text-muted-foreground" /> 分享预览</span>
                <span className="text-[10px] text-muted-foreground font-mono">⇧⌘S</span>
              </div>
              <div className="h-px bg-border my-1" />
              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-destructive/10 text-destructive cursor-pointer transition-colors">
                <span className="flex items-center gap-2"><Trash2 className="h-3.5 w-3.5" /> 移至废纸篓</span>
                <span className="text-[10px] opacity-70 font-mono">⌫</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
