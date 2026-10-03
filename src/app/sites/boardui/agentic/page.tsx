"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Bot, Terminal, CheckCircle2, Clock, Play, Pause, RotateCcw, Wrench, Search, Globe, FileCode, Paperclip, Sparkles, ChevronDown, Check, Flame, Cpu } from "lucide-react";

export default function BoardUIAgenticPage() {
  const [thinkingOpen, setThinkingOpen] = useState(true);

  return (
    <div className="space-y-10">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/30">AI Agentic 核心套件</Badge>
          <span className="text-xs text-muted-foreground font-mono">boardui.com 专有组件库</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          BoardUI · AI Agent 智能体全套交互控制台
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          专为大语言模型 Autonomous Agent 与数据密集型工作流打造，覆盖思维链轨迹、联网搜索流、Token 消耗规与附件组件。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Component 1: Agent Thinking & Reasoning */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Bot className="h-5 w-5 text-indigo-500" />
                <span>Agent Thinking 深度思维链面板</span>
              </CardTitle>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-0 text-[10px]">思考中 · 1.4s</Badge>
            </div>
            <CardDescription className="text-xs">
              可折叠展开的推理思路展开卡片，避免长文本阻断用户阅读体验
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div
              onClick={() => setThinkingOpen(!thinkingOpen)}
              className="flex items-center justify-between p-3 rounded-xl border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4 text-purple-500 animate-spin" />
                <span>正在深度思考并制定多阶段行动计划 (3 步骤)...</span>
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${thinkingOpen ? "rotate-180" : ""}`} />
            </div>

            {thinkingOpen && (
              <div className="p-4 rounded-xl border bg-zinc-950 font-mono text-xs text-zinc-300 space-y-2 leading-relaxed">
                <p className="text-zinc-500">&gt; 1. 扫描目标页面结构与 CSS 变量系统...</p>
                <p className="text-zinc-400">&gt; 2. 识别出 19 款图表卡片及对应的 Recharts 组件参数映射关系。</p>
                <p className="text-zinc-400">&gt; 3. 校验 TypeScript 接口：Radar, Composed, Area, Funnel 全部通过。</p>
                <p className="text-emerald-400 font-bold">&gt; 4. 结论：生成最终可交付代码并在 3001 端口挂载。</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Component 2: Agent Limits & Context Window */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span>Context & Token 消耗</span>
            </CardTitle>
            <CardDescription className="text-xs">上下文窗口与配额用量监控</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Prompt Tokens:</span>
                <span className="font-mono font-bold">14,280</span>
              </div>
              <Progress value={65} className="h-1.5" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Completion Tokens:</span>
                <span className="font-mono font-bold">3,960</span>
              </div>
              <Progress value={28} className="h-1.5" />
            </div>
            <div className="p-3 rounded-lg border bg-muted/20 text-xs flex justify-between items-center font-mono">
              <span className="text-muted-foreground">剩余可用窗口:</span>
              <span className="font-bold text-emerald-600">109,760 / 128K</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Component 3: Web Search Streaming Sources */}
      <Section title="Component 3: Web Search 联网搜索引用卡" description="智能体联网搜集信息时流式接入的文献源与引用卡">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { site: "boardui.com", title: "React Design System for Dashboards: 85 components", time: "180ms 前" },
            { site: "ui.shadcn.com", title: "The Foundation of modern accessible React primitives", time: "240ms 前" },
            { site: "recharts.org", title: "Composable charting library built on React components", time: "310ms 前" },
          ].map((src, i) => (
            <div key={i} className="p-3.5 rounded-xl border bg-card/60 hover:bg-card hover:border-primary/40 transition-all flex items-start gap-3">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Globe className="h-4 w-4" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                  <span>{src.site}</span>
                  <span>·</span>
                  <span>{src.time}</span>
                </div>
                <p className="text-xs font-bold truncate text-foreground">{src.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Component 4: Composer Attachments Tile */}
      <Section title="Component 4: Composer Attachments 输入框附件瓷贴" description="在提示词输入框上方排列的带环形进度状态的附件单元">
        <div className="p-6 rounded-xl border bg-muted/20 space-y-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center gap-2.5 p-2 rounded-xl border bg-background shadow-xs text-xs font-medium">
              <div className="relative h-6 w-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 border-t-emerald-500" />
                <FileCode className="h-3.5 w-3.5 text-emerald-600" />
              </div>
              <span className="truncate max-w-[140px]">boardui-charts.tsx</span>
              <Badge variant="secondary" className="text-[10px] px-1 py-0">12 KB</Badge>
            </div>

            <div className="flex items-center gap-2.5 p-2 rounded-xl border bg-background shadow-xs text-xs font-medium">
              <div className="relative h-6 w-6 flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
              </div>
              <span className="truncate max-w-[140px]">system-spec.json</span>
              <Badge variant="secondary" className="text-[10px] px-1 py-0">4.5 KB</Badge>
            </div>
          </div>

          <div className="relative">
            <Input placeholder="向 AI 智能体提问或指派新任务..." className="h-12 pl-4 pr-24 rounded-xl" />
            <Button size="sm" className="absolute right-2 top-2 h-8 rounded-lg gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5" /> 发送
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
