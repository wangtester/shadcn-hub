import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/top-nav";
import { SiteFooter } from "@/components/site-footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toast";
import { I18nProvider } from "@/context/i18n-context";

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
  title: "shadcn-hub · shadcn Ecosystem Components & Blocks Gallery",
  description: "Curated collection of 64 official shadcn/ui components and 28 mainstream UI ecosystem libraries with 100% interactive live preview.",
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
    title: "shadcn-hub · shadcn Ecosystem Components & Blocks Gallery",
    description: "Curated collection of 64 official components and 28 mainstream UI libraries with 100% live interactive rendering.",
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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn-hub · shadcn Ecosystem Components & Blocks Matrix",
    description: "64 official core components, 28 top UI libraries, and designer toolbox with 100% in-place interactive sandbox",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider>
          <TooltipProvider>
            <TopNav />
            <main className="flex-1 flex flex-col w-full">
              {children}
            </main>
            <SiteFooter />
            <Toaster />
          </TooltipProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
