"use client";

import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, ArrowRight, Zap, Shield, Rocket, Globe, Terminal, Stars } from "lucide-react";

export default function ShadcnSpaceMarketingPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="ShadcnSpace · Marketing 营销落地页 Blocks"
        description="抓取自 shadcnspace.com 的高转化落地页区块，包含现代 Hero 头部、特性矩阵、阶梯定价与行动号召 (CTA)"
      />

      {/* Block 1: Modern SaaS Hero */}
      <Section title="Block 1: Modern SaaS Hero 首屏主图" description="带光晕徽章、渐变标题与双操作按钮的高端科技感首屏">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-b from-primary/5 via-card to-card p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-foreground mb-6 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
            <span>全新 2.0 版本发布：支持 Base UI 核心驱动</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            用现代设计语言打造 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">全功能 SaaS 界面</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            450+ 生产级可复用区块，开箱即用的暗黑模式，完美契合 Next.js 与 Tailwind CSS 生态。
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" className="rounded-full px-6 gap-2 shadow-md">
              <Rocket className="h-4 w-4" /> 立即免费体验
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6">
              查阅在线文档
            </Button>
          </div>

          {/* 终端模拟 */}
          <div className="mt-8 max-w-md mx-auto rounded-lg border bg-zinc-950 p-3 text-left font-mono text-xs text-zinc-300 shadow-xl">
            <div className="flex items-center gap-1.5 pb-2 border-b border-zinc-800">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-zinc-500 ml-2">bash</span>
            </div>
            <div className="pt-2 flex items-center gap-2">
              <span className="text-emerald-400">$</span>
              <span>npx shadcnspace@latest add hero-saas-01</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Block 2: Feature Bento Grid */}
      <Section title="Block 2: Bento Grid 核心特性矩阵" description="非对称便当盒布局，突出多维度核心卖点">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="md:col-span-2 bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-1">
                <Zap className="h-4 w-4" />
              </div>
              <CardTitle className="text-lg">毫秒级极速渲染流水线</CardTitle>
              <CardDescription>
                深度优化代码拆分与按需引入，零多余依赖，首屏加载速度提升高达 70%。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-28 rounded-lg bg-muted/40 border-2 border-dashed flex items-center justify-center text-xs text-muted-foreground">
                [渲染性能雷达示意图]
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-1">
                <Shield className="h-4 w-4" />
              </div>
              <CardTitle className="text-lg">企业级访问控制</CardTitle>
              <CardDescription>
                原生支持 RBAC 细粒度角色与操作审计合规。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> SAML / SSO 单点登录</div>
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> 多租户数据隔离</div>
                <div className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> 审计操作日志追踪</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-8 w-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-1">
                <Globe className="h-4 w-4" />
              </div>
              <CardTitle className="text-lg">多语言国际化</CardTitle>
              <CardDescription>
                支持 RTL 镜像布局与 30+ 语种即时切换。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="md:col-span-2 bg-gradient-to-br from-card to-muted/20">
            <CardHeader>
              <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-1">
                <Stars className="h-4 w-4" />
              </div>
              <CardTitle className="text-lg">AI 智能辅助生成</CardTitle>
              <CardDescription>
                直连 Claude / OpenAI 进行实时组件代码修正与主题配色调优。
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Section>

      {/* Block 3: Pricing Cards */}
      <Section title="Block 3: Pricing 阶梯价格方案" description="从个人版到企业版的对比阶梯">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Starter */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">基础版</CardTitle>
              <CardDescription>适合个人项目与原型探索</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-extrabold">¥0</span>
                <span className="text-xs text-muted-foreground ml-1">/ 永久免费</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-2 text-xs">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 50+ 基础原子组件</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 社区支持通道</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 个人非商业使用</div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">开始免费体验</Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className="flex flex-col border-primary relative shadow-md bg-card">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground font-semibold text-[11px]">最受欢迎</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">专业版 (Pro)</CardTitle>
              <CardDescription>适合高速发展的初创团队与独立开发者</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-extrabold">¥199</span>
                <span className="text-xs text-muted-foreground ml-1">/ 终身买断</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-2 text-xs">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 450+ 全部高级 Blocks</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 12 套完整 Dashboard 模板</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 无限商业项目商用授权</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 终身免费版本升级支持</div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">立即获取 Pro 授权</Button>
            </CardFooter>
          </Card>

          {/* Enterprise */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg">企业定制版</CardTitle>
              <CardDescription>针对大型机构的专属架构定制</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-extrabold">¥999</span>
                <span className="text-xs text-muted-foreground ml-1">/ 席位定制</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-2 text-xs">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 全部 Pro 权益</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 专属私有 UI 规范定制</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> 1对1 架构专家技术支持</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-500" /> SLA 服务保障与发票支持</div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">联系企业顾问</Button>
            </CardFooter>
          </Card>
        </div>
      </Section>
    </div>
  );
}
