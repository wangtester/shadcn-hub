import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, Sliders, Palette, Zap } from "lucide-react";

export default function HeroUIOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/30">NextUI 进化版</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://heroui.pro</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">HeroUI Pro · 大圆角与柔和微光晕美学</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          HeroUI（前身为 NextUI）以独特的饱满圆角、玻璃拟态光晕、高级暗色背景与平滑手势动效著称。
          HeroUI Pro 拓展了数十套商业营销与复杂企业应用套件，为现代 Web 产品带来耳目一新的现代科技美感。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/heroui/marketing">
            <Button size="sm">体验 HeroUI 营销 Blocks</Button>
          </Link>
          <Link href="/sites/heroui/application">
            <Button size="sm" variant="outline">体验应用设置与控制台</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl border bg-card/60 shadow-xs">
          <p className="text-xs text-muted-foreground font-medium">设计特征</p>
          <p className="text-2xl font-bold mt-1 text-primary">超大圆角 2xl</p>
        </div>
        <div className="p-4 rounded-2xl border bg-card/60 shadow-xs">
          <p className="text-xs text-muted-foreground font-medium">色彩风格</p>
          <p className="text-2xl font-bold mt-1 text-primary">高对比微质感</p>
        </div>
        <div className="p-4 rounded-2xl border bg-card/60 shadow-xs">
          <p className="text-xs text-muted-foreground font-medium">动效核心</p>
          <p className="text-2xl font-bold mt-1 text-primary">Framer Motion</p>
        </div>
        <div className="p-4 rounded-2xl border bg-card/60 shadow-xs">
          <p className="text-xs text-muted-foreground font-medium">暗黑原生支持</p>
          <p className="text-2xl font-bold mt-1 text-primary">OLED 纯黑</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/heroui/marketing" className="block group">
          <div className="p-5 rounded-2xl border bg-gradient-to-br from-card to-pink-500/5 hover:border-pink-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500" />
                HeroUI 营销落地页与发光组件
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              具有柔和霓虹背光、双色渐变胶囊按钮、平滑特性卡片与多功能导航条
            </p>
          </div>
        </Link>

        <Link href="/sites/heroui/application" className="block group">
          <div className="p-5 rounded-2xl border bg-gradient-to-br from-card to-blue-500/5 hover:border-blue-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Sliders className="h-4 w-4 text-blue-500" />
                HeroUI 应用中后台业务流
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              复杂应用偏好设置卡片、多标签状态过滤栏、步骤向导与身份权限卡
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
