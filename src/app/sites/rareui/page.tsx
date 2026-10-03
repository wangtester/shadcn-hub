import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wand2, Sparkles, Orbit, Compass } from "lucide-react";

export default function RareUIOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/30">稀缺动效注册表</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://www.rareui.com</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">RareUI · 罕见而惊艳的高阶交互动效库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          RareUI 专注于逆向工程与重构全球设计先锋网站中那些令人惊叹、却鲜少有人开源的稀有微交互。
          如 Fluid Orb 流体光晕球、动态变形滑块与悬浮交互岛，完全兼容标准 shadcn CLI 拷贝即用。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/rareui/interactive">
            <Button size="sm">体验 Fluid Orb 流体球</Button>
          </Link>
          <Link href="/sites/rareui/cards">
            <Button size="sm" variant="outline">体验悬浮发光卡片</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/rareui/interactive" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-purple-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Orbit className="h-4 w-4 text-purple-500" />
                流体与微交互 (Fluid Orb / Floating Island)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              色彩渐变蠕动的物理流体光斑球与悬浮浮动操作岛
            </p>
          </div>
        </Link>

        <Link href="/sites/rareui/cards" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-purple-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-pink-500" />
                悬浮发光与立体卡片 (Glow Cards)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              深色磨砂背景上漫反射动态彩虹晕影的现代展示面卡片
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
