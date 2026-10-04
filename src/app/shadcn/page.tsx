import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Box } from "lucide-react";

const categories = [
  {
    href: "/shadcn/forms",
    title: "01. 表单交互体系",
    description: "Button, ButtonGroup, Input, InputGroup, Field, Textarea, Select, NativeSelect, Checkbox, RadioGroup, Switch, Slider, Toggle, ToggleGroup, InputOTP, Label, DatePicker",
    badge: "17 款",
  },
  {
    href: "/shadcn/layout",
    title: "02. 布局与结构组件",
    description: "Card, Accordion, Tabs, Separator, Collapsible, AspectRatio, Resizable, ScrollArea 等页面骨架与内容组织",
    badge: "8 款",
  },
  {
    href: "/shadcn/overlay",
    title: "03. 浮层与弹窗组件",
    description: "Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu 等模态交互",
    badge: "8 款",
  },
  {
    href: "/shadcn/data",
    title: "04. 数据呈现与筛选",
    description: "Table, DataTable, Calendar, Chart (Recharts + ChartContainer), Carousel, Avatar, Badge, Combobox, Command 面板",
    badge: "9 款",
  },
  {
    href: "/shadcn/navigation",
    title: "05. 页面导航体系",
    description: "Breadcrumb, NavigationMenu, Menubar, Pagination, 多级下拉菜单等应用级层级导航",
    badge: "5 款",
  },
  {
    href: "/shadcn/feedback",
    title: "06. 状态反馈与提示",
    description: "Alert, Toast (Toaster), Progress, Skeleton, Spinner, Kbd, Empty 空状态, Message 消息体系",
    badge: "8 款",
  },
  {
    href: "/shadcn/extended",
    title: "07. AI与扩展基元",
    description: "Attachment 附件卡、Item 结构列表、Marker 视觉标记、Direction 文字方向、Questionnaire 问卷、MessageScroller 消息流、Sidebar 侧边栏、Bubble 对话气泡、Typography 官方排版",
    badge: "9 款",
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
    <div className="space-y-12">
      <div className="border-b border-border/40 pb-8 space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          shadcn/ui 官方全量组件体系
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          已全量实装官方 64 款基础与复合组件。点击下方卡片或左侧导航即可查看组件运行效果与交互细节。
        </p>
      </div>

      {/* 分类卡片 (优雅留白与微边框) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="block group">
            <div className="h-full p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-base font-bold group-hover:text-primary transition-colors">
                    {cat.title}
                  </h2>
                  <Badge variant="outline" className="text-[10px] font-mono shrink-0">
                    {cat.badge}
                  </Badge>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {cat.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-border/40 flex items-center text-xs text-muted-foreground group-hover:text-primary font-medium gap-1 transition-colors">
                <span>浏览组件</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 全量组件徽章清单 */}
      <div className="rounded-2xl border border-border/50 bg-card/30 p-6 md:p-8 space-y-4">
        <h3 className="text-sm font-bold flex items-center gap-2 text-foreground">
          <Box className="h-4 w-4 text-primary" />
          <span>全量已就绪组件清单 ({allComponents.length})</span>
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {allComponents.map((name) => (
            <Badge key={name} variant="outline" className="text-[11px] font-mono py-0.5 px-2 bg-background/50 hover:bg-muted transition-colors cursor-default">
              {name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
