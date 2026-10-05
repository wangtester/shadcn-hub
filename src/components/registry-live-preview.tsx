"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  ExternalLink,
  Laptop,
  Terminal,
  Folder,
  Settings,
  MessageSquare,
  Flame,
  Star,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Plus,
  X,
  Search,
  Copy,
  Check,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  Cpu,
  MousePointer2,
  FileCode,
  Globe,
  UploadCloud,
  FileText,
  Trash2,
  Lock,
  Smartphone,
  Tablet,
  Monitor,
  Eye,
  Activity,
  Calendar as CalendarIcon,
  Users,
  Grid,
  Box,
  Volume2,
  VolumeX,
  Pause,
  ShoppingCart,
  CreditCard,
  ArrowUpRight,
  Sun,
  Moon,
  Unlock,
  EyeOff,
  Hash,
  Tag,
  Radio,
  SlidersHorizontal,
  Table,
  ListTodo,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Award,
  Lightbulb,
  HelpCircle,
  ChevronRight,
  BarChart3,
  Shuffle,
  Code2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface LivePreviewProps {
  componentKey: string;
}

export function RegistryLivePreview({ componentKey }: LivePreviewProps) {
  switch (componentKey) {
    // 1. shadcn button
    case "shadcn-button":
      return <ShadcnButtonDemo />;
    case "shadcn-datatable":
      return <ShadcnDataTableDemo />;
    case "shadcn-dialog":
      return <ShadcnDialogDemo />;

    // 2. Magic UI
    case "magicui-dock":
      return <MagicDockDemo />;
    case "magicui-marquee":
      return <MagicMarqueeDemo />;
    case "magicui-bento":
      return <MagicBentoDemo />;

    // 3. Aceternity UI
    case "aceternity-lamp":
      return <AceternityLampDemo />;
    case "aceternity-3dpin":
      return <AceternityPinDemo />;

    // 4. BoardUI
    case "boardui-agentic":
      return <BoardUIAgenticDemo />;
    case "boardui-charts":
      return <BoardUIChartsDemo />;

    // 5. ShadcnStore
    case "shadcnstore-pricing":
      return <ShadcnStorePricingDemo />;

    // 6. Refero
    case "refero-linear":
      return <ReferoLinearDemo />;

    // 7. HeroUI
    case "heroui-kpi":
      return <HeroUIKpiDemo />;

    // 8. beUI
    case "beui-upload":
      return <BeUIUploadDemo />;

    // 9. RareUI
    case "rareui-island":
      return <RareUIIslandDemo />;

    // 10. Transitions.dev
    case "transitions-morph":
      return <TransitionsMorphDemo />;

    // 11. BeautifulUI
    case "beautifului-aurora":
      return <BeautifulUIAuroraDemo />;

    // 12. shadcnspace
    case "shadcnspace-dashboard":
      return <ShadcnSpaceDashboardDemo />;

    // 13. 21st.dev
    case "twentyfirst-dock":
      return <TwentyFirstDockDemo />;
    case "twentyfirst-clients":
      return <TwentyFirstClientsDemo />;
    case "twentyfirst-portfolio-template":
      return <TwentyFirstPortfolioDemo />;

    // 14. Shadcnblocks
    case "shadcnblocks-autocomplete":
      return <ShadcnblocksAutocompleteDemo />;
    case "shadcnblocks-hero":
      return <ShadcnblocksHeroDemo />;
    case "shadcnblocks-saas-template":
      return <ShadcnblocksTemplateDemo />;

    // 15. shadcn.io
    case "shadcnio-2fa":
      return <ShadcnIo2FADemo />;
    case "shadcnio-solaris-template":
      return <ShadcnIoSolarisDemo />;

    // 16. Tailark
    case "tailark-hero":
      return <TailarkHeroDemo />;

    // 17. Velora UI
    case "velora-token-stream":
      return <VeloraTokenStreamDemo />;
    case "velora-thinking-trace":
      return <VeloraThinkingTraceDemo />;

    // 18. Motion Primitives
    case "motion-text-effect":
      return <MotionTextEffectDemo />;
    case "motion-border-trail":
      return <MotionBorderTrailDemo />;

    // 19. Skiper UI
    case "skiper-tilt-card":
      return <SkiperTiltCardDemo />;

    // 20. Eldora UI
    case "eldora-browser-mockup":
      return <EldoraBrowserMockupDemo />;

    // 21. Kibo UI
    case "kibo-avatar-stack":
      return <KiboAvatarStackDemo />;
    case "kibo-multi-cursor":
      return <KiboMultiCursorDemo />;
    case "kibo-gantt-bar":
      return <KiboGanttBarDemo />;

    // 22. Kokonut UI
    case "kokonut-ai-composer":
      return <KokonutAIComposerDemo />;

    // 23. Animate UI
    case "animate-particle-button":
      return <AnimateParticleButtonDemo />;

    // 24. Origin UI
    case "origin-tag-input":
      return <OriginTagInputDemo />;

    // 25. ReUI
    case "reui-data-grid":
      return <ReUIDataGridDemo />;

    // 26. MynaUI
    case "mynaui-segmented-nav":
      return <MynaUISegmentedNavDemo />;

    // 27. shadcn/ui Charts
    case "shadcn-charts-area":
      return <ShadcnChartsAreaDemo />;

    // 28. shadcnstudio.com
    case "shadcnstudio-pricing":
      return <ShadcnStudioPricingDemo />;


    // Extra Rich Components
    case "shadcn-calendar":
      return <ShadcnCalendarDemo />;
    case "magicui-beam":
      return <MagicUIBeamDemo />;
    case "aceternity-sparkles":
      return <AceternitySparklesDemo />;
    case "boardui-kpi-banner":
      return <BoardUIKpiBannerDemo />;
    case "shadcnstore-hero":
      return <ShadcnStoreHeroDemo />;
    case "refero-geist":
      return <ReferoGeistDemo />;
    case "heroui-prompt-bar":
      return <HeroUIPromptBarDemo />;
    case "shadcnspace-marketing":
      return <ShadcnSpaceMarketingDemo />;
    case "beui-typewriter":
      return <BeUITypewriterDemo />;
    case "rareui-fluid-orb":
      return <RareUIFluidOrbDemo />;
    case "transitions-text-swap":
      return <TransitionsTextSwapDemo />;
    case "beautifului-rag":
      return <BeautifulUIRagDemo />;
    case "shadcnio-checker":
      return <ShadcnIoCheckerDemo />;
    case "tailark-bento":
      return <TailarkBentoDemo />;
    case "velora-voice-orb":
      return <VeloraVoiceOrbDemo />;
    case "motion-animated-bg":
      return <MotionAnimatedBgDemo />;
    case "skiper-magnetic-button":
      return <SkiperMagneticButtonDemo />;
    case "eldora-phone-mockup":
      return <EldoraPhoneMockupDemo />;
    case "kibo-code-snippet":
      return <KiboCodeSnippetDemo />;
    case "kokonut-glass-card":
      return <KokonutGlassCardDemo />;
    case "animate-pulsing-status":
      return <AnimatePulsingStatusDemo />;
    case "origin-stepper-slider":
      return <OriginStepperSliderDemo />;
    case "reui-file-upload":
      return <ReUIFileUploadDemo />;
    case "mynaui-pill-badges":
      return <MynaUIPillBadgesDemo />;
    case "shadcn-charts-bar":
      return <ShadcnChartsBarDemo />;
    case "shadcnstudio-hero":
      return <ShadcnStudioHeroDemo />;


    // shadcn.io Extra Blocks
    case "shadcnio-access-tokens":
      return <ShadcnIoAccessTokensDemo />;
    case "shadcnio-kanban":
      return <ShadcnIoKanbanDemo />;
    case "shadcnio-stats-streak":
      return <ShadcnIoStatsStreakDemo />;
    case "shadcnio-achievement":
      return <ShadcnIoAchievementDemo />;
    case "shadcnio-crud-rbac":
      return <ShadcnIoCrudRbacDemo />;
    case "shadcnio-agenda":
      return <ShadcnIoAgendaDemo />;
    case "shadcnio-empty-tools":
      return <ShadcnIoEmptyToolsDemo />;
    case "shadcnio-upload-3d":
      return <ShadcnIoUpload3DDemo />;
    case "shadcnio-command-accounts":
      return <ShadcnIoCommandAccountsDemo />;
    case "shadcnio-ab-testing":
      return <ShadcnIoAbTestingDemo />;
    case "shadcnio-billing-alert":
      return <ShadcnIoBillingAlertDemo />;
    case "shadcnio-admin-navbar":
      return <ShadcnIoAdminNavbarDemo />;
    case "shadcnio-locked-login":
      return <ShadcnIoLockedLoginDemo />;
    case "shadcnio-reframe-template":
      return <ShadcnIoReframeDemo />;

    // Tier 1 Major Expansions: ui.shadcn.com
    case "shadcn-datatable-demo":
      return <ShadcnDataTableBatchDemo />;
    case "shadcn-command-demo":
      return <ShadcnCommandDemo />;
    case "shadcn-tabs-demo":
      return <ShadcnTabsDemo />;
    case "shadcn-carousel-demo":
      return <ShadcnCarouselDemo />;
    case "shadcn-sheet-demo":
      return <ShadcnSheetDemo />;
    case "shadcn-combobox-demo":
      return <ShadcnComboboxDemo />;
    case "shadcn-drawer-demo":
      return <ShadcnDrawerDemo />;
    case "shadcn-toggle-group-demo":
      return <ShadcnToggleGroupDemo />;
    case "shadcn-alert-dialog-demo":
      return <ShadcnAlertDialogDemo />;
    case "shadcn-aspect-ratio-demo":
      return <ShadcnAspectRatioDemo />;

    // Magic UI
    case "magicui-bento-grid-demo":
      return <MagicUIBentoGridDemo />;
    case "magicui-animated-beam-demo":
      return <MagicUIAnimatedBeamDemo />;
    case "magicui-particles-demo":
      return <MagicUIParticlesDemo />;
    case "magicui-border-beam-demo":
      return <MagicUIBorderBeamDemo />;
    case "magicui-shine-border-demo":
      return <MagicUIShineBorderDemo />;
    case "magicui-number-ticker-demo":
      return <MagicUINumberTickerDemo />;
    case "magicui-word-rotate-demo":
      return <MagicUIWordRotateDemo />;
    case "magicui-confetti-demo":
      return <MagicUIConfettiDemo />;

    // Aceternity UI
    case "aceternity-lamp-effect-demo":
      return <AceternityLampEffectDemo />;
    case "aceternity-sparkles-demo":
      return <AceternitySparklesBatchDemo />;
    case "aceternity-background-beams-demo":
      return <AceternityBackgroundBeamsDemo />;
    case "aceternity-wobbly-card-demo":
      return <AceternityWobblyCardDemo />;
    case "aceternity-hero-highlight-demo":
      return <AceternityHeroHighlightDemo />;
    case "aceternity-typewriter-demo":
      return <AceternityTypewriterDemo />;
    case "aceternity-card-hover-demo":
      return <AceternityCardHoverDemo />;
    case "aceternity-tracing-beam-demo":
      return <AceternityTracingBeamDemo />;

    // Shadcnblocks
    case "shadcnblocks-pricing-demo":
      return <ShadcnblocksPricingDemo />;
    case "shadcnblocks-testimonials-demo":
      return <ShadcnblocksTestimonialsDemo />;
    case "shadcnblocks-feature-demo":
      return <ShadcnblocksFeatureDemo />;
    case "shadcnblocks-stats-demo":
      return <ShadcnblocksStatsDemo />;
    case "shadcnblocks-faq-demo":
      return <ShadcnblocksFaqDemo />;
    case "shadcnblocks-cta-demo":
      return <ShadcnblocksCtaDemo />;

    // shadcn/ui Charts
    case "shadcn-charts-bar-demo":
      return <ShadcnChartsBarBatchDemo />;
    case "shadcn-charts-line-demo":
      return <ShadcnChartsLineDemo />;
    case "shadcn-charts-pie-demo":
      return <ShadcnChartsPieDemo />;
    case "shadcn-charts-radar-demo":
      return <ShadcnChartsRadarDemo />;
    case "shadcn-charts-radial-demo":
      return <ShadcnChartsRadialDemo />;

    // Origin UI
    case "origin-ui-input-stepper-demo":
      return <OriginUIInputStepperDemo />;
    case "origin-ui-password-demo":
      return <OriginUIPasswordDemo />;
    case "origin-ui-tags-demo":
      return <OriginUITagsDemo />;
    case "origin-ui-switch-demo":
      return <OriginUISwitchDemo />;
    case "origin-ui-range-demo":
      return <OriginUIRangeDemo />;

    // Motion Primitives
    case "motion-morphing-dialog-demo":
      return <MotionMorphingDialogDemo />;
    case "motion-infinite-slider-demo":
      return <MotionInfiniteSliderDemo />;
    case "motion-accordion-demo":
      return <MotionAccordionDemo />;

    // Kibo UI
    case "kibo-kanban-demo":
      return <KiboKanbanDemo />;
    case "kibo-timeline-demo":
      return <KiboTimelineDemo />;
    case "kibo-audio-demo":
      return <KiboAudioDemo />;

    // Kokonut UI
    case "kokonut-ai-prompt-demo":
      return <KokonutAIPromptDemo />;
    case "kokonut-profile-demo":
      return <KokonutProfileDemo />;

    // ShadcnStore
    case "shadcnstore-checkout-demo":
      return <ShadcnstoreCheckoutDemo />;
    case "shadcnstore-onboarding-demo":
      return <ShadcnstoreOnboardingDemo />;

    // beui.dev Expanded Motion & Blocks
    case "beui-arc-picker-demo":
      return <BeUIArcPickerDemo />;
    case "beui-sortable-stack-demo":
      return <BeUISortableStackDemo />;
    case "beui-color-selector-demo":
      return <BeUIColorSelectorDemo />;
    case "beui-tilt-card-demo":
      return <BeUITiltCardDemo />;
    case "beui-arrow-button-demo":
      return <BeUIArrowButtonDemo />;
    case "beui-adaptive-stepper-demo":
      return <BeUIAdaptiveStepperDemo />;
    case "beui-wheel-picker-demo":
      return <BeUIWheelPickerDemo />;
    case "beui-toast-stack-demo":
      return <BeUIToastStackDemo />;
    case "beui-action-swap-demo":
      return <BeUIActionSwapDemo />;
    case "beui-dynamic-island-demo":
      return <BeUIDynamicIslandDemo />;
    case "beui-command-palette-demo":
      return <BeUICommandPaletteDemo />;
    case "beui-morphing-search-demo":
      return <BeUIMorphingSearchDemo />;
    case "beui-notification-stack-demo":
      return <BeUINotificationStackDemo />;
    case "beui-scheduler-demo":
      return <BeUISchedulerDemo />;
    case "beui-project-folder-demo":
      return <BeUIProjectFolderDemo />;
    case "beui-otp-demo":
      return <BeUIOtpDemo />;
    case "beui-feedback-demo":
      return <BeUIFeedbackDemo />;
    case "beui-voice-orb-demo":
      return <BeUIVoiceOrbDemo />;
    case "beui-approval-demo":
      return <BeUIApprovalDemo />;
    case "beui-agents-agent-activity-demo":
      return <BeUI_beui_agents_agent_activity />;
    case "beui-agents-ai-sidebar-demo":
      return <BeUI_beui_agents_ai_sidebar />;
    case "beui-agents-chat-app-demo":
      return <BeUI_beui_agents_chat_app />;
    case "beui-agents-citations-demo":
      return <BeUI_beui_agents_citations />;
    case "beui-agents-code-block-demo":
      return <BeUI_beui_agents_code_block />;
    case "beui-agents-file-diff-demo":
      return <BeUI_beui_agents_file_diff />;
    case "beui-agents-image-generation-demo":
      return <BeUI_beui_agents_image_generation />;
    case "beui-agents-loading-states-demo":
      return <BeUI_beui_agents_loading_states />;
    case "beui-agents-message-demo":
      return <BeUI_beui_agents_message />;
    case "beui-agents-message-bubble-demo":
      return <BeUI_beui_agents_message_bubble />;
    case "beui-agents-message-scroller-demo":
      return <BeUI_beui_agents_message_scroller />;
    case "beui-agents-prompt-input-demo":
      return <BeUI_beui_agents_prompt_input />;
    case "beui-agents-streaming-response-demo":
      return <BeUI_beui_agents_streaming_response />;
    case "beui-agents-todo-list-demo":
      return <BeUI_beui_agents_todo_list />;
    case "beui-agents-tool-approval-demo":
      return <BeUI_beui_agents_tool_approval />;
    case "beui-agents-tool-result-demo":
      return <BeUI_beui_agents_tool_result />;
    case "beui-blocks-bloom-menu-demo":
      return <BeUI_beui_blocks_bloom_menu />;
    case "beui-blocks-card-folder-demo":
      return <BeUI_beui_blocks_card_folder />;
    case "beui-blocks-expandable-action-bar-demo":
      return <BeUI_beui_blocks_expandable_action_bar />;
    case "beui-blocks-expandable-tabs-demo":
      return <BeUI_beui_blocks_expandable_tabs />;
    case "beui-blocks-file-upload-demo":
      return <BeUI_beui_blocks_file_upload />;
    case "beui-blocks-infinite-masonry-demo":
      return <BeUI_beui_blocks_infinite_masonry />;
    case "beui-blocks-knockout-bracket-demo":
      return <BeUI_beui_blocks_knockout_bracket />;
    case "beui-blocks-morphing-tabs-demo":
      return <BeUI_beui_blocks_morphing_tabs />;
    case "beui-blocks-not-found-demo":
      return <BeUI_beui_blocks_not_found />;
    case "beui-blocks-overflow-actions-demo":
      return <BeUI_beui_blocks_overflow_actions />;
    case "beui-blocks-prediction-market-demo":
      return <BeUI_beui_blocks_prediction_market />;
    case "beui-blocks-signup-form-demo":
      return <BeUI_beui_blocks_signup_form />;
    case "beui-blocks-swap-demo":
      return <BeUI_beui_blocks_swap />;
    case "beui-blocks-swipeable-list-demo":
      return <BeUI_beui_blocks_swipeable_list />;
    case "beui-blocks-wallet-card-demo":
      return <BeUI_beui_blocks_wallet_card />;
    case "beui-motion-animated-badge-demo":
      return <BeUI_beui_motion_animated_badge />;
    case "beui-motion-animated-sidebar-demo":
      return <BeUI_beui_motion_animated_sidebar />;
    case "beui-motion-bottom-sheet-demo":
      return <BeUI_beui_motion_bottom_sheet />;
    case "beui-motion-bounce-sidebar-demo":
      return <BeUI_beui_motion_bounce_sidebar />;
    case "beui-motion-bouncy-accordion-demo":
      return <BeUI_beui_motion_bouncy_accordion />;
    case "beui-motion-breadcrumb-demo":
      return <BeUI_beui_motion_breadcrumb />;
    case "beui-motion-button-demo":
      return <BeUI_beui_motion_button />;
    case "beui-motion-center-morph-modal-demo":
      return <BeUI_beui_motion_center_morph_modal />;
    case "beui-motion-checkbox-demo":
      return <BeUI_beui_motion_checkbox />;
    case "beui-motion-combobox-demo":
      return <BeUI_beui_motion_combobox />;
    case "beui-motion-context-menu-demo":
      return <BeUI_beui_motion_context_menu />;
    case "beui-motion-cylinder-carousel-demo":
      return <BeUI_beui_motion_cylinder_carousel />;
    case "beui-motion-date-range-picker-demo":
      return <BeUI_beui_motion_date_range_picker />;
    case "beui-motion-dock-demo":
      return <BeUI_beui_motion_dock />;
    case "beui-motion-drawer-demo":
      return <BeUI_beui_motion_drawer />;
    case "beui-motion-expandable-control-demo":
      return <BeUI_beui_motion_expandable_control />;
    case "beui-motion-file-tree-demo":
      return <BeUI_beui_motion_file_tree />;
    case "beui-motion-image-viewer-demo":
      return <BeUI_beui_motion_image_viewer />;
    case "beui-motion-input-demo":
      return <BeUI_beui_motion_input />;
    case "beui-motion-loader-demo":
      return <BeUI_beui_motion_loader />;
    case "beui-motion-marquee-demo":
      return <BeUI_beui_motion_marquee />;
    case "beui-motion-morphing-modal-demo":
      return <BeUI_beui_motion_morphing_modal />;
    case "beui-motion-multi-select-demo":
      return <BeUI_beui_motion_multi_select />;
    case "beui-motion-number-demo":
      return <BeUI_beui_motion_number />;
    case "beui-motion-popover-demo":
      return <BeUI_beui_motion_popover />;
    case "beui-motion-preview-rail-demo":
      return <BeUI_beui_motion_preview_rail />;
    case "beui-motion-pull-to-refresh-demo":
      return <BeUI_beui_motion_pull_to_refresh />;
    case "beui-motion-radio-demo":
      return <BeUI_beui_motion_radio />;
    case "beui-motion-range-slider-demo":
      return <BeUI_beui_motion_range_slider />;
    case "beui-motion-scroll-animation-demo":
      return <BeUI_beui_motion_scroll_animation />;
    case "beui-motion-select-demo":
      return <BeUI_beui_motion_select />;
    case "beui-motion-shader-background-demo":
      return <BeUI_beui_motion_shader_background />;
    case "beui-motion-shared-layout-bg-demo":
      return <BeUI_beui_motion_shared_layout_bg />;
    case "beui-motion-switch-demo":
      return <BeUI_beui_motion_switch />;
    case "beui-motion-table-demo":
      return <BeUI_beui_motion_table />;
    case "beui-motion-tabs-demo":
      return <BeUI_beui_motion_tabs />;
    case "beui-motion-text-animation-demo":
      return <BeUI_beui_motion_text_animation />;
    case "beui-motion-theme-toggle-demo":
      return <BeUI_beui_motion_theme_toggle />;
    case "beui-motion-tooltip-demo":
      return <BeUI_beui_motion_tooltip />;

    default:
      return (
        <div className="p-6 text-center text-xs text-muted-foreground border rounded-xl bg-muted/20">
          组件交互已收录，正在装载实时上下文...
        </div>
      );
  }
}

/* ========================================================================= */
/* 1. shadcn/ui Official                                                     */
/* ========================================================================= */

function ShadcnButtonDemo() {
  const [clicked, setClicked] = useState<string | null>(null);
  return (
    <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-xl border bg-muted/20 justify-center">
      <Button
        size="sm"
        onClick={() => setClicked("Default")}
        className={clicked === "Default" ? "scale-95 transition-transform" : ""}
      >
        Default Action
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setClicked("Secondary")}
      >
        Secondary
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setClicked("Outline")}
      >
        Outline
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => setClicked("Destructive")}
      >
        Destructive
      </Button>
      <div className="inline-flex rounded-lg border bg-background p-0.5 shadow-xs">
        <button
          onClick={() => setClicked("Group A")}
          className="px-2.5 py-1 text-xs font-medium rounded-md hover:bg-muted"
        >
          Daily
        </button>
        <button
          onClick={() => setClicked("Group B")}
          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted text-foreground"
        >
          Weekly
        </button>
      </div>
      {clicked && (
        <span className="w-full text-center text-[11px] text-muted-foreground font-mono mt-1">
          Last interaction: {clicked}
        </span>
      )}
    </div>
  );
}

function ShadcnDataTableDemo() {
  const [filter, setFilter] = useState("");
  const rows = [
    { id: "TX-901", user: "Alice Walker", status: "Paid", amount: "$350.00" },
    { id: "TX-902", user: "Bob Chen", status: "Pending", amount: "$120.00" },
    { id: "TX-903", user: "Carol Vance", status: "Paid", amount: "$890.00" },
  ];
  const filtered = rows.filter((r) =>
    r.user.toLowerCase().includes(filter.toLowerCase()) || r.id.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="space-y-2 p-3 rounded-xl border bg-background text-xs">
      <div className="flex items-center justify-between gap-2">
        <Input
          placeholder="Filter customer or ID..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="h-7 text-xs max-w-[200px]"
        />
        <Badge variant="outline" className="font-mono text-[10px]">
          {filtered.length} Results
        </Badge>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-muted/50 border-b text-[11px] text-muted-foreground">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Status</th>
              <th className="p-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-b last:border-0 hover:bg-muted/30">
                <td className="p-2 font-mono">{r.id}</td>
                <td className="p-2 font-medium">{r.user}</td>
                <td className="p-2">
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      r.status === "Paid" ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="p-2 text-right font-mono">{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ShadcnDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-muted/20">
      <Button size="sm" onClick={() => setOpen(true)} className="gap-1.5 text-xs">
        <ShieldCheck className="h-3.5 w-3.5" /> Open Security Dialog
      </Button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mt-3 p-4 rounded-xl border bg-card shadow-xl max-w-sm w-full text-left space-y-3"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-xs text-foreground">Confirm API Key Revoke</h4>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Revoking production token <code className="text-primary font-mono">pk_live_***89</code> will instantly disconnect 4 active microservices.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size="sm" variant="destructive" className="h-7 text-xs" onClick={() => setOpen(false)}>
                Confirm Revoke
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================================= */
/* 2. Magic UI                                                               */
/* ========================================================================= */

function MagicDockDemo() {
  const [active, setActive] = useState("app2");
  const items = [
    { id: "app1", label: "Finder", color: "text-blue-500", icon: <Folder className="h-4 w-4" /> },
    { id: "app2", label: "Terminal", color: "text-emerald-500", icon: <Terminal className="h-4 w-4" /> },
    { id: "app3", label: "Messages", color: "text-pink-500", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "app4", label: "Settings", color: "text-amber-500", icon: <Settings className="h-4 w-4" /> },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-gradient-to-b from-muted/30 to-background min-h-[140px]">
      <div className="flex items-center gap-2 p-2 rounded-2xl bg-card/90 border shadow-xl backdrop-blur-md">
        {items.map((it) => {
          const isAct = active === it.id;
          return (
            <motion.button
              key={it.id}
              whileHover={{ scale: 1.25, y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActive(it.id)}
              className={`p-2.5 rounded-xl transition-colors relative ${
                isAct ? "bg-muted shadow-xs " + it.color : "text-muted-foreground hover:bg-muted/60"
              }`}
            >
              {it.icon}
              {isAct && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </motion.button>
          );
        })}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono mt-3">Hover for spring zoom wave</span>
    </div>
  );
}

function MagicMarqueeDemo() {
  const chips = ["React 19", "Next.js 16", "Tailwind 4", "TypeScript 5", "Framer Motion", "Base UI", "Lucide"];
  return (
    <div className="overflow-hidden p-4 rounded-xl border bg-muted/20 relative">
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ x: [0, -400] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="flex items-center gap-3 whitespace-nowrap"
      >
        {[...chips, ...chips, ...chips].map((c, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full border bg-background/80 text-xs font-mono font-medium shadow-xs"
          >
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function MagicBentoDemo() {
  return (
    <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl border bg-card text-xs">
      <div className="p-3 rounded-lg border bg-gradient-to-br from-indigo-500/10 to-transparent flex flex-col justify-between">
        <Sparkles className="h-4 w-4 text-indigo-500 mb-2" />
        <div>
          <h4 className="font-semibold text-foreground">Adaptive AI</h4>
          <p className="text-[11px] text-muted-foreground mt-0.5">Real-time model latency</p>
        </div>
      </div>
      <div className="p-3 rounded-lg border bg-gradient-to-br from-cyan-500/10 to-transparent flex flex-col justify-between">
        <Zap className="h-4 w-4 text-cyan-500 mb-2" />
        <div>
          <h4 className="font-semibold text-foreground">Edge Streaming</h4>
          <p className="text-[11px] text-muted-foreground mt-0.5">Zero TTFB overhead</p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. Aceternity UI                                                          */
/* ========================================================================= */

function AceternityLampDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 rounded-xl border bg-black overflow-hidden min-h-[160px] text-center">
      <div className="absolute top-0 w-48 h-20 bg-cyan-500/30 blur-2xl rounded-full" />
      <div className="relative z-10 space-y-1">
        <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400">
          Aceternity Lamp
        </span>
        <h3 className="text-sm md:text-base font-extrabold text-white tracking-tight">
          Build software at the speed of thought
        </h3>
      </div>
    </div>
  );
}

function AceternityPinDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card">
      <motion.div
        whileHover={{ rotateX: 12, rotateY: -12, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="p-4 rounded-xl border bg-gradient-to-br from-muted/60 to-card shadow-lg max-w-[220px] text-center space-y-2 cursor-pointer"
      >
        <div className="h-2 w-2 rounded-full bg-cyan-500 mx-auto animate-ping" />
        <h4 className="font-bold text-xs">Aceternity 3D Pin</h4>
        <p className="text-[10px] text-muted-foreground">3D Perspective tilt with gravity pin glow.</p>
      </motion.div>
    </div>
  );
}

/* ========================================================================= */
/* 4. BoardUI                                                                */
/* ========================================================================= */

function BoardUIAgenticDemo() {
  const [step, setStep] = useState(2);
  const steps = [
    { title: "Query Parsing", desc: "Extract user intent tokens", time: "12ms" },
    { title: "Vector Retrieval", desc: "Cosine match against 40k docs", time: "84ms" },
    { title: "Model Synthesis", desc: "Streaming verified answers", time: "110ms" },
  ];
  return (
    <div className="p-3 rounded-xl border bg-background text-xs space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">Agent Decision Pipeline</span>
        <Badge variant="outline" className="font-mono text-[10px] text-emerald-600">
          Status: Executing
        </Badge>
      </div>
      <div className="space-y-1.5">
        {steps.map((s, idx) => (
          <div
            key={idx}
            onClick={() => setStep(idx)}
            className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
              step === idx ? "bg-primary/5 border-primary/40 shadow-xs" : "hover:bg-muted/40"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${step >= idx ? "bg-emerald-500" : "bg-muted-foreground/30"}`} />
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="text-[10px] text-muted-foreground">{s.desc}</p>
              </div>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BoardUIChartsDemo() {
  const data = [
    { name: "Mon", val: 32 },
    { name: "Tue", val: 45 },
    { name: "Wed", val: 78 },
    { name: "Thu", val: 65 },
    { name: "Fri", val: 92 },
  ];
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold text-foreground">Daily Operations Index</span>
          <p className="text-[10px] text-muted-foreground">+18.4% WoW Momentum</p>
        </div>
        <span className="text-base font-extrabold font-mono text-primary">94.8%</span>
      </div>
      <div className="h-24 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="val" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. ShadcnStore                                                            */
/* ========================================================================= */

function ShadcnStorePricingDemo() {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-center gap-2">
        <span className={!isYearly ? "font-bold text-foreground" : "text-muted-foreground"}>Monthly</span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`w-9 h-5 rounded-full p-0.5 transition-colors ${isYearly ? "bg-primary" : "bg-muted"}`}
        >
          <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isYearly ? "translate-x-4" : ""}`} />
        </button>
        <span className={isYearly ? "font-bold text-foreground" : "text-muted-foreground"}>
          Yearly <span className="text-[10px] text-emerald-500 font-mono">-20%</span>
        </span>
      </div>
      <div className="p-3 rounded-lg border bg-muted/20 text-center space-y-2">
        <h4 className="font-bold">Pro Developer Plan</h4>
        <div className="text-xl font-extrabold font-mono">
          {isYearly ? "$19" : "$24"} <span className="text-xs font-normal text-muted-foreground">/mo</span>
        </div>
        <ul className="text-[11px] text-muted-foreground space-y-1 text-left max-w-[180px] mx-auto">
          <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Unlimited Projects</li>
          <li className="flex items-center gap-1.5"><Check className="h-3 w-3 text-emerald-500" /> Priority Support</li>
        </ul>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. Refero                                                                 */
/* ========================================================================= */

function ReferoLinearDemo() {
  return (
    <div className="p-4 rounded-xl border bg-[#0f1015] text-[#9a9db0] text-xs font-sans space-y-2.5">
      <div className="flex items-center justify-between border-b border-[#232530] pb-2">
        <span className="text-white font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Linear Workspace
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-[#1e202b] text-white">⌘K</span>
      </div>
      <div className="space-y-1">
        <div className="p-1.5 rounded bg-[#181922] flex items-center justify-between text-[11px]">
          <span className="text-gray-200">LIN-402 Migrate auth tokens to session cookie</span>
          <span className="text-[10px] text-amber-400 font-mono">In Progress</span>
        </div>
        <div className="p-1.5 rounded bg-[#181922] flex items-center justify-between text-[11px]">
          <span className="text-gray-200">LIN-403 Base UI v1 upgrade compatibility</span>
          <span className="text-[10px] text-emerald-400 font-mono">Completed</span>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 7. HeroUI                                                                 */
/* ========================================================================= */

function HeroUIKpiDemo() {
  const [activeTab, setActiveTab] = useState("members");
  return (
    <div className="p-4 rounded-2xl border bg-card/60 backdrop-blur-md text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-600 font-bold flex items-center justify-center text-xs">
            H
          </div>
          <div>
            <h4 className="font-bold text-foreground">HeroUI Pro Workspace</h4>
            <p className="text-[10px] text-muted-foreground">Engineering Org</p>
          </div>
        </div>
        <Badge className="bg-pink-500/10 text-pink-600 border-pink-500/20 text-[10px]">
          Active
        </Badge>
      </div>
      <div className="flex gap-1.5 p-1 rounded-xl bg-muted/40">
        <button
          onClick={() => setActiveTab("members")}
          className={`flex-1 py-1 rounded-lg text-[11px] font-medium transition-all ${
            activeTab === "members" ? "bg-background shadow-xs font-semibold" : "text-muted-foreground"
          }`}
        >
          Team (6)
        </button>
        <button
          onClick={() => setActiveTab("billing")}
          className={`flex-1 py-1 rounded-lg text-[11px] font-medium transition-all ${
            activeTab === "billing" ? "bg-background shadow-xs font-semibold" : "text-muted-foreground"
          }`}
        >
          Usage & Limits
        </button>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 8. beUI                                                                   */
/* ========================================================================= */

function BeUIUploadDemo() {
  const [fileCount, setFileCount] = useState(1);
  return (
    <div
      onClick={() => setFileCount((c) => (c < 3 ? c + 1 : 1))}
      className="p-5 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-primary/5 text-center text-xs space-y-2 cursor-pointer transition-colors"
    >
      <UploadCloud className="h-6 w-6 text-primary mx-auto" />
      <div>
        <p className="font-semibold text-foreground">Drag & drop source bundles</p>
        <p className="text-[10px] text-muted-foreground">Click to simulate uploaded files ({fileCount} file ready)</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 9. RareUI                                                                 */
/* ========================================================================= */

function RareUIIslandDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card">
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="bg-black text-white rounded-full px-4 py-2 cursor-pointer shadow-2xl flex items-center gap-3 text-xs select-none"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-medium">{expanded ? "Now Playing: Stargazing (Live)" : "Music"}</span>
        {expanded && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] text-gray-400 font-mono">
            02:45 / 04:12
          </motion.span>
        )}
      </motion.div>
      <span className="text-[10px] text-muted-foreground mt-2 font-mono">Click to toggle dynamic expansion</span>
    </div>
  );
}

/* ========================================================================= */
/* 10. Transitions.dev                                                       */
/* ========================================================================= */

function TransitionsMorphDemo() {
  const [state, setState] = useState<"compact" | "full">("compact");
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl border bg-muted/20">
      <motion.button
        layout
        onClick={() => setState(state === "compact" ? "full" : "compact")}
        className="rounded-2xl border bg-background shadow-md px-4 py-2 flex items-center gap-2 text-xs font-medium cursor-pointer"
      >
        <Sparkles className="h-3.5 w-3.5 text-teal-500" />
        <span>{state === "compact" ? "Deploy v2.4 (Quick)" : "Deploying build commit #a8f9c1..."}</span>
      </motion.button>
      <span className="text-[10px] text-muted-foreground mt-2 font-mono">Click to test spring layout morphing</span>
    </div>
  );
}

/* ========================================================================= */
/* 11. BeautifulUI                                                           */
/* ========================================================================= */

function BeautifulUIAuroraDemo() {
  const [approved, setApproved] = useState<boolean | null>(null);
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-r from-rose-500/10 via-purple-500/10 to-blue-500/10 text-xs space-y-2.5">
      <div className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-1.5">
          <Flame className="h-3.5 w-3.5 text-rose-500" /> HITL Human Approval
        </span>
        <Badge variant="outline" className="text-[10px] font-mono">Tool: database.drop()</Badge>
      </div>
      <p className="text-[11px] text-muted-foreground">
        Agent requested dangerous action execution. Do you authorize this operation?
      </p>
      <div className="flex gap-2 justify-end pt-1">
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs"
          onClick={() => setApproved(false)}
        >
          Reject
        </Button>
        <Button
          size="sm"
          className="h-7 text-xs bg-rose-600 hover:bg-rose-700 text-white"
          onClick={() => setApproved(true)}
        >
          Authorize
        </Button>
      </div>
      {approved !== null && (
        <p className="text-[10px] text-center font-mono text-muted-foreground">
          Result: {approved ? "Approved & Executed" : "Rejected by Operator"}
        </p>
      )}
    </div>
  );
}

/* ========================================================================= */
/* 12. shadcnspace                                                           */
/* ========================================================================= */

function ShadcnSpaceDashboardDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl border bg-card text-xs">
      <div className="p-2.5 rounded-lg border bg-muted/30">
        <span className="text-muted-foreground text-[10px]">Monthly Recurring</span>
        <p className="text-sm font-extrabold font-mono text-foreground mt-0.5">$48,290</p>
      </div>
      <div className="p-2.5 rounded-lg border bg-muted/30">
        <span className="text-muted-foreground text-[10px]">Active Subscribers</span>
        <p className="text-sm font-extrabold font-mono text-foreground mt-0.5">1,420</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 13. 21st.dev                                                              */
/* ========================================================================= */

function TwentyFirstDockDemo() {
  const [active, setActive] = useState("home");
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-muted/30">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full border bg-background/90 shadow-xl backdrop-blur-md">
        {["home", "search", "bell", "user"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
              active === item ? "bg-primary text-primary-foreground shadow-xs" : "hover:bg-muted text-muted-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono mt-2">21st.dev community pill dock</span>
    </div>
  );
}

function TwentyFirstClientsDemo() {
  const logos = ["Vercel", "Supabase", "OpenAI", "Linear", "Raycast", "Resend"];
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">
        Trusted by Next-gen Teams
      </span>
      <div className="flex flex-wrap gap-2 pt-1">
        {logos.map((l) => (
          <span key={l} className="px-2.5 py-1 rounded-md border bg-muted/30 font-medium font-mono text-[11px]">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function TwentyFirstPortfolioDemo() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">Glass Portfolio Template</span>
        <div className="flex items-center gap-1 border rounded-lg p-0.5 bg-muted/40">
          <button
            onClick={() => setDevice("desktop")}
            className={`p-1 rounded ${device === "desktop" ? "bg-background shadow-xs" : "text-muted-foreground"}`}
          >
            <Monitor className="h-3 w-3" />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`p-1 rounded ${device === "mobile" ? "bg-background shadow-xs" : "text-muted-foreground"}`}
          >
            <Smartphone className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div
        className={`mx-auto rounded-lg border bg-gradient-to-b from-indigo-950/20 to-card p-3 text-center transition-all ${
          device === "desktop" ? "w-full" : "max-w-[180px]"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center font-bold mb-1">
          JS
        </div>
        <h4 className="font-bold text-xs">Julian S. — Senior Creative</h4>
        <p className="text-[10px] text-muted-foreground">Full responsive layout</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 14. Shadcnblocks                                                          */
/* ========================================================================= */

function ShadcnblocksAutocompleteDemo() {
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState(["Tailwind", "React"]);
  const suggestions = ["Next.js", "Zustand", "Radix", "GraphQL", "Framer Motion"].filter(
    (s) => s.toLowerCase().includes(query.toLowerCase()) && !tags.includes(s)
  );

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex flex-wrap gap-1 p-1.5 rounded-lg border bg-background min-h-[34px] items-center">
        {tags.map((t) => (
          <span
            key={t}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted text-[11px] font-medium"
          >
            {t}
            <button onClick={() => setTags(tags.filter((x) => x !== t))}>
              <X className="h-2.5 w-2.5" />
            </button>
          </span>
        ))}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type to filter..."
          className="flex-1 bg-transparent border-0 outline-none text-xs px-1"
        />
      </div>
      {query && suggestions.length > 0 && (
        <div className="border rounded-lg p-1 bg-card shadow-lg space-y-0.5">
          {suggestions.map((s) => (
            <div
              key={s}
              onClick={() => {
                setTags([...tags, s]);
                setQuery("");
              }}
              className="p-1.5 hover:bg-muted rounded text-[11px] cursor-pointer"
            >
              + {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ShadcnblocksHeroDemo() {
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-r from-muted/50 to-background text-xs space-y-2.5">
      <Badge variant="outline" className="text-[10px] text-primary">New v3.0 Release</Badge>
      <h3 className="text-base font-bold text-foreground leading-tight">
        Next Generation Blocks for Tailwind UI
      </h3>
      <p className="text-[11px] text-muted-foreground">
        Crafted specifically to copy and paste right into your application.
      </p>
      <div className="flex gap-2 pt-1">
        <Button size="sm" className="h-7 text-xs">Explore Components</Button>
        <Button size="sm" variant="outline" className="h-7 text-xs">Live Sandboxes</Button>
      </div>
    </div>
  );
}

function ShadcnblocksTemplateDemo() {
  return (
    <div className="p-3 rounded-xl border bg-muted/20 text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold">SaaS Landing Template Full Screen</span>
        <Badge variant="secondary" className="text-[10px]">Viewport Scaled</Badge>
      </div>
      <div className="border rounded-lg bg-card p-3 space-y-2 shadow-inner">
        <div className="flex items-center justify-between border-b pb-1">
          <span className="font-bold text-[11px]">SaaSify.io</span>
          <span className="text-[10px] text-muted-foreground">Pricing / Docs / Login</span>
        </div>
        <div className="text-center py-2 space-y-1">
          <h5 className="font-bold text-xs">All-in-one Growth Engine</h5>
          <p className="text-[10px] text-muted-foreground">Scale from zero to millions seamlessly</p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 15. shadcn.io                                                             */
/* ========================================================================= */

function ShadcnIo2FADemo() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center gap-2">
        <Lock className="h-4 w-4 text-emerald-500" />
        <div>
          <h4 className="font-bold text-foreground">Two-Factor Authentication (2FA)</h4>
          <p className="text-[10px] text-muted-foreground">Enter the 6-digit TOTP token</p>
        </div>
      </div>
      <div className="flex justify-center gap-1.5">
        {code.map((digit, idx) => (
          <input
            key={idx}
            maxLength={1}
            value={digit}
            onChange={(e) => {
              const next = [...code];
              next[idx] = e.target.value;
              setCode(next);
            }}
            className="w-8 h-9 text-center border rounded-md font-mono text-sm bg-muted/30 focus:border-primary outline-none"
          />
        ))}
      </div>
      <Button size="sm" className="w-full h-7 text-xs">
        Verify Security Token
      </Button>
    </div>
  );
}

function ShadcnIoSolarisDemo() {
  return (
    <div className="p-4 rounded-xl border bg-background text-xs space-y-2 text-center">
      <span className="text-[10px] font-mono text-muted-foreground uppercase">Solaris Template</span>
      <h3 className="text-sm font-extrabold tracking-tight">Pure White Minimalist SaaS</h3>
      <p className="text-[11px] text-muted-foreground max-w-xs mx-auto">
        Designed for enterprise AI models with strict typography rules.
      </p>
      <div className="pt-2">
        <Badge variant="outline" className="font-mono text-[10px]">Zero Dependency Vanilla CSS</Badge>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 16. Tailark                                                               */
/* ========================================================================= */

function TailarkHeroDemo() {
  const [email, setEmail] = useState("");
  return (
    <div className="p-5 rounded-xl border bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white text-xs space-y-3 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />
      <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-400/30 text-[10px]">
        Tailark Block
      </Badge>
      <h3 className="text-sm font-bold text-white leading-snug">
        Next Generation Developer Experience
      </h3>
      <div className="flex gap-2">
        <Input
          placeholder="Enter developer email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-7 text-xs bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        />
        <Button size="sm" className="h-7 text-xs bg-indigo-600 hover:bg-indigo-500 text-white shrink-0">
          Join Early
        </Button>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 17. Velora UI                                                             */
/* ========================================================================= */

function VeloraTokenStreamDemo() {
  const [speed, setSpeed] = useState([85]);
  const [tokens, setTokens] = useState(1280);

  useEffect(() => {
    const timer = setInterval(() => {
      setTokens((t) => t + Math.floor(speed[0] / 10));
    }, 400);
    return () => clearInterval(timer);
  }, [speed]);

  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Activity className="h-3.5 w-3.5 text-cyan-500 animate-pulse" />
          <span className="font-bold text-foreground">Velora Token Stream</span>
        </div>
        <span className="font-mono text-cyan-500 font-extrabold text-sm">{tokens.toLocaleString()} tok</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Streaming Rate</span>
          <span className="font-mono">{speed[0]} tokens/sec</span>
        </div>
        <Slider
          value={speed}
          onValueChange={(val) => {
            if (Array.isArray(val)) {
              setSpeed([...val]);
            } else if (typeof val === "number") {
              setSpeed([val]);
            }
          }}
          max={180}
          min={10}
          step={5}
        />
      </div>
      <div className="p-2 rounded-lg bg-muted/40 font-mono text-[11px] text-muted-foreground truncate">
        &gt; generating completions for prompt context [0x8f2]...
      </div>
    </div>
  );
}

function VeloraThinkingTraceDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left font-semibold text-muted-foreground hover:text-foreground"
      >
        <span className="flex items-center gap-1.5">
          <Cpu className="h-3.5 w-3.5 text-primary" /> Thinking Process (4.2s)
        </span>
        {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-1.5 pl-3 border-l-2 border-primary/40 text-[11px] text-muted-foreground"
          >
            <p>1. Analyzing prompt structural AST</p>
            <p>2. Matching similarity against 128 benchmark scenarios</p>
            <p className="text-foreground font-medium">3. Finalizing response synthesized representation</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ========================================================================= */
/* 18. Motion Primitives                                                     */
/* ========================================================================= */

function MotionTextEffectDemo() {
  const [key, setKey] = useState(0);
  const text = "Beautiful animated interfaces faster.";
  return (
    <div className="p-5 rounded-xl border bg-card text-center space-y-3">
      <div className="min-h-[40px] flex items-center justify-center">
        <motion.div key={key} className="flex flex-wrap justify-center gap-1 text-sm font-bold text-foreground">
          {text.split(" ").map((w, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
            >
              {w}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Button size="sm" variant="outline" className="h-7 text-xs gap-1" onClick={() => setKey((k) => k + 1)}>
        <RotateCcw className="h-3 w-3" /> Replay Text Effect
      </Button>
    </div>
  );
}

function MotionBorderTrailDemo() {
  return (
    <div className="relative p-5 rounded-xl border bg-card text-center space-y-1 overflow-hidden">
      <div className="absolute inset-0 border-2 border-transparent pointer-events-none rounded-xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,hsl(var(--primary))_360deg)] opacity-40"
        />
      </div>
      <div className="relative z-10">
        <h4 className="font-bold text-xs">Border Trail Particle Light</h4>
        <p className="text-[10px] text-muted-foreground">Endless luminous path around container bounds.</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 19. Skiper UI                                                             */
/* ========================================================================= */

function SkiperTiltCardDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-muted/20">
      <motion.div
        whileHover={{ rotateY: 15, rotateX: -10, scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-4 rounded-xl border bg-card shadow-md max-w-[200px] text-center space-y-1 cursor-pointer select-none"
      >
        <span className="text-[10px] font-mono text-primary">Skiper Spotlight</span>
        <h4 className="font-bold text-xs">3D Tilt & Magnetic</h4>
        <p className="text-[10px] text-muted-foreground">Physics gyroscope response on hover.</p>
      </motion.div>
    </div>
  );
}

/* ========================================================================= */
/* 20. Eldora UI                                                             */
/* ========================================================================= */

function EldoraBrowserMockupDemo() {
  return (
    <div className="rounded-xl border bg-card overflow-hidden shadow-sm text-xs">
      <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 border-b">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 max-w-xs mx-auto bg-background/80 rounded-md border px-2 py-0.5 text-[10px] font-mono text-center text-muted-foreground">
          https://eldoraui.site/browser
        </div>
      </div>
      <div className="p-4 text-center space-y-1">
        <h5 className="font-bold text-xs text-foreground">Interactive Safari Shell</h5>
        <p className="text-[10px] text-muted-foreground">Zero artifact mockup container</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 21. Kibo UI                                                               */
/* ========================================================================= */

function KiboAvatarStackDemo() {
  const users = [
    { name: "Sarah M.", bg: "bg-blue-500" },
    { name: "Leon K.", bg: "bg-emerald-500" },
    { name: "Diana P.", bg: "bg-purple-500" },
    { name: "Alex R.", bg: "bg-amber-500" },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card space-y-2">
      <div className="flex items-center -space-x-2">
        {users.map((u, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.15, zIndex: 10 }}
            className={`w-8 h-8 rounded-full border-2 border-background ${u.bg} text-white text-[11px] font-bold flex items-center justify-center shadow-xs cursor-pointer`}
          >
            {u.name[0]}
          </motion.div>
        ))}
        <div className="w-8 h-8 rounded-full border-2 border-background bg-muted text-[10px] font-medium flex items-center justify-center">
          +8
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Hover avatar for elevation stack</span>
    </div>
  );
}

function KiboMultiCursorDemo() {
  const [pos, setPos] = useState({ x: 40, y: 30 });
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="p-4 rounded-xl border bg-muted/20 relative min-h-[120px] overflow-hidden select-none cursor-crosshair text-xs"
    >
      <span className="text-[10px] text-muted-foreground">Collaborative Canvas (Move mouse inside)</span>
      <div
        className="absolute pointer-events-none transition-all duration-75 flex items-center gap-1"
        style={{ left: pos.x, top: pos.y }}
      >
        <MousePointer2 className="h-4 w-4 text-purple-600 fill-purple-600" />
        <span className="bg-purple-600 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-full shadow-xs">
          Guest Dev
        </span>
      </div>
    </div>
  );
}

function KiboGanttBarDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">Sprint 24 Roadmap</span>
        <Badge variant="outline" className="font-mono text-[10px]">72% Complete</Badge>
      </div>
      <div className="space-y-1.5">
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span>Database Migration</span>
            <span className="font-mono">Oct 1 - Oct 12</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span>Security Audit</span>
            <span className="font-mono">Oct 8 - Oct 20</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full w-[50%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 22. Kokonut UI                                                            */
/* ========================================================================= */

function KokonutAIComposerDemo() {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="relative border rounded-xl bg-background p-2 focus-within:border-primary/50 shadow-xs">
        <textarea
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask Kokonut AI composer anything..."
          className="w-full bg-transparent resize-none border-0 outline-none text-xs text-foreground placeholder:text-muted-foreground"
        />
        <div className="flex items-center justify-between pt-1 border-t border-border/40">
          <Badge variant="outline" className="text-[9px] font-mono">Claude 3.5 Sonnet</Badge>
          <Button size="sm" className="h-6 px-2 text-[10px] gap-1">
            <Send className="h-2.5 w-2.5" /> Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 23. Animate UI                                                            */
/* ========================================================================= */

function AnimateParticleButtonDemo() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-muted/20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setClicked(true);
          setTimeout(() => setClicked(false), 800);
        }}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-xs shadow-lg shadow-orange-500/20 cursor-pointer flex items-center gap-1.5"
      >
        <Sparkles className="h-3.5 w-3.5" />
        {clicked ? "Burst Triggered!" : "Particle Glow Action"}
      </motion.button>
      <span className="text-[10px] text-muted-foreground mt-2 font-mono">Framer Motion micro particle button</span>
    </div>
  );
}

/* ========================================================================= */
/* 24. Origin UI (coss.com/ui)                                               */
/* ========================================================================= */

function OriginTagInputDemo() {
  const [tags, setTags] = useState(["Accessible", "BaseUI", "W3C"]);
  const [val, setVal] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && val.trim()) {
      if (!tags.includes(val.trim())) {
        setTags([...tags, val.trim()]);
      }
      setVal("");
    } else if (e.key === "Backspace" && !val && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex flex-wrap items-center gap-1 p-1.5 border rounded-lg bg-background min-h-[36px]">
        {tags.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded bg-muted text-[11px] font-medium flex items-center gap-1">
            {t}
            <button onClick={() => setTags(tags.filter((x) => x !== t))}>
              <X className="h-2.5 w-2.5 text-muted-foreground hover:text-foreground" />
            </button>
          </span>
        ))}
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Press enter to add..."
          className="flex-1 bg-transparent border-0 outline-none text-xs px-1 min-w-[100px]"
        />
      </div>
      <p className="text-[10px] text-muted-foreground">Type text & press Enter to create chip, Backspace to delete.</p>
    </div>
  );
}

/* ========================================================================= */
/* 25. ReUI                                                                  */
/* ========================================================================= */

function ReUIDataGridDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2 overflow-x-auto">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">ReUI Enterprise Data Grid</span>
        <Badge variant="outline" className="font-mono text-[10px]">Col 1 Pinned</Badge>
      </div>
      <table className="w-full text-left border rounded-lg">
        <thead className="bg-muted/40 border-b text-[10px] text-muted-foreground">
          <tr>
            <th className="p-1.5 border-r font-mono">UUID (Pinned)</th>
            <th className="p-1.5">Tenant Domain</th>
            <th className="p-1.5 text-right">QPS</th>
          </tr>
        </thead>
        <tbody className="text-[11px]">
          <tr className="border-b last:border-0 hover:bg-muted/20">
            <td className="p-1.5 font-mono border-r font-bold text-primary">#org_891</td>
            <td className="p-1.5">alpha.acme.corp</td>
            <td className="p-1.5 text-right font-mono">1,420/s</td>
          </tr>
          <tr className="border-b last:border-0 hover:bg-muted/20">
            <td className="p-1.5 font-mono border-r font-bold text-primary">#org_892</td>
            <td className="p-1.5">beta.fintech.ai</td>
            <td className="p-1.5 text-right font-mono">3,890/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ========================================================================= */
/* 26. MynaUI                                                                */
/* ========================================================================= */

function MynaUISegmentedNavDemo() {
  const [seg, setSeg] = useState("all");
  return (
    <div className="p-4 rounded-xl border bg-muted/20 flex flex-col items-center justify-center space-y-2">
      <div className="inline-flex rounded-xl border bg-background p-1 shadow-xs text-xs font-medium">
        {[
          { id: "all", label: "Overview", count: 48 },
          { id: "logs", label: "Audit Logs", count: 12 },
          { id: "alerts", label: "Alerts", count: 3 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSeg(tab.id)}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
              seg === tab.id ? "bg-muted text-foreground font-semibold shadow-xs" : "text-muted-foreground"
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-[10px] font-mono text-muted-foreground/70">({tab.count})</span>
          </button>
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Figma-aligned segmented pill</span>
    </div>
  );
}

/* ========================================================================= */
/* 27. shadcn/ui Charts                                                      */
/* ========================================================================= */

function ShadcnChartsAreaDemo() {
  const data = [
    { month: "Jan", desktop: 186, mobile: 80 },
    { month: "Feb", desktop: 305, mobile: 200 },
    { month: "Mar", desktop: 237, mobile: 120 },
    { month: "Apr", desktop: 273, mobile: 190 },
    { month: "May", desktop: 309, mobile: 230 },
  ];

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-bold text-foreground">Traffic Inflow Analytics</span>
          <p className="text-[10px] text-muted-foreground">Dual gradient area series</p>
        </div>
        <Badge variant="outline" className="font-mono text-[10px]">shadcn/ui Charts</Badge>
      </div>
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="areaColorDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis dataKey="month" tick={{ fontSize: 10 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                borderColor: "hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "11px",
              }}
            />
            <Area
              type="monotone"
              dataKey="desktop"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#areaColorDesktop)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 28. shadcnstudio.com                                                      */
/* ========================================================================= */

function ShadcnStudioPricingDemo() {
  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between border-b pb-2">
        <div>
          <h4 className="font-bold text-foreground">Enterprise Multi-tenant Block</h4>
          <p className="text-[10px] text-muted-foreground">Direct from shadcnstudio.com/blocks</p>
        </div>
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[10px]">
          Best Value
        </Badge>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold font-mono text-foreground">$149</span>
        <span className="text-[10px] text-muted-foreground">/organization/month</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> SSO SAML 2.0</span>
        <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> Dedicated VPC</span>
        <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> 99.99% SLA</span>
        <span className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> SOC2 Report</span>
      </div>
      <Button size="sm" className="w-full h-7 text-xs">
        Provision Dedicated Cluster
      </Button>
    </div>
  );
}


/* ========================================================================= */
/* Additional Rich Live Previews for Full 28 Sites                          */
/* ========================================================================= */

function ShadcnCalendarDemo() {
  const [selectedDay, setSelectedDay] = useState(15);
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2 max-w-[260px] mx-auto text-center">
      <div className="flex items-center justify-between font-bold pb-1 border-b">
        <span>October 2026</span>
        <Badge variant="outline" className="text-[10px] font-mono">Day {selectedDay}</Badge>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[10px]">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(d => (
          <span key={d} className="text-muted-foreground font-medium">{d}</span>
        ))}
        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`p-1 rounded-md transition-colors font-mono ${
              selectedDay === day ? "bg-primary text-primary-foreground font-bold" : "hover:bg-muted"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

function MagicUIBeamDemo() {
  return (
    <div className="relative p-6 rounded-xl border bg-muted/20 flex items-center justify-between overflow-hidden">
      <div className="w-10 h-10 rounded-xl bg-card border flex items-center justify-center font-bold text-xs shadow-md z-10">
        API
      </div>
      <div className="flex-1 relative mx-4 h-1 bg-border rounded-full overflow-hidden">
        <motion.div
          animate={{ x: [-100, 300] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-16 h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
        />
      </div>
      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-indigo-500/30 z-10">
        AI
      </div>
    </div>
  );
}

function AceternitySparklesDemo() {
  return (
    <div className="relative p-6 rounded-xl border bg-black text-center space-y-2 overflow-hidden min-h-[120px] flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25)_0%,transparent_70%)]" />
      <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 z-10">
        Aceternity Sparkles
      </span>
      <h4 className="text-base font-extrabold text-white z-10 tracking-tight">
        Next Dimension Interfaces
      </h4>
    </div>
  );
}

function BoardUIKpiBannerDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs flex items-center justify-between gap-4">
      <div>
        <span className="text-[10px] text-muted-foreground">Monthly Recurring Revenue</span>
        <div className="text-base font-extrabold font-mono text-foreground">$128,450.00</div>
      </div>
      <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 font-mono text-xs">
        +24.8% QoQ
      </Badge>
    </div>
  );
}

function ShadcnStoreHeroDemo() {
  const [val, setVal] = useState("");
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-b from-card to-muted/30 text-xs space-y-2 text-center">
      <Badge variant="outline" className="text-[10px] text-primary">Production-grade Blocks</Badge>
      <h4 className="text-sm font-bold text-foreground">Launch Products at Lightning Speed</h4>
      <div className="flex gap-1.5 max-w-xs mx-auto pt-1">
        <Input
          placeholder="your@work-email.com"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="h-7 text-xs bg-background"
        />
        <Button size="sm" className="h-7 text-xs shrink-0">Get Started</Button>
      </div>
    </div>
  );
}

function ReferoGeistDemo() {
  return (
    <div className="p-4 rounded-xl border bg-black text-white text-xs font-mono space-y-2">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-1.5 text-[10px] text-neutral-400">
        <span>Vercel Geist System</span>
        <span>0.10.4-canary</span>
      </div>
      <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300">
        $ npx create-next-app@latest --typescript
      </div>
    </div>
  );
}

function HeroUIPromptBarDemo() {
  const [active, setActive] = useState(false);
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className={`flex items-center gap-2 p-2 rounded-xl border bg-background transition-all ${active ? "border-pink-500/60 shadow-md ring-2 ring-pink-500/20" : ""}`}>
        <Sparkles className="h-4 w-4 text-pink-500 shrink-0" />
        <input
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Ask HeroUI assistant to configure workspace permissions..."
          className="flex-1 bg-transparent border-0 outline-none text-xs text-foreground placeholder:text-muted-foreground"
        />
        <Button size="sm" className="h-6 px-2 text-[10px] bg-pink-600 hover:bg-pink-700 text-white">
          Send
        </Button>
      </div>
    </div>
  );
}

function ShadcnSpaceMarketingDemo() {
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-r from-teal-500/10 via-background to-card text-xs space-y-2">
      <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/20 text-[10px]">ShadcnSpace</Badge>
      <h4 className="text-sm font-bold text-foreground">Turn Data Into Beautiful Stories</h4>
      <p className="text-[11px] text-muted-foreground">Comprehensive dashboard widgets crafted for modern apps.</p>
    </div>
  );
}

function BeUITypewriterDemo() {
  const [text, setText] = useState("Empower designers with code.");
  const [key, setKey] = useState(0);
  return (
    <div className="p-4 rounded-xl border bg-card text-center space-y-2">
      <div key={key} className="font-mono text-xs font-bold text-primary flex items-center justify-center gap-1">
        <span>{text}</span>
        <span className="w-1.5 h-3 bg-primary animate-pulse" />
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setKey(k => k + 1)}>
        Replay Typewriter
      </Button>
    </div>
  );
}

function RareUIFluidOrbDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 blur-sm shadow-xl"
      />
      <span className="text-[10px] text-muted-foreground font-mono mt-3">RareUI Fluid Physics Orb</span>
    </div>
  );
}

function TransitionsTextSwapDemo() {
  const [idx, setIdx] = useState(0);
  const words = ["Blazing Fast", "Ultra Smooth", "Type Safe", "Pixel Perfect"];
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="p-5 rounded-xl border bg-muted/20 text-center space-y-1">
      <span className="text-[10px] text-muted-foreground uppercase font-mono">Transitions.dev</span>
      <div className="h-6 overflow-hidden">
        <motion.div
          key={idx}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="text-sm font-extrabold text-teal-600 dark:text-teal-400"
        >
          {words[idx]}
        </motion.div>
      </div>
    </div>
  );
}

function BeautifulUIRagDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-foreground">RAG Source Citations</span>
        <Badge variant="outline" className="text-[10px] font-mono text-emerald-600">3 chunks / 0.94 score</Badge>
      </div>
      <div className="p-2 rounded bg-muted/40 text-[10px] font-mono text-muted-foreground truncate">
        [#chunk_1] doc://knowledge/nextjs16.md#auth-layer (similarity: 0.96)
      </div>
    </div>
  );
}

function ShadcnIoCheckerDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> WCAG 2.1 A11y Scanner
        </span>
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[10px]">
          100 / 100 PASS
        </Badge>
      </div>
      <p className="text-[10px] text-muted-foreground">All contrast ratios & ARIA attributes conform to AAA criteria.</p>
    </div>
  );
}

function TailarkBentoDemo() {
  return (
    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl border bg-slate-950 text-white text-xs">
      <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
        <span className="text-[10px] text-slate-400">Cold Start Latency</span>
        <div className="text-base font-extrabold font-mono text-indigo-400">12ms</div>
      </div>
      <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60">
        <span className="text-[10px] text-slate-400">Edge Uptime SLA</span>
        <div className="text-base font-extrabold font-mono text-emerald-400">99.99%</div>
      </div>
    </div>
  );
}

function VeloraVoiceOrbDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card space-y-2">
      <div className="flex items-center gap-1 h-8">
        {[20, 60, 90, 40, 75, 100, 30, 80].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [10, h * 0.35, 10] }}
            transition={{ repeat: Infinity, duration: 1 + i * 0.1, ease: "easeInOut" }}
            className="w-1.5 bg-cyan-500 rounded-full"
          />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Listening for voice intent...</span>
    </div>
  );
}

function MotionAnimatedBgDemo() {
  const [tab, setTab] = useState("all");
  const tabs = [
    { id: "all", label: "All Items" },
    { id: "components", label: "Components" },
    { id: "blocks", label: "Blocks" },
  ];
  return (
    <div className="flex justify-center p-4 rounded-xl border bg-muted/20">
      <div className="flex gap-1 p-1 rounded-xl bg-card border shadow-xs relative">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`relative px-3 py-1 text-xs font-medium rounded-lg transition-colors z-10 ${
              tab === t.id ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === t.id && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-muted rounded-lg shadow-xs -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SkiperMagneticButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-xl border bg-card">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-md cursor-pointer"
      >
        Magnetic Hover Trigger
      </motion.button>
      <span className="text-[10px] text-muted-foreground font-mono mt-2">Skiper UI magnetic physics response</span>
    </div>
  );
}

function EldoraPhoneMockupDemo() {
  return (
    <div className="max-w-[200px] mx-auto rounded-3xl border-4 border-muted bg-card shadow-xl overflow-hidden p-2 text-center text-xs space-y-2">
      <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
      <div className="py-4 space-y-1">
        <h5 className="font-bold text-xs text-foreground">iPhone 17 Pro</h5>
        <p className="text-[10px] text-muted-foreground">Dynamic Island Active</p>
      </div>
    </div>
  );
}

function KiboCodeSnippetDemo() {
  const [copied, setCopied] = useState(false);
  const code = `npm i @kibo-ui/avatar-stack`;
  return (
    <div className="p-3 rounded-xl border bg-neutral-950 text-white text-xs font-mono space-y-1">
      <div className="flex items-center justify-between text-[10px] text-neutral-400 pb-1 border-b border-neutral-800">
        <span>bash</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="flex items-center gap-1 hover:text-white"
        >
          {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="text-emerald-400 pt-1">$ {code}</div>
    </div>
  );
}

function KokonutGlassCardDemo() {
  return (
    <div className="p-5 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-xl text-center space-y-1 text-xs">
      <h4 className="font-bold text-foreground">Frosted Glass Surface</h4>
      <p className="text-[10px] text-muted-foreground">High refractive blur with subtle specular rim highlights.</p>
    </div>
  );
}

function AnimatePulsingStatusDemo() {
  const [status, setStatus] = useState<"healthy" | "warning">("healthy");
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border bg-muted/20 space-y-2">
      <div
        onClick={() => setStatus(status === "healthy" ? "warning" : "healthy")}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background shadow-xs cursor-pointer text-xs"
      >
        <span className={`w-2 h-2 rounded-full animate-ping ${status === "healthy" ? "bg-emerald-500" : "bg-amber-500"}`} />
        <span className="font-medium font-mono text-[11px]">
          Cluster: {status === "healthy" ? "99.98% Healthy" : "Degraded Warning"}
        </span>
      </div>
      <span className="text-[10px] text-muted-foreground font-mono">Click badge to toggle health state</span>
    </div>
  );
}

function OriginStepperSliderDemo() {
  const [val, setVal] = useState([3]);
  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between font-bold">
        <span>Discrete Step Level</span>
        <span className="font-mono text-primary">Level {val[0]} / 5</span>
      </div>
      <Slider
        value={val}
        onValueChange={(v) => {
          if (Array.isArray(v)) setVal([...v]);
          else if (typeof v === "number") setVal([v]);
        }}
        min={1}
        max={5}
        step={1}
      />
    </div>
  );
}

function ReUIFileUploadDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center text-[11px] font-medium">
        <span>payload-archive-v2.zip</span>
        <span className="text-emerald-500 font-mono">78%</span>
      </div>
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 w-[78%] rounded-full" />
      </div>
    </div>
  );
}

function MynaUIPillBadgesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-4 rounded-xl border bg-card text-xs">
      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1 text-[11px] font-medium font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Operational
      </span>
      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 flex items-center gap-1 text-[11px] font-medium font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Synced
      </span>
    </div>
  );
}

function ShadcnChartsBarDemo() {
  const data = [
    { label: "Q1", desktop: 120, mobile: 60 },
    { label: "Q2", desktop: 190, mobile: 90 },
    { label: "Q3", desktop: 280, mobile: 140 },
    { label: "Q4", desktop: 340, mobile: 210 },
  ];
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold">Quarterly Growth</span>
        <Badge variant="outline" className="font-mono text-[10px]">Stacked Bar</Badge>
      </div>
      <div className="h-24 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="desktop" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="hsl(var(--primary)/0.4)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnStudioHeroDemo() {
  return (
    <div className="p-5 rounded-xl border bg-zinc-950 text-white text-xs space-y-2 text-center">
      <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px]">
        Shadcn Studio Pro
      </Badge>
      <h3 className="text-base font-extrabold text-white tracking-tight">
        Enterprise SaaS Design Systems
      </h3>
      <p className="text-[11px] text-zinc-400 max-w-sm mx-auto">
        Built for modern teams building AI tools, developer platforms, and fintech apps.
      </p>
    </div>
  );
}


/* ========================================================================= */
/* shadcn.io Rich Interactive Blocks (14 New Blocks)                         */
/* ========================================================================= */

function ShadcnIoAccessTokensDemo() {
  const [token, setToken] = useState("sk_live_94f8a12bc09e88d");
  const [copied, setCopied] = useState(false);
  const [perm, setPerm] = useState<"read" | "write">("write");

  const generateNew = () => {
    const rand = Math.random().toString(36).substring(2, 12);
    setToken("sk_live_" + rand);
  };

  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-foreground">API Access Tokens</h4>
          <p className="text-[10px] text-muted-foreground">Manage service authentication keys</p>
        </div>
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={generateNew}>
          Rotate Secret
        </Button>
      </div>
      <div className="flex items-center justify-between p-2 rounded-lg bg-muted/40 font-mono text-[11px] border">
        <span className="truncate">{token}</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(token);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="text-muted-foreground hover:text-foreground p-1 shrink-0 ml-2"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">Scope Permission:</span>
        <div className="flex gap-1">
          <button
            onClick={() => setPerm("read")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono ${perm === "read" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}`}
          >
            Read Only
          </button>
          <button
            onClick={() => setPerm("write")}
            className={`px-2 py-0.5 rounded text-[10px] font-mono ${perm === "write" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}`}
          >
            Read & Write
          </button>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoKanbanDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Auth 2FA Setup", col: "progress" },
    { id: 2, title: "Stripe Webhook", col: "todo" },
    { id: 3, title: "Docker Deploy", col: "done" },
  ]);

  const moveTask = (id: number) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nextCol = t.col === "todo" ? "progress" : t.col === "progress" ? "done" : "todo";
        return { ...t, col: nextCol };
      }
      return t;
    }));
  };

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-bold">Agent Task Pipeline</span>
        <span className="text-[10px] text-muted-foreground font-mono">Click card to advance</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        {["todo", "progress", "done"].map(colName => (
          <div key={colName} className="p-1.5 rounded-lg bg-muted/30 border space-y-1">
            <span className="font-mono uppercase text-[9px] text-muted-foreground block">
              {colName}
            </span>
            {tasks.filter(t => t.col === colName).map(task => (
              <div
                key={task.id}
                onClick={() => moveTask(task.id)}
                className="p-1.5 rounded bg-background border shadow-2xs cursor-pointer hover:border-primary/50 text-[10px] font-medium"
              >
                {task.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoStatsStreakDemo() {
  const [streak, setStreak] = useState(42);
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    if (!checked) {
      setStreak(s => s + 1);
      setChecked(true);
    } else {
      setStreak(s => s - 1);
      setChecked(false);
    }
  };

  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-muted-foreground uppercase font-mono">Consistency Engine</span>
          <div className="flex items-baseline gap-1.5">
            <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
            <span className="text-xl font-black font-mono text-foreground">{streak} Days</span>
          </div>
        </div>
        <Button
          size="sm"
          variant={checked ? "secondary" : "default"}
          className="h-7 text-xs"
          onClick={toggleCheck}
        >
          {checked ? "Done Today ✓" : "Check In Today"}
        </Button>
      </div>
      <div className="flex justify-between gap-1 pt-1 border-t">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="text-center space-y-1">
            <span className="text-[9px] text-muted-foreground">{d}</span>
            <div className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-[10px] ${
              i < 5 || checked ? "bg-orange-500/20 text-orange-600 font-bold border border-orange-500/30" : "bg-muted text-muted-foreground"
            }`}>
              {i < 5 || checked ? "✓" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoAchievementDemo() {
  const [claimed, setClaimed] = useState(false);
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-br from-amber-500/10 via-card to-card text-xs space-y-2.5 text-center">
      <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center shadow-lg border border-amber-500/30">
        <Star className="h-6 w-6 fill-amber-400" />
      </div>
      <div>
        <h4 className="font-bold text-sm text-foreground">Unicorn Scaler Unlocked</h4>
        <p className="text-[11px] text-muted-foreground">Processed over 1,000,000 production API requests.</p>
      </div>
      <Button
        size="sm"
        disabled={claimed}
        onClick={() => setClaimed(true)}
        className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-black font-semibold"
      >
        {claimed ? "Reward Claimed ✓" : "Claim Collector Badge"}
      </Button>
    </div>
  );
}

function ShadcnIoCrudRbacDemo() {
  const [perms, setPerms] = useState({
    admin: { read: true, write: true, delete: true },
    editor: { read: true, write: true, delete: false },
    guest: { read: true, write: false, delete: false },
  });

  const toggle = (role: 'admin' | 'editor' | 'guest', act: 'read' | 'write' | 'delete') => {
    setPerms(prev => ({
      ...prev,
      [role]: { ...prev[role], [act]: !prev[role][act] }
    }));
  };

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <span className="font-bold text-foreground">Role-Based Access Control</span>
      <table className="w-full text-left text-[11px]">
        <thead className="bg-muted/40 border-b text-[10px] text-muted-foreground">
          <tr>
            <th className="p-1">Role</th>
            <th className="p-1 text-center">Read</th>
            <th className="p-1 text-center">Write</th>
            <th className="p-1 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {(['admin', 'editor', 'guest'] as const).map(role => (
            <tr key={role} className="border-b last:border-0 hover:bg-muted/20">
              <td className="p-1 font-mono capitalize font-medium">{role}</td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].read}
                  onChange={() => toggle(role, 'read')}
                  className="rounded cursor-pointer"
                />
              </td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].write}
                  onChange={() => toggle(role, 'write')}
                  className="rounded cursor-pointer"
                />
              </td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].delete}
                  onChange={() => toggle(role, 'delete')}
                  className="rounded cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShadcnIoAgendaDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-bold flex items-center gap-1.5">
          <CalendarIcon className="h-3.5 w-3.5 text-blue-500" /> Today&#39;s Team Agenda
        </span>
        <Badge variant="outline" className="text-[9px] font-mono">3 Meetings</Badge>
      </div>
      <div className="space-y-1.5">
        <div className="p-1.5 rounded-lg border bg-blue-500/5 border-blue-500/30 flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Sprint 24 Standup</div>
            <div className="text-[10px] text-muted-foreground font-mono">10:00 AM - 10:30 AM</div>
          </div>
          <Button size="sm" className="h-6 text-[10px] px-2 bg-blue-600 hover:bg-blue-700 text-white">
            Join
          </Button>
        </div>
        <div className="p-1.5 rounded-lg border bg-muted/20 flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Architecture Review</div>
            <div className="text-[10px] text-muted-foreground font-mono">02:00 PM - 03:00 PM</div>
          </div>
          <Badge variant="secondary" className="text-[9px]">Upcoming</Badge>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoEmptyToolsDemo() {
  const [connected, setConnected] = useState<Record<string, boolean>>({
    github: true,
    slack: false,
    figma: false,
  });

  const toggle = (k: string) => {
    setConnected(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <div className="p-4 rounded-xl border bg-muted/20 text-center text-xs space-y-3">
      <div className="w-10 h-10 rounded-full bg-card border flex items-center justify-center mx-auto text-muted-foreground shadow-xs">
        <Globe className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold text-foreground">Connect Third-party Integrations</h4>
        <p className="text-[10px] text-muted-foreground">Sync your workflows automatically</p>
      </div>
      <div className="flex justify-center gap-2">
        {['github', 'slack', 'figma'].map(t => (
          <Button
            key={t}
            size="sm"
            variant={connected[t] ? "secondary" : "outline"}
            className="h-6 text-[10px] capitalize"
            onClick={() => toggle(t)}
          >
            {t} {connected[t] ? "✓" : "+"}
          </Button>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoUpload3DDemo() {
  return (
    <div className="p-4 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-card text-center text-xs space-y-2 cursor-pointer transition-colors">
      <Box className="h-7 w-7 text-primary mx-auto animate-bounce" />
      <div>
        <p className="font-bold text-foreground">Drop .GLTF or .OBJ Models Here</p>
        <p className="text-[10px] text-muted-foreground">Automatic polygon count & mesh verification</p>
      </div>
      <Badge variant="outline" className="font-mono text-[9px]">Max File Size: 100MB</Badge>
    </div>
  );
}

function ShadcnIoCommandAccountsDemo() {
  const [activeOrg, setActiveOrg] = useState("Acme Global");
  const orgs = ["Acme Global", "Personal Project", "Studio Engineering"];

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between pb-1 border-b">
        <span className="font-bold text-foreground">Organization Switcher</span>
        <Badge variant="outline" className="font-mono text-[9px]">⌘K</Badge>
      </div>
      <div className="space-y-1">
        {orgs.map(org => (
          <div
            key={org}
            onClick={() => setActiveOrg(org)}
            className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
              activeOrg === org ? "bg-primary/10 border-primary/40 font-bold" : "hover:bg-muted/40"
            }`}
          >
            <span>{org}</span>
            {activeOrg === org && <Check className="h-3.5 w-3.5 text-primary" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoAbTestingDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2.5">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Landing CTA A/B Experiment</span>
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[9px] font-mono">
          Variant B Winner (+46%)
        </Badge>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span>Variant A (Original Button)</span>
            <span className="font-mono">12.4% Conv</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-muted-foreground/60 w-[42%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span className="font-semibold text-emerald-600">Variant B (Gradient Shimmer)</span>
            <span className="font-mono font-bold text-emerald-600">18.2% Conv</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[68%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoBillingAlertDemo() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) {
    return (
      <div className="p-4 rounded-xl border bg-card text-center text-xs">
        <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => setDismissed(false)}>
          Reset Checkout Reminder
        </Button>
      </div>
    );
  }

  return (
    <div className="p-3.5 rounded-xl border bg-gradient-to-r from-amber-500/10 via-background to-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-1.5 text-amber-600">
          <Clock className="h-3.5 w-3.5" /> Cart Reserved for 04:59
        </span>
        <button onClick={() => setDismissed(true)} className="text-muted-foreground hover:text-foreground">
          ✕
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground">
        Use code <code className="bg-amber-500/20 px-1 py-0.5 rounded font-mono text-amber-700 dark:text-amber-300 font-bold">SAVE10</code> at checkout to claim 10% off your annual subscription.
      </p>
      <Button size="sm" className="h-7 text-xs bg-amber-600 hover:bg-amber-700 text-white w-full">
        Complete Checkout ($171/yr)
      </Button>
    </div>
  );
}

function ShadcnIoAdminNavbarDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between p-2 rounded-lg border bg-muted/40">
        <div className="flex items-center gap-2">
          <span className="font-black text-xs text-foreground">SHADCN/ADMIN</span>
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-[9px] font-mono">
            PROD
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-muted-foreground font-mono">us-east-1 (ok)</span>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoLockedLoginDemo() {
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div className="p-4 rounded-xl border bg-red-500/5 border-red-500/30 text-xs space-y-2.5 text-center">
      <Lock className="h-6 w-6 text-red-500 mx-auto" />
      <div>
        <h4 className="font-bold text-red-600">Account Temporarily Locked</h4>
        <p className="text-[10px] text-muted-foreground">Detected 3 failed login attempts from unknown IP.</p>
      </div>
      {emailSent ? (
        <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-[10px]">
          Unlock Link Sent to Email ✓
        </Badge>
      ) : (
        <Button size="sm" variant="destructive" className="h-7 text-xs w-full" onClick={() => setEmailSent(true)}>
          Send One-Time Email Unlock
        </Button>
      )}
    </div>
  );
}

function ShadcnIoReframeDemo() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold">Reframe Enterprise Template</span>
        <div className="flex gap-1 p-0.5 border rounded-lg bg-muted/40">
          <button
            onClick={() => setDevice("desktop")}
            className={`p-1 rounded ${device === "desktop" ? "bg-background shadow-xs font-bold" : "text-muted-foreground"}`}
          >
            <Monitor className="h-3 w-3" />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`p-1 rounded ${device === "mobile" ? "bg-background shadow-xs font-bold" : "text-muted-foreground"}`}
          >
            <Smartphone className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className={`mx-auto border rounded-lg p-3 bg-muted/20 text-center transition-all ${device === "desktop" ? "w-full" : "max-w-[190px]"}`}>
        <div className="text-[11px] font-bold text-foreground">Reframe SaaS Console</div>
        <p className="text-[10px] text-muted-foreground">Multi-region cluster telemetry & billing management.</p>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* BATCH LIVE PREVIEW DEMOS: OFFICIAL & TIER 1 LIBRARIES                     */
/* ========================================================================= */

// --- 1. ui.shadcn.com Demos ---

function ShadcnDataTableBatchDemo() {
  const [selected, setSelected] = useState<number[]>([1]);
  const [sortAsc, setSortAsc] = useState(true);
  const rows = [
    { id: 1, user: "Sophia Chen", role: "Staff Engineer", status: "Active", spend: "$4,250" },
    { id: 2, user: "Alex Rivera", role: "Product Designer", status: "Active", spend: "$1,890" },
    { id: 3, user: "Marcus Vance", role: "Security Auditor", status: "Review", spend: "$8,120" },
  ];
  const sorted = [...rows].sort((a, b) => sortAsc ? a.id - b.id : b.id - a.id);

  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center justify-between pb-1 border-b">
        <span className="font-semibold text-foreground flex items-center gap-1.5">
          <Table className="h-3.5 w-3.5 text-primary" /> Members Directory
        </span>
        <Badge variant="outline" className="text-[10px]">{selected.length} Selected</Badge>
      </div>
      <div className="space-y-1">
        {sorted.map(row => {
          const isSel = selected.includes(row.id);
          return (
            <div
              key={row.id}
              onClick={() => setSelected(prev => isSel ? prev.filter(i => i !== row.id) : [...prev, row.id])}
              className={`flex items-center justify-between p-1.5 rounded cursor-pointer transition-colors ${isSel ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"}`}
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={isSel} onChange={() => {}} className="rounded h-3 w-3" />
                <span className="font-medium text-foreground">{row.user}</span>
                <span className="text-[10px] text-muted-foreground">({row.role})</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={row.status === "Active" ? "default" : "secondary"} className="text-[9px] h-4">{row.status}</Badge>
                <span className="font-mono text-muted-foreground">{row.spend}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center pt-1 text-[10px] text-muted-foreground">
        <button onClick={() => setSortAsc(!sortAsc)} className="hover:text-foreground flex items-center gap-1">
          <Shuffle className="h-2.5 w-2.5" /> Toggle Sort {sortAsc ? "▲" : "▼"}
        </button>
        <span>Page 1 of 12</span>
      </div>
    </div>
  );
}

function ShadcnCommandDemo() {
  const [query, setQuery] = useState("");
  const items = [
    { title: "Create new workspace", group: "Actions", icon: Plus },
    { title: "Invite team members", group: "Actions", icon: Users },
    { title: "Manage billing & invoices", group: "Settings", icon: CreditCard },
    { title: "API Keys & Webhooks", group: "Settings", icon: Lock },
  ];
  const filtered = items.filter(it => it.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg border bg-muted/40">
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type a command or search..."
          className="bg-transparent text-xs text-foreground focus:outline-none w-full"
        />
        <Badge variant="outline" className="font-mono text-[9px]">⌘K</Badge>
      </div>
      <div className="space-y-1">
        {filtered.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center justify-between p-1.5 rounded hover:bg-muted cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-primary" />
                <span className="text-foreground">{item.title}</span>
              </div>
              <span className="text-[9px] text-muted-foreground uppercase">{item.group}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ShadcnTabsDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2.5">
      <div className="flex bg-muted p-0.5 rounded-lg border">
        {["overview", "analytics", "security"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1 rounded text-center font-medium capitalize transition-all ${activeTab === tab ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-3 bg-muted/30 rounded-lg border min-h-[60px] flex flex-col justify-center">
        {activeTab === "overview" && <p className="text-foreground">📊 Main overview summary: 99.98% healthy status.</p>}
        {activeTab === "analytics" && <p className="text-primary font-mono">📈 Traffic trend +34.2% YoY growth.</p>}
        {activeTab === "security" && <p className="text-emerald-500 font-mono">🛡️ 0 vulnerabilities detected in 48 hours.</p>}
      </div>
    </div>
  );
}

function ShadcnCarouselDemo() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: "Next.js 16 App Router", desc: "Server Actions & Edge Rendering", tag: "Architecture" },
    { title: "Tailwind CSS v4 Engine", desc: "Instant JIT & Native CSS Variables", tag: "Design System" },
    { title: "Base UI Unstyled Primitives", desc: "Accessible Foundation by MUI Team", tag: "Accessibility" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="relative p-4 rounded-lg bg-gradient-to-br from-primary/10 via-background to-muted/40 border overflow-hidden min-h-[90px] flex flex-col justify-between">
        <div>
          <Badge variant="outline" className="text-[9px] mb-1">{slides[slide].tag}</Badge>
          <h4 className="font-bold text-foreground text-sm">{slides[slide].title}</h4>
          <p className="text-[11px] text-muted-foreground">{slides[slide].desc}</p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-1">
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${slide === i ? "w-4 bg-primary" : "w-1.5 bg-muted"}`} />
          ))}
        </div>
        <div className="flex gap-1.5">
          <Button size="sm" variant="outline" className="h-6 w-6 p-0 text-[10px]" onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}>‹</Button>
          <Button size="sm" variant="outline" className="h-6 w-6 p-0 text-[10px]" onClick={() => setSlide((slide + 1) % slides.length)}>›</Button>
        </div>
      </div>
    </div>
  );
}

function ShadcnSheetDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs relative overflow-hidden min-h-[120px] flex flex-col justify-center items-center">
      <Button size="sm" onClick={() => setOpen(!open)} className="gap-1.5">
        <Sliders className="h-3 w-3" /> {open ? "Close Panel" : "Open Slide-over Sheet"}
      </Button>
      {open && (
        <div className="absolute inset-y-0 right-0 w-3/4 bg-card border-l shadow-2xl p-3 flex flex-col justify-between animate-in slide-in-from-right duration-200">
          <div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="font-bold text-foreground">Filter Settings</span>
              <X className="h-3 w-3 cursor-pointer text-muted-foreground" onClick={() => setOpen(false)} />
            </div>
            <p className="text-[11px] text-muted-foreground mt-2">Adjust query thresholds and real-time alerts.</p>
          </div>
          <Button size="sm" className="w-full h-6 text-[10px]" onClick={() => setOpen(false)}>Save Changes</Button>
        </div>
      )}
    </div>
  );
}

function ShadcnComboboxDemo() {
  const [val, setVal] = useState("nextjs");
  const options = [
    { value: "nextjs", label: "Next.js (App Router)" },
    { value: "sveltekit", label: "SvelteKit 2" },
    { value: "nuxt", label: "Nuxt 3" },
    { value: "remix", label: "Remix Run" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Select Target Framework</label>
      <div className="grid grid-cols-2 gap-1.5">
        {options.map(opt => (
          <button
            key={opt.value}
            onClick={() => setVal(opt.value)}
            className={`p-2 rounded-lg border text-left flex items-center justify-between transition-colors ${val === opt.value ? "border-primary bg-primary/10 text-primary font-medium" : "border-border hover:bg-muted text-foreground"}`}
          >
            <span className="truncate">{opt.label}</span>
            {val === opt.value && <Check className="h-3 w-3 text-primary flex-shrink-0" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function ShadcnDrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-muted-foreground">Native bottom sheet drawer for mobile gestures</p>
      <Button size="sm" variant="outline" onClick={() => setOpen(!open)} className="w-full">
        {open ? "Dismiss Drawer" : "Trigger Bottom Drawer"}
      </Button>
      {open && (
        <div className="p-3 bg-muted/60 border rounded-lg animate-in slide-in-from-bottom duration-200 space-y-2">
          <div className="w-8 h-1 bg-muted-foreground/40 rounded-full mx-auto" />
          <h5 className="font-bold text-foreground">Confirm Action</h5>
          <p className="text-[11px] text-muted-foreground">Are you ready to synchronize this schema?</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="flex-1 h-7 text-[10px]" onClick={() => setOpen(false)}>Cancel</Button>
            <Button size="sm" className="flex-1 h-7 text-[10px]" onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ShadcnToggleGroupDemo() {
  const [active, setActive] = useState<string[]>(["bold"]);
  const toggle = (key: string) => {
    setActive(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 flex flex-col items-center">
      <div className="flex border rounded-lg p-0.5 bg-muted">
        <button onClick={() => toggle("bold")} className={`px-2.5 py-1 rounded font-bold ${active.includes("bold") ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}>B</button>
        <button onClick={() => toggle("italic")} className={`px-2.5 py-1 rounded italic ${active.includes("italic") ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}>I</button>
        <button onClick={() => toggle("underline")} className={`px-2.5 py-1 rounded underline ${active.includes("underline") ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}>U</button>
      </div>
      <p className={`text-center text-sm ${active.includes("bold") ? "font-bold " : ""}${active.includes("italic") ? "italic " : ""}${active.includes("underline") ? "underline " : ""}`}>
        Styled Dynamic Typography
      </p>
    </div>
  );
}

function ShadcnAlertDialogDemo() {
  const [confirming, setConfirming] = useState(false);
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      {!confirming ? (
        <Button size="sm" variant="destructive" onClick={() => setConfirming(true)} className="gap-1">
          <Trash2 className="h-3 w-3" /> {deleted ? "Project Purged (Reset)" : "Delete Production Database"}
        </Button>
      ) : (
        <div className="p-2.5 bg-destructive/10 border border-destructive/30 rounded-lg space-y-2">
          <p className="font-semibold text-destructive">⚠️ This action is irreversible!</p>
          <div className="flex justify-center gap-2">
            <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setConfirming(false)}>Cancel</Button>
            <Button size="sm" variant="destructive" className="h-6 text-[10px]" onClick={() => { setDeleted(true); setConfirming(false); }}>Yes, Delete</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function ShadcnAspectRatioDemo() {
  const [ratio, setRatio] = useState<"16-9" | "4-3" | "1-1">("16-9");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground font-medium">Aspect Ratio:</span>
        <div className="flex gap-1">
          {(["16-9", "4-3", "1-1"] as const).map(r => (
            <Button key={r} size="sm" variant={ratio === r ? "default" : "outline"} className="h-5 px-1.5 text-[9px]" onClick={() => setRatio(r)}>
              {r.replace("-", ":")}
            </Button>
          ))}
        </div>
      </div>
      <div className={`w-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-2 border-dashed border-primary/30 rounded-lg flex items-center justify-center transition-all ${ratio === "16-9" ? "aspect-video" : ratio === "4-3" ? "aspect-[4/3]" : "aspect-square"}`}>
        <span className="font-mono text-[10px] text-primary font-bold">{ratio.replace("-", " : ")} Box Ratio</span>
      </div>
    </div>
  );
}

// --- 2. Magic UI Demos ---

function MagicUIBentoGridDemo() {
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-3 gap-1.5">
      <div className="col-span-2 p-2.5 bg-gradient-to-br from-primary/10 via-card to-background border rounded-lg hover:border-primary/50 transition-colors">
        <Sparkles className="h-4 w-4 text-primary mb-1" />
        <h5 className="font-bold text-foreground">AI Neural Synthesis</h5>
        <p className="text-[10px] text-muted-foreground">Streaming token outputs at 120 tok/sec.</p>
      </div>
      <div className="col-span-1 p-2.5 bg-card border rounded-lg flex flex-col justify-between hover:border-primary/50 transition-colors">
        <Zap className="h-4 w-4 text-amber-500" />
        <span className="font-bold text-foreground text-[11px]">Instant Cache</span>
      </div>
    </div>
  );
}

function MagicUIAnimatedBeamDemo() {
  const [pulse, setPulse] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex items-center justify-between px-4 py-3 bg-muted/30 rounded-lg relative overflow-hidden">
        <Badge variant="outline" className="z-10 bg-card">Frontend Client</Badge>
        <div className="flex-1 h-0.5 mx-2 bg-muted relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 to-primary animate-pulse" />
        </div>
        <Badge variant="default" className="z-10">Cloud Edge</Badge>
      </div>
      <div className="text-center">
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setPulse(!pulse)}>
          Trigger Energy Beam Pulse
        </Button>
      </div>
    </div>
  );
}

function MagicUIParticlesDemo() {
  const [count, setCount] = useState(12);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="relative h-20 bg-background/80 rounded-lg border overflow-hidden flex items-center justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 animate-ping"
            style={{
              top: `${(i * 23) % 80}%`,
              left: `${(i * 37) % 90}%`,
              animationDuration: `${1 + (i % 3)}s`,
            }}
          />
        ))}
        <span className="z-10 font-mono text-[10px] text-muted-foreground bg-card/80 px-2 py-0.5 rounded border">
          {count} Particle Nodes
        </span>
      </div>
      <div className="flex justify-between items-center text-[10px]">
        <span>Density:</span>
        <input type="range" min="6" max="24" value={count} onChange={e => setCount(Number(e.target.value))} className="w-28" />
      </div>
    </div>
  );
}

function MagicUIBorderBeamDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div className="relative p-3.5 rounded-lg bg-card border overflow-hidden">
        <div className="absolute inset-0 rounded-lg p-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent animate-spin duration-3000 pointer-events-none" />
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h5 className="font-bold text-foreground">Border Beam Ray</h5>
            <p className="text-[10px] text-muted-foreground">Dynamic rotating laser highlight</p>
          </div>
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Active</Badge>
        </div>
      </div>
    </div>
  );
}

function MagicUIShineBorderDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div className="p-4 rounded-xl border-2 border-primary/40 shadow-lg shadow-primary/10 bg-gradient-to-b from-card to-muted/20 text-center space-y-1">
        <Badge variant="outline" className="font-mono text-[9px] border-primary/50 text-primary">SHINE METALLIC</Badge>
        <h4 className="font-bold text-foreground">Pro Tier Subscription</h4>
        <p className="text-[10px] text-muted-foreground">Unlock 100+ components with infinite updates</p>
      </div>
    </div>
  );
}

function MagicUINumberTickerDemo() {
  const [val, setVal] = useState(128450);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground uppercase font-mono">Monthly Active Queries</span>
      <div className="text-2xl font-extrabold text-primary font-mono tracking-tight">
        {val.toLocaleString()}
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={() => setVal(v => v + Math.floor(Math.random() * 5000 + 1000))}>
        <Plus className="h-3 w-3 mr-1" /> Increment Ticker
      </Button>
    </div>
  );
}

function MagicUIWordRotateDemo() {
  const words = ["Blazing Fast", "Highly Accessible", "100% Responsive", "Modern UI"];
  const [idx, setIdx] = useState(0);
  return (
    <div className="p-4 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-muted-foreground">Build products that are</p>
      <div className="h-7 flex items-center justify-center">
        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 animate-pulse">
          {words[idx]}
        </span>
      </div>
      <Button size="sm" variant="outline" className="h-5 text-[9px] px-2" onClick={() => setIdx((idx + 1) % words.length)}>
        Rotate Word
      </Button>
    </div>
  );
}

function MagicUIConfettiDemo() {
  const [active, setActive] = useState(false);
  const trigger = () => {
    setActive(true);
    setTimeout(() => setActive(false), 2000);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2 relative overflow-hidden">
      {active && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-around">
          {["🎉", "✨", "🚀", "🎊", "⭐"].map((c, i) => (
            <span key={i} className="text-lg animate-bounce" style={{ animationDelay: `${i * 100}ms` }}>{c}</span>
          ))}
        </div>
      )}
      <p className="text-muted-foreground">Celebrate high-converting milestones</p>
      <Button size="sm" onClick={trigger} className="gap-1.5 bg-gradient-to-r from-amber-500 to-primary text-primary-foreground">
        <Award className="h-3.5 w-3.5" /> Launch Confetti
      </Button>
    </div>
  );
}

// --- 3. Aceternity UI Demos ---

function AceternityLampEffectDemo() {
  return (
    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-center space-y-2 overflow-hidden relative">
      <div className="w-32 h-10 bg-cyan-500/20 blur-xl rounded-full mx-auto" />
      <div className="relative z-10">
        <h4 className="text-sm font-extrabold text-slate-100">Plans That Build the Future</h4>
        <p className="text-[10px] text-cyan-400 font-mono">Volumetric Top Cone Illumination</p>
      </div>
    </div>
  );
}

function AceternitySparklesBatchDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2 relative">
      <div className="flex items-center justify-center gap-1.5 text-primary font-bold">
        <Sparkles className="h-4 w-4 animate-spin text-amber-400" />
        <span>Cosmic Nebula Particles</span>
        <Sparkles className="h-4 w-4 animate-ping text-purple-400" />
      </div>
      <p className="text-[10px] text-muted-foreground">Floating interactive micro-stars</p>
    </div>
  );
}

function AceternityBackgroundBeamsDemo() {
  return (
    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs relative overflow-hidden min-h-[90px] flex items-center justify-center">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative z-10 p-2 bg-slate-950/80 border border-slate-700/60 rounded-lg text-center backdrop-blur">
        <span className="font-semibold text-slate-200">Intersecting Light Ray Matrix</span>
      </div>
    </div>
  );
}

function AceternityWobblyCardDemo() {
  const [tilt, setTilt] = useState(0);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div
        onMouseEnter={() => setTilt(2)}
        onMouseLeave={() => setTilt(0)}
        style={{ transform: `rotate(${tilt}deg)` }}
        className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white transition-transform duration-200 cursor-pointer shadow-md"
      >
        <h5 className="font-bold">Wobbly Spring Physics</h5>
        <p className="text-[10px] opacity-80">Hover to experience elastic deformation</p>
      </div>
    </div>
  );
}

function AceternityHeroHighlightDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-1">
      <p className="text-muted-foreground text-[11px]">Next Gen UI Components</p>
      <h4 className="text-sm font-bold text-foreground">
        Crafted with <span className="bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/30">Extreme Precision</span>
      </h4>
    </div>
  );
}

function AceternityTypewriterDemo() {
  const [txt, setTxt] = useState("Modern Fullstack UI");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs font-mono text-center space-y-2">
      <div className="text-primary font-bold text-sm">
        &gt; {txt}<span className="animate-pulse">_</span>
      </div>
      <div className="flex justify-center gap-1">
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setTxt("Realtime Web APIs")}>Option 1</Button>
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setTxt("Enterprise React Blocks")}>Option 2</Button>
      </div>
    </div>
  );
}

function AceternityCardHoverDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-2 gap-1.5">
      {[1, 2].map(n => (
        <div
          key={n}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(null)}
          className={`p-2.5 rounded-lg border transition-all ${hovered === n ? "border-primary bg-primary/5 shadow-md" : "border-border bg-card"}`}
        >
          <span className="font-bold text-foreground text-[11px]">Card 0{n}</span>
          <p className="text-[9px] text-muted-foreground">Spotlight follow hover</p>
        </div>
      ))}
    </div>
  );
}

function AceternityTracingBeamDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex gap-2.5 items-center">
      <div className="flex flex-col items-center">
        <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
      <div>
        <h5 className="font-bold text-foreground">Tracing Beam Guide</h5>
        <p className="text-[10px] text-muted-foreground">Continuous vertical reading progress track</p>
      </div>
    </div>
  );
}

// --- 4. Shadcnblocks Demos ---

function ShadcnblocksPricingDemo() {
  const [annual, setAnnual] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Pro Plan</span>
        <button onClick={() => setAnnual(!annual)} className="text-[10px] text-primary hover:underline">
          {annual ? "Annual (-20%)" : "Monthly Billing"}
        </button>
      </div>
      <div className="text-xl font-extrabold text-foreground">
        {annual ? "$15" : "$19"} <span className="text-[10px] font-normal text-muted-foreground">/ month</span>
      </div>
      <ul className="text-[10px] space-y-1 text-muted-foreground">
        <li>✓ Unlimited Commercial Projects</li>
        <li>✓ Lifetime Access & Updates</li>
      </ul>
    </div>
  );
}

function ShadcnblocksTestimonialsDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex text-amber-400 gap-0.5">
        {"★★★★★"}
      </div>
      <p className="text-foreground italic">"Integrating these blocks reduced our sprint velocity from 2 weeks to 2 days."</p>
      <div className="flex items-center gap-2 pt-1 border-t">
        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[9px] text-primary">SC</div>
        <div>
          <span className="font-semibold text-foreground text-[10px]">Sarah Connor</span>
          <span className="text-[9px] text-muted-foreground block">VP of Product, Cyberdyne</span>
        </div>
      </div>
    </div>
  );
}

function ShadcnblocksFeatureDemo() {
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-3 gap-1 text-center">
      <div className="p-1.5 rounded bg-muted/40">
        <Zap className="h-3.5 w-3.5 mx-auto text-amber-500 mb-0.5" />
        <span className="font-bold text-[10px]">Instant</span>
      </div>
      <div className="p-1.5 rounded bg-muted/40">
        <Lock className="h-3.5 w-3.5 mx-auto text-emerald-500 mb-0.5" />
        <span className="font-bold text-[10px]">Secure</span>
      </div>
      <div className="p-1.5 rounded bg-muted/40">
        <Globe className="h-3.5 w-3.5 mx-auto text-blue-500 mb-0.5" />
        <span className="font-bold text-[10px]">Global</span>
      </div>
    </div>
  );
}

function ShadcnblocksStatsDemo() {
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs grid grid-cols-2 gap-2 text-center">
      <div>
        <div className="text-base font-extrabold text-primary">99.99%</div>
        <div className="text-[9px] text-muted-foreground">SLA Uptime</div>
      </div>
      <div>
        <div className="text-base font-extrabold text-foreground">150+</div>
        <div className="text-[9px] text-muted-foreground">Countries Served</div>
      </div>
    </div>
  );
}

function ShadcnblocksFaqDemo() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Is commercial use permitted?", a: "Yes, 100% royalty-free for personal and commercial products." },
    { q: "How are updates shipped?", a: "Directly via git synchronization with zero breaking changes." },
  ];
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs space-y-1.5">
      {faqs.map((f, i) => (
        <div key={i} className="border rounded p-1.5 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
          <div className="flex justify-between items-center font-medium text-foreground">
            <span>{f.q}</span>
            <span>{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="text-[10px] text-muted-foreground mt-1">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

function ShadcnblocksCtaDemo() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="p-3 bg-gradient-to-r from-primary/10 via-card to-background rounded-xl border text-xs space-y-2 text-center">
      <h5 className="font-bold text-foreground">Ready to Supercharge Your App?</h5>
      {!sent ? (
        <div className="flex gap-1.5">
          <Input placeholder="name@company.com" value={email} onChange={e => setEmail(e.target.value)} className="h-7 text-[10px]" />
          <Button size="sm" className="h-7 text-[10px]" onClick={() => setSent(true)}>Join</Button>
        </div>
      ) : (
        <p className="text-emerald-500 font-medium">✓ Invitation dispatched!</p>
      )}
    </div>
  );
}

// --- 5. shadcn/ui Charts Demos ---

function ShadcnChartsBarBatchDemo() {
  const data = [
    { name: "Mon", desktop: 400, mobile: 240 },
    { name: "Tue", desktop: 300, mobile: 139 },
    { name: "Wed", desktop: 520, mobile: 380 },
    { name: "Thu", desktop: 278, mobile: 390 },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs">
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" fontSize={9} />
            <Tooltip />
            <Bar dataKey="desktop" fill="#6366f1" radius={[4, 4, 0, 0]} />
            <Bar dataKey="mobile" fill="#a855f7" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnChartsLineDemo() {
  const data = [
    { day: "W1", rev: 120 },
    { day: "W2", rev: 210 },
    { day: "W3", rev: 180 },
    { day: "W4", rev: 340 },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs">
      <div className="h-28 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="day" fontSize={9} />
            <Tooltip />
            <Line type="monotone" dataKey="rev" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ShadcnChartsPieDemo() {
  const data = [
    { name: "Direct", value: 45, color: "#6366f1" },
    { name: "Social", value: 30, color: "#ec4899" },
    { name: "Organic", value: 25, color: "#10b981" },
  ];
  return (
    <div className="p-2 bg-card rounded-xl border text-xs flex items-center justify-around">
      <div className="h-24 w-24">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={22} outerRadius={36} dataKey="value">
              {data.map((entry, idx) => (
                <Cell key={idx} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-1 text-[10px]">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.color }} />
            <span>{d.name}: {d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnChartsRadarDemo() {
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs text-center space-y-1.5">
      <span className="font-semibold text-foreground">Multi-axis Capability Matrix</span>
      <div className="grid grid-cols-2 gap-1 text-[10px] text-muted-foreground">
        <div className="p-1 rounded bg-muted/40">Latency: 98/100</div>
        <div className="p-1 rounded bg-muted/40">Throughput: 94/100</div>
        <div className="p-1 rounded bg-muted/40">Security: 99/100</div>
        <div className="p-1 rounded bg-muted/40">Reliability: 96/100</div>
      </div>
    </div>
  );
}

function ShadcnChartsRadialDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <div>
        <h5 className="font-bold text-foreground">Sprint Goal</h5>
        <p className="text-[10px] text-muted-foreground">84% of tasks completed</p>
      </div>
      <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin flex items-center justify-center font-bold font-mono text-[10px] text-primary">
        84%
      </div>
    </div>
  );
}

// --- 6. Origin UI Demos ---

function OriginUIInputStepperDemo() {
  const [val, setVal] = useState(4);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Concurrent Workers</label>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setVal(Math.max(1, val - 1))}>−</Button>
        <span className="font-mono text-center flex-1 text-sm font-bold">{val}</span>
        <Button size="sm" variant="outline" className="h-7 w-7 p-0" onClick={() => setVal(val + 1)}>+</Button>
      </div>
    </div>
  );
}

function OriginUIPasswordDemo() {
  const [pwd, setPwd] = useState("Alpha9#Pass");
  const strength = pwd.length > 8 ? 4 : pwd.length > 5 ? 2 : 1;
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <label className="text-muted-foreground font-medium text-[10px]">Password Strength Meter</label>
      <Input value={pwd} onChange={e => setPwd(e.target.value)} type="password" className="h-7 text-xs" />
      <div className="flex gap-1 h-1.5">
        {[1, 2, 3, 4].map(s => (
          <div key={s} className={`flex-1 rounded-full ${s <= strength ? (strength === 4 ? "bg-emerald-500" : "bg-amber-500") : "bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}

function OriginUITagsDemo() {
  const [tags, setTags] = useState(["Next.js", "Tailwind", "Radix"]);
  const [input, setInput] = useState("");
  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex flex-wrap gap-1">
        {tags.map(t => (
          <Badge key={t} variant="secondary" className="gap-1 text-[10px]">
            {t}
            <span className="cursor-pointer hover:text-destructive" onClick={() => setTags(tags.filter(x => x !== t))}>×</span>
          </Badge>
        ))}
      </div>
      <div className="flex gap-1">
        <Input placeholder="Add tag..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && addTag()} className="h-6 text-[10px]" />
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={addTag}>Add</Button>
      </div>
    </div>
  );
}

function OriginUISwitchDemo() {
  const [enabled, setEnabled] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <span className="font-medium text-foreground">Night Shift Filter</span>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`w-10 h-5 rounded-full p-0.5 transition-colors ${enabled ? "bg-primary" : "bg-muted"}`}
      >
        <div className={`h-4 w-4 rounded-full bg-background transition-transform ${enabled ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  );
}

function OriginUIRangeDemo() {
  const [price, setPrice] = useState(48);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-muted-foreground">Price Ceiling:</span>
        <span className="font-mono font-bold text-primary">${price}/mo</span>
      </div>
      <input type="range" min="10" max="100" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full" />
    </div>
  );
}

// --- 7. Motion Primitives Demos ---

function MotionMorphingDialogDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      {!expanded ? (
        <div onClick={() => setExpanded(true)} className="p-3 bg-primary/10 border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/20 transition-colors">
          <h5 className="font-bold text-foreground">Click to Expand Modal</h5>
          <p className="text-[10px] text-muted-foreground">Shared layout layoutId morphing</p>
        </div>
      ) : (
        <div className="p-3 bg-card border-2 border-primary rounded-lg space-y-2 animate-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-foreground">Expanded Details</span>
            <Button size="sm" variant="ghost" className="h-5 w-5 p-0" onClick={() => setExpanded(false)}>×</Button>
          </div>
          <p className="text-[10px] text-muted-foreground">Expanded full dialogue with uninterrupted smooth transitions.</p>
        </div>
      )}
    </div>
  );
}

function MotionInfiniteSliderDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs overflow-hidden">
      <div className="flex gap-2 animate-pulse whitespace-nowrap">
        {["Next.js", "Turbopack", "TypeScript", "TailwindCSS", "FramerMotion", "BaseUI"].map((tech, idx) => (
          <Badge key={idx} variant="outline" className="font-mono text-[9px]">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}

function MotionAccordionDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-2.5 bg-card rounded-xl border text-xs">
      <div onClick={() => setOpen(!open)} className="flex justify-between items-center cursor-pointer font-semibold text-foreground">
        <span>Spring Physics Panel</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <p className="text-[10px] text-muted-foreground mt-2 pt-2 border-t">
          Natural bounce with spring stiffness: 300, damping: 20.
        </p>
      )}
    </div>
  );
}

// --- 8. Kibo UI Demos ---

function KiboKanbanDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Auth flow", col: "Doing" },
    { id: 2, title: "Stripe hook", col: "Done" },
  ]);
  return (
    <div className="p-2 bg-card rounded-xl border text-xs grid grid-cols-2 gap-1.5">
      <div className="p-1.5 bg-muted/30 rounded border">
        <span className="font-bold text-[9px] uppercase text-muted-foreground">Doing</span>
        {tasks.filter(t => t.col === "Doing").map(t => (
          <div key={t.id} className="p-1 bg-card rounded border text-[10px] font-medium mt-1">{t.title}</div>
        ))}
      </div>
      <div className="p-1.5 bg-muted/30 rounded border">
        <span className="font-bold text-[9px] uppercase text-emerald-500">Done</span>
        {tasks.filter(t => t.col === "Done").map(t => (
          <div key={t.id} className="p-1 bg-card rounded border text-[10px] line-through text-muted-foreground mt-1">{t.title}</div>
        ))}
      </div>
    </div>
  );
}

function KiboTimelineDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1" />
        <div>
          <span className="font-medium text-foreground">Deployed to Production</span>
          <span className="text-[9px] text-muted-foreground block">Commit 7f8a9e (2 mins ago)</span>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-500 mt-1" />
        <div>
          <span className="font-medium text-foreground">Security scan passed</span>
          <span className="text-[9px] text-muted-foreground block">0 issues found (15 mins ago)</span>
        </div>
      </div>
    </div>
  );
}

function KiboAudioDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center gap-3">
      <Button size="sm" variant="outline" className="h-8 w-8 rounded-full p-0" onClick={() => setPlaying(!playing)}>
        {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
      </Button>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-0.5 h-4">
          {[4, 8, 12, 16, 10, 6, 14, 18, 10, 5, 8].map((h, i) => (
            <div key={i} className={`w-1 rounded-full ${playing ? "bg-primary animate-pulse" : "bg-muted"}`} style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="flex justify-between text-[9px] text-muted-foreground font-mono">
          <span>01:24</span>
          <span>03:45</span>
        </div>
      </div>
    </div>
  );
}

// --- 9. Kokonut UI Demos ---

function KokonutAIPromptDemo() {
  const [model, setModel] = useState("GPT-4o");
  const [prompt, setPrompt] = useState("");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-foreground">AI Assistant Bar</span>
        <Badge variant="outline" className="text-[9px] cursor-pointer" onClick={() => setModel(model === "GPT-4o" ? "Claude 3.5" : "GPT-4o")}>
          {model}
        </Badge>
      </div>
      <div className="flex gap-1.5">
        <Input placeholder="Ask anything about UI systems..." value={prompt} onChange={e => setPrompt(e.target.value)} className="h-7 text-[10px]" />
        <Button size="sm" className="h-7 text-[10px]">Send</Button>
      </div>
    </div>
  );
}

function KokonutProfileDemo() {
  const [online, setOnline] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">BA</div>
          <span className={`absolute bottom-0 right-0 h-2 w-2 rounded-full border border-card ${online ? "bg-emerald-500" : "bg-amber-500"}`} />
        </div>
        <div>
          <span className="font-bold text-foreground">Baoan AI</span>
          <span className="text-[9px] text-muted-foreground block">{online ? "Active Now" : "Away"}</span>
        </div>
      </div>
      <Button size="sm" variant="outline" className="h-6 text-[9px]" onClick={() => setOnline(!online)}>
        Toggle Status
      </Button>
    </div>
  );
}

// --- 10. Shadcnstore Demos ---

function ShadcnstoreCheckoutDemo() {
  const [qty, setQty] = useState(2);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span>UI Component Kit</span>
        <div className="flex items-center gap-1.5">
          <Button size="sm" variant="outline" className="h-5 w-5 p-0" onClick={() => setQty(Math.max(1, qty - 1))}>−</Button>
          <span className="font-mono">{qty}</span>
          <Button size="sm" variant="outline" className="h-5 w-5 p-0" onClick={() => setQty(qty + 1)}>+</Button>
        </div>
      </div>
      <div className="flex justify-between font-bold border-t pt-1">
        <span>Total:</span>
        <span className="text-primary">${qty * 49}.00</span>
      </div>
    </div>
  );
}

function ShadcnstoreOnboardingDemo() {
  const [done, setDone] = useState<number[]>([1, 2]);
  const steps = [
    { id: 1, title: "Create Organization" },
    { id: 2, title: "Verify Custom Domain" },
    { id: 3, title: "Configure Webhooks" },
  ];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      {steps.map(s => {
        const isDone = done.includes(s.id);
        return (
          <div
            key={s.id}
            onClick={() => setDone(prev => isDone ? prev.filter(x => x !== s.id) : [...prev, s.id])}
            className="flex items-center gap-2 cursor-pointer hover:text-primary"
          >
            <span className={`h-3.5 w-3.5 rounded flex items-center justify-center text-[9px] ${isDone ? "bg-primary text-primary-foreground font-bold" : "border"}`}>
              {isDone ? "✓" : ""}
            </span>
            <span className={isDone ? "line-through text-muted-foreground" : "text-foreground"}>{s.title}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ========================================================================= */
/* BEUI.DEV EXPANDED MOTION & BLOCK LIVE DEMOS                               */
/* ========================================================================= */

function BeUIArcPickerDemo() {
  const [angle, setAngle] = useState(45);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <div className="flex justify-between items-center text-[10px] text-muted-foreground">
        <span>Arc Angle:</span>
        <span className="font-mono font-bold text-primary">{angle}°</span>
      </div>
      <div className="relative h-20 w-36 mx-auto border-t-4 border-l-4 border-r-4 border-primary/40 rounded-t-full flex items-end justify-center pb-2 bg-gradient-to-t from-transparent to-primary/10">
        <div
          className="h-7 w-1 bg-primary origin-bottom rounded-full transition-transform duration-100"
          style={{ transform: `rotate(${angle - 90}deg)` }}
        />
      </div>
      <div className="flex justify-center gap-1.5">
        {[0, 45, 90, 135, 180].map(deg => (
          <Button key={deg} size="sm" variant={angle === deg ? "default" : "outline"} className="h-5 px-1.5 text-[9px]" onClick={() => setAngle(deg)}>
            {deg}°
          </Button>
        ))}
      </div>
    </div>
  );
}

function BeUISortableStackDemo() {
  const [cards, setCards] = useState(["Deploy v2.4", "Stripe Webhook", "Optimize Assets"]);
  const moveUp = (index: number) => {
    if (index === 0) return;
    const next = [...cards];
    const temp = next[index];
    next[index] = next[index - 1];
    next[index - 1] = temp;
    setCards(next);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="text-[10px] text-muted-foreground flex justify-between">
        <span>Sortable Stack</span>
        <span>Reorder</span>
      </div>
      {cards.map((c, i) => (
        <div key={c} className="p-2 rounded-lg border bg-muted/30 flex items-center justify-between hover:bg-muted transition-colors">
          <span className="font-medium text-foreground">{c}</span>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost" className="h-5 w-5 p-0 text-[10px]" disabled={i === 0} onClick={() => moveUp(i)}>▲</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BeUIColorSelectorDemo() {
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#06b6d4"];
  const [selected, setSelected] = useState(colors[0]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2.5">
      <span className="text-[10px] text-muted-foreground font-medium">Radial Palette Swatches</span>
      <div className="flex justify-center items-center gap-2">
        {colors.map(c => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            style={{ backgroundColor: c }}
            className={`h-6 w-6 rounded-full transition-transform ${selected === c ? "scale-125 ring-2 ring-foreground shadow-md" : "hover:scale-110 opacity-70"}`}
          />
        ))}
      </div>
      <div className="text-[10px] font-mono" style={{ color: selected }}>
        Active Theme Hex: {selected}
      </div>
    </div>
  );
}

function BeUITiltCardDemo() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div className="p-3 bg-card rounded-xl border text-xs">
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
          setTilt({ x, y });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 via-card to-purple-500/20 border shadow-lg transition-transform duration-100 cursor-pointer text-center space-y-1"
      >
        <Badge variant="outline" className="text-[9px]">3D Parallax Hover</Badge>
        <h4 className="font-bold text-foreground">Interactive Tilt Matrix</h4>
        <p className="text-[10px] text-muted-foreground">Move mouse around card boundary</p>
      </div>
    </div>
  );
}

function BeUIArrowButtonDemo() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="p-4 bg-card rounded-xl border text-xs flex justify-center items-center">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 transition-all hover:pr-5 shadow"
      >
        <span>Explore Components</span>
        <ArrowRight className={`h-3.5 w-3.5 transition-transform ${hovered ? "translate-x-1" : ""}`} />
      </button>
    </div>
  );
}

function BeUIAdaptiveStepperDemo() {
  const [val, setVal] = useState(10);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-muted-foreground">Adaptive Counter</span>
        <span className="font-mono font-bold text-primary text-sm">{val} units</span>
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => Math.max(0, v - 5))}>−5</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => Math.max(0, v - 1))}>−1</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => v + 1)}>+1</Button>
        <Button size="sm" variant="outline" className="flex-1 h-7" onClick={() => setVal(v => v + 5)}>+5</Button>
      </div>
    </div>
  );
}

function BeUIWheelPickerDemo() {
  const [hour, setHour] = useState(14);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <span className="text-[10px] text-muted-foreground">Wheel Perspective Hour Picker</span>
      <div className="h-16 overflow-hidden relative border rounded-lg bg-muted/20 flex flex-col items-center justify-center">
        <div className="text-[10px] text-muted-foreground opacity-40">{(hour - 1 + 24) % 24}:00</div>
        <div className="text-sm font-bold text-primary font-mono py-0.5">{hour}:00</div>
        <div className="text-[10px] text-muted-foreground opacity-40">{(hour + 1) % 24}:00</div>
      </div>
      <div className="flex justify-center gap-2">
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setHour((hour - 1 + 24) % 24)}>Scroll Up</Button>
        <Button size="sm" variant="outline" className="h-5 text-[9px]" onClick={() => setHour((hour + 1) % 24)}>Scroll Down</Button>
      </div>
    </div>
  );
}

function BeUIToastStackDemo() {
  const [toasts, setToasts] = useState(["Deploy succeeded", "Security check passed"]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5 relative min-h-[90px]">
      <div className="flex justify-between items-center pb-1">
        <span className="text-[10px] font-medium text-foreground">Toast Stack Depth</span>
        <Button size="sm" variant="ghost" className="h-5 text-[9px] p-0" onClick={() => setToasts([...toasts, "New alert at " + new Date().toLocaleTimeString()])}>+ Push</Button>
      </div>
      {toasts.slice(-2).map((t, idx) => (
        <div key={idx} className="p-2 rounded-lg border bg-card shadow-sm flex items-center justify-between animate-in slide-in-from-top-1">
          <span className="text-[10px] font-medium text-foreground">{t}</span>
          <Check className="h-3 w-3 text-emerald-500" />
        </div>
      ))}
    </div>
  );
}

function BeUIActionSwapDemo() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const trigger = () => {
    setState("loading");
    setTimeout(() => setState("done"), 1200);
  };
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <p className="text-[10px] text-muted-foreground">Morphing Action State Machine</p>
      {state === "idle" && (
        <Button size="sm" onClick={trigger} className="w-32 h-7 text-[10px]">
          Download Bundle
        </Button>
      )}
      {state === "loading" && (
        <Button size="sm" disabled className="w-32 h-7 text-[10px] bg-primary/70">
          <Clock className="h-3 w-3 animate-spin mr-1" /> Generating...
        </Button>
      )}
      {state === "done" && (
        <Button size="sm" variant="outline" onClick={() => setState("idle")} className="w-32 h-7 text-[10px] border-emerald-500 text-emerald-500">
          <Check className="h-3 w-3 mr-1" /> Completed!
        </Button>
      )}
    </div>
  );
}

function BeUIDynamicIslandDemo() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex flex-col items-center space-y-2">
      <div
        onClick={() => setExpanded(!expanded)}
        className={`bg-slate-950 text-white rounded-full transition-all duration-300 cursor-pointer flex items-center shadow-lg ${expanded ? "px-4 py-2 w-52 justify-between" : "px-3 py-1 w-28 justify-center gap-1.5"}`}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[10px]">{expanded ? "AirPods Connected" : "98%"}</span>
        {expanded && <span className="text-[9px] text-slate-400">Battery</span>}
      </div>
      <span className="text-[9px] text-muted-foreground">Click island to expand state</span>
    </div>
  );
}

function BeUICommandPaletteDemo() {
  const [query, setQuery] = useState("");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-muted/40 border">
        <Search className="h-3 w-3 text-muted-foreground" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Quick command launcher..."
          className="bg-transparent text-[10px] text-foreground w-full focus:outline-none"
        />
      </div>
      <div className="space-y-1">
        <div className="p-1 rounded hover:bg-muted cursor-pointer flex justify-between items-center">
          <span>Toggle Fullscreen Canvas</span>
          <Badge variant="outline" className="text-[8px]">⌘F</Badge>
        </div>
        <div className="p-1 rounded hover:bg-muted cursor-pointer flex justify-between items-center">
          <span>Switch Deployment Environment</span>
          <Badge variant="outline" className="text-[8px]">⌘E</Badge>
        </div>
      </div>
    </div>
  );
}

function BeUIMorphingSearchDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex justify-center items-center min-h-[80px]">
      {!open ? (
        <button onClick={() => setOpen(true)} className="p-2 rounded-full border bg-muted/40 hover:bg-muted transition-colors flex items-center gap-1.5 text-muted-foreground">
          <Search className="h-3.5 w-3.5" />
          <span className="text-[10px]">Search Docs</span>
        </button>
      ) : (
        <div className="flex gap-1.5 w-full animate-in zoom-in-95 duration-150">
          <Input autoFocus placeholder="Type keyword..." className="h-7 text-[10px] flex-1" />
          <Button size="sm" variant="ghost" className="h-7 text-[10px]" onClick={() => setOpen(false)}>×</Button>
        </div>
      )}
    </div>
  );
}

function BeUINotificationStackDemo() {
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-1.5">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground">Aggregated Alerts</span>
        <Badge variant="secondary" className="text-[9px]">3 Unread</Badge>
      </div>
      <div className="p-1.5 rounded bg-muted/30 text-[10px] text-foreground">
        🚨 High CPU spike on us-east cluster (94%)
      </div>
      <div className="p-1.5 rounded bg-muted/30 text-[10px] text-foreground">
        ✨ New pull request ready for review (#42)
      </div>
    </div>
  );
}

function BeUISchedulerDemo() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const [selectedDay, setSelectedDay] = useState("Wed");
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center text-[10px]">
        <span className="font-semibold text-foreground">Availability Slot</span>
        <span className="text-primary font-medium">{selectedDay} @ 15:00 UTC</span>
      </div>
      <div className="flex gap-1">
        {days.map(d => (
          <Button
            key={d}
            size="sm"
            variant={selectedDay === d ? "default" : "outline"}
            className="flex-1 h-6 text-[9px] p-0"
            onClick={() => setSelectedDay(d)}
          >
            {d}
          </Button>
        ))}
      </div>
    </div>
  );
}

function BeUIProjectFolderDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-lg border bg-amber-500/10 border-amber-500/30 flex items-center justify-between cursor-pointer hover:bg-amber-500/20 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Folder className="h-4 w-4 text-amber-500" />
          <span className="font-bold text-foreground">Brand Assets 2026</span>
        </div>
        <span className="text-[10px] text-muted-foreground">{open ? "Collapse" : "Open Binder"}</span>
      </div>
      {open && (
        <div className="pl-4 space-y-1 text-[10px] text-muted-foreground animate-in slide-in-from-top-1">
          <div className="flex items-center gap-1.5"><FileText className="h-3 w-3" /> logo-vector.svg</div>
          <div className="flex items-center gap-1.5"><FileText className="h-3 w-3" /> guidelines.pdf</div>
        </div>
      )}
    </div>
  );
}

function BeUIOtpDemo() {
  const [code, setCode] = useState(["4", "8", "", ""]);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground">Single-Digit Segmented Code</span>
      <div className="flex justify-center gap-2">
        {code.map((digit, i) => (
          <input
            key={i}
            maxLength={1}
            value={digit}
            onChange={e => {
              const next = [...code];
              next[i] = e.target.value;
              setCode(next);
            }}
            className="h-8 w-8 text-center font-mono font-bold text-sm border rounded bg-card focus:border-primary focus:outline-none"
          />
        ))}
      </div>
    </div>
  );
}

function BeUIFeedbackDemo() {
  const [rating, setRating] = useState<number | null>(4);
  const emojis = ["😡", "😕", "😐", "😊", "🤩"];
  return (
    <div className="p-3 bg-card rounded-xl border text-xs text-center space-y-2">
      <span className="text-[10px] text-muted-foreground">How was your interaction experience?</span>
      <div className="flex justify-center gap-2 text-base">
        {emojis.map((e, idx) => (
          <button
            key={idx}
            onClick={() => setRating(idx)}
            className={`transition-transform ${rating === idx ? "scale-125" : "opacity-50 hover:opacity-100"}`}
          >
            {e}
          </button>
        ))}
      </div>
      {rating !== null && <p className="text-[9px] text-emerald-500 font-medium">Feedback registered: {emojis[rating]}</p>}
    </div>
  );
}

function BeUIVoiceOrbDemo() {
  const [speaking, setSpeaking] = useState(true);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs flex flex-col items-center space-y-2">
      <div
        onClick={() => setSpeaking(!speaking)}
        className={`h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-fuchsia-500 flex items-center justify-center cursor-pointer transition-all shadow-lg shadow-indigo-500/20 ${speaking ? "animate-pulse scale-105" : "opacity-60 scale-95"}`}
      >
        <Sparkles className="h-5 w-5 text-white" />
      </div>
      <span className="text-[10px] text-muted-foreground">{speaking ? "AI Assistant Listening..." : "Paused (Tap to Talk)"}</span>
    </div>
  );
}

function BeUIApprovalDemo() {
  const [approved, setApproved] = useState<boolean | null>(null);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Action Authorization</span>
        <Badge variant="outline" className="text-[9px] font-mono">Bash Command</Badge>
      </div>
      <div className="p-1.5 bg-muted rounded font-mono text-[9px] text-muted-foreground overflow-x-auto">
        $ git push origin --force production
      </div>
      {approved === null ? (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="flex-1 h-6 text-[10px]" onClick={() => setApproved(false)}>Reject</Button>
          <Button size="sm" className="flex-1 h-6 text-[10px]" onClick={() => setApproved(true)}>Approve</Button>
        </div>
      ) : (
        <p className={`text-center font-medium ${approved ? "text-emerald-500" : "text-destructive"}`}>
          {approved ? "✓ Command Dispatched" : "✗ Execution Aborted"}
        </p>
      )}
    </div>
  );
}


function BeUI_beui_agents_agent_activity() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Agent Activity</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_ai_sidebar() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Ai Sidebar</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_chat_app() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Chat App</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_citations() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Citations</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_code_block() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Code Block</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_file_diff() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">File Diff</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_image_generation() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Image Generation</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_loading_states() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Loading States</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_message() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Message</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_message_bubble() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Message Bubble</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_message_scroller() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Message Scroller</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_prompt_input() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Prompt Input</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_streaming_response() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Streaming Response</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_todo_list() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Todo List</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_tool_approval() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Tool Approval</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_agents_tool_result() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Tool Result</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_bloom_menu() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Bloom Menu</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_card_folder() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Card Folder</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_expandable_action_bar() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Expandable Action Bar</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_expandable_tabs() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Expandable Tabs</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_file_upload() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">File Upload</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_infinite_masonry() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Infinite Masonry</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_knockout_bracket() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Knockout Bracket</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_morphing_tabs() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Morphing Tabs</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_not_found() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Not Found</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_overflow_actions() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Overflow Actions</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_prediction_market() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Prediction Market</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_signup_form() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Signup Form</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_swap() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Swap</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_swipeable_list() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Swipeable List</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_blocks_wallet_card() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Wallet Card</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_animated_badge() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Animated Badge</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_animated_sidebar() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Animated Sidebar</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_bottom_sheet() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Bottom Sheet</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_bounce_sidebar() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Bounce Sidebar</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_bouncy_accordion() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Bouncy Accordion</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_breadcrumb() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Breadcrumb</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_button() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Button</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_center_morph_modal() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Center Morph Modal</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_checkbox() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Checkbox</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_combobox() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Combobox</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_context_menu() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Context Menu</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_cylinder_carousel() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Cylinder Carousel</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_date_range_picker() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Date Range Picker</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_dock() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Dock</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_drawer() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Drawer</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_expandable_control() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Expandable Control</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_file_tree() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">File Tree</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_image_viewer() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Image Viewer</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_input() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Input</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_loader() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Loader</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_marquee() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Marquee</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_morphing_modal() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Morphing Modal</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_multi_select() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Multi Select</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_number() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Number</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_popover() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Popover</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_preview_rail() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Preview Rail</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_pull_to_refresh() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Pull To Refresh</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_radio() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Radio</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_range_slider() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Range Slider</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_scroll_animation() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Scroll Animation</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_select() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Select</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_shader_background() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Shader Background</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_shared_layout_bg() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Shared Layout Bg</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_switch() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Switch</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_table() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Table</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_tabs() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Tabs</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_text_animation() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Text Animation</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_theme_toggle() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Theme Toggle</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}


function BeUI_beui_motion_tooltip() {
  const [active, setActive] = useState(false);
  const [val, setVal] = useState(3);
  return (
    <div className="p-3 bg-card rounded-xl border text-xs space-y-2 text-center">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-semibold text-foreground truncate">Tooltip</span>
        <Badge variant={active ? "default" : "outline"} className="text-[9px] cursor-pointer" onClick={() => setActive(!active)}>
          {active ? "Active" : "Ready"}
        </Badge>
      </div>
      <div className="p-2.5 rounded-lg bg-muted/30 border flex flex-col items-center justify-center min-h-[60px] space-y-1">
        <div className={`h-2.5 w-2.5 rounded-full transition-all ${active ? "bg-primary scale-125 animate-ping" : "bg-muted-foreground/40"}`} />
        <span className="font-mono text-[10px] text-muted-foreground">Interactive State: {active ? "Engaged" : "Idle"}</span>
        <div className="flex items-center gap-1.5 pt-1">
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => Math.max(0, v - 1))}>−</Button>
          <span className="font-mono text-[10px] font-bold text-primary">{val}</span>
          <Button size="sm" variant="outline" className="h-5 px-1.5 text-[9px]" onClick={() => setVal(v => v + 1)}>+</Button>
        </div>
      </div>
    </div>
  );
}
