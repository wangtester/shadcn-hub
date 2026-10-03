"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Wand2, Compass } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "RareUI 稀缺组件",
    items: [
      { title: "概览与设计哲学", href: "/sites/rareui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "稀缺交互与动效",
    items: [
      { title: "流体与微交互 (Fluid & Micro)", href: "/sites/rareui/interactive", badge: "Fluid Orb", icon: <Wand2 /> },
      { title: "悬浮发光卡片 (Glow Cards)", href: "/sites/rareui/cards", badge: "Magnetic", icon: <Sparkles /> },
    ],
  },
];

export default function RareUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="RareUI"
      siteBadge="稀缺动效库"
      siteDesc="专注于网络上罕见而惊艳的高阶 UI 动画与流体组件"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
