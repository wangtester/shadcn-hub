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
  Bot,
  ShieldCheck,
  MousePointer2,
  Smartphone,
  CheckCircle2,
  Flame,
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

export interface EcosystemSiteItem {
  id: string;
  title: string;
  href: string;
  originUrl: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
}

export interface EcosystemGroup {
  id: "motion" | "blocks" | "system" | "ai";
  label: string;
  icon: React.ReactNode;
  sites: EcosystemSiteItem[];
}

export const ECOSYSTEM_28_GROUPS: EcosystemGroup[] = [
  {
    id: "motion",
    label: "动效与前沿视觉",
    icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
    sites: [
      {
        id: "magicui",
        title: "Magic UI",
        href: "/sites/magicui",
        originUrl: "https://magicui.design",
        badge: "动效基元",
        desc: "双向跑马灯、节点光束、流光边框与 Bento 网格",
        icon: <Sparkles className="h-4 w-4 text-indigo-500" />,
      },
      {
        id: "aceternity",
        title: "Aceternity UI",
        href: "/sites/aceternity",
        originUrl: "https://ui.aceternity.com",
        badge: "极客美学",
        desc: "Lamp 聚光神灯、星空粒子与 3D 透视图钉",
        icon: <Wand2 className="h-4 w-4 text-cyan-500" />,
      },
      {
        id: "beui",
        title: "beUI",
        href: "/sites/beui",
        originUrl: "https://beui.dev",
        badge: "微交互",
        desc: "打字机文本、光斑跟随与交互拖拽上传盒",
        icon: <Sparkles className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "rareui",
        title: "RareUI",
        href: "/sites/rareui",
        originUrl: "https://www.rareui.com",
        badge: "物理动效",
        desc: "Fluid Orb 流体球、灵动岛与物理微交互",
        icon: <Compass className="h-4 w-4 text-purple-500" />,
      },
      {
        id: "transitions",
        title: "Transitions.dev",
        href: "/sites/transitions",
        originUrl: "https://transitions.dev",
        badge: "视图过渡",
        desc: "物理弹簧、文本轮转与原生 View Transitions",
        icon: <Layers className="h-4 w-4 text-teal-500" />,
      },
      {
        id: "beautifului",
        title: "BeautifulUI",
        href: "/sites/beautifului",
        originUrl: "https://www.beautifului.dev",
        badge: "高质感视觉",
        desc: "极光高光、磨砂质感与 HITL 人机协同审批卡",
        icon: <Gem className="h-4 w-4 text-rose-500" />,
      },
      {
        id: "motion-primitives",
        title: "Motion Primitives",
        href: "/sites/motion-primitives",
        originUrl: "https://motion-primitives.com",
        badge: "Framer基元",
        desc: "基于 Motion 的字符逐字动画与连续流光边框",
        icon: <Sparkles className="h-4 w-4 text-amber-500" />,
      },
    ],
  },
  {
    id: "blocks",
    label: "商业区块与模板",
    icon: <Store className="h-4 w-4 text-emerald-500" />,
    sites: [
      {
        id: "shadcnstore",
        title: "ShadcnStore",
        href: "/sites/shadcnstore",
        originUrl: "https://shadcnstore.com",
        badge: "39类目",
        desc: "高频落地页区块、SaaS 阶梯定价表与电商模块",
        icon: <Store className="h-4 w-4 text-indigo-500" />,
      },
      {
        id: "shadcnblocks",
        title: "Shadcnblocks",
        href: "/sites/shadcnblocks",
        originUrl: "https://www.shadcnblocks.com",
        badge: "复合区块",
        desc: "带标签自动补全、非对称 Hero 与整套 SaaS 模板",
        icon: <Store className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "shadcn-io",
        title: "shadcn.io",
        href: "/sites/shadcn-io",
        originUrl: "https://www.shadcn.io",
        badge: "6000+Blocks",
        desc: "2FA 二次安全验证、无障碍合规与 Solaris 纯白模板",
        icon: <ShieldCheck className="h-4 w-4 text-emerald-500" />,
      },
      {
        id: "tailark",
        title: "Tailark",
        href: "/sites/tailark",
        originUrl: "https://tailark.com",
        badge: "霓虹营销",
        desc: "多层径向高斯模糊光晕 Hero 与深色科技 Bento 矩阵",
        icon: <Flame className="h-4 w-4 text-indigo-500" />,
      },
      {
        id: "shadcnstudio",
        title: "shadcnstudio.com",
        href: "/sites/shadcnstudio",
        originUrl: "https://shadcnstudio.com",
        badge: "深色商业套件",
        desc: "1000+ 免费与 Pro 级企业定价矩阵与社会背书区块",
        icon: <Store className="h-4 w-4 text-amber-500" />,
      },
      {
        id: "21st",
        title: "21st.dev",
        href: "/sites/21st",
        originUrl: "https://21st.dev",
        badge: "社区创新",
        desc: "社区微交互胶囊坞、合作伙伴墙与高奢毛玻璃整页模板",
        icon: <Sparkles className="h-4 w-4 text-violet-500" />,
      },
      {
        id: "shadcnspace",
        title: "shadcnspace",
        href: "/sites/shadcnspace",
        originUrl: "https://shadcnspace.com",
        badge: "营销与看板",
        desc: "全景运营看板曲线与现代营销落地页复合区块套件",
        icon: <Box className="h-4 w-4 text-teal-500" />,
      },
    ],
  },
  {
    id: "system",
    label: "企业系统与工程",
    icon: <BarChart2 className="h-4 w-4 text-blue-500" />,
    sites: [
      {
        id: "shadcn",
        title: "shadcn/ui 官方",
        href: "/shadcn",
        originUrl: "https://ui.shadcn.com",
        badge: "官方64款",
        desc: "全量表单、布局、浮层、高阶数据表格与无障碍基元",
        icon: <Box className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "heroui",
        title: "HeroUI Pro",
        href: "/sites/heroui",
        originUrl: "https://heroui.pro",
        badge: "SaaS应用",
        desc: "大圆角柔和微光规范、团队工作空间与权限管理",
        icon: <Cpu className="h-4 w-4 text-pink-500" />,
      },
      {
        id: "boardui",
        title: "BoardUI",
        href: "/sites/boardui",
        originUrl: "https://www.boardui.com",
        badge: "工业图表",
        desc: "数据密集型工业图表、AI 思考链与决策流水线",
        icon: <BarChart2 className="h-4 w-4 text-violet-500" />,
      },
      {
        id: "refero",
        title: "Refero Styles",
        href: "/sites/refero",
        originUrl: "https://styles.refero.design",
        badge: "9大流派",
        desc: "Linear、Geist、Apple、新野兽派等顶尖产品规范对比",
        icon: <Palette className="h-4 w-4 text-amber-500" />,
      },
      {
        id: "reui",
        title: "ReUI",
        href: "/sites/reui",
        originUrl: "https://reui.io",
        badge: "列冻结表格",
        desc: "企业级高阶列冻结 Data Grid、活动甘特图与事件日历",
        icon: <Grid className="h-4 w-4 text-emerald-500" />,
      },
      {
        id: "origin-ui",
        title: "Origin UI",
        href: "/sites/origin-ui",
        originUrl: "https://coss.com/ui",
        badge: "Base UI",
        desc: "基于新兴 Base UI 体系的防重 Chips 标签输入与步进器",
        icon: <Box className="h-4 w-4 text-blue-500" />,
      },
      {
        id: "mynaui",
        title: "MynaUI",
        href: "/sites/mynaui",
        originUrl: "https://mynaui.com",
        badge: "Figma对齐",
        desc: "依照 Figma 像素网格对齐的高品质分段吸附胶囊导航",
        icon: <Palette className="h-4 w-4 text-cyan-500" />,
      },
    ],
  },
  {
    id: "ai",
    label: "AI 交互与协同生产力",
    icon: <Bot className="h-4 w-4 text-purple-500" />,
    sites: [
      {
        id: "veloraui",
        title: "Velora UI",
        href: "/sites/veloraui",
        originUrl: "https://veloraui.vercel.app",
        badge: "AI等待态",
        desc: "实时 Token/s 流速模拟、思维链展开轨迹与等待交互",
        icon: <Cpu className="h-4 w-4 text-cyan-500" />,
      },
      {
        id: "skiper",
        title: "Skiper UI",
        href: "/sites/skiper",
        originUrl: "https://skiper-ui.com",
        badge: "3D陀螺仪",
        desc: "3D 俯仰视角倾斜跟随与鼠标径向光斑极客交互卡",
        icon: <Compass className="h-4 w-4 text-rose-500" />,
      },
      {
        id: "eldora",
        title: "Eldora UI",
        href: "/sites/eldora",
        originUrl: "https://www.eldoraui.site",
        badge: "真机外壳",
        desc: "高拟真 macOS Safari 浏览器外壳与手机设备容器",
        icon: <Smartphone className="h-4 w-4 text-teal-500" />,
      },
      {
        id: "kibo",
        title: "Kibo UI",
        href: "/sites/kibo",
        originUrl: "https://www.kibo-ui.com",
        badge: "协同生产力",
        desc: "多人实时协同光标、悬停头像堆叠与里程碑甘特条",
        icon: <MousePointer2 className="h-4 w-4 text-purple-500" />,
      },
      {
        id: "kokonut",
        title: "Kokonut UI",
        href: "/sites/kokonut",
        originUrl: "https://kokonutui.com",
        badge: "AI输入条",
        desc: "磨砂玻璃拟态与现代多模型 AI 提示词输入控制条",
        icon: <Gem className="h-4 w-4 text-pink-500" />,
      },
      {
        id: "animate-ui",
        title: "Animate UI",
        href: "/sites/animate-ui",
        originUrl: "https://animate-ui.com",
        badge: "粒子光晕",
        desc: "粒子光爆微动效按钮、弹性状态浮层与平滑过渡",
        icon: <Sparkles className="h-4 w-4 text-orange-500" />,
      },
      {
        id: "shadcn-charts",
        title: "shadcn/ui Charts",
        href: "/sites/shadcn-charts",
        originUrl: "https://ui.shadcn.com/charts",
        badge: "官方图表",
        desc: "双色平滑渐变面积图、堆叠柱状图与现代数据可视化",
        icon: <BarChart2 className="h-4 w-4 text-indigo-500" />,
      },
    ],
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
    }, 200);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isEcosystemActive = pathname.startsWith("/sites/") || pathname.startsWith("/shadcn");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-2xs">
      <div className="flex h-14 items-center justify-between px-4 md:px-6 w-full gap-3">
        {/* 左侧：Logo 标识与主导航 */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-sm md:text-base group">
            <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Layers className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="tracking-tight font-extrabold text-foreground">shadcn-hub</span>
            </div>
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center gap-1">
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

            {/* 官方组件 */}
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

            {/* 全景画廊 (高光按钮) */}
            <Link
              href="/gallery"
              className={cn(
                "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5",
                pathname.startsWith("/gallery")
                  ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>全景画廊</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono font-bold">
                实机预览
              </span>
            </Link>

            {/* 生态扩展：28 大源站全景 Mega-Menu 浮层 */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative inline-flex items-center"
            >
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger
                  className={cn(
                    "px-3 py-1.5 text-xs md:text-sm rounded-lg transition-all font-medium flex items-center gap-1.5 cursor-pointer outline-hidden border",
                    isEcosystemActive && !pathname.startsWith("/gallery")
                      ? "bg-primary/15 text-primary border-primary/30 font-semibold"
                      : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Grid className="h-3.5 w-3.5" />
                  <span>28 目标源站</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-primary/10 text-primary font-bold">
                    28
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      popoverOpen && "rotate-180"
                    )}
                  />
                </PopoverTrigger>

                <PopoverContent
                  align="start"
                  sideOffset={8}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="w-[780px] p-4.5 rounded-2xl shadow-2xl border bg-popover/98 backdrop-blur"
                >
                  {/* 4 大分类 4 列精简平铺，无网站冗余介绍 */}
                  <div className="grid grid-cols-4 gap-3">
                    {ECOSYSTEM_28_GROUPS.map((grp) => (
                      <div key={grp.id} className="space-y-2">
                        {/* 分类标题栏 */}
                        <div className="flex items-center gap-1.5 pb-2 border-b text-xs font-bold text-foreground">
                          {grp.icon}
                          <span>{grp.label}</span>
                        </div>

                        {/* 站点精简列表 */}
                        <div className="space-y-0.5">
                          {grp.sites.map((site) => {
                            const isCurrent =
                              pathname === site.href || pathname.startsWith(site.href + "/");
                            return (
                              <Link
                                key={site.id}
                                href={site.href}
                                onClick={() => setPopoverOpen(false)}
                                className={cn(
                                  "flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors group/item",
                                  isCurrent
                                    ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <span
                                    className={cn(
                                      "shrink-0 h-3.5 w-3.5",
                                      isCurrent
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground group-hover/item:text-foreground"
                                    )}
                                  >
                                    {site.icon}
                                  </span>
                                  <span className="truncate font-medium">
                                    {site.title.replace("官方核心", "")}
                                  </span>
                                </div>
                                <span
                                  className={cn(
                                    "text-[9px] font-mono px-1 py-0.2 rounded-sm shrink-0 ml-1",
                                    isCurrent
                                      ? "bg-primary-foreground/20 text-primary-foreground"
                                      : "bg-muted text-muted-foreground/80 group-hover/item:bg-muted-foreground/15"
                                  )}
                                >
                                  {site.badge}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 底部全景画廊直达条 */}
                  <div className="mt-3.5 pt-2.5 border-t flex items-center justify-between text-xs text-muted-foreground">
                    <span className="font-mono text-[11px] text-muted-foreground/80">
                      28 大主流源站 · 100% 原地真实交互运行
                    </span>
                    <Link
                      href="/gallery"
                      onClick={() => setPopoverOpen(false)}
                      className="font-medium text-primary hover:underline flex items-center gap-1 text-xs"
                    >
                      <span>进入全景画廊</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* 设计工具箱 */}
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

        {/* 右侧：全局搜索、主题切换与移动端菜单 */}
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
              aria-label="打开移动端主菜单"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "md:hidden h-8 w-8 rounded-lg cursor-pointer"
              )}
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] sm:w-[360px] p-6 overflow-y-auto">
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
                    href="/gallery"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between p-2.5 rounded-xl text-xs font-medium",
                      pathname.startsWith("/gallery") ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-500" />
                      <span>全景画廊 (28 源站实机)</span>
                    </span>
                    <Badge variant="outline" className="text-[10px] text-amber-500 border-amber-500/30">
                      Live
                    </Badge>
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
                      <span>官方 64 组件</span>
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
                      <span>设计工具箱</span>
                    </span>
                  </Link>
                </div>

                {/* 28 大源站全量列表 */}
                <div className="space-y-4 pt-3 border-t">
                  <h4 className="text-xs font-bold text-foreground flex items-center justify-between">
                    <span>28 大 UI 目标源站</span>
                    <Badge variant="secondary" className="font-mono text-[10px]">28</Badge>
                  </h4>

                  {ECOSYSTEM_28_GROUPS.map((grp) => (
                    <div key={grp.id} className="space-y-1">
                      <span className="text-[11px] font-bold text-muted-foreground flex items-center gap-1.5 px-2">
                        {grp.icon}
                        <span>{grp.label}</span>
                      </span>
                      <div className="space-y-0.5">
                        {grp.sites.map((site) => (
                          <Link
                            key={site.id}
                            href={site.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center justify-between p-2 rounded-lg text-xs hover:bg-muted/70 transition-colors",
                              pathname.startsWith(site.href) && "bg-muted font-bold text-primary"
                            )}
                          >
                            <span className="truncate">{site.title}</span>
                            <Badge variant="outline" className="text-[9px] font-mono px-1 py-0 h-4">
                              {site.badge}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
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
