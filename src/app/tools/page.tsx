"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { useI18n } from "@/context/i18n-context";

interface DesignerTool {
  id: string;
  name: string;
  url: string;
  category: "color" | "inspiration" | "assets" | "background" | "shadow" | "motion" | "a11y";
  categoryLabel: string;
  categoryLabelEn: string;
  badge: string;
  badgeEn: string;
  tagColor: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
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
    categoryLabelEn: "Color Systems",
    badge: "超快配色生成",
    badgeEn: "Instant Palette",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    description: "全球数千万设计师使用的配色神器。按空格键即时循环生成和谐五色色盘，支持提取图片配色、锁定单色与导出 Tailwind / CSS 变量。",
    descriptionEn: "Super-fast color palette generator used by millions. Hit spacebar to generate harmonious 5-color palettes, extract from photos, and export Tailwind / CSS variables.",
    features: ["空格一键变换", "图片色板萃取", "多格式即时导出"],
    featuresEn: ["Spacebar to cycle", "Extract from image", "Tailwind & CSS export"],
    recommended: true,
  },
  {
    id: "realtimecolors",
    name: "Realtime Colors",
    url: "https://realtimecolors.com",
    category: "color",
    categoryLabel: "色彩系统",
    categoryLabelEn: "Color Systems",
    badge: "实景页面测色",
    badgeEn: "Live UI Testing",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    description: "告别在空白画板凭空选色。实时将你的调色盘渲染到一整套完整的现代化 UI 页面模型中，即时看到按钮、卡片、文字在暗色与亮色下的实际视觉表现。",
    descriptionEn: "Never pick colors in a vacuum. Visualize color palettes mapped directly onto real modern UI mockups in both light and dark themes in real time.",
    features: ["整站真实 UI 映射", "亮暗模式即时反转", "对比度合规警报"],
    featuresEn: ["Real UI mapping", "Light/dark mode toggle", "A11y contrast alerts"],
    recommended: true,
  },
  {
    id: "uicolors",
    name: "UI Colors",
    url: "https://uicolors.app",
    category: "color",
    categoryLabel: "色彩系统",
    categoryLabelEn: "Color Systems",
    badge: "Tailwind 50-950 阶梯",
    badgeEn: "Tailwind 50-950",
    tagColor: "bg-sky-500/10 text-sky-600 border-sky-500/30",
    description: "Tailwind CSS 官方生态首选的色阶生成工具。只需输入单个品牌色 Hex，即可基于算法自动计算出完美的 50 至 950 十级完整 Tailwind 色阶代码。",
    descriptionEn: "Top Tailwind CSS palette generator. Enter a single hex color and automatically generate a complete 50 to 950 color scale with OKLCH / HSL support.",
    features: ["生成 Tailwind v3/v4 配置", "组件级实机预览", "OKLCH / HSL 原生支持"],
    featuresEn: ["Tailwind v3/v4 config", "Component live preview", "Native OKLCH / HSL"],
  },
  {
    id: "happyhues",
    name: "Happy Hues",
    url: "https://happyhues.co",
    category: "color",
    categoryLabel: "色彩系统",
    categoryLabelEn: "Color Systems",
    badge: "色彩心理学语境",
    badgeEn: "Contextual Color",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    description: "由知名设计师 Mackenzie Child 打造的带语境配色参考站。不仅提供好看的配色方案，更直接告诉你每个颜色在背景、标题、正文、主 CTA 上的具体分配逻辑。",
    descriptionEn: "Curated color palettes in context. See real examples of how to apply colors to backgrounds, headings, body text, and CTA buttons.",
    features: ["色彩分配层级解释", "整页动态换色体验", "色彩心理学指南"],
    featuresEn: ["Color hierarchy guide", "Live page repainting", "Psychology context"],
  },
  {
    id: "colormind",
    name: "Colormind",
    url: "http://colormind.io",
    category: "color",
    categoryLabel: "色彩系统",
    categoryLabelEn: "Color Systems",
    badge: "深度学习 AI 配色",
    badgeEn: "Deep Learning AI",
    tagColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    description: "利用深度学习模型从海量影视、摄影与顶尖艺术作品中提取配色知识。支持根据已有 1-2 个品牌锚点色自动推导补全剩下最具艺术感的过渡色。",
    descriptionEn: "AI color scheme generator learned from movies, photography, and art. Lock 1-2 brand colors and automatically predict complementary harmonies.",
    features: ["神经网络训练调色", "UI / 材质渲染模型", "每日灵感更新"],
    featuresEn: ["Neural network palettes", "UI material rendering", "Daily fresh schemes"],
  },

  // 2. 设计灵感与真实产品走查 (Inspiration)
  {
    id: "mobbin",
    name: "Mobbin",
    url: "https://mobbin.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    categoryLabelEn: "Inspiration",
    badge: "真实应用交互圣经",
    badgeEn: "Real App Bible",
    tagColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    description: "全球最大、更新最权威的顶级真实移动端与 Web 端应用界面库。收录 Apple、Airbnb、Linear、Notion 等 300,000+ 高清完整业务流与微交互拆解。",
    descriptionEn: "World's largest directory of real-world iOS, Android, and Web design patterns from leading apps like Apple, Linear, Airbnb, and Notion.",
    features: ["完整用户转化链路", "按交互动作细致筛选", "每月数十款新 App 拆解"],
    featuresEn: ["Full user flows", "Filter by UX action", "Weekly app breakdowns"],
    recommended: true,
  },
  {
    id: "godly",
    name: "Godly",
    url: "https://godly.website",
    category: "inspiration",
    categoryLabel: "设计灵感",
    categoryLabelEn: "Inspiration",
    badge: "天花板级 Web 视觉",
    badgeEn: "Peak Web Visuals",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "专注于收集全球最新锐、视觉最震撼的极客级 Web 体验。每一条收录都自带高帧率悬停动效录像，是前端探索 3D、平滑滚动、物理动效的灵感金矿。",
    descriptionEn: "Curated collection of the most innovative and visually astonishing web experiences with video hover previews and motion tags.",
    features: ["悬停视频即时预览", "动效流派标签过滤", "高密日前沿收录"],
    featuresEn: ["Hover video previews", "Motion style tags", "Daily cutting-edge curation"],
    recommended: true,
  },
  {
    id: "landbook",
    name: "Land-book",
    url: "https://land-book.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    categoryLabelEn: "Inspiration",
    badge: "Landing Page 精选",
    badgeEn: "Landing Showcase",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "针对 SaaS、开发者工具与创意机构着陆页（Landing Pages）的最佳画廊。提供整页全屏长截图，按行业与设计组件分类索引，极具实战临摹价值。",
    descriptionEn: "The finest design gallery for SaaS, developer tools, and agency landing pages with full-length scrollable screen captures.",
    features: ["整页全高长截图", "SaaS / DevTools 专注", "按排版流派分类"],
    featuresEn: ["Full-length screenshots", "SaaS & DevTools focus", "Filter by typography"],
  },
  {
    id: "referodesign",
    name: "Refero Design",
    url: "https://refero.design",
    category: "inspiration",
    categoryLabel: "设计灵感",
    categoryLabelEn: "Inspiration",
    badge: "真实 Web UI 索引",
    badgeEn: "Real Web UI Index",
    tagColor: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    description: "由设计师精选的 22,000+ 真实 Web 应用程序界面。支持按具体的细分组件（如 Pricing 表、Settings 抽屉、Empty State）和具体产品品牌进行精准交叉搜索。",
    descriptionEn: "Curated index of 22,000+ real web application screens. Search by granular components like pricing tables, modals, settings, and empty states.",
    features: ["细分到组件级筛选", "真实产品后台走查", "高质感现代审美"],
    featuresEn: ["Component-level filtering", "Real app audit", "Modern aesthetics"],
  },
  {
    id: "awwwards",
    name: "Awwwards",
    url: "https://www.awwwards.com",
    category: "inspiration",
    categoryLabel: "设计灵感",
    categoryLabelEn: "Inspiration",
    badge: "国际顶尖设计奖",
    badgeEn: "Design Awards",
    tagColor: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    description: "享誉全球的国际网页设计与开发奖项评选平台。从创意、设计、代码可访问性、性能 4 个维度由国际评审团打分，代表全球前沿 Web 技术风向标。",
    descriptionEn: "Renowned international web design and development awards. Judged by global juries across creativity, design, usability, and content.",
    features: ["每日最佳网站 (SOTD)", "评委严苛打分拆解", "国际创意设计前沿"],
    featuresEn: ["Site of the Day (SOTD)", "Jury score breakdowns", "Global creative benchmark"],
  },

  // 3. 图标系统与字体素材 (Assets)
  {
    id: "lucide",
    name: "Lucide Icons",
    url: "https://lucide.dev",
    category: "assets",
    categoryLabel: "图标与字体",
    categoryLabelEn: "Icons & Typography",
    badge: "shadcn/ui 官方标配",
    badgeEn: "shadcn Standard",
    tagColor: "bg-red-500/10 text-red-600 border-red-500/30",
    description: "基于 Feather Icons 社区持续演进的现代极简单线图标库。拥有超过 1,400+ 矢量图标，设计风格严格统一、线条粗细高度自适应，是现代 React / shadcn 项目标准基础设施。",
    descriptionEn: "Modern minimalist line icon toolkit with 1,400+ vector icons. Highly adaptable stroke width, consistent design, and standard for React / shadcn.",
    features: ["1,400+ 纯净矢量图标", "完美支持 React/Vue", "纯粹无冗余体积"],
    featuresEn: ["1,400+ vector icons", "Native React/Vue support", "Zero bloat"],
    recommended: true,
  },
  {
    id: "fontshare",
    name: "Fontshare",
    url: "https://www.fontshare.com",
    category: "assets",
    categoryLabel: "图标与字体",
    categoryLabelEn: "Icons & Typography",
    badge: "高品质免费商用西文",
    badgeEn: "Free Quality Fonts",
    tagColor: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    description: "由 Indian Type Foundry 发起的免费高品质西文字体平台。提供媲美顶级商业授权水准的无衬线体、等宽体与可变字体（Variable Fonts），100% 免费商用。",
    descriptionEn: "Free quality font service by Indian Type Foundry. Exceptional sans, serif, monospace, and variable fonts that are 100% free for commercial use.",
    features: ["极高美学水准字体", "完整可变字体轴", "一键生成 CDN 引入代码"],
    featuresEn: ["World-class typefaces", "Full variable font axes", "One-click CDN snippet"],
    recommended: true,
  },
  {
    id: "svgl",
    name: "SVGL",
    url: "https://svgl.app",
    category: "assets",
    categoryLabel: "图标与字体",
    categoryLabelEn: "Icons & Typography",
    badge: "现代科技品牌 SVG",
    badgeEn: "Tech Logos SVG",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "专为开发者和设计师整理的现代科技产品、框架与云原生工具的高清矢量 SVG 图标库。一键复制 React 代码或纯 SVG，彻底告别模糊不清的位图 Logo。",
    descriptionEn: "Modern SVG logos library for developers and designers. Copy pure SVG or React components for thousands of tech frameworks and cloud tools.",
    features: ["最新科技产品 Logo", "一键复制 React 代码", "暗色模式自适应适配"],
    featuresEn: ["Tech & framework logos", "One-click React code", "Dark mode variants"],
  },
  {
    id: "tablericons",
    name: "Tabler Icons",
    url: "https://tabler.io/icons",
    category: "assets",
    categoryLabel: "图标与字体",
    categoryLabelEn: "Icons & Typography",
    badge: "5,000+ 超全像素对齐",
    badgeEn: "5,000+ Icons",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    description: "体量极其庞大的开源图标库，包含 5,000+ 像素级对齐的 SVG 图标。支持在线直接调节描边粗细（Stroke）、尺寸与主色调，满足复杂 B 端管理系统的海量图标需求。",
    descriptionEn: "Massive open-source library of 5,000+ pixel-perfect vector icons. Customize stroke width, size, and colors online with zero license restrictions.",
    features: ["在线调描边与尺寸", "分类极其详尽", "无任何授权限制"],
    featuresEn: ["Online stroke & size control", "Granular categories", "MIT License"],
  },

  // 4. 背景图案与渐变生成器 (Background)
  {
    id: "cssgradient",
    name: "CSS Gradient",
    url: "https://cssgradient.io",
    category: "background",
    categoryLabel: "渐变与纹理",
    categoryLabelEn: "Gradients & Textures",
    badge: "经典线性与径向渐变",
    badgeEn: "CSS Gradient Tool",
    tagColor: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/30",
    description: "前端最老牌且最好用的 CSS 渐变调试器。支持多断点线性渐变（Linear）与径向渐变（Radial）自由拖拽混色，内置海量精选流行渐变色板，一键复制 CSS 代码。",
    descriptionEn: "Classic visual CSS gradient generator. Drag multi-stop color markers for linear and radial gradients, browse curated swatch packs, and copy CSS.",
    features: ["多断点拖拽混色", "十六进制与 RGBA 转换", "流行渐变库一键套用"],
    featuresEn: ["Multi-stop drag handles", "Hex & RGBA conversion", "Trending gradient presets"],
  },
  {
    id: "meshgradient",
    name: "Mesh Gradient",
    url: "https://meshgradient.in",
    category: "background",
    categoryLabel: "渐变与纹理",
    categoryLabelEn: "Gradients & Textures",
    badge: "苹果风网格流体弥散",
    badgeEn: "Mesh Gradients",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "生成具有 Apple 极光与流动弥散质感的 2D/3D 网格渐变。自由拖拽各控制点色彩与散度，支持导出高分辨率 PNG、SVG 或 CSS 流光代码，极具视觉冲击力。",
    descriptionEn: "Generate Apple-style fluid mesh gradients. Drag 2D/3D control points and export high-res PNGs, SVGs, or pure CSS code.",
    features: ["流体网格节点控制", "超高质感极光弥散", "支持 SVG/CSS 导出"],
    featuresEn: ["Fluid mesh nodes", "Aurora glow diffusion", "Export SVG & CSS"],
    recommended: true,
  },
  {
    id: "haikei",
    name: "Haikei",
    url: "https://haikei.app",
    category: "background",
    categoryLabel: "渐变与纹理",
    categoryLabelEn: "Gradients & Textures",
    badge: "多风格矢量背景发生器",
    badgeEn: "Vector Generator",
    tagColor: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    description: "独创的模块化 SVG 背景图形生成应用。可生成平滑波浪（Waves）、低多边形（Low Poly）、模糊光斑（Blobs）、点阵网格等 15 种独特几何风格，参数全可微调。",
    descriptionEn: "Web app to generate unique SVG shapes and background textures: smooth waves, low-poly meshes, blob fields, and dot grids.",
    features: ["15 种独立图形发生器", "一键生成随机变体", "完美导出轻量 SVG"],
    featuresEn: ["15 generator modules", "Randomize variations", "Lightweight SVG export"],
  },
  {
    id: "heropatterns",
    name: "Hero Patterns",
    url: "https://heropatterns.com",
    category: "background",
    categoryLabel: "渐变与纹理",
    categoryLabelEn: "Gradients & Textures",
    badge: "纯 CSS 平铺平滑图案",
    badgeEn: "CSS Patterns",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    description: "由 Tailwind CSS 创始人 Steve Schoger 亲手制作的高品质重复平铺 SVG 背景图案库。完全通过轻量 data-uri CSS 嵌入，零额外图片请求，为纯色卡片增加微妙质感。",
    descriptionEn: "Repeatable SVG background patterns crafted by Steve Schoger (Tailwind CSS creator). Inline data-URI CSS with zero extra network requests.",
    features: ["Tailwind 创始人制作", "纯 CSS Background 代码", "近百款细腻纹理"],
    featuresEn: ["By Tailwind co-founder", "Pure CSS background snippet", "100+ subtle textures"],
  },

  // 5. 拟态、阴影与边框计算 (Shadow & Glass)
  {
    id: "smoothshadow",
    name: "SmoothShadow (Brumm)",
    url: "https://shadows.brumm.af",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    categoryLabelEn: "Shadows & Glass",
    badge: "非线性多层自然阴影",
    badgeEn: "Smooth Shadows",
    tagColor: "bg-stone-500/10 text-stone-600 border-stone-500/30",
    description: "解决传统 CSS box-shadow 生硬突兀的终极神器。基于非线性曲线算法将单一阴影分层拆解为 4-10 层微阴影叠加，打造出如同真实物理世界自然漫反射的柔顺阴影。",
    descriptionEn: "Craft smooth, physical-looking multi-layered CSS box-shadows. Non-linear easing distributes blur and distance across 4-10 stacked layers.",
    features: ["多层缓动衰减算法", "极佳卡片悬浮质感", "一键导出纯 CSS 代码"],
    featuresEn: ["Multi-layer easing decay", "Physical depth elevation", "One-click CSS export"],
    recommended: true,
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism Generator",
    url: "https://hype4.academy/tools/glassmorphism-generator",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    categoryLabelEn: "Shadows & Glass",
    badge: "毛玻璃与光感磨砂",
    badgeEn: "Glassmorphism",
    tagColor: "bg-sky-500/10 text-sky-600 border-sky-500/30",
    description: "由 Michal Malewicz 团队出品的拟态磨砂玻璃效果在线调节器。可视化调节 backdrop-filter blur、透明度、边框微光感高光，实时在复杂背景上调试现代 Apple 级磨砂质感。",
    descriptionEn: "Interactive frosted glass generator by Michal Malewicz. Fine-tune backdrop-filter blur, opacity, and specular borders for Apple-grade frosted glass.",
    features: ["高光边框立体调节", "磨砂模糊系数微调", "实时背景贴图走查"],
    featuresEn: ["Specular border highlight", "Frosted blur slider", "Live background preview"],
  },
  {
    id: "neumorphism",
    name: "Neumorphism.io",
    url: "https://neumorphism.io",
    category: "shadow",
    categoryLabel: "阴影与拟态",
    categoryLabelEn: "Shadows & Glass",
    badge: "新拟物双向凹凸光影",
    badgeEn: "Neumorphism",
    tagColor: "bg-zinc-500/10 text-zinc-600 border-zinc-500/30",
    description: "新拟物风格（Soft UI）经典计算工具。通过对同色系背景计算对角线光源产生的高光与暗影，生成凸起、内凹、平坦等软糯质感按钮，深受特定极客仪表盘青睐。",
    descriptionEn: "Soft UI & Neumorphism CSS generator. Calculates diagonal light source highlights and shadows to produce extruded and inset soft buttons.",
    features: ["模拟 360° 光源角度", "凸起与凹陷双模态", "软质感参数自由拉杆"],
    featuresEn: ["360° light source angle", "Extruded & inset modes", "Tactile soft controls"],
  },

  // 6. 交互动效与物理曲线 (Motion)
  {
    id: "cubicbezier",
    name: "Cubic-Bezier.com",
    url: "https://cubic-bezier.com",
    category: "motion",
    categoryLabel: "动效与物理",
    categoryLabelEn: "Motion & Physics",
    badge: "CSS 缓动曲线实验室",
    badgeEn: "Bezier Sandbox",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    description: "由前端大师 Lea Verou 打造的贝塞尔曲线可视化工具。支持自由拉动贝塞尔手柄（甚至超出 1.0 实现弹性回弹），并同屏与 linear/ease-in-out 进行速率比对，直接生成 transition 缓动代码。",
    descriptionEn: "Cubic-bezier timing function previewer by Lea Verou. Drag control handles, simulate spring overshoots beyond 1.0, and race against CSS presets.",
    features: ["图形化手柄微调", "支持超范围回弹动效", "双曲线同屏竞速比对"],
    featuresEn: ["Interactive curve handles", "Overshoot bounce support", "Side-by-side transition race"],
    recommended: true,
  },
  {
    id: "animista",
    name: "Animista",
    url: "https://animista.net",
    category: "motion",
    categoryLabel: "动效与物理",
    categoryLabelEn: "Motion & Physics",
    badge: "纯 CSS 动效合集",
    badgeEn: "CSS Animations",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    description: "收集了数百种经过严格验证的纯 CSS 动画（入场、悬停、文字闪烁、摇晃、翻转等）。可在界面上微调动画时间、延迟、缓动函数与迭代次数，直接生成无依赖 Keyframes。",
    descriptionEn: "Curated collection of battle-tested CSS animations: entrances, exits, text effects, shakes, and flips. Adjust duration and export pure keyframes.",
    features: ["数十种动画类别", "代码一键复制即用", "轻量且无框架依赖"],
    featuresEn: ["Dozens of categories", "Instant keyframes copy", "Zero dependencies"],
  },
  {
    id: "lottiefiles",
    name: "LottieFiles",
    url: "https://lottiefiles.com",
    category: "motion",
    categoryLabel: "动效与物理",
    categoryLabelEn: "Motion & Physics",
    badge: "JSON 高性能矢量动效",
    badgeEn: "Lottie Vector",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    description: "全球最大 Lottie 动画资源社区与测试工作台。汇集数万款设计师制作的微交互动效（成功打钩、加载旋转、空状态动画），占用极小带宽且在任何分辨率下均保持高清晰度。",
    descriptionEn: "World's largest Lottie animation platform. Discover thousands of micro-interaction vector animations (checks, loaders, empties) with tiny bandwidth footprint.",
    features: ["海量免费商业动效", "在线直接换色与调速", "支持 React/Web 播放器"],
    featuresEn: ["Thousands of free animations", "Online recolor & retarget", "React/Web player ready"],
  },

  // 7. 设计规范与对比度无障碍 (Accessibility)
  {
    id: "whocanuse",
    name: "WhoCanUse",
    url: "https://whocanuse.com",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    categoryLabelEn: "Accessibility & Tokens",
    badge: "色弱与视障真实验算",
    badgeEn: "Vision Simulation",
    tagColor: "bg-red-500/10 text-red-600 border-red-500/30",
    description: "不仅给出抽象的对比度数值，更精准模拟了患有红绿色盲（Deuteranopia）、全色盲、白内障或强阳光下手机屏幕反射时，真实人群看该色彩组合的清晰度与可读性百分比。",
    descriptionEn: "Understands who is affected by color contrast. Simulates 8 vision impairments (deuteranopia, cataract, direct sunlight) and rates readability.",
    features: ["8 种视力情境模拟", "WCAG 2.1 达标判定", "受影响人群比例测算"],
    featuresEn: ["8 vision simulations", "WCAG 2.1 pass rating", "Affected population metric"],
    recommended: true,
  },
  {
    id: "webaim",
    name: "WebAIM Contrast Checker",
    url: "https://webaim.org/resources/contrastchecker",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    categoryLabelEn: "Accessibility & Tokens",
    badge: "WCAG AAA 权威标准",
    badgeEn: "WCAG AAA Audit",
    tagColor: "bg-green-500/10 text-green-600 border-green-500/30",
    description: "国际无障碍标准化组织最权威的对比度评测工具。输入前景色与背景色，秒级判定是否达到 WCAG AA / AAA 级别的大字与正文无障碍严苛合规要求。",
    descriptionEn: "Authoritative color contrast evaluator by WebAIM. Instant pass/fail ratings for WCAG Level AA and AAA standards on normal and large text.",
    features: ["WCAG AA / AAA 认证", "滑动条微调即时达标", "国际标准化审计首选"],
    featuresEn: ["WCAG AA / AAA ratings", "Live slider adjustment", "Industry benchmark"],
  },
  {
    id: "openprops",
    name: "Open Props",
    url: "https://open-props.style",
    category: "a11y",
    categoryLabel: "无障碍与规范",
    categoryLabelEn: "Accessibility & Tokens",
    badge: "跨框架 Design Tokens",
    badgeEn: "Design Tokens",
    tagColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    description: "由 Google 工程师 Adam Argyle 发起的 CSS 自定义属性 Design Tokens 规范库。预设了经过严谨数学计算的排版梯度（Fluid Type）、间距系统、缓动曲线与渐变色板，兼容任意框架。",
    descriptionEn: "CSS custom properties design token library by Adam Argyle (Google). Pre-crafted fluid typography, spacing scales, easing curves, and dark mode palettes.",
    features: ["现代化 Design Tokens", "流体响应式排版", "纯 CSS 零构建负担"],
    featuresEn: ["Standard design tokens", "Fluid responsive type", "Pure CSS zero build step"],
  },
];

export default function DesignerToolsPage() {
  const { isEn, t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { key: "all", label: isEn ? "All Tools" : "全部工具", count: DESIGNER_TOOLS.length, icon: <Compass className="h-4 w-4" /> },
    { key: "color", label: isEn ? "Color Systems" : "色彩系统", count: DESIGNER_TOOLS.filter((t) => t.category === "color").length, icon: <Palette className="h-4 w-4" /> },
    { key: "inspiration", label: isEn ? "Design Inspiration" : "设计灵感", count: DESIGNER_TOOLS.filter((t) => t.category === "inspiration").length, icon: <Sparkles className="h-4 w-4" /> },
    { key: "assets", label: isEn ? "Icons & Typography" : "图标字体", count: DESIGNER_TOOLS.filter((t) => t.category === "assets").length, icon: <Type className="h-4 w-4" /> },
    { key: "background", label: isEn ? "Gradients & Textures" : "渐变与纹理", count: DESIGNER_TOOLS.filter((t) => t.category === "background").length, icon: <Layers className="h-4 w-4" /> },
    { key: "shadow", label: isEn ? "Shadows & Glass" : "阴影与拟态", count: DESIGNER_TOOLS.filter((t) => t.category === "shadow").length, icon: <Wand2 className="h-4 w-4" /> },
    { key: "motion", label: isEn ? "Motion & Physics" : "动效与物理", count: DESIGNER_TOOLS.filter((t) => t.category === "motion").length, icon: <Activity className="h-4 w-4" /> },
    { key: "a11y", label: isEn ? "Accessibility & Tokens" : "无障碍与规范", count: DESIGNER_TOOLS.filter((t) => t.category === "a11y").length, icon: <ShieldCheck className="h-4 w-4" /> },
  ];

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
        tool.descriptionEn.toLowerCase().includes(query) ||
        tool.badge.toLowerCase().includes(query) ||
        tool.badgeEn.toLowerCase().includes(query) ||
        tool.features.some((f) => f.toLowerCase().includes(query)) ||
        tool.featuresEn.some((f) => f.toLowerCase().includes(query));
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* 顶部 Hero 区域 */}
      <section className="border-b py-12 md:py-16 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-primary/10 text-primary text-xs font-mono font-medium mx-auto">
            <Wand2 className="h-3.5 w-3.5" />
            <span>{t("tools.badge")}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-foreground">
            {isEn ? "Frontend Designer Curated Toolbox" : "前端设计师常备工具箱"}
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? "Handpicked 24 professional design tools covering realtime color mapping, app walkthroughs, nonlinear shadows, bezier curves, and a11y audits."
              : "精选收录 24 款专业级设计神器，涵盖实景测色、应用走查、非线性阴影、贝塞尔动效与无障碍审计。"}
          </p>

          {/* 搜索栏 */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  isEn
                    ? "Search tool by name or feature (e.g. Tailwind, shadow, audit, color)..."
                    : "搜索工具名称或特性 (如 Tailwind, 阴影, 走查, 色盲)..."
                }
                className="pl-10 h-10 bg-muted/40 border-border/50 rounded-xl text-xs md:text-sm shadow-2xs focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer p-1"
                >
                  ✕
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
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20 shadow-2xs"
                      : "text-muted-foreground hover:text-foreground border border-transparent"
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded-full ${
                      isActive ? "bg-blue-500/15 text-blue-600 dark:text-blue-400 font-mono font-semibold" : "text-muted-foreground/60"
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

      {/* 主体卡片网格 */}
      <main className="container mx-auto px-4 md:px-6 max-w-6xl mt-10">
        {filteredTools.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-dashed bg-muted/20">
            <Compass className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold">
              {isEn ? "No matching tools found" : "未找到匹配的工具"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {isEn ? "Try adjusting your search query or reset category filter." : "请尝试更换搜索关键词或重置分类筛选。"}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs"
            >
              {isEn ? "Reset all filters" : "重置所有筛选"}
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
                          {isEn ? tool.categoryLabelEn : tool.categoryLabel}
                        </Badge>
                      </div>

                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground/50 hover:text-foreground transition-colors p-0.5"
                        title={isEn ? "Visit tool official site" : "访问官网"}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>

                    {/* Badge 标识 */}
                    <div className="mb-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${tool.tagColor}`}>
                        {isEn ? tool.badgeEn : tool.badge}
                      </span>
                    </div>

                    {/* 描述内容 */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mt-2">
                      {isEn ? tool.descriptionEn : tool.description}
                    </p>

                    {/* 特性胶囊 */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {(isEn ? tool.featuresEn : tool.features).map((feat) => (
                        <span key={feat} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 底部行动条 */}
                  <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleCopy(tool)}
                      className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-1.5 rounded hover:bg-muted"
                      title={isEn ? "Copy tool link" : "复制工具链接"}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-500" />
                          <span className="text-emerald-600 font-medium">
                            {isEn ? "Copied" : "已复制"}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          <span>{isEn ? "Copy Link" : "复制链接"}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-primary hover:underline flex items-center gap-1 font-medium font-mono"
                    >
                      <span>{isEn ? "Visit Tool" : "直达工具"}</span>
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
