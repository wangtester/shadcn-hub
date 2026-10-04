"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, HelpCircle } from "lucide-react";

export default function ShadcnStorePricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="space-y-12">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">Marketing Blocks</Badge>
          <span className="text-xs text-muted-foreground font-mono">Pricing Tables 商业方案</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Pricing · 定价方案与商业转化区块
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          专为 SaaS、电商插件与开发者工具打造的高转化定价表，包含周期切换与打勾矩阵。
        </p>
      </div>

      {/* 周期切换控制器 */}
      <div className="flex items-center justify-center gap-3">
        <span className={`text-xs font-semibold ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>按月计费</span>
        <button
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          className="w-12 h-6 rounded-full bg-muted border p-0.5 transition-colors relative"
        >
          <div
            className={`w-5 h-5 rounded-full bg-blue-600 shadow-sm transition-transform ${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
          <span>按年计费</span>
          <Badge className="bg-emerald-500/10 text-emerald-600 text-[10px] py-0">立省 25%</Badge>
        </span>
      </div>

      {/* 三列定价卡片矩阵 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <Card className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base">Starter 基础版</h3>
              <p className="text-xs text-muted-foreground mt-1">适用于个人开源项目与快速验证</p>
            </div>
            <div className="text-3xl font-black font-mono">
              $0
              <span className="text-xs font-normal text-muted-foreground"> / 永久免费</span>
            </div>
            <div className="pt-3 border-t space-y-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 基础核心 Blocks 源码拷贝
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> Tailwind CSS v4 原生语法
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 社区 GitHub 讨论区支持
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-full rounded-xl text-xs mt-6">
            免费使用
          </Button>
        </Card>

        {/* Pro Plan (高亮推荐) */}
        <Card className="rounded-2xl border-2 border-blue-600 bg-gradient-to-b from-blue-500/5 to-card p-6 flex flex-col justify-between shadow-xl relative">
          <Badge className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px]">最受欢迎</Badge>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base text-foreground">Pro 专业版</h3>
              <p className="text-xs text-muted-foreground mt-1">适用于商业独立站与创业团队</p>
            </div>
            <div className="text-3xl font-black font-mono text-blue-600">
              {billingCycle === "yearly" ? "$29" : "$39"}
              <span className="text-xs font-normal text-muted-foreground"> / 月</span>
            </div>
            <div className="pt-3 border-t space-y-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 包含 Starter 全部功能
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 全量 39 个细分门类 Blocks
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 商城 Storefront 与加购抽屉
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Check className="h-3.5 w-3.5 text-blue-600" /> 优先邮件与 Discord 快速响应
              </div>
            </div>
          </div>
          <Button size="sm" className="w-full rounded-xl text-xs bg-blue-600 hover:bg-blue-700 text-white shadow-md mt-6">
            立即升级 Pro
          </Button>
        </Card>

        {/* Enterprise Plan */}
        <Card className="rounded-2xl border bg-card/60 p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-base">Enterprise 旗舰版</h3>
              <p className="text-xs text-muted-foreground mt-1">适用于中大型企业与定制设计系统</p>
            </div>
            <div className="text-3xl font-black font-mono">
              {billingCycle === "yearly" ? "$99" : "$129"}
              <span className="text-xs font-normal text-muted-foreground"> / 月</span>
            </div>
            <div className="pt-3 border-t space-y-2 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 包含 Pro 全部特权
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 团队无限席位与商业授权
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 完整 Figma 变量设计工程文件
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-3.5 w-3.5 text-blue-500" /> 1v1 专属技术顾问与架构咨询
              </div>
            </div>
          </div>
          <Button size="sm" variant="outline" className="w-full rounded-xl text-xs mt-6">
            联系商务
          </Button>
        </Card>
      </div>
    </div>
  );
}
