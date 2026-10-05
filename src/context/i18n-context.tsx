"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from "react";

export type Locale = "en" | "zh";

export interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, defaultVal?: string) => string;
  isEn: boolean;
  isZh: boolean;
}

const STORAGE_KEY = "shadcn_hub_locale";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // TopNav & Header
    "nav.logo": "shadcn-hub",
    "nav.home": "Home",
    "nav.official": "Official Components",
    "nav.officialBadge": "64",
    "nav.gallery": "Live Gallery",
    "nav.galleryBadge": "Live",
    "nav.sources": "28 Target Sources",
    "nav.sourcesCount": "28",
    "nav.tools": "Design Tools",
    "nav.star": "Star on GitHub",
    "nav.theme": "Toggle Theme",
    "nav.lang": "Language",
    "nav.langEn": "English",
    "nav.langZh": "简体中文",
    "nav.searchPlaceholder": "Search components, sites, tools...",
    "nav.mobileMenu": "Open Menu",
    "nav.enterGallery": "Enter Live Gallery",
    "nav.sourcesSub": "28 Mainstream Sources · 100% In-Place Interactive",
    "nav.official64": "Official 64 Components",
    "nav.toolsBox": "Designer Toolbox",
    "nav.allSourcesList": "All 28 UI Target Sources",

    // Ecosystem Mega Menu Groups
    "eco.group.motion": "Motion & Cutting-Edge Visuals",
    "eco.group.blocks": "Commercial Blocks & Templates",
    "eco.group.system": "Enterprise Systems & Engineering",
    "eco.group.ai": "AI Interaction & Productivity",

    // Footer
    "footer.badge": "100% Strictly Implemented",
    "footer.visitors": "Visitor Analytics",
    "footer.star": "Star on GitHub",
    "footer.license": "MIT License",

    // Global Search
    "search.trigger": "Search components & sources...",
    "search.placeholder": "Type component, block, site or tool...",
    "search.empty": "No matching resources found.",
    "search.groupEco": "Ecosystem Sites",
    "search.groupShadcn": "shadcn Official Components",
    "search.groupBoardui": "BoardUI Charts & Agent",
    "search.groupInteractive": "Interactive Blocks & Motion",
    "search.groupStyles": "Design Styles & Norms",

    // Home Page
    "home.badge": "28 UI Sources Panorama Discovery & In-Place Rendering",
    "home.title": "shadcn Ecosystem Components & Blocks Gallery",
    "home.desc": "Complete collection of 28 mainstream UI sites, encompassing atomic components, composite blocks, and full-page templates. Zero secondary page jumps — 100% real interactive live rendering in cards with official links.",
    "home.ctaGallery": "Enter Live Gallery",
    "home.ctaOfficial": "Official 64 Components",
    "home.tabAll": "All",
    "home.tabMotion": "Motion & Interactivity",
    "home.tabSystem": "Blocks & Systems",
    "home.tabCore": "Official Components",
    "home.sitesCount": "{count} Sites",
    "home.browse": "Browse Components",
    "home.officialSite": "Official Site",

    // Gallery Page
    "gallery.badge": "Live Component & Block Gallery",
    "gallery.sub": "28 Target Sources Full Coverage · 100% In-Place Interactive Live Rendering",
    "gallery.title": "Panorama Live Component Gallery",
    "gallery.desc": "Real-time in-place interactive sandbox for 28 mainstream UI sources. Switch libraries, categories, and test live states with zero external jumps.",
    "gallery.searchPlaceholder": "Search component, block, tag or site...",
    "gallery.filterAllSites": "All 28 Sources",
    "gallery.filterAllCategories": "All Resource Categories",
    "gallery.filterAllStatus": "All Statuses",
    "gallery.statusCollected": "Collected & Adapted",
    "gallery.statusPending": "Adapting in Queue",
    "gallery.categoryComponent": "Atomic Components",
    "gallery.categoryBlock": "Composite Blocks",
    "gallery.categoryTemplate": "Full-Page Templates",
    "gallery.showing": "Showing {count} resources",
    "gallery.reset": "Reset Filters",
    "gallery.emptyTitle": "No matching components found",
    "gallery.emptyDesc": "Try adjusting your search keywords or filter criteria.",
    "gallery.emptyClear": "Clear All Filters",
    "gallery.sourceDetails": "Source Details",

    // Tools Page
    "tools.badge": "Frontend & UI Designer Curated Toolbox",
    "tools.title": "Curated Designer Toolbox",
    "tools.desc": "Selected 40+ high-frequency production tools for modern UI designers & frontend engineers: color palettes, typography, inspiration boards, SVG patterns, and physics curves.",
    "tools.searchPlaceholder": "Search tools by name, feature, or keyword...",
    "tools.showing": "Showing {count} tools",
    "tools.tabAll": "All Tools",
    "tools.tabColor": "Color Systems",
    "tools.tabInspiration": "Design Inspiration",
    "tools.tabAssets": "Typography & Assets",
    "tools.tabBackground": "Backgrounds & Patterns",
    "tools.tabShadow": "Shadows & 3D",
    "tools.tabMotion": "Motion & Curves",
    "tools.tabA11y": "Accessibility",
    "tools.visit": "Visit Tool Site",
    "tools.copyUrl": "Copy URL",
    "tools.copied": "Copied",
    "tools.empty": "No tools found matching your criteria",
    "tools.clear": "Clear search",
    "tools.recommended": "Editor Choice",

    // Site Page Template
    "template.breadcrumbHome": "Home",
    "template.breadcrumbGallery": "Live Gallery",
    "template.visitOfficial": "Visit Source Site",
    "template.collectedCount": "{count} Live Resources Collected",
    "template.galleryTitle": "{name} Components & Blocks Exhibition",
    "template.galleryDesc": "All resources adapted with source code, 100% interactive live preview in cards with official links.",
    "template.searchPlaceholder": "Search components in {name}...",
    "template.filterAll": "All",
    "template.filterComponent": "Components",
    "template.filterBlock": "Blocks",
    "template.filterTemplate": "Templates",
    "template.empty": "No matching components found",
    "template.clear": "Clear Filters",
    "template.sourceDetails": "Source Details",
    "template.back": "Back to Live Gallery",

    // shadcn Overview & Layout
    "shadcn.siteTitle": "shadcn/ui Official Matrix",
    "shadcn.siteBadge": "64/64 100% Fully Implemented",
    "shadcn.siteDesc": "Fully implemented all 64 official core components, complete with interactive previews and source indexing.",
    "shadcn.overview": "Overview",
    "shadcn.allComponents": "All Components",
    "shadcn.categories": "Categories",
    "shadcn.catForms": "Forms",
    "shadcn.catLayout": "Layout",
    "shadcn.catOverlay": "Overlays",
    "shadcn.catData": "Data Display",
    "shadcn.catNav": "Navigation",
    "shadcn.catFeedback": "Feedback",
    "shadcn.catExtended": "Extended Primitives",
    "shadcn.overviewTitle": "shadcn/ui Official Full Component Matrix",
    "shadcn.overviewDesc": "Fully implemented 64 official basic and composite components. Click any category card or use the sidebar navigation to test live interactive states.",
    "shadcn.browse": "Browse Components",
    "shadcn.itemsCount": "{count} items",

    // shadcn Subpage Headers
    "shadcn.formsTitle": "Form Components",
    "shadcn.formsDesc": "Buttons, inputs, selects, sliders, toggles, OTP inputs, and date pickers for modern web forms.",
    "shadcn.layoutTitle": "Layout Components",
    "shadcn.layoutDesc": "Cards, accordions, tabs, separators, collapsibles, aspect ratios, and resizable layout panels.",
    "shadcn.overlayTitle": "Overlay & Modal Components",
    "shadcn.overlayDesc": "Dialogs, alert dialogs, sheets, drawers, popovers, hover cards, tooltips, and context menus.",
    "shadcn.dataTitle": "Data Display Components",
    "shadcn.dataDesc": "Modern data tables, calendars, charts, carousels, avatars, badges, and command palettes.",
    "shadcn.navTitle": "Navigation Components",
    "shadcn.navDesc": "Breadcrumbs, navigation menus, menubars, and pagination for hierarchical app navigation.",
    "shadcn.feedbackTitle": "Feedback & Status Components",
    "shadcn.feedbackDesc": "Alerts, toasts, progress bars, skeletons, spinners, keyboard badges, and empty states.",
    "shadcn.extendedTitle": "AI & Extended Primitives",
    "shadcn.extendedDesc": "Attachment cards, message streams, chat bubbles, survey questionnaire, and official typography.",

    // Common Buttons & Labels
    "common.back": "Back",
    "common.close": "Close",
    "common.loading": "Loading...",
    "common.live": "Live",
    "common.official": "Official",
    "common.preview": "Preview",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.source": "Source",
  },
  zh: {
    // TopNav & Header
    "nav.logo": "shadcn-hub",
    "nav.home": "首页",
    "nav.official": "官方组件",
    "nav.officialBadge": "64",
    "nav.gallery": "全景画廊",
    "nav.galleryBadge": "实机预览",
    "nav.sources": "28 目标源站",
    "nav.sourcesCount": "28",
    "nav.tools": "设计工具",
    "nav.star": "Star on GitHub",
    "nav.theme": "切换主题",
    "nav.lang": "语言",
    "nav.langEn": "English",
    "nav.langZh": "简体中文",
    "nav.searchPlaceholder": "搜索全站组件与源站...",
    "nav.mobileMenu": "打开移动端主菜单",
    "nav.enterGallery": "进入全景画廊",
    "nav.sourcesSub": "28 大主流源站 · 100% 原地真实交互运行",
    "nav.official64": "官方 64 组件",
    "nav.toolsBox": "设计工具箱",
    "nav.allSourcesList": "28 大 UI 目标源站",

    // Ecosystem Mega Menu Groups
    "eco.group.motion": "动效与前沿视觉",
    "eco.group.blocks": "商业区块与模板",
    "eco.group.system": "企业系统与工程",
    "eco.group.ai": "AI 交互与协同生产力",

    // Footer
    "footer.badge": "100% 严格实装",
    "footer.visitors": "访问量统计",
    "footer.star": "Star on GitHub",
    "footer.license": "MIT 开源协议",

    // Global Search
    "search.trigger": "搜索全站组件与源站...",
    "search.placeholder": "输入组件、区块、源站或工具...",
    "search.empty": "未找到匹配的资源。",
    "search.groupEco": "生态站点",
    "search.groupShadcn": "shadcn 官方组件",
    "search.groupBoardui": "BoardUI 图表与 Agent",
    "search.groupInteractive": "交互区块与动效",
    "search.groupStyles": "设计流派与规范",

    // Home Page
    "home.badge": "28 大 UI 资源全景发现与原地渲染",
    "home.title": "shadcn 生态全景组件与区块画廊",
    "home.desc": "完整收录 28 个主流 UI 站点，包含原子组件、复合区块与整页模板。严禁跳转二级页面，卡片内 100% 真实交互运行，附带原站直达外链。",
    "home.ctaGallery": "进入全景原生画廊 (Live Gallery)",
    "home.ctaOfficial": "官方 64 组件",
    "home.tabAll": "全部",
    "home.tabMotion": "动效与交互",
    "home.tabSystem": "区块与系统",
    "home.tabCore": "官方组件",
    "home.sitesCount": "{count} 个站点",
    "home.browse": "浏览组件",
    "home.officialSite": "官网",

    // Gallery Page
    "gallery.badge": "Live Component & Block Gallery",
    "gallery.sub": "28 大源站全景覆盖 · 100% 原地交互实机渲染",
    "gallery.title": "全景原生实机组件画廊",
    "gallery.desc": "汇聚 28 大主流 UI 源站的真实代码运行沙盒。任意切换站点库、分类与交互状态，卡片内原地 100% 实机响应与原站直达。",
    "gallery.searchPlaceholder": "搜索组件、区块、标签或来源站点...",
    "gallery.filterAllSites": "全部 28 大源站",
    "gallery.filterAllCategories": "全部资源分类",
    "gallery.filterAllStatus": "全部状态",
    "gallery.statusCollected": "已收录并实装",
    "gallery.statusPending": "收录适配中",
    "gallery.categoryComponent": "原子组件",
    "gallery.categoryBlock": "复合区块",
    "gallery.categoryTemplate": "整页模板",
    "gallery.showing": "共展示 {count} 项资源",
    "gallery.reset": "重置筛选",
    "gallery.emptyTitle": "未找到匹配的组件",
    "gallery.emptyDesc": "尝试调整您的搜索关键词或过滤选项。",
    "gallery.emptyClear": "清除所有筛选条件",
    "gallery.sourceDetails": "原站详情",

    // Tools Page
    "tools.badge": "前端与全栈设计师常备百宝箱",
    "tools.title": "设计师常用高频工具百宝箱",
    "tools.desc": "精选 40+ 款面向现代 UI 设计师与前端工程师的高频生产力神器：涵盖调色板生成、页面走查灵感、排版字体、SVG 纹理图案与物理动效贝塞尔曲线。",
    "tools.searchPlaceholder": "搜索工具名称、特性或关键字...",
    "tools.showing": "已展示 {count} 款工具",
    "tools.tabAll": "全部工具",
    "tools.tabColor": "色彩系统",
    "tools.tabInspiration": "灵感画板",
    "tools.tabAssets": "排版资源",
    "tools.tabBackground": "背景纹理",
    "tools.tabShadow": "阴影立体",
    "tools.tabMotion": "动效贝塞尔",
    "tools.tabA11y": "无障碍对比度",
    "tools.visit": "访问工具官网",
    "tools.copyUrl": "复制链接",
    "tools.copied": "已复制",
    "tools.empty": "没有找到符合条件的工具",
    "tools.clear": "清除搜索条件",
    "tools.recommended": "编辑推荐",

    // Site Page Template
    "template.breadcrumbHome": "首页",
    "template.breadcrumbGallery": "全景画廊",
    "template.visitOfficial": "访问原站官网",
    "template.collectedCount": "已收录 {count} 个实机资源",
    "template.galleryTitle": "{name} 组件与区块展厅",
    "template.galleryDesc": "全部收录资源已完成代码适配，支持卡片内原地实时交互渲染。",
    "template.searchPlaceholder": "在 {name} 中搜索组件...",
    "template.filterAll": "全部",
    "template.filterComponent": "组件",
    "template.filterBlock": "区块",
    "template.filterTemplate": "模板",
    "template.empty": "未找到匹配的组件",
    "template.clear": "清除筛选",
    "template.sourceDetails": "原站详情",
    "template.back": "返回全景画廊",

    // shadcn Overview & Layout
    "shadcn.siteTitle": "shadcn/ui 官方库",
    "shadcn.siteBadge": "64/64 100%全量实装",
    "shadcn.siteDesc": "已安装收录全部 64 个官方组件，每个组件均有实机渲染展示与代码索引",
    "shadcn.overview": "总览",
    "shadcn.allComponents": "全部组件",
    "shadcn.categories": "分类",
    "shadcn.catForms": "表单",
    "shadcn.catLayout": "布局",
    "shadcn.catOverlay": "浮层",
    "shadcn.catData": "数据展示",
    "shadcn.catNav": "导航",
    "shadcn.catFeedback": "反馈",
    "shadcn.catExtended": "扩展基元",
    "shadcn.overviewTitle": "shadcn/ui 官方全量组件体系",
    "shadcn.overviewDesc": "已全量实装官方 64 款基础与复合组件。点击下方卡片或左侧导航即可查看组件运行效果与交互细节。",
    "shadcn.browse": "浏览组件",
    "shadcn.itemsCount": "{count} 款",

    // shadcn Subpage Headers
    "shadcn.formsTitle": "表单组件",
    "shadcn.formsDesc": "包含按钮、输入框、选择器、滑块、开关等全部表单交互组件",
    "shadcn.layoutTitle": "布局组件",
    "shadcn.layoutDesc": "卡片、折叠面板、分页标签、区域划分与尺寸调节等结构组织组件",
    "shadcn.overlayTitle": "浮层组件",
    "shadcn.overlayDesc": "对话框、抽屉、气泡卡片、悬浮提示与上下文菜单等模态交互",
    "shadcn.dataTitle": "数据展示组件",
    "shadcn.dataDesc": "高阶数据表格、日历选择、数据图表、跑马灯与徽章展示",
    "shadcn.navTitle": "导航组件",
    "shadcn.navDesc": "面包屑、导航菜单、顶部菜单栏与分页器等层级导航",
    "shadcn.feedbackTitle": "反馈组件",
    "shadcn.feedbackDesc": "警告框、Toast 轻提示、进度条、骨架屏、加载指示器与空状态",
    "shadcn.extendedTitle": "AI与扩展基元",
    "shadcn.extendedDesc": "附件卡、对话气泡、消息流、问卷卡片与官方排版规范",

    // Common Buttons & Labels
    "common.back": "返回",
    "common.close": "关闭",
    "common.loading": "加载中...",
    "common.live": "实机",
    "common.official": "官方",
    "common.preview": "预览",
    "common.copy": "复制",
    "common.copied": "已复制",
    "common.source": "源码",
  },
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Requirement: Default must be English ("en")
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "zh" || saved === "en") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      } else {
        // Default English
        setLocaleState("en");
        document.documentElement.lang = "en";
      }
    } catch {
      // ignore SSR or restricted localStorage
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "zh" : "en");
  };

  const t = (key: string, defaultVal?: string): string => {
    const dict = translations[locale] || translations.en;
    if (dict[key]) return dict[key];
    const enDict = translations.en;
    if (enDict[key]) return enDict[key];
    return defaultVal || key;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t,
      isEn: locale === "en",
      isZh: locale === "zh",
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fallback safe context if called outside provider
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      toggleLocale: () => {},
      t: (key: string, defaultVal?: string) => translations.en[key] || defaultVal || key,
      isEn: true,
      isZh: false,
    };
  }
  return ctx;
}
