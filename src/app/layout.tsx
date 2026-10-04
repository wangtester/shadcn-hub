import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { SiteFooter } from "@/components/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wangtester.github.io/shadcn-hub"),
  title: "shadcn-hub · 全景式 shadcn/ui 组件生态矩阵与多维对比中心",
  description: "一站式聚合收录 shadcn/ui 官方全量 64 款原子组件 + 11 大顶尖社区扩展库与商业级 Blocks，以及 24+ 款前端设计师常备百宝箱，100% 实机渲染与真实可交互对比。",
  keywords: [
    "shadcn",
    "shadcn/ui",
    "Next.js 16",
    "Tailwind CSS v4",
    "Base UI",
    "React 19",
    "UI Components",
    "Design System",
    "Dashboard",
    "Magic UI",
    "Aceternity UI",
    "BoardUI",
    "ShadcnStore",
    "Refero Design",
    "Designer Tools",
    "Bento Grid",
  ],
  authors: [{ name: "wangtester" }],
  openGraph: {
    title: "shadcn-hub · 全景式 shadcn/ui 组件生态矩阵与多维对比中心",
    description: "聚合 64 款官方核心组件、11 大顶尖生态扩展库与设计师百宝箱，全实机交互体验与设计流派评测",
    url: "https://github.com/wangtester/shadcn-hub",
    siteName: "shadcn-hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1280,
        height: 720,
        alt: "shadcn-hub Open Graph Banner",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn-hub · 全景式 shadcn/ui 组件生态矩阵与多维对比中心",
    description: "聚合 64 款官方核心组件、11 大顶尖生态扩展库与设计师百宝箱，全实机交互体验与设计流派评测",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <TopNav />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <SiteFooter />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
