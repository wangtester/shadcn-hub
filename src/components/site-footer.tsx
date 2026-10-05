"use client";

import Link from "next/link";
import { Layers, Star, Users, ShieldCheck } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t bg-muted/20 py-8 px-4 md:px-8 text-xs text-muted-foreground mt-auto w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* 左侧：项目标识 */}
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs shadow-blue-500/20">
            <Layers className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground tracking-tight">shadcn-hub</span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {t("footer.badge")}
            </span>
          </div>
        </div>

        {/* 中间：访问人数统计 (Live Visitor Analytics) */}
        <div className="flex items-center gap-3 bg-background border rounded-lg px-3 py-1.5 shadow-2xs">
          <div className="flex items-center gap-1.5 text-foreground font-medium">
            <Users className="h-3.5 w-3.5 text-indigo-500" />
            <span>{t("footer.visitors")}</span>
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
            <span>{t("footer.star")}</span>
          </a>
          <a
            href="https://github.com/wangtester/shadcn-hub/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ShieldCheck className="h-3 w-3" />
            <span>{t("footer.license")}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
