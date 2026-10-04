"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Box, LayoutGrid } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/magicui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "动效组件", href: "/sites/magicui/components", badge: "5款", icon: <Sparkles /> },
    ],
  },
  {
    groupTitle: "区块",
    items: [
      { title: "Bento区块", href: "/sites/magicui/blocks", badge: "3款", icon: <LayoutGrid /> },
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
