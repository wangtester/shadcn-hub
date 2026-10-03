"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Palette, Sliders, Contrast } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "Refero Styles 核心",
    items: [
      { title: "概览与设计风格库", href: "/sites/refero", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "风格与规范体系",
    items: [
      { title: "9大主流设计风格对比", href: "/sites/refero/styles", badge: "9 Styles", icon: <Palette /> },
      { title: "Design Tokens & 色彩规范", href: "/sites/refero/tokens", badge: "Tokens", icon: <Contrast /> },
    ],
  },
];

export default function ReferoLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="Refero Styles"
      siteBadge="DESIGN.md 规范"
      siteDesc="真实网站风格库与 AI 可读的 Design Tokens 提炼系统"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
