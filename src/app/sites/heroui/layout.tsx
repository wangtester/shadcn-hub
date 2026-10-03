"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, SlidersHorizontal, UserCheck } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "HeroUI 核心体系",
    items: [
      { title: "概览与设计语言", href: "/sites/heroui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "Pro 区块与业务流",
    items: [
      { title: "营销落地页 (Marketing)", href: "/sites/heroui/marketing", badge: "Hero/Glow", icon: <Sparkles /> },
      { title: "应用与表单流 (Application)", href: "/sites/heroui/application", badge: "Settings", icon: <SlidersHorizontal /> },
    ],
  },
];

export default function HeroUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="HeroUI Pro"
      siteBadge="NextUI 进化版"
      siteDesc="具有大圆角、微质感光晕与极致平滑微交互的专业组件系统"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
