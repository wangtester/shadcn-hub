"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Wand2, Sparkles, Lamp, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/aceternity", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "组件",
    items: [
      { title: "视觉组件", href: "/sites/aceternity/components", badge: "Lamp & Pin", icon: <Sparkles /> },
    ],
  },
  {
    groupTitle: "区块",
    items: [
      { title: "科技区块", href: "/sites/aceternity/blocks", badge: "Tracing Beam", icon: <Layers /> },
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
