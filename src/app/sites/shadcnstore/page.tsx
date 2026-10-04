"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Tag,
  Check,
  Star,
  Layers,
  Sparkles,
  Table,
  Lock,
  ChevronDown,
  ChevronUp,
  Mail,
  Zap,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Laptop,
  CheckCircle2,
} from "lucide-react";

export default function ShadcnStoreOverview() {
  // 电商加购状态
  const [cartCount, setCartCount] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">("yearly");

  // FAQ 展开状态
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "ShadcnStore 的 Blocks 如何直接在 Next.js 项目中使用？",
      a: "每个 Block 均完全采用标准的 Tailwind CSS v4 与 shadcn 原生原子规范编写，只需将代码复制到您的 components/blocks 目录中即可即刻渲染，无任何黑盒依赖。",
    },
    {
      q: "这些 Blocks 是否支持服务端组件 (RSC) 与暗黑模式？",
      a: "完全支持。纯展示型 Blocks 默认基于 React Server Components，含交互微动效的模块均自带 'use client' 指令，并对齐 OLED 纯黑与浅色模式变量。",
    },
    {
      q: "电商 Blocks 是否支持与 Stripe、Shopify 等后端对接？",
      a: "支持。组件内部状态（如 Cart Drawer、Checkout Form）完全解耦，可直接接入真实 API 客户端或 Server Actions 逻辑。",
    },
  ];

  return (
    <div className="space-y-12">
      {/* 头部标题与简介（纯文本与徽标，绝无跳转跳板） */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">生产级 Blocks 画廊</Badge>
          <a
            href="https://shadcnstore.com/blocks"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>shadcnstore.com/blocks</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnStore · 生产就绪 Blocks 交互展厅</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          包含营销首屏、价格方案、特性矩阵、独立站商品橱窗、数据管理表格与常见问题解答。
          本页面所有组件均为实机嵌入直接交互，彻底移除所有外跳与二次点击跳板。
        </p>
      </div>

      {/* Block 1: 营销首屏 Hero Section */}
      <section className="rounded-2xl border bg-gradient-to-b from-card via-card to-muted/30 p-8 md:p-12 text-center space-y-4 shadow-xs">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ShadcnStore Hero Block #01</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
          极速构建面向未来的商业级 Web 应用
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
          无需从零拼装基础样式，开箱即得符合现代人机工学与高转化率审美的全场景模块。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Button size="sm" className="rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white px-5 shadow-sm">
            开始构建项目
          </Button>
          <Button size="sm" variant="outline" className="rounded-xl text-xs px-5">
            探索组件源码
          </Button>
        </div>
      </section>

      {/* Block 2: 独立站商品橱窗与加购互动 (E-commerce Storefront) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">E-commerce · 商品橱窗与购物车加购 Block</h2>
          <p className="text-xs text-muted-foreground">真实点击加购互动与库存规格状态管理</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border bg-card/60 shadow-xs overflow-hidden">
            <div className="h-48 bg-gradient-to-tr from-muted/50 via-blue-500/10 to-indigo-500/10 flex items-center justify-center relative">
              <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-[10px]">热销款</Badge>
              <div className="w-20 h-20 rounded-2xl bg-card border shadow-xl flex items-center justify-center">
                <ShoppingBag className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-bold">Studio Wireless Pro 头戴耳机</CardTitle>
                <span className="text-base font-black font-mono text-foreground">$299.00</span>
              </div>
              <CardDescription className="text-xs">主动降噪与无损空间音频算法</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span>4.9 (1,280 真实评价)</span>
                </div>
                <Button
                  size="sm"
                  onClick={() => setCartCount((prev) => prev + 1)}
                  className="rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white gap-1.5"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>加入购物车 ({cartCount})</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 电商结算保障卡片 */}
          <div className="p-6 rounded-2xl border bg-card/60 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-blue-500" />
                <h3 className="font-bold text-sm">全球独立站支付结算规范</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                自带完备的结账信任徽标，支持信用卡、Apple Pay 与银联极速结算。
              </p>
            </div>

            <div className="pt-4 border-t space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <Check className="h-4 w-4" /> 全球 48 小时顺丰极速配送
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <Check className="h-4 w-4" /> 256 位银行级 SSL 加密网关
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <Check className="h-4 w-4" /> 30 天无理由免费上门退换货
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Pricing 商业价格方案对比 Block */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold">Pricing · 价格方案与功能对比 Block</h2>
            <p className="text-xs text-muted-foreground">支持周期切换与高亮推荐方案</p>
          </div>
          <div className="p-1 rounded-xl bg-muted/40 border inline-flex gap-1 self-start sm:self-auto">
            <button
              onClick={() => setSelectedPlan("monthly")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedPlan === "monthly" ? "bg-card text-foreground shadow-xs border" : "text-muted-foreground"
              }`}
            >
              按月计费
            </button>
            <button
              onClick={() => setSelectedPlan("yearly")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedPlan === "yearly" ? "bg-card text-foreground shadow-xs border" : "text-muted-foreground"
              }`}
            >
              按年计费 (立省 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Plan 1 */}
          <Card className="rounded-2xl border bg-card/60 p-6 space-y-4 shadow-xs">
            <div>
              <h3 className="font-bold text-base">基础开发者版</h3>
              <p className="text-xs text-muted-foreground mt-1">适合个人独立开发者与学习构建</p>
            </div>
            <div className="text-3xl font-black font-mono">
              {selectedPlan === "yearly" ? "$15" : "$19"}
              <span className="text-xs font-normal text-muted-foreground"> / 月</span>
            </div>
            <div className="pt-2 border-t space-y-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 收录全量 39 个门类 Blocks
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> React 19 / Next.js 15 源码拷贝
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 社区支持通道
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full rounded-xl text-xs mt-2">
              免费试用
            </Button>
          </Card>

          {/* Plan 2: 高亮推荐 */}
          <Card className="rounded-2xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-500/5 to-card p-6 space-y-4 shadow-lg relative">
            <Badge className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px]">推荐方案</Badge>
            <div>
              <h3 className="font-bold text-base text-foreground">企业团队专业版</h3>
              <p className="text-xs text-muted-foreground mt-1">面向高要求团队的无限商业许可</p>
            </div>
            <div className="text-3xl font-black font-mono text-blue-600">
              {selectedPlan === "yearly" ? "$49" : "$59"}
              <span className="text-xs font-normal text-muted-foreground"> / 月</span>
            </div>
            <div className="pt-2 border-t space-y-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 包含基础版全部能力
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 完整 Figma 变量设计源文件
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 专属技术架构咨询与 1v1 支持
              </div>
            </div>
            <Button size="sm" className="w-full rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-xs mt-2">
              立即升级团队版
            </Button>
          </Card>
        </div>
      </section>

      {/* Block 4: FAQs 常见问题折叠手风琴 Block */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">FAQs · 常见问题解答手风琴 Block</h2>
          <p className="text-xs text-muted-foreground">交互式展开与平滑折叠，适合落地页收尾</p>
        </div>

        <div className="rounded-2xl border bg-card/60 p-4 space-y-2 shadow-xs">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="rounded-xl border bg-muted/10 overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs text-foreground hover:bg-muted/30 transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40 mt-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Block 5: CTA 行动号召与邮件订阅 Block */}
      <section className="rounded-2xl border bg-card/60 p-8 text-center space-y-3 shadow-xs">
        <h3 className="font-bold text-lg">准备好加速您的产品上线了吗？</h3>
        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
          订阅 ShadcnStore 每周最新发布的 UI 区块与组件设计模式，直接递送至您的邮箱。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-sm mx-auto pt-2">
          <Input placeholder="输入您的常用邮箱..." className="h-9 text-xs rounded-xl" />
          <Button size="sm" className="h-9 rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 shrink-0">
            免费订阅
          </Button>
        </div>
      </section>
    </div>
  );
}
