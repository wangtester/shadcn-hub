"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
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
  Grid,
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
    categoryLabel: "官方组件",
    url: "/shadcn",
    originUrl: "https://ui.shadcn.com",
    desc: "全量 64 款基础与复合组件，包含表单、布局、浮层、数据展示、导航与反馈，全部支持源码级调试与复制。",
    badge: "64 款组件",
    icon: <Box className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "magicui",
    title: "Magic UI",
    category: "motion",
    categoryLabel: "动效组件",
    url: "/sites/magicui",
    originUrl: "https://magicui.design",
    desc: "专为现代前端打造的高级动效库，涵盖无缝跑马灯、Animated Beam 节点光束、流光边框与交互 Bento 网格。",
    badge: "50+ 动效",
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "aceternity",
    title: "Aceternity UI",
    category: "motion",
    categoryLabel: "视觉特效",
    url: "/sites/aceternity",
    originUrl: "https://ui.aceternity.com",
    desc: "暗黑先锋极客美学组件库，包含 Lamp Header 聚光神灯效应、星空粒子与 3D 透视图钉等前沿视觉。",
    badge: "特效组件",
    icon: <Wand2 className="h-4 w-4 text-cyan-500" />,
  },
  {
    id: "boardui",
    title: "BoardUI",
    category: "system",
    categoryLabel: "仪表盘与图表",
    url: "/sites/boardui",
    originUrl: "https://www.boardui.com",
    desc: "面向数据密集型仪表盘与 AI 智能体，收录 19 款高密度工业图表卡片、决策流水线与核心看板基元。",
    badge: "19 款图表",
    icon: <BarChart2 className="h-4 w-4 text-violet-500" />,
  },
  {
    id: "shadcnstore",
    title: "ShadcnStore",
    category: "system",
    categoryLabel: "营销与商业区块",
    url: "/sites/shadcnstore",
    originUrl: "https://shadcnstore.com",
    desc: "覆盖 39 个细分业务类目的生产级区块库，涵盖现代 Bento 网格、定价对比表、增长指标与电商模块。",
    badge: "39 类区块",
    icon: <Store className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "refero",
    title: "Refero Styles",
    category: "system",
    categoryLabel: "设计风格参考",
    url: "/sites/refero",
    originUrl: "https://styles.refero.design",
    desc: "顶尖产品真实风格提炼库，同屏对比 Linear、Geist、Apple、新粗野主义，支持导出 DESIGN.md 规范。",
    badge: "9 大风格",
    icon: <Palette className="h-4 w-4 text-amber-500" />,
  },
  {
    id: "heroui",
    title: "HeroUI Pro",
    category: "system",
    categoryLabel: "应用界面",
    url: "/sites/heroui",
    originUrl: "https://heroui.pro",
    desc: "以超大圆角、柔和微光与 SaaS 团队应用为特色的界面库，提供完备的工作空间与配置面板组件。",
    badge: "SaaS 界面",
    icon: <Cpu className="h-4 w-4 text-pink-500" />,
  },
  {
    id: "beui",
    title: "beUI",
    category: "motion",
    categoryLabel: "微交互组件",
    url: "/sites/beui",
    originUrl: "https://beui.dev",
    desc: "基于 Motion 构建的交互组件库，提供打字机文本流、流光按钮、鼠标光斑跟随与交互式拖拽上传容器。",
    badge: "微交互",
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "rareui",
    title: "RareUI",
    category: "motion",
    categoryLabel: "创意与物理动效",
    url: "/sites/rareui",
    originUrl: "https://www.rareui.com",
    desc: "精选前沿网站中罕见的动效组件：流体光晕球、灵动控制岛、可展开文件夹与拟真物理微交互。",
    badge: "物理动效",
    icon: <Compass className="h-4 w-4 text-purple-500" />,
  },
  {
    id: "transitions",
    title: "Transitions.dev",
    category: "motion",
    categoryLabel: "视图过渡动效",
    url: "/sites/transitions",
    originUrl: "https://transitions.dev",
    desc: "专注于原生 View Transitions 与物理弹簧布局形变，提供丝滑的容器展开、列表入场与文本轮转。",
    badge: "视图过渡",
    icon: <Layers className="h-4 w-4 text-teal-500" />,
  },
  {
    id: "beautifului",
    title: "BeautifulUI",
    category: "motion",
    categoryLabel: "精选视觉组件",
    url: "/sites/beautifului",
    originUrl: "https://www.beautifului.dev",
    desc: "注重高颜值与艺术质感的精选库：极光流光背景、微渐变高光徽章、磨砂拟态与 AI 协同卡片。",
    badge: "高质感",
    icon: <Gem className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "21st",
    title: "21st.dev",
    category: "system",
    categoryLabel: "社区生态与模板",
    url: "/sites/21st",
    originUrl: "https://21st.dev/community/components",
    desc: "全球设计工程师共享的现代微交互胶囊坞、合作伙伴墙与高奢毛玻璃整页模板。",
    badge: "社区创新",
    icon: <Sparkles className="h-4 w-4 text-violet-500" />,
  },
  {
    id: "shadcnblocks",
    title: "Shadcnblocks",
    category: "system",
    categoryLabel: "商业复合区块",
    url: "/sites/shadcnblocks",
    originUrl: "https://www.shadcnblocks.com",
    desc: "专为 Next.js 打造的自动化补全过滤器、非对称 Hero 与整套 SaaS 页面模板。",
    badge: "生产级区块",
    icon: <Store className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "shadcn-io",
    title: "shadcn.io",
    category: "system",
    categoryLabel: "万能区块与安全",
    url: "/sites/shadcn-io",
    originUrl: "https://www.shadcn.io/blocks",
    desc: "收录 6000+ 生产级 UI Blocks，涵盖 2FA 安全二次验证、无障碍合规与 Solaris 纯白模板。",
    badge: "6000+ Blocks",
    icon: <Layers className="h-4 w-4 text-emerald-500" />,
  },
  {
    id: "tailark",
    title: "Tailark",
    category: "system",
    categoryLabel: "霓虹与科技营销",
    url: "/sites/tailark",
    originUrl: "https://tailark.com/blocks",
    desc: "拥有极高审美造诣的深色科技风营销区块，包含多层光晕 Hero 与 Bento 矩阵。",
    badge: "科技营销",
    icon: <Wand2 className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "shadcnspace",
    title: "shadcnspace",
    category: "system",
    categoryLabel: "营销与看板",
    url: "/sites/shadcnspace",
    originUrl: "https://shadcnspace.com",
    desc: "全景运营看板曲线与现代营销落地页复合区块套件，支持非对称 Bento 网格与深色控制台。",
    badge: "营销与看板",
    icon: <Box className="h-4 w-4 text-teal-500" />,
  },
  {
    id: "veloraui",
    title: "Velora UI",
    category: "motion",
    categoryLabel: "AI 等待态交互",
    url: "/sites/veloraui",
    originUrl: "https://veloraui.vercel.app",
    desc: "为大模型等待时间设计的交互库：实时 Token/s 流速模拟与思维链展开轨迹。",
    badge: "AI 交互",
    icon: <Cpu className="h-4 w-4 text-cyan-500" />,
  },
  {
    id: "motion-primitives",
    title: "Motion Primitives",
    category: "motion",
    categoryLabel: "Framer 动效基元",
    url: "/sites/motion-primitives",
    originUrl: "https://motion-primitives.com",
    desc: "基于 Framer Motion 的轻量级纯粹动效，包含字符逐字入场与连续光迹边框。",
    badge: "Framer 基元",
    icon: <Sparkles className="h-4 w-4 text-amber-500" />,
  },
  {
    id: "skiper",
    title: "Skiper UI",
    category: "motion",
    categoryLabel: "磁吸与3D陀螺仪",
    url: "/sites/skiper",
    originUrl: "https://skiper-ui.com/components",
    desc: "注重鼠标物理互动的现代库，包含 3D 俯仰倾斜跟随与径向光斑卡片。",
    badge: "3D 物理",
    icon: <Compass className="h-4 w-4 text-rose-500" />,
  },
  {
    id: "eldora",
    title: "Eldora UI",
    category: "system",
    categoryLabel: "真机外壳容器",
    url: "/sites/eldora",
    originUrl: "https://www.eldoraui.site/docs/components",
    desc: "高拟真硬件设备外壳渲染组件，内置 Safari 浏览器与移动端高保真外框。",
    badge: "设备外壳",
    icon: <Box className="h-4 w-4 text-teal-500" />,
  },
  {
    id: "kibo",
    title: "Kibo UI",
    category: "core",
    categoryLabel: "协同与生产力",
    url: "/sites/kibo",
    originUrl: "https://www.kibo-ui.com/components/table",
    desc: "从协同多光标、头像堆叠到甘特图与看板的一站式团队生产力组件库。",
    badge: "协同生产力",
    icon: <BarChart2 className="h-4 w-4 text-purple-500" />,
  },
  {
    id: "kokonut",
    title: "Kokonut UI",
    category: "motion",
    categoryLabel: "新质感与AI输入",
    url: "/sites/kokonut",
    originUrl: "https://kokonutui.com",
    desc: "结合玻璃拟态、渐变光斑与现代 AI 提示词输入控制条的前沿组件套件。",
    badge: "AI 输入条",
    icon: <Gem className="h-4 w-4 text-pink-500" />,
  },
  {
    id: "animate-ui",
    title: "Animate UI",
    category: "motion",
    categoryLabel: "微动效组件",
    url: "/sites/animate-ui",
    originUrl: "https://animate-ui.com/docs/components",
    desc: "基于 Radix & Base UI 构建的高性能动效组件库，拥有粒子光晕与弹性交互。",
    badge: "粒子动效",
    icon: <Sparkles className="h-4 w-4 text-orange-500" />,
  },
  {
    id: "origin-ui",
    title: "Origin UI",
    category: "core",
    categoryLabel: "Base UI 现代演进",
    url: "/sites/origin-ui",
    originUrl: "https://coss.com/ui",
    desc: "基于 Base UI 体系打造的超高可访问性与极简工业风组件，包含键盘防重 Chips。",
    badge: "Base UI",
    icon: <Box className="h-4 w-4 text-blue-500" />,
  },
  {
    id: "reui",
    title: "ReUI",
    category: "system",
    categoryLabel: "企业级高阶组件",
    url: "/sites/reui",
    originUrl: "https://reui.io/components",
    desc: "专为企业中后台打造的高阶 Data Grid、列冻结、活动甘特图与事件日历库。",
    badge: "企业中后台",
    icon: <Grid className="h-4 w-4 text-emerald-500" />,
  },
  {
    id: "mynaui",
    title: "MynaUI",
    category: "core",
    categoryLabel: "Figma 像素级对齐",
    url: "/sites/mynaui",
    originUrl: "https://mynaui.com",
    desc: "从 Figma 设计系统直出的高品质 Tailwind CSS/Radix UI 分段胶囊与原子基元。",
    badge: "Figma 对齐",
    icon: <Palette className="h-4 w-4 text-cyan-500" />,
  },
  {
    id: "shadcn-charts",
    title: "shadcn/ui Charts",
    category: "system",
    categoryLabel: "官方现代图表",
    url: "/sites/shadcn-charts",
    originUrl: "https://ui.shadcn.com/charts",
    desc: "基于 Recharts 与 Tailwind CSS 深度打磨的官方主题化现代数据可视化基元。",
    badge: "官方图表",
    icon: <BarChart2 className="h-4 w-4 text-indigo-500" />,
  },
  {
    id: "shadcnstudio",
    title: "shadcnstudio.com",
    category: "system",
    categoryLabel: "深色商业套件",
    url: "/sites/shadcnstudio",
    originUrl: "https://shadcnstudio.com/blocks",
    desc: "包含 1000+ 免费与 Pro 级的深色科技商业营销区块与阶梯定价对比表。",
    badge: "深色商业",
    icon: <Store className="h-4 w-4 text-amber-500" />,
  },
];

export default function HomeHubPage() {
  const [filter, setFilter] = useState<"all" | "motion" | "system" | "core">("all");

  const filteredSites = siteList.filter((site) => {
    if (filter === "all") return true;
    return site.category === filter;
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-10 md:py-16 max-w-6xl space-y-12">
      {/* 1. 极简 Hero 区域 */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 text-primary text-xs font-mono font-medium">
          <Sparkles className="h-3.5 w-3.5" /> 28 大 UI 资源全景发现与原地渲染
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
          shadcn 生态全景组件与区块画廊
        </h1>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          完整收录 28 个主流 UI 站点，包含原子组件、复合区块与整页模板。严禁跳转二级页面，卡片内 100% 真实交互运行，附带原站直达外链。
        </p>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs md:text-sm shadow-md hover:bg-primary/90 transition-all cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>进入全景原生画廊 (Live Gallery)</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/shadcn"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border bg-background hover:bg-muted text-foreground font-medium text-xs md:text-sm transition-all"
          >
            <Box className="h-4 w-4" />
            <span>官方 64 组件</span>
          </Link>
        </div>
      </section>

      {/* 2. 分类筛选器 */}
      <section className="space-y-6">
        <div className="flex items-center justify-between pb-2 border-b">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/50 border text-xs">
            {[
              { key: "all", label: "全部", count: siteList.length },
              { key: "motion", label: "动效与交互", count: siteList.filter((s) => s.category === "motion").length },
              { key: "system", label: "区块与系统", count: siteList.filter((s) => s.category === "system").length },
              { key: "core", label: "官方组件", count: siteList.filter((s) => s.category === "core").length },
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

          <span className="text-xs text-muted-foreground hidden sm:inline-block font-mono">
            {filteredSites.length} 个站点
          </span>
        </div>

        {/* 3. 极简卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSites.map((site) => (
            <Link
              key={site.id}
              href={site.url}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border bg-card/40 hover:border-primary/40 hover:bg-card/80 hover:shadow-md transition-all duration-200 select-none"
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
                  <Badge variant="outline" className="text-[10px] font-mono shrink-0 bg-background/80 font-normal">
                    {site.badge}
                  </Badge>
                </div>

                {/* 描述内容 */}
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-2">
                  {site.desc}
                </p>
              </div>

              {/* 底部行动条 */}
              <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                <span className="text-xs text-muted-foreground group-hover:text-primary font-medium flex items-center gap-1 transition-colors">
                  <span>浏览组件</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </span>

                <a
                  href={site.originUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-[11px] text-muted-foreground/60 hover:text-foreground flex items-center gap-1 font-mono transition-colors"
                  title="访问原始项目官网"
                >
                  <span>官网</span>
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
