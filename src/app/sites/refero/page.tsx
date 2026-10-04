"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Sliders, ExternalLink, Check } from "lucide-react";

export default function ReferoOverview() {
  const [activeStyle, setActiveStyle] = useState("linear");

  const styles = [
    { id: "linear", name: "Linear 暗黑流光", border: "border-indigo-500/40", bg: "bg-zinc-950 text-white" },
    { id: "vercel", name: "Vercel 极简黑白", border: "border-zinc-800", bg: "bg-black text-white" },
    { id: "apple", name: "Apple 柔和微质感", border: "border-border/60", bg: "bg-card text-foreground" },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30">Refero 风格库</Badge>
          <a
            href="https://styles.refero.design"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-amber-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>styles.refero.design</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">Refero Styles · 网站风格库与 DESIGN.md 规范</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          提炼全球顶尖网站的视觉规则。下方直接嵌入主流设计风格切换器与 Design Tokens 调色板，即开即用。
        </p>
      </div>

      {/* 嵌入组件 1: 实时设计风格切换试验台 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">设计风格即时切换试验台</h2>
          <div className="flex gap-2">
            {styles.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStyle(s.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  activeStyle === s.id
                    ? "bg-amber-500 text-black border-amber-500 shadow-xs"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div className={`p-8 rounded-2xl border transition-all duration-300 ${styles.find((s) => s.id === activeStyle)?.border} ${styles.find((s) => s.id === activeStyle)?.bg}`}>
          <div className="max-w-md space-y-2">
            <Badge variant="outline" className="text-[10px]">
              {styles.find((s) => s.id === activeStyle)?.name}
            </Badge>
            <h3 className="text-xl font-bold">Design Engineering at Scale</h3>
            <p className="text-xs opacity-70 leading-relaxed">
              实时切换展示不同设计哲学下的组件质感：Linear 具有柔和细描边、Vercel 强调高对比度排版、Apple 注重大圆角与物理阴影。
            </p>
          </div>
        </div>
      </div>

      {/* 嵌入组件 2: Design Tokens 色彩与圆角模度 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">Tokens 8-Point 网格间距模度</CardTitle>
            <CardDescription className="text-xs">标准化 4px、8px、16px、24px、32px 模数阶梯</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {[4, 8, 16, 24].map((spacing) => (
              <div key={spacing} className="flex items-center gap-3 text-xs">
                <span className="w-12 text-muted-foreground font-mono">{spacing}px</span>
                <div className="h-4 bg-amber-500/20 border border-amber-500/40 rounded" style={{ width: `${spacing * 8}px` }} />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl border bg-card/60 shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold">Tokens 圆角曲率规范阶梯</CardTitle>
            <CardDescription className="text-xs">从尖锐直角到超大 2xl 现代化曲率</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            {["rounded-none", "rounded-md", "rounded-xl", "rounded-2xl"].map((r, i) => (
              <div key={i} className={`w-16 h-16 border bg-muted/20 flex items-center justify-center text-[10px] font-mono text-muted-foreground ${r}`}>
                {r.replace("rounded-", "")}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
