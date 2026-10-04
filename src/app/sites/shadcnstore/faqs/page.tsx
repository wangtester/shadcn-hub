"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ShadcnStoreFaqsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const faqs = [
    {
      q: "ShadcnStore 与普通的组件库有什么本质区别？",
      a: "ShadcnStore 提供的是 Block（完整页面区块），而不是单一的基础原子组件（例如一个按钮）。一个 Block 是由多个原子组件组合而成的业务级完整单元（如整个定价方案表、多图商品橱窗）。此外，代码直接归您所有，无需受制于第三方 NPM 包的强制更新和样式覆盖问题。",
    },
    {
      q: "如何使用 shadcn CLI 快速安装这些 Blocks？",
      a: "每个 Block 均拥有独立的 CLI 注册表命令，例如运行 `npx shadcn@latest add @shadcnstore/hero-section-1` 即可自动将该 Block 及其依赖的底层原子组件（Button、Card、Badge 等）一键注入到您的项目源码中。",
    },
    {
      q: "这些 Blocks 是否支持 Tailwind CSS v4 与 React 19？",
      a: "完全支持。所有代码均已按照 Tailwind CSS v4 的新语法标准与 React 19 的全新客户端/服务端组件约定进行深度测试，完全消除了旧版依赖警告。",
    },
    {
      q: "商业独立站可以使用这些 Blocks 进行商用开发吗？",
      a: "可以。所有开源发布的 Blocks 均遵循宽松的商业许可协议，您可以直接将其整合到客户交付项目、SaaS 软件或独立自营电商中，无需额外授权手续。",
    },
  ];

  const filteredFaqs = faqs.filter((f) => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-12">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">Marketing Blocks</Badge>
          <span className="text-xs text-muted-foreground font-mono">FAQs & Knowledge Base</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          FAQs · 常见问题解答与支持中心区块
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          直观的问答折叠交互，集成模糊搜索与支持渠道入口，提升落地页转化率。
        </p>
      </div>

      {/* 搜索过滤框 */}
      <div className="max-w-md mx-auto relative">
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索您关心的技术或授权问题..."
          className="h-10 pl-9 rounded-xl text-xs"
        />
      </div>

      {/* FAQ 手风琴列表 */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border bg-card/60 overflow-hidden shadow-xs transition-all duration-200"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-xs md:text-sm text-foreground hover:bg-muted/30 transition-colors"
              >
                <span>{faq.q}</span>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-blue-500 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />
                )}
              </button>
              {isOpen && (
                <div className="p-5 pt-0 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40 mt-1">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 底部支持渠道 */}
      <Card className="rounded-2xl border bg-gradient-to-r from-card to-blue-500/5 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1">
          <h4 className="font-bold text-sm">还有其他疑问？</h4>
          <p className="text-xs text-muted-foreground">我们的核心工程团队会在 2 小时内为您提供技术解答。</p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" className="rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <span>联系技术客服</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
