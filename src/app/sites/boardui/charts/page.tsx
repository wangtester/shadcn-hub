"use client";

import { PageHeader } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ResponsiveContainer,
  AreaChart, Area,
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend
} from "recharts";
import { TrendingUp, ArrowUpRight, Cpu, Activity, Shield, Zap, Sparkles } from "lucide-react";

// 示例数据集
const dayData = [
  { day: "周一", a: 240, b: 180, c: 80 },
  { day: "周二", a: 390, b: 230, c: 110 },
  { day: "周三", a: 580, b: 320, c: 190 },
  { day: "周四", a: 420, b: 290, c: 150 },
  { day: "周五", a: 690, b: 460, c: 240 },
  { day: "周六", a: 510, b: 340, c: 180 },
  { day: "周日", a: 620, b: 410, c: 210 },
];

const latencyData = [
  { time: "00:00", ms: 42 },
  { time: "04:00", ms: 35 },
  { time: "08:00", ms: 88 },
  { time: "12:00", ms: 145 },
  { time: "16:00", ms: 110 },
  { time: "20:00", ms: 65 },
];

const radarData = [
  { subject: "推理速度", A: 120, B: 110, fullMark: 150 },
  { subject: "长文本窗口", A: 98, B: 130, fullMark: 150 },
  { subject: "代码生成", A: 140, B: 130, fullMark: 150 },
  { subject: "数学逻辑", A: 135, B: 100, fullMark: 150 },
  { subject: "多模态理解", A: 99, B: 140, fullMark: 150 },
  { subject: "指令遵循", A: 125, B: 115, fullMark: 150 },
];

const pieColors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6"];
const modelPie = [
  { name: "Claude 3.7", value: 45 },
  { name: "GPT-4o", value: 30 },
  { name: "DeepSeek R1", value: 15 },
  { name: "Gemini 2.5", value: 10 },
];

export default function BoardUIChartsPage() {
  return (
    <div className="space-y-10">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/30">19/19 图表全量实装</Badge>
          <span className="text-xs text-muted-foreground font-mono">boardui.com 真实图表体系</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          BoardUI · 19 款高阶图表卡片全量展示
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          完整呈现 boardui.com 官方注明的全部 19 款 Chart Cards，每一款均为独立设计的响应式 Recharts 数据看板容器。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 01. Area Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">01 / Area Chart</span>
              <Badge variant="outline" className="text-[10px] text-emerald-600">正常</Badge>
            </div>
            <CardTitle className="text-lg">API 吞吐流量面积图</CardTitle>
            <CardDescription className="text-xs">带单向渐变透明度的堆叠面积</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dayData}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area type="monotone" dataKey="a" stroke="#6366f1" strokeWidth={2} fill="url(#g1)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 02. Earnings Bar Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">02 / Earnings Chart</span>
              <span className="text-xs font-bold text-primary font-mono">+18.4%</span>
            </div>
            <CardTitle className="text-lg">月度收益柱状图</CardTitle>
            <CardDescription className="text-xs">顶部带 6px 平滑圆角柱状图</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dayData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="a" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 03. Radar Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">03 / Radar Chart</span>
              <Badge variant="secondary" className="text-[10px]">模型能力</Badge>
            </div>
            <CardTitle className="text-lg">多轴雷达图</CardTitle>
            <CardDescription className="text-xs">多边形能力评测覆盖分布</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" fontSize={9} />
                <Radar name="Claude" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 04. Radar Comparison */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">04 / Radar Comparison</span>
              <Badge variant="outline" className="text-[10px]">对比模式</Badge>
            </div>
            <CardTitle className="text-lg">双系列雷达对比图</CardTitle>
            <CardDescription className="text-xs">基准 A/B 性能指标并列投影</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" fontSize={9} />
                <Radar name="模型A" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
                <Radar name="模型B" dataKey="B" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 05. Radial Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">05 / Radial Chart</span>
              <span className="text-xs font-mono font-bold">85% 达成</span>
            </div>
            <CardTitle className="text-lg">同心圆环图</CardTitle>
            <CardDescription className="text-xs">同心各阶段指标圆弧占比</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2 flex items-center justify-center">
            <div className="h-36 w-36 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={modelPie} cx="50%" cy="50%" innerRadius={45} outerRadius={65} dataKey="value">
                    {modelPie.map((e, idx) => (
                      <Cell key={idx} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <span className="absolute font-mono font-black text-sm">85%</span>
            </div>
          </CardContent>
        </Card>

        {/* 06. Speedometer Gauge */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">06 / Speedometer</span>
              <Badge className="bg-amber-500/10 text-amber-600 border-0 text-[10px]">72/100 负载</Badge>
            </div>
            <CardTitle className="text-lg">半圆仪表盘压力规</CardTitle>
            <CardDescription className="text-xs">集群系统负载峰值计量</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2 flex flex-col items-center justify-center">
            <div className="h-32 w-48 relative overflow-hidden flex items-end justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[{ value: 72 }, { value: 28 }]}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={55}
                    outerRadius={75}
                    dataKey="value"
                  >
                    <Cell fill="#f59e0b" />
                    <Cell fill="#374151" opacity={0.3} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-2 text-center">
                <span className="text-xl font-bold font-mono">72%</span>
                <p className="text-[10px] text-muted-foreground">活跃线程</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 07. Combo Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">07 / Combo Chart</span>
              <Badge variant="outline" className="text-[10px]">双轴图</Badge>
            </div>
            <CardTitle className="text-lg">柱状折线复合图</CardTitle>
            <CardDescription className="text-xs">交易量与费率复合于同一画布</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={dayData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="day" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="a" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="b" stroke="#ec4899" strokeWidth={2} dot={{ r: 2 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 08. Funnel Chart */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">08 / Funnel Chart</span>
              <Badge variant="secondary" className="text-[10px]">转化阶段</Badge>
            </div>
            <CardTitle className="text-lg">漏斗流失转化图</CardTitle>
            <CardDescription className="text-xs">访问、注册、激活至付费全流程</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2 flex flex-col justify-around">
            {[
              { label: "1. 首页访问", val: "100%", width: "w-full", bg: "bg-blue-600" },
              { label: "2. 注册账号", val: "68%", width: "w-[68%]", bg: "bg-indigo-600" },
              { label: "3. 开启试用", val: "42%", width: "w-[42%]", bg: "bg-purple-600" },
              { label: "4. 付费签约", val: "24%", width: "w-[24%]", bg: "bg-emerald-600" },
            ].map((f, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[11px] font-medium">
                  <span>{f.label}</span>
                  <span className="font-mono text-muted-foreground">{f.val}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${f.width} ${f.bg} rounded-full`} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 09. Stage Bars */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">09 / Stage Bars</span>
              <Badge variant="outline" className="text-[10px]">阶段胶囊</Badge>
            </div>
            <CardTitle className="text-lg">阶段比例胶囊条</CardTitle>
            <CardDescription className="text-xs">各生命周期项目分布比例</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-4 space-y-3">
            <div className="h-6 w-full rounded-full overflow-hidden flex">
              <div className="w-[45%] bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">45% 需求</div>
              <div className="w-[30%] bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">30% 开发</div>
              <div className="w-[15%] bg-amber-500 flex items-center justify-center text-[10px] text-white font-bold">15% 测试</div>
              <div className="w-[10%] bg-emerald-500 flex items-center justify-center text-[10px] text-white font-bold">10%</div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-indigo-500" /> 需求调研中 (45%)</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-blue-500" /> 敏捷开发中 (30%)</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> 灰度测试中 (15%)</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 正式发布上线 (10%)</div>
            </div>
          </CardContent>
        </Card>

        {/* 10. Sankey Flow Bar */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">10 / Sankey Flow Bar</span>
              <Badge variant="outline" className="text-[10px]">来源流向</Badge>
            </div>
            <CardTitle className="text-lg">桑基流量分发占比</CardTitle>
            <CardDescription className="text-xs">入口渠道到最终转化的流向分布</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={[
                { name: "搜索引擎", share: 45 },
                { name: "社交分享", share: 28 },
                { name: "开发者社区", share: 18 },
                { name: "直接访问", share: 9 },
              ]}>
                <XAxis type="number" fontSize={10} hide />
                <YAxis dataKey="name" type="category" fontSize={10} axisLine={false} tickLine={false} width={70} />
                <Tooltip />
                <Bar dataKey="share" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 11. Activity Rings Health Widget */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">11 / Activity Rings</span>
              <Badge variant="secondary" className="text-[10px]">运动健康</Badge>
            </div>
            <CardTitle className="text-lg">三色同心健康活动环</CardTitle>
            <CardDescription className="text-xs">步数、卡路里与站立时长圆环</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2 flex items-center justify-center">
            <div className="relative h-32 w-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-rose-500/20 border-t-rose-500 animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-[spin_6s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-[spin_4s_linear_infinite]" />
              <Activity className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        {/* 12. Sparkline Mini Trend */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">12 / Sparkline Trend</span>
              <span className="text-xs text-emerald-600 font-bold font-mono">99.9% 稳定</span>
            </div>
            <CardTitle className="text-lg">微型心跳趋势火花线</CardTitle>
            <CardDescription className="text-xs">轻量级极简折线，无坐标轴干预</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dayData}>
                <Tooltip />
                <Line type="monotone" dataKey="a" stroke="#10b981" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 13. Stacked Area */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">13 / Stacked Area</span>
              <Badge variant="outline" className="text-[10px]">多系列</Badge>
            </div>
            <CardTitle className="text-lg">多业务线堆叠面积图</CardTitle>
            <CardDescription className="text-xs">展现多部门累积营收走势</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dayData}>
                <Tooltip />
                <Area type="monotone" dataKey="a" stackId="1" stroke="#6366f1" fill="#6366f1" opacity={0.6} />
                <Area type="monotone" dataKey="b" stackId="1" stroke="#ec4899" fill="#ec4899" opacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 14. Grouped Bar Benchmark */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">14 / Grouped Bar</span>
              <Badge variant="outline" className="text-[10px]">并列对比</Badge>
            </div>
            <CardTitle className="text-lg">多组并列基准对比柱图</CardTitle>
            <CardDescription className="text-xs">本月与上月同周期数据对比</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dayData}>
                <XAxis dataKey="day" fontSize={9} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="a" fill="#3b82f6" radius={[3, 3, 0, 0]} />
                <Bar dataKey="b" fill="#93c5fd" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 15. Latency Histogram */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">15 / Latency Histogram</span>
              <span className="text-xs font-mono text-muted-foreground">P99: 145ms</span>
            </div>
            <CardTitle className="text-lg">网关时延阶梯走势图</CardTitle>
            <CardDescription className="text-xs">阶梯函数展示接口时延峰值</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={latencyData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis dataKey="time" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Line type="stepAfter" dataKey="ms" stroke="#f59e0b" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 16. Donut Breakdown */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">16 / Donut Breakdown</span>
              <Badge variant="outline" className="text-[10px]">甜甜圈</Badge>
            </div>
            <CardTitle className="text-lg">Token 消耗环形分布图</CardTitle>
            <CardDescription className="text-xs">各模型算力 Token 占比分析</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2 flex items-center justify-center">
            <div className="h-32 w-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={modelPie} cx="50%" cy="50%" innerRadius={35} outerRadius={55} dataKey="value">
                    {modelPie.map((e, idx) => (
                      <Cell key={idx} fill={pieColors[idx % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* 17. Error Frequency Histogram */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">17 / Error Histogram</span>
              <Badge variant="destructive" className="text-[10px]">4xx / 5xx</Badge>
            </div>
            <CardTitle className="text-lg">错误码分布直方图</CardTitle>
            <CardDescription className="text-xs">统计异常请求状态码频次</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { code: "400", count: 12 },
                { code: "401", count: 85 },
                { code: "403", count: 34 },
                { code: "404", count: 142 },
                { code: "500", count: 18 },
                { code: "502", count: 6 },
              ]}>
                <XAxis dataKey="code" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 18. Step Function Deployment */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">18 / Step Function</span>
              <Badge className="bg-emerald-500/10 text-emerald-600 border-0 text-[10px]">灰度推进</Badge>
            </div>
            <CardTitle className="text-lg">版本灰度发布阶跃状态图</CardTitle>
            <CardDescription className="text-xs">流量按权重 10% 25% 50% 100% 梯度切入</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { phase: "V1", pct: 10 },
                { phase: "V2", pct: 25 },
                { phase: "V3", pct: 50 },
                { phase: "V4", pct: 80 },
                { phase: "V5", pct: 100 },
              ]}>
                <XAxis dataKey="phase" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis fontSize={10} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip />
                <Line type="stepBefore" dataKey="pct" stroke="#10b981" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* 19. Heatmap Matrix */}
        <Card>
          <CardHeader className="pb-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-muted-foreground">19 / Heatmap Matrix</span>
              <Badge variant="outline" className="text-[10px]">24小时阵列</Badge>
            </div>
            <CardTitle className="text-lg">24小时负载热力阵列卡</CardTitle>
            <CardDescription className="text-xs">不同时段服务器热力色块矩阵</CardDescription>
          </CardHeader>
          <CardContent className="h-44 pt-3 flex flex-col justify-center">
            <div className="grid grid-cols-8 gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => {
                const intensity = (i * 7 + 13) % 100;
                const bg =
                  intensity > 75 ? "bg-indigo-600 text-white" :
                  intensity > 50 ? "bg-indigo-400 text-white" :
                  intensity > 25 ? "bg-indigo-200 dark:bg-indigo-900" :
                  "bg-muted";
                return (
                  <div
                    key={i}
                    title={`${i}:00 负载 ${intensity}%`}
                    className={`h-7 rounded flex items-center justify-center text-[9px] font-mono cursor-pointer transition-transform hover:scale-110 ${bg}`}
                  >
                    {intensity}%
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-2">横轴按时间从 00:00 至 23:00 展开</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
