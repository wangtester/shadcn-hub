"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, SlidersHorizontal, PieChart, Layers, Bot, Smile } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "HeroUI 概览",
    items: [
      { title: "全景组件总览", href: "/sites/heroui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "Components 组件生态",
    items: [
      { title: "Charts 图表体系", href: "/sites/heroui/charts", badge: "8 款", icon: <PieChart /> },
      { title: "Data Display 数据展示", href: "/sites/heroui/data", badge: "10 款", icon: <Layers /> },
      { title: "AI 智能交互基元", href: "/sites/heroui/ai", badge: "Agent", icon: <Bot /> },
      { title: "Feedback 反馈与交互", href: "/sites/heroui/feedback", badge: "微交互", icon: <Smile /> },
    ],
  },
  {
    groupTitle: "Pro 业务区块 (Blocks)",
    items: [
      { title: "营销落地页 (Marketing)", href: "/sites/heroui/marketing", badge: "Glow", icon: <Sparkles /> },
      { title: "应用与控制台 (Application)", href: "/sites/heroui/application", badge: "Console", icon: <SlidersHorizontal /> },
    ],
  },
];

export default function HeroUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="HeroUI Pro"
      siteBadge="NextUI 进化版"
      siteDesc="具有大圆角、微质感光晕与极致平滑微交互的专业组件系统"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
