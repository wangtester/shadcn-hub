"use client";

import { PageHeader, Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const colorTokens = [
  { name: "--background", hex: "#09090b", desc: "主页面背景暗基色" },
  { name: "--foreground", hex: "#fafafa", desc: "常规正文与标题高亮" },
  { name: "--primary", hex: "#3b82f6", desc: "操作焦点、主交互与品牌" },
  { name: "--secondary", hex: "#27272a", desc: "次级填充与弱交互背景" },
  { name: "--muted", hex: "#18181b", desc: "占位底色、只读区域" },
  { name: "--accent", hex: "#6366f1", desc: "强调流光、通知与徽标" },
  { name: "--destructive", hex: "#ef4444", desc: "危险操作、警示与删除" },
];

export default function ReferoTokensPage() {
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

        {/* DESIGN.md 规范预览 */}
        <Section title="AI-readable DESIGN.md 规范文件" description="可直接交给大模型用于生成完全一致的页面设计">
          <div className="rounded-xl border bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto space-y-2">
            <p className="text-zinc-500 font-bold"># DESIGN.md - Refero Unified Specs</p>
            <p className="text-indigo-400">## Typography & Hierarchy</p>
            <p className="text-zinc-400">- Heading font: Geist Sans / Inter (bold, -0.03em tracking)</p>
            <p className="text-zinc-400">- Mono font: Geist Mono / JetBrains Mono</p>
            <p className="text-zinc-400">- Scale: xs(12px), sm(14px), base(16px), xl(20px), 3xl(30px)</p>
            <p className="text-indigo-400 pt-2">## Spacing & Radius</p>
            <p className="text-zinc-400">- Base unit: 4px</p>
            <p className="text-zinc-400">- Card radius: 12px (rounded-xl) or 24px (rounded-3xl)</p>
            <p className="text-zinc-400">- Button radius: 8px (default) or 9999px (pill)</p>
            <p className="text-indigo-400 pt-2">## Surface Shadows</p>
            <p className="text-zinc-400">- Minimalist: 0 1px 2px 0 rgba(0,0,0,0.05)</p>
            <p className="text-zinc-400">- Linear Glow: 0 0 20px -5px rgba(99,102,241,0.15)</p>
          </div>
        </Section>
      </div>
    </div>
  );
}
