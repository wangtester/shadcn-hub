import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Database, ShieldCheck, Activity } from "lucide-react";

export default function BoardUIOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/30">AI & 数据看板专精</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://www.boardui.com</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">BoardUI · 面向 AI Agent 与复杂看板的设计系统</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          专为数据密集型仪表盘与 Agentic AI 智能体产品打造。提供 85 个 React 组件与区块、19 款高阶交互图表卡片（Chart Cards）
          以及 10 套专业级业务模板，深度适配现代数据流监控与多模型交互。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/boardui/charts">
            <Button size="sm">体验 19 款图表卡片</Button>
          </Link>
          <Link href="/sites/boardui/agentic">
            <Button size="sm" variant="outline">体验 AI Agent 控制台</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">专业看板组件</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">85+</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">独立图表卡片</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">19 款</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">AI Agent 模板</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">10 套</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">可交互源码</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">100% TSX</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/boardui/charts" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-indigo-500" />
                Chart Cards 交互图表卡片库 (19款)
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              包含面积衰减图、双轴对比柱图、环状进度占比、实时心跳波动与多维度对比分析卡片
            </p>
          </div>
        </Link>

        <Link href="/sites/boardui/agentic" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base flex items-center gap-2">
                <Bot className="h-4 w-4 text-purple-500" />
                AI Agentic 智能体监控工作台
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              智能体多轮推理耗时分析、Token 消耗监控走势、工具调用流水线状态与自主决策轨迹
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
