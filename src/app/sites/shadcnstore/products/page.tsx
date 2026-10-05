"use client";

import React, { useState } from "react";
import { 
  ShoppingBag, Star, Heart, Share2, Check, ArrowRight, 
  Sparkles, Filter, ChevronDown, Eye, ShieldCheck, Truck, RotateCcw
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Minimalist Ergonomic Desk Chair",
    category: "Office Furniture",
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviews: 128,
    tag: "Best Seller",
    colors: ["#1e293b", "#e2e8f0", "#d97706"],
    image: "🪑",
    stock: "In Stock (12 left)",
  },
  {
    id: 2,
    name: "Wireless Active Noise Cancelling Headphones",
    category: "Audio & Sound",
    price: 289,
    originalPrice: 329,
    rating: 4.8,
    reviews: 256,
    tag: "New Release",
    colors: ["#0f172a", "#f1f5f9"],
    image: "🎧",
    stock: "In Stock",
  },
  {
    id: 3,
    name: "Precision Anodized Aluminum Mechanical Keyboard",
    category: "Peripherals",
    price: 199,
    originalPrice: 229,
    rating: 4.95,
    reviews: 89,
    tag: "Limited Edition",
    colors: ["#334155", "#94a3b8", "#10b981"],
    image: "⌨️",
    stock: "Only 4 left",
  },
  {
    id: 4,
    name: "Ultra-Fast Magnetic GaN Charging Dock 100W",
    category: "Accessories",
    price: 89,
    originalPrice: 109,
    rating: 4.7,
    reviews: 412,
    tag: "Hot Deal",
    colors: ["#0f172a", "#ffffff"],
    image: "⚡",
    stock: "In Stock",
  },
];

export default function ShadcnStoreProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState<Record<number, number>>({
    1: 0, 2: 0, 3: 0, 4: 0,
  });
  const [wishlist, setWishlist] = useState<number[]>([2]);
  const [cartCount, setCartCount] = useState(2);
  const [addedItem, setAddedItem] = useState<number | null>(null);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (id: number) => {
    setCartCount(c => c + 1);
    setAddedItem(id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 头部说明 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Ecommerce / Product Blocks
            </Badge>
            <span className="text-xs text-muted-foreground">生产级电商区块</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">商品橱窗与规格交互</h1>
          <p className="text-sm text-muted-foreground mt-1">
            包含高转化商品详情卡片、网格过滤器、多色规格选择与快速加购反馈交互。
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-xs font-medium">
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span>购物车：{cartCount} 件</span>
          </div>
        </div>
      </div>

      {/* Block 1: 筛选与商品网格 */}
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            {["All", "Office Furniture", "Audio & Sound", "Peripherals", "Accessories"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20 shadow-2xs"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>排序: 综合推荐</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-border/80 bg-card overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-4 relative">
                {/* 标签与收藏 */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5">
                    {item.tag}
                  </Badge>
                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className="p-1.5 rounded-full hover:bg-muted text-muted-foreground transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(item.id)
                          ? "fill-rose-500 text-rose-500"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                {/* 商品大图展示位 */}
                <div className="h-44 rounded-xl bg-gradient-to-b from-muted/30 to-muted/80 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {item.image}
                </div>

                {/* 规格颜色切换 */}
                <div className="flex items-center gap-1.5 mt-4">
                  {item.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(prev => ({ ...prev, [item.id]: idx }))}
                      style={{ backgroundColor: color }}
                      className={`w-4 h-4 rounded-full border transition-all ${
                        selectedColor[item.id] === idx
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                          : "border-border/60 hover:opacity-80"
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-muted-foreground ml-auto">{item.stock}</span>
                </div>

                {/* 商品名称与分类 */}
                <div className="mt-3">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mt-0.5 line-clamp-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* 评分 */}
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                  </div>
                  <span className="text-xs font-semibold">{item.rating}</span>
                  <span className="text-[11px] text-muted-foreground">({item.reviews})</span>
                </div>
              </div>

              {/* 价格与加购 */}
              <div className="p-4 pt-0 border-t border-border/40 mt-3 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black tracking-tight text-foreground">
                      ${item.price}
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      ${item.originalPrice}
                    </span>
                  </div>
                </div>

                <Button
                  size="sm"
                  onClick={() => handleAddToCart(item.id)}
                  className={`text-xs gap-1.5 transition-all ${
                    addedItem === item.id
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : ""
                  }`}
                >
                  {addedItem === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> 已加入
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5" /> 加购
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Block 2: 完整电商详情横幅卡 (Product Detail Showcase) */}
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-muted/40 rounded-2xl border border-border/60">
            <span className="text-8xl mb-4">🪑</span>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">现货库存已同步 Stripe / Shopify</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <Badge className="bg-primary/10 text-primary border-none text-xs">Flagship Item</Badge>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                <span>4.98 (860+ 真实买家评测)</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black tracking-tight">ErgoCore Pro 人体工学动态护脊电竞网椅</h2>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                德国进口网布呼吸透气层，结合自适应倾仰底盘与全向 4D 支撑扶手，为极客和创作者提供超 12 小时的久坐无压支撑。
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold">$349.00</span>
              <span className="text-sm text-muted-foreground line-through">$499.00</span>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-500/10 text-xs">
                立省 $150 (30% OFF)
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground p-3 rounded-xl bg-background border border-border">
                <Truck className="w-4 h-4 text-primary shrink-0" />
                <span>次日顺丰包邮</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground p-3 rounded-xl bg-background border border-border">
                <RotateCcw className="w-4 h-4 text-primary shrink-0" />
                <span>30 天无理由退换</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground p-3 rounded-xl bg-background border border-border">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>官方 5 年质保</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button size="lg" className="flex-1 font-bold gap-2">
                <ShoppingBag className="w-4 h-4" /> 立即购买
              </Button>
              <Button size="lg" variant="outline" className="font-bold">
                加入心愿单
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
