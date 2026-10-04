import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, Box, Cpu, Store, BarChart2, Palette, Wand2, Compass, Gem, ExternalLink } from "lucide-react";

interface SiteCard {
  title: string;
  category: string;
  url: string;
  originUrl: string;
  desc: string;
  badge: string;
  tagColor: string;
  icon: React.ReactNode;
  highlights: string[];
}

const siteList: SiteCard[] = [
  {
    title: "shadcn/ui 官方核心库",
    category: "Official Core",
    url: "/shadcn",
    originUrl: "https://ui.shadcn.com",
    desc: "覆盖官方全量 64 款原子及复合组件，统一收敛至左侧侧边栏（表单、布局、浮层、数据展示、导航、反馈、AI扩展）。",
    badge: "64 款全量组件",
    tagColor: "bg-blue-500/10 text-blue-600 border-blue-500/30",
    icon: <Box className="h-5 w-5 text-blue-500" />,
    highlights: ["Base UI / Radix 兼容", "Tailwind CSS v4", "完整键盘与无障碍支持"],
  },
  {
    title: "ShadcnSpace",
    category: "Blocks & Templates",
    url: "/sites/shadcnspace",
    originUrl: "https://shadcnspace.com",
    desc: "457+ 生产级高可用 Blocks、12 套完整 Dashboard 模板与 456+ 增强组件，支持 MCP Server 实时调度。",
    badge: "457+ Blocks",
    tagColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    highlights: ["SaaS Hero / CTA", "KPI 仪表盘流水", "业务登录与团队管理"],
  },
  {
    title: "ShadcnStore",
    category: "Sections & E-commerce",
    url: "/sites/shadcnstore",
    originUrl: "https://shadcnstore.com",
    desc: "覆盖 39 个细分业务类目的生产级区块库，涵盖从 Bento 网格到电商商品橱窗与购物车侧边抽屉。",
    badge: "269+ Blocks",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    icon: <Store className="h-5 w-5 text-indigo-500" />,
    highlights: ["39 细分类目", "Bento Grid / FAQ", "完整电商 Storefront"],
  },
  {
    title: "BoardUI",
    category: "Agent & Dashboard",
    url: "/sites/boardui",
    originUrl: "https://www.boardui.com",
    desc: "专为数据密集型仪表盘与 AI Agent 智能体打造，包含 19 款高阶图表卡片（Chart Cards）与任务执行轨迹看板。",
    badge: "85+ Components",
    tagColor: "bg-violet-500/10 text-violet-600 border-violet-500/30",
    icon: <BarChart2 className="h-5 w-5 text-violet-500" />,
    highlights: ["19 款独立 Chart Cards", "AI Agent 决策流水", "高密度监控网格"],
  },
  {
    title: "HeroUI Pro",
    category: "Design System",
    url: "/sites/heroui",
    originUrl: "https://heroui.pro",
    desc: "前身 NextUI 进化版，以饱满超大圆角（2xl）、柔和微光晕霓虹、微质感磨砂与极佳触感著称。",
    badge: "大圆角微质感",
    tagColor: "bg-pink-500/10 text-pink-600 border-pink-500/30",
    icon: <Sparkles className="h-5 w-5 text-pink-500" />,
    highlights: ["Glow Hero 霓虹首屏", "磨砂玻璃拟态卡", "高集成应用偏好设置"],
  },
  {
    title: "Refero Styles",
    category: "Styles & Tokens",
    url: "/sites/refero",
    originUrl: "https://styles.refero.design",
    desc: "全球顶尖网站真实风格提炼库，同屏对比 Linear、Vercel、Apple 与新粗野主义，包含 AI 可读 DESIGN.md。",
    badge: "9 大设计风格",
    tagColor: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    icon: <Palette className="h-5 w-5 text-amber-500" />,
    highlights: ["Linear / Vercel 对比", "新粗野主义硬投影", "DESIGN.md 规范矩阵"],
  },
  {
    title: "beUI",
    category: "Motion Animations",
    url: "/sites/beui",
    originUrl: "https://beui.dev",
    desc: "基于 Motion 与 Tailwind CSS 构建的高级动画组件库，提供打字机、流光按钮与鼠标光斑跟随卡片。",
    badge: "Motion 动态特效",
    tagColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    icon: <Wand2 className="h-5 w-5 text-cyan-500" />,
    highlights: ["Typing 打字机动画", "Shimmer 流光按钮", "Spotlight 光斑跟随"],
  },
  {
    title: "RareUI",
    category: "Rare Interactions",
    url: "/sites/rareui",
    originUrl: "https://www.rareui.com",
    desc: "逆向工程还原全球先锋网站中罕见的动效组件：Fluid Orb 物理蠕动流体光晕球与悬浮灵动岛。",
    badge: "稀缺交互动效",
    tagColor: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    icon: <Compass className="h-5 w-5 text-purple-500" />,
    highlights: ["Fluid Orb 蠕动流体", "悬浮灵动控制岛", "彩虹微流光边缘"],
  },
  {
    title: "Transitions.dev",
    category: "View Transitions",
    url: "/sites/transitions",
    originUrl: "https://transitions.dev",
    desc: "专注于原生 View Transitions 与物理弹簧布局变形（Morphing），让容器展开与阶梯入场连续丝滑。",
    badge: "弹簧形态演变",
    tagColor: "bg-teal-500/10 text-teal-600 border-teal-500/30",
    icon: <Layers className="h-5 w-5 text-teal-500" />,
    highlights: ["Spring Tab 弹簧滑块", "原地几何形变卡片", "列表交错级联入场"],
  },
  {
    title: "BeautifulUI",
    category: "Aesthetic UI",
    url: "/sites/beautifului",
    originUrl: "https://www.beautifului.dev",
    desc: "追求极具辨识度与艺术感的高颜值 UI 组件：极光流光背景、微渐变高光徽章与多层玻璃拟态。",
    badge: "高颜值艺术组件",
    tagColor: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    icon: <Gem className="h-5 w-5 text-rose-500" />,
    highlights: ["Aurora 极光流光卡", "高光渐变胶囊徽标", "立体折射磨砂面板"],
  },
  {
    title: "Magic UI",
    category: "Design Engineer Motion",
    url: "/sites/magicui",
    originUrl: "https://magicui.design",
    desc: "专为设计工程师打造的高级动效库：Marquee 跑马灯、Animated Beam 节点数据流、Border Beam 边框流光与 Magic Bento Grid。",
    badge: "50+ 动效组件与 Bento",
    tagColor: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
    icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
    highlights: ["Marquee 无缝跑马灯", "Animated Beam 连线", "Border Beam 流光边框"],
  },
  {
    title: "Aceternity UI",
    category: "Visual Aesthetics",
    url: "/sites/aceternity",
    originUrl: "https://ui.aceternity.com",
    desc: "将网站拉升至艺术高度的暗黑极客美学：Lamp Header 神灯聚光、Sparkles 星光粒子、3D Pin 空间图钉与 Tracing Beam 追踪流。",
    badge: "顶奢视觉与 3D 透视",
    tagColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    icon: <Wand2 className="h-5 w-5 text-cyan-500" />,
    highlights: ["Lamp Header 聚光光锥", "Sparkles 星空粒子", "3D Pin 空间倾斜卡片"],
  },
];

export default function HomeHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl space-y-12">
      {/* 顶部主横幅 */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/40 px-3.5 py-1 text-xs font-semibold shadow-2xs">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>全网首个 shadcn 全生态全量组件与 Blocks 大一统画廊</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
          聚合 shadcn/ui 与 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">11 大扩展组件库生态</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          一个站点统一聚合全部官方原子组件与 11 个精选顶尖生态扩展库（包含 Magic UI 与 Aceternity UI）。
          点击任意站点即可进入专属的双层系统：顶部导航快速跨站，左侧垂直侧边栏切换不同类目的页面与 Blocks，同屏对比全网最前沿的 UI 交互与视觉效果。
        </p>
      </div>

      {/* 综合指标 6 维矩阵 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">聚合设计生态库</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-primary">12 个</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">1 核心 + 11 扩展</p>
        </div>
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">官方核心组件</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-blue-600 dark:text-blue-400">64 款</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">100% 官方全量</p>
        </div>
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">生产级 Blocks</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-indigo-600 dark:text-indigo-400">1,000+</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">39 类业务区块</p>
        </div>
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">设计师百宝箱</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-amber-600 dark:text-amber-400">24+ 款</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">7 大专业维度</p>
        </div>
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">高阶图表与动效</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-purple-600 dark:text-purple-400">35+ 项</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">Lamp / Pin / 19 图表</p>
        </div>
        <div className="p-3.5 rounded-xl border bg-card/60 shadow-2xs text-center hover:border-primary/40 transition-colors">
          <p className="text-[11px] text-muted-foreground font-semibold">预渲染静态路由</p>
          <p className="text-2xl md:text-3xl font-black mt-1 text-emerald-600 dark:text-emerald-400">58 个</p>
          <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">Turbopack 静态生成</p>
        </div>
      </div>

      {/* 专属推荐：前端设计师常备工具箱 Banner */}
      <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
            <span>NEW FEATURE</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            🛠️ 专业前端设计师必备工具箱上线
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed">
            收录实景测色、真实产品交互走查、苹果风网格弥散、非线性多层阴影、CSS 弹性曲线与 WCAG 色盲视力模拟等 24+ 款专业神器，支持一键直达与链接复制。
          </p>
        </div>
        <Link href="/tools" className="shrink-0">
          <Button className="gap-2 font-bold px-6 shadow-md">
            <span>进入设计师工具箱 (24+ 工具)</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* 12 个站点全景展示矩阵卡片 */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">全部聚合站点与组件库全景</h2>
            <p className="text-xs text-muted-foreground mt-1">每个站点均配备专属的双层导航体系与左侧响应式抽屉菜单</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs font-mono bg-primary/5 text-primary border-primary/20">
              12 大站点全量收录
            </Badge>
            <Badge variant="secondary" className="text-xs font-mono">
              58 个预渲染页面
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteList.map((site) => (
            <Card key={site.title} className="flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 border">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      {site.icon}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold leading-tight">{site.title}</CardTitle>
                      <span className="text-[11px] text-muted-foreground font-mono">{site.category}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className={`text-[10px] shrink-0 font-medium ${site.tagColor}`}>
                    {site.badge}
                  </Badge>
                </div>
                <CardDescription className="text-xs leading-relaxed min-h-[36px]">
                  {site.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-2">
                <div className="space-y-1.5 border-t pt-3">
                  {site.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-3 border-t flex items-center justify-between">
                <a
                  href={site.originUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <span>原网</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <Link href={site.url}>
                  <Button size="sm" className="h-7 text-xs gap-1.5">
                    <span>进入查看</span>
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
