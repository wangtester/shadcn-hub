"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Type, MousePointerClick, Sparkles, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "beUI 动效系统",
    items: [
      { title: "概览与 Motion 体系", href: "/sites/beui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "动效分类组件",
    items: [
      { title: "文本动态特效 (Text)", href: "/sites/beui/text", badge: "Typing", icon: <Type /> },
      { title: "按钮动态微交互 (Buttons)", href: "/sites/beui/buttons", badge: "Shimmer", icon: <MousePointerClick /> },
      { title: "卡片光效动效 (Cards)", href: "/sites/beui/cards", badge: "Spotlight", icon: <Sparkles /> },
      { title: "交互动效基元 (Interactive)", href: "/sites/beui/interactive", badge: "Upload", icon: <Layers /> },
    ],
  },
];

export default function BeUILayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="beUI"
      siteBadge="Motion 动效"
      siteDesc="基于 Motion 与 Tailwind CSS 构建的高级动画组件库"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
