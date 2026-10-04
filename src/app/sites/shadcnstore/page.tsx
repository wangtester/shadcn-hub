"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, ExternalLink, Tag, Check, Star } from "lucide-react";

export default function ShadcnStoreOverview() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <div className="space-y-10">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">ShadcnStore 全生态</Badge>
          <a
            href="https://shadcnstore.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-muted-foreground hover:text-blue-500 transition-colors flex items-center gap-1 font-mono"
          >
            <span>shadcnstore.com</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnStore · 电商商城与多门类区块</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed text-sm">
          涵盖 39 个业务门类的生产就绪组件。下方直接嵌入代表性电商商品卡与购买交互，点击即刻体验，无需跳转。
        </p>
      </div>

      {/* 嵌入组件 1: 现代电商商品橱窗卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl border bg-card/60 shadow-xs overflow-hidden">
          <div className="h-44 bg-gradient-to-tr from-muted/50 via-blue-500/10 to-indigo-500/10 flex items-center justify-center relative">
            <Badge className="absolute top-3 left-3 bg-blue-500 text-white text-[10px]">热销款</Badge>
            <div className="w-20 h-20 rounded-2xl bg-card border shadow-xl flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold">Studio Wireless Pro 耳机</CardTitle>
              <span className="text-base font-black font-mono text-foreground">$299.00</span>
            </div>
            <CardDescription className="text-xs">主动降噪与高保真空间音频</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                <Star className="h-3.5 w-3.5 fill-current" />
                <span>4.9 (1,280 评价)</span>
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

        {/* 嵌入组件 2: 促销折扣横幅与保障卡 */}
        <div className="p-6 rounded-2xl border bg-gradient-to-br from-card via-blue-500/5 to-card shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-blue-500" />
              <h3 className="font-bold text-sm">限时专属促销优惠</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              即刻结算享受全球包邮与 30 天无理由退换货保障，完美契合 Stripe 与 Shopify 结账流。
            </p>
          </div>

          <div className="pt-4 border-t space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <Check className="h-4 w-4" /> 全球 48 小时极速顺丰冷链
            </div>
            <div className="flex items-center gap-2 text-emerald-600 font-medium">
              <Check className="h-4 w-4" /> 256 位银行级 SSL 加密交易
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
