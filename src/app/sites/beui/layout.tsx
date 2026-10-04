"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Type, MousePointerClick, Sparkles, Layers } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/beui", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "动效",
    items: [
      { title: "文本动效", href: "/sites/beui/text", badge: "Typing", icon: <Type /> },
      { title: "按钮交互", href: "/sites/beui/buttons", badge: "Shimmer", icon: <MousePointerClick /> },
      { title: "光效卡片", href: "/sites/beui/cards", badge: "Spotlight", icon: <Sparkles /> },
      { title: "交互基元", href: "/sites/beui/interactive", badge: "Upload", icon: <Layers /> },
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
