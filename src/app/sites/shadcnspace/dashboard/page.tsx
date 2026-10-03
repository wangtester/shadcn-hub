"use client";

import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, ShoppingCart, Activity, RefreshCw } from "lucide-react";

const metrics = [
  { title: "总营收流水", value: "¥128,430.00", change: "+18.2%", up: true, icon: <DollarSign className="h-4 w-4" /> },
  { title: "活跃订阅租户", value: "2,350", change: "+10.5%", up: true, icon: <Users className="h-4 w-4" /> },
  { title: "日成交订单量", value: "1,429", change: "-3.1%", up: false, icon: <ShoppingCart className="h-4 w-4" /> },
  { title: "API 负载就绪率", value: "99.98%", change: "+0.02%", up: true, icon: <Activity className="h-4 w-4" /> },
];

const liveTransactions = [
  { id: "TX-9901", user: "李明 (杭州分部)", amount: "¥1,200.00", channel: "微信支付", status: "已入账", time: "2分钟前" },
  { id: "TX-9902", user: "王欣 (企业专线)", amount: "¥8,500.00", channel: "对公转账", status: "审核中", time: "5分钟前" },
  { id: "TX-9903", user: "陈晓东 (个人Pro)", amount: "¥199.00", channel: "支付宝", status: "已入账", time: "11分钟前" },
  { id: "TX-9904", user: "张伟 (北美团队)", amount: "¥3,400.00", channel: "Stripe", status: "已入账", time: "15分钟前" },
  { id: "TX-9905", user: "赵敏 (试用转正)", amount: "¥899.00", channel: "银行卡", status: "已入账", time: "22分钟前" },
];

export default function ShadcnSpaceDashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="ShadcnSpace · Dashboard 仪表盘 Blocks"
        description="抓取自 shadcnspace.com 核心模版系统的 KPI 指标卡片与实时分析仪表盘区块"
      />

      {/* KPI 指标卡 */}
      <Section title="Block 1: 核心指标卡 (Metric Cards)" description="带环比涨跌与图标徽章的 KPI 汇总网格">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Card key={m.title} className="shadow-xs">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground">{m.title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                  {m.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold tracking-tight">{m.value}</div>
                <div className="flex items-center gap-1 text-xs mt-1">
                  <span className={m.up ? "text-emerald-600 font-semibold flex items-center" : "text-rose-600 font-semibold flex items-center"}>
                    {m.up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                    {m.change}
                  </span>
                  <span className="text-muted-foreground">较上周期</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* 实时交易流水 */}
      <Section title="Block 2: 实时业务交易流水监控" description="高密度数据表格与状态流向指示">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">最近完成的结算记录</span>
            <Button variant="outline" size="sm" className="gap-1.5 h-7 text-xs">
              <RefreshCw className="h-3 w-3" /> 刷新数据
            </Button>
          </div>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40">
                  <TableHead className="w-[100px]">流水号</TableHead>
                  <TableHead>客户姓名与组织</TableHead>
                  <TableHead>结算通道</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>时间</TableHead>
                  <TableHead className="text-right">结算金额</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {liveTransactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="font-mono text-xs">{tx.id}</TableCell>
                    <TableCell className="font-medium text-sm">{tx.user}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{tx.channel}</TableCell>
                    <TableCell>
                      <Badge variant={tx.status === "已入账" ? "default" : "secondary"} className="text-[10px]">
                        {tx.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{tx.time}</TableCell>
                    <TableCell className="text-right font-mono font-semibold">{tx.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Section>
    </div>
  );
}
