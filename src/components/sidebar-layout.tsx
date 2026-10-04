"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export interface MenuItem {
  title: string;
  href: string;
  badge?: string;
  icon?: React.ReactNode;
}

export interface MenuGroup {
  groupTitle?: string;
  items: MenuItem[];
}

interface SidebarLayoutProps {
  siteTitle: string;
  siteBadge?: string;
  siteDesc?: string;
  menuGroups: MenuGroup[];
  children: React.ReactNode;
}

export function SidebarLayout({
  siteTitle,
  siteBadge,
  siteDesc,
  menuGroups,
  children,
}: SidebarLayoutProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <div className="space-y-5 py-2">
      <div className="px-3 pb-3 border-b">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-tight text-foreground truncate">{siteTitle}</h2>
          {siteBadge && <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-mono">{siteBadge}</Badge>}
        </div>
      </div>

      <div className="space-y-4 px-1">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            {group.groupTitle && (
              <h4 className="px-3 text-[11px] font-semibold text-muted-foreground tracking-wider uppercase mb-1">
                {group.groupTitle}
              </h4>
            )}
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
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
                        <span className={cn("shrink-0 size-4", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                          {item.icon}
                        </span>
                      )}
                      <span className="truncate">{item.title}</span>
                    </div>
                    {item.badge && (
                      <span className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium shrink-0 ml-1.5",
                        isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
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
          <SheetTrigger render={
            <Button size="icon" className="rounded-full shadow-lg h-12 w-12">
              <Menu className="h-5 w-5" />
            </Button>
          } />
          <SheetContent side="left" className="w-72 p-4">
            <SheetHeader className="mb-2">
              <SheetTitle className="text-left">{siteTitle}</SheetTitle>
            </SheetHeader>
            {navContent}
          </SheetContent>
        </Sheet>
      </div>

      {/* 右侧主内容展示区 (开阔画布与大留白) */}
      <div className="flex-1 min-w-0 px-6 md:px-12 lg:px-16 py-8 md:py-14 max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}
