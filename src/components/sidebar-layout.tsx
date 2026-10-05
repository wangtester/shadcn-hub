"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React, { useState } from "react";
import { useI18n } from "@/context/i18n-context";

export interface MenuItem {
  title: string;
  titleEn?: string;
  href: string;
  badge?: string;
  badgeEn?: string;
  icon?: React.ReactNode;
}

export interface MenuGroup {
  groupTitle?: string;
  groupTitleEn?: string;
  items: MenuItem[];
}

interface SidebarLayoutProps {
  siteTitle: string;
  siteTitleEn?: string;
  siteBadge?: string;
  siteBadgeEn?: string;
  siteDesc?: string;
  siteDescEn?: string;
  menuGroups: MenuGroup[];
  children: React.ReactNode;
}

const COMMON_TRANSLATIONS: Record<string, string> = {
  "总览": "Overview",
  "分类": "Categories",
  "精选": "Featured",
  "组件": "Components",
  "区块": "Blocks",
  "模板": "Templates",
  "流派": "Styles",
  "规范": "Tokens",
  "动效": "Motion",
  "卡片": "Cards",
  "表单": "Forms",
  "布局": "Layout",
  "浮层": "Overlays",
  "数据展示": "Data Display",
  "导航": "Navigation",
  "反馈": "Feedback",
  "扩展基元": "Extended Primitives",
  "全部组件": "All Components",
  "动效组件": "Motion Components",
  "文本动效": "Text Effects",
  "Bento区块": "Bento Blocks",
  "背景图案": "Background Patterns",
  "视觉卡片": "Visual Cards",
  "聚光动效": "Spotlight Effects",
  "3D视差": "3D Parallax",
  "追踪区块": "Tracing Blocks",
  "工业图表": "Industrial Charts",
  "AI智能体": "AI Agentic",
  "基础基元": "Core Primitives",
  "营销区块": "Marketing Blocks",
  "落地页套件": "Landing Suites",
  "控制台看板": "Dashboard Analytics",
  "设计风格": "Design Styles",
  "设计Token": "Design Tokens",
  "概览": "Overview",
  "体系": "System",
  "过渡": "Transitions",
  "风格对比": "Style Comparison",
  "变量规范": "Token Standards",
  "看板基元": "Dashboard Primitives",
  "图表卡片": "Chart Cards",
  "智能控制台": "Agentic Console",
  "Hero首屏": "Hero Showcase",
  "功能特性": "Features & Bento",
  "价格方案": "Pricing Plans",
  "常见问题": "FAQs",
  "商品橱窗": "Product Showcase",
  "结算订单": "Checkout & Orders",
  "认证安全": "Auth & Security",
  "营销落地": "Marketing Landing",
  "控制台应用": "Console App",
  "数据呈现": "Data Presentation",
  "AI 交互": "AI Interaction",
  "反馈微交互": "Feedback Micro-UX",
  "按钮交互": "Button Interactions",
  "光效卡片": "Spotlight Cards",
  "交互基元": "Interactive Primitives",
  "流体微交互": "Fluid Micro-UX",
  "发光卡片": "Magnetic Cards",
  "容器变形": "Container Morphing",
  "阶梯入场": "Stagger Cascade",
  "高光组件": "Accent Highlights",
  "拟态卡片": "Glassmorphic Cards",
  "AI 决策卡": "AI HITL Cards",
  "整页模板": "Full Templates",
  "电商套件": "E-Commerce Suite",
  "应用后台": "App Admin",
  "全景总览": "Overview",
};

export function SidebarLayout({
  siteTitle,
  siteTitleEn,
  siteBadge,
  siteBadgeEn,
  siteDesc,
  siteDescEn,
  menuGroups,
  children,
}: SidebarLayoutProps) {
  const pathname = usePathname();
  const { isEn } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const translateText = (text?: string, fallbackEn?: string) => {
    if (!text) return text;
    if (!isEn) return text;
    if (fallbackEn) return fallbackEn;
    if (COMMON_TRANSLATIONS[text]) return COMMON_TRANSLATIONS[text];
    // Handle {n}项 or {n}款
    const match = text.match(/^(\d+)(?:项|款)$/);
    if (match) return `${match[1]} items`;
    return text;
  };

  const currentSiteTitle = isEn && siteTitleEn ? siteTitleEn : siteTitle;
  const currentSiteBadge = isEn && siteBadgeEn ? siteBadgeEn : siteBadge;

  const navContent = (
    <div className="space-y-5 py-2">
      <div className="px-3 pb-3 border-b">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-foreground truncate">
            {currentSiteTitle}
          </h2>
          {currentSiteBadge && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-mono">
              {currentSiteBadge}
            </Badge>
          )}
        </div>
      </div>

      <div className="space-y-4 px-1">
        {menuGroups.map((group, idx) => {
          const groupTitle = translateText(group.groupTitle, group.groupTitleEn);
          return (
            <div key={idx} className="space-y-1">
              {groupTitle && (
                <h4 className="px-3 text-[11px] font-semibold text-muted-foreground tracking-wider uppercase mb-1">
                  {groupTitle}
                </h4>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  const itemTitle = translateText(item.title, item.titleEn);
                  const itemBadge = translateText(item.badge, item.badgeEn);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 text-xs md:text-sm font-medium rounded-lg transition-all group",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        {item.icon && (
                          <span
                            className={cn(
                              "shrink-0 size-4",
                              isActive
                                ? "text-primary-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                            )}
                          >
                            {item.icon}
                          </span>
                        )}
                        <span className="truncate">{itemTitle}</span>
                      </div>
                      {itemBadge && (
                        <span
                          className={cn(
                            "text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium shrink-0 ml-1.5",
                            isActive
                              ? "bg-primary-foreground/20 text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                        >
                          {itemBadge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] w-full">
      {/* 桌面端固定侧边栏 */}
      <aside className="hidden md:block w-60 shrink-0 border-r bg-card/30 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
        <ScrollArea className="h-full px-2 py-4">
          {navContent}
        </ScrollArea>
      </aside>

      {/* 移动端侧边抽屉按钮 */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button size="icon" className="rounded-full shadow-lg h-12 w-12 cursor-pointer">
                <Menu className="h-5 w-5" />
              </Button>
            }
          />
          <SheetContent side="left" className="w-72 p-4">
            <SheetHeader className="mb-2">
              <SheetTitle className="text-left">{currentSiteTitle}</SheetTitle>
            </SheetHeader>
            {navContent}
          </SheetContent>
        </Sheet>
      </div>

      {/* 右侧主内容展示区 */}
      <div className="flex-1 min-w-0 px-6 md:px-12 lg:px-16 py-8 md:py-14 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}
