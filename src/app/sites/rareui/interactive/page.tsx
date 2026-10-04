"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Wand2,
  Sparkles,
  Home,
  Layers,
  Settings,
  Share2,
  Bookmark,
  Folder,
  FolderOpen,
  FileText,
  FileCode,
  Bell,
  Heart,
  ThumbsUp,
  Smile,
  Check,
  Flame,
  Volume2
} from "lucide-react";

export default function RareUIInteractivePage() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>("design-token.json");
  const [bellRinging, setBellRinging] = useState(false);
  const [reactionActive, setReactionActive] = useState<string | null>(null);

  const ringBell = () => {
    setBellRinging(true);
    setTimeout(() => setBellRinging(false), 800);
  };

  const files = [
    { name: "design-tokens.json", size: "3.2 KB", type: "JSON", icon: <FileCode className="h-3.5 w-3.5 text-blue-500" /> },
    { name: "brand-guidelines.pdf", size: "1.8 MB", type: "PDF", icon: <FileText className="h-3.5 w-3.5 text-rose-500" /> },
    { name: "component-preview.tsx", size: "6.4 KB", type: "TSX", icon: <FileCode className="h-3.5 w-3.5 text-emerald-500" /> },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        title="RareUI · 流体与罕见微交互 (Fluid & Micro-Physics)"
        description="收录自 rareui.com 官方全集：物理模拟蠕动 Fluid Orb、展开式交互文件夹、物理钟摆铃铛与灵动悬浮岛"
      />

      {/* Component 1: Fluid Orb */}
      <Section title="Component 1: Fluid Orb 流体光晕球" description="由非规则贝塞尔曲率与高斯模糊构成的梦幻流动球体">
        <div className="relative h-64 w-full rounded-2xl border bg-zinc-950 overflow-hidden flex items-center justify-center">
          {/* 蠕动流体光晕 */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-500 blur-2xl opacity-75 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 blur-xl opacity-60 animate-[spin_8s_linear_infinite]" />

          <div className="relative z-10 text-center space-y-2">
            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20">Fluid Orb 核心渲染</Badge>
            <p className="text-xl font-bold text-white tracking-tight">物理感官的流动光晕</p>
            <p className="text-xs text-zinc-400 max-w-sm">常作为 AI 智能体对话中枢、语音唤醒与灵感卡片的主题焦点</p>
          </div>
        </div>
      </Section>

      {/* Component 2: Floating Action Island */}
      <Section title="Component 2: Floating Action Island 悬浮灵动岛" description="脱离常规文档流、固定悬浮于底部的高密度胶囊控制条">
        <div className="p-8 rounded-2xl border bg-muted/20 flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground">现代移动端与桌面端通用的底部悬浮胶囊：</p>
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full border border-white/20 bg-background/80 backdrop-blur-xl shadow-2xl">
            <button className="h-9 px-3 rounded-full hover:bg-muted text-xs font-medium flex items-center gap-1.5 transition-colors">
              <Home className="h-3.5 w-3.5" /> 首页
            </button>
            <button className="h-9 px-3 rounded-full hover:bg-muted text-xs font-medium flex items-center gap-1.5 transition-colors">
              <Layers className="h-3.5 w-3.5" /> 组件库
            </button>
            <button className="h-9 px-3 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1.5 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" /> AI 生成
            </button>
            <button className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
              <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
            <button className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
              <Share2 className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </Section>

      {/* Component 3: Interactive Folder (RareUI 核心名片) */}
      <Section
        title="Component 3: Interactive Dynamic Folder 可交互动态文件夹"
        description="RareUI 最具标志性的拟物物理交互：点击封面平滑升起张开，内部文件阶梯散出可点选"
      >
        <div className="p-8 rounded-2xl border bg-card/60 flex flex-col items-center justify-center gap-6">
          <div
            onClick={() => setFolderOpen(!folderOpen)}
            className="group cursor-pointer relative w-72 transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* 内部弹出的文件卡片层叠 */}
            <div
              className={`space-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mb-2 ${
                folderOpen
                  ? "opacity-100 translate-y-0 max-h-96"
                  : "opacity-0 translate-y-4 max-h-0 overflow-hidden pointer-events-none"
              }`}
            >
              {files.map((file) => (
                <div
                  key={file.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(file.name);
                  }}
                  className={`p-2.5 rounded-xl border bg-background/95 backdrop-blur-md shadow-sm flex items-center justify-between text-xs transition-all ${
                    selectedFile === file.name
                      ? "border-primary ring-2 ring-primary/20"
                      : "hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {file.icon}
                    <span className="font-medium font-mono text-[11px] truncate max-w-[150px]">{file.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono">{file.size}</span>
                </div>
              ))}
            </div>

            {/* 文件夹封套 */}
            <div className="p-4 rounded-2xl border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-background shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-600 flex items-center justify-center">
                  {folderOpen ? <FolderOpen className="h-5 w-5" /> : <Folder className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="font-bold text-sm">项目资产资料库</h4>
                  <p className="text-[11px] text-muted-foreground">3 个核心规范文件 · 点击{folderOpen ? "收起" : "展开"}</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[10px] font-mono">
                {folderOpen ? "OPEN" : "FOLD"}
              </Badge>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {selectedFile ? <>当前已选定文件：<span className="font-mono text-primary font-bold">{selectedFile}</span></> : "点击上方文件夹体验展开与文件拾取"}
          </p>
        </div>
      </Section>

      {/* Component 4 & 5: Physics Bell & Reaction Pop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Component 4: Micro-Physics Notification Bell */}
        <Section
          title="Component 4: Physics Notification Bell 微重力摇摆铃铛"
          description="点击触发基于衰减正弦波的物理左右摇摆动效"
        >
          <div className="p-6 rounded-xl border bg-card flex flex-col items-center justify-center gap-4">
            <div className="relative">
              <button
                onClick={ringBell}
                className={`relative h-14 w-14 rounded-2xl border bg-muted/30 hover:bg-muted/60 flex items-center justify-center transition-all ${
                  bellRinging ? "animate-[wiggle_0.8s_ease-in-out]" : ""
                }`}
                aria-label="提醒铃铛"
              >
                <Bell className={`h-6 w-6 text-foreground transition-transform ${bellRinging ? "text-primary" : ""}`} />
                <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-background animate-pulse" />
              </button>
            </div>
            <Button size="sm" variant="outline" onClick={ringBell} className="text-xs">
              轻按敲响铃铛 (物理摆动)
            </Button>
          </div>
        </Section>

        {/* Component 5: Reaction Pop */}
        <Section
          title="Component 5: Reaction Pop 浮动反应表情槽"
          description="微交互放大放缩与气泡轻触回弹"
        >
          <div className="p-6 rounded-xl border bg-card flex flex-col items-center justify-center gap-4">
            <div className="inline-flex items-center gap-1.5 p-2 rounded-full border bg-muted/40 shadow-xs">
              {[
                { key: "like", icon: "👍", label: "点赞" },
                { key: "heart", icon: "❤️", label: "喜爱" },
                { key: "fire", icon: "🔥", label: "火爆" },
                { key: "party", icon: "🎉", label: "庆祝" },
                { key: "rocket", icon: "🚀", label: "起飞" },
              ].map((emoji) => (
                <button
                  key={emoji.key}
                  onClick={() => setReactionActive(emoji.key)}
                  className={`h-9 w-9 rounded-full flex items-center justify-center text-lg transition-transform hover:scale-125 active:scale-95 duration-150 ${
                    reactionActive === emoji.key ? "bg-primary/20 scale-110 ring-2 ring-primary" : "hover:bg-background"
                  }`}
                  title={emoji.label}
                >
                  {emoji.icon}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              {reactionActive ? `已触发动态反馈: ${reactionActive.toUpperCase()}` : "悬浮表情查看平滑物理放大"}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
