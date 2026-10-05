"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxItem, ComboboxEmpty } from "@/components/ui/combobox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable, type DataTableColumn } from "@/components/ui/data-table";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const invoices = [
  { id: "INV-001", status: "已支付", method: "信用卡结算", amount: "¥2,500.00" },
  { id: "INV-002", status: "审核中", method: "支付宝转账", amount: "¥1,500.00" },
  { id: "INV-003", status: "待付款", method: "微信企业支付", amount: "¥3,200.00" },
  { id: "INV-004", status: "已支付", method: "对公银行转账", amount: "¥4,500.00" },
  { id: "INV-005", status: "已支付", method: "Apple Pay", amount: "¥890.00" },
];

const paymentRecords = [
  { id: "PAY-1001", client: "上海科技有限公司", email: "contact@shanghai-tech.com", status: "成功", amount: 12500, date: "2026-10-01" },
  { id: "PAY-1002", client: "北京超算云计算", email: "billing@beijing-cloud.cn", status: "处理中", amount: 4800, date: "2026-10-02" },
  { id: "PAY-1003", client: "深圳智能终端研发", email: "finance@sz-smart.com", status: "成功", amount: 9600, date: "2026-10-02" },
  { id: "PAY-1004", client: "杭州未来零售电商", email: "service@hz-retail.com", status: "异常", amount: 1200, date: "2026-10-03" },
  { id: "PAY-1005", client: "广州现代物流供应链", email: "admin@gz-logistics.cn", status: "成功", amount: 18900, date: "2026-10-03" },
  { id: "PAY-1006", client: "成都互动数娱网络", email: "pay@cd-games.com", status: "处理中", amount: 3400, date: "2026-10-04" },
  { id: "PAY-1007", client: "武汉光谷光电芯片", email: "account@wh-chips.cn", status: "成功", amount: 26000, date: "2026-10-04" },
  { id: "PAY-1008", client: "南京生物健康医药", email: "order@nj-pharma.com", status: "成功", amount: 7700, date: "2026-10-04" },
];

const dataTableColumns: DataTableColumn<(typeof paymentRecords)[0]>[] = [
  { key: "id", header: "订单编号", sortable: true, className: "font-mono font-medium w-28" },
  { key: "client", header: "签约企业", sortable: true },
  { key: "email", header: "对公邮箱", className: "text-muted-foreground font-mono" },
  {
    key: "status",
    header: "交易状态",
    sortable: true,
    accessor: (item) => (
      <Badge
        variant={item.status === "成功" ? "default" : item.status === "处理中" ? "secondary" : "destructive"}
        className="text-[11px]"
      >
        {item.status}
      </Badge>
    ),
  },
  {
    key: "amount",
    header: "结算金额",
    sortable: true,
    className: "text-right font-mono font-semibold",
    accessor: (item) => `¥${item.amount.toLocaleString()}`,
  },
  { key: "date", header: "交易日期", sortable: true, className: "text-muted-foreground w-28" },
];

const chartData = [
  { month: "1月", desktop: 186, mobile: 80 },
  { month: "2月", desktop: 305, mobile: 200 },
  { month: "3月", desktop: 237, mobile: 120 },
  { month: "4月", desktop: 273, mobile: 190 },
  { month: "5月", desktop: 309, mobile: 130 },
  { month: "6月", desktop: 314, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "桌面端",
    color: "hsl(var(--primary))",
  },
  mobile: {
    label: "移动端",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const pieData = [
  { name: "移动端", value: 45, color: "#6366f1" },
  { name: "桌面端", value: 35, color: "#10b981" },
  { name: "平板端", value: 20, color: "#f59e0b" },
];

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "svelte", label: "SvelteKit" },
  { value: "remix", label: "Remix" },
];

const carouselItems = [
  { bg: "from-blue-600 to-indigo-600", title: "现代化设计系统", desc: "基于 shadcn/ui 最新规范与 Base UI 驱动" },
  { bg: "from-emerald-600 to-teal-600", title: "全量 50+ 组件覆盖", desc: "覆盖表单、布局、浮层、数据与反馈全部场景" },
  { bg: "from-purple-600 to-pink-600", title: "极致无障碍体验", desc: "符合 WAI-ARIA 无障碍可访问性与键盘无缝导航" },
  { bg: "from-amber-600 to-rose-600", title: "优雅主题色彩", desc: "原生适配深色暗黑模式与灵活 OKLCH 色系" },
];

export default function DataPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <PageHeader
        title="数据展示"
        titleEn="Data Display Components"
        description="表格、图表、日历、轮播图、组合搜索框与命令面板等数据渲染与筛选组件"
        descriptionEn="Modern data tables, calendars, charts, carousels, avatars, badges, and command palettes"
      />

      {/* Avatar */}
      <Section title="Avatar 用户头像" description="图片、文字回退与群组堆叠展现">
        <div className="flex flex-wrap gap-8 items-end">
          <div className="space-y-2 text-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">大尺寸图片</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">张三</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">汉字回退</p>
          </div>
          <div className="space-y-2 text-center">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">李</AvatarFallback>
            </Avatar>
            <p className="text-xs text-muted-foreground">小尺寸</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground mb-1">团队重叠头像组</p>
            <div className="flex -space-x-2">
              {["SC", "张", "李", "王", "赵"].map((name, i) => (
                <Avatar key={i} className="border-2 border-background">
                  <AvatarFallback className="text-xs bg-muted font-medium">{name}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Badge */}
      <Section title="Badge 状态徽章" description="重要程度、分类标签与状态标识">
        <div className="flex flex-wrap gap-2.5">
          <Badge>Default 默认</Badge>
          <Badge variant="secondary">Secondary 次要</Badge>
          <Badge variant="destructive">Destructive 危险</Badge>
          <Badge variant="outline">Outline 边框</Badge>
          <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/25 border-emerald-500/30">上线成功</Badge>
          <Badge className="bg-amber-500/15 text-amber-700 dark:text-amber-400 hover:bg-amber-500/25 border-amber-500/30">待审核</Badge>
          <Badge className="bg-blue-500/15 text-blue-700 dark:text-blue-400 hover:bg-blue-500/25 border-blue-500/30">进行中</Badge>
          <Badge className="bg-purple-500/15 text-purple-700 dark:text-purple-400 hover:bg-purple-500/25 border-purple-500/30">特别推荐</Badge>
        </div>
      </Section>

      {/* Table */}
      <Section title="Table 结构化数据表格" description="展示规整的订单、发票或用户流水列表">
        <Table>
          <TableCaption>最近财务流水账单列表明细</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">单号</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>支付方式</TableHead>
              <TableHead className="text-right">结算金额</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-mono font-medium">{inv.id}</TableCell>
                <TableCell>
                  <Badge variant={
                    inv.status === "已支付" ? "default" :
                    inv.status === "审核中" ? "secondary" : "destructive"
                  }>
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.method}</TableCell>
                <TableCell className="text-right font-semibold">{inv.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Section>

      {/* DataTable */}
      <Section
        title="DataTable 现代化高阶数据表格"
        description="基于 TanStack 理念封装的生产级数据表格：支持即时模糊搜索过滤、多列排序、全选/单行多选勾选与分页控制器"
      >
        <DataTable
          data={paymentRecords}
          columns={dataTableColumns}
          pageSize={4}
          searchPlaceholder="按企业名、订单号或状态搜索..."
        />
      </Section>

      {/* Calendar */}
      <Section title="Calendar 日历组件" description="支持日期点选、月份跨越的标准化日历">
        <div className="flex flex-wrap gap-6 items-start">
          <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-xs" />
          <div className="text-sm space-y-2 pt-2">
            <p className="font-medium">所选日期：</p>
            <p className="text-muted-foreground font-mono">{date ? date.toLocaleDateString("zh-CN") : "未选择"}</p>
          </div>
        </div>
      </Section>

      {/* Chart */}
      <Section title="Chart 数据可视化图表" description="结合 shadcn ChartContainer 与 Recharts 渲染的交互式统计图">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">月度访问趋势 (柱状图)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-44 w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">增长折线 (趋势图)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={176}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" fontSize={11} />
                  <YAxis fontSize={11} />
                  <Line type="monotone" dataKey="desktop" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">设备终端分布 (环形图)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={35} outerRadius={60} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-3 mt-1">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-1 text-[11px]">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Carousel */}
      <Section title="Carousel 轮播图" description="支持前后导航切换的内容轮播走马灯">
        <div className="mx-auto max-w-xl px-12">
          <Carousel>
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className={`h-40 rounded-xl bg-gradient-to-r ${item.bg} flex flex-col items-center justify-center text-white px-6 text-center shadow-sm`}>
                    <p className="text-xl font-bold tracking-tight">{item.title}</p>
                    <p className="text-xs opacity-90 mt-1 max-w-md">{item.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Section>

      {/* Combobox */}
      <Section title="Combobox 复合筛选组合框" description="输入检索与下拉点选一体化组件">
        <div className="max-w-xs space-y-2">
          <p className="text-sm text-muted-foreground">选择或搜索前端框架：</p>
          <Combobox items={frameworks}>
            <ComboboxInput placeholder="搜索前端框架..." />
            <ComboboxContent>
              <ComboboxList>
                <ComboboxEmpty>未找到相关框架</ComboboxEmpty>
                {frameworks.map((fw) => (
                  <ComboboxItem key={fw.value} value={fw.value}>
                    {fw.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </Section>

      {/* Command */}
      <Section title="Command 命令菜单面板" description="类似 Spotlight 或 Raycast 的全局快捷搜索">
        <Command className="rounded-lg border shadow-sm max-w-md">
          <CommandInput placeholder="键入指令或检索功能..." />
          <CommandList>
            <CommandEmpty>无匹配指令结果。</CommandEmpty>
            <CommandGroup heading="常用快捷操作">
              <CommandItem>新建项目仓库</CommandItem>
              <CommandItem>搜索全局组件库</CommandItem>
              <CommandItem>切换深色暗黑模式</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="系统设置">
              <CommandItem>访问令牌密钥管理</CommandItem>
              <CommandItem>组织与团队成员权限</CommandItem>
              <CommandItem>计费账单与用量统计</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Section>
    </div>
  );
}
