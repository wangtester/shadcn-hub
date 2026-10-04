"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, CheckSquare, Layers, MessageSquare, BarChart3, Compass, BellRing, Sparkles } from "lucide-react";

const shadcnMenuGroups: MenuGroup[] = [
  {
    groupTitle: "总览",
    items: [
      { title: "全部组件", href: "/shadcn", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "分类",
    items: [
      { title: "表单", href: "/shadcn/forms", badge: "17项", icon: <CheckSquare /> },
      { title: "布局", href: "/shadcn/layout", badge: "8项", icon: <Layers /> },
      { title: "浮层", href: "/shadcn/overlay", badge: "8项", icon: <MessageSquare /> },
      { title: "数据展示", href: "/shadcn/data", badge: "9项", icon: <BarChart3 /> },
      { title: "导航", href: "/shadcn/navigation", badge: "5项", icon: <Compass /> },
      { title: "反馈", href: "/shadcn/feedback", badge: "8项", icon: <BellRing /> },
      { title: "扩展基元", href: "/shadcn/extended", badge: "9项", icon: <Sparkles /> },
    ],
  },
];

export default function ShadcnLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="shadcn/ui 官方库"
      siteBadge="64/64 100%全量实装"
      siteDesc="已安装收录全部 64 个官方组件，每个组件均有实机渲染展示与代码索引"
      menuGroups={shadcnMenuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
