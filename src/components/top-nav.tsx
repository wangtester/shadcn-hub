"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Layers,
  Moon,
  Sun,
  Star,
  ChevronDown,
  Sparkles,
  Wand2,
  BarChart2,
  Store,
  Palette,
  Compass,
  Gem,
  Cpu,
  Menu,
  ArrowRight,
  Box,
  Wrench,
  Grid,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect, useRef } from "react";
import { GlobalSearch } from "@/components/global-search";

interface EcosystemItem {
  title: string;
  href: string;
  desc: string;
  icon: React.ReactNode;
}

// 动效与交互 (6 个)
const motionEcosystems: EcosystemItem[] = [
  {
    title: "Magic UI",
    href: "/sites/magicui",
    desc: "跑马灯、节点光束、流光边框与 Bento 网格",
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Aceternity UI",
    href: "/sites/aceternity",
    desc: "Lamp 聚光神灯、星空粒子与 3D 透视",
    icon: <Wand2 className="h-4 w-4 text-cyan-500" />,
  },
  {
    title: "beUI",
    href: "/sites/beui",
    desc: "打字机文本、光斑跟随与交互组件",
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "RareUI",
    href: "/sites/rareui",
    desc: "Fluid Orb 流体球、灵动岛与展开文件夹",
    icon: <Compass className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Transitions.dev",
    href: "/sites/transitions",
    desc: "物理弹簧、文本轮转与视图过渡",
    icon: <Layers className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "BeautifulUI",
    href: "/sites/beautifului",
    desc: "极光高光、磨砂质感与设计组件",
    icon: <Gem className="h-4 w-4 text-rose-500" />,
  },
];

// 区块与系统 (5 个)
const systemEcosystems: EcosystemItem[] = [
  {
    title: "BoardUI",
    href: "/sites/boardui",
    desc: "工业级图表、AI 思考链与看板卡片",
    icon: <BarChart2 className="h-4 w-4 text-violet-500" />,
  },
  {
    title: "ShadcnStore",
    href: "/sites/shadcnstore",
    desc: "落地页区块、定价表与电商组件",
    icon: <Store className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Refero Styles",
    href: "/sites/refero",
    desc: "主流设计风格对比与规范参考",
    icon: <Palette className="h-4 w-4 text-amber-500" />,
  },
  {
    title: "HeroUI Pro",
    href: "/sites/heroui",
    desc: "工作空间、应用布局与大圆角规范",
    icon: <Cpu className="h-4 w-4 text-pink-500" />,
  },
];

export function TopNav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPopoverOpen(false);
    }, 180);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isCurrent = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isEcosystemActive =
    pathname.startsWith("/sites/") ||
    motionEcosystems.some((e) => pathname.startsWith(e.href)) ||
    systemEcosystems.some((e) => pathname.startsWith(e.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xs">
      <div className="flex h-14 items-center justify-between px-4 md:px-6 w-full gap-3">
        {/* 左侧：Logo 标识与总库徽标 */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-sm md:text-base group">
            <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Layers className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="tracking-tight font-extrabold text-foreground">shadcn-hub</span>
            </div>
          </Link>

          {/* 桌面端主导航条 (零滚动设计，绝对不截断) */}
          <nav className="hidden md:flex items-center gap-1">
            {/* 1. 首页 */}
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium",
                pathname === "/"
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              首页
            </Link>

            {/* 2. shadcn 官方组件 */}
            <Link
              href="/shadcn"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5",
                pathname.startsWith("/shadcn")
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Box className="h-3.5 w-3.5" />
              <span>官方组件</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-muted text-foreground/80 font-mono font-semibold">
                64
              </span>
            </Link>

            {/* 3. 生态扩展 下拉浮层 (11 社区库，一目了然，支持 Hover 与点击) */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex items-center"
            >
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger
                  className={cn(
                    "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5 cursor-pointer outline-hidden border",
                    isEcosystemActive
                      ? "bg-primary/15 text-primary border-primary/30 font-semibold"
                      : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Grid className="h-3.5 w-3.5" />
                  <span>生态扩展</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary/10 text-primary font-bold">
                    10
                  </span>
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", popoverOpen && "rotate-180")} />
                </PopoverTrigger>

                <PopoverContent
                  align="start"
                  sideOffset={8}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[560px] p-3.5 rounded-2xl shadow-xl border bg-popover/98 backdrop-blur"
                >
                  <div className="grid grid-cols-2 divide-x gap-3">
                    {/* 左列：动效与交互 */}
                    <div className="space-y-2">
                      <div className="pb-1 border-b px-1">
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          动效与交互
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {motionEcosystems.map((eco) => (
                          <Link
                            key={eco.href}
                            href={eco.href}
                            onClick={() => setPopoverOpen(false)}
                            className={cn(
                              "flex items-start gap-2.5 p-2 rounded-xl transition-all hover:bg-muted/70 group",
                              pathname.startsWith(eco.href) && "bg-muted font-semibold"
                            )}
                          >
                            <div className="p-1 rounded-lg bg-background border shadow-2xs group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                              {eco.icon}
                            </div>
                            <div className="overflow-hidden">
                              <span className="text-xs font-bold group-hover:text-primary transition-colors block">
                                {eco.title}
                              </span>
                              <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                                {eco.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 右列：区块与系统 */}
                    <div className="space-y-2 pl-3">
                      <div className="pb-1 border-b px-1">
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          区块与系统
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        {systemEcosystems.map((eco) => (
                          <Link
                            key={eco.href}
                            href={eco.href}
                            onClick={() => setPopoverOpen(false)}
                            className={cn(
                              "flex items-start gap-2.5 p-2 rounded-xl transition-all hover:bg-muted/70 group",
                              pathname.startsWith(eco.href) && "bg-muted font-semibold"
                            )}
                          >
                            <div className="p-1 rounded-lg bg-background border shadow-2xs group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                              {eco.icon}
                            </div>
                            <div className="overflow-hidden">
                              <span className="text-xs font-bold group-hover:text-primary transition-colors block">
                                {eco.title}
                              </span>
                              <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                                {eco.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* 4. 设计工具 */}
            <Link
              href="/tools"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5",
                pathname === "/tools"
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Wrench className="h-3.5 w-3.5" />
              <span>设计工具</span>
            </Link>
          </nav>
        </div>

        {/* 右侧：全局搜索、GitHub 链接、暗黑切换与移动端菜单 */}
        <div className="flex items-center gap-2 shrink-0">
          <GlobalSearch />

          <a
            href="https://github.com/wangtester/shadcn-hub"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden lg:flex items-center gap-1.5 h-8 text-xs font-medium rounded-lg shadow-2xs"
            )}
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>Star on GitHub</span>
          </a>

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setDark((d) => !d)}
            aria-label="切换主题"
            className="rounded-lg h-8 w-8"
          >
            {dark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* 移动端汉堡菜单 (Sheet 抽屉) */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="md:hidden rounded-lg h-8 w-8 inline-flex items-center justify-center border bg-background hover:bg-muted cursor-pointer"
              aria-label="打开导航抽屉"
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[340px] p-6 overflow-y-auto">
              <SheetHeader className="pb-4 border-b text-left">
                <SheetTitle className="flex items-center gap-2 text-base font-bold">
                  <div className="h-6 w-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <span>shadcn-hub</span>
                </SheetTitle>
              </SheetHeader>

              <div className="py-4 space-y-5">
                {/* 核心入口 */}
                <div className="space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2.5 rounded-xl text-xs font-medium",
                      pathname === "/" ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span>首页</span>
                  </Link>
                  <Link
                    href="/shadcn"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2.5 rounded-xl text-xs font-medium",
                      pathname.startsWith("/shadcn") ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Box className="h-4 w-4" />
                      <span>官方组件</span>
                    </span>
                    <span className="text-[11px] font-mono opacity-80">64</span>
                  </Link>
                  <Link
                    href="/tools"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2.5 rounded-xl text-xs font-medium",
                      pathname === "/tools" ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      <span>设计工具</span>
                    </span>
                    <span className="text-[11px] font-mono opacity-80">24</span>
                  </Link>
                </div>

                {/* 动效与交互 */}
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold text-muted-foreground px-2 mb-1.5">
                    动效与交互
                  </div>
                  {motionEcosystems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium",
                        pathname.startsWith(item.href) ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                      )}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>

                {/* 区块与系统 */}
                <div className="space-y-1">
                  <div className="text-[11px] font-semibold text-muted-foreground px-2 mb-1.5">
                    区块与系统
                  </div>
                  {systemEcosystems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium",
                        pathname.startsWith(item.href) ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                      )}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
