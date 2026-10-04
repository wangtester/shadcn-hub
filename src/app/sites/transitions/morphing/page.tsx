"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ChevronDown, CheckCircle2, RefreshCw, Copy, Check, ArrowRight } from "lucide-react";

const tabs = ["全部项目", "待处理工单", "已归档记录", "安全审计"];

export default function TransitionsMorphingPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [copyStep, setCopyStep] = useState<"idle" | "copying" | "done">("idle");
  const [deployStep, setDeployStep] = useState<"building" | "deploying" | "live">("building");

  const triggerCopy = () => {
    if (copyStep !== "idle") return;
    setCopyStep("copying");
    setTimeout(() => {
      setCopyStep("done");
      setTimeout(() => setCopyStep("idle"), 2000);
    }, 800);
  };

  const nextDeploy = () => {
    if (deployStep === "building") setDeployStep("deploying");
    else if (deployStep === "deploying") setDeployStep("live");
    else setDeployStep("building");
  };

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

      {/* Effect 3: Text Swap & Morphing Action */}
      <Section
        title="Effect 3: Text Swap 原地文本平滑置换与宽度形变"
        description="按钮文本状态切换时，容器宽度伴随物理弹簧平滑扩展，文字垂直滑入滑出"
      >
        <div className="p-8 rounded-xl border bg-muted/20 flex flex-col items-center justify-center gap-4">
          <button
            onClick={triggerCopy}
            className={`relative overflow-hidden h-10 px-5 rounded-xl font-medium text-xs shadow-xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 ${
              copyStep === "done"
                ? "bg-emerald-600 text-white min-w-[130px] justify-center"
                : copyStep === "copying"
                ? "bg-primary text-primary-foreground min-w-[140px] justify-center"
                : "bg-primary text-primary-foreground hover:bg-primary/90 min-w-[120px] justify-center"
            }`}
          >
            {copyStep === "copying" ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                <span>正在提取代码...</span>
              </>
            ) : copyStep === "done" ? (
              <>
                <Check className="h-3.5 w-3.5 animate-in zoom-in" />
                <span>已复制到剪贴板</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>一键获取组件源码</span>
              </>
            )}
          </button>
          <p className="text-xs text-muted-foreground">点击上方按钮观察内部文字垂直滑动置换与按钮外框弹性伸缩</p>
        </div>
      </Section>

      {/* Effect 4: Status Badge Morphing */}
      <Section
        title="Effect 4: Status Badge Morphing 状态胶囊形态演变"
        description="多状态流转时的无缝背景色差渐变与图标平滑淡入"
      >
        <div className="p-8 rounded-xl border bg-muted/20 flex flex-col items-center justify-center gap-4">
          <div
            onClick={nextDeploy}
            className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold shadow-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              deployStep === "building"
                ? "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
                : deployStep === "deploying"
                ? "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                : "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                deployStep === "building"
                  ? "bg-amber-500 animate-pulse"
                  : deployStep === "deploying"
                  ? "bg-blue-500 animate-ping"
                  : "bg-emerald-500"
              }`}
            />
            <span>
              {deployStep === "building" && "Step 1: 静态资源打包中..."}
              {deployStep === "deploying" && "Step 2: 边缘节点同步扩散中..."}
              {deployStep === "live" && "Step 3: 集群就绪 · 全球生效 (100%)"}
            </span>
            <ArrowRight className="h-3 w-3 opacity-60" />
          </div>
          <p className="text-xs text-muted-foreground">点击胶囊切换并观察三种状态间的无缝平滑形变与微光波纹</p>
        </div>
      </Section>
    </div>
  );
}
