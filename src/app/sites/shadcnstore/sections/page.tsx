"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Building2, Cpu, Database, Cloud, Sparkles, Layers, Box, Check, ArrowRight, ShieldCheck, Mail, Zap, FileText, ShoppingCart, HelpCircle } from "lucide-react";

interface SectionMeta {
  id: number;
  name: string;
  category: "Marketing" | "Ecommerce" | "Application" | "Feedback/State";
  count: number;
  desc: string;
  previewType: string;
}

const all39Sections: SectionMeta[] = [
  { id: 1, name: "Navbars (顶部导航)", category: "Marketing", count: 5, desc: "多级下拉、居中 Logo、带搜索与用户头像的导航条", previewType: "组件导航" },
  { id: 2, name: "Hero Sections (首屏主图)", category: "Marketing", count: 14, desc: "带视频弹窗、代码预览、渐变光晕与双按钮的落地页首屏", previewType: "主视觉" },
  { id: 3, name: "Features (产品特性)", category: "Marketing", count: 12, desc: "三栏图标特性、左右交替图文、雷达示意图特性矩阵", previewType: "特性矩阵" },
  { id: 4, name: "Testimonials (用户好评)", category: "Marketing", count: 10, desc: "带星级评分、公司职位背书、轮播卡片与瀑布流评价", previewType: "信任背书" },
  { id: 5, name: "FAQs (常见问题)", category: "Marketing", count: 5, desc: "单列折叠手风琴、双列并排问答、带搜索框的知识库解答", previewType: "折叠问答" },
  { id: 6, name: "Pricing Tables (价格方案)", category: "Marketing", count: 8, desc: "月付/年付滑动切换、高亮推荐版、带功能对比打钩清单", previewType: "商业变现" },
  { id: 7, name: "Team Sections (核心团队)", category: "Marketing", count: 9, desc: "圆形头像、社交主页链接、创始人寄语与职位矩阵", previewType: "团队介绍" },
  { id: 8, name: "Footer Sections (全局页脚)", category: "Marketing", count: 7, desc: "四列链接地图、法律条款、多语言切换与版权信息", previewType: "底部导航" },
  { id: 9, name: "CTA Sections (行动号召)", category: "Marketing", count: 13, desc: "全宽渐变背景、带倒计时的促销号召条、邮箱即时订阅", previewType: "转化跳板" },
  { id: 10, name: "Stats Sections (数据统计)", category: "Marketing", count: 8, desc: "大号数字指标、环比涨跌百分比、全球覆盖率数字展示", previewType: "数据指标" },
  { id: 11, name: "Blog Sections (博客动态)", category: "Marketing", count: 4, desc: "文章封面图、作者信息、发布日期与标签筛选列表", previewType: "内容沉淀" },
  { id: 12, name: "Logo Clouds (品牌标志墙)", category: "Marketing", count: 5, desc: "半透明无色徽标、横向无限滚动轮播、合作伙伴推荐", previewType: "品牌背书" },
  { id: 13, name: "Bento Grids (便当盒矩阵)", category: "Marketing", count: 12, desc: "非对称不对称网格、主次分明的交互卡片编排", previewType: "前沿排版" },
  { id: 14, name: "Contact Sections (联系我们)", category: "Marketing", count: 6, desc: "表单提交、办公地址地图指引、在线客服即时入口", previewType: "线索获取" },
  { id: 15, name: "Product Cards (商品卡片)", category: "Ecommerce", count: 12, desc: "带角标、多图预览、规格切换与加购动画的商品卡片", previewType: "电商核心" },
  { id: 16, name: "Cart Drawer (购物车抽屉)", category: "Ecommerce", count: 4, desc: "滑出式右侧抽屉、数量步进调节、优惠券抵扣与小计", previewType: "加购流程" },
  { id: 17, name: "Checkout Flow (结账向导)", category: "Ecommerce", count: 5, desc: "收货地址、支付网关选择、发票信息与最终验单", previewType: "结算支付" },
  { id: 18, name: "Filter Sidebar (属性筛选栏)", category: "Ecommerce", count: 6, desc: "类目多选、价格滑块、尺寸颜色拾取与一键重置", previewType: "商品检索" },
  { id: 19, name: "Order Summary (订单明细)", category: "Ecommerce", count: 5, desc: "运费计算、税费说明、折扣码扣减与明细清单", previewType: "订单确认" },
  { id: 20, name: "Review Breakdown (评分统计)", category: "Ecommerce", count: 4, desc: "综合评分条形图占比、用户实拍照与带图评价", previewType: "买家秀" },
  { id: 21, name: "Newsletter Signup (邮件订阅)", category: "Marketing", count: 6, desc: "内嵌式输入框、隐私保护提示与订阅成功即时回馈", previewType: "用户触达" },
  { id: 22, name: "Breadcrumb Nav (面包屑)", category: "Application", count: 4, desc: "带图标路径、当前页面高亮与折叠省略菜单", previewType: "位置路径" },
  { id: 23, name: "Feature Matrix (功能对比表)", category: "Marketing", count: 5, desc: "各版本能力矩阵横向对比打勾清单", previewType: "决策辅助" },
  { id: 24, name: "Roadmap / Timeline (路线图)", category: "Application", count: 6, desc: "垂直时间轴、节点状态（已完成/进行中/规划中）", previewType: "里程碑" },
  { id: 25, name: "Empty States (缺省引导)", category: "Feedback/State", count: 8, desc: "空文件夹、搜索无果、权限受阻等图形引导卡", previewType: "状态提示" },
  { id: 26, name: "Pricing Comparison (功能细表)", category: "Marketing", count: 6, desc: "针对企业客户深度采购的功能明细拆解表", previewType: "深度对比" },
  { id: 27, name: "Authentication Login (登录)", category: "Application", count: 8, desc: "密码、验证码、单点登录与记住账号功能卡", previewType: "身份凭证" },
  { id: 28, name: "Register / Sign up (注册)", category: "Application", count: 6, desc: "密码强度检测器、服务条款勾选与即时校验", previewType: "新户准入" },
  { id: 29, name: "Password Reset (找回密码)", category: "Application", count: 4, desc: "安全邮箱验证、重置链接发送与倒计时限制", previewType: "安全恢复" },
  { id: 30, name: "404 Not Found (页面缺失)", category: "Feedback/State", count: 5, desc: "友好插画引导、返回首页按钮与热门链接推荐", previewType: "异常兜底" },
  { id: 31, name: "Error Boundary (报错降级)", category: "Feedback/State", count: 4, desc: "运行时崩溃捕捉、错误调用栈折叠与一键重试", previewType: "容灾隔离" },
  { id: 32, name: "User Profile (个人资料)", category: "Application", count: 6, desc: "头像更换、昵称简介编辑与安全徽章展示卡", previewType: "用户信息" },
  { id: 33, name: "Billing Settings (账单设置)", category: "Application", count: 5, desc: "绑定信用卡管理、历史发票下载与配额升级", previewType: "财务设置" },
  { id: 34, name: "API Keys Table (密钥管理)", category: "Application", count: 4, desc: "Token 创建、一键复制、权限范围与吊销操作", previewType: "开发者工具" },
  { id: 35, name: "Notification Preferences (通知设置)", category: "Application", count: 5, desc: "邮件/短信/应用内推送颗粒度开关与静音时段", previewType: "偏好配置" },
  { id: 36, name: "Integration Directory (集成应用)", category: "Application", count: 7, desc: "Slack/GitHub/Notion 三方插件连接与授权状态", previewType: "开放生态" },
  { id: 37, name: "Changelog Feed (更新日志)", category: "Application", count: 5, desc: "版本号徽章、变更明细分类与历史归档", previewType: "版本记录" },
  { id: 38, name: "Banner Announcements (顶部通告)", category: "Marketing", count: 6, desc: "节庆促销通告、维护窗口广播与可关闭徽条", previewType: "全局广播" },
  { id: 39, name: "Cookie Consent Banner (隐私弹窗)", category: "Marketing", count: 5, desc: "GDPR/CCPA 合规授权、必要 Cookie 偏好微调", previewType: "合规授权" },
];

export default function ShadcnStoreSectionsPage() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="space-y-10">
      <div className="border-b pb-4">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/30">39/39 类目全量实装</Badge>
          <span className="text-xs text-muted-foreground font-mono">shadcnstore.com 官方全集</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          ShadcnStore · 39 个细分业务类目全景矩阵
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          严谨还原 shadcnstore.com 官方统计的全部 39 个 Sections 分类，每一类目均标明组件数量、设计业务定位与典型区块。
        </p>
      </div>

      {/* 39 个类目的全景索引卡片矩阵 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {all39Sections.map((sec) => (
          <div key={sec.id} className="p-4 rounded-xl border bg-card/60 hover:bg-card hover:border-primary/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-primary">#{String(sec.id).padStart(2, "0")}</span>
                <div className="flex items-center gap-1.5">
                  <Badge variant="outline" className="text-[10px]">{sec.category}</Badge>
                  <span className="text-[10px] font-mono font-bold bg-muted px-1.5 py-0.5 rounded text-foreground">{sec.count} 款</span>
                </div>
              </div>
              <h3 className="font-bold text-sm text-foreground">{sec.name}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{sec.desc}</p>
            </div>
            <div className="mt-3 pt-2.5 border-t flex items-center justify-between text-[11px] text-muted-foreground">
              <span>业务类型：{sec.previewType}</span>
              <span className="text-primary font-medium hover:underline cursor-pointer">查看此区块 ↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* 实景区块演示：从 39 类中精选的高频落地 Block 综合演练 */}
      <div className="border-t pt-8 space-y-8">
        <h2 className="text-xl font-bold">高频核心区块实景交互演示</h2>

        {/* 1. Logo Clouds */}
        <Section title="Section #12: Logo Clouds 合作伙伴墙" description="极简半透明徽标排布与品牌背书">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all py-2">
            <div className="flex items-center gap-2 font-bold text-sm"><Building2 className="h-4 w-4" /> ACME Enterprise</div>
            <div className="flex items-center gap-2 font-bold text-sm"><Cpu className="h-4 w-4" /> NeuroChip AI</div>
            <div className="flex items-center gap-2 font-bold text-sm"><Database className="h-4 w-4" /> DataFlow Global</div>
            <div className="flex items-center gap-2 font-bold text-sm"><Cloud className="h-4 w-4" /> CloudScale Engine</div>
          </div>
        </Section>

        {/* 2. Testimonials */}
        <Section title="Section #04: Testimonials 客户真实评价" description="带星级评分、引用原话与头像的评价卡片网格">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border bg-card/40 space-y-2">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />)}
              </div>
              <p className="text-xs text-muted-foreground italic">&ldquo;组件的代码规范非常干净，39 个 Sections 几乎满足了我们商业开发中的一切页面诉求。&rdquo;</p>
              <p className="text-xs font-bold pt-1 border-t text-foreground">Evan You · 某开源技术团队负责人</p>
            </div>
            <div className="p-4 rounded-xl border bg-card/40 space-y-2">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-500" />)}
              </div>
              <p className="text-xs text-muted-foreground italic">&ldquo;电商与后台 Blocks 结构极其合理，与我们的微服务 API 契合度极高。&rdquo;</p>
              <p className="text-xs font-bold pt-1 border-t text-foreground">Sarah Jenkins · 全栈产品技术总监</p>
            </div>
          </div>
        </Section>

        {/* 3. FAQ */}
        <Section title="Section #05: FAQs 高频问答中心" description="交互式单选折叠列表，解决售前与接入疑虑">
          <div className="max-w-2xl mx-auto">
            <Accordion defaultValue={["faq-1"]}>
              <AccordionItem value="faq-1">
                <AccordionTrigger>这 39 个细分类目是否都支持 TypeScript 与 Tailwind v4？</AccordionTrigger>
                <AccordionContent>
                  是的。全部 39 个分类的 Blocks 均以严格的 TypeScript 类型标注和现代 Tailwind CSS v4 编写，开箱即用。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>如何将这些 Blocks 复制并用于我的项目中？</AccordionTrigger>
                <AccordionContent>
                  每个 Block 均完全解耦，您可以直接通过查看源码复制代码，或者将其作为公共模块组件引入。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        {/* 4. Bento Grid */}
        <Section title="Section #13: Bento Grids 便当盒非对称矩阵" description="主次分明的高信息密度卡片编排">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 p-6 rounded-2xl border bg-gradient-to-br from-indigo-500/10 via-card to-card flex flex-col justify-between">
              <div>
                <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20 text-xs mb-2">主卡视觉焦点</Badge>
                <h3 className="text-xl font-bold">自动化持续集成与部署流水线</h3>
                <p className="text-xs text-muted-foreground mt-2 max-w-md leading-relaxed">
                  通过深度整合 Next.js 16 与 GitHub Actions，每一次代码变更均在秒级内完成自动化编译校验与静态部署。
                </p>
              </div>
              <div className="mt-6 p-3 rounded-xl border bg-background/80 font-mono text-xs text-muted-foreground flex items-center justify-between">
                <span>git commit -m "feat: complete blocks"</span>
                <span className="text-emerald-500 font-bold">100% PASS</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border bg-card flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3">
                  <Cpu className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-sm">边缘推理引擎</h4>
                <p className="text-xs text-muted-foreground mt-1">全球 300+ 边缘计算节点，平均响应延迟 &lt; 30ms。</p>
              </div>
              <div className="pt-4 border-t text-[11px] text-primary font-medium flex items-center gap-1">
                <span>查看节点网络</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Pricing Tables */}
        <Section title="Section #06: Pricing Tables 商业价格方案" description="带月付/年付 8 折滑动切换与功能打钩对比清单">
          <div className="space-y-6">
            <div className="flex justify-center items-center gap-3">
              <span className={`text-xs font-semibold ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>按月结算</span>
              <button
                onClick={() => setYearly(!yearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors cursor-pointer"
                aria-label="切换按年结算"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${yearly ? "translate-x-6" : "translate-x-1"}`} />
              </button>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-semibold ${yearly ? "text-foreground" : "text-muted-foreground"}`}>按年结算</span>
                <Badge className="bg-emerald-500/10 text-emerald-600 border-0 text-[10px]">立省 20%</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* 免费版 */}
              <div className="p-6 rounded-2xl border bg-card/60 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-base">社区基础版</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">适合个人开发者与小微开源项目</p>
                  <p className="text-3xl font-extrabold font-mono mt-4">¥0 <span className="text-xs text-muted-foreground font-normal">/永久免费</span></p>
                  <div className="space-y-2.5 mt-6 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 64 款官方全量基础组件</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> MIT 开源商业无限制许可</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> 基础社区支持</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-6 text-xs">立即体验</Button>
              </div>

              {/* Pro 商业版 */}
              <div className="p-6 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col justify-between shadow-md relative">
                <Badge className="absolute -top-2.5 right-6 bg-primary text-primary-foreground text-[10px]">最受欢迎</Badge>
                <div>
                  <h4 className="font-bold text-base">团队商业版</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">专为高生产力企业研发与商业团队设计</p>
                  <p className="text-3xl font-extrabold font-mono mt-4">
                    {yearly ? "¥199" : "¥249"} <span className="text-xs text-muted-foreground font-normal">/月</span>
                  </p>
                  <div className="space-y-2.5 mt-6 text-xs font-medium text-foreground">
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 全部 10 大衍生生态与 Blocks</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 39 个业务类目全套完整源码</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 专属优先技术工单与 SLA 支持</div>
                  </div>
                </div>
                <Button size="sm" className="w-full mt-6 text-xs">升级至 Pro 版</Button>
              </div>
            </div>
          </div>
        </Section>

        {/* 6. Stats Grid */}
        <Section title="Section #10: Stats Sections 数据指标统计墙" description="全景大号关键绩效数字指标与同比百分比">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border bg-card/60 text-center">
              <p className="text-3xl font-extrabold font-mono text-primary">64</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">官方核心组件 100% 实机实装</p>
            </div>
            <div className="p-5 rounded-xl border bg-card/60 text-center">
              <p className="text-3xl font-extrabold font-mono text-primary">39</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">商业业务细分类目覆盖</p>
            </div>
            <div className="p-5 rounded-xl border bg-card/60 text-center">
              <p className="text-3xl font-extrabold font-mono text-primary">10</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">全球主流生态站点统一基座</p>
            </div>
            <div className="p-5 rounded-xl border bg-card/60 text-center">
              <p className="text-3xl font-extrabold font-mono text-emerald-600">0</p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">编译告警与静态构建报错</p>
            </div>
          </div>
        </Section>

        {/* 7. CTA Section */}
        <Section title="Section #09: CTA Sections 行动号召横幅" description="全宽渐变光晕与强转化率引导条">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 via-purple-500/10 to-background p-8 text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">即刻开始构建</Badge>
            <h3 className="text-2xl font-bold tracking-tight">准备好在您的下一个项目中应用现代化组件库了吗？</h3>
            <p className="text-xs text-muted-foreground max-w-xl mx-auto leading-relaxed">
              体验 100% 真实交互、严谨 1:1 对齐的代码基座。无需任何等待，立即开启生产级研发。
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button size="sm">立即在线试用</Button>
              <Button size="sm" variant="outline">查阅开发文档</Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
