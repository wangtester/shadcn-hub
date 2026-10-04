"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, Lock, Mail, ArrowRight, Check, KeyRound, 
  Smartphone, Laptop, Globe, AlertTriangle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ShadcnStoreAuthPage() {
  const [authMode, setAuthMode] = useState<"login" | "otp">("login");
  const [otpValues, setOtpValues] = useState(["4", "9", "2", "8", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) val = val[0];
    const newValues = [...otpValues];
    newValues[index] = val;
    setOtpValues(newValues);
  };

  const handleVerify = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setVerified(true);
    }, 1000);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 头部说明 */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              Application / Auth Blocks
            </Badge>
            <span className="text-xs text-muted-foreground">生产级身份认证与安全区块</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">身份认证与两步验证 (2FA)</h1>
          <p className="text-sm text-muted-foreground mt-1">
            包含优雅的 SaaS 登录界面、6 位动态验证码 (OTP) 校验与多设备安全审计卡片。
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setAuthMode("login")}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              authMode === "login" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            登录卡片
          </button>
          <button
            onClick={() => setAuthMode("otp")}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
              authMode === "otp" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            两步验证 OTP
          </button>
        </div>
      </div>

      {/* Block 1: 认证主体展示 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 左侧：表单主卡片 */}
        <div className="lg:col-span-6 flex justify-center">
          {authMode === "login" ? (
            <div className="w-full max-w-md p-8 rounded-2xl border border-border bg-card shadow-sm space-y-6">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center font-black">
                  ✦
                </div>
                <h3 className="text-xl font-bold tracking-tight">欢迎登录工作台</h3>
                <p className="text-xs text-muted-foreground">输入您的企业工作邮箱以继续</p>
              </div>

              {/* 快捷登录 */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="text-xs font-semibold h-9">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="text-xs font-semibold h-9">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                  Google
                </Button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="border-t border-border w-full" />
                <span className="bg-card px-2 text-[11px] text-muted-foreground uppercase font-medium absolute">
                  或者使用邮箱
                </span>
              </div>

              {/* 输入框 */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-1 block">工作邮箱</label>
                  <input
                    type="email"
                    defaultValue="alex@company.com"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-muted-foreground">密码</label>
                    <a href="#" className="text-[11px] text-primary hover:underline">忘记密码？</a>
                  </div>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary font-mono"
                  />
                </div>
              </div>

              <Button className="w-full font-bold text-xs h-10 gap-1.5">
                登录账号 <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          ) : (
            <div className="w-full max-w-md p-8 rounded-2xl border border-border bg-card shadow-sm space-y-6">
              <div className="text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">两步验证 (2FA)</h3>
                <p className="text-xs text-muted-foreground">
                  已向绑定手机号 <span className="font-mono text-foreground font-semibold">+86 138****8888</span> 发送 6 位动态验证码
                </p>
              </div>

              {/* 6 位 OTP 输入框 */}
              <div className="flex justify-center gap-2">
                {otpValues.map((val, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    className="w-11 h-12 text-center text-lg font-bold font-mono rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ))}
              </div>

              <Button
                onClick={handleVerify}
                disabled={isLoading || verified}
                className="w-full font-bold text-xs h-10 gap-1.5"
              >
                {isLoading ? (
                  "正在校验动态安全码..."
                ) : verified ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <Check className="w-4 h-4" /> 验证通过，正在进入系统
                  </span>
                ) : (
                  "确认并验证身份"
                )}
              </Button>

              <div className="text-center">
                <button className="text-xs text-muted-foreground hover:text-foreground">
                  没有收到验证码？<span className="text-primary font-semibold">重新发送 (58s)</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 右侧：多设备安全会话管理卡 */}
        <div className="lg:col-span-6 space-y-5">
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                活跃登录设备与安全会话
              </h3>
              <Badge variant="outline" className="border-emerald-500/30 text-emerald-600 bg-emerald-500/10 text-[10px]">
                全链路加密
              </Badge>
            </div>

            <div className="space-y-3">
              {[
                {
                  device: "MacBook Pro 16” (Apple M3 Max)",
                  location: "北京, 中国 • Chrome 129",
                  ip: "114.248.12.98",
                  current: true,
                  icon: <Laptop className="w-4 h-4 text-primary" />,
                },
                {
                  device: "iPhone 15 Pro",
                  location: "上海, 中国 • iOS Safari",
                  ip: "220.181.38.149",
                  current: false,
                  icon: <Smartphone className="w-4 h-4 text-muted-foreground" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/40 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-background border border-border/60">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">{item.device}</span>
                        {item.current && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0">当前设备</Badge>
                        )}
                      </div>
                      <span className="text-[11px] text-muted-foreground block">{item.location} ({item.ip})</span>
                    </div>
                  </div>

                  {!item.current && (
                    <Button variant="ghost" size="sm" className="text-rose-500 text-xs hover:bg-rose-500/10 h-7">
                      强制退出
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
