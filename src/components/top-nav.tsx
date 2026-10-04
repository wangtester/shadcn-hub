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
import { useState, useEffect } from "react";
import { GlobalSearch } from "@/components/global-search";

interface EcosystemItem {
  title: string;
  href: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

// 动效与视觉前沿 (6 个)
const motionEcosystems: EcosystemItem[] = [
  {
    title: "Magic UI",
    href: "/sites/magicui",
    desc: "跑马灯、节点光束、流光边框与 Bento 网格",
    badge: "Motion",
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Aceternity UI",
    href: "/sites/aceternity",
    desc: "Lamp 聚光神灯、星空粒子与 3D 透视图钉",
    badge: "Aesthetics",
    icon: <Wand2 className="h-4 w-4 text-cyan-500" />,
  },
  {
    title: "beUI",
    href: "/sites/beui",
    desc: "打字机文本、Spotlight 光斑跟随与拖拽上传",
    badge: "Interactive",
    icon: <Sparkles className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "RareUI",
    href: "/sites/rareui",
    desc: "Fluid Orb 流体球、灵动岛与展开式文件夹",
    badge: "Physics",
    icon: <Compass className="h-4 w-4 text-purple-500" />,
  },
  {
    title: "Transitions.dev",
    href: "/sites/transitions",
    desc: "Spring 弹簧滑块、文本置换与胶囊状态形变",
    badge: "Morphing",
    icon: <Layers className="h-4 w-4 text-teal-500" />,
  },
  {
    title: "BeautifulUI",
    href: "/sites/beautifului",
    desc: "极光高光背景、磨砂拟态与 AI 协同审批卡",
    badge: "Visual",
    icon: <Gem className="h-4 w-4 text-rose-500" />,
  },
];

// 业务区块与设计系统 (5 个)
const systemEcosystems: EcosystemItem[] = [
  {
    title: "BoardUI",
    href: "/sites/boardui",
    desc: "19 款工业级图表、AI 思考链与看板基元",
    badge: "19 Charts",
    icon: <BarChart2 className="h-4 w-4 text-violet-500" />,
  },
  {
    title: "ShadcnStore",
    href: "/sites/shadcnstore",
    desc: "39 类高频商业落地页区块与完整电商组件",
    badge: "39 Sections",
    icon: <Store className="h-4 w-4 text-indigo-500" />,
  },
  {
    title: "Refero Styles",
    href: "/sites/refero",
    desc: "9 大主流流派实景对比与 DESIGN.md 导出",
    badge: "9 Styles",
    icon: <Palette className="h-4 w-4 text-amber-500" />,
  },
  {
    title: "HeroUI Pro",
    href: "/sites/heroui",
    desc: "SaaS 团队工作空间、计费周期与大圆角偏好",
    badge: "SaaS App",
    icon: <Cpu className="h-4 w-4 text-pink-500" />,
  },
  {
    title: "ShadcnSpace",
    href: "/sites/shadcnspace",
    desc: "Bento 栅格、CLI 安装代码块与现代鉴权控制台",
    badge: "Templates",
    icon: <Grid className="h-4 w-4 text-emerald-500" />,
  },
];

export function TopNav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
              <span className="hidden xl:inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary border border-primary/20">
                12 大生态 · 64 官方组件
              </span>
            </div>
          </Link>

          {/* 桌面端主导航条 (零滚动设计，绝对不截断) */}
          <nav className="hidden md:flex items-center gap-1">
            {/* 1. 首页 Hub */}
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium",
                pathname === "/"
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              全景大厅
            </Link>

            {/* 2. shadcn 官方核心库 */}
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
              <span>官方核心</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-muted text-foreground/80 font-mono font-semibold">
                64
              </span>
            </Link>

            {/* 3. 生态库全集 下拉浮层 (11 社区库，一目了然) */}
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
                <span>生态库全集</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary/10 text-primary font-bold">
                  11 库
                </span>
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", popoverOpen && "rotate-180")} />
              </PopoverTrigger>

              <PopoverContent
                align="start"
                sideOffset={8}
                className="w-[600px] p-0 rounded-2xl shadow-2xl border bg-popover/98 backdrop-blur"
              >
                <div className="grid grid-cols-2 divide-x p-4 gap-4">
                  {/* 左列：动效与视觉前沿 (6 个) */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between pb-1.5 border-b px-1">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                        动效与视觉美学 (6)
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">Motion & Visual</span>
                    </div>
                    <div className="space-y-1">
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
                          <div className="p-1.5 rounded-lg bg-background border shadow-2xs group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                            {eco.icon}
                          </div>
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold group-hover:text-primary transition-colors">
                                {eco.title}
                              </span>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-muted-foreground/10 text-muted-foreground font-mono">
                                {eco.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                              {eco.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* 右列：业务区块与设计系统 (5 个) */}
                  <div className="space-y-2.5 pl-4">
                    <div className="flex items-center justify-between pb-1.5 border-b px-1">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <BarChart2 className="h-3.5 w-3.5 text-violet-500" />
                        区块与系统 (5)
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">Blocks & SaaS</span>
                    </div>
                    <div className="space-y-1">
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
                          <div className="p-1.5 rounded-lg bg-background border shadow-2xs group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                            {eco.icon}
                          </div>
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold group-hover:text-primary transition-colors">
                                {eco.title}
                              </span>
                              <span className="text-[9px] px-1 py-0.2 rounded bg-muted-foreground/10 text-muted-foreground font-mono">
                                {eco.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                              {eco.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 底部条：全站快速统计 */}
                <div className="bg-muted/40 border-t px-4 py-2.5 rounded-b-2xl flex items-center justify-between text-xs">
                  <span className="text-[11px] text-muted-foreground">
                    共收录 <strong className="text-foreground">11 个精选生态扩展库</strong> · 100% 真实交互
                  </span>
                  <Link
                    href="/"
                    onClick={() => setPopoverOpen(false)}
                    className="text-[11px] text-primary font-medium hover:underline flex items-center gap-1"
                  >
                    <span>在首页对比全部站点</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </PopoverContent>
            </Popover>

            {/* 4. 前端设计师常备工具箱 */}
            <Link
              href="/tools"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5 relative",
                pathname === "/tools"
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Wrench className="h-3.5 w-3.5 text-amber-500" />
              <span>设计师百宝箱</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30">
                24+
              </span>
            </Link>

            {/* 5. 宽屏展示两个最受关注的快捷胶囊 (Magic UI 与 BoardUI) */}
            <Link
              href="/sites/magicui"
              className={cn(
                "hidden 2xl:flex px-2.5 py-1 text-xs rounded-md transition-all items-center gap-1 font-medium",
                pathname.startsWith("/sites/magicui")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground/80 hover:text-foreground hover:bg-muted/50"
              )}
            >
              <span>Magic UI</span>
            </Link>
            <Link
              href="/sites/boardui"
              className={cn(
                "hidden 2xl:flex px-2.5 py-1 text-xs rounded-md transition-all items-center gap-1 font-medium",
                pathname.startsWith("/sites/boardui")
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground/80 hover:text-foreground hover:bg-muted/50"
              )}
            >
              <span>BoardUI</span>
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

            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-6 overflow-y-auto">
              <SheetHeader className="pb-4 border-b text-left">
                <SheetTitle className="flex items-center gap-2 text-base font-bold">
                  <div className="h-6 w-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <span>全景生态导航</span>
                </SheetTitle>
                <p className="text-xs text-muted-foreground mt-1">
                  12 个生态站点 · 64 官方组件 · 24+ 款设计师工具
                </p>
              </SheetHeader>

              <div className="py-4 space-y-6">
                {/* 核心入口 */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-1">
                    核心入口
                  </div>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg text-xs font-medium",
                      pathname === "/" ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span>全景大厅 (Home Hub)</span>
                    <span className="text-[10px] font-mono">12 Sites</span>
                  </Link>
                  <Link
                    href="/shadcn"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg text-xs font-medium",
                      pathname.startsWith("/shadcn") ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <Box className="h-3.5 w-3.5" />
                      <span>shadcn/ui 官方核心库</span>
                    </span>
                    <span className="text-[10px] font-mono">64 款全量</span>
                  </Link>
                  <Link
                    href="/tools"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg text-xs font-medium",
                      pathname === "/tools" ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <Wrench className="h-3.5 w-3.5 text-amber-500" />
                      <span>前端设计师常备工具箱</span>
                    </span>
                    <span className="text-[10px] font-mono text-amber-600 font-bold">24+ Tools</span>
                  </Link>
                </div>

                {/* 动效生态 */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-1 flex items-center justify-between">
                    <span>动效与视觉前沿</span>
                    <span className="font-mono text-[9px]">6 个站点</span>
                  </div>
                  {motionEcosystems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-2 rounded-lg text-xs font-medium",
                        pathname.startsWith(item.href) ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{item.badge}</span>
                    </Link>
                  ))}
                </div>

                {/* 业务区块生态 */}
                <div className="space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 mb-1 flex items-center justify-between">
                    <span>区块与设计系统</span>
                    <span className="font-mono text-[9px]">5 个站点</span>
                  </div>
                  {systemEcosystems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-2 rounded-lg text-xs font-medium",
                        pathname.startsWith(item.href) ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {item.icon}
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{item.badge}</span>
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
