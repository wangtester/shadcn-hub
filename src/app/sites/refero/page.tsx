import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Sliders, FileCode, CheckCircle2 } from "lucide-react";

export default function ReferoOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30">设计灵感与 Tokens</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://styles.refero.design</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Refero Styles · 网站风格库与 DESIGN.md 规范</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          分析并提炼全球数百个优质网站的实际样式规则，提取包含色彩、排版、间距、圆角与阴影的 AI 可读 DESIGN.md 规范。
          支持开发者在一处同屏对比 Linear 风格、Vercel 极简风、Apple 磨砂微质感与新粗野主义（Neo-brutalism）。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/refero/styles">
            <Button size="sm">对比 9 大主流设计风格</Button>
          </Link>
          <Link href="/sites/refero/tokens">
            <Button size="sm" variant="outline">查阅 Design Tokens</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/refero/styles" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Palette className="h-4 w-4 text-amber-500" />
                9 大现代代表性设计风格实景对比
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Linear 极黑流光、Vercel 纯粹黑白、Apple 平滑微质感、Neo-brutalism 粗黑描边高对比等
            </p>
          </div>
        </Link>

        <Link href="/sites/refero/tokens" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <FileCode className="h-4 w-4 text-purple-500" />
                DESIGN.md 与 Design Tokens 规范表
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              调色盘阶梯、网格系统模度、卡片投影深度与圆角曲率阶梯配置
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
