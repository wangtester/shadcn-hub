"use client";

import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Bell, Lock, Globe, Smartphone, ShieldCheck } from "lucide-react";

export default function HeroUIApplicationPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="HeroUI Pro · Application 复杂业务设置流"
        description="抓取自 heroui.pro 的高集成度控制面板与开关设置组"
      />

      <Section title="Block: 应用偏好与通知中心设置" description="结合卡片圆角与开关状态的现代设置流">
        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary" />
                消息与提醒通知首选项
              </CardTitle>
              <CardDescription className="text-xs">
                配置不同事件触发时发送通知给您的渠道方式
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl border bg-muted/20">
                <div className="space-y-0.5">
                  <Label htmlFor="h-push" className="text-sm font-semibold">移动端即时推送 (Push)</Label>
                  <p className="text-xs text-muted-foreground">当有高危异常告警时第一时间推送到手机</p>
                </div>
                <Switch id="h-push" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border bg-muted/20">
                <div className="space-y-0.5">
                  <Label htmlFor="h-email" className="text-sm font-semibold">每周分析报告汇总 (Email)</Label>
                  <p className="text-xs text-muted-foreground">每周一上午9点发送系统的综合运行数据报告</p>
                </div>
                <Switch id="h-email" defaultChecked />
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl border bg-muted/20">
                <div className="space-y-0.5">
                  <Label htmlFor="h-marketing" className="text-sm font-semibold">营销活动与新特性推荐</Label>
                  <p className="text-xs text-muted-foreground">了解最新的组件模板与社区生态动态</p>
                </div>
                <Switch id="h-marketing" />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                双因子验证 (2FA) 保护
              </CardTitle>
              <CardDescription className="text-xs">
                提升管理权限操作的安全性
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-xs space-y-1">
                <p className="font-semibold text-foreground">状态：<span className="text-emerald-600">已激活</span></p>
                <p className="text-muted-foreground">上次验证设备：MacBook Pro (上海市)</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-xl text-xs">重新绑定认证器</Button>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}
