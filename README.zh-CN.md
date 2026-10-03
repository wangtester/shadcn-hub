<div align="center">

# 🌌 shadcn-hub
### 全景式 shadcn/ui 组件生态矩阵与多维对比中心
**A Panoramic Component Workbench & Cross-Ecosystem Benchmark for shadcn/ui**

<p align="center">
  <a href="README.md">English</a> | <b>简体中文</b>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="React 19" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 4" /></a>
  <a href="https://base-ui.com"><img src="https://img.shields.io/badge/@base--ui/react-v1.8-ea580c?style=for-the-badge" alt="Base UI" /></a>
  <a href="https://github.com/wangtester/shadcn-hub/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/wangtester/shadcn-hub/ci.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=CI" alt="CI Status" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge" alt="License" /></a>
  <a href="https://wangtester.github.io/shadcn-hub/"><img src="https://api.visitorbadge.io/api/visitors?path=wangtester.shadcn-hub&label=%E8%AE%BF%E5%AE%A2%E6%95%B0&labelColor=%2327272a&countColor=%236366f1&style=flat-square" alt="Visitors" /></a>
</p>

<p align="center">
  <b>一站式聚合收录 shadcn/ui 官方全量 61 款基础组件 + 9 大顶尖社区扩展库与商业级 Blocks</b><br/>
  杜绝虚标，全部组件 100% 实机渲染、真实可交互、零编译报错，专为企业级设计系统选型与高效开发打造。
</p>

<!-- 10 大生态直达标牌与 SEO 关键词直显 -->
<p align="center">
  <b>📦 全量实装收录生态索引：</b><br/>
  <a href="#1-shadcnui-官方核心库全量-61-款组件"><code>shadcn/ui 官方核心 (61)</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>BoardUI (19 图表 &amp; AI)</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>ShadcnStore (39 区块)</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>Refero Styles (9 流派)</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>HeroUI Pro</code></a><br/>
  <a href="#2-生态与垂直扩展站点"><code>beUI 动效</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>RareUI 物理交互</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>Transitions.dev</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>BeautifulUI 美学</code></a> •
  <a href="#2-生态与垂直扩展站点"><code>ShadcnSpace 控制台</code></a>
</p>

<p align="center">
  <a href="https://wangtester.github.io/shadcn-hub/">
    <img src="https://img.shields.io/badge/🚀_在线预览_Live_Demo-点击立即体验-indigo?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <a href="https://wangtester.github.io/shadcn-hub/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="public/banner-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="public/banner-light.svg">
      <img alt="shadcn-hub Panoramic Workbench" src="public/banner-light.svg" width="100%">
    </picture>
  </a>
</p>

[🚀 在线体验 Demo](https://wangtester.github.io/shadcn-hub/) •
[✨ 核心特性](#-核心特性) •
[🗺️ 站点与组件全景矩阵](#️-站点与组件全景矩阵) •
[🎨 9 大设计流派实景](#-9-大设计流派实景对比) •
[🚀 快速上手](#-快速上手) •
[📁 项目架构](#-项目架构) •
[🤝 生态鸣谢](#-生态鸣谢)

---

</div>

## 💡 为什么需要 shadcn-hub？

在日常的前端与全栈研发中，以 [shadcn/ui](https://ui.shadcn.com) 为代表的无头组件已成为现代 React/Next.js 生态的事实标准。然而，随着社区衍生项目的爆发式增长，大量优秀的组件库与 Blocks 呈现**严重碎片化**分布：
- 想要专业仪表盘图表，需要单独探索 **[BoardUI](https://www.boardui.com)**；
- 想要商业级落地页与电商区块，需要单独翻阅 **[ShadcnStore](https://shadcnstore.com)**；
- 想要探索 Linear、Geist、Stripe 等现代主流设计风格规范，需要查阅 **[Refero Design](https://styles.refero.design)**；
- 想要 SaaS 团队后台应用界面，需要查找 **[HeroUI Pro](https://heroui.pro)**；
- 想要极致打字机、流光边框、物理流体等微动效，又需要分别引入 **[beUI](https://beui.dev)**、**[RareUI](https://www.rareui.com)**、**[Transitions.dev](https://transitions.dev)** 或 **[BeautifulUI](https://www.beautifului.dev)**。

不仅在十几个独立网站间来回跳转极其繁琐，许多展示站还存在“标注几十个但页面只有三四个占位图”的虚标问题。更关键的是，shadcn 最新 **base-nova** 架构已经转向 `@base-ui/react`，原旧有 Radix 范式存在大量兼容差异。

**`shadcn-hub`** 彻底解决了这一切 —— 它将 **shadcn/ui 官方全量 61 款原子组件** 与上述 **9 大衍生生态** 统一收录并全部实机运行在一个项目中，提供**双层全景导航、全局 Cmd+K 搜索、全实装真实代码、严格 1:1 数量对齐**的一站式基座。

> 🌐 **English Overview**: *shadcn-hub is an all-in-one panoramic workbench and cross-ecosystem benchmark for shadcn/ui. It collects the official 61 core components alongside 9 curated derivative libraries (BoardUI, ShadcnStore, Refero Styles, HeroUI Pro, beUI, RareUI, Transitions.dev, BeautifulUI, ShadcnSpace) with 100% interactive running code, dual navigation, and global Cmd+K search built on Next.js 16, Tailwind CSS v4, and @base-ui/react.*

---

## ✨ 核心特性

- 🎯 **100% 严谨实机渲染（零虚标）**
  所有页面的 Badge 标签与统计数字，均与页面中实际渲染的代码卡片、组件、Block 实体保持 **1:1 绝对一致**，杜绝“标注几十个但页面只有三四个”的假数据。
- 🧭 **双层流式交互导航体系**
  - **顶部全景水平导航栏**：一键无缝横跳 10 大生态（Hub 大厅、shadcn 核心库、BoardUI、ShadcnStore 等）；内置暗黑/明亮色彩模式无缝切换。
  - **左侧响应式分类侧边栏**：按业务、功能分类或视觉风格垂直划分，移动端自适应抽屉式滑出。
- ⚡ **前沿技术栈驱动**
  - **Next.js 16 (App Router + Turbopack)**：秒级极速热重载，预渲染 47 个静态页面。
  - **Tailwind CSS v4**：基于全新原生级 CSS 变量引擎构建。
  - **Base UI (base-nova)**：采用 `@base-ui/react` 原生规范，无缝适配新版无头组件结构。
  - **Lucide Icons**：全量矢量化图标体系。

---

## 🗺️ 站点与组件全景矩阵

全站收录 **1 个官方核心库 + 9 大生态扩展站点**，构建了清晰的分类与实装体系：

| 入口 | 站点名称 | 官方/原站 | 实装组件/区块数量 | 包含的核心分类与内容 |
| :--- | :--- | :--- | :---: | :--- |
| **01** | **shadcn/ui 官方库** | [ui.shadcn.com](https://ui.shadcn.com) | **61 款组件** | 表单(16)、布局(8)、浮层(9)、数据(8)、导航(5)、反馈(8)、扩展(7) |
| **02** | **BoardUI** | [boardui.com](https://www.boardui.com) | **19 款图表 + AI 套件** | 19 种高阶仪表盘图表；AI 思维链、Token 监控、Web Search 多源流 |
| **03** | **ShadcnStore** | [shadcnstore.com](https://shadcnstore.com) | **39 类区块 + Storefront** | 全站 39 个细分类目索引（Hero, Pricing, Bento 等）；电商购物车全套件 |
| **04** | **Refero Styles** | [refero.design](https://styles.refero.design) | **9 大设计风格 + Tokens** | Linear, Geist, Apple, Neo-Brutalism 等 9 大流派实机代码与规范调色盘 |
| **05** | **HeroUI Pro** | [heroui.pro](https://heroui.pro) | **Marketing + App 套件** | 动态 Pricing 周期切换、功能对比矩阵、SaaS 团队工作台与审计表格 |
| **06** | **ShadcnSpace** | [shadcnspace.com](https://shadcnspace.com) | **Marketing, Dash, Pages** | Bento 栅格、CLI 安装块、KPI 仪表卡、实时交易流水流水表、现代 Auth |
| **07** | **beUI** | [beui.dev](https://beui.dev) | **高质感动态交互** | 打字机效果、数字平滑翻牌自增、边框流光旋转按钮、Spotlight 光斑卡片 |
| **08** | **RareUI** | [rareui.com](https://www.rareui.com) | **前沿物理微交互** | 物理粘滞流体球（Fluid Orb）、灵动控制悬浮岛、环境光反射卡片 |
| **09** | **Transitions.dev** | [transitions.dev](https://transitions.dev) | **丝滑过渡动画** | 弹簧滑动选项卡（Spring Tab）、列表交错入场（Stagger）、几何形变卡 |
| **10** | **BeautifulUI** | [beautifului.dev](https://www.beautifului.dev) | **现代视觉美学** | Aurora 极光动态流光背景、超高透磨砂毛玻璃（Glassmorphism）、棱镜折射卡 |

---

### 📦 shadcn/ui 官方 61 款全量组件清单

<details>
<summary><b>点击展开查看 61 款官方组件逐项对应清单</b></summary>

```
├── 📝 表单系统 Forms (16 款)
│   ├── Button, ButtonGroup, Input, InputGroup, Field, Textarea
│   ├── Select, NativeSelect, Checkbox, RadioGroup, Switch, Slider
│   └── Toggle, ToggleGroup, InputOTP, Label
├── 📐 容器布局 Layout (8 款)
│   ├── Card, Accordion, Tabs, Separator
│   └── Collapsible, AspectRatio, Resizable, ScrollArea
├── 💬 浮层交互 Overlay (9 款)
│   ├── Dialog, AlertDialog, Sheet, Drawer, Popover
│   └── HoverCard, Tooltip, DropdownMenu, ContextMenu
├── 📊 数据呈现 Data (8 款)
│   ├── Table, Calendar, Chart, Carousel
│   └── Avatar, Badge, Combobox, Command
├── 🧭 导航菜单 Navigation (5 款)
│   └── Breadcrumb, NavigationMenu, Menubar, Pagination, DropdownMenu
├── 🔔 状态反馈 Feedback (8 款)
│   └── Alert, Toast, Progress, Skeleton, Spinner, Kbd, Empty, Message
└── 🧩 扩展组件 Extended (7 款)
    └── Attachment (附件), Item (行项), Marker (标记), Direction (方向),
        Questionnaire (答题卡), MessageScroller (消息滚动), Sidebar (侧栏)
```

</details>

---

## 🎨 9 大设计流派实景对比

在 `src/app/sites/refero/styles/` 路径下，本项目完整复刻并可交互体验全球 9 种极具代表性的现代前端 UI 风格：

1. **Linear 极简单色**：深灰底色、1px 微光边框、极窄内间距、键盘快捷键驱动。
2. **Vercel Geist**：纯黑白对比（#000000 / #ffffff）、单像素几何线条与高信息密度。
3. **Apple Smooth**：超大曲率连续圆角（Squircle）、柔和微阴影、大字号留白。
4. **Neo-Brutalism (新野兽派)**：高饱和对比色、纯黑硬粗边框（2px/3px）、平移硬投影（Offset Drop Shadow）。
5. **Stripe Fintech**：多重弥散渐变光晕、高奢质感卡片、金融级数字排版。
6. **Supabase Dark Neon**：深黑背景搭配荧光祖母绿（Emerald Neon），开发者极客视觉。
7. **Raycast Desktop**：macOS 桌面原生质感、半透明磨砂毛玻璃与多级命令悬浮。
8. **Notion Document**：温暖柔和纸张底色（#FAF9F6）、精致衬线排版与沉浸式内容编辑。
9. **Perplexity AI Fluid**：柔和弥散发光、渐变微渐变描边与 AI 对话流体验。

---

## 🚀 快速上手

### 环境要求
- **Node.js**: >= 20.x LTS（推荐 Node.js 22+ 或 24 LTS）
- **包管理器**: `npm`、`pnpm` 或 `bun`

### 1. 克隆代码仓库
```bash
git clone git@github.com:wangtester/shadcn-hub.git
cd shadcn-hub
```

### 2. 安装依赖项
```bash
npm install
```

### 3. 启动开发服务器
```bash
npm run dev
```
启动成功后，在浏览器中打开：**`http://localhost:3001`** 即可畅享完整组件工作台。

### 4. 生产环境构建与验证
```bash
npm run build
npm run start
```
> 本项目通过严格的 TypeScript 类型推导与 Turbopack 构建校验，47 个静态页面全绿打包通过。

---

## 📁 项目架构

```text
shadcn-hub/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 全局 RootLayout（集成 TopNav 与 ThemeProvider）
│   │   ├── page.tsx                # 全景 Ecosystem Hub 大厅
│   │   ├── globals.css             # Tailwind CSS v4 与核心变量
│   │   ├── shadcn/                 # 官方 61 款核心组件分类路由
│   │   │   ├── forms/              # 表单分类 (16 组件)
│   │   │   ├── layout/             # 布局分类 (8 组件)
│   │   │   ├── overlay/            # 浮层分类 (9 组件)
│   │   │   ├── data/               # 数据分类 (8 组件)
│   │   │   ├── navigation/         # 导航分类 (5 组件)
│   │   │   ├── feedback/           # 反馈分类 (8 组件)
│   │   │   └── extended/           # 扩展分类 (7 组件)
│   │   └── sites/                  # 9 大生态扩展站点
│   │       ├── boardui/            # 19 款工业图表 + AI Agentic 套件
│   │       ├── shadcnstore/        # 39 类营销/业务 Blocks + 电商 Storefront
│   │       ├── refero/             # 9 种现代主流设计流派与设计系统 Tokens
│   │       ├── heroui/             # SaaS 落地页应用与后台管理
│   │       ├── beui/               # 打字机、流光边框等微交互
│   │       ├── rareui/             # 流体球、环境光卡片等物理特效
│   │       ├── transitions/        # 弹簧滑块、交错入场动画
│   │       ├── beautifului/        # 极光背景、磨砂玻璃美学
│   │       └── shadcnspace/        # Marketing Bento、CLI 模块与控制台
│   ├── components/
│   │   ├── top-nav.tsx             # 顶部全景水平导航栏
│   │   ├── sidebar-layout.tsx      # 左侧响应式侧栏通用框架
│   │   ├── section.tsx             # 标准化 Section 与 PageHeader
│   │   └── ui/                     # 基于 @base-ui/react 的基础原子组件库
│   └── lib/
│       └── utils.ts                # cn() 样式合并辅助函数
├── components.json                 # shadcn/ui 配置文件
├── package.json
└── README.md
```

---

## 🤝 生态鸣谢

本项目向以下优秀的开源项目与设计社区致敬：
- [shadcn/ui](https://ui.shadcn.com) by [@shadcn](https://twitter.com/shadcn)
- [Base UI](https://base-ui.com) by MUI Team
- [Lucide Icons](https://lucide.dev)
- [BoardUI](https://www.boardui.com)
- [ShadcnStore](https://shadcnstore.com)
- [Refero Design](https://styles.refero.design)
- [HeroUI Pro](https://heroui.pro)
- [beUI](https://beui.dev)
- [RareUI](https://www.rareui.com)
- [Transitions.dev](https://transitions.dev)
- [BeautifulUI](https://www.beautifului.dev)
- [ShadcnSpace](https://shadcnspace.com)

---

## 📄 开源许可证

本项目采用 [MIT License](LICENSE) 开源。欢迎 Star 🌟、Fork 与提交 PR！
