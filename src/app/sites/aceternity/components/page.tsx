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
  ExternalLink,
  MapPin,
  Flame,
  Wand2,
  Sliders,
} from "lucide-react";

export default function AceternityComponentsPage() {
  const [pinHovered, setPinHovered] = useState(false);
  const [lampColor, setLampColor] = useState<"cyan" | "purple" | "amber">("cyan");

  return (
    <div className="space-y-12 max-w-5xl">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs font-mono bg-cyan-500/10 text-cyan-600 border-cyan-500/30">
            Aceternity Components
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">4 款顶奢视觉基元</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">聚光与 3D 视觉组件库</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Aceternity UI 标志性的光锥、粒子与透视交互组件，将二维网页渲染出剧场级光影空间。
        </p>
      </div>

      {/* 1. Lamp Effect Header */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              1. Lamp Header 神灯光锥聚光效应
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              双向光锥在水平发光地平线交汇，标题在极高光比的照射下展现出电影级开场质感。
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-muted-foreground">光锥色调:</span>
            {(["cyan", "purple", "amber"] as const).map((c) => (
              <button
                key={c}
                onClick={() => setLampColor(c)}
                className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase transition-colors ${
                  lampColor === c ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <Card className="relative overflow-hidden border-border bg-slate-950 p-8 md:p-14 text-center select-none shadow-2xl">
          {/* 左侧光锥 */}
          <div
            className={`absolute top-0 right-1/2 w-72 md:w-96 h-48 md:h-64 blur-2xl opacity-60 pointer-events-none transition-all duration-700 ${
              lampColor === "cyan"
                ? "bg-gradient-to-br from-cyan-500 to-transparent"
                : lampColor === "purple"
                ? "bg-gradient-to-br from-purple-500 to-transparent"
                : "bg-gradient-to-br from-amber-500 to-transparent"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            }}
          />

          {/* 右侧光锥 */}
          <div
            className={`absolute top-0 left-1/2 w-72 md:w-96 h-48 md:h-64 blur-2xl opacity-60 pointer-events-none transition-all duration-700 ${
              lampColor === "cyan"
                ? "bg-gradient-to-bl from-cyan-500 to-transparent"
                : lampColor === "purple"
                ? "bg-gradient-to-bl from-purple-500 to-transparent"
                : "bg-gradient-to-bl from-amber-500 to-transparent"
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
            }}
          />

          {/* 中央水平发光地平线 */}
          <div className="absolute top-28 md:top-36 left-1/2 -translate-x-1/2 w-3/4 max-w-lg h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] pointer-events-none" />

          {/* 内容文本 */}
          <div className="relative z-10 pt-16 md:pt-20 space-y-4">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
              构建超凡脱俗的数字世界
            </h3>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Aceternity Lamp 聚光灯赋予页面无可替代的史诗氛围感，让每一个访问者一眼难忘。
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Button size="sm" className="bg-white text-black hover:bg-slate-200 font-semibold text-xs shadow-md">
                探索产品套件
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* 2. Sparkles & Stars 星光粒子 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              2. Sparkles & Stars 星空粒子流萤
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              高密度星光与闪烁粒子点缀在暗色画板中，带微弱呼吸光晕，营造深邃银河星海。
            </p>
          </div>
          <Badge variant="outline" className="text-[10px]">Canvas & CSS Particles</Badge>
        </div>

        <Card className="h-72 relative overflow-hidden bg-black border-border flex flex-col items-center justify-center text-center p-6">
          {/* 星光粒子阵列 (随机分布与脉冲呼吸) */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { top: "15%", left: "20%", size: "3px", delay: "0s", duration: "2s" },
              { top: "25%", left: "75%", size: "2px", delay: "0.5s", duration: "3s" },
              { top: "65%", left: "15%", size: "4px", delay: "1.2s", duration: "2.5s" },
              { top: "45%", left: "85%", size: "2px", delay: "0.8s", duration: "1.8s" },
              { top: "80%", left: "45%", size: "3px", delay: "1.5s", duration: "3.2s" },
              { top: "30%", left: "40%", size: "2px", delay: "0.3s", duration: "2.2s" },
              { top: "70%", left: "70%", size: "3px", delay: "1.9s", duration: "2.7s" },
              { top: "10%", left: "60%", size: "4px", delay: "0.2s", duration: "2.1s" },
              { top: "85%", left: "25%", size: "2px", delay: "1.1s", duration: "2.8s" },
            ].map((star, idx) => (
              <div
                key={idx}
                className="absolute rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse"
                style={{
                  top: star.top,
                  left: star.left,
                  width: star.size,
                  height: star.size,
                  animationDelay: star.delay,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-3">
            <Badge variant="outline" className="text-white border-white/20 bg-white/5 font-mono text-[10px]">
              SPARKLES ENGINE v2.0
            </Badge>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              点亮夜空的每一颗星芒
            </h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
              微粒子随时间轻盈呼吸衰减，赋予单调的背景无尽的想象空间。
            </p>
          </div>
        </Card>
      </section>

      {/* 3. 3D Pin Card */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              3. 3D Pin Card 空间透视三维图钉卡
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              鼠标悬停在卡片上方时，卡片产生真实 3D 俯仰倾斜，并从卡片表面垂直升起发光指示图钉。
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px]">Interactive Hover State</Badge>
        </div>

        <div className="py-6 flex items-center justify-center">
          <div
            onMouseEnter={() => setPinHovered(true)}
            onMouseLeave={() => setPinHovered(false)}
            className="relative cursor-pointer transition-transform duration-500"
            style={{
              perspective: "1000px",
            }}
          >
            {/* 升起的垂直发光图钉 */}
            <div
              className={`absolute left-1/2 -top-16 -translate-x-1/2 z-30 flex flex-col items-center transition-all duration-500 pointer-events-none ${
                pinHovered ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-lg shadow-cyan-500/50">
                <MapPin className="h-3.5 w-3.5 fill-current" />
                <span>San Francisco, CA</span>
              </div>
              <div className="w-[1.5px] h-10 bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee]" />
            </div>

            {/* 3D 倾斜卡片本体 */}
            <div
              className={`w-80 md:w-96 rounded-2xl border p-6 bg-gradient-to-br from-card to-muted/30 shadow-xl transition-all duration-500 ${
                pinHovered
                  ? "[transform:rotateX(20deg)_scale(1.05)] border-cyan-500/50 shadow-cyan-500/10"
                  : "[transform:rotateX(0deg)]"
              }`}
            >
              <div className="h-40 rounded-xl bg-slate-900 overflow-hidden relative mb-4 flex items-center justify-center border">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.2),transparent_70%)]" />
                <span className="text-xs font-mono text-cyan-400">Silicon Valley HQ</span>
              </div>
              <h4 className="text-base font-bold">全球研发创新中心</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                悬停体验 3D 透视角度倾斜与升起的光学图钉定位器，为地理信息展示提供极致趣味性。
              </p>
              <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono">37.7749° N, 122.4194° W</span>
                <span className="text-cyan-500 font-semibold flex items-center gap-0.5">
                  <span>查看详情</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hover Border Gradient 边框流动渐变 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500" />
              4. Hover Border Gradient 流动渐变边框卡片
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              光斑沿容器边框平滑环绕流动，悬停时发光增强，常用于高价值会员计划与主干功能。
            </p>
          </div>
          <Badge variant="outline" className="text-[10px]">Continuous Orbit Glow</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl p-[1.5px] overflow-hidden bg-muted group">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#06b6d4_0deg,#3b82f6_120deg,#a855f7_240deg,#06b6d4_360deg)] animate-[spin_4s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-[15px] bg-card p-6 h-full flex flex-col justify-between">
              <div>
                <Badge variant="outline" className="text-xs text-cyan-600 border-cyan-500/30 mb-2">
                  FULL CONIC GRADIENT
                </Badge>
                <h4 className="text-base font-bold">全息动态渐变边框</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  360 度圆锥渐变在边框层无缝周转，给扁平的卡片注入生命力。
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">4.0s Orbit Speed</span>
                <Button size="sm" variant="secondary" className="text-xs">
                  了解更多
                </Button>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl p-[1.5px] overflow-hidden bg-muted group">
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#f59e0b_0deg,#ec4899_120deg,#8b5cf6_240deg,#f59e0b_360deg)] animate-[spin_6s_linear_infinite] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-[15px] bg-card p-6 h-full flex flex-col justify-between">
              <div>
                <Badge variant="outline" className="text-xs text-amber-600 border-amber-500/30 mb-2">
                  WARM SUNSET GLOW
                </Badge>
                <h4 className="text-base font-bold">落日暖光流变边框</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  琥珀橙向品红与紫罗兰的温暖过渡，适合创意社区与创作者经济平台。
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">6.0s Smooth Speed</span>
                <Button size="sm" variant="secondary" className="text-xs">
                  立即加入
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
