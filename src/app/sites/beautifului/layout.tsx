"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Gem, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/beautifului", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "高光组件", href: "/sites/beautifului/accents", badge: "Glow", icon: <Sparkles /> },
      { title: "拟态卡片", href: "/sites/beautifului/cards", badge: "Glass", icon: <Gem /> },
      { title: "AI 决策卡", href: "/sites/beautifului/agentic", badge: "HITL", icon: <Layers /> },
    ],
  },
];

export default function BeautifulUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="BeautifulUI"
      siteBadge="美学组件库"
      siteDesc="专注于极具辨识度与艺术感的高颜值 UI 组件"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
