"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, SlidersHorizontal, PieChart, Layers, Bot, Smile } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "总览", href: "/sites/heroui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "图表", href: "/sites/heroui/charts", badge: "8款", icon: <PieChart /> },
      { title: "数据呈现", href: "/sites/heroui/data", badge: "10款", icon: <Layers /> },
      { title: "AI 交互", href: "/sites/heroui/ai", badge: "Agent", icon: <Bot /> },
      { title: "反馈微交互", href: "/sites/heroui/feedback", badge: "反馈", icon: <Smile /> },
    ],
  },
  {
    groupTitle: "区块",
    items: [
      { title: "营销落地", href: "/sites/heroui/marketing", badge: "Glow", icon: <Sparkles /> },
      { title: "控制台应用", href: "/sites/heroui/application", badge: "Console", icon: <SlidersHorizontal /> },
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
