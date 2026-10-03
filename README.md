# shadcn-hub · 全景组件生态库与对比中心

本项目基于 **Next.js 16 + Tailwind CSS v4 + @base-ui/react (shadcn/ui base-nova)** 构建，旨在一站式收录、实机渲染并对比展示 **shadcn/ui 官方全量组件** 及 **9 大顶尖基于 shadcn 的生态社区/Blocks/动效组件库**。

---

## 🌟 核心特性

- **双层全局交互导航**：
  - **顶部全宽导航栏**：涵盖 Hub 全局大厅、shadcn/ui 官方核心库，以及 9 个精选生态站点直达入口；内置暗黑/明亮主题实时切换。
  - **左侧响应式侧边栏**：按业务、组件类型、设计风格多维度分类（移动端自适应抽屉）。
- **100% 实机渲染与数量严谨对齐**：
  - 杜绝“虚标统计”，页面标注的统计数量与实际渲染的代码卡片、组件、Block 实体保持严格 1:1 一致。
- **现代化技术栈**：
  - Next.js 16 (App Router + Turbopack)
  - React 19 + TypeScript
  - Tailwind CSS v4
  - Lucide React 图标体系

---

## 📚 站点收录与组件分类明细

### 1. shadcn/ui 官方核心库（全量 61 款组件）
涵盖官方全部 7 大功能领域，所有组件均完整实机可交互渲染：
- **表单 Forms (16 款)**：Button, ButtonGroup, Input, InputGroup, Field, Textarea, Select, NativeSelect, Checkbox, RadioGroup, Switch, Slider, Toggle, ToggleGroup, InputOTP, Label
- **布局 Layout (8 款)**：Card, Accordion, Tabs, Separator, Collapsible, AspectRatio, Resizable, ScrollArea
- **浮层 Overlay (9 款)**：Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu
- **数据展示 Data (8 款)**：Table, Calendar, Chart, Carousel, Avatar, Badge, Combobox, Command
- **导航 Navigation (5 款)**：Breadcrumb, NavigationMenu, Menubar, Pagination, DropdownMenu
- **反馈 Feedback (8 款)**：Alert, Toast, Progress, Skeleton, Spinner, Kbd, Empty, Message, Bubble
- **扩展 Extended (7 款)**：Attachment (附件卡), Item (列表行项), Marker (图钉), Direction (文字方向), Questionnaire (答题卡), MessageScroller (消息滚动), Sidebar (侧栏布局)

### 2. 生态与垂直扩展站点
- **BoardUI (`boardui.com`)**：
  - **Charts (19 款)**：完整实机渲染 19 款工业级仪表盘图表（面积、柱状、雷达、径向环、时速表、双轴组合、漏斗、阶段柱、桑基图、运动环、火花线、堆叠图、直方图、热力格等）。
  - **Agentic AI 套件**：专为大模型智能体打造的思维链（Reasoning/Thinking）折叠面板、Token/Context 上下文窗口监控、Web 搜索多源引用面板。
- **ShadcnStore (`shadcnstore.com`)**：
  - **Sections 矩阵 (39 个类目)**：全景收录官方 39 个细分类目（Navbars, Hero, Features, Testimonials, FAQ, Pricing, Teams, Footers, CTA, Stats, Blog, Bento 等）及实战 Block 演练。
  - **E-Commerce 商业套件**：商品橱窗、价格过滤、类目检索、侧边滑动购物车抽屉。
- **Refero Styles (`styles.refero.design`)**：
  - **9 大现代主流设计风格**：Linear 极简单色、Vercel Geist、Apple Smooth、Neo-Brutalism 新野兽派、Stripe Fintech、Supabase Dark Neon 霓虹、Raycast Desktop、Notion Document、Perplexity AI Fluid 柔光。
  - **Design Tokens**：语义化调色盘与 AI 可读的规范设计系统。
- **HeroUI Pro (`heroui.pro`)**：
  - 交互式 Pricing 周期切换、功能对比矩阵、SaaS 团队工作台与审计日志表格。
- **beUI (`beui.dev`)**：
  - 打字机文字动效、平滑数字自增翻牌器、边框流光旋转按钮、Spotlight 光斑跟随卡片。
- **RareUI (`rareui.com`)**：
  - 物理粘滞流体球（Fluid Orb）、灵动控制悬浮岛、环境微流光反射卡片。
- **Transitions.dev (`transitions.dev`)**：
  - 弹簧滑动选项卡（Spring Tab）、列表交错级联入场（Stagger）、原地几何形变面板。
- **BeautifulUI (`beautifului.dev`)**：
  - Aurora 极光动态流光背景、超高透磨砂毛玻璃卡（Glassmorphism）、棱镜折射渐变卡。

---

## 🚀 本地开发与运行

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```
> 注：默认在 `http://localhost:3001` 启动（可在 `package.json` 或启动命令中根据需要调整端口）。

### 3. 构建生产版本
```bash
npm run build
```

---

## 📄 开源许可证

MIT License.
