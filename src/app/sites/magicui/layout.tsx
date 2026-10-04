"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Box, LayoutGrid } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "Magic UI 系统",
    items: [
      { title: "概览与设计工程师理念", href: "/sites/magicui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "核心组件库 (Components)",
    items: [
      { title: "动效交互组件", href: "/sites/magicui/components", badge: "5 Components", icon: <Sparkles /> },
    ],
  },
  {
    groupTitle: "高质感区块 (Blocks)",
    items: [
      { title: "Bento 网格与营销区块", href: "/sites/magicui/blocks", badge: "3 Blocks", icon: <LayoutGrid /> },
    ],
  },
];

export default function MagicUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="Magic UI"
      siteBadge="Design Engineer"
      siteDesc="面向专业设计工程师的高级动效组件库与 Bento 区块，专注提升 Landing Page 质感与转化率"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
