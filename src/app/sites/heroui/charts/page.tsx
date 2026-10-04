"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend
} from "recharts";
import { TrendingUp, ArrowUpRight, Sparkles, Filter, RefreshCw } from "lucide-react";

// 示例数据
const areaData = [
  { month: "1月", desktop: 186, mobile: 80 },
  { month: "2月", desktop: 305, mobile: 200 },
  { month: "3月", desktop: 237, mobile: 120 },
  { month: "4月", desktop: 373, mobile: 190 },
  { month: "5月", desktop: 309, mobile: 230 },
  { month: "6月", desktop: 414, mobile: 280 },
];

const barData = [
  { day: "周一", sales: 240, target: 200 },
  { day: "周二", sales: 139, target: 180 },
  { day: "周三", sales: 380, target: 220 },
  { day: "周四", sales: 390, target: 250 },
  { day: "周五", sales: 480, target: 300 },
  { day: "周六", sales: 520, target: 350 },
  { day: "周日", sales: 430, target: 280 },
];

const lineData = [
  { time: "09:00", latency: 24, throughput: 120 },
  { time: "11:00", latency: 18, throughput: 190 },
  { time: "13:00", latency: 32, throughput: 310 },
  { time: "15:00", latency: 28, throughput: 280 },
  { time: "17:00", latency: 19, throughput: 340 },
  { time: "19:00", latency: 15, throughput: 210 },
];

const pieData = [
  { name: "Direct 直接访问", value: 400, color: "#ec4899" },
  { name: "Organic 搜索引擎", value: 300, color: "#8b5cf6" },
  { name: "Referral 外链引流", value: 300, color: "#06b6d4" },
  { name: "Social 社交媒体", value: 200, color: "#10b981" },
];

const radarData = [
  { metric: "响应速度", A: 120, B: 110, fullMark: 150 },
  { metric: "并发负载", A: 98, B: 130, fullMark: 150 },
  { metric: "内存开销", A: 86, B: 130, fullMark: 150 },
  { metric: "代码体积", A: 99, B: 100, fullMark: 150 },
  { metric: "易用性", A: 135, B: 90, fullMark: 150 },
  { metric: "可拓展性", A: 125, B: 85, fullMark: 150 },
];

const radialData = [
  { name: "存储占用", value: 78, fill: "#ec4899" },
  { name: "CPU 负荷", value: 62, fill: "#8b5cf6" },
  { name: "网络带宽", value: 45, fill: "#3b82f6" },
];

const composedData = [
  { month: "Q1", revenue: 840, orders: 420, rate: 85 },
  { month: "Q2", revenue: 980, orders: 510, rate: 88 },
  { month: "Q3", revenue: 1240, orders: 690, rate: 92 },
  { month: "Q4", revenue: 1450, orders: 820, rate: 96 },
];

export default function HeroUIChartsPage() {
  const [activeRange, setActiveRange] = useState("30d");

  return (
    <div className="space-y-10">
      {/* 头部介绍 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-pink-500/10 text-pink-500 border-pink-500/20 font-medium">HeroUI Pro Charts</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方全量 8 大核心图表</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Charts · 柔光大圆角现代化数据图表体系</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          HeroUI 专有图表设计规范：大圆角容器（rounded-2xl）、微光柔和渐变填充、半透明磨砂 Tooltip 浮层以及极简无冗余网格线。
          完全交互式呈现 Area、Bar、Line、Pie、Radar、Radial 与 Composed 复合图表。
        </p>
      </div>

      {/* 1. Area Chart & Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Area Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-pink-500/30 transition-all">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Area Chart · 渐变面积图</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">平滑渐变</Badge>
              </div>
              <CardDescription className="text-xs mt-1">展示多端访问量随时间推移的累积走势</CardDescription>
            </div>
            <div className="flex items-center gap-1 text-emerald-500 text-xs font-semibold">
              <TrendingUp className="h-3.5 w-3.5" /> +28.4%
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="areaDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ec4899" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#ec4899" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="areaMobile" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "1rem",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      fontSize: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="desktop" name="桌面端" stroke="#ec4899" strokeWidth={2.5} fillOpacity={1} fill="url(#areaDesktop)" />
                  <Area type="monotone" dataKey="mobile" name="移动端" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#areaMobile)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-violet-500/30 transition-all">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Bar Chart · 柔和柱状图</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">圆角柱条</Badge>
              </div>
              <CardDescription className="text-xs mt-1">周度营业目标与实际完成度对比</CardDescription>
            </div>
            <div className="text-xs font-mono text-muted-foreground bg-muted/60 px-2 py-0.5 rounded-full">
              目标达成率 114%
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "1rem",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="sales" name="实际销售" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="target" name="目标基线" fill="hsl(var(--muted))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 2. Line Chart & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-cyan-500/30 transition-all">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Line Chart · 实时性能折线图</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">双轴监控</Badge>
              </div>
              <CardDescription className="text-xs mt-1">系统毫秒延迟与并发吞吐量关联分析</CardDescription>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              99.98% 健康
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "1rem",
                      fontSize: "12px",
                    }}
                  />
                  <Line type="monotone" dataKey="throughput" name="吞吐量 (req/s)" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: "#06b6d4" }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="latency" name="延迟 (ms)" stroke="#f43f5e" strokeWidth={2} strokeDasharray="4 4" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-pink-500/30 transition-all">
          <CardHeader className="pb-3 flex flex-row items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Pie / Donut Chart · 环形占比图</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">磨砂内环</Badge>
              </div>
              <CardDescription className="text-xs mt-1">用户全域流量转化信源分布</CardDescription>
            </div>
            <div className="text-xs font-mono text-muted-foreground">总计: 1,200 UV</div>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "1rem",
                      fontSize: "12px",
                    }}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => <span className="text-xs text-muted-foreground">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. Radar Chart, Radial Chart, Composed Chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Radar Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-emerald-500/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold">Radar Chart · 雷达评估</CardTitle>
            <CardDescription className="text-xs">多维度性能评测模型对比</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" opacity={0.5} />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                  <Radar name="HeroUI Pro" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.35} />
                  <Radar name="基线方案" dataKey="B" stroke="#6b7280" fill="#6b7280" fillOpacity={0.15} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Radial Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-indigo-500/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold">Radial Chart · 径向进度环</CardTitle>
            <CardDescription className="text-xs">系统多核心硬件资源利用率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="25%" outerRadius="100%" barSize={10} data={radialData}>
                  <RadialBar
                    background={{ fill: "hsl(var(--muted))" }}
                    dataKey="value"
                    cornerRadius={10}
                  />
                  <Legend
                    iconSize={8}
                    layout="horizontal"
                    verticalAlign="bottom"
                    formatter={(value) => <span className="text-[11px] text-muted-foreground">{value}</span>}
                  />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Composed Chart */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs hover:border-amber-500/30 transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-bold">Composed Chart · 复合图</CardTitle>
            <CardDescription className="text-xs">柱线同屏展示营收与转化率</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={composedData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip />
                  <Bar dataKey="revenue" name="营收(k)" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                  <Line type="monotone" dataKey="rate" name="转化%" stroke="#ec4899" strokeWidth={2} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Chart Tooltip & Interactivity 深度演示 */}
      <Card className="rounded-2xl border bg-gradient-to-r from-card via-pink-500/5 to-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-pink-500" />
              <h3 className="font-bold text-base">HeroUI Chart Tooltip · 磨砂悬浮视窗规范</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              HeroUI Pro 图表浮层摒弃传统灰底黑字，默认采用毛玻璃（backdrop-blur-md）、16px 大圆角与高亮指示圆点，使数据阅读如丝般柔滑。
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="rounded-xl text-xs gap-1.5" onClick={() => setActiveRange(activeRange === "30d" ? "7d" : "30d")}>
              <RefreshCw className="h-3 w-3" />
              切换周期: {activeRange}
            </Button>
            <Button size="sm" className="rounded-xl text-xs bg-pink-500 hover:bg-pink-600 text-white gap-1.5">
              下载图表模板
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
