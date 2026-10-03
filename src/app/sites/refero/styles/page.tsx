"use client";

import { PageHeader } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star, Terminal, Zap, Shield, FileText, Compass, Command } from "lucide-react";

export default function ReferoStylesPage() {
  return (
    <div className="space-y-10">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/30">9/9 设计美学全量实装</Badge>
          <span className="text-xs text-muted-foreground font-mono">styles.refero.design 全集</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Refero Styles · 9 大主流现代设计风格全景实装
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          严谨还原 styles.refero.design 收集的全球 9 大现代 Web 设计美学流派，包含各自独特的背景色值、阴影算法与排版规范。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Style 01: Linear.app */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0d0e12] text-zinc-100 p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-indigo-400 font-bold uppercase">01 / Linear.app</span>
              <Badge variant="outline" className="border-indigo-500/30 text-indigo-300 text-[10px]">深空黑细流光</Badge>
            </div>
            <h3 className="text-lg font-bold text-white">Linear 极致工程美学</h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              采用 #08090C 极深色底，配以 1px 细微半透边框与微弱的径向光斑。无多余阴影，纯粹依靠低对比层次划分界面。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-[11px] font-mono text-zinc-300">
              bg: #0d0e12; border: 1px solid #27272a;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-zinc-500 font-mono">#5E6AD2</span>
            <Button size="sm" className="h-6 text-xs bg-indigo-600 hover:bg-indigo-500">体验此风格</Button>
          </div>
        </div>

        {/* Style 02: Vercel Geist */}
        <div className="rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black text-black dark:text-white p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-zinc-500 font-bold uppercase">02 / Vercel Geist</span>
              <Badge variant="outline" className="text-[10px]">纯粹黑白高反差</Badge>
            </div>
            <h3 className="text-lg font-bold">Geist 冷峻工业极简风</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              严格的纯黑 (#000000) 与纯白 (#FFFFFF) 反差，结合无衬线字体与等宽数字。克制、高效、剔除非必要渐变。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[11px] font-mono">
              font: Geist Mono; contrast: 100%;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-zinc-500 font-mono">#000000 / #FFFFFF</span>
            <Button size="sm" className="h-6 text-xs bg-black dark:bg-white text-white dark:text-black">体验此风格</Button>
          </div>
        </div>

        {/* Style 03: Apple Smooth */}
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-50/50 to-white/80 dark:from-blue-950/20 dark:to-card p-5 shadow-lg backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold uppercase">03 / Apple Smooth</span>
              <Badge variant="outline" className="border-blue-500/30 text-blue-600 text-[10px]">超椭圆与磨砂</Badge>
            </div>
            <h3 className="text-lg font-bold">Apple 拟态平滑微触感</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              超大圆角（Squircle），层叠毛玻璃与极柔和的弥散阴影，营造贴近物理真实世界的亲和手感。
            </p>
            <div className="mt-3 p-2.5 rounded-2xl border bg-background/60 text-[11px] font-mono">
              radius: 24px; blur: 20px;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t flex justify-between items-center text-xs">
            <span className="text-muted-foreground font-mono">#0071E3 (Apple Blue)</span>
            <Button size="sm" className="h-6 text-xs rounded-full bg-blue-600 hover:bg-blue-500 text-white">体验此风格</Button>
          </div>
        </div>

        {/* Style 04: Neo-Brutalism */}
        <div className="rounded-xl border-3 border-black dark:border-zinc-100 bg-amber-300 dark:bg-amber-400 text-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-black text-xs uppercase">04 / Neo-Brutalism</span>
              <span className="border-2 border-black bg-white px-1.5 py-0.5 text-[9px] font-black uppercase">新粗野主义</span>
            </div>
            <h3 className="text-lg font-black tracking-tight">粗黑描边硬投影美学</h3>
            <p className="text-xs font-semibold text-black/90 mt-1.5 leading-relaxed">
              高饱和度糖果撞色、重度粗黑描边与零羽化 90 度硬阴影，呈现街头波普艺术冲击感。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border-2 border-black bg-white text-[11px] font-mono font-bold">
              shadow: 4px 4px 0 #000; border: 3px solid;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t-2 border-black flex justify-between items-center text-xs">
            <span className="font-black font-mono">#FDE047 (高能黄)</span>
            <button className="border-2 border-black bg-black text-white font-black text-xs py-0.5 px-2.5 shadow-[2px_2px_0px_#000]">体验 ↗</button>
          </div>
        </div>

        {/* Style 05: Stripe / Fintech */}
        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-[#0a2540] to-[#1a1f36] text-white p-5 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 rotate-45 pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-indigo-300 font-bold uppercase">05 / Stripe Fintech</span>
              <Badge className="bg-indigo-500/20 text-indigo-300 text-[10px] border-indigo-400/30">信任深蓝斜角</Badge>
            </div>
            <h3 className="text-lg font-bold">Stripe 金融科技旗舰风</h3>
            <p className="text-xs text-indigo-200 mt-1.5 leading-relaxed">
              以稳重信任的 Navy 深蓝底色为基调，搭配 3D 倾斜角度多色阶渐变与网格背景，被全球支付金融产品广泛推崇。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-indigo-500/30 bg-indigo-950/50 text-[11px] font-mono text-indigo-200">
              bg: #0A2540; accent: #635BFF;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-500/30 flex justify-between items-center text-xs">
            <span className="text-indigo-300 font-mono">#635BFF</span>
            <Button size="sm" className="h-6 text-xs bg-indigo-500 hover:bg-indigo-400 text-white">体验此风格</Button>
          </div>
        </div>

        {/* Style 06: Supabase Dark Neon */}
        <div className="rounded-2xl border border-emerald-500/30 bg-[#121212] text-zinc-100 p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-emerald-400 font-bold uppercase">06 / Supabase Neon</span>
              <Badge className="bg-emerald-500/10 text-emerald-400 text-[10px] border-emerald-500/30">翡翠绿极客</Badge>
            </div>
            <h3 className="text-lg font-bold text-white">Supabase 翡翠暗黑极客风</h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              深色哑光基底融入高饱和度荧光绿（Emerald Green），辅以虚线辅助对齐网格，深受开发者与开源数据库喜爱。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-emerald-500/20 bg-emerald-950/20 text-[11px] font-mono text-emerald-300">
              accent: #3ECF8E; bg: #121212;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-emerald-400 font-mono">#3ECF8E</span>
            <Button size="sm" className="h-6 text-xs bg-emerald-600 hover:bg-emerald-500 text-white">体验此风格</Button>
          </div>
        </div>

        {/* Style 07: Raycast Mac Desktop */}
        <div className="rounded-2xl border border-white/20 bg-zinc-900/90 text-zinc-100 p-5 shadow-2xl backdrop-blur-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-rose-400 font-bold uppercase">07 / Raycast Desktop</span>
              <Badge variant="outline" className="text-[10px]">悬浮命令岛</Badge>
            </div>
            <h3 className="text-lg font-bold">Raycast 桌面级悬浮面板</h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
              模仿 macOS Spotlight 的悬浮交互面板，深度结合快捷键胶囊（Kbd）、单行输入命令与极简列表。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-950/60 text-[11px] font-mono flex items-center justify-between">
              <span>Quick Command Launcher</span>
              <span className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px]">⌘K</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-rose-400 font-mono">#FF6363</span>
            <Button size="sm" className="h-6 text-xs bg-rose-600 hover:bg-rose-500 text-white">体验此风格</Button>
          </div>
        </div>

        {/* Style 08: Notion Clean Document */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#fbfbfa] dark:bg-[#191919] text-zinc-900 dark:text-zinc-100 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-zinc-500 font-bold uppercase">08 / Notion Document</span>
              <Badge variant="outline" className="text-[10px]">纯净纸感排版</Badge>
            </div>
            <h3 className="text-lg font-bold">Notion 专注知识文档风</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              宛如羊皮纸质感的微白底色 (#FBFBFA)，弱化一切色彩干扰，专注段落层级、列表块与知识沉淀。
            </p>
            <div className="mt-3 p-2.5 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[11px] font-mono">
              bg: #fbfbfa; line-height: 1.65;
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center text-xs">
            <span className="text-zinc-500 font-mono">#FBFBFA (纸张色)</span>
            <Button size="sm" variant="outline" className="h-6 text-xs">体验此风格</Button>
          </div>
        </div>

        {/* Style 09: AI / Perplexity Fluid Glow */}
        <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-tr from-cyan-950/30 via-card to-purple-950/20 p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase">09 / AI Perplexity</span>
              <Badge className="bg-cyan-500/10 text-cyan-400 text-[10px] border-cyan-500/30">流光智能体</Badge>
            </div>
            <h3 className="text-lg font-bold">AI 原生呼吸流光流派</h3>
            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
              结合青色（Cyan）与深紫的高斯流光呼吸动效，常用于 AI 问答对话框、检索引用源卡片与思维链推理视图。
            </p>
            <div className="mt-3 p-2.5 rounded-lg border border-cyan-500/20 bg-cyan-950/20 text-[11px] font-mono text-cyan-300">
              glow: radial-gradient(cyan, purple);
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-cyan-500/20 flex justify-between items-center text-xs">
            <span className="text-cyan-400 font-mono">#06B6D4</span>
            <Button size="sm" className="h-6 text-xs bg-cyan-600 hover:bg-cyan-500 text-white">体验此风格</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
