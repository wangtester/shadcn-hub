"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, Layers, ExternalLink, Sparkles } from "lucide-react";

export default function TransitionsOverview() {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/30">页面与视图过渡</Badge>
          <a
            href="https://transitions.dev"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-teal-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>transitions.dev</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Transitions.dev · 页面过渡与物理弹簧变形</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          基于 View Transitions API 与物理阻尼的连续形态演变（Morphing）。下方直接嵌入代表性弹簧展开容器，点击直接交互。
        </p>
      </div>

      {/* 嵌入组件 1: 容器平滑变形（Morphing Expand） */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowLeftRight className="h-4 w-4 text-teal-500" />
            <h2 className="text-base font-bold">Morphing 物理弹簧展开容器</h2>
          </div>
          <Badge variant="outline" className="text-[10px]">Spring Physics</Badge>
        </div>

        <div
          onClick={() => setExpanded(!expanded)}
          className={`rounded-2xl border bg-card/80 p-6 shadow-xs transition-all duration-500 cursor-pointer overflow-hidden ${
            expanded ? "border-teal-500/50 bg-teal-500/5 shadow-xl" : "hover:border-border"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <h3 className="font-bold text-sm">点击触发展开变形</h3>
                <p className="text-xs text-muted-foreground">容器在不同尺寸间以真实物理阻尼连续演算形态</p>
              </div>
            </div>
            <Button size="sm" variant="ghost" className="rounded-xl text-xs">
              {expanded ? "收起" : "展开详情"}
            </Button>
          </div>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-border/40 text-xs text-muted-foreground space-y-2 animate-in fade-in duration-300">
              <p>原生 View Transitions API 允许在 DOM 变更前后自动插值补帧，完全规避了传统 CSS height: auto 无法过渡的问题。</p>
              <div className="p-3 rounded-xl bg-background/60 border font-mono text-[11px] text-teal-600">
                transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 嵌入组件 2: 弹簧跟手分段胶囊 */}
      <Card className="rounded-2xl border bg-card/60 shadow-xs">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-bold">Fluid Segment · 跟手平滑胶囊</CardTitle>
          <CardDescription className="text-xs">背景滑块带有弹性阻尼，跟手平滑滑入下一个目标</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-1 rounded-2xl bg-muted/40 border inline-flex gap-1 w-full max-w-md">
            {[
              { id: "tab-1", label: "春季动效" },
              { id: "tab-2", label: "物理质量" },
              { id: "tab-3", label: "无缝路由" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  activeTab === t.id
                    ? "bg-card text-foreground shadow-md border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
