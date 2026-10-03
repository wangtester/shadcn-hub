"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronsUpDown, Layers, LayoutDashboard, Settings } from "lucide-react";

const tags = Array.from({ length: 20 }, (_, i) => `标签项 ${i + 1}`);

export default function LayoutPage() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <PageHeader title="布局组件" description="卡片、折叠面板、分页标签、区域划分与尺寸调节等结构组织组件" />

      {/* Card */}
      <Section title="Card 卡片" description="结构清晰的内容容器">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">项目活跃度</CardTitle>
              <CardDescription>最近30天数据分析</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight">1,284</p>
              <p className="text-xs text-muted-foreground mt-1">+12.5% 较上月提升</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="sm">查看数据详情</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">系统通知</CardTitle>
              <CardDescription>实时消息推送通道</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {["云主机升级维护完成", "发现新依赖漏洞修复", "备份计划执行成功"].map((msg) => (
                <div key={msg} className="flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{msg}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-muted/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">构建状态</CardTitle>
                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-200">运行中</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">流水线进度 85%</p>
              <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[85%] bg-primary rounded-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Accordion */}
      <Section title="Accordion 折叠面板" description="支持多级展开与收起的层次化列表">
        <Accordion defaultValue={["item-1"]} className="w-full max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>什么是 shadcn/ui 组件库？</AccordionTrigger>
            <AccordionContent>
              shadcn/ui 是一套设计精致、高度可定制的 UI 组件体系。它不作为不可修改的黑盒 npm 包安装，而是直接将源代码拷贝到你的工程中，让你拥有对组件 100% 的掌控权。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>如何支持浅色与深色主题？</AccordionTrigger>
            <AccordionContent>
              系统内置了现代 OKLCH 色彩空间变量定义，配合 Tailwind CSS 的 dark 类名控制，能够实现一键无缝的主题平滑切换与对比度优化。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>新版 Base UI 驱动的核心优势是什么？</AccordionTrigger>
            <AccordionContent>
              新版组件采用 Headless UI 架构，提供零样式绑定的无障碍语义、完整的键盘导航支持和现代声明式 render 组合特性。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Tabs */}
      <Section title="Tabs 标签面板" description="多重视图平滑切换">
        <Tabs defaultValue="overview" className="max-w-xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">概览</TabsTrigger>
            <TabsTrigger value="settings">偏好设置</TabsTrigger>
            <TabsTrigger value="security">安全管理</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 p-4 rounded-md border bg-muted/20 space-y-2">
            <p className="font-medium text-sm flex items-center gap-2"><LayoutDashboard className="h-4 w-4" /> 仪表盘面板概览</p>
            <p className="text-sm text-muted-foreground">统一监视整个系统的核心指标与最新活动日志。</p>
          </TabsContent>
          <TabsContent value="settings" className="mt-4 p-4 rounded-md border bg-muted/20 space-y-2">
            <p className="font-medium text-sm flex items-center gap-2"><Settings className="h-4 w-4" /> 偏好设置管理</p>
            <p className="text-sm text-muted-foreground">自定义语言环境、界面字体大小及个人布局喜好。</p>
          </TabsContent>
          <TabsContent value="security" className="mt-4 p-4 rounded-md border bg-muted/20 space-y-2">
            <p className="font-medium text-sm flex items-center gap-2"><Layers className="h-4 w-4" /> 双因素安全验证</p>
            <p className="text-sm text-muted-foreground">管理密钥证书、活跃登录会话与访问授权白名单。</p>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Separator */}
      <Section title="Separator 分隔线" description="清晰界定内容层级关系">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">水平分隔线</h4>
            <Separator className="my-3" />
            <p className="text-sm text-muted-foreground">内容区块 A</p>
            <Separator className="my-3" />
            <p className="text-sm text-muted-foreground">内容区块 B</p>
          </div>
          <div className="flex h-6 items-center space-x-4 text-sm">
            <span className="font-medium">Antigravity</span>
            <Separator orientation="vertical" />
            <span>Next.js 16</span>
            <Separator orientation="vertical" />
            <span>Tailwind v4</span>
            <Separator orientation="vertical" />
            <span>shadcn/ui</span>
          </div>
        </div>
      </Section>

      {/* Collapsible */}
      <Section title="Collapsible 独立折叠组件" description="独立的状态受控折叠面板">
        <Collapsible open={open} onOpenChange={setOpen} className="max-w-md space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">项目核心依赖库 (3)</h4>
            <CollapsibleTrigger className="p-1.5 hover:bg-muted rounded-md transition-colors">
              <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm bg-muted/40">
            @base-ui/react
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm bg-muted/40">
              tailwindcss
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm bg-muted/40">
              lucide-react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      {/* AspectRatio */}
      <Section title="AspectRatio 固定宽高比" description="自适应容器保持严格的宽高比例">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">16:9 宽屏视频比例</p>
            <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
              16 : 9
            </AspectRatio>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">4:3 标准比例</p>
            <AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center text-white font-semibold">
              4 : 3
            </AspectRatio>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">1:1 正方形比例</p>
            <AspectRatio ratio={1} className="rounded-lg overflow-hidden bg-gradient-to-tr from-amber-500 to-rose-600 flex items-center justify-center text-white font-semibold">
              1 : 1
            </AspectRatio>
          </div>
        </div>
      </Section>

      {/* Resizable */}
      <Section title="Resizable 分割面板" description="支持鼠标自由拖拽缩放的可调比例面板">
        <div className="h-56 max-w-2xl rounded-lg border overflow-hidden">
          <ResizablePanelGroup orientation="horizontal">
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="flex h-full items-center justify-center p-4 bg-muted/20">
                <span className="text-sm font-medium">侧边目录面板</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70}>
              <ResizablePanelGroup orientation="vertical">
                <ResizablePanel defaultSize={60}>
                  <div className="flex h-full items-center justify-center p-4">
                    <span className="text-sm font-medium">代码编辑器面板</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={40}>
                  <div className="flex h-full items-center justify-center p-4 bg-muted/10">
                    <span className="text-sm font-medium">终端调试面板</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </Section>

      {/* ScrollArea */}
      <Section title="ScrollArea 滚动区域" description="跨浏览器视觉一致的轻量化滚动区域">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-xs text-muted-foreground mb-2">垂直滚动列表</p>
            <ScrollArea className="h-44 w-52 rounded-md border">
              <div className="p-3 space-y-1">
                {tags.map((tag) => (
                  <div key={tag} className="text-sm py-1.5 px-2 hover:bg-muted rounded transition-colors">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">水平横向滚动</p>
            <ScrollArea className="w-80 rounded-md border whitespace-nowrap">
              <div className="flex p-3 gap-3">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="shrink-0 h-24 w-28 rounded-md bg-muted/60 flex flex-col items-center justify-center border text-xs font-medium">
                    <span>卡片 #{i + 1}</span>
                    <span className="text-muted-foreground text-[10px] mt-1">横向滑动</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </Section>
    </div>
  );
}
