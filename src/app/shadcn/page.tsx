import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Box } from "lucide-react";

const categories = [
  {
    href: "/shadcn/forms",
    title: "01. 表单交互体系",
    description: "Button, ButtonGroup, Input, InputGroup, Field, Textarea, Select, NativeSelect, Checkbox, RadioGroup, Switch, Slider, Toggle, ToggleGroup, InputOTP, Label, DatePicker",
    badge: "17 个已实装",
    color: "border-blue-500/20 bg-blue-500/5 hover:border-blue-500/40",
  },
  {
    href: "/shadcn/layout",
    title: "02. 布局与结构组件",
    description: "Card, Accordion, Tabs, Separator, Collapsible, AspectRatio, Resizable, ScrollArea 等页面骨架与内容组织",
    badge: "8 个已实装",
    color: "border-purple-500/20 bg-purple-500/5 hover:border-purple-500/40",
  },
  {
    href: "/shadcn/overlay",
    title: "03. 浮层与弹窗组件",
    description: "Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu 等模态交互",
    badge: "8 个已实装",
    color: "border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40",
  },
  {
    href: "/shadcn/data",
    title: "04. 数据呈现与筛选",
    description: "Table, DataTable, Calendar, Chart (Recharts + ChartContainer), Carousel, Avatar, Badge, Combobox, Command 面板",
    badge: "9 个已实装",
    color: "border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40",
  },
  {
    href: "/shadcn/navigation",
    title: "05. 页面导航体系",
    description: "Breadcrumb, NavigationMenu, Menubar, Pagination, 多级下拉菜单等应用级层级导航",
    badge: "5 个已实装",
    color: "border-rose-500/20 bg-rose-500/5 hover:border-rose-500/40",
  },
  {
    href: "/shadcn/feedback",
    title: "06. 状态反馈与提示",
    description: "Alert, Toast (Toaster), Progress, Skeleton, Spinner, Kbd, Empty 空状态, Message 消息体系",
    badge: "8 个已实装",
    color: "border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/40",
  },
  {
    href: "/shadcn/extended",
    title: "07. AI与扩展基元",
    description: "Attachment 附件卡、Item 结构列表、Marker 视觉标记、Direction 文字方向、Questionnaire 问卷、MessageScroller 消息流、Sidebar 侧边栏、Bubble 对话气泡、Typography 官方排版",
    badge: "9 个已实装",
    color: "border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40",
  },
];

const allComponents = [
  "Accordion", "Alert", "AlertDialog", "AspectRatio", "Attachment", "Avatar", "Badge",
  "Breadcrumb", "Bubble", "Button", "ButtonGroup", "Calendar", "Card", "Carousel", "Chart",
  "Checkbox", "Collapsible", "Combobox", "Command", "ContextMenu", "DataTable", "DatePicker", "Dialog", "Direction", "Drawer",
  "DropdownMenu", "Empty", "Field", "HoverCard", "Input", "InputGroup", "InputOTP", "Item",
  "Kbd", "Label", "Marker", "Menubar", "Message", "MessageScroller", "NativeSelect",
  "NavigationMenu", "Pagination", "Popover", "Progress", "Questionnaire", "RadioGroup",
  "Resizable", "ScrollArea", "Select", "Separator", "Sheet", "Sidebar", "Skeleton", "Slider",
  "Spinner", "Switch", "Table", "Tabs", "Textarea", "Toast", "Toggle", "ToggleGroup", "Tooltip", "Typography"
];

export default function ShadcnOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">官方核心组件库</Badge>
          <span className="text-xs text-muted-foreground">Next.js 16 + Base UI + Tailwind v4</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">shadcn/ui 官方全量组件体系</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          已全量安装并配置完成官方全部 64 款原子及复合组件。请在左侧侧边栏切换不同类别查看组件的实际运行效果与交互细节。
        </p>
      </div>

      {/* 核心指标 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border bg-card/60">
          <p className="text-xs text-muted-foreground font-medium">已集成组件总数</p>
          <p className="text-2xl font-bold mt-1">64 个 (100%全量)</p>
        </div>
        <div className="p-4 rounded-xl border bg-card/60">
          <p className="text-xs text-muted-foreground font-medium">设计规范</p>
          <p className="text-2xl font-bold mt-1">Base UI</p>
        </div>
        <div className="p-4 rounded-xl border bg-card/60">
          <p className="text-xs text-muted-foreground font-medium">样式引擎</p>
          <p className="text-2xl font-bold mt-1">Tailwind v4</p>
        </div>
        <div className="p-4 rounded-xl border bg-card/60">
          <p className="text-xs text-muted-foreground font-medium">代码拥有权</p>
          <p className="text-2xl font-bold mt-1">100% 本地代码</p>
        </div>
      </div>

      {/* 分类卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="block group">
            <Card className={`h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border ${cat.color}`}>
              <CardHeader className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <CardTitle className="text-base font-bold group-hover:text-primary transition-colors flex items-center gap-1.5">
                    {cat.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">{cat.badge}</Badge>
                </div>
                <CardDescription className="text-xs leading-relaxed line-clamp-3">
                  {cat.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-0">
                <div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-1 transition-transform">
                  <span>进入侧边栏查看此分类</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* 全量组件徽章清单 */}
      <div className="rounded-xl border bg-card p-6">
        <h3 className="text-base font-bold mb-3 flex items-center gap-2">
          <Box className="h-4 w-4 text-primary" />
          全量已就绪组件清单 ({allComponents.length})
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {allComponents.map((name) => (
            <Badge key={name} variant="outline" className="text-[11px] font-mono py-1 px-2 hover:bg-muted transition-colors cursor-default">
              {name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
