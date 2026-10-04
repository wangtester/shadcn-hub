"use client";

import Link from "next/link";
import { Layers, Star, ExternalLink, Activity, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20 py-8 px-4 md:px-8 text-xs text-muted-foreground mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 左侧：项目标识与理念 */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-xs">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-semibold text-foreground tracking-tight">shadcn-hub</span>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                100% 严格实装
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              收录 64 款官方组件 + 10 大生态扩展库 + 24+ 款设计师工具 · Next.js 16 & @base-ui/react
            </p>
          </div>
        </div>

        {/* 中间：访问人数统计 (Live Visitor Analytics) */}
        <div className="flex items-center gap-3 bg-background border rounded-lg px-3 py-1.5 shadow-2xs">
          <div className="flex items-center gap-1.5 text-foreground font-medium">
            <Users className="h-3.5 w-3.5 text-indigo-500" />
            <span>访问量统计</span>
          </div>
          <span className="text-muted-foreground/40">|</span>
          {/* 实时访客计数徽标 */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.visitorbadge.io/api/visitors?path=wangtester.shadcn-hub&label=Visits&labelColor=%2327272a&countColor=%236366f1&style=flat-square"
              alt="Site Visitor Counter"
              className="h-4 rounded"
            />
          </div>
        </div>

        {/* 右侧：链接与版权 */}
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href="https://github.com/wangtester/shadcn-hub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
            <span>Star on GitHub</span>
          </a>
          <a
            href="https://github.com/wangtester/shadcn-hub/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ShieldCheck className="h-3 w-3" />
            <span>MIT License</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
