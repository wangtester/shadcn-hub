import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeftRight, Layers, Sparkles, MoveRight } from "lucide-react";

export default function TransitionsOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/30">页面与视图过渡</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://transitions.dev</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Transitions.dev · 页面过渡与弹簧变形体系</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          Transitions.dev 重新定义了 Web 界面的过渡美学。不同于机械的淡入淡出，它将物理质量、弹簧弹性与浏览器的 View Transitions API
          融为一体，让元素在不同尺寸、状态之间产生无缝连续的形态演变（Morphing）。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/transitions/morphing">
            <Button size="sm">体验弹簧变形 (Morphing)</Button>
          </Link>
          <Link href="/sites/transitions/stagger">
            <Button size="sm" variant="outline">体验交错入场 (Stagger)</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/transitions/morphing" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-teal-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <ArrowLeftRight className="h-4 w-4 text-teal-500" />
                容器展开与平滑变形 (Layout Morphing)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              滑块平滑跟手胶囊、卡片原地平滑放大为弹窗面板
            </p>
          </div>
        </Link>

        <Link href="/sites/transitions/stagger" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-teal-500/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Layers className="h-4 w-4 text-indigo-500" />
                交错阶梯入场与离开 (Staggered Reveal)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              列表项按毫秒级时延递增交错浮现，消除整体跳变生硬感
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
