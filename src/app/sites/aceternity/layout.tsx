"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Wand2, Sparkles, Lamp, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "精选",
    items: [
      { title: "总览", href: "/sites/aceternity", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "视觉卡片", href: "/sites/aceternity/cards", badge: "4款", icon: <Sparkles /> },
      { title: "聚光动效", href: "/sites/aceternity/effects", badge: "3款", icon: <Wand2 /> },
      { title: "3D视差", href: "/sites/aceternity/components", badge: "Pin", icon: <Lamp /> },
      { title: "追踪区块", href: "/sites/aceternity/blocks", badge: "Beam", icon: <Layers /> },
    ],
  },
];

export default function AceternityLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="Aceternity UI"
      siteBadge="Visual Aesthetics"
      siteDesc="专注于顶奢暗黑视觉美学、3D 透视交互与聚光神灯效应的极客级组件库"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
