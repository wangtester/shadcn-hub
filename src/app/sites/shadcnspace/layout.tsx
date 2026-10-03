"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, PieChart, PanelLeftOpen } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "ShadcnSpace 核心",
    items: [
      { title: "概览与生态特性", href: "/sites/shadcnspace", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "生产级区块 (Blocks)",
    items: [
      { title: "营销区块 (Marketing)", href: "/sites/shadcnspace/marketing", badge: "Hero/CTA", icon: <Sparkles /> },
      { title: "仪表盘区块 (Dashboard)", href: "/sites/shadcnspace/dashboard", badge: "Analytics", icon: <PieChart /> },
      { title: "整页模板 (Pages)", href: "/sites/shadcnspace/pages", badge: "Auth/Admin", icon: <PanelLeftOpen /> },
    ],
  },
];

export default function ShadcnSpaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="ShadcnSpace"
      siteBadge="457+ Blocks"
      siteDesc="生产级 Shadcn UI 区块与整页模板生态库"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
