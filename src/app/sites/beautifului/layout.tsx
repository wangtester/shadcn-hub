"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Gem, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "BeautifulUI 美学系统",
    items: [
      { title: "概览与美学理念", href: "/sites/beautifului", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "高颜值组件",
    items: [
      { title: "视觉亮点组件 (Accents)", href: "/sites/beautifului/accents", badge: "Glow", icon: <Sparkles /> },
      { title: "创意拟态卡片 (Cards)", href: "/sites/beautifului/cards", badge: "Glass", icon: <Gem /> },
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
