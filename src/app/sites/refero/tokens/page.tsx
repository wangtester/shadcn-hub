"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Copy, Check, Sparkles, FileText, Code2 } from "lucide-react";

const colorTokens = [
  { name: "--background", hex: "#09090b", desc: "主页面背景暗基色" },
  { name: "--foreground", hex: "#fafafa", desc: "常规正文与标题高亮" },
  { name: "--primary", hex: "#3b82f6", desc: "操作焦点、主交互与品牌" },
  { name: "--secondary", hex: "#27272a", desc: "次级填充与弱交互背景" },
  { name: "--muted", hex: "#18181b", desc: "占位底色、只读区域" },
  { name: "--accent", hex: "#6366f1", desc: "强调流光、通知与徽标" },
  { name: "--destructive", hex: "#ef4444", desc: "危险操作、警示与删除" },
];

const styleTemplates: Record<string, string> = {
  Linear: `# DESIGN.md - Linear Dark Aesthetic
## Visual Philosophy
- Theme: Monochromatic dark gray (#0d0d10) with subtle 1px border glow.
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Radius: 8px (rounded-lg) for buttons, 12px (rounded-xl) for cards.
- Accent: Indigo/Violet #5e6ad2 for subtle active badges.
- Keyboard: First-class shortcuts and micro-interactions.`,

  Geist: `# DESIGN.md - Vercel Geist Minimalist
## Visual Philosophy
- Theme: Absolute high-contrast monochrome (#000000 / #ffffff).
- Border: Crisp 1px geometric dividing lines (#eaeaea / #333333).
- Radius: Precise 6px to 8px.
- Typography: Geist Sans, tight tracking (-0.02em).
- Vibe: Developer-centric, high information density.`,

  Apple: `# DESIGN.md - Apple Smooth Human Interface
## Visual Philosophy
- Theme: Clean neutrals with continuous super-elliptical curvature.
- Radius: Squircle rounded-2xl (16px) to rounded-3xl (24px).
- Shadow: Ultra-soft diffuse ambient elevation.
- Typography: SF Pro, large optical headings, generous white space.
- Vibe: Premium tactile feel and effortless clarity.`,

  "Neo-Brutalism": `# DESIGN.md - Neo-Brutalism Raw Energy
## Visual Philosophy
- Theme: High-saturation neon yellow/pink with pure jet-black ink.
- Border: 2.5px solid #000000 hard strokes.
- Shadow: 4px 4px 0px #000000 (offset hard drop shadow).
- Radius: Zero or slight rounded-md (4px).
- Vibe: Irreverent, playful, unapologetic bold contrast.`,
};

export default function ReferoTokensPage() {
  const [selectedStyle, setSelectedStyle] = useState<string>("Linear");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(styleTemplates[selectedStyle] || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="Refero Styles · Design Tokens 规范矩阵"
        description="抓取自 styles.refero.design 的 AI 可读 DESIGN.md 格式规范与设计参数"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Tokens Table */}
        <Section title="Color Palette Tokens 调色盘变量" description="统一 OKLCH/HEX 语义化色彩规范">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>变量名</TableHead>
                <TableHead>色彩预览</TableHead>
                <TableHead>说明</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colorTokens.map((t) => (
                <TableRow key={t.name}>
                  <TableCell className="font-mono text-xs font-bold">{t.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-md border" style={{ backgroundColor: t.hex }} />
                      <span className="font-mono text-xs text-muted-foreground">{t.hex}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{t.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Section>

        {/* DESIGN.md 规范即时导出生成器 */}
        <Section title="AI-readable DESIGN.md 规范即时导出" description="支持按风格切换，直接复制给 Cursor / Claude Code 使用">
          <div className="space-y-3">
            {/* 风格切换标签 */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {Object.keys(styleTemplates).map((styleName) => (
                  <button
                    key={styleName}
                    onClick={() => setSelectedStyle(styleName)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      selectedStyle === styleName
                        ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {styleName}
                  </button>
                ))}
              </div>
              <Button size="sm" variant="outline" onClick={handleCopy} className="h-7 text-xs gap-1.5">
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-500" />
                    <span>已复制规范</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>复制 DESIGN.md</span>
                  </>
                )}
              </Button>
            </div>

            {/* Markdown 代码框 */}
            <div className="rounded-xl border bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {styleTemplates[selectedStyle]}
            </div>
            <p className="text-[11px] text-muted-foreground">
              提示：将此文件保存为项目根目录的 <code>DESIGN.md</code>，AI 编程助手将强制遵循此设计系统。
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
