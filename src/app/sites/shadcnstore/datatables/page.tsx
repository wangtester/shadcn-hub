"use client";

import React, { useState } from "react";
import { 
  Table as TableIcon, Search, Filter, ArrowUpDown, MoreHorizontal, 
  CheckCircle2, AlertCircle, Clock, Trash2, Download, Plus, Check
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const initialRows = [
  { id: "INV-001", customer: "Liam Johnson", email: "liam@acme.inc", amount: "$3,120.00", status: "Paid", date: "2026-10-01", method: "Mastercard" },
  { id: "INV-002", customer: "Sophia Chen", email: "sophia@techpulse.io", amount: "$840.50", status: "Pending", date: "2026-10-02", method: "Visa" },
  { id: "INV-003", customer: "Noah Davis", email: "noah@devcore.co", amount: "$2,450.00", status: "Paid", date: "2026-10-03", method: "PayPal" },
  { id: "INV-004", customer: "Emma Wilson", email: "emma@designlab.org", amount: "$150.00", status: "Failed", date: "2026-10-03", method: "Stripe" },
  { id: "INV-005", customer: "Oliver Taylor", email: "oliver@cloudscale.net", amount: "$1,890.00", status: "Paid", date: "2026-10-04", method: "Bank Wire" },
  { id: "INV-006", customer: "Ava Miller", email: "ava@finanalytics.io", amount: "$940.00", status: "Pending", date: "2026-10-04", method: "Apple Pay" },
];

export default function ShadcnStoreDataTablesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  const filteredRows = initialRows
    .filter((row) => {
      const matchSearch = row.customer.toLowerCase().includes(search.toLowerCase()) || 
                          row.id.toLowerCase().includes(search.toLowerCase()) ||
                          row.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "All" || row.status === statusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      return sortAsc ? a.customer.localeCompare(b.customer) : b.customer.localeCompare(a.customer);
    });

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredRows.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredRows.map(r => r.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 头部说明 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Application / Data Table Blocks
            </Badge>
            <span className="text-xs text-muted-foreground">企业后台数据表格区块</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">高级数据表格与批量操作</h1>
          <p className="text-sm text-muted-foreground mt-1">
            配备多维度模糊检索、状态标签过滤、列排序、多行选中批量指令与明细展开。
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs gap-1.5">
            <Download className="w-3.5 h-3.5" /> 导出 CSV
          </Button>
          <Button size="sm" className="text-xs gap-1.5">
            <Plus className="w-3.5 h-3.5" /> 新建账单
          </Button>
        </div>
      </div>

      {/* Block 1: 生产级企业数据表格 */}
      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        {/* 工具栏 */}
        <div className="p-4 border-b border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 bg-muted/20">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* 搜索 */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="搜索单号、客户姓名或邮箱..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-xs pl-8 pr-3 py-1.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* 状态筛选 */}
            <div className="flex items-center gap-1">
              {["All", "Paid", "Pending", "Failed"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                    statusFilter === st
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20 shadow-2xs"
                      : "text-muted-foreground hover:bg-muted border border-transparent"
                  }`}
                >
                  {st === "All" ? "全部" : st}
                </button>
              ))}
            </div>
          </div>

          {/* 选中统计与批量操作 */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">已选择 {selectedIds.length} 项</span>
              <Button size="sm" variant="destructive" className="h-7 text-xs gap-1 px-2.5">
                <Trash2 className="w-3 h-3" /> 批量删除
              </Button>
            </div>
          )}
        </div>

        {/* 表格主体 */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-border/60 bg-muted/40 font-semibold text-muted-foreground">
                <th className="p-3 pl-4 w-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === filteredRows.length && filteredRows.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-border"
                  />
                </th>
                <th className="p-3">账单编号</th>
                <th className="p-3 cursor-pointer select-none" onClick={() => setSortAsc(!sortAsc)}>
                  <div className="flex items-center gap-1 hover:text-foreground">
                    <span>客户信息</span>
                    <ArrowUpDown className="w-3 h-3 text-muted-foreground" />
                  </div>
                </th>
                <th className="p-3">交易金额</th>
                <th className="p-3">支付渠道</th>
                <th className="p-3">付款状态</th>
                <th className="p-3">生成日期</th>
                <th className="p-3 text-right pr-4">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-muted-foreground">
                    未查找到匹配的账单数据
                  </td>
                </tr>
              ) : (
                filteredRows.map((row) => (
                  <tr
                    key={row.id}
                    className={`hover:bg-muted/30 transition-colors ${
                      selectedIds.includes(row.id) ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="p-3 pl-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(row.id)}
                        onChange={() => toggleSelect(row.id)}
                        className="rounded border-border"
                      />
                    </td>
                    <td className="p-3 font-mono font-bold text-foreground">
                      {row.id}
                    </td>
                    <td className="p-3">
                      <div>
                        <span className="font-semibold text-foreground block">{row.customer}</span>
                        <span className="text-[11px] text-muted-foreground font-mono">{row.email}</span>
                      </div>
                    </td>
                    <td className="p-3 font-mono font-bold text-foreground">
                      {row.amount}
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {row.method}
                    </td>
                    <td className="p-3">
                      {row.status === "Paid" && (
                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-500/10 text-[10px] gap-1 py-0.5">
                          <CheckCircle2 className="w-3 h-3" /> 已入账
                        </Badge>
                      )}
                      {row.status === "Pending" && (
                        <Badge variant="outline" className="border-amber-500/30 text-amber-600 bg-amber-500/10 text-[10px] gap-1 py-0.5">
                          <Clock className="w-3 h-3" /> 处理中
                        </Badge>
                      )}
                      {row.status === "Failed" && (
                        <Badge variant="outline" className="border-rose-500/30 text-rose-600 bg-rose-500/10 text-[10px] gap-1 py-0.5">
                          <AlertCircle className="w-3 h-3" /> 失败
                        </Badge>
                      )}
                    </td>
                    <td className="p-3 text-muted-foreground font-mono">
                      {row.date}
                    </td>
                    <td className="p-3 text-right pr-4">
                      <button className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* 底部分页条 */}
        <div className="p-3 px-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground bg-muted/10">
          <span>共 {filteredRows.length} 条记录</span>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="sm" className="h-7 text-xs px-2" disabled>
              上一页
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs px-2 bg-primary/10 text-primary border-primary/30">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs px-2">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs px-2">
              下一页
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
