"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Wand2, Sparkles, Lamp, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "Aceternity UI 系统",
    items: [
      { title: "概览与极客视觉哲学", href: "/sites/aceternity", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "高质感视觉组件 (Components)",
    items: [
      { title: "聚光与 3D 视觉基元", href: "/sites/aceternity/components", badge: "Lamp & Pin", icon: <Sparkles /> },
    ],
  },
  {
    groupTitle: "沉浸式科技区块 (Blocks)",
    items: [
      { title: "光束追踪与背景展台", href: "/sites/aceternity/blocks", badge: "Tracing Beam", icon: <Layers /> },
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
