"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Store, Layers, ShoppingBag, Table } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "精选",
    items: [
      { title: "总览", href: "/sites/shadcnstore", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "区块",
    items: [
      { title: "营销区块", href: "/sites/shadcnstore/sections", badge: "19类", icon: <Layers /> },
      { title: "电商套件", href: "/sites/shadcnstore/ecommerce", badge: "9类", icon: <ShoppingBag /> },
      { title: "应用后台", href: "/sites/shadcnstore/application", badge: "11类", icon: <Table /> },
    ],
  },
];

export default function ShadcnStoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout
      siteTitle="ShadcnStore"
      siteBadge="269+ Blocks"
      siteDesc="覆盖 39 个垂直类目的生产级 Shadcn UI 区块与电商商城模板"
      menuGroups={menuGroups}
    >
      {children}
    </SidebarLayout>
  );
}
