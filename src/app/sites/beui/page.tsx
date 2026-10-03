import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Type, MousePointerClick, Zap } from "lucide-react";

export default function BeUIOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-cyan-500/10 text-cyan-600 border-cyan-500/30">Motion 动画专精</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://beui.dev</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">beUI · 现代交互动画与微动效库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          基于 Motion (前身 Framer Motion) 与 Tailwind CSS 构建的开源动效库。
          完美配合 shadcn CLI，可无缝复制安装至任何 Next.js 项目中，赋予静态组件鲜活的动效反馈与沉浸手感。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/beui/buttons">
            <Button size="sm">体验流光按钮</Button>
          </Link>
          <Link href="/sites/beui/cards">
            <Button size="sm" variant="outline">体验光斑跟随卡片</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link href="/sites/beui/text" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Type className="h-4 w-4 text-cyan-500" />
                文本动画 (Text Effects)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              数字跳动自增计数器、文字波浪流光渐变、模拟终端打字机效果
            </p>
          </div>
        </Link>

        <Link href="/sites/beui/buttons" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <MousePointerClick className="h-4 w-4 text-indigo-500" />
                按钮动效 (Button Effects)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Shimmer 流光掠过按钮、微脉冲光环、磁吸跟随与波纹扩散
            </p>
          </div>
        </Link>

        <Link href="/sites/beui/cards" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                卡片动效 (Card Effects)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Spotlight 光斑鼠标跟随卡片、Border Beam 边框走光动效、3D 空间微倾斜
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
