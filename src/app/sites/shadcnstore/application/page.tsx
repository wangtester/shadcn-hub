"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LayoutDashboard,
  ShieldCheck,
  Table,
  Calendar,
  Lock,
  Mail,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  Users,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
} from "lucide-react";

export default function ShadcnStoreApplicationPage() {
  // Data Table 模拟数据与筛选
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([1]);

  const mockUsers = [
    { id: 1, name: "Alex Morgan", email: "alex@company.com", role: "Owner", status: "Active", spend: "$1,420" },
    { id: 2, name: "Sarah Chen", email: "sarah@acme.ai", role: "Admin", status: "Active", spend: "$890" },
    { id: 3, name: "Michael Vance", email: "mv@design.io", role: "Editor", status: "Pending", spend: "$340" },
    { id: 4, name: "Elena Rostova", email: "elena@crypto.org", role: "Viewer", status: "Inactive", spend: "$0" },
  ];

  const filteredUsers = mockUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  // OTP 验证码状态
  const [otp, setOtp] = useState(["4", "8", "2", "9", "", ""]);

  return (
    <div className="space-y-10">
      {/* 头部 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 font-medium">ShadcnStore Application</Badge>
          <span className="text-xs text-muted-foreground font-mono">官方 11 大业务后台 Blocks</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">应用后台 · 生产级中后台界面与管理套件</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          对齐 ShadcnStore 官方 Application 门类：高级数据表格 (DataTables)、控制台小部件 (Widgets)、
          身份认证表单 (Login/Signup/Forgot)、两步验证 (Verification OTP)、日程日历与错误容灾卡。
        </p>
      </div>

      {/* 1. DataTables 现代可操作数据表格 */}
      <Card className="rounded-2xl border bg-card/60 shadow-xs overflow-hidden">
        <CardHeader className="pb-3 border-b bg-muted/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Table className="h-4 w-4 text-blue-500" />
                <CardTitle className="text-base font-bold">DataTables · 高级数据管理表格</CardTitle>
              </div>
              <CardDescription className="text-xs mt-0.5">支持实时模糊搜索、行多选与状态徽章</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="h-3.5 w-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="搜索用户或邮箱..."
                  className="h-8 pl-8 text-xs w-48 rounded-xl"
                />
              </div>
              <Button size="sm" variant="outline" className="h-8 text-xs rounded-xl gap-1">
                <Filter className="h-3 w-3" /> 筛选
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/30 text-muted-foreground border-b uppercase text-[10px] font-mono">
                <tr>
                  <th className="p-3 pl-4 w-8">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="p-3">姓名与账户</th>
                  <th className="p-3">角色权限</th>
                  <th className="p-3">账号状态</th>
                  <th className="p-3 text-right">累计消费</th>
                  <th className="p-3 pr-4 text-right">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filteredUsers.map((user) => {
                  const isSelected = selectedRows.includes(user.id);
                  return (
                    <tr
                      key={user.id}
                      onClick={() => toggleSelectRow(user.id)}
                      className={`hover:bg-muted/40 transition-colors cursor-pointer ${
                        isSelected ? "bg-blue-500/5" : ""
                      }`}
                    >
                      <td className="p-3 pl-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}}
                          className="rounded"
                        />
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-foreground">{user.name}</div>
                        <div className="text-[10px] text-muted-foreground font-mono">{user.email}</div>
                      </td>
                      <td className="p-3">
                        <Badge variant="outline" className="text-[10px] font-mono">{user.role}</Badge>
                      </td>
                      <td className="p-3">
                        <Badge
                          className={`text-[10px] px-1.5 py-0 ${
                            user.status === "Active"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : user.status === "Pending"
                              ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="p-3 text-right font-mono font-medium">{user.spend}</td>
                      <td className="p-3 pr-4 text-right">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 rounded-lg">
                          <MoreHorizontal className="h-3.5 w-3.5" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="p-3 px-4 border-t flex items-center justify-between text-xs text-muted-foreground">
            <span>已选中 {selectedRows.length} 行 / 共 {mockUsers.length} 项</span>
            <div className="flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-7 w-7 p-0 rounded-lg" disabled>
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="outline" className="h-7 w-7 p-0 rounded-lg" disabled>
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Authentication 表单 & OTP 两步验证 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 现代登录表单 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-blue-500" />
                <CardTitle className="text-base font-bold">Login & Auth · 现代登录卡片</CardTitle>
              </div>
              <Badge variant="secondary" className="text-[10px]">NextAuth / Supabase</Badge>
            </div>
            <CardDescription className="text-xs">支持第三方 SSO 与工作邮箱快捷签发</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1 text-xs">
              <label className="text-muted-foreground font-medium">工作邮箱地址</label>
              <Input placeholder="name@company.com" className="h-9 text-xs rounded-xl" defaultValue="designer@shadcnhub.com" />
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <label className="text-muted-foreground font-medium">密码凭据</label>
                <a href="#" className="text-blue-500 hover:underline text-[11px]">忘记密码？</a>
              </div>
              <Input type="password" placeholder="••••••••••••" className="h-9 text-xs rounded-xl" defaultValue="secretpassword" />
            </div>
            <Button size="sm" className="w-full h-9 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs mt-2">
              登录控制台
            </Button>
          </CardContent>
        </Card>

        {/* Verification OTP 验证码 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs flex flex-col justify-between">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-purple-500" />
                <CardTitle className="text-base font-bold">Verification · OTP 验证码</CardTitle>
              </div>
              <Badge variant="outline" className="text-[10px]">2FA 安全确认</Badge>
            </div>
            <CardDescription className="text-xs">六位数字动态双因子短信/邮件验证码输入器</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-xs text-muted-foreground">已向绑定手机发送验证码，请输入以完成登录：</p>
            <div className="flex justify-center gap-2">
              {otp.map((digit, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-12 rounded-xl border flex items-center justify-center font-mono text-base font-bold transition-all ${
                    digit ? "border-blue-500 bg-blue-500/5 text-foreground" : "border-border bg-card text-muted-foreground"
                  }`}
                >
                  {digit || "-"}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 pt-1 text-xs text-muted-foreground">
              <span>未收到验证码？</span>
              <button className="text-blue-500 font-semibold hover:underline">重新获取 (58s)</button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 3. 错误缺省容灾卡 & 日历视图 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Error Pages 容灾卡 */}
        <Card className="rounded-2xl border border-dashed bg-card/40 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mb-2">
            <AlertCircle className="h-5 w-5" />
          </div>
          <h3 className="font-bold text-sm">404 & Error States · 优雅错误缺省</h3>
          <p className="text-xs text-muted-foreground max-w-xs mt-1">
            网络瞬断或业务资源未命中时的友好引导，附带回退与客服支持。
          </p>
          <div className="flex gap-2 mt-4">
            <Button size="sm" variant="outline" className="h-8 rounded-xl text-xs">
              返回上一页
            </Button>
            <Button size="sm" className="h-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs">
              报告问题
            </Button>
          </div>
        </Card>

        {/* Calendar 日程卡片 */}
        <Card className="rounded-2xl border bg-card/60 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-500" />
                <h3 className="font-bold text-sm">Calendar · 业务排期视图</h3>
              </div>
              <Badge variant="secondary" className="text-[10px]">Today</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              紧凑型日期选择与里程碑排期小部件，支持多事件高亮打标。
            </p>
          </div>
          <div className="pt-4 border-t space-y-2 text-xs">
            <div className="p-2.5 rounded-xl border bg-muted/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-semibold">Q4 商业客户架构复盘</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">14:00 - 15:30</span>
            </div>
            <div className="p-2.5 rounded-xl border bg-muted/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold">ShadcnStore 全量发布</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">17:00</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
