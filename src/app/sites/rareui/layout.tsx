"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, Wand2, Compass } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/rareui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "流体微交互", href: "/sites/rareui/interactive", badge: "Fluid", icon: <Wand2 /> },
      { title: "发光卡片", href: "/sites/rareui/cards", badge: "Magnetic", icon: <Sparkles /> },
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
