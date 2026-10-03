"use client";

import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Shield, UserPlus } from "lucide-react";

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
    </svg>
  );
}

export default function ShadcnSpacePages() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="ShadcnSpace · Pages 业务页面模板"
        description="抓取自 shadcnspace.com 的完整应用页面布局：登录鉴权与团队管理中心"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Template 1: Auth Login */}
        <Section title="Page 1: 现代单点登录/认证卡片" description="包含三方 OAuth 与密码验证的规范鉴权界面">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="text-center px-0">
              <CardTitle className="text-xl">登录到 ShadcnSpace 空间</CardTitle>
              <CardDescription>输入您的企业邮箱以继续</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-0">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="w-full gap-2 text-xs">
                  <GithubIcon className="h-4 w-4" /> GitHub 登录
                </Button>
                <Button variant="outline" className="w-full gap-2 text-xs">
                  <Mail className="h-4 w-4" /> 谷歌账号
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">或者通过邮箱</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="s-email">企业邮箱</Label>
                <Input id="s-email" placeholder="name@company.com" type="email" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="s-pass">登录密码</Label>
                  <a href="#" className="text-xs text-primary hover:underline">忘记密码？</a>
                </div>
                <Input id="s-pass" type="password" />
              </div>
              <Button className="w-full">进入工作台</Button>
            </CardContent>
          </Card>
        </Section>

        {/* Template 2: Team Members */}
        <Section title="Page 2: 团队成员与权限管理" description="组织人员列表、角色分配与邀请入口">
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="px-0 pb-3 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-base">活跃成员 (4)</CardTitle>
                <CardDescription className="text-xs">管理项目组内工程师的操作权限</CardDescription>
              </div>
              <Button size="sm" className="gap-1.5 h-8 text-xs">
                <UserPlus className="h-3.5 w-3.5" /> 邀请新成员
              </Button>
            </CardHeader>
            <CardContent className="px-0 space-y-3">
              {[
                { name: "张三 (Alex)", role: "团队超级管理员", email: "alex@shadcnspace.com", badge: "所有者" },
                { name: "Sarah Chen", role: "UI/UX 设计主管", email: "sarah@shadcnspace.com", badge: "管理员" },
                { name: "David Kim", role: "全栈开发工程师", email: "david@shadcnspace.com", badge: "成员" },
                { name: "林小雨", role: "前端架构师", email: "lin@shadcnspace.com", badge: "成员" },
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg border bg-muted/20">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="text-xs font-semibold">{member.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold leading-none">{member.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px]">{member.badge}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Section>
      </div>
    </div>
  );
}
