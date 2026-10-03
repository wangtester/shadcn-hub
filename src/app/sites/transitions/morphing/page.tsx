"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronDown } from "lucide-react";

const tabs = ["全部项目", "待处理工单", "已归档记录", "安全审计"];

export default function TransitionsMorphingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-10">
      <PageHeader
        title="Transitions.dev · 容器展开与平滑变形 (Morphing)"
        description="抓取自 transitions.dev 的物理弹簧位移、滑动胶囊与平滑几何形态变形"
      />

      {/* Morphing Tab Capsule */}
      <Section title="Effect 1: Spring Tab Capsule 弹簧滑块选项卡" description="选中态的背景指示胶囊在不同 Tab 之间平滑穿梭位移">
        <div className="p-8 rounded-xl border bg-muted/20 flex flex-col items-center justify-center gap-3">
          <p className="text-xs text-muted-foreground">点击不同选项卡观察背景胶囊的平滑物理滑动：</p>
          <div className="relative flex items-center p-1.5 rounded-full border bg-background shadow-xs">
            {tabs.map((tab, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(idx)}
                  className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    isSelected ? "text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                  {isSelected && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-primary shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            当前激活状态：<span className="font-semibold text-foreground">{tabs[activeTab]}</span>
          </p>
        </div>
      </Section>

      {/* Expandable Card Morphing */}
      <Section title="Effect 2: Expandable Card 原地几何形变卡片" description="点击由紧凑卡片平滑舒展为完整详情面板">
        <div className="max-w-md mx-auto">
          <div
            onClick={() => setExpanded(!expanded)}
            className={`cursor-pointer rounded-2xl border bg-card p-6 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              expanded ? "bg-gradient-to-br from-card via-muted/30 to-muted/50 border-primary/40 shadow-lg" : "hover:border-muted-foreground/30"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold">
                  TR
                </div>
                <div>
                  <h4 className="text-sm font-bold">微服务架构重构提案</h4>
                  <p className="text-xs text-muted-foreground">更新于 10 分钟前</p>
                </div>
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${expanded ? "rotate-180 text-primary" : ""}`} />
            </div>

            {/* 舒展出的内容 */}
            <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              expanded ? "max-h-60 opacity-100 mt-4 pt-4 border-t" : "max-h-0 opacity-0"
            }`}>
              <p className="text-xs text-muted-foreground leading-relaxed">
                本案旨在解耦当前单体结构，引入基于 Next.js 16 与边缘网关的自适应弹性服务。
                首期试点计划包含用户身份鉴权中心与实时数据看板。
              </p>
              <div className="mt-4 flex gap-2">
                <Button size="sm" className="h-7 text-xs">通过此提案</Button>
                <Button size="sm" variant="outline" className="h-7 text-xs">查看详细文档</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
