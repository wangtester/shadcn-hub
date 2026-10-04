"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  X,
  TrendingUp,
  TrendingDown,
  Filter,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Zap,
  Activity,
  DollarSign,
  Users,
  Cpu
} from "lucide-react";

export default function BoardUIComponentsPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [selectedTokens, setSelectedTokens] = useState<string[]>(["active", "pro"]);

  const toggleToken = (id: string) => {
    if (selectedTokens.includes(id)) {
      setSelectedTokens(selectedTokens.filter((t) => t !== id));
    } else {
      setSelectedTokens([...selectedTokens, id]);
    }
  };

  const filterTokens = [
    { id: "active", label: "在线集群 (Active)", count: 24 },
    { id: "pro", label: "Pro 企业租户", count: 182 },
    { id: "eval", label: "评估模式 (Eval)", count: 8 },
    { id: "alerts", label: "高载预警 (Alerts)", count: 3 },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        title="BoardUI · 核心看板基元 (Core Dashboard Elements)"
        description="收录自 boardui.com 官方核心库：通告横条 (Announcement Banner)、看板过滤胶囊 (Filter Chips) 与 KPI 环比微指标卡"
      />

      {/* Component 1: Announcement Banner */}
      <Section
        title="01. Announcement Banner 企业级看板通告栏"
        description="位于看板顶部的系统级通知横条，支持微渐变发光与一键关闭"
      >
        {bannerVisible ? (
          <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-background p-3.5 shadow-xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-600 flex items-center justify-center shrink-0">
                <Megaphone className="h-4 w-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-foreground">系统更新通告：</span>
                <span className="text-muted-foreground ml-1">
                  BoardUI 2.0 数据看板内核已全面升级，推理延迟降低 42%，全面适配 Base UI 无头规范。
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button size="sm" variant="ghost" className="h-7 text-xs text-primary font-semibold">
                查看版本说明 ↗
              </Button>
              <button
                onClick={() => setBannerVisible(false)}
                className="h-7 w-7 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors"
                aria-label="关闭通告"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border bg-muted/20 text-center">
            <p className="text-xs text-muted-foreground">通告已关闭</p>
            <Button size="sm" variant="ghost" onClick={() => setBannerVisible(true)} className="text-xs h-7 mt-1">
              重置显示通告
            </Button>
          </div>
        )}
      </Section>

      {/* Component 2: Filter Chips & Tokens */}
      <Section
        title="02. Filter Chips & Tokens 看板标签过滤器"
        description="针对高频监控维度的快速过滤胶囊，支持多状态并存与一键重置"
      >
        <div className="p-5 rounded-xl border bg-card/60 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <Filter className="h-3.5 w-3.5" />
              <span>当前生效维度过滤 ({selectedTokens.length})</span>
            </div>
            {selectedTokens.length > 0 && (
              <button
                onClick={() => setSelectedTokens([])}
                className="text-primary hover:underline text-xs flex items-center gap-1 font-medium"
              >
                <RotateCcw className="h-3 w-3" /> 重置所有筛选
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5 items-center">
            {filterTokens.map((token) => {
              const active = selectedTokens.includes(token.id);
              return (
                <button
                  key={token.id}
                  onClick={() => toggleToken(token.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {active && <Check className="h-3 w-3" />}
                  <span>{token.label}</span>
                  <span
                    className={`ml-1 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      active ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {token.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Component 3: Metric Delta KPI Cards */}
      <Section
        title="03. Metric Delta KPI Cards 环比微指标卡"
        description="用于大盘概览的核心数字看板，结合增减状态指示与目标达成率"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/70">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center justify-between">
                <span>月度经常性收入 (MRR)</span>
                <DollarSign className="h-4 w-4 text-emerald-500" />
              </CardDescription>
              <CardTitle className="text-2xl font-extrabold font-mono mt-1">¥186,400</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>+14.8% 环比上月</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center justify-between">
                <span>活跃开发者席位</span>
                <Users className="h-4 w-4 text-blue-500" />
              </CardDescription>
              <CardTitle className="text-2xl font-extrabold font-mono mt-1">3,420</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>+8.2% 保持净流入</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center justify-between">
                <span>平均 API 推理时延</span>
                <Zap className="h-4 w-4 text-amber-500" />
              </CardDescription>
              <CardTitle className="text-2xl font-extrabold font-mono mt-1">48 ms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <TrendingDown className="h-3.5 w-3.5" />
                <span>-22.4% 性能大幅优化</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs flex items-center justify-between">
                <span>GPU 集群负载率</span>
                <Cpu className="h-4 w-4 text-purple-500" />
              </CardDescription>
              <CardTitle className="text-2xl font-extrabold font-mono mt-1">72.6%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <Activity className="h-3.5 w-3.5 text-indigo-500" />
                <span>处于黄金利用率区间</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
