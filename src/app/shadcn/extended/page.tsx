"use client";

import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Attachment, AttachmentContent, AttachmentTitle, AttachmentDescription, AttachmentAction, AttachmentMedia } from "@/components/ui/attachment";
import { ItemGroup, Item, ItemTitle, ItemDescription, ItemContent, ItemMedia, ItemActions } from "@/components/ui/item";
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker";
import { DirectionProvider } from "@/components/ui/direction";
import { Questionnaire, QuestionnaireItem, QuestionnaireProgress } from "@/components/ui/questionnaire";
import { BubbleGroup, Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyList,
  TypographyLead,
  TypographyMuted,
  Typeset,
} from "@/components/ui/typography";
import { FileText, Image as ImageIcon, Sparkles, Check, ChevronRight, Terminal, User, X, Bot, ThumbsUp, Heart } from "lucide-react";

export default function ShadcnExtendedPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="AI 交互、扩展基元与排版系统组件 (9个)"
        description="包含 Attachment 附件卡、Item 结构列表项、Marker 视觉标记、Direction 文字方向、Questionnaire 交互问卷卡、MessageScroller 消息流、Sidebar 基元、Bubble AI 气泡与 Typography 官方排版系统"
      />

      {/* 1. Attachment */}
      <Section title="01. Attachment 附件卡片组件" description="支持上传中、已完成、错误状态的多媒体附件胶囊">
        <div className="flex flex-wrap gap-4 items-center">
          <Attachment state="done" size="default">
            <AttachmentMedia>
              <FileText className="h-4 w-4 text-primary" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>architecture-v2.pdf</AttachmentTitle>
              <AttachmentDescription>2.4 MB · 已就绪</AttachmentDescription>
            </AttachmentContent>
            <AttachmentAction variant="ghost" size="icon-xs">
              <X className="h-3.5 w-3.5" />
            </AttachmentAction>
          </Attachment>

          <Attachment state="done" size="default">
            <AttachmentMedia>
              <ImageIcon className="h-4 w-4 text-emerald-500" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>dashboard-preview.png</AttachmentTitle>
              <AttachmentDescription>840 KB · 图片</AttachmentDescription>
            </AttachmentContent>
            <AttachmentAction variant="ghost" size="icon-xs">
              <X className="h-3.5 w-3.5" />
            </AttachmentAction>
          </Attachment>
        </div>
      </Section>

      {/* 2. Item & ItemGroup */}
      <Section title="02. Item & ItemGroup 结构化列表元素" description="标准化的列表单元格容器，集成头像媒体、标题、描述与右侧操作流">
        <div className="max-w-xl rounded-xl border p-4 bg-card/60">
          <ItemGroup>
            <Item>
              <ItemMedia>
                <div className="h-9 w-9 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-xs">
                  API
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>网关集群负载正常</ItemTitle>
                <ItemDescription>当前 12 个节点处于低负载健康运行状态</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="ghost" className="h-7 text-xs">管理</Button>
              </ItemActions>
            </Item>
            <Item>
              <ItemMedia>
                <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs">
                  DB
                </div>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>自动快照归档成功</ItemTitle>
                <ItemDescription>已将增量 Wal 日志同步至分布式对象存储</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="ghost" className="h-7 text-xs">查看日志</Button>
              </ItemActions>
            </Item>
          </ItemGroup>
        </div>
      </Section>

      {/* 3. Marker */}
      <Section title="03. Marker 视觉标注与分割点" description="文本或列表中的高亮标记点与指示连线">
        <div className="space-y-4 max-w-lg">
          <Marker variant="border">
            <MarkerIcon>
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </MarkerIcon>
            <MarkerContent>
              系统已完成自动化安全合规扫描，未发现高危代码漏洞。
            </MarkerContent>
          </Marker>

          <Marker variant="separator">
            <MarkerIcon>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </MarkerIcon>
            <MarkerContent>
              以下为今日新增的扩展生态组件
            </MarkerContent>
          </Marker>
        </div>
      </Section>

      {/* 4. Direction */}
      <Section title="04. Direction 方向感知 Provider" description="支持 LTR（从左至右）与 RTL（从右至左，如阿拉伯语/希伯来语）的无缝文字镜像排版">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
          <DirectionProvider direction="ltr">
            <div className="p-3.5 rounded-lg border bg-muted/20 text-xs space-y-1">
              <Badge variant="outline" className="text-[10px]">LTR (Left to Right)</Badge>
              <p className="font-semibold text-sm">Hello, shadcn/ui Base UI!</p>
              <p className="text-muted-foreground">标准从左至右英文与汉字阅读流。</p>
            </div>
          </DirectionProvider>

          <DirectionProvider direction="rtl">
            <div className="p-3.5 rounded-lg border bg-muted/20 text-xs space-y-1 text-right" dir="rtl">
              <Badge variant="outline" className="text-[10px]">RTL (Right to Left)</Badge>
              <p className="font-semibold text-sm">مرحبا بكم في shadcn</p>
              <p className="text-muted-foreground">阿拉伯语与多语言镜像文本支持。</p>
            </div>
          </DirectionProvider>
        </div>
      </Section>

      {/* 5. Questionnaire */}
      <Section title="05. Questionnaire 智能问卷与选择评估卡" description="多步骤选择题、满意度调查与进度指示器">
        <div className="max-w-md rounded-xl border p-5 bg-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">用户体验调研</span>
            <span className="text-xs font-mono text-primary font-semibold">步骤 1 / 3</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">您目前最常使用的前端框架是？</h4>
            <p className="text-xs text-muted-foreground mt-0.5">请选择一项以帮助我们针对性优化组件模板</p>
          </div>
          <div className="space-y-2">
            {[
              { label: "Next.js (App Router)", selected: true },
              { label: "Vite + React 19", selected: false },
              { label: "Remix / React Router v7", selected: false },
            ].map((opt, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                  opt.selected ? "border-primary bg-primary/10 text-primary" : "hover:bg-muted"
                }`}
              >
                <span>{opt.label}</span>
                {opt.selected && <Check className="h-4 w-4 text-primary" />}
              </div>
            ))}
          </div>
          <Button size="sm" className="w-full">下一题 ➔</Button>
        </div>
      </Section>

      {/* 6. MessageScroller & 7. Sidebar Primitives */}
      <Section title="06. MessageScroller & 07. Sidebar 侧边栏基元" description="消息会话自动触底滚动容器与侧边栏折叠收放基元">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div className="p-4 rounded-xl border bg-muted/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs flex items-center gap-1.5"><Terminal className="h-3.5 w-3.5 text-primary" /> MessageScroller 流式容器</span>
              <Badge variant="outline" className="text-[10px]">自动平滑下滚</Badge>
            </div>
            <div className="h-28 overflow-y-auto space-y-1.5 p-2 rounded bg-background border font-mono text-[11px] text-muted-foreground">
              <p>[09:12:00] Initializing AI agent runtime...</p>
              <p>[09:12:01] Parsing AST for 61 components...</p>
              <p>[09:12:02] Layout engine mounted successfully.</p>
              <p className="text-emerald-500 font-bold">[09:12:03] Ready for prompt stream.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-muted/20 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-indigo-500" /> Sidebar 响应式基元</span>
              <Badge variant="outline" className="text-[10px]">折叠响应式</Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              底层封装了与桌面大屏固定侧边栏与移动端浮动抽屉（Sheet）双向绑定的上下文状态，提供全局无缝联动。
            </p>
          </div>
        </div>
      </Section>

      {/* 8. Bubble */}
      <Section
        title="08. Bubble 对话气泡与反应徽章"
        description="用于 AI 对话流、即时通讯会话气泡，支持多变体（默认、次要、强调色彩、线框）与悬浮反应动作"
      >
        <div className="max-w-xl rounded-xl border p-4 bg-card/60 space-y-4">
          <BubbleGroup>
            {/* 用户提问气泡 */}
            <Bubble align="end">
              <BubbleContent className="bg-primary text-primary-foreground font-medium text-xs">
                请问 shadcn/ui 官方这次最新收录的组件都有哪些？
              </BubbleContent>
            </Bubble>

            {/* AI 回答气泡 */}
            <Bubble align="start" variant="muted">
              <BubbleContent className="bg-muted text-foreground text-xs leading-relaxed">
                包含全新的 <strong>DataTable</strong>（高阶数据表格）、<strong>DatePicker</strong>（日期及区间选择器）、<strong>Typography</strong>（规范排版体系）以及 <strong>Bubble</strong>（智能对话气泡）等全部 64 款组件！
              </BubbleContent>
              <BubbleReactions side="bottom" align="end">
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground cursor-pointer hover:text-primary">
                  <ThumbsUp className="h-3 w-3 text-primary" /> 12
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground cursor-pointer hover:text-red-500">
                  <Heart className="h-3 w-3 text-red-500 fill-red-500" /> 4
                </span>
              </BubbleReactions>
            </Bubble>

            {/* 强调气泡 */}
            <Bubble align="start" variant="tinted">
              <BubbleContent className="text-xs">
                ✨ 所有组件均基于原生 Tailwind CSS 与现代无头协议驱动，零多余依赖！
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </div>
      </Section>

      {/* 9. Typography & Typeset */}
      <Section
        title="09. Typography & Typeset 官方规范排版"
        description="基于 shadcn/ui Typeset 官方标准的排版原子体系：包含语义化标题、正文段落、代码标记、引用块与列表"
      >
        <div className="max-w-3xl rounded-xl border p-6 bg-card/40 space-y-4">
          <TypographyH3>Typography 现代化设计节奏</TypographyH3>
          <TypographyLead>
            Typeset 通过基准字号、行高（Leading）和垂直韵律（Flow）三大核心参数驱动整个排版流。
          </TypographyLead>

          <TypographyP>
            当你在渲染 Markdown、技术文档或富文本博客时，使用语义化的排版组件可以确保与项目的设计规范和暗黑模式无缝契合。例如内联代码标记：
            <TypographyInlineCode>npm run build</TypographyInlineCode> 或 <TypographyInlineCode>@base-ui/react</TypographyInlineCode>。
          </TypographyP>

          <TypographyBlockquote>
            &ldquo;优秀的排版系统不仅是把文字变好看，更是在信息流与留白之间建立起自然的可读性节拍。&rdquo;
          </TypographyBlockquote>

          <TypographyList>
            <li>严格适配明亮 / 暗黑双主题自适应配色</li>
            <li>内置精确的文本截断、等宽字体与列表缩进</li>
            <li>支持 Typeset 单类容器化全局样式注入</li>
          </TypographyList>

          <div className="pt-2 flex items-center gap-4 text-xs">
            <TypographyMuted>发布于 2026年10月 · shadcn/ui 官方核心矩阵</TypographyMuted>
          </div>
        </div>
      </Section>
    </div>
  );
}
