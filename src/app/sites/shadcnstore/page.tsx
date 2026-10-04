"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag, ArrowRight, ExternalLink, Tag, Check, Star,
  LayoutGrid, Layers, ShieldCheck, Sparkles, Table, Lock
} from "lucide-react";

export default function ShadcnStoreOverview() {
  const [cartCount, setCartCount] = useState(1);
  const [filterCat, setFilterCat] = useState<"All" | "Marketing" | "Ecommerce" | "Application">("All");

  const categories = [
    { title: "营销区块 (Marketing)", count: "19 类", href: "/sites/shadcnstore/sections", desc: "Hero、定价表、特性矩阵、Bento、FAQ、客户评价等", icon: <Layers className="h-5 w-5 text-blue-500" /> },
    { title: "电商套件 (E-commerce)", count: "9 类", href: "/sites/shadcnstore/ecommerce", desc: "商品橱窗、购物车抽屉、结账表单、属性筛选与评价", icon: <ShoppingBag className="h-5 w-5 text-emerald-500" /> },
    { title: "应用后台 (Application)", count: "11 类", href: "/sites/shadcnstore/application", desc: "DataTables、OTP 验证、登录注册、日历与容灾错误卡", icon: <Table className="h-5 w-5 text-purple-500" /> },
  ];

  // 官方全部 39 个细分类目
  const all39Blocks = [
    // Marketing 19
    { name: "Navbars 导航栏", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Hero Sections 首屏", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Features 特性矩阵", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Testimonials 好评", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "FAQs 常见问题", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Pricing 价格表", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Teams 团队矩阵", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Footers 全局页脚", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "CTA 行动号召", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Statistics 统计指标", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Blogs 博客卡片", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Logo Cloud 标志墙", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Bento Grids 便当盒", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Contact 联系表单", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Listings 列表清单", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Banners 通告横幅", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Product Updates 更新", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Comparison 对比表", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    { name: "Waitlist 候补清单", cat: "Marketing", href: "/sites/shadcnstore/sections" },
    // E-commerce 9
    { name: "Storefront Hero 商城首屏", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Product Overview 详情", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Product List 商品流", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Categories 品类网格", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Shopping Carts 购物车", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Category Filters 侧栏筛选", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Checkout Forms 结算表单", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Reviews & Ratings 评价", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    { name: "Order History 历史订单", cat: "Ecommerce", href: "/sites/shadcnstore/ecommerce" },
    // Application 11
    { name: "App Shells 框架布局", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Apps 业务应用", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Charts 仪表盘图表", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "DataTables 数据表格", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Widgets 监控部件", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Login Forms 登录表单", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Signup Forms 注册表单", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Forgot Password 找回密码", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Error Pages 错误缺省", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Calendar 日程排期", cat: "Application", href: "/sites/shadcnstore/application" },
    { name: "Verification 验证码", cat: "Application", href: "/sites/shadcnstore/application" },
  ];

  const filteredBlocks = filterCat === "All" ? all39Blocks : all39Blocks.filter((b) => b.cat === filterCat);

  return (
    <div className="space-y-12">
      {/* 头部介绍 */}
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">官方全量 39 大门类收录</Badge>
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
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnStore · 全量生产级 UI Blocks 生态库</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          完整对齐官方 39 个细分业务门类（19 个 Marketing、9 个 E-commerce、11 个 Application）。
          下方直接嵌入核心商品橱窗与加购互动，无需跳转直接体验。
        </p>
      </div>

      {/* 嵌入组件 1: 代表性独立站商品卡与加购交互 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs overflow-hidden">
          <div className="h-44 bg-gradient-to-tr from-muted/50 via-blue-500/10 to-indigo-500/10 flex items-center justify-center relative">
            <Badge className="absolute top-3 left-3 bg-blue-500 text-white text-[10px]">精选推荐</Badge>
            <div className="w-20 h-20 rounded-2xl bg-card border shadow-xl flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Studio Wireless Pro 耳机</CardTitle>
              <span className="text-base font-black font-mono text-foreground">$299.00</span>
            </div>
            <CardDescription className="text-xs">主动降噪与高保真空间音频系统</CardDescription>
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

        {/* 嵌入组件 2: 营销保障与极速发货特性卡 */}
        <div className="p-6 rounded-2xl border bg-gradient-to-br from-card via-blue-500/5 to-card shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-blue-500" />
              <h3 className="font-bold text-sm">生产级独立站结算保障</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              即刻结算享受全球包邮与 30 天无理由退换货保障，完美适配 Stripe、Shopify 与 LemonSqueezy 后端。
            </p>
          </div>

          <div className="pt-4 border-t space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <Check className="h-4 w-4" /> 全球 48 小时极速冷链配送
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <Check className="h-4 w-4" /> 256 位银行级 SSL 加密交易网关
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <Check className="h-4 w-4" /> 支持 Apple Pay 与 Google Pay 一键付
            </div>
          </div>
        </div>
      </div>

      {/* 39 门类全景分类直达标签云 */}
      <div className="rounded-2xl border bg-card/40 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-base">ShadcnStore 官方 39 大垂直 Blocks 清单</h3>
            <p className="text-xs text-muted-foreground mt-0.5">按官方分类逐项对齐收录</p>
          </div>
          <div className="flex items-center gap-1.5">
            {(["All", "Marketing", "Ecommerce", "Application"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCat(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  filterCat === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-card border hover:bg-muted text-muted-foreground"
                }`}
              >
                {cat === "All" ? "全部 39 类" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {filteredBlocks.map((b, idx) => (
            <Link key={idx} href={b.href}>
              <div className="px-3 py-1.5 rounded-xl border bg-card/80 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all text-xs flex items-center gap-1.5 cursor-pointer">
                <span className="font-medium text-foreground">{b.name}</span>
                <span className="text-[10px] text-muted-foreground font-mono bg-muted/60 px-1.5 py-0.2 rounded-md">
                  {b.cat}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
