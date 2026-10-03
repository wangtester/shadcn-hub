"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ArrowRight, Flame } from "lucide-react";

export default function BeUIButtonsPage() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setOffset({
      x: (e.clientX - centerX) * 0.35,
      y: (e.clientY - centerY) * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="beUI · 按钮动态微交互 (Button Effects)"
        description="抓取自 beui.dev 的高光扫描、脉冲微光与磁吸跟随按钮"
      />

      {/* Button 1: Shimmer Button */}
      <Section title="Effect 1: Shimmer Button 边缘流光按钮" description="光芒环绕按钮圆周流动旋转">
        <div className="flex flex-wrap gap-6 items-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-semibold text-white backdrop-blur-3xl gap-2">
              <Sparkles className="h-4 w-4 text-purple-400" />
              流光边框按钮
            </span>
          </button>

          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#047857_50%,#10b981_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-6 py-1 text-sm font-semibold text-white backdrop-blur-3xl gap-2">
              <Zap className="h-4 w-4 text-emerald-400" />
              极速行动 CTA
            </span>
          </button>
        </div>
      </Section>

      {/* Button 2: Magnetic Button */}
      <Section title="Effect 2: Magnetic Button 鼠标磁吸按钮" description="鼠标靠近时按钮产生物理吸附与微位移动效">
        <div className="p-8 rounded-xl border bg-muted/20 flex flex-col items-center justify-center gap-3">
          <p className="text-xs text-muted-foreground">将鼠标在按钮上方移动体验弹性磁吸反馈：</p>
          <button
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: offset.x === 0 ? "transform 0.4s ease-out" : "transform 0.1s ease-out",
            }}
            className="h-12 px-8 rounded-2xl bg-primary text-primary-foreground font-bold text-sm shadow-xl flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>磁力吸附按钮</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </Section>

      {/* Button 3: Pulsing Ring */}
      <Section title="Effect 3: Pulsing Ring 脉冲光环按钮" description="向外持续扩散微波涟漪光环">
        <div className="flex gap-6 items-center">
          <div className="relative inline-flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-30" />
            <Button className="relative rounded-full px-6 gap-2">
              <Flame className="h-4 w-4 text-amber-400" /> 正在直播中
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
