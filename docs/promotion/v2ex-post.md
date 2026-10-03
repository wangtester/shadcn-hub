# V2EX 分享帖文案

**建议发帖节点**：`分享发现` 或 `程序员`  
**建议发帖标题**：
> [开源] 为了彻底解决组件选型难，我把 shadcn 官方 61 款组件和 9 大生态扩展做成了一个全景对比站

---

### 正文内容（直接复制即可）：

各位 V 友大家好！

最近在做新项目前端技术选型时，发现围绕 **shadcn/ui** 的生态衍生项目越来越多（比如图表库 BoardUI、商业区块 ShadcnStore、各种微动效库 beUI、RareUI 以及 Refero 的各类设计流派）。

但日常开发中经常遇到几个痛点：
1. **生态极其碎片化**：每个衍生站都在各自的域名里，想要对比一个 Pricing 卡片或仪表盘图表，需要在七八个 Tab 之间来回切换。
2. **很多聚合站“虚标严重”**：标题标注收录了几十个组件，点进去发现全是占位图或者根本跑不起来。
3. **架构断代**：shadcn 全新 base-nova 架构已经走向 `@base-ui/react`，原旧 Radix 范式存在大量兼容差异。

为了彻底解决“既要全套组件、又要能同一视图对比、还要能真实复制代码”的诉求，我基于 **Next.js 16 + Tailwind CSS v4 + @base-ui/react** 搭建并开源了 **`shadcn-hub`**。

#### 核心收录与实装内容：
- **shadcn 官方核心库**：7 大分类，全量 **61/61** 款组件 100% 实机渲染（表单 16 款、布局 8 款、浮层 9 款、数据 8 款、导航 5 款、反馈 8 款、扩展 7 款）。
- **BoardUI**：完整实装 **19 款独立工业级图表**（面积/雷达/漏斗/桑基/热力图等）+ **AI Agentic 交互套件**（思维链折叠面板、Token 消耗规、联网搜索流）。
- **ShadcnStore**：全站 **39 个细分类目 Blocks 矩阵** + 完整电商 Storefront 抽屉购物车。
- **Refero Styles**：完整复刻全球 **9 大主流现代设计流派**（Linear 灰阶极简、Vercel Geist、Apple Smooth、Neo-Brutalism 新野兽派、Stripe Fintech、Supabase Dark Neon 霓虹、Raycast、Notion、Perplexity AI Fluid）及 Design Tokens。
- **微交互与动效**：HeroUI Pro、beUI、RareUI、Transitions.dev、BeautifulUI 全套微动效实机体验。

#### 项目特色：
- 严格杜绝虚标，页面统计数与实装组件 **100% 严格一致**。
- 支持全局 **`Cmd + K / Ctrl + K`** 模糊搜索直达任意组件或流派。
- 双层流式导航：顶部 10 大生态直切 + 侧边栏多维分类，自带暗黑/浅色主题。
- 全部采用 Next.js 16 App Router 与 Turbopack 编译，全站静态预渲染 0 报错。

项目现已开源在 GitHub，欢迎大家体验、提 Issue 或 Star 🌟 支持！

- **在线预览**：https://wangtester.github.io/shadcn-hub/
- **GitHub 仓库**：https://github.com/wangtester/shadcn-hub
- **开源协议**：MIT License

大家在组件选型或前端设计系统搭建上有任何建议，也欢迎在帖子里一起交流！
