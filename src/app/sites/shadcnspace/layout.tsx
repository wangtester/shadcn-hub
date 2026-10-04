"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Sparkles, PieChart, PanelLeftOpen } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "概览",
    items: [
      { title: "概览", href: "/sites/shadcnspace", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "区块",
    items: [
      { title: "营销区块", href: "/sites/shadcnspace/marketing", badge: "Hero", icon: <Sparkles /> },
      { title: "仪表盘", href: "/sites/shadcnspace/dashboard", badge: "Data", icon: <PieChart /> },
      { title: "整页模板", href: "/sites/shadcnspace/pages", badge: "Admin", icon: <PanelLeftOpen /> },
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
