"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, BarChart2, Bot, SlidersHorizontal } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "BoardUI 看板系统",
    items: [
      { title: "概览与设计系统", href: "/sites/boardui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "看板与智能组件",
    items: [
      { title: "核心看板基元 (Components)", href: "/sites/boardui/components", badge: "Tokens", icon: <SlidersHorizontal /> },
      { title: "图表卡片 (Chart Cards)", href: "/sites/boardui/charts", badge: "19 Cards", icon: <BarChart2 /> },
      { title: "AI Agent & SaaS 控制台", href: "/sites/boardui/agentic", badge: "Agentic", icon: <Bot /> },
    ],
  },
];

export default function BoardUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="BoardUI"
      siteBadge="Dashboard System"
      siteDesc="面向数据密集型仪表盘与 AI Agent 产品的 85+ 响应式组件库"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
