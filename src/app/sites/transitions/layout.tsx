"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, ArrowLeftRight, Layers, Split } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/transitions", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "过渡",
    items: [
      { title: "容器变形", href: "/sites/transitions/morphing", badge: "Spring", icon: <ArrowLeftRight /> },
      { title: "阶梯入场", href: "/sites/transitions/stagger", badge: "Cascade", icon: <Layers /> },
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
