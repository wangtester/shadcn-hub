"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, CheckSquare, Layers, MessageSquare, BarChart3, Compass, BellRing, Sparkles } from "lucide-react";

const shadcnMenuGroups: MenuGroup[] = [
  {
    groupTitle: "总览",
    groupTitleEn: "Overview",
    items: [
      { title: "全部组件", titleEn: "All Components", href: "/shadcn", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "分类",
    groupTitleEn: "Categories",
    items: [
      { title: "表单", titleEn: "Forms", href: "/shadcn/forms", badge: "17项", badgeEn: "17 items", icon: <CheckSquare /> },
      { title: "布局", titleEn: "Layout", href: "/shadcn/layout", badge: "8项", badgeEn: "8 items", icon: <Layers /> },
      { title: "浮层", titleEn: "Overlays", href: "/shadcn/overlay", badge: "8项", badgeEn: "8 items", icon: <MessageSquare /> },
      { title: "数据展示", titleEn: "Data Display", href: "/shadcn/data", badge: "9项", badgeEn: "9 items", icon: <BarChart3 /> },
      { title: "导航", titleEn: "Navigation", href: "/shadcn/navigation", badge: "5项", badgeEn: "5 items", icon: <Compass /> },
      { title: "反馈", titleEn: "Feedback", href: "/shadcn/feedback", badge: "8项", badgeEn: "8 items", icon: <BellRing /> },
      { title: "扩展基元", titleEn: "Extended Primitives", href: "/shadcn/extended", badge: "9项", badgeEn: "9 items", icon: <Sparkles /> },
    ],
  },
];

export default function ShadcnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="shadcn/ui 官方库"
      siteTitleEn="shadcn/ui Official Matrix"
      siteBadge="64/64 100%全量实装"
      siteBadgeEn="64/64 Implemented"
      siteDesc="已安装收录全部 64 个官方组件，每个组件均有实机渲染展示与代码索引"
      siteDescEn="Full 64 official core components with interactive previews and source code indexing"
      menuGroups={shadcnMenuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
