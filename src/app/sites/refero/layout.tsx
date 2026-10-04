"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Palette, Sliders, Contrast } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/refero", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "体系",
    items: [
      { title: "风格对比", href: "/sites/refero/styles", badge: "9种", icon: <Palette /> },
      { title: "变量规范", href: "/sites/refero/tokens", badge: "Tokens", icon: <Contrast /> },
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
