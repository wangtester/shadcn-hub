"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Grid, PartyPopper } from "lucide-react";

export default function MagicUIBackgroundsPage() {
  const [confettiActive, setConfettiActive] = useState(false);

  const triggerConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 3000);
  };

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 font-medium">Magic UI Backgrounds</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方 4 大视觉空间纹理</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">背景图案 · 空间纵深与粒子几何</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          点阵、流光方格与庆祝粒子，为暗色与浅色页面注入细腻的科技氛围感。所有背景均为纯 CSS/SVG 实现，极致轻量。
        </p>
      </div>

      {/* 1. Dot Pattern & Grid Pattern */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dot Pattern */}
        <Card className="rounded-2xl border overflow-hidden shadow-xs relative">
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Dot Pattern · 点阵网格背景</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Radial CSS</Badge>
            </div>
            <CardDescription className="text-xs">细腻的微点阵排列，适合作为 Hero 区域底层画布</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex items-center justify-center relative z-10">
            <div className="px-5 py-3 rounded-2xl bg-card/90 backdrop-blur-md border shadow-lg text-center">
              <p className="text-sm font-bold text-foreground">精准点阵阵列</p>
              <p className="text-xs text-muted-foreground mt-0.5">16px 间距 · 1px 优雅微点</p>
            </div>
          </CardContent>
        </Card>

        {/* Grid Pattern */}
        <Card className="rounded-2xl border overflow-hidden shadow-xs relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Grid Pattern · 方格网格背景</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Linear Grid</Badge>
            </div>
            <CardDescription className="text-xs">经典 CAD 与工程图纸风格的几何线条</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex items-center justify-center relative z-10">
            <div className="px-5 py-3 rounded-2xl bg-card/90 backdrop-blur-md border shadow-lg text-center">
              <p className="text-sm font-bold text-foreground">工程级网格底纹</p>
              <p className="text-xs text-muted-foreground mt-0.5">24px 方阵 · 丝滑透明度衰减</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2. Flickering Grid & Confetti */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Flickering Grid */}
        <Card className="rounded-2xl border overflow-hidden shadow-xs relative bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
          <CardHeader className="pb-3 relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold text-white">Flickering Grid · 呼吸闪烁网格</CardTitle>
              <Badge className="bg-pink-500 text-white text-[10px]">Neon Pulse</Badge>
            </div>
            <CardDescription className="text-xs text-zinc-400">暗黑 OLED 原生支持，微弱方块动态明暗起伏</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex items-center justify-center relative z-10">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs border border-pink-500/30">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                <span>动态空间微粒运算中</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confetti 庆祝粒子 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Confetti · 成功礼花粒子</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Delightful</Badge>
            </div>
            <CardDescription className="text-xs">支付成功、项目创建完成时的微触感奖励反馈</CardDescription>
          </CardHeader>
          <CardContent className="h-44 flex flex-col items-center justify-center gap-3">
            {confettiActive && (
              <div className="flex gap-2 text-2xl animate-bounce">
                🎉 ✨ 🎊 🚀 🌟
              </div>
            )}
            <Button
              size="sm"
              onClick={triggerConfetti}
              className="rounded-xl text-xs bg-indigo-500 hover:bg-indigo-600 text-white gap-2 shadow-xs"
            >
              <PartyPopper className="h-4 w-4" />
              <span>触发礼花动效</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
