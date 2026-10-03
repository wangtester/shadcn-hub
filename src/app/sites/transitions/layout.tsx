"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, ArrowLeftRight, Layers, Split } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "Transitions.dev 核心",
    items: [
      { title: "概览与过渡哲学", href: "/sites/transitions", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "动效过渡分类",
    items: [
      { title: "容器展开与变形 (Morphing)", href: "/sites/transitions/morphing", badge: "Spring", icon: <ArrowLeftRight /> },
      { title: "交错阶梯入场 (Stagger)", href: "/sites/transitions/stagger", badge: "Cascade", icon: <Layers /> },
    ],
  },
];

export default function TransitionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="Transitions.dev"
      siteBadge="页面过渡库"
      siteDesc="专注于原生 View Transitions 与物理弹簧布局变形的动画库"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
