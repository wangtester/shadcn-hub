"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@/components/ui/empty";
import { Message, MessageAvatar, MessageContent } from "@/components/ui/message";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/toast";
import { AlertCircle, CheckCircle2, Info, Terminal, FolderOpen, Sparkles, Send } from "lucide-react";

export default function FeedbackPage() {
  const [progressVal, setProgressVal] = useState(62);

  const showSuccessToast = () => {
    toast.add({
      title: "操作执行成功",
      description: "您的配置更新已顺利同步至生产集群。",
      type: "success",
    });
  };

  const showInfoToast = () => {
    toast.add({
      title: "收到新的系统消息",
      description: "您有一条待审批的权限申请工单。",
      type: "info",
    });
  };

  return (
    <div>
      <PageHeader title="反馈与提示组件" description="警告横幅、全局轻提示、加载骨架屏、加载指示器、空状态以及会话气泡等组件" />

      {/* Alert */}
      <Section title="Alert 警告通知横幅" description="向用户传达高优先级系统状态或操作结果">
        <div className="space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>新版本特性提示</AlertTitle>
            <AlertDescription>
              当前系统已全面升级至 Next.js 16 与 Base UI 驱动的核心架构。
            </AlertDescription>
          </Alert>

          <Alert className="border-emerald-500/30 text-emerald-800 dark:text-emerald-400 bg-emerald-500/10">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>构建通过</AlertTitle>
            <AlertDescription>
              所有单元测试及代码规范静态扫描已全部通过。
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>连接超时警告</AlertTitle>
            <AlertDescription>
              检测到远程 API 网关未响应，请检查本地代理配置与网络连通性。
            </AlertDescription>
          </Alert>
        </div>
      </Section>

      {/* Toast */}
      <Section title="Toast 全局轻提示" description="非阻塞的右下角浮动消息通知">
        <div className="flex flex-wrap gap-4">
          <Button onClick={showSuccessToast} variant="outline" className="gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            触发成功 Toast
          </Button>
          <Button onClick={showInfoToast} variant="outline" className="gap-2">
            <Info className="h-4 w-4 text-blue-600" />
            触发常规 Toast
          </Button>
        </div>
      </Section>

      {/* Progress & Spinner */}
      <Section title="Progress & Spinner 进度条与加载指示器" description="展示异步加载过程与具体百分比进度">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="font-medium">任务同步进度</span>
              <span className="font-mono text-muted-foreground">{progressVal}%</span>
            </div>
            <Progress value={progressVal} />
            <div className="flex gap-2 pt-2">
              <Button size="sm" variant="outline" onClick={() => setProgressVal(p => Math.max(0, p - 15))}>-15%</Button>
              <Button size="sm" variant="outline" onClick={() => setProgressVal(p => Math.min(100, p + 15))}>+15%</Button>
              <Button size="sm" variant="outline" onClick={() => setProgressVal(100)}>完成</Button>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Spinner 加载旋转动效：</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner className="h-4 w-4 text-primary" />
                <span>加载中...</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner className="h-6 w-6 text-emerald-600" />
                <span>处理中</span>
              </div>
              <Button disabled size="sm">
                <Spinner className="h-4 w-4 animate-spin mr-1.5" />
                请求提交中
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton 骨架屏占位" description="在内容数据加载完成前渲染骨架轮廓减少跳变">
        <div className="flex items-center space-x-4 max-w-sm">
          <Skeleton className="h-12 w-12 rounded-full shrink-0" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-md mt-6">
          <Skeleton className="h-20 rounded-lg" />
          <Skeleton className="h-20 rounded-lg" />
          <Skeleton className="h-20 rounded-lg" />
        </div>
      </Section>

      {/* Kbd */}
      <Section title="Kbd 键盘快捷按键" description="向用户指引键盘交互快捷键说明">
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2 text-sm">
            <span>全局呼出搜索：</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>强制刷新页面：</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>Shift</Kbd>
              <Kbd>R</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>关闭弹窗：</span>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </Section>

      {/* Empty */}
      <Section title="Empty 空间缺省状态" description="暂无数据或空列表时的提示与引导">
        <Empty className="border border-dashed bg-muted/20">
          <EmptyMedia variant="icon">
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>暂无关联项目</EmptyTitle>
            <EmptyDescription>
              当前组织空间内尚未创建任何工程，您可以立即创建一个新项目开始协作。
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">新建首个工程</Button>
          </EmptyContent>
        </Empty>
      </Section>

      {/* Message & Bubble */}
      <Section title="Message & Bubble 智能对话消息气泡" description="现代 AI 助手与即时通讯对话消息组件">
        <div className="space-y-4 max-w-2xl bg-muted/15 p-4 rounded-xl border">
          {/* AI 消息 */}
          <Message align="start">
            <MessageAvatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                  <Sparkles className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="secondary">
                <BubbleContent>
                  你好！我是基于 shadcn/ui 组件体系搭建的 AI 助手。已为您生成了完整的 Web 导航系统与组件演示。
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>

          {/* 用户消息 */}
          <Message align="end">
            <MessageAvatar>
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-muted text-xs">我</AvatarFallback>
              </Avatar>
            </MessageAvatar>
            <MessageContent>
              <Bubble variant="default">
                <BubbleContent>
                  太棒了！现在页面布局清晰，所有组件都在页面中得到展示了。
                </BubbleContent>
              </Bubble>
            </MessageContent>
          </Message>
        </div>
      </Section>
    </div>
  );
}
