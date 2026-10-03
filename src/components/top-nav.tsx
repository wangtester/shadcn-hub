"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Layers, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const siteNavs = [
  { href: "/", label: "首页 Hub", short: "Hub" },
  { href: "/shadcn", label: "shadcn/ui 官方", short: "shadcn" },
  { href: "/sites/shadcnspace", label: "ShadcnSpace", short: "Space" },
  { href: "/sites/shadcnstore", label: "ShadcnStore", short: "Store" },
  { href: "/sites/boardui", label: "BoardUI", short: "BoardUI" },
  { href: "/sites/heroui", label: "HeroUI Pro", short: "HeroUI" },
  { href: "/sites/refero", label: "Refero Styles", short: "Refero" },
  { href: "/sites/beui", label: "beUI 动效", short: "beUI" },
  { href: "/sites/rareui", label: "RareUI", short: "RareUI" },
  { href: "/sites/transitions", label: "Transitions.dev", short: "Transitions" },
  { href: "/sites/beautifului", label: "BeautifulUI", short: "BeautifulUI" },
];

export function TopNav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xs">
      <div className="flex h-14 items-center px-4 md:px-6 w-full gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-sm md:text-base shrink-0">
          <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
            <Layers className="h-4 w-4" />
          </div>
          <span className="hidden sm:inline-block tracking-tight">shadcn 全生态画廊</span>
        </Link>

        {/* 水平导航链接，支持横向无滚动条平滑拖拽/滚动 */}
        <div className="flex-1 overflow-x-auto scrollbar-none py-1 flex items-center">
          <nav className="flex items-center gap-1 min-w-max px-2">
            {siteNavs.map((item) => {
              const active = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-2.5 py-1 text-xs md:text-sm rounded-md transition-all whitespace-nowrap font-medium",
                    active
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* 右侧操作区 */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setDark((d) => !d)}
            aria-label="切换主题"
            className="rounded-lg"
          >
            {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
