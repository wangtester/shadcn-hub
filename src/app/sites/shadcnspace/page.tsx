import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Cpu, ExternalLink, Flame, Layers, ShieldCheck, Terminal } from "lucide-react";

export default function ShadcnSpaceOverview() {
  return (
    <div className="space-y-8">
      {/* 顶部标头 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30">官方认证生态</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://shadcnspace.com</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnSpace 组件与生产级区块库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          ShadcnSpace 是目前最全面的 Shadcn UI 生产级扩充库之一，拥有 457+ Blocks、12 套完整 Dashboard 模板与 456+ 增强组件。
          兼容 Base UI 和 Radix UI，支持 MCP Server 实时生成与 CLI 一键安装。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/shadcnspace/marketing">
            <Button size="sm">体验 Marketing Blocks</Button>
          </Link>
          <Link href="/sites/shadcnspace/dashboard">
            <Button size="sm" variant="outline">体验 Dashboard Blocks</Button>
          </Link>
        </div>
      </div>

      {/* 核心指标统计 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">生产级 Blocks</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">457+</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">完整业务模板</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">12 套</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">增强扩展组件</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">456+</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">开箱即用页面</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">28+ 组</p>
        </div>
      </div>

      {/* 特色架构卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2">
              <Cpu className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">MCP Server 深度集成</CardTitle>
            <CardDescription className="text-xs">
              支持在 Cursor、Windsurf、VS Code 中直连 Live MCP Server，通过大模型自然语言实时检索与组装 Blocks。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-2">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">Base UI / Radix 双驱动</CardTitle>
            <CardDescription className="text-xs">
              无缝支持最新 Next.js 16 与 Base UI 零样式无障碍规范，符合 WCAG 2.2 无障碍合规标准。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="h-9 w-9 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-2">
              <Terminal className="h-5 w-5" />
            </div>
            <CardTitle className="text-base">CLI 复制即用工作流</CardTitle>
            <CardDescription className="text-xs">
              与标准 shadcn 命令行语法一致，支持一键安装 Block 到本地源码仓库，代码百分百私有自控。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* 快速导航入口 */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold">请从左侧菜单或下方卡片进入组件页面：</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/sites/shadcnspace/marketing" className="block group">
            <div className="p-4 rounded-xl border bg-card/60 hover:bg-card hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Marketing 落地页 Blocks</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Hero 头部、特性网格、价格表、品牌 Logo 云与 CTA 召唤区块</p>
            </div>
          </Link>
          <Link href="/sites/shadcnspace/dashboard" className="block group">
            <div className="p-4 rounded-xl border bg-card/60 hover:bg-card hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Dashboard 仪表盘 Blocks</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">关键指标 Metric 卡片、分析折线、实时订单监控表格与状态指示</p>
            </div>
          </Link>
          <Link href="/sites/shadcnspace/pages" className="block group">
            <div className="p-4 rounded-xl border bg-card/60 hover:bg-card hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">业务模板页面 (Pages)</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">现代登录与注册表单、用户个人设置中心与团队权限列表</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
