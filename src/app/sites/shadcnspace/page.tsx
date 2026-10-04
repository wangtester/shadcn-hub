import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Cpu, ExternalLink, Flame, Layers, ShieldCheck, Terminal } from "lucide-react";

export default function ShadcnSpaceOverview() {
  return (
    <div className="space-y-12">
      <div className="border-b border-border/40 pb-8 space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          ShadcnSpace 组件与生产级区块库
        </h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          提供生产级营销落地页区块与仪表盘组件，兼容 Base UI 和 Radix UI，支持复制即用。
        </p>
      </div>

      {/* 快速导航入口 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/sites/shadcnspace/marketing" className="block group">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base group-hover:text-primary transition-colors">Marketing 落地页 Blocks</span>
                <Badge variant="outline" className="text-[10px] font-mono">落地页</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                Hero 头部、特性网格、价格表、品牌 Logo 云与 CTA 召唤区块。
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
              <span>浏览区块</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/sites/shadcnspace/dashboard" className="block group">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base group-hover:text-primary transition-colors">Dashboard 仪表盘 Blocks</span>
                <Badge variant="outline" className="text-[10px] font-mono">看板</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                关键指标 Metric 卡片、分析折线、实时订单监控表格与状态指示。
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
              <span>浏览区块</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/sites/shadcnspace/pages" className="block group">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base group-hover:text-primary transition-colors">业务模板页面 (Pages)</span>
                <Badge variant="outline" className="text-[10px] font-mono">页面</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                现代登录与注册表单、用户个人设置中心与团队权限列表。
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
              <span>浏览页面</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
