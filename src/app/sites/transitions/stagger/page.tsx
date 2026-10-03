"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck, Activity } from "lucide-react";

const listItems = [
  { title: "DNS 域名解析与权威服务器验证", status: "已就绪", icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" /> },
  { title: "SSL 证书自动化申请与边缘泛域名挂载", status: "已就绪", icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" /> },
  { title: "WAF 应用防火墙与 DDOS 防御规则加载", status: "已就绪", icon: <ShieldCheck className="h-4 w-4 text-indigo-500" /> },
  { title: "全网 CDN 边缘节点缓存预热完成", status: "进行中", icon: <Activity className="h-4 w-4 text-amber-500" /> },
];

export default function TransitionsStaggerPage() {
  const [key, setKey] = useState(0);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Transitions.dev · 交错阶梯入场 (Staggered Reveal)"
        description="抓取自 transitions.dev 的阶梯延时进场动效，平滑引导用户视觉流"
      />

      <Section title="Effect: 列表项交错级联浮现" description="点击重播按钮观察每个列表项依次序递增滑入">
        <div className="max-w-xl mx-auto space-y-4">
          <div className="flex justify-end">
            <Button size="sm" variant="outline" onClick={() => setKey((k) => k + 1)} className="gap-1.5 text-xs">
              <RotateCcw className="h-3.5 w-3.5" /> 重新播放交错动画
            </Button>
          </div>

          <div key={key} className="space-y-3">
            {listItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `slideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${idx * 120}ms`,
                  opacity: 0,
                }}
                className="flex items-center justify-between p-3.5 rounded-xl border bg-card/60 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono">{item.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Section>
    </div>
  );
}
