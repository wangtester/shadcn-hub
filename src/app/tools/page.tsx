"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  Search,
  Copy,
  Check,
  Palette,
  Sparkles,
  Type,
  Layers,
  Wand2,
  Activity,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Filter,
  Bookmark,
} from "lucide-react";

interface DesignerTool {
  id: string;
  name: string;
  url: string;
  category: "color" | "inspiration" | "assets" | "background" | "shadow" | "motion" | "a11y";
  categoryLabel: string;
  badge: string;
  tagColor: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const DESIGNER_TOOLS: DesignerTool[] = [
  // 1. 色彩与调色板 (Color)
  {
    id: "coolors",
    name: "Coolors",
    url: "https://coolors.co",
    category: "color",
    categoryLabel: "色彩系统",
    badge: "超快配色生成",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    description: "全球数千万设计师使用的配色神器。按空格键即时循环生成和谐五色色盘，支持提取图片配色、锁定单色与导出 Tailwind / CSS 变量。",
    features: ["空格一键变换", "图片色板萃取", "多格式即时导出"],
    recommended: true,
  },
  {
    id: "realtimecolors",
    name: "Realtime Colors",
    url: "https://realtimecolors.com",
    category: "color",
    categoryLabel: "色彩系统",
    badge: "实景页面测色",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    description: "告别在空白画板凭空选色。实时将你的调色盘渲染到一整套完整的现代化 UI 页面模型中，即时看到按钮、卡片、文字在暗色与亮色下的实际视觉表现。",
    features: ["整站真实 UI 映射", "亮暗模式即时反转", "对比度合规警报"],
    recommended: true,
  },
  {
    id: "uicolors",
    name: "UI Colors",
    url: "https://uicolors.app",
    category: "color",
    categoryLabel: "色彩系统",
    badge: "Tailwind 50-950 阶梯",
    tagColor: "bg-sky-500/10 text-sky-600 border-sky-500/30",
    description: "Tailwind CSS 官方生态首选的色阶生成工具。只需输入单个品牌色 Hex，即可基于算法自动计算出完美的 50 至 950 十级完整 Tailwind 色阶代码。",
    features: ["生成 Tailwind v3/v4 配置", "组件级实机预览", "OKLCH / HSL 原生支持"],
  },
  {
    id: "happyhues",
    name: "Happy Hues",
    url: "https://happyhues.co",
    category: "color",
    categoryLabel: "色彩系统",
    badge: "色彩心理学语境",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    description: "由知名设计师 Mackenzie Child 打造的带语境配色参考站。不仅提供好看的配色方案，更直接告诉你每个颜色在背景、标题、正文、主 CTA 上的具体分配逻辑。",
    features: ["色彩分配层级解释", "整页动态换色体验", "色彩心理学指南"],
  },
  {
    id: "colormind",
    name: "Colormind",
    url: "http://colormind.io",
    category: "color",
    categoryLabel: "色彩系统",
    badge: "深度学习 AI 配色",
    tagColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    description: "利用深度学习模型从海量影视、摄影与顶尖艺术作品中提取配色知识。支持根据已有 1-2 个品牌锚点色自动推导补全剩下最具艺术感的过渡色。",
    features: ["神经网络训练调色", "UI / 材质渲染模型", "每日灵感更新"],
  },

  // 2. 设计灵感与真实产品走查 (Inspiration)
  {
    id: "mobbin",
    name: "Mobbin",
    url: "https://mobbin.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    badge: "真实应用交互圣经",
    tagColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    description: "全球最大、更新最权威的顶级真实移动端与 Web 端应用界面库。收录 Apple、Airbnb、Linear、Notion 等 300,000+ 高清完整业务流与微交互拆解。",
    features: ["完整用户转化链路", "按交互动作细致筛选", "每月数十款新 App 拆解"],
    recommended: true,
  },
  {
    id: "godly",
    name: "Godly",
    url: "https://godly.website",
    category: "inspiration",
    categoryLabel: "设计灵感",
    badge: "天花板级 Web 视觉",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "专注于收集全球最新锐、视觉最震撼的极客级 Web 体验。每一条收录都自带高帧率悬停动效录像，是前端探索 3D、平滑滚动、物理动效的灵感金矿。",
    features: ["悬停视频即时预览", "动效流派标签过滤", "高密日前沿收录"],
    recommended: true,
  },
  {
    id: "landbook",
    name: "Land-book",
    url: "https://land-book.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    badge: "Landing Page 精选",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "针对 SaaS、开发者工具与创意机构着陆页（Landing Pages）的最佳画廊。提供整页全屏长截图，按行业与设计组件分类索引，极具实战临摹价值。",
    features: ["整页全高长截图", "SaaS / DevTools 专注", "按排版流派分类"],
  },
  {
    id: "referodesign",
    name: "Refero Design",
    url: "https://refero.design",
    category: "inspiration",
    categoryLabel: "设计灵感",
    badge: "真实 Web UI 索引",
    tagColor: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    description: "由设计师精选的 22,000+ 真实 Web 应用程序界面。支持按具体的细分组件（如 Pricing 表、Settings 抽屉、Empty State）和具体产品品牌进行精准交叉搜索。",
    features: ["细分到组件级筛选", "真实产品后台走查", "高质感现代审美"],
  },
  {
    id: "awwwards",
    name: "Awwwards",
    url: "https://www.awwwards.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    badge: "国际顶尖设计奖",
    tagColor: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    description: "享誉全球的国际网页设计与开发奖项评选平台。从创意、设计、代码可访问性、性能 4 个维度由国际评审团打分，代表全球前沿 Web 技术风向标。",
    features: ["每日最佳网站 (SOTD)", "评委严苛打分拆解", "国际创意设计前沿"],
  },

  // 3. 图标系统与字体素材 (Assets)
  {
    id: "lucide",
    name: "Lucide Icons",
    url: "https://lucide.dev",
    category: "assets",
    categoryLabel: "图标与字体",
    badge: "shadcn/ui 官方标配",
    tagColor: "bg-red-500/10 text-red-600 border-red-500/30",
    description: "基于 Feather Icons 社区持续演进的现代极简单线图标库。拥有超过 1,400+ 矢量图标，设计风格严格统一、线条粗细高度自适应，是现代 React / shadcn 项目标准基础设施。",
    features: ["1,400+ 纯净矢量图标", "完美支持 React/Vue", "纯粹无冗余体积"],
    recommended: true,
  },
  {
    id: "fontshare",
    name: "Fontshare",
    url: "https://www.fontshare.com",
    category: "assets",
    categoryLabel: "图标与字体",
    badge: "高品质免费商用西文",
    tagColor: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    description: "由 Indian Type Foundry 发起的免费高品质西文字体平台。提供媲美顶级商业授权水准的无衬线体、等宽体与可变字体（Variable Fonts），100% 免费商用。",
    features: ["极高美学水准字体", "完整可变字体轴", "一键生成 CDN 引入代码"],
    recommended: true,
  },
  {
    id: "svgl",
    name: "SVGL",
    url: "https://svgl.app",
    category: "assets",
    categoryLabel: "图标与字体",
    badge: "现代科技品牌 SVG",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "专为开发者和设计师整理的现代科技产品、框架与云原生工具的高清矢量 SVG 图标库。一键复制 React 代码或纯 SVG，彻底告别模糊不清的位图 Logo。",
    features: ["最新科技产品 Logo", "一键复制 React 代码", "暗色模式自适应适配"],
  },
  {
    id: "tablericons",
    name: "Tabler Icons",
    url: "https://tabler.io/icons",
    category: "assets",
    categoryLabel: "图标与字体",
    badge: "5,000+ 超全像素对齐",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    description: "体量极其庞大的开源图标库，包含 5,000+ 像素级对齐的 SVG 图标。支持在线直接调节描边粗细（Stroke）、尺寸与主色调，满足复杂 B 端管理系统的海量图标需求。",
    features: ["在线调描边与尺寸", "分类极其详尽", "无任何授权限制"],
  },

  // 4. 背景图案与渐变生成器 (Background)
  {
    id: "cssgradient",
    name: "CSS Gradient",
    url: "https://cssgradient.io",
    category: "background",
    categoryLabel: "渐变与纹理",
    badge: "经典线性与径向渐变",
    tagColor: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/30",
    description: "前端最老牌且最好用的 CSS 渐变调试器。支持多断点线性渐变（Linear）与径向渐变（Radial）自由拖拽混色，内置海量精选流行渐变色板，一键复制 CSS 代码。",
    features: ["多断点拖拽混色", "十六进制与 RGBA 转换", "流行渐变库一键套用"],
  },
  {
    id: "meshgradient",
    name: "Mesh Gradient",
    url: "https://meshgradient.in",
    category: "background",
    categoryLabel: "渐变与纹理",
    badge: "苹果风网格流体弥散",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "生成具有 Apple 极光与流动弥散质感的 2D/3D 网格渐变。自由拖拽各控制点色彩与散度，支持导出高分辨率 PNG、SVG 或 CSS 流光代码，极具视觉冲击力。",
    features: ["流体网格节点控制", "超高质感极光弥散", "支持 SVG/CSS 导出"],
    recommended: true,
  },
  {
    id: "haikei",
    name: "Haikei",
    url: "https://haikei.app",
    category: "background",
    categoryLabel: "渐变与纹理",
    badge: "多风格矢量背景发生器",
    tagColor: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    description: "独创的模块化 SVG 背景图形生成应用。可生成平滑波浪（Waves）、低多边形（Low Poly）、模糊光斑（Blobs）、点阵网格等 15 种独特几何风格，参数全可微调。",
    features: ["15 种独立图形发生器", "一键生成随机变体", "完美导出轻量 SVG"],
  },
  {
    id: "heropatterns",
    name: "Hero Patterns",
    url: "https://heropatterns.com",
    category: "background",
    categoryLabel: "渐变与纹理",
    badge: "纯 CSS 平铺平滑图案",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    description: "由 Tailwind CSS 创始人 Steve Schoger 亲手制作的高品质重复平铺 SVG 背景图案库。完全通过轻量 data-uri CSS 嵌入，零额外图片请求，为纯色卡片增加微妙质感。",
    features: ["Tailwind 创始人制作", "纯 CSS Background 代码", "近百款细腻纹理"],
  },

  // 5. 拟态、阴影与边框计算 (Shadow & Glass)
  {
    id: "smoothshadow",
    name: "SmoothShadow (Brumm)",
    url: "https://shadows.brumm.af",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    badge: "非线性多层自然阴影",
    tagColor: "bg-stone-500/10 text-stone-600 border-stone-500/30",
    description: "解决传统 CSS box-shadow 生硬突兀的终极神器。基于非线性曲线算法将单一阴影分层拆解为 4-10 层微阴影叠加，打造出如同真实物理世界自然漫反射的柔顺阴影。",
    features: ["多层缓动衰减算法", "极佳卡片悬浮质感", "一键导出纯 CSS 代码"],
    recommended: true,
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism Generator",
    url: "https://hype4.academy/tools/glassmorphism-generator",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    badge: "毛玻璃与光感磨砂",
    tagColor: "bg-sky-500/10 text-sky-600 border-sky-500/30",
    description: "由 Michal Malewicz 团队出品的拟态磨砂玻璃效果在线调节器。可视化调节 backdrop-filter blur、透明度、边框微光感高光，实时在复杂背景上调试现代 Apple 级磨砂质感。",
    features: ["高光边框立体调节", "磨砂模糊系数微调", "实时背景贴图走查"],
  },
  {
    id: "neumorphism",
    name: "Neumorphism.io",
    url: "https://neumorphism.io",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    badge: "新拟物双向凹凸光影",
    tagColor: "bg-zinc-500/10 text-zinc-600 border-zinc-500/30",
    description: "新拟物风格（Soft UI）经典计算工具。通过对同色系背景计算对角线光源产生的高光与暗影，生成凸起、内凹、平坦等软糯质感按钮，深受特定极客仪表盘青睐。",
    features: ["模拟 360° 光源角度", "凸起与凹陷双模态", "软质感参数自由拉杆"],
  },

  // 6. 交互动效与物理曲线 (Motion)
  {
    id: "cubicbezier",
    name: "Cubic-Bezier.com",
    url: "https://cubic-bezier.com",
    category: "motion",
    categoryLabel: "动效与物理",
    badge: "CSS 缓动曲线实验室",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    description: "由前端大师 Lea Verou 打造的贝塞尔曲线可视化工具。支持自由拉动贝塞尔手柄（甚至超出 1.0 实现弹性回弹），并同屏与 linear/ease-in-out 进行速率比对，直接生成 transition 缓动代码。",
    features: ["图形化手柄微调", "支持超范围回弹动效", "双曲线同屏竞速比对"],
    recommended: true,
  },
  {
    id: "animista",
    name: "Animista",
    url: "https://animista.net",
    category: "motion",
    categoryLabel: "动效与物理",
    badge: "纯 CSS 动效合集",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "收集了数百种经过严格验证的纯 CSS 动画（入场、悬停、文字闪烁、摇晃、翻转等）。可在界面上微调动画时间、延迟、缓动函数与迭代次数，直接生成无依赖 Keyframes。",
    features: ["数十种动画类别", "代码一键复制即用", "轻量且无框架依赖"],
  },
  {
    id: "lottiefiles",
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    category: "motion",
    categoryLabel: "动效与物理",
    badge: "JSON 高性能矢量动效",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "全球最大 Lottie 动画资源社区与测试工作台。汇集数万款设计师制作的微交互动效（成功打钩、加载旋转、空状态动画），占用极小带宽且在任何分辨率下均保持高清晰度。",
    features: ["海量免费商业动效", "在线直接换色与调速", "支持 React/Web 播放器"],
  },

  // 7. 设计规范与对比度无障碍 (Accessibility)
  {
    id: "whocanuse",
    name: "WhoCanUse",
    url: "https://whocanuse.com",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    badge: "色弱与视障真实验算",
    tagColor: "bg-red-500/10 text-red-600 border-red-500/30",
    description: "不仅给出抽象的对比度数值，更精准模拟了患有红绿色盲（Deuteranopia）、全色盲、白内障或强阳光下手机屏幕反射时，真实人群看该色彩组合的清晰度与可读性百分比。",
    features: ["8 种视力情境模拟", "WCAG 2.1 达标判定", "受影响人群比例测算"],
    recommended: true,
  },
  {
    id: "webaim",
    name: "WebAIM Contrast Checker",
    url: "https://webaim.org/resources/contrastchecker",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    badge: "WCAG AAA 权威标准",
    tagColor: "bg-green-500/10 text-green-600 border-green-500/30",
    description: "国际无障碍标准化组织最权威的对比度评测工具。输入前景色与背景色，秒级判定是否达到 WCAG AA / AAA 级别的大字与正文无障碍严苛合规要求。",
    features: ["WCAG AA / AAA 认证", "滑动条微调即时达标", "国际标准化审计首选"],
  },
  {
    id: "openprops",
    name: "Open Props",
    url: "https://open-props.style",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    badge: "跨框架 Design Tokens",
    tagColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    description: "由 Google 工程师 Adam Argyle 发起的 CSS 自定义属性 Design Tokens 规范库。预设了经过严谨数学计算的排版梯度（Fluid Type）、间距系统、缓动曲线与渐变色板，兼容任意框架。",
    features: ["现代化 Design Tokens", "流体响应式排版", "纯 CSS 零构建负担"],
  },
];

const CATEGORIES = [
  { key: "all", label: "全部工具", count: DESIGNER_TOOLS.length, icon: <Compass className="h-4 w-4" /> },
  { key: "color", label: "色彩系统", count: DESIGNER_TOOLS.filter((t) => t.category === "color").length, icon: <Palette className="h-4 w-4" /> },
  { key: "inspiration", label: "设计灵感", count: DESIGNER_TOOLS.filter((t) => t.category === "inspiration").length, icon: <Sparkles className="h-4 w-4" /> },
  { key: "assets", label: "图标字体", count: DESIGNER_TOOLS.filter((t) => t.category === "assets").length, icon: <Type className="h-4 w-4" /> },
  { key: "background", label: "渐变与纹理", count: DESIGNER_TOOLS.filter((t) => t.category === "background").length, icon: <Layers className="h-4 w-4" /> },
  { key: "shadow", label: "阴影与拟态", count: DESIGNER_TOOLS.filter((t) => t.category === "shadow").length, icon: <Wand2 className="h-4 w-4" /> },
  { key: "motion", label: "动效与物理", count: DESIGNER_TOOLS.filter((t) => t.category === "motion").length, icon: <Activity className="h-4 w-4" /> },
  { key: "a11y", label: "无障碍与规范", count: DESIGNER_TOOLS.filter((t) => t.category === "a11y").length, icon: <ShieldCheck className="h-4 w-4" /> },
];

export default function DesignerToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (tool: DesignerTool) => {
    navigator.clipboard.writeText(tool.url);
    setCopiedId(tool.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTools = useMemo(() => {
    return DESIGNER_TOOLS.filter((tool) => {
      const matchCategory = activeCategory === "all" || tool.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === "" ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.badge.toLowerCase().includes(query) ||
        tool.features.some((f) => f.toLowerCase().includes(query));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* 顶部 Hero 区域 */}
      <section className="border-b py-12 md:py-16 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
            前端设计师常备工具箱
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            精选收录 24 款专业级设计神器，涵盖实景测色、应用走查、非线性阴影、贝塞尔动效与无障碍审计。
          </p>

          {/* 搜索栏 */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索工具名称或特性 (如 Tailwind, 阴影, 走查, 色盲)..."
                className="pl-10 h-10 bg-muted/40 border-border/50 rounded-xl text-xs md:text-sm shadow-2xs focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  清除
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 分类过滤器条目 */}
      <div className="sticky top-14 z-40 bg-background/95 backdrop-blur border-b shadow-2xs">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-2.5 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max p-1 rounded-xl bg-muted/40 border border-border/40 text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-background text-foreground shadow-xs font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded-full ${
                      isActive ? "bg-muted font-mono" : "text-muted-foreground/60"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 主体卡片网格 (极简轻奢与大呼吸感) */}
      <main className="container mx-auto px-4 md:px-6 max-w-6xl mt-10">
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed bg-muted/20">
            <Compass className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold">未找到匹配的工具</h3>
            <p className="text-xs text-muted-foreground mt-1">请尝试更换搜索关键词或重置分类筛选。</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs"
            >
              重置所有筛选
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const isCopied = copiedId === tool.id;
              return (
                <div
                  key={tool.id}
                  className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/40 hover:bg-card/60 transition-all duration-200 flex flex-col justify-between group select-none"
                >
                  <div>
                    {/* 头部：名称 + 极简 Badge + 外跳箭头 */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </h2>
                        <Badge variant="outline" className="text-[10px] font-mono shrink-0 bg-background/50 font-normal">
                          {tool.categoryLabel}
                        </Badge>
                      </div>

                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground/50 hover:text-foreground transition-colors p-0.5"
                        title="访问官网"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* 描述内容 */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-2">
                      {tool.description}
                    </p>
                  </div>

                  {/* 底部行动条 */}
                  <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleCopy(tool)}
                      className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-1.5 rounded hover:bg-muted"
                      title="复制工具链接"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span className="text-emerald-600 font-medium">已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>复制链接</span>
                        </>
                      )}
                    </button>

                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-primary hover:underline flex items-center gap-1 font-medium font-mono"
                    >
                      <span>直达工具</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
