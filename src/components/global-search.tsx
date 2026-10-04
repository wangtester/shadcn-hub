"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Search, Compass, Layout, Sparkles, Palette, BarChart3, Layers, ShoppingBag, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchItem {
  title: string;
  category: string;
  href: string;
  keywords?: string[];
  icon?: React.ReactNode;
}

const SEARCH_ITEMS: SearchItem[] = [
  // 10 大入口
  { title: "全景生态大厅 (Hub)", category: "生态站点", href: "/", keywords: ["home", "hub", "index", "overview", "首页"] },
  { title: "shadcn/ui 官方核心库 (64 全量组件)", category: "生态站点", href: "/shadcn", keywords: ["shadcn", "core", "components", "官方"] },
  { title: "BoardUI 仪表盘与 AI 智能体 (19 图表)", category: "生态站点", href: "/sites/boardui", keywords: ["boardui", "charts", "agent", "dashboard"] },
  { title: "ShadcnStore 商业区块与电商 (39 类目)", category: "生态站点", href: "/sites/shadcnstore", keywords: ["store", "blocks", "ecommerce", "sections"] },
  { title: "Refero Styles (9 大现代设计风格)", category: "生态站点", href: "/sites/refero", keywords: ["refero", "design", "tokens", "styles", "linear", "geist"] },
  { title: "HeroUI Pro (营销与 SaaS 应用)", category: "生态站点", href: "/sites/heroui", keywords: ["heroui", "marketing", "pricing", "saas"] },
  { title: "beUI 动效套件 (打字机/流光边框)", category: "生态站点", href: "/sites/beui", keywords: ["beui", "motion", "animation", "spotlight"] },
  { title: "RareUI 物理交互 (流体球/灵动岛)", category: "生态站点", href: "/sites/rareui", keywords: ["rareui", "fluid", "orb", "island"] },
  { title: "Transitions.dev (弹簧滑块/交错入场)", category: "生态站点", href: "/sites/transitions", keywords: ["transitions", "spring", "stagger"] },
  { title: "BeautifulUI (极光背景/毛玻璃卡片)", category: "生态站点", href: "/sites/beautifului", keywords: ["beautifului", "aurora", "glassmorphism"] },
  { title: "ShadcnSpace (Bento/CLI/控制台)", category: "生态站点", href: "/sites/shadcnspace", keywords: ["space", "bento", "cli", "auth"] },

  // shadcn 官方组件
  { title: "Button 按钮 / ButtonGroup", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["button", "group", "input", "click"] },
  { title: "Input 输入框 / InputGroup", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["input", "text", "form"] },
  { title: "DatePicker 日期与区间范围选择器", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["datepicker", "date", "calendar", "range", "presets", "日期"] },
  { title: "Select 下拉选择器", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["select", "dropdown", "option"] },
  { title: "Checkbox 复选框 / Switch 开关", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["checkbox", "switch", "toggle"] },
  { title: "Slider 滑块 / InputOTP 验证码", category: "shadcn 组件", href: "/shadcn/forms", keywords: ["slider", "otp", "code", "range"] },
  { title: "Card 卡片容器", category: "shadcn 组件", href: "/shadcn/layout", keywords: ["card", "layout", "box"] },
  { title: "Tabs 选项卡 / Accordion 手风琴", category: "shadcn 组件", href: "/shadcn/layout", keywords: ["tabs", "accordion", "collapse"] },
  { title: "Dialog 对话框 / AlertDialog 警示框", category: "shadcn 组件", href: "/shadcn/overlay", keywords: ["dialog", "modal", "alert"] },
  { title: "Sheet 侧边抽屉 / Drawer 下拉抽屉", category: "shadcn 组件", href: "/shadcn/overlay", keywords: ["sheet", "drawer", "slide"] },
  { title: "Popover 气泡卡片 / Tooltip 文字提示", category: "shadcn 组件", href: "/shadcn/overlay", keywords: ["popover", "tooltip", "hover"] },
  { title: "DropdownMenu / ContextMenu 上下文菜单", category: "shadcn 组件", href: "/shadcn/overlay", keywords: ["menu", "context", "dropdown"] },
  { title: "Table 数据表格", category: "shadcn 组件", href: "/shadcn/data", keywords: ["table", "grid", "data", "row"] },
  { title: "DataTable 现代化高阶数据表格 (搜索/排序/分页/多选)", category: "shadcn 组件", href: "/shadcn/data", keywords: ["datatable", "table", "tanstack", "pagination", "sort", "filter"] },
  { title: "Calendar 日历选择器", category: "shadcn 组件", href: "/shadcn/data", keywords: ["calendar", "date", "picker"] },
  { title: "Chart 数据图表", category: "shadcn 组件", href: "/shadcn/data", keywords: ["chart", "recharts", "graph"] },
  { title: "Carousel 走马灯轮播", category: "shadcn 组件", href: "/shadcn/data", keywords: ["carousel", "slider", "embla"] },
  { title: "Avatar 头像 / Badge 徽章", category: "shadcn 组件", href: "/shadcn/data", keywords: ["avatar", "badge", "tag"] },
  { title: "Attachment 附件卡 / Item 列表行", category: "shadcn 组件", href: "/shadcn/extended", keywords: ["attachment", "item", "marker", "direction"] },
  { title: "Bubble 智能对话气泡与反馈反应", category: "shadcn 组件", href: "/shadcn/extended", keywords: ["bubble", "chat", "message", "reaction", "ai"] },
  { title: "Typography & Typeset 官方规范排版", category: "shadcn 组件", href: "/shadcn/extended", keywords: ["typography", "typeset", "heading", "blockquote", "prose", "text"] },

  // BoardUI 图表与 Agent
  { title: "19 款工业级仪表盘图表 (Area, Funnel, Radar...)", category: "BoardUI", href: "/sites/boardui/charts", keywords: ["charts", "recharts", "bar", "radar", "sankey", "speedometer"] },
  { title: "AI Agentic 智能体交互 (思维链/Token/联网流)", category: "BoardUI", href: "/sites/boardui/agentic", keywords: ["agent", "reasoning", "thinking", "tokens", "llm", "ai"] },
  { title: "BoardUI 核心基元 (通告横条/过滤芯片/环比微指标卡)", category: "BoardUI", href: "/sites/boardui/components", keywords: ["boardui", "banner", "chips", "kpi", "delta", "metrics"] },

  // 生态创新与交互 (BeautifulUI, beUI, RareUI, Transitions, ShadcnStore)
  { title: "BeautifulUI AI Agentic 人机协同卡 (HITL 审批/工具芯片/RAG 块)", category: "交互与区块", href: "/sites/beautifului/agentic", keywords: ["beautifului", "hitl", "agent", "tool-call", "rag", "chunks"] },
  { title: "beUI 交互微动效 (拖拽文件上传/磁吸分段胶囊)", category: "交互与区块", href: "/sites/beui/interactive", keywords: ["beui", "drag-drop", "upload", "segmented-menu", "motion"] },
  { title: "RareUI 物理交互 (展开式文件盒/微动摇摆铃铛/表情反应槽)", category: "交互与区块", href: "/sites/rareui/interactive", keywords: ["rareui", "folders", "bell", "reaction", "physics"] },
  { title: "Transitions.dev 动态置换 (Text Swap 垂直轮转/胶囊徽章形变)", category: "交互与区块", href: "/sites/transitions/morphing", keywords: ["transitions", "morphing", "text-swap", "badge-morph"] },
  { title: "ShadcnStore 高频落地页区块 (Bento 便当盒/定价表/指标墙/CTA)", category: "交互与区块", href: "/sites/shadcnstore/sections", keywords: ["shadcnstore", "bento", "pricing", "stats", "cta", "landing"] },
  { title: "Refero AI DESIGN.md 规范即时导出生成器", category: "交互与区块", href: "/sites/refero/tokens", keywords: ["refero", "design-md", "tokens", "export", "markdown"] },

  // Refero 9 大设计流派
  { title: "Linear 灰阶极简风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["linear", "dark", "monochrome", "minimal"] },
  { title: "Vercel Geist 黑白纯粹风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["geist", "vercel", "black-white"] },
  { title: "Apple Smooth 大曲率柔光风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["apple", "squircle", "smooth", "radius"] },
  { title: "Neo-Brutalism 新野兽派硬边风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["neo-brutalism", "brutalist", "contrast", "shadow"] },
  { title: "Stripe Fintech 金融高奢渐变风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["stripe", "fintech", "gradient"] },
  { title: "Supabase Dark Neon 霓虹极客风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["supabase", "emerald", "neon", "hacker"] },
  { title: "Raycast Desktop 桌面原生质感", category: "设计流派", href: "/sites/refero/styles", keywords: ["raycast", "desktop", "mac", "spotlight"] },
  { title: "Notion Document 纸质排版风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["notion", "paper", "document", "minimal"] },
  { title: "Perplexity AI Fluid 柔光流体风格", category: "设计流派", href: "/sites/refero/styles", keywords: ["perplexity", "fluid", "glow", "ai"] },
];

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const categories = ["生态站点", "shadcn 组件", "BoardUI", "交互与区块", "设计流派"];

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="relative h-8 w-full md:w-56 justify-start rounded-lg text-xs font-normal text-muted-foreground shadow-none bg-muted/40 hover:bg-muted"
      >
        <Search className="mr-2 h-3.5 w-3.5" />
        <span className="hidden sm:inline-block">全局搜索组件或流派...</span>
        <span className="inline-block sm:hidden">搜索...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="全站搜索"
        description="搜索 61 款官方组件、19 种图表、39 类 Blocks 与 9 大设计流派"
      >
        <CommandInput placeholder="输入组件、图表或风格名称 (如 button, chart, linear, agent)..." />
        <CommandList className="max-h-[360px]">
          <CommandEmpty>未找到相关组件或站点。</CommandEmpty>
          {categories.map((cat, idx) => {
            const items = SEARCH_ITEMS.filter((i) => i.category === cat);
            if (items.length === 0) return null;
            return (
              <React.Fragment key={cat}>
                {idx > 0 && <CommandSeparator />}
                <CommandGroup heading={cat}>
                  {items.map((item) => (
                    <CommandItem
                      key={item.title + item.href}
                      value={`${item.title} ${item.keywords?.join(" ") || ""}`}
                      onSelect={() => handleSelect(item.href)}
                      className="cursor-pointer flex items-center justify-between text-xs py-2"
                    >
                      <div className="flex items-center gap-2">
                        <Compass className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{item.href}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </React.Fragment>
            );
          })}
        </CommandList>
      </CommandDialog>
    </>
  );
}
