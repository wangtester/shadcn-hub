"use client";

import React from "react";
import { useI18n } from "@/context/i18n-context";
import { cn } from "@/lib/utils";
import { Languages, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface LanguageToggleProps {
  className?: string;
  variant?: "pill" | "mobile" | "compact";
}

export function LanguageToggle({ className, variant = "pill" }: LanguageToggleProps) {
  const { locale, setLocale, toggleLocale, isEn } = useI18n();

  if (variant === "mobile") {
    return (
      <div className={cn("space-y-1.5", className)}>
        <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground px-1">
          <span className="flex items-center gap-1.5">
            <Languages className="h-3.5 w-3.5 text-indigo-500" />
            <span>{isEn ? "Language" : "界面语言"}</span>
          </span>
          <span className="text-[10px] font-mono text-muted-foreground/70">
            {isEn ? "Default: English" : "默认：英文"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-muted/60 border">
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={cn(
              "flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer",
              locale === "en"
                ? "bg-background text-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span>English</span>
            {locale === "en" && <Check className="h-3 w-3 text-primary" />}
          </button>
          <button
            type="button"
            onClick={() => setLocale("zh")}
            className={cn(
              "flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer",
              locale === "zh"
                ? "bg-background text-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span>简体中文</span>
            {locale === "zh" && <Check className="h-3 w-3 text-primary" />}
          </button>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <Tooltip>
        <TooltipTrigger
          type="button"
          onClick={toggleLocale}
          className={cn(
            "h-8 px-2.5 rounded-lg border bg-background/80 hover:bg-muted text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs",
            className
          )}
          aria-label={isEn ? "Switch to Chinese" : "Switch to English"}
        >
          <Languages className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-mono text-xs">{locale.toUpperCase()}</span>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-xs">
          {isEn ? "Switch to 简体中文" : "切换为 English"}
        </TooltipContent>
      </Tooltip>
    );
  }

  // Default: Designer Segmented Pill Switcher
  return (
    <div
      className={cn(
        "inline-flex items-center h-8 rounded-lg border bg-muted/40 p-0.5 text-xs select-none shadow-2xs transition-colors",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      <div className="pl-1.5 pr-0.5 text-muted-foreground/70 flex items-center">
        <Languages className="h-3.5 w-3.5" />
      </div>

      <button
        type="button"
        onClick={() => setLocale("en")}
        title="Switch to English (Default)"
        className={cn(
          "px-2 py-0.5 h-6 rounded-md font-semibold text-[11px] transition-all cursor-pointer flex items-center gap-1",
          locale === "en"
            ? "bg-background text-foreground shadow-2xs font-bold"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span>EN</span>
      </button>

      <span className="text-muted-foreground/30 text-[10px] px-0.5">/</span>

      <button
        type="button"
        onClick={() => setLocale("zh")}
        title="切换为简体中文"
        className={cn(
          "px-2 py-0.5 h-6 rounded-md font-semibold text-[11px] transition-all cursor-pointer flex items-center gap-1",
          locale === "zh"
            ? "bg-background text-foreground shadow-2xs font-bold"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <span>中</span>
      </button>
    </div>
  );
}
