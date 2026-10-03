"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { LayoutDashboard, Store, Layers, ShoppingBag } from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "ShadcnStore 核心",
    items: [
      { title: "概览与 39 个分类", href: "/sites/shadcnstore", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "特色区块与商城",
    items: [
      { title: "营销区块 (Sections)", href: "/sites/shadcnstore/sections", badge: "Bento/FAQ", icon: <Layers /> },
      { title: "电商套件 (Storefront)", href: "/sites/shadcnstore/ecommerce", badge: "Products", icon: <ShoppingBag /> },
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
