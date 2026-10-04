"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UploadCloud, CheckCircle2, FileText, X, ArrowUpRight, Sparkles, Layers, Sliders } from "lucide-react";

export default function BeUIInteractivePage() {
  const [uploadState, setUploadState] = useState<"idle" | "dragging" | "uploading" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [activeSegment, setActiveSegment] = useState("all");

  const startUpload = () => {
    setUploadState("uploading");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("done");
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  const resetUpload = () => {
    setUploadState("idle");
    setProgress(0);
  };

  const segments = [
    { id: "all", label: "全部生态" },
    { id: "motion", label: "Motion 动效" },
    { id: "charts", label: "工业图表" },
    { id: "blocks", label: "商业区块" },
  ];

  return (
    <div className="space-y-10">
      <PageHeader
        title="beUI · 复杂交互动效 (Interactive & Motion Primitives)"
        description="收录自 beui.dev 官方核心：弹性拖拽上传容器、浮动磁吸分段菜单与微触感弹性反馈"
      />

      {/* Component 1: Interactive Motion File Upload */}
      <Section
        title="01. Motion Drag & Drop File Upload 动效拖拽上传容器"
        description="支持拖入虚线框呼吸高亮、上传中环形进度与完成状态飞入动效"
      >
        <div className="max-w-xl mx-auto p-8 rounded-2xl border bg-card/60 space-y-4">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setUploadState("dragging");
            }}
            onDragLeave={() => setUploadState("idle")}
            onDrop={(e) => {
              e.preventDefault();
              startUpload();
            }}
            onClick={() => uploadState === "idle" && startUpload()}
            className={`cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 flex flex-col items-center justify-center gap-3 ${
              uploadState === "dragging"
                ? "border-primary bg-primary/10 scale-[1.02] shadow-lg"
                : uploadState === "done"
                ? "border-emerald-500/50 bg-emerald-500/5"
                : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30"
            }`}
          >
            {uploadState === "idle" && (
              <>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-xs">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">点击选择或拖拽文件至此区域</p>
                  <p className="text-xs text-muted-foreground mt-0.5">支持 PNG, PDF, TSX 最大 20MB</p>
                </div>
              </>
            )}

            {uploadState === "dragging" && (
              <>
                <div className="h-12 w-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center animate-bounce">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-primary">松开鼠标即可立即开始上传...</p>
              </>
            )}

            {uploadState === "uploading" && (
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5"><FileText className="h-3.5 w-3.5 text-primary" /> component-spec.json</span>
                  <span className="font-bold text-primary">{progress}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {uploadState === "done" && (
              <div className="space-y-2">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto animate-in zoom-in">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <p className="text-sm font-bold text-emerald-600">上传成功！已完成校验</p>
                <Button size="sm" variant="ghost" onClick={(e) => { e.stopPropagation(); resetUpload(); }} className="text-xs h-7">
                  上传新文件
                </Button>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Component 2: Motion Segment Menu */}
      <Section
        title="02. Floating Motion Segment Menu 磁吸浮动分段选择"
        description="带有物理惯性滑块指示器与平滑背景融合的分段菜单"
      >
        <div className="p-8 rounded-xl border bg-muted/20 flex flex-col items-center justify-center gap-4">
          <div className="relative inline-flex items-center p-1.5 rounded-full border bg-background shadow-xs">
            {segments.map((seg) => {
              const active = activeSegment === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => setActiveSegment(seg.id)}
                  className={`relative z-10 px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {seg.label}
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-primary shadow-xs transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground font-mono">
            当前选中分段: <span className="text-primary font-bold">{activeSegment.toUpperCase()}</span>
          </p>
        </div>
      </Section>
    </div>
  );
}
