"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  REGISTRY_DATA,
  SITES_METADATA,
  ResourceCategory,
  RegistryItem,
} from "@/data/components-registry";
import { RegistryLivePreview } from "@/components/registry-live-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ExternalLink,
  Layers,
  Sparkles,
  Box,
  Layout,
  Filter,
  CheckCircle2,
  Clock,
  RotateCcw,
  SlidersHorizontal,
  Compass,
  ArrowUpRight,
  Grid as GridIcon,
  Tag,
} from "lucide-react";

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [selectedSite, setSelectedSite] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredItems = useMemo(() => {
    return REGISTRY_DATA.filter((item) => {
      // 1. Site filter
      if (selectedSite !== "all" && item.siteId !== selectedSite) {
        return false;
      }
      // 2. Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // 3. Status filter
      if (selectedStatus !== "all" && item.status !== selectedStatus) {
        return false;
      }
      // 4. Search query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchTitle = item.name.toLowerCase().includes(q);
        const matchCn = item.nameCn.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchSite = item.siteName.toLowerCase().includes(q);
        const matchTags = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchCn && !matchDesc && !matchSite && !matchTags) {
          return false;
        }
      }
      return true;
    });
  }, [search, selectedSite, selectedCategory, selectedStatus]);

  const resetFilters = () => {
    setSearch("");
    setSelectedSite("all");
    setSelectedCategory("all");
    setSelectedStatus("all");
  };

  const categoryStats = useMemo(() => {
    return {
      all: REGISTRY_DATA.length,
      component: REGISTRY_DATA.filter((i) => i.category === "component").length,
      block: REGISTRY_DATA.filter((i) => i.category === "block").length,
      template: REGISTRY_DATA.filter((i) => i.category === "template").length,
    };
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-7xl space-y-8">
      {/* 顶部标题区 */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-mono font-medium">
            Live Component & Block Gallery
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            28 大源站全景覆盖 · 100% 原地交互实机渲染
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
              全景组件与区块原生画廊
            </h1>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-3xl leading-relaxed">
              汇集 28 家现代顶尖 UI 资源库的原子组件（Component）、复合区块（Block）与整页模板（Template）。
              所有资源均直接在卡片内以 React 交互式组件原地运行，并在右上角配备源站具体组件页面的直达外链。
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground shrink-0 bg-muted/40 p-2 rounded-xl border">
            <div className="text-center px-3 border-r">
              <div className="text-base font-bold text-foreground">{SITES_METADATA.length}</div>
              <div className="text-[10px]">来源站点</div>
            </div>
            <div className="text-center px-3 border-r">
              <div className="text-base font-bold text-primary">{REGISTRY_DATA.length}</div>
              <div className="text-[10px]">原地收录</div>
            </div>
            <div className="text-center px-3">
              <div className="text-base font-bold text-emerald-500">100%</div>
              <div className="text-[10px]">直达外链</div>
            </div>
          </div>
        </div>
      </section>

      {/* 综合筛选与搜索控制栏 */}
      <section className="p-4 md:p-6 rounded-2xl border bg-card/60 backdrop-blur-md space-y-4 shadow-xs">
        {/* 第一行：搜索框与分类标签 */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索组件名称、中文名、技术标签或站点 (如: Dock, 2FA, Kibo, 跑马灯)..."
              className="pl-9 h-9 text-xs bg-background"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* 类别切换胶囊 */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/50 border text-xs">
            {[
              { id: "all", label: "全部形态", count: categoryStats.all, icon: <Layers className="h-3 w-3" /> },
              { id: "component", label: "原子组件", count: categoryStats.component, icon: <Box className="h-3 w-3 text-blue-500" /> },
              { id: "block", label: "复合区块", count: categoryStats.block, icon: <Layout className="h-3 w-3 text-indigo-500" /> },
              { id: "template", label: "页面模板", count: categoryStats.template, icon: <Sparkles className="h-3 w-3 text-purple-500" /> },
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded-full ${active ? "bg-muted font-mono" : "text-muted-foreground/60"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 第二行：28 大源站横向平铺筛选 */}
        <div className="space-y-2 pt-2 border-t border-border/40">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 font-medium">
              <Compass className="h-3.5 w-3.5 text-primary" /> 按来源站点筛选 (28 个源站)：
            </span>
            {(selectedSite !== "all" || selectedCategory !== "all" || search) && (
              <button
                onClick={resetFilters}
                className="text-xs text-primary hover:underline flex items-center gap-1 cursor-pointer font-mono"
              >
                <RotateCcw className="h-3 w-3" /> 重置筛选
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
            <button
              onClick={() => setSelectedSite("all")}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer ${
                selectedSite === "all"
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              全部站点 ({REGISTRY_DATA.length})
            </button>

            {SITES_METADATA.map((site) => {
              const isSelected = selectedSite === site.id;
              const count = REGISTRY_DATA.filter((i) => i.siteId === site.id).length;
              return (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono shrink-0 transition-all cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                  }`}
                >
                  <span>{site.name}</span>
                  <span className={`text-[10px] px-1 rounded-full ${isSelected ? "bg-white/20 text-white" : "text-muted-foreground/60"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 结果计数条 */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <div>
          找到 <span className="font-mono font-bold text-foreground">{filteredItems.length}</span> 个原地可交互组件与区块
          {selectedSite !== "all" && (
            <span> · 站点: <code className="text-primary font-mono">{selectedSite}</code></span>
          )}
          {selectedCategory !== "all" && (
            <span> · 类型: <code className="text-primary font-mono">{selectedCategory}</code></span>
          )}
        </div>
        <span className="font-mono text-[11px]">Live Preview Active</span>
      </div>

      {/* 原地渲染卡片网格 */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 border rounded-2xl bg-card/40 space-y-3">
          <p className="text-sm font-semibold text-foreground">没有找到匹配的组件或区块</p>
          <p className="text-xs text-muted-foreground">可尝试更换搜索关键词或重置筛选条件</p>
          <Button size="sm" variant="outline" onClick={resetFilters} className="text-xs">
            重置所有条件
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border bg-card/60 hover:bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* 卡片头部：站点 Badge + 类别 Badge + 原站外链直达 */}
              <div className="p-4 border-b bg-muted/20 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {/* 来源平台标识 */}
                    <Badge variant="secondary" className="text-[10px] font-mono font-medium px-2 py-0.5 bg-background shadow-xs">
                      {item.siteName}
                    </Badge>

                    {/* 资源分类标识 */}
                    <Badge
                      variant="outline"
                      className={`text-[10px] font-mono px-1.5 py-0.2 ${
                        item.category === "component"
                          ? "text-blue-500 border-blue-500/30 bg-blue-500/5"
                          : item.category === "block"
                          ? "text-indigo-500 border-indigo-500/30 bg-indigo-500/5"
                          : "text-purple-500 border-purple-500/30 bg-purple-500/5"
                      }`}
                    >
                      {item.category === "component" ? "Component" : item.category === "block" ? "Block" : "Template"}
                    </Badge>
                  </div>

                  {/* 核心规范：可直接点击在新标签页打开的原站具体组件详情页 URL */}
                  <a
                    href={item.originUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`在原站查看 ${item.name} (${item.originUrl})`}
                    className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-colors border border-transparent hover:border-primary/20 shrink-0 cursor-pointer"
                  >
                    <span>原站详情</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* 组件名称与中文说明 */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-muted-foreground font-medium">
                      {item.nameCn}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 卡片主体：100% 原地真实交互式 React 组件渲染 (Live Component Preview) */}
              <div className="p-4 flex-1 flex flex-col justify-center">
                <RegistryLivePreview componentKey={item.componentKey} />
              </div>

              {/* 卡片底部：技术标签与外链引导 */}
              <div className="px-4 py-2.5 bg-muted/10 border-t flex items-center justify-between text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1 overflow-hidden">
                  <Tag className="h-3 w-3 shrink-0 text-muted-foreground/60" />
                  <div className="flex gap-1 overflow-hidden">
                    {item.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-muted-foreground/80">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={item.originUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] hover:text-primary hover:underline flex items-center gap-0.5"
                >
                  <span>{item.siteId}</span>
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
