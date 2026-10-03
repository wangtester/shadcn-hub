"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { ShoppingBag, Star, Heart, Trash2, ArrowRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  tag?: string;
  color: string;
}

const products: Product[] = [
  { id: 1, name: "极简人体工学机械键盘", category: "数码外设", price: 699, originalPrice: 899, rating: 4.9, reviews: 128, tag: "热销", color: "from-blue-500/20 to-indigo-500/20" },
  { id: 2, name: "主动降噪无线头戴耳机", category: "音频设备", price: 1299, originalPrice: 1599, rating: 4.8, reviews: 96, tag: "新品", color: "from-purple-500/20 to-pink-500/20" },
  { id: 3, name: "超宽曲面 4K 专业显示器", category: "显示设备", price: 3299, rating: 5.0, reviews: 64, color: "from-emerald-500/20 to-teal-500/20" },
  { id: 4, name: "哑光铝合金磁吸充电座", category: "数码配件", price: 299, originalPrice: 399, rating: 4.7, reviews: 210, tag: "特惠", color: "from-amber-500/20 to-orange-500/20" },
];

export default function ShadcnStoreEcommercePage() {
  const [cart, setCart] = useState<Product[]>([products[0], products[1]]);
  const [priceRange, setPriceRange] = useState<number[]>([1500]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          title="ShadcnStore · Ecommerce 电商组件套件"
          description="抓取自 shadcnstore.com 的电商商城系统：商品展示橱窗、购物车抽屉联动与属性筛选"
        />
        {/* 购物车入口抽屉 */}
        <Sheet>
          <SheetTrigger render={
            <Button className="gap-2 shrink-0 self-start sm:self-auto">
              <ShoppingBag className="h-4 w-4" />
              <span>我的购物车 ({cart.length})</span>
            </Button>
          } />
          <SheetContent className="w-full sm:max-w-md flex flex-col justify-between">
            <div>
              <SheetHeader>
                <SheetTitle>已选商品明细 ({cart.length})</SheetTitle>
                <SheetDescription>结算前可随意调整或移除商品</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-3">
                {cart.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">购物车暂无商品</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex items-center justify-between p-3 rounded-lg border bg-muted/20">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-xs text-muted-foreground">分类：{item.category}</p>
                        <p className="text-xs font-mono font-bold text-primary">¥{item.price}.00</p>
                      </div>
                      <Button
                        size="icon-xs"
                        variant="ghost"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <SheetFooter className="border-t pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center w-full text-base font-bold">
                  <span>总计结算：</span>
                  <span className="font-mono text-primary text-xl">¥{total}.00</span>
                </div>
                <Button className="w-full gap-2">前往安全结账 <ArrowRight className="h-4 w-4" /></Button>
              </SheetFooter>
            )}
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* 左侧筛选侧栏 */}
        <div className="space-y-6 p-4 rounded-xl border bg-card/50">
          <div>
            <h4 className="font-bold text-sm mb-3">商品垂直分类</h4>
            <div className="space-y-2">
              {["全部设备", "数码外设", "音频设备", "显示设备", "桌面配件"].map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox id={`cat-${cat}`} defaultChecked={cat === "全部设备"} />
                  <Label htmlFor={`cat-${cat}`} className="text-xs">{cat}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span>价格上限过滤</span>
              <span className="font-mono text-primary">¥{priceRange[0]}</span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={(val) => setPriceRange(Array.isArray(val) ? [...val] : [Number(val)])}
              max={5000}
              step={100}
            />
          </div>

          <div className="border-t pt-4">
            <h4 className="font-bold text-sm mb-3">特惠状态</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="filter-sale" defaultChecked />
                <Label htmlFor="filter-sale" className="text-xs">促销折扣商品</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="filter-stock" defaultChecked />
                <Label htmlFor="filter-stock" className="text-xs">仅显示有现货</Label>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧商品卡片网格 */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products.map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className={`h-40 bg-gradient-to-br ${item.color} relative flex items-center justify-center`}>
                  {item.tag && (
                    <Badge className="absolute top-3 left-3 text-[10px]">{item.tag}</Badge>
                  )}
                  <Button size="icon-xs" variant="ghost" className="absolute top-3 right-3 rounded-full bg-background/50 backdrop-blur">
                    <Heart className="h-3.5 w-3.5 text-muted-foreground" />
                  </Button>
                  <span className="text-xs font-medium text-foreground/70">[商品图片模型展示]</span>
                </div>
                <CardHeader className="p-4 pb-2">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.category}</p>
                  <h3 className="font-bold text-base mt-0.5 group-hover:text-primary transition-colors">{item.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-amber-500 mt-1">
                    <Star className="h-3.5 w-3.5 fill-amber-500" />
                    <span className="font-semibold text-foreground">{item.rating}</span>
                    <span className="text-muted-foreground">({item.reviews}人评价)</span>
                  </div>
                </CardHeader>
              </div>

              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold font-mono text-primary">¥{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through ml-1.5 font-mono">¥{item.originalPrice}</span>
                  )}
                </div>
                <Button size="sm" onClick={() => addToCart(item)} className="gap-1.5 text-xs">
                  <ShoppingBag className="h-3.5 w-3.5" /> 加购物车
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
