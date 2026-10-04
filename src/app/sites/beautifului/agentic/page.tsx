"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Bot,
  CheckCircle2,
  XCircle,
  FileCode2,
  Terminal,
  Cpu,
  Layers,
  Search,
  ExternalLink,
  ChevronRight,
  Database,
  ArrowRight,
  ShieldAlert,
  Edit3
} from "lucide-react";

export default function BeautifulUIAgenticPage() {
  const [approvedState, setApprovedState] = useState<"idle" | "approved" | "rejected">("idle");
  const [activeTab, setActiveTab] = useState<"diff" | "params">("diff");

  return (
    <div className="space-y-10">
      <PageHeader
        title="BeautifulUI · AI-Native 原生交互组件"
        description="收录自 beautifului.dev 官方核心：专为自主智能体打造的 Human-in-the-Loop (HITL) 决策卡、工具调用芯片与上下文块"
      />

      {/* Component 1: Human-in-the-Loop (HITL) Approval Card */}
      <Section
        title="01. Human-in-the-Loop (HITL) 审批决策卡"
        description="当 AI 智能体提议执行高危或高成本操作（如合并代码、推送部署、修改数据库）时的人机协作确认卡"
      >
        <Card className="max-w-2xl border-amber-500/30 bg-amber-500/5 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-ping" />
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-amber-500" />
                  <span>待用户人工决策：执行生产环境部署</span>
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-amber-600 border-amber-500/30 bg-amber-500/10 text-xs">
                需要批准 (HITL)
              </Badge>
            </div>
            <CardDescription className="text-xs">
              AI 智能体已完成本地 48 个页面编译与单元测试，请求将代码推送到生产发布流水线。
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* 标签切换 */}
            <div className="flex gap-2 border-b pb-2 text-xs">
              <button
                onClick={() => setActiveTab("diff")}
                className={`font-semibold pb-1 transition-colors ${
                  activeTab === "diff" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                变更文件列表 (2 Files)
              </button>
              <button
                onClick={() => setActiveTab("params")}
                className={`font-semibold pb-1 transition-colors ${
                  activeTab === "params" ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                执行指令与参数
              </button>
            </div>

            {activeTab === "diff" ? (
              <div className="p-3 rounded-xl border bg-background/80 font-mono text-xs space-y-1.5">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground font-medium">
                    <FileCode2 className="h-3.5 w-3.5 text-blue-500" /> src/components/ui/data-table.tsx
                  </span>
                  <span className="text-emerald-500 font-bold">+305 lines</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground font-medium">
                    <FileCode2 className="h-3.5 w-3.5 text-indigo-500" /> src/components/ui/date-picker.tsx
                  </span>
                  <span className="text-emerald-500 font-bold">+218 lines</span>
                </div>
              </div>
            ) : (
              <div className="p-3 rounded-xl border bg-background/80 font-mono text-xs space-y-1 text-muted-foreground">
                <p><span className="text-primary font-bold">Target:</span> production-cluster-east-1</p>
                <p><span className="text-primary font-bold">Branch:</span> refs/heads/main</p>
                <p><span className="text-primary font-bold">Verification:</span> Next.js Turbopack Strict Mode</p>
              </div>
            )}

            {approvedState === "approved" && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> 您已批准此操作，部署工作流已启动。
              </div>
            )}

            {approvedState === "rejected" && (
              <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold flex items-center gap-2">
                <XCircle className="h-4 w-4" /> 您已否决本次操作，智能体将退回至草稿状态。
              </div>
            )}
          </CardContent>

          <CardFooter className="pt-1 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground font-mono">超时自动保留草稿: 14:59</span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs h-8"
                onClick={() => setApprovedState("rejected")}
                disabled={approvedState !== "idle"}
              >
                <XCircle className="h-3.5 w-3.5 mr-1 text-destructive" /> 拒绝执行
              </Button>
              <Button
                size="sm"
                className="text-xs h-8 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => setApprovedState("approved")}
                disabled={approvedState !== "idle"}
              >
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> 批准部署
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Section>

      {/* Component 2: Tool Calling Chips */}
      <Section
        title="02. Tool Chips & Function Results 工具调用状态芯片"
        description="将智能体自主调用的工具（Tool Use）、耗时与返回值呈现为直观的高密度芯片条"
      >
        <div className="flex flex-wrap gap-3 items-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card/80 text-xs font-medium shadow-2xs hover:border-primary/50 transition-colors cursor-pointer">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <Database className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono font-semibold">QueryPostgres()</span>
            <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">42ms · 18行</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card/80 text-xs font-medium shadow-2xs hover:border-primary/50 transition-colors cursor-pointer">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <Search className="h-3.5 w-3.5 text-indigo-500" />
            <span className="font-mono font-semibold">WebSearch("beautifului")</span>
            <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">128ms · 5条</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-card/80 text-xs font-medium shadow-2xs hover:border-primary/50 transition-colors cursor-pointer">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-spin" />
            <Terminal className="h-3.5 w-3.5 text-blue-500" />
            <span className="font-mono font-semibold">RunLintCheck()</span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-mono bg-blue-500/10 px-1.5 py-0.5 rounded">执行中...</span>
          </div>
        </div>
      </Section>

      {/* Component 3: Context Chunks Container */}
      <Section
        title="03. Context Chunks 上下文分块卡片"
        description="用于 RAG（检索增强生成）场景中展示向量数据库召回的代码片段与相似度评分"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          <div className="p-4 rounded-xl border bg-card/60 space-y-2 hover:border-primary/40 transition-all">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-primary">Chunk #01 · Button.tsx</span>
              <Badge variant="secondary" className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10">相似度 94.2%</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              定义了原生 Tailwind v4 的 cva 样式变体，包含 default, outline, ghost 等视觉基元。
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-card/60 space-y-2 hover:border-primary/40 transition-all">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-primary">Chunk #02 · Table.tsx</span>
              <Badge variant="secondary" className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10">相似度 88.7%</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              基于 Base UI 原生规范驱动的响应式表格外容器与表头定义。
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
