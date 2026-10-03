import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, LayoutGrid, Tag, Truck, Check } from "lucide-react";

const sectionsList = [
  "Navbars", "Hero Sections", "Features", "Testimonials", "FAQ Sections",
  "Pricing Tables", "Team Sections", "Footer Sections", "CTA Sections",
  "Stats Sections", "Blog Sections", "Logo Clouds", "Bento Grids", "Contact Sections"
];

export default function ShadcnStoreOverview() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-6">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/30">生产就绪生态</Badge>
          <span className="text-xs text-muted-foreground font-mono">https://shadcnstore.com</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">ShadcnStore 区块市场与电商生态</h1>
        <p className="text-muted-foreground mt-2 max-w-3xl leading-relaxed">
          ShadcnStore 汇聚了 269+ 个生产就绪的 UI 区块，覆盖 39 个细分业务门类。
          不仅包含完备的营销落地页 Blocks，还专项针对电商独立站提供完整的商品橱窗、购物车抽屉与结账漏斗。
        </p>
        <div className="flex gap-3 mt-4">
          <Link href="/sites/shadcnstore/sections">
            <Button size="sm">查看营销 Sections</Button>
          </Link>
          <Link href="/sites/shadcnstore/ecommerce">
            <Button size="sm" variant="outline">体验电商 Storefront</Button>
          </Link>
        </div>
      </div>

      {/* 指标数据 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">生产级 Blocks</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">269+</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">细分业务分类</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">39 类</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">开源免费区块</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">55 个</p>
        </div>
        <div className="p-4 rounded-xl border bg-card">
          <p className="text-xs text-muted-foreground">适配前端框架</p>
          <p className="text-3xl font-extrabold mt-1 text-primary">Next / Remix</p>
        </div>
      </div>

      {/* 39 门类展示 */}
      <div className="rounded-xl border bg-card p-6">
        <h3 className="text-base font-bold mb-3 flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-primary" />
          ShadcnStore 核心涵盖区块类目
        </h3>
        <div className="flex flex-wrap gap-2">
          {sectionsList.map((sec) => (
            <Badge key={sec} variant="secondary" className="text-xs py-1 px-2.5">
              {sec}
            </Badge>
          ))}
          <Badge variant="outline" className="text-xs text-muted-foreground">+ 其余 25 个专业门类</Badge>
        </div>
      </div>

      {/* 子页面入口 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link href="/sites/shadcnstore/sections" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base">营销区块展示 (Sections)</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Bento Grid、客户评价 Testimonial 卡片组、高频折叠 FAQ 问答、品牌合作 Logo 云
            </p>
          </div>
        </Link>

        <Link href="/sites/shadcnstore/ecommerce" className="block group">
          <div className="p-5 rounded-xl border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base">电商商城组件 (Storefront)</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              带折扣标签与快速加购的商品卡片、购物车滑出抽屉、多维度属性筛选侧边栏
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
