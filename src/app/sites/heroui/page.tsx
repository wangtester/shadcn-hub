import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Sparkles, PieChart, Layers, Bot, Smile, SlidersHorizontal,
  TrendingUp, CheckCircle2, ExternalLink
} from "lucide-react";

export default function HeroUIOverview() {
  const categories = [
    {
      title: "Charts 图表体系",
      count: "8 款核心图表",
      href: "/sites/heroui/charts",
      icon: <PieChart className="h-5 w-5 text-pink-500" />,
      desc: "包含 Area、Bar、Line、Pie、Radar、Radial、Composed 图表与 HeroUI 磨砂 Tooltip 视窗",
      gradient: "from-pink-500/10 to-transparent",
      badge: "8 Components",
    },
    {
      title: "Data Display 数据呈现",
      count: "10 大展示基元",
      href: "/sites/heroui/data",
      icon: <Layers className="h-5 w-5 text-purple-500" />,
      desc: "Holo Card 全息卡、KPI Group 指标卡群、File Tree 文件树、Action Bar 悬浮操作栏、Kanban 看板",
      gradient: "from-purple-500/10 to-transparent",
      badge: "10 Components",
    },
    {
      title: "AI 智能体交互基元",
      count: "9 大 AI 组件",
      href: "/sites/heroui/ai",
      icon: <Bot className="h-5 w-5 text-blue-500" />,
      desc: "Chain Of Thought 思考链、Prompt Input 提示词输入器、Chat Message、Chat Tool、Code Block",
      gradient: "from-blue-500/10 to-transparent",
      badge: "9 Components",
    },
    {
      title: "Feedback 反馈与交互",
      count: "7 款微交互",
      href: "/sites/heroui/feedback",
      icon: <Smile className="h-5 w-5 text-amber-500" />,
      desc: "Emoji Reaction 表情互动浮条、Number Value 趋势走势、Segment 分段器、Stepper 步骤条",
      gradient: "from-amber-500/10 to-transparent",
      badge: "7 Components",
    },
    {
      title: "营销落地页 (Marketing)",
      count: "商业转化套件",
      href: "/sites/heroui/marketing",
      icon: <Sparkles className="h-5 w-5 text-emerald-500" />,
      desc: "具有柔和霓虹背光、双色渐变胶囊按钮、特性卡片与多功能浮动导航条",
      gradient: "from-emerald-500/10 to-transparent",
      badge: "Landing Blocks",
    },
    {
      title: "应用与控制台 (Application)",
      count: "中后台业务流",
      href: "/sites/heroui/application",
      icon: <SlidersHorizontal className="h-5 w-5 text-cyan-500" />,
      desc: "企业级偏好设置卡片、多标签状态过滤栏、步骤向导与身份权限卡群",
      gradient: "from-cyan-500/10 to-transparent",
      badge: "Console Blocks",
    },
  ];

  const fullComponentsList = [
    { name: "Area Chart", cat: "Charts" },
    { name: "Bar Chart", cat: "Charts" },
    { name: "Chart Tooltip", cat: "Charts" },
    { name: "Composed Chart", cat: "Charts" },
    { name: "Line Chart", cat: "Charts" },
    { name: "Pie Chart", cat: "Charts" },
    { name: "Radar Chart", cat: "Charts" },
    { name: "Radial Chart", cat: "Charts" },
    { name: "Action Bar", cat: "Data" },
    { name: "Agenda", cat: "Data" },
    { name: "Carousel", cat: "Data" },
    { name: "Data Grid", cat: "Data" },
    { name: "Empty State", cat: "Data" },
    { name: "File Tree", cat: "Data" },
    { name: "Floating TOC", cat: "Data" },
    { name: "Holo Card", cat: "Data" },
    { name: "Hover Card", cat: "Data" },
    { name: "Kanban", cat: "Data" },
    { name: "KPI / Group", cat: "Data" },
    { name: "Timeline", cat: "Data" },
    { name: "Widget", cat: "Data" },
    { name: "Chain Of Thought", cat: "AI" },
    { name: "Chat Attachment", cat: "AI" },
    { name: "Chat Message", cat: "AI" },
    { name: "Chat Source", cat: "AI" },
    { name: "Chat Tool", cat: "AI" },
    { name: "Code Block", cat: "AI" },
    { name: "Prompt Input", cat: "AI" },
    { name: "Prompt Suggestion", cat: "AI" },
    { name: "Text Shimmer", cat: "AI" },
    { name: "Emoji Reaction", cat: "Feedback" },
    { name: "Number Value", cat: "Feedback" },
    { name: "Pressable Feedback", cat: "Feedback" },
    { name: "Segment", cat: "Feedback" },
    { name: "Stepper", cat: "Feedback" },
    { name: "Context Menu", cat: "Feedback" },
  ];

  return (
    <div className="space-y-12">
      {/* 头部区域 */}
      <div className="border-b pb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/30 font-medium">HeroUI Pro 官方全量收录</Badge>
          <a
            href="https://heroui.pro/docs/react/components"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-pink-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>heroui.pro/docs/react/components</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">HeroUI Pro · 全生态组件库与业务区块</h1>
        <p className="text-muted-foreground mt-3 max-w-3xl leading-relaxed text-sm">
          HeroUI（前身为 NextUI）以饱满圆角（rounded-2xl）、微质感光晕与丝滑手势闻名。
          我们在此完整收录并实装了官方涵盖的 Charts（8款）、Data Display（10款）、AI Components（9款）、
          Feedback（7款）以及营销与中后台 Blocks，全部真实交互，即刻在 shadcn-hub 上一站式体验。
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link href="/sites/heroui/charts">
            <Button size="sm" className="rounded-xl bg-pink-500 hover:bg-pink-600 text-white">体验 Charts 图表体系</Button>
          </Link>
          <Link href="/sites/heroui/ai">
            <Button size="sm" variant="outline" className="rounded-xl">体验 AI 智能体组件</Button>
          </Link>
          <Link href="/sites/heroui/data">
            <Button size="sm" variant="outline" className="rounded-xl">体验 Data Display 数据基元</Button>
          </Link>
        </div>
      </div>

      {/* 核心板块卡片矩阵 */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">核心分类导览</h2>
          <p className="text-xs text-muted-foreground mt-0.5">点击进入各个专项分类，查看 100% 真实交互组件</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href} className="block group">
              <div className={`p-6 rounded-2xl border bg-gradient-to-br ${cat.gradient} hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 h-full flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-card border shadow-xs">
                      {cat.icon}
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono">{cat.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-pink-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-pink-500 mt-5 pt-3 border-t border-border/40">
                  <span>查看全部交互实例</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 全量组件检索速览标签云 */}
      <div className="rounded-2xl border bg-card/40 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base">HeroUI Pro 官方 36+ 项组件全清单</h3>
            <p className="text-xs text-muted-foreground mt-0.5">按官方文档目录逐项对齐收录</p>
          </div>
          <Badge className="bg-pink-500 text-white font-mono text-xs">100% 覆盖</Badge>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {fullComponentsList.map((comp, idx) => {
            const href =
              comp.cat === "Charts" ? "/sites/heroui/charts" :
              comp.cat === "Data" ? "/sites/heroui/data" :
              comp.cat === "AI" ? "/sites/heroui/ai" : "/sites/heroui/feedback";
            return (
              <Link key={idx} href={href}>
                <div className="px-3 py-1.5 rounded-xl border bg-card/80 hover:border-pink-500/50 hover:bg-pink-500/5 transition-all text-xs flex items-center gap-1.5 cursor-pointer">
                  <span className="font-medium text-foreground">{comp.name}</span>
                  <span className="text-[10px] text-muted-foreground font-mono bg-muted/60 px-1.5 py-0.2 rounded-md">
                    {comp.cat}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
