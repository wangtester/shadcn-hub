"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bot, Sparkles, Send, Paperclip, ChevronDown, ChevronRight, Copy, Check,
  RotateCcw, ThumbsUp, ThumbsDown, Globe, Terminal, Code2, ExternalLink,
  Cpu, Zap, CheckCircle2, CornerDownLeft, Eye, MessageSquare
} from "lucide-react";

export default function HeroUIAIPage() {
  const [cotOpen, setCotOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "user",
      content: "请帮我实现一个具备 HeroUI Pro 大圆角与柔和微光晕效果的 AI 思考链折叠组件。",
    },
    {
      role: "assistant",
      content: "没问题！HeroUI Pro 的 AI 组件核心在于将思维过程（Chain of Thought）、工具调用（Tool Invocation）与最终生成的结构化代码流式整合。以下是完整的实现与交互规范：",
    },
  ]);

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendPrompt = () => {
    if (!promptText.trim()) return;
    setMessages((prev) => [
      ...prev,
      { role: "user", content: promptText },
      {
        role: "assistant",
        content: `正在为您解析：“${promptText}”。已激活底层推理模型并完成意图抽取。`,
      },
    ]);
    setPromptText("");
  };

  const sampleSuggestions = [
    "解析 HeroUI Pro 核心图表性能",
    "生成 Next.js 15 全新服务端组件",
    "设计极简柔和玻璃拟态卡片",
    "对比 Tailwind CSS v4 与 v3 规范",
  ];

  return (
    <div className="space-y-10">
      {/* 头部 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-pink-500/10 text-pink-500 border-pink-500/20 font-medium">HeroUI Pro AI Components</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方全量 9 大智能体交互组件</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">AI Components · 新一代智能体交互基元</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          HeroUI 专为 AI 原生时代打造的交互界面规范：折叠式思考链 (Chain Of Thought)、流式代码块 (Code Block)、
          工具调用卡片 (Chat Tool)、信源卡 (Chat Source)、智能提示词输入器 (Prompt Input) 与动态流光 (Text Shimmer)。
        </p>
      </div>

      {/* 1. Prompt Input & Prompt Suggestions */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">1. Prompt Input · 智能体多模态提示词输入框</h2>
          <p className="text-xs text-muted-foreground">集成模型选择器、上下文附件挂载、Token 计数与流光发送</p>
        </div>

        <div className="rounded-2xl border bg-card/70 p-4 shadow-sm backdrop-blur-md relative focus-within:border-pink-500/50 transition-all">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded-full px-2.5 py-0.5 border-pink-500/30 text-pink-600 bg-pink-500/5 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>Claude 3.7 Sonnet (Thinking)</span>
              </Badge>
              <Badge variant="secondary" className="rounded-full text-[10px] text-muted-foreground">
                64k Tokens 视窗
              </Badge>
            </div>
            <span className="text-[11px] text-muted-foreground font-mono">Press ⌘ + Enter to send</span>
          </div>

          <textarea
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                handleSendPrompt();
              }
            }}
            placeholder="输入针对智能体的指令，例如：生成一套暗黑 OLED 风格的 KPI 仪表盘..."
            className="w-full bg-transparent border-0 focus:outline-none resize-none text-sm placeholder:text-muted-foreground/60 min-h-[70px]"
          />

          <div className="flex items-center justify-between pt-2 border-t border-border/40">
            <div className="flex items-center gap-1.5">
              <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1.5 text-muted-foreground hover:text-foreground">
                <Paperclip className="h-3.5 w-3.5" />
                <span>添加附件</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1.5 text-muted-foreground hover:text-foreground">
                <Globe className="h-3.5 w-3.5" />
                <span>启用联网检索</span>
              </Button>
            </div>

            <Button
              size="sm"
              onClick={handleSendPrompt}
              className="h-8 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs gap-1 shadow-sm px-4"
            >
              <span>发送</span>
              <CornerDownLeft className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Prompt Suggestions */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
            <Zap className="h-3 w-3 text-amber-500" /> 推荐指令:
          </span>
          {sampleSuggestions.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setPromptText(item)}
              className="text-xs px-3 py-1 rounded-full border bg-card/60 hover:bg-muted hover:border-pink-500/40 text-muted-foreground hover:text-foreground transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Chain Of Thought (思考链折叠器) */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">2. Chain Of Thought (CoT) · 智能体思考推理链</h2>
          <p className="text-xs text-muted-foreground">展开即可查看模型内在思维逻辑，带流式脉冲、耗时指示与检查点</p>
        </div>

        <div className="rounded-2xl border bg-card/50 overflow-hidden shadow-xs">
          <button
            onClick={() => setCotOpen(!cotOpen)}
            className="w-full flex items-center justify-between p-3.5 px-4 bg-muted/20 hover:bg-muted/30 transition-colors text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="h-2 w-2 rounded-full bg-pink-500 animate-ping" />
              <div className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-pink-500" />
                <span className="text-xs font-bold text-foreground">思考过程已完成 · 耗时 1.8 秒</span>
              </div>
              <Badge variant="outline" className="text-[10px] py-0 px-1.5 text-muted-foreground border-border/70">
                1,280 Tokens
              </Badge>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>{cotOpen ? "收起思考链" : "展开思考细节"}</span>
              {cotOpen ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
            </div>
          </button>

          {cotOpen && (
            <div className="p-4 bg-background/50 border-t text-xs font-mono text-muted-foreground space-y-3 leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">Step 1:</span>
                <span>理解用户意图：提取需求为 HeroUI Pro 风格组件，需要包含圆角 2xl、微透明磨砂与高对比度色彩。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">Step 2:</span>
                <span>信源检索：在本地设计规范库中核实 HeroUI Pro 核心组件的样式变量与属性约定。</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">Step 3:</span>
                <span>工具执行：完成代码构筑并进行 React 19 Client Component 兼容性检测。</span>
              </div>
              <div className="pt-2 border-t border-border/40 text-[11px] text-pink-500/80 font-sans flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>推理逻辑自洽，无幻觉风险，输出最终组件方案。</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Chat Tools (工具调用) & Chat Source (信源卡) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chat Tool */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-purple-500" />
                <CardTitle className="text-base font-bold">Chat Tool · Agent 工具调用卡</CardTitle>
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[10px]">Success</Badge>
            </div>
            <CardDescription className="text-xs">展示智能体调用函数、执行命令与回传结果的状态</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-3 rounded-xl border bg-muted/20 font-mono text-xs space-y-1">
              <div className="text-muted-foreground">Tool: <span className="text-purple-500 font-bold">execute_code</span></div>
              <div className="text-[11px] text-muted-foreground/80">Command: npm run build:analyze</div>
              <div className="text-emerald-500 text-[11px] pt-1">Return: Bundle size: 84.2kb, 0 errors.</div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Source */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <CardTitle className="text-base font-bold">Chat Source · 信源引用卡片</CardTitle>
              </div>
              <Badge variant="outline" className="text-[10px]">3 Sources</Badge>
            </div>
            <CardDescription className="text-xs">智能体生成回复所依赖的外部文献与网页锚点</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { title: "HeroUI Pro 官方组件全览", url: "heroui.pro/docs/react/components", tag: "Docs" },
              { title: "Tailwind CSS v4 现代化排版基底", url: "tailwindcss.com/docs/v4", tag: "Guide" },
            ].map((src, i) => (
              <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border bg-card/40 hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">{src.title}</p>
                    <p className="text-[10px] text-muted-foreground">{src.url}</p>
                  </div>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* 4. Chat Message & Message Actions & Code Block */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">3. Chat Message & Code Block · 消息体与代码高亮卡</h2>
          <p className="text-xs text-muted-foreground">包含悬浮操作胶囊（复制、重试、赞踩反馈）与纯净暗色代码容器</p>
        </div>

        <div className="rounded-2xl border bg-card/60 p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center shadow-xs">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">HeroUI Pro Agent</span>
                <span className="text-[10px] text-muted-foreground font-mono">刚刚</span>
              </div>

              {/* Text Shimmer 流光效果演示 */}
              <div className="text-xs leading-relaxed text-foreground">
                <p>为您生成的 HeroUI 风格代码块已就绪。支持一键快速复制并在现有 React 19 / Next.js 项目中平滑运行：</p>
              </div>

              {/* Code Block */}
              <div className="rounded-xl border bg-zinc-950 text-zinc-100 overflow-hidden font-mono text-xs shadow-md">
                <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/60 text-zinc-400 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-3.5 w-3.5 text-pink-400" />
                    <span>HeroUICard.tsx</span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "已复制" : "复制代码"}</span>
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
                  <code>{`import { Card } from "@/components/ui/card";

export function ModernHoloCard() {
  return (
    <div className="rounded-2xl border border-pink-500/20 bg-gradient-to-br from-card to-pink-500/10 p-6 backdrop-blur-md">
      <h3 className="text-base font-bold">HeroUI Pro Component</h3>
      <p className="text-xs text-muted-foreground mt-1">极致的磨砂高光与大圆角</p>
    </div>
  );
}`}</code>
                </pre>
              </div>

              {/* Chat Message Actions */}
              <div className="flex items-center gap-1 text-muted-foreground pt-1">
                <Button size="sm" variant="ghost" className="h-7 px-2 rounded-lg text-xs gap-1 hover:text-foreground">
                  <Copy className="h-3 w-3" />
                  <span>复制</span>
                </Button>
                <Button size="sm" variant="ghost" className="h-7 px-2 rounded-lg text-xs gap-1 hover:text-foreground">
                  <RotateCcw className="h-3 w-3" />
                  <span>重新生成</span>
                </Button>
                <div className="h-3 w-px bg-border mx-1" />
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-lg hover:text-foreground">
                  <ThumbsUp className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 rounded-lg hover:text-foreground">
                  <ThumbsDown className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
