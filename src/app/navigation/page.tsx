"use client";

import { PageHeader, Section } from "@/components/section";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarSub, MenubarSubContent, MenubarSubTrigger } from "@/components/ui/menubar";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Compass, BookOpen, Layers, ExternalLink } from "lucide-react";

const featureLinks = [
  { title: "表单交互体系", href: "/forms", desc: "按钮、输入框、滑块与选项组" },
  { title: "布局组织结构", href: "/layout", desc: "卡片、折叠面板与可调整区域" },
  { title: "浮层交互组件", href: "/overlay", desc: "弹窗、抽屉与气泡说明" },
  { title: "数据可视化呈现", href: "/data", desc: "表格、统计图表与日历" },
];

export default function NavigationPage() {
  return (
    <div>
      <PageHeader title="导航组件" description="包含顶部多级导航、面包屑导航路径、类桌面端菜单栏与数据分页组件" />

      {/* Breadcrumb */}
      <Section title="Breadcrumb 面包屑路径" description="标明当前在多层级信息架构中的层级与回退跳转">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">标准三级路径：</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">工作台首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/navigation">导航架构</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>面包屑演示</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="pt-2">
            <p className="text-xs text-muted-foreground mb-2">带折叠省略下拉的面包屑：</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">首页</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<button type="button" className="flex items-center gap-1 cursor-pointer hover:text-foreground"><BreadcrumbEllipsis className="h-4 w-4" /></button>} />
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem>系统管理</DropdownMenuItem>
                      <DropdownMenuItem>权限配置</DropdownMenuItem>
                      <DropdownMenuItem>安全合规</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/navigation">导航组件</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>当前页</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </Section>

      {/* NavigationMenu */}
      <Section title="NavigationMenu 复合导航菜单" description="带富内容弹层展开与焦点连贯平移的导航组件">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>核心功能区</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[480px] lg:grid-cols-[.85fr_1.15fr]">
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-primary/10 to-primary/5 p-4 border">
                    <Compass className="h-6 w-6 text-primary mb-2" />
                    <p className="text-sm font-semibold">shadcn/ui 导航</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      集成的完整组件目录，让导航层次分明、优雅顺畅。
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {featureLinks.map((item) => (
                      <NavigationMenuLink
                        key={item.title}
                        href={item.href}
                        className="block rounded-md p-2 hover:bg-muted text-left transition-colors"
                      >
                        <p className="text-xs font-medium text-foreground">{item.title}</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>快速文档</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-3 w-[260px] space-y-1">
                  <NavigationMenuLink href="https://ui.shadcn.com" target="_blank" className="flex items-center justify-between p-2 rounded hover:bg-muted text-xs">
                    <span className="flex items-center gap-2"><BookOpen className="h-3.5 w-3.5" /> 官方文档</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </NavigationMenuLink>
                  <NavigationMenuLink href="https://github.com/shadcn-ui/ui" target="_blank" className="flex items-center justify-between p-2 rounded hover:bg-muted text-xs">
                    <span className="flex items-center gap-2"><Layers className="h-3.5 w-3.5" /> GitHub 仓库</span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                返回概览
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Section>

      {/* Menubar */}
      <Section title="Menubar 桌面式应用菜单栏" description="集成文件、编辑、视图等多级菜单与快捷键提示">
        <Menubar className="max-w-md">
          <MenubarMenu>
            <MenubarTrigger>文件 (F)</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>新建项目文件 <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarItem>打开最近工作区 <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>保存当前修改 <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
              <MenubarItem>导出组件为代码 <MenubarShortcut>⇧⌘E</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="text-destructive">退出应用 <MenubarShortcut>⌘Q</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>编辑 (E)</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>撤销修改 <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>恢复操作 <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>查找与替换</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>当前页面中查找</MenubarItem>
                  <MenubarItem>在整个项目中替换</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>格式化组件代码 <MenubarShortcut>⌥⇧F</MenubarShortcut></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>视图 (V)</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked>显示状态指示栏</MenubarCheckboxItem>
              <MenubarCheckboxItem>显示网格对齐辅助线</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarRadioGroup value="compact">
                <MenubarRadioItem value="compact">紧凑视图模式</MenubarRadioItem>
                <MenubarRadioItem value="spacious">宽敞视图模式</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Section>

      {/* Pagination */}
      <Section title="Pagination 数据分页控制器" description="支持前翻、后翻、直接选页与省略号指示器">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-3">多页浏览交互：</p>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">16</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </Section>
    </div>
  );
}
