"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Cpu, Shield, Layers } from "lucide-react";

export default function BeUICardsPage() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="beUI · 高阶卡片动效 (Card Effects)"
        description="抓取自 beui.dev 的 Spotlight 鼠标光斑聚焦卡片与 Border Beam 边框走光"
      />

      {/* Card 1: Spotlight Card */}
      <Section title="Effect 1: Spotlight Card 鼠标光斑跟随卡片" description="光标移动时在卡片内渲染动态径向高斯光斑">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-card p-8 overflow-hidden max-w-xl shadow-md group"
        >
          {/* 跟随光斑 */}
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity,
              background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
            }}
          />

          <div className="relative z-10">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold tracking-tight">Spotlight Interactive Card</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              将鼠标在卡片内部任意移动，卡片内部即可映射出柔和的动态径向聚光灯，极大增加界面的灵动触感与空间层次。
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Badge variant="secondary" className="font-mono text-xs">x: {Math.round(pos.x)}px</Badge>
              <Badge variant="secondary" className="font-mono text-xs">y: {Math.round(pos.y)}px</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Card 2: Border Beam */}
      <Section title="Effect 2: Border Beam 沿边框旋转光束" description="一道高亮光斑沿卡片边框闭合轨道匀速巡弋">
        <div className="relative rounded-2xl border border-white/10 bg-card p-6 max-w-md overflow-hidden shadow-lg">
          {/* 光束动画层 */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none">
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(99,102,241,0.8)_360deg)] opacity-70" />
          </div>
          <div className="relative z-10 bg-card p-2 rounded-xl">
            <h4 className="font-bold text-base flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              Border Beam 边框走光
            </h4>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              纯 CSS / Motion 驱动的高性能光束旋转，不阻塞主线程渲染。常用于会员卡片推荐与焦点高亮。
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
