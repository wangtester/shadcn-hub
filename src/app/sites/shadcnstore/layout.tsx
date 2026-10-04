"use client";

import { SidebarLayout, type MenuGroup } from "@/components/sidebar-layout";
import { 
  LayoutDashboard, 
  Sparkles, 
  Layers, 
  CreditCard, 
  HelpCircle, 
  ShoppingBag, 
  CheckSquare, 
  Table, 
  ShieldCheck 
} from "lucide-react";

const menuGroups: MenuGroup[] = [
  {
    groupTitle: "精选",
    items: [
      { title: "全景总览", href: "/sites/shadcnstore", icon: <LayoutDashboard /> },
    ],
  },
  {
    groupTitle: "营销区块",
    items: [
      { title: "Hero首屏", href: "/sites/shadcnstore/hero", badge: "Hot", icon: <Sparkles /> },
      { title: "功能特性", href: "/sites/shadcnstore/features", badge: "Bento", icon: <Layers /> },
      { title: "价格方案", href: "/sites/shadcnstore/pricing", icon: <CreditCard /> },
      { title: "常见问题", href: "/sites/shadcnstore/faqs", icon: <HelpCircle /> },
    ],
  },
  {
    groupTitle: "电商套件",
    items: [
      { title: "商品橱窗", href: "/sites/shadcnstore/products", badge: "Pro", icon: <ShoppingBag /> },
      { title: "结算订单", href: "/sites/shadcnstore/checkout", icon: <CheckSquare /> },
    ],
  },
  {
    groupTitle: "应用后台",
    items: [
      { title: "数据表格", href: "/sites/shadcnstore/datatables", icon: <Table /> },
      { title: "认证安全", href: "/sites/shadcnstore/auth", icon: <ShieldCheck /> },
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
