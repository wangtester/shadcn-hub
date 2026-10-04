"use client";

import React, { useState } from "react";
import { 
  CreditCard, ShieldCheck, Check, Truck, ArrowRight, 
  Lock, Package, Clock, Copy, ChevronRight, ShoppingCart
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ShadcnStoreCheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "apple" | "alipay">("card");
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "ErgoCore Pro 人体工学办公椅",
      spec: "曜石黑 / 自适应腰托",
      price: 349,
      quantity: 1,
      image: "🪑",
    },
    {
      id: 2,
      name: "Wireless ANC 头戴式耳机",
      spec: "星际银 / 无损音频",
      price: 289,
      quantity: 1,
      image: "🎧",
    },
  ];

  const subtotal = 638;
  const discount = couponApplied ? 50 : 0;
  const shipping = 0;
  const total = subtotal - discount + shipping;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === "SAVE50" || couponCode.trim().length > 0) {
      setCouponApplied(true);
    }
  };

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderCompleted(true);
    }, 1200);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 头部说明 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Ecommerce / Checkout Blocks
            </Badge>
            <span className="text-xs text-muted-foreground">生产级电商结算区块</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">结算收银台与订单明细</h1>
          <p className="text-sm text-muted-foreground mt-1">
            包含双栏响应式收银台、多渠道支付网关切换、优惠券核销与订单状态链路追踪。
          </p>
        </div>
      </div>

      {/* Block 1: 结算收银台 (双栏响应式布局) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左侧：地址与支付表单 */}
        <div className="lg:col-span-7 space-y-6">
          {/* 联系信息与收货地址 */}
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="text-base font-bold flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black">
                  1
                </span>
                收货人与配送信息
              </h3>
              <span className="text-xs text-muted-foreground">免运费</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">收件人姓名</label>
                <input
                  type="text"
                  defaultValue="Alex Morgan"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">联系电话</label>
                <input
                  type="text"
                  defaultValue="+1 (555) 019-2834"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">街道与门牌地址</label>
                <input
                  type="text"
                  defaultValue="742 Evergreen Terrace, Suite 402"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">城市</label>
                <input
                  type="text"
                  defaultValue="San Francisco"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">邮政编码</label>
                <input
                  type="text"
                  defaultValue="94103"
                  className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* 支付方式 */}
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="text-base font-bold flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-black">
                  2
                </span>
                支付方式
              </h3>
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>256 位银行级加密</span>
              </div>
            </div>

            {/* 支付渠道选项 */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "card", label: "信用卡 / 借记卡", icon: <CreditCard className="w-4 h-4" /> },
                { id: "apple", label: "Apple Pay", icon: <span className="font-bold text-xs"> Pay</span> },
                { id: "alipay", label: "支付宝 / 微信", icon: <span className="font-bold text-xs">Pay</span> },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPaymentMethod(opt.id as any)}
                  className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-medium ${
                    paymentMethod === opt.id
                      ? "border-primary bg-primary/5 text-primary shadow-sm"
                      : "border-border/60 hover:border-border text-muted-foreground"
                  }`}
                >
                  {opt.icon}
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1 block">卡号</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="4242 •••• •••• 4242"
                      defaultValue="4242 8888 9999 1234"
                      className="w-full text-xs px-3 py-2 pl-9 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                    />
                    <CreditCard className="w-4 h-4 text-muted-foreground absolute left-3 top-2.5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-1 block">有效期 (MM/YY)</label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-1 block">安全码 (CVC)</label>
                    <input
                      type="password"
                      defaultValue="888"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 右侧：订单概览与提交 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
            <h3 className="text-base font-bold flex items-center gap-2 pb-3 border-b border-border/60">
              <ShoppingCart className="w-4 h-4 text-primary" />
              订单摘要 ({cartItems.length} 件)
            </h3>

            {/* 商品清单 */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border/60 flex items-center justify-center text-xl shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold truncate">{item.name}</p>
                    <p className="text-[11px] text-muted-foreground">{item.spec} × {item.quantity}</p>
                  </div>
                  <span className="text-xs font-black">${item.price}</span>
                </div>
              ))}
            </div>

            {/* 优惠券输入 */}
            <form onSubmit={handleApplyCoupon} className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="输入优惠码 (例如 SAVE50)"
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary uppercase font-mono"
                />
                <Button type="submit" size="sm" variant="outline" className="text-xs shrink-0">
                  核销
                </Button>
              </div>
              {couponApplied && (
                <p className="text-[11px] text-emerald-600 mt-1 flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> 已减免 $50 优惠券额度！
                </p>
              )}
            </form>

            {/* 费用明细 */}
            <div className="border-t border-border/60 pt-4 space-y-2 text-xs">
              <div className="flex justify-between text-muted-foreground">
                <span>商品小计</span>
                <span>${subtotal}.00</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>优惠立减</span>
                  <span>-${discount}.00</span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <span>顺丰速运</span>
                <span className="text-emerald-600 font-semibold">包邮</span>
              </div>
              <div className="flex justify-between items-baseline text-sm font-extrabold pt-2 border-t border-border/40">
                <span>应付总额</span>
                <span className="text-xl font-black text-foreground">${total}.00</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={handlePlaceOrder}
              disabled={isSubmitting || orderCompleted}
              className="w-full font-bold text-sm h-11"
            >
              {isSubmitting ? (
                "正在安全加密支付中..."
              ) : orderCompleted ? (
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" /> 支付成功！
                </span>
              ) : (
                `立即结算 • $${total}.00`
              )}
            </Button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Stripe 安全认证
              </span>
              <span>•</span>
              <span>支持开具增值税发票</span>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: 订单状态物流跟踪卡 (Order Tracking Block) */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border/60 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold">订单物流状态追踪</h3>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-500/10 text-xs">
                运输中 In Transit
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              订单号：<span className="font-mono font-medium text-foreground">ORD-2026-981244</span> (承运方: SF Express)
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs text-muted-foreground block">预计送达时间</span>
            <span className="text-xs font-bold text-primary">明天 18:00 前</span>
          </div>
        </div>

        {/* 步骤条 */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          {[
            { step: "01", title: "订单已提交", time: "10:24 AM", done: true },
            { step: "02", title: "支付已确认", time: "10:25 AM", done: true },
            { step: "03", title: "仓库已出库发货", time: "14:10 PM", done: true, current: true },
            { step: "04", title: "送达签收", time: "预计明日", done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-xl bg-muted/30 border border-border/40">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-muted-foreground uppercase">{item.step}</span>
                {item.done ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-muted-foreground/60" />
                )}
              </div>
              <h4 className={`text-xs font-bold ${item.current ? "text-primary" : "text-foreground"}`}>
                {item.title}
              </h4>
              <span className="text-[11px] text-muted-foreground font-mono">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
