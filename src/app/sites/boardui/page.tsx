"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Bot, BarChart3, TrendingUp, Cpu, Zap, RefreshCw } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const heartbeatData = [
  { time: "09:00", tps: 240, latency: 18 },
  { time: "10:00", tps: 310, latency: 22 },
  { time: "11:00", tps: 450, latency: 19 },
  { time: "12:00", tps: 390, latency: 25 },
  { time: "13:00", tps: 520, latency: 21 },
  { time: "14:00", tps: 680, latency: 16 },
  { time: "15:00", tps: 590, latency: 17 },
];

export default function BoardUIOverview() {
  const [tokens, setTokens] = useState(142850);

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-indigo-500/10 text-indigo-500 border-indigo-500/20 font-medium">BoardUI 系统</Badge>
          <span className="text-xs text-muted-foreground font-mono">19 款高阶监控图表与 Agent 看板</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">BoardUI · 复杂看板与 AI Agent 监控</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          专为数据密集型仪表盘与 Agentic AI 智能体产品打造。下方直接嵌入精选核心图表与状态监控卡，实时交互无二次跳转。
        </p>
      </div>

      {/* 嵌入组件 1: 实时心跳监控看板图 */}
      <Card className="rounded-2xl border bg-card/60 shadow-xs">
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-emerald-500" />
              <CardTitle className="text-base font-bold">BoardUI 实时吞吐与健康心跳监控卡</CardTitle>
            </div>
            <CardDescription className="text-xs mt-1">集群各节点 TPS 与 P99 延迟关联波动</CardDescription>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-500 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>99.99% 在线</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={heartbeatData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="boardTps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "1rem",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="tps" name="TPS 并发" stroke="#6366f1" strokeWidth={2.5} fillOpacity={1} fill="url(#boardTps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* 嵌入组件 2: Agentic 智能体监控卡群 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border bg-card/60 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-purple-500" />
              <h3 className="font-bold text-sm">Agent Token 实时消耗</h3>
            </div>
            <Button size="sm" variant="ghost" className="h-7 text-xs gap-1" onClick={() => setTokens((prev) => prev + 1200)}>
              <RefreshCw className="h-3 w-3" /> 刷新统计
            </Button>
          </div>
          <div className="text-3xl font-black font-mono tracking-tight text-foreground">
            {tokens.toLocaleString()} <span className="text-xs font-normal text-muted-foreground">Tokens</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: "72%" }} />
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
            <span>配额占用: 72%</span>
            <span>总配额: 200,000</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl border bg-card/60 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-cyan-500" />
              <h3 className="font-bold text-sm">自主决策工具调用链</h3>
            </div>
            <Badge variant="outline" className="text-[10px]">Active</Badge>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl border bg-muted/20 flex items-center justify-between">
              <span className="font-mono text-muted-foreground">1. fetch_user_context</span>
              <span className="text-emerald-500 font-semibold">24ms OK</span>
            </div>
            <div className="p-2.5 rounded-xl border bg-muted/20 flex items-center justify-between">
              <span className="font-mono text-muted-foreground">2. evaluate_risk_score</span>
              <span className="text-emerald-500 font-semibold">41ms OK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
