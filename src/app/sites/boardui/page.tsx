import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BarChart3, Database, ShieldCheck, Activity } from "lucide-react";

export default function BoardUIOverview() {
  return (
    <div className="space-y-12">
      <div className="border-b border-border/40 pb-8 space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          BoardUI · 面向 AI Agent 与复杂看板的设计系统
        </h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          专为数据密集型仪表盘与 Agentic AI 智能体产品打造。收录 19 款高阶交互图表卡片以及专业级业务监控模板，深度适配现代数据流监控。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/sites/boardui/charts" className="block group">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base flex items-center gap-2 group-hover:text-primary transition-colors">
                  <BarChart3 className="h-4 w-4 text-indigo-500" />
                  <span>Chart Cards 交互图表卡片库</span>
                </span>
                <Badge variant="outline" className="text-[10px] font-mono">19 款全量</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                包含面积衰减图、双轴对比柱图、环状进度占比、实时心跳波动与多维度对比分析卡片。
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
              <span>进入图表演示</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

        <Link href="/sites/boardui/agentic" className="block group">
          <div className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base flex items-center gap-2 group-hover:text-primary transition-colors">
                  <Bot className="h-4 w-4 text-purple-500" />
                  <span>AI Agentic 智能体监控工作台</span>
                </span>
                <Badge variant="outline" className="text-[10px] font-mono">决策流</Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                智能体多轮推理耗时分析、Token 消耗监控走势、工具调用流水线状态与自主决策轨迹。
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
              <span>进入工作台演示</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
