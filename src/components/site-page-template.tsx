"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  SITES_METADATA,
  REGISTRY_DATA,
  RegistryItem,
  ResourceCategory,
} from "@/data/components-registry";
import { RegistryLivePreview } from "@/components/registry-live-preview";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  ArrowUpRight,
  Layers,
  Box,
  Layout,
  Sparkles,
  Search,
  Tag,
} from "lucide-react";
import { useI18n } from "@/context/i18n-context";

interface SitePageTemplateProps {
  siteId: string;
  customTitle?: string;
  customDesc?: string;
  children?: React.ReactNode;
}

export function SitePageTemplate({
  siteId,
  customTitle,
  customDesc,
  children,
}: SitePageTemplateProps) {
  const { isEn, t } = useI18n();
  const site = SITES_METADATA.find((s) => s.id === siteId);
  const items = useMemo(() => {
    return REGISTRY_DATA.filter((i) => i.siteId === siteId);
  }, [siteId]);

  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (categoryFilter !== "all" && item.category !== categoryFilter) {
        return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchCn = item.nameCn.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchTag = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchCn && !matchDesc && !matchTag) return false;
      }
      return true;
    });
  }, [items, categoryFilter, search]);

  if (!site) {
    return (
      <div className="container mx-auto px-4 py-16 text-center space-y-4">
        <Link href="/gallery" className={buttonVariants({ variant: "outline" })}>
          {t("template.back")}
        </Link>
      </div>
    );
  }

  const categoryCounts = {
    all: items.length,
    component: items.filter((i) => i.category === "component").length,
    block: items.filter((i) => i.category === "block").length,
    template: items.filter((i) => i.category === "template").length,
  };

  return (
    <div className="w-full space-y-8 py-2 md:py-4">
      {/* 顶部导航面包屑与站点来源外链 */}
      <div className="flex items-center justify-between gap-4 border-b pb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t("template.breadcrumbHome")}
          </Link>
          <span>/</span>
          <Link href="/gallery" className="hover:text-foreground transition-colors">
            {t("template.breadcrumbGallery")}
          </Link>
          <span>/</span>
          <span className="font-semibold text-foreground font-mono">{site.name}</span>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors border border-primary/20"
        >
          <span>{t("template.visitOfficial")}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* 站点 Hero 标头 */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className="bg-primary text-primary-foreground font-mono text-xs">
            {site.badge}
          </Badge>
          <Badge variant="outline" className="font-mono text-xs">
            {isEn ? `${items.length} Live Items` : `已收录 ${items.length} 个实机资源`}
          </Badge>
          <span className="text-xs text-muted-foreground font-mono">
            {site.url}
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-foreground">
          {customTitle || (isEn ? `${site.name} Components & Blocks Exhibition` : `${site.name} 组件与区块展厅`)}
        </h1>

        <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
          {customDesc || (isEn ? `${site.name} — All collected resources adapted with source code, 100% interactive live preview in cards.` : `${site.desc} · 全部收录资源已完成代码适配，支持卡片内原地实时交互渲染。`)}
        </p>
      </div>

      {/* 自定义扩展插槽内容 (如有) */}
      {children}

      {/* 筛选与搜索控制栏 */}
      <div className="p-4 rounded-xl border bg-card/60 backdrop-blur-md flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isEn ? `Search components in ${site.name}...` : `在 ${site.name} 中搜索组件...`}
            className="pl-9 h-8 text-xs bg-background"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* 类别筛选 */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/50 border text-xs">
          {[
            { id: "all", label: isEn ? "All" : "全部", count: categoryCounts.all, icon: <Layers className="h-3 w-3" /> },
            { id: "component", label: isEn ? "Components" : "组件", count: categoryCounts.component, icon: <Box className="h-3 w-3 text-blue-500" /> },
            { id: "block", label: isEn ? "Blocks" : "区块", count: categoryCounts.block, icon: <Layout className="h-3 w-3 text-indigo-500" /> },
            { id: "template", label: isEn ? "Templates" : "模板", count: categoryCounts.template, icon: <Sparkles className="h-3 w-3 text-purple-500" /> },
          ].map((tab) => {
            const active = categoryFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  active
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1 rounded-full ${active ? "bg-muted font-mono" : "text-muted-foreground/60"}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 原地实机交互预览网格 */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 border rounded-xl bg-card/40 space-y-2">
          <p className="text-xs text-muted-foreground">{t("template.empty")}</p>
          <Button size="sm" variant="ghost" onClick={() => { setSearch(""); setCategoryFilter("all"); }}>
            {t("template.clear")}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border bg-card/70 hover:bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* 卡片头部：站点 Badge + 类别 Badge + 核心：原站具体组件页面的直达外链 */}
              <div className="p-4 border-b bg-muted/20 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Badge variant="secondary" className="text-[10px] font-mono px-2 py-0.5 bg-background shadow-xs font-medium">
                      {item.siteName}
                    </Badge>
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
                      {item.category.toUpperCase()}
                    </Badge>
                  </div>

                  {/* 原站具体组件详情页可点击跳转外链 */}
                  <a
                    href={item.originUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={isEn ? `View ${item.name} on origin site (${item.originUrl})` : `在原站查看 ${item.name} (${item.originUrl})`}
                    className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-primary hover:bg-primary/10 px-2 py-1 rounded-md transition-colors border border-transparent hover:border-primary/20 shrink-0 cursor-pointer"
                  >
                    <span>{t("template.sourceDetails")}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-bold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[11px] text-muted-foreground font-medium">
                      {isEn ? "" : item.nameCn}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 卡片主体：100% 原地真实交互式 React 组件渲染 */}
              <div className="p-4 flex-1 flex flex-col justify-center">
                <RegistryLivePreview componentKey={item.componentKey} />
              </div>

              {/* 卡片底部：标签与原站链接 */}
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
