"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Folder, FolderOpen, FileCode, FileText, Image, ChevronRight, ChevronDown,
  TrendingUp, TrendingDown, Clock, CheckCircle2, AlertCircle, Circle,
  Sparkles, Trash2, Archive, Share2, MoreHorizontal, Calendar, ArrowUpRight,
  ListFilter, LayoutGrid, CheckSquare, Search
} from "lucide-react";

export default function HeroUIDataDisplayPage() {
  // File Tree 展开状态
  const [treeExpanded, setTreeExpanded] = useState<Record<string, boolean>>({
    src: true,
    components: true,
    lib: false,
  });

  // Action Bar 选中状态
  const [selectedItems, setSelectedItems] = useState<string[]>(["item-1", "item-3"]);

  // Toggle tree node
  const toggleNode = (node: string) => {
    setTreeExpanded((prev) => ({ ...prev, [node]: !prev[node] }));
  };

  // Toggle selection
  const toggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-10">
      {/* 头部 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-purple-500/10 text-purple-500 border-purple-500/20 font-medium">HeroUI Pro Data Display</Badge>
          <span className="text-xs text-muted-foreground font-mono">10 大现代数据呈现基元</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Data Display · 极富科技质感的数据呈现</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          HeroUI 标志性的全息光感卡片 (Holo Card)、悬浮操作栏 (Action Bar)、文件目录树 (File Tree)、现代看板 (Kanban)
          与指标卡群 (KPI Group)，赋予企业级复杂数据以轻盈呼吸感。
        </p>
      </div>

      {/* 1. Holo Card (全息卡片) & KPI Group */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold">1. Holo Card · 全息微光渐变卡片 & KPI 指标群</h2>
            <p className="text-xs text-muted-foreground">带有微光霓虹轮廓与半透明反光层的高阶卡片</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Holo Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl border p-5 bg-gradient-to-br from-card via-card to-pink-500/10 shadow-xs hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-pink-500/20 rounded-full blur-2xl group-hover:bg-pink-500/30 transition-colors pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">MRR 经常性营收</span>
              <div className="p-2 rounded-xl bg-pink-500/10 text-pink-500">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black tracking-tight">$128,450</div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-500 font-medium">
                <TrendingUp className="h-3 w-3" />
                <span>+14.8% 环比上月</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground flex justify-between">
              <span>目标进度: 92%</span>
              <span className="text-foreground font-medium">$140,000</span>
            </div>
          </div>

          {/* Holo Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl border p-5 bg-gradient-to-br from-card via-card to-purple-500/10 shadow-xs hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-colors pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">活跃开发者</span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black tracking-tight">42,910</div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-500 font-medium">
                <TrendingUp className="h-3 w-3" />
                <span>+8.2% 新注册流入</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground flex justify-between">
              <span>日活跃占比: 64%</span>
              <span className="text-foreground font-medium">27.4k DAU</span>
            </div>
          </div>

          {/* Holo Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl border p-5 bg-gradient-to-br from-card via-card to-blue-500/10 shadow-xs hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors pointer-events-none" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">API P99 响应耗时</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                <Clock className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3">
              <div className="text-2xl font-black tracking-tight">28.4 ms</div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-emerald-500 font-medium">
                <TrendingDown className="h-3 w-3" />
                <span>-4.6ms 极致提速</span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-muted-foreground flex justify-between">
              <span>全局 SLO 履约率</span>
              <span className="text-emerald-500 font-bold">99.99%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. File Tree & Action Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* File Tree */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">File Tree · 现代层级文件树</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">可折叠交互</Badge>
              </div>
              <span className="text-xs text-muted-foreground font-mono">HeroUI Tree</span>
            </div>
            <CardDescription className="text-xs">支持文件夹展开折叠、文件类型高亮图标与选中态</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border bg-muted/20 p-3 font-mono text-xs space-y-1">
              {/* Root */}
              <div>
                <button
                  onClick={() => toggleNode("src")}
                  className="flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-muted w-full text-left font-medium transition-colors"
                >
                  {treeExpanded.src ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
                  {treeExpanded.src ? <FolderOpen className="h-4 w-4 text-pink-500" /> : <Folder className="h-4 w-4 text-pink-500" />}
                  <span>src</span>
                  <Badge variant="outline" className="ml-auto text-[9px] py-0 px-1">dir</Badge>
                </button>

                {treeExpanded.src && (
                  <div className="pl-5 space-y-1 mt-1 border-l ml-3">
                    {/* Components dir */}
                    <div>
                      <button
                        onClick={() => toggleNode("components")}
                        className="flex items-center gap-1.5 py-1 px-2 rounded-lg hover:bg-muted w-full text-left font-medium transition-colors"
                      >
                        {treeExpanded.components ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
                        {treeExpanded.components ? <FolderOpen className="h-4 w-4 text-purple-500" /> : <Folder className="h-4 w-4 text-purple-500" />}
                        <span>components</span>
                      </button>

                      {treeExpanded.components && (
                        <div className="pl-5 space-y-1 mt-1 border-l ml-3">
                          <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground cursor-pointer">
                            <FileCode className="h-3.5 w-3.5 text-blue-500" />
                            <span>holo-card.tsx</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground cursor-pointer">
                            <FileCode className="h-3.5 w-3.5 text-blue-500" />
                            <span>action-bar.tsx</span>
                          </div>
                          <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground cursor-pointer">
                            <FileCode className="h-3.5 w-3.5 text-blue-500" />
                            <span>kanban-board.tsx</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Other files */}
                    <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground cursor-pointer">
                      <FileCode className="h-3.5 w-3.5 text-amber-500" />
                      <span>layout.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-muted/60 transition-colors text-muted-foreground hover:text-foreground cursor-pointer">
                      <FileText className="h-3.5 w-3.5 text-emerald-500" />
                      <span>globals.css</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Bar (浮动操作条) & 交互列表 */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base font-bold">Action Bar · 浮动悬浮操作条</CardTitle>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">悬浮胶囊</Badge>
                </div>
                <span className="text-xs text-muted-foreground font-mono">已选中 {selectedItems.length} 项</span>
              </div>
              <CardDescription className="text-xs">选中列表项触发全局悬浮操作胶囊，具备平滑进入与毛玻璃反光</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { id: "item-1", title: "HeroUI 核心设计规范文档 v2.4", size: "2.4 MB", time: "10分钟前" },
                  { id: "item-2", title: "Q3 财务审计导出报表 (Final).xlsx", size: "14.8 MB", time: "1小时前" },
                  { id: "item-3", title: "智能体推理接口协议 Schema.json", size: "512 KB", time: "昨天" },
                ].map((item) => {
                  const isChecked = selectedItems.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleSelect(item.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                        isChecked ? "bg-pink-500/10 border-pink-500/40 text-foreground" : "bg-card/40 border-border/60 hover:bg-muted/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${isChecked ? "bg-pink-500 border-pink-500 text-white" : "border-muted-foreground/40"}`}>
                          {isChecked && <CheckCircle2 className="h-3.5 w-3.5" />}
                        </div>
                        <div>
                          <p className="text-xs font-semibold">{item.title}</p>
                          <p className="text-[10px] text-muted-foreground">{item.size} · {item.time}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-[10px] font-normal">Ready</Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </div>

          {/* 模拟的悬浮 Action Bar */}
          {selectedItems.length > 0 && (
            <div className="p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
              <div className="rounded-2xl border bg-card/90 backdrop-blur-md p-2 px-4 shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></span>
                  <span className="text-xs font-bold">已选 {selectedItems.length} 项</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1">
                    <Share2 className="h-3.5 w-3.5" /> 分享
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 rounded-xl text-xs gap-1">
                    <Archive className="h-3.5 w-3.5" /> 归档
                  </Button>
                  <Button size="sm" variant="destructive" className="h-8 rounded-xl text-xs gap-1">
                    <Trash2 className="h-3.5 w-3.5" /> 批量删除
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* 3. Kanban (任务看板) & Agenda (日程卡片) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Kanban */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Kanban · 任务看板卡片</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">多列状态</Badge>
              </div>
              <span className="text-xs text-muted-foreground font-mono">HeroUI Kanban</span>
            </div>
            <CardDescription className="text-xs">支持按优先级色彩区分、进度胶囊与负责人头像指示</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {/* Column 1: 进行中 */}
              <div className="rounded-xl border bg-muted/10 p-3 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-muted-foreground pb-1">
                  <span>进行中 (In Progress)</span>
                  <Badge className="bg-pink-500/10 text-pink-500 text-[10px] px-1.5 py-0">2</Badge>
                </div>
                <div className="p-3 rounded-xl border bg-card/80 shadow-xs space-y-2 hover:border-pink-500/40 transition-all cursor-pointer">
                  <Badge className="bg-pink-500 text-white text-[9px] py-0 px-1.5">高优先级</Badge>
                  <p className="text-xs font-semibold">重构 AI 提示词与思考链组件</p>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 今日截止</span>
                    <div className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-[9px]">A</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl border bg-card/80 shadow-xs space-y-2 hover:border-pink-500/40 transition-all cursor-pointer">
                  <Badge variant="outline" className="text-[9px] py-0 px-1.5">优化</Badge>
                  <p className="text-xs font-semibold">Charts 渲染性能分析与双缓冲</p>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> 2天后</span>
                    <div className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-[9px]">L</div>
                  </div>
                </div>
              </div>

              {/* Column 2: 已完成 */}
              <div className="rounded-xl border bg-muted/10 p-3 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-muted-foreground pb-1">
                  <span>已完成 (Done)</span>
                  <Badge className="bg-emerald-500/10 text-emerald-500 text-[10px] px-1.5 py-0">1</Badge>
                </div>
                <div className="p-3 rounded-xl border bg-card/80 shadow-xs space-y-2 hover:border-emerald-500/40 transition-all cursor-pointer opacity-80">
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-[9px] py-0 px-1.5">已上线</Badge>
                  <p className="text-xs font-semibold line-through text-muted-foreground">大圆角 2xl 全局设计规范制定</p>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 className="h-3 w-3" /> 校验通过</span>
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[9px]">✓</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agenda & Timeline */}
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-base font-bold">Agenda & Timeline · 议程日程与时间线</CardTitle>
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">时间流</Badge>
              </div>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </div>
            <CardDescription className="text-xs">按时间顺序组织的日程会议卡片与版本变更时间线</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative border-l pl-4 ml-2 space-y-4 text-xs">
              {/* Event 1 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-pink-500 ring-4 ring-background" />
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">10:00 - 11:30 AM</span>
                  <Badge className="bg-pink-500/10 text-pink-500 text-[9px] py-0">进行中</Badge>
                </div>
                <p className="font-semibold text-sm mt-1">HeroUI Pro 全量生态组件发布对齐会</p>
                <p className="text-muted-foreground mt-0.5">参会人: 全体设计系统与前端工程架构团队</p>
              </div>

              {/* Event 2 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-background" />
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">02:00 - 03:00 PM</span>
                  <Badge variant="outline" className="text-[9px] py-0">计划中</Badge>
                </div>
                <p className="font-semibold text-sm mt-1">AI Agent 交互协议与 Prompt Input 架构评审</p>
                <p className="text-muted-foreground mt-0.5">针对流式思考链展开、Tool 状态机进行深度推演</p>
              </div>

              {/* Event 3 */}
              <div className="relative">
                <div className="absolute -left-[21px] top-0.5 w-3 h-3 rounded-full bg-muted-foreground/30 ring-4 ring-background" />
                <div className="flex items-center gap-2">
                  <span className="font-bold text-muted-foreground">04:30 PM</span>
                  <Badge variant="outline" className="text-[9px] py-0">待启动</Badge>
                </div>
                <p className="font-semibold text-sm mt-1 text-muted-foreground">自动化 E2E 渲染流水线跑批与 GitHub Release</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 4. Empty State & Floating TOC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Empty State */}
        <Card className="rounded-2xl border border-dashed bg-card/40 p-8 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center mb-3">
            <LayoutGrid className="h-6 w-6" />
          </div>
          <h3 className="font-bold text-base">Empty State · 优雅空状态</h3>
          <p className="text-xs text-muted-foreground max-w-xs mt-1">
            当前筛选条件下暂无更多业务数据，点击下方按钮重置筛选器或创建新项目。
          </p>
          <Button size="sm" className="mt-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-white text-xs">
            立即创建新条目
          </Button>
        </Card>

        {/* Floating TOC */}
        <Card className="rounded-2xl border bg-card/60 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ListFilter className="h-4 w-4 text-purple-500" />
              <h3 className="font-bold text-base">Floating TOC · 悬浮目录部件</h3>
            </div>
            <Badge variant="secondary" className="text-[10px]">Doc Navigator</Badge>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 font-semibold border-l-2 border-purple-500">
              1. Holo Card 与 KPI 指标群设计
            </div>
            <div className="p-2 rounded-lg hover:bg-muted text-muted-foreground pl-4 transition-colors cursor-pointer">
              2. 可折叠现代文件层级树 (File Tree)
            </div>
            <div className="p-2 rounded-lg hover:bg-muted text-muted-foreground pl-4 transition-colors cursor-pointer">
              3. 悬浮胶囊批量操作栏 (Action Bar)
            </div>
            <div className="p-2 rounded-lg hover:bg-muted text-muted-foreground pl-4 transition-colors cursor-pointer">
              4. 任务状态看板 (Kanban) 与 时间流
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
