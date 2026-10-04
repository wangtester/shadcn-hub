"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Box,
  Cpu,
  Store,
  BarChart2,
  Palette,
  Wand2,
  Compass,
  Gem,
  ExternalLink,
  Wrench,
  Grid,
  CheckCircle2,
} from "lucide-react";

interface SiteCard {
  id: string;
  title: string;
  category: "all" | "core" | "motion" | "system";
  categoryLabel: string;
  url: string;
  originUrl: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

const siteList: SiteCard[] = [
  {
    id: "shadcn",
    title: "shadcn/ui 官方核心库",
    category: "core",
    categoryLabel: "官方原子基座",
    url: "/shadcn",
    originUrl: "https://ui.shadcn.com",
    desc: "官方全量 64 款原子与复合组件，统一按表单、布局、浮层、数据展示、导航、反馈与排版进行全生命周期架构。",
    badge: "64 款全量",
    icon: <Box className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "magicui",
    title: "Magic UI",
    category: "motion",
    categoryLabel: "动效与着陆页",
    url: "/sites/magicui",
    originUrl: "https://magicui.design",
    desc: "专为设计工程师打造的高级动效库，涵盖无缝跑马灯、Animated Beam 节点光束连线、流光边框与交互 Bento 网格。",
    badge: "50+ 动效与 Bento",
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "aceternity",
    title: "Aceternity UI",
    category: "motion",
    categoryLabel: "极客顶奢视觉",
    url: "/sites/aceternity",
    originUrl: "https://ui.aceternity.com",
    desc: "将界面拉升至艺术高度的暗黑极客美学，包含 Lamp Header 聚光神灯效应、星空粒子、3D 透视图钉与光束追踪流。",
    badge: "Lamp & 3D Pin",
    icon: <Wand2 className="h-4 w-4 text-cyan-500" />,
  },
  {
    id: "boardui",
    title: "BoardUI",
    category: "system",
    categoryLabel: "仪表盘与智能体",
    url: "/sites/boardui",
    originUrl: "https://www.boardui.com",
    desc: "专为数据密集型仪表盘与 AI Agent 智能体打造，收录 19 款高密度工业图表卡片、决策执行流水与核心看板基元。",
    badge: "19 Charts & AI",
    icon: <BarChart2 className="h-4 w-4 text-violet-500" />,
  },
  {
    id: "shadcnstore",
    title: "ShadcnStore",
    category: "system",
    categoryLabel: "商业区块与电商",
    url: "/sites/shadcnstore",
    originUrl: "https://shadcnstore.com",
    desc: "覆盖 39 个细分业务类目的生产级区块库，涵盖现代非对称 Bento 便当盒、定价切换表、增长指标墙与完整电商商城。",
    badge: "39 Sections",
    icon: <Store className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "refero",
    title: "Refero Styles",
    category: "system",
    categoryLabel: "设计风格规范",
    url: "/sites/refero",
    originUrl: "https://styles.refero.design",
    desc: "全球顶尖网站真实风格实景提炼库，同屏对比 Linear、Geist、Apple、新粗野主义，并提供 AI 可读 DESIGN.md 规范导出。",
    badge: "9 大设计风格",
    icon: <Palette className="h-4 w-4 text-amber-500" />,
  },
  {
    id: "heroui",
    title: "HeroUI Pro",
    category: "system",
    categoryLabel: "应用与工作空间",
    url: "/sites/heroui",
    originUrl: "https://heroui.pro",
    desc: "前身 NextUI 进化版，以超大圆角、柔和霓虹微光、磨砂微质感与 SaaS 团队应用偏好配置著称。",
    badge: "SaaS App",
    icon: <Cpu className="h-4 w-4 text-pink-500" />,
  },
  {
    id: "beui",
    title: "beUI",
    category: "motion",
    categoryLabel: "交互与光效",
    url: "/sites/beui",
    originUrl: "https://beui.dev",
    desc: "基于 Motion 构建的高级动画组件库，提供打字机文本流、流光按钮、鼠标光斑跟随与交互式拖拽上传容器。",
    badge: "Interactive",
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "rareui",
    title: "RareUI",
    category: "motion",
    categoryLabel: "物理质感与罕见交互",
    url: "/sites/rareui",
    originUrl: "https://www.rareui.com",
    desc: "还原先锋网站中罕见的动效组件：Fluid Orb 蠕动流体光晕球、悬浮灵动控制岛、可展开文件夹与微动摇摆铃铛。",
    badge: "Physics",
    icon: <Compass className="h-4 w-4 text-purple-500" />,
  },
  {
    id: "transitions",
    title: "Transitions.dev",
    category: "motion",
    categoryLabel: "流体形变与过渡",
    url: "/sites/transitions",
    originUrl: "https://transitions.dev",
    desc: "专注于原生 View Transitions 与物理弹簧布局变形，让容器展开、交错列表入场与文本垂直轮转置换连续丝滑。",
    badge: "Morphing",
    icon: <Layers className="h-4 w-4 text-teal-500" />,
  },
  {
    id: "beautifului",
    title: "BeautifulUI",
    category: "motion",
    categoryLabel: "艺术高颜值",
    url: "/sites/beautifului",
    originUrl: "https://www.beautifului.dev",
    desc: "追求极具辨识度的高颜值艺术感：极光流光背景、微渐变高光徽章、磨砂拟态以及 AI 智能体决策协同卡。",
    badge: "Aurora & HITL",
    icon: <Gem className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "shadcnspace",
    title: "ShadcnSpace",
    category: "system",
    categoryLabel: "脚手架与控制台",
    url: "/sites/shadcnspace",
    originUrl: "https://shadcnspace.com",
    desc: "生产级高可用 Blocks 与完整 Dashboard 模板，支持非对称 Bento 网格、CLI 安装代码块与现代身份鉴权控制台。",
    badge: "Templates",
    icon: <Grid className="h-4 w-4 text-emerald-500" />,
  },
];

export default function HomeHubPage() {
  const [filter, setFilter] = useState<"all" | "motion" | "system" | "core">("all");

  const filteredSites = siteList.filter((site) => {
    if (filter === "all") return true;
    return site.category === filter;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 max-w-6xl space-y-16">
      {/* 1. 极简呼吸感 Hero 区域 (参考 Linear / Vercel 纯粹美学) */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-tight">
          <Sparkles className="h-3.5 w-3.5" />
          <span>The Multi-Ecosystem Benchmark</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
          全景式设计工程组件基底
        </h1>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          一站式同屏比对 <strong className="text-foreground font-semibold">64 款官方原子组件</strong>、
          <strong className="text-foreground font-semibold">11 大顶尖社区衍生生态</strong> 与 
          <strong className="text-foreground font-semibold"> 24+ 款设计师常备工具箱</strong>。
          杜绝虚标，全部组件 100% 真实交互运行。
        </p>

        {/* 极简水平设计度量条 (Design Spec Pill) - 彻底替代笨重的数据方格堆砌 */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span>64 官方原子</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>11 社区扩展库</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span>1,000+ 生产级 Blocks</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>24+ 设计师工具</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>58 预渲染静态路由</span>
          </div>
        </div>
      </section>

      {/* 2. 画廊控制条与分类筛选 (去噪一体化) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-2 border-b">
          {/* 分类切换器 */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/50 border text-xs">
            {[
              { key: "all", label: "全部生态", count: siteList.length },
              { key: "motion", label: "动效与视觉", count: siteList.filter((s) => s.category === "motion").length },
              { key: "system", label: "区块与系统", count: siteList.filter((s) => s.category === "system").length },
              { key: "core", label: "官方核心", count: siteList.filter((s) => s.category === "core").length },
            ].map((tab) => {
              const active = filter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key as any)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded-full ${active ? "bg-muted font-mono" : "text-muted-foreground/60"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 前端设计师百宝箱轻量直达入口 */}
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/15 transition-all shadow-2xs group"
          >
            <Wrench className="h-3.5 w-3.5" />
            <span>🛠️ 设计师百宝箱 (24+ 神器)</span>
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 3. 极简轻奢封面级卡片网格 (删除细碎圆点，增加呼吸感与微动效) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSites.map((site) => (
            <Link
              key={site.id}
              href={site.url}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border bg-card/40 backdrop-blur-xs hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 select-none overflow-hidden"
            >
              <div>
                {/* 顶部：图标 + 标题 + 徽标 */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-xl bg-muted/80 border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {site.icon}
                    </div>
                    <div>
                      <h2 className="text-base font-bold tracking-tight group-hover:text-primary transition-colors">
                        {site.title}
                      </h2>
                      <span className="text-[11px] text-muted-foreground font-mono">
                        {site.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-mono shrink-0 bg-background/80 font-medium">
                    {site.badge}
                  </Badge>
                </div>

                {/* 描述内容 (精炼 2 行，高度通透) */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-2">
                  {site.desc}
                </p>
              </div>

              {/* 底部行动条 (优雅微交互) */}
              <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                <span className="text-primary font-semibold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>进入画廊</span>
                  <ArrowRight className="h-3 w-3" />
                </span>

                <a
                  href={site.originUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] text-muted-foreground/60 hover:text-foreground flex items-center gap-1 font-mono transition-colors"
                  title="访问原始项目官网"
                >
                  <span>官方</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
