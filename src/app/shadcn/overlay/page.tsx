"use client";

import { useState } from "react";
import { PageHeader, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuTrigger, ContextMenuShortcut } from "@/components/ui/context-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, ChevronDown, Settings, User, LogOut, Copy, Trash2, HelpCircle } from "lucide-react";

export default function OverlayPage() {
  return (
    <div>
      <PageHeader title="浮层组件" description="模态对话框、侧边抽屉、底部弹窗、悬浮卡片、气泡提示与右键菜单等" />

      {/* Dialog */}
      <Section title="Dialog 模态对话框" description="需要打断当前流程进行确认或输入的核心浮层">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button>打开编辑资料对话框</Button>} />
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>编辑个人资料</DialogTitle>
                <DialogDescription>修改你的公开昵称与个性签名，完成后点击保存。</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right text-sm">昵称</Label>
                  <Input id="name" defaultValue="张全蛋" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right text-sm">职位</Label>
                  <Input id="title" defaultValue="高级架构师" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">确认保存</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger render={<Button variant="outline">查看版本公告</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>shadcn-demo 系统公告</DialogTitle>
                <DialogDescription>
                  本工程基于最新的 Next.js 与 Base UI 核心驱动，提供了完整的现代化组件体验。
                </DialogDescription>
              </DialogHeader>
              <div className="py-2 text-sm text-muted-foreground">
                当前运行版本: 1.0.0 (生产就绪)
              </div>
              <DialogFooter>
                <Button variant="outline">已阅关闭</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Section>

      {/* AlertDialog */}
      <Section title="AlertDialog 危险操作警告" description="二次确认防止用户误触的高危警示框">
        <div className="flex flex-wrap gap-3">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="destructive">注销系统账户</Button>} />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>确定要永久注销此账户吗？</AlertDialogTitle>
                <AlertDialogDescription>
                  此操作属于高危不可撤销动作。该账户关联的所有数据资产将在72小时后从数据库中彻底抹除。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>手滑了，取消</AlertDialogCancel>
                <AlertDialogAction>确认注销</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Section>

      {/* Sheet */}
      <Section title="Sheet 侧边抽屉" description="从屏幕上、下、左、右各个方位滑出的滑动面板">
        <div className="flex flex-wrap gap-3">
          {(["left", "right", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger render={<Button variant="outline">从{side === "left" ? "左侧" : side === "right" ? "右侧" : side === "top" ? "顶部" : "底部"}展开</Button>} />
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>{side.toUpperCase()} 面板标题</SheetTitle>
                  <SheetDescription>这里是侧边抽屉的具体内容展示区，支持嵌套任意表单或图表。</SheetDescription>
                </SheetHeader>
                <div className="py-6 text-sm text-muted-foreground">
                  侧边栏正文区域，支持丰富的组件交互与无障碍焦点锁定。
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </Section>

      {/* Drawer */}
      <Section title="Drawer 底部移动抽屉" description="针对手势拖拽优化的高度响应式拉手抽屉">
        <Drawer>
          <DrawerTrigger render={<Button variant="outline">打开移动式拉手抽屉</Button>} />
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>设定今日步行目标</DrawerTitle>
                <DrawerDescription>滑动调整或快捷设定每日健康步数</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0 space-y-4 text-center">
                <p className="text-5xl font-extrabold tracking-tight">10,000</p>
                <p className="text-xs text-muted-foreground">推荐每日步数</p>
              </div>
              <DrawerFooter>
                <Button>开始打卡</Button>
                <DrawerClose render={<Button variant="outline">暂不设定</Button>} />
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </Section>

      {/* Popover */}
      <Section title="Popover 气泡卡片" description="点击锚点触发的浮动参数配置面板">
        <Popover>
          <PopoverTrigger render={<Button variant="outline">配置画板尺寸</Button>} />
          <PopoverContent className="w-80">
            <div className="grid gap-3">
              <div>
                <h4 className="font-semibold text-sm">画布参数设定</h4>
                <p className="text-xs text-muted-foreground mt-0.5">调节所选区域的像素物理尺寸</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-2">
                  <Label htmlFor="p-w" className="text-xs">宽度 (W)</Label>
                  <Input id="p-w" defaultValue="1920px" className="col-span-2 h-7 text-xs" />
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <Label htmlFor="p-h" className="text-xs">高度 (H)</Label>
                  <Input id="p-h" defaultValue="1080px" className="col-span-2 h-7 text-xs" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Section>

      {/* HoverCard */}
      <Section title="HoverCard 鼠标悬停卡片" description="光标掠过即可触发的富媒体预览浮层">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">关注项目创作者：</span>
          <HoverCard>
            <HoverCardTrigger render={<Button variant="link" className="p-0 h-auto font-semibold">@shadcn</Button>} />
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">shadcn</h4>
                  <p className="text-xs text-muted-foreground">
                    打造了风靡全球的 shadcn/ui 生态架构，专注于简洁与极致的代码设计体验。
                  </p>
                  <div className="flex items-center pt-2 text-[11px] text-muted-foreground">
                    <CalendarDays className="mr-1 h-3.5 w-3.5 opacity-70" />
                    <span>入驻社区: 2022年12月</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </Section>

      {/* Tooltip */}
      <Section title="Tooltip 气泡提示" description="微交互辅助信息提示">
        <div className="flex flex-wrap gap-4 items-center">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">悬停查看说明</Button>} />
            <TooltipContent>
              <p>这里是核心业务说明</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="帮助说明"><HelpCircle className="h-4 w-4" /></Button>} />
            <TooltipContent side="top">
              <p>点击查看知识库文档</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Section>

      {/* DropdownMenu */}
      <Section title="DropdownMenu 下拉菜单" description="多动作分类集合与快捷键呼出支持">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline">个人操作菜单 <ChevronDown className="ml-1 h-4 w-4" /></Button>} />
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>用户工作台</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />个人资料中心
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />全局安全配置
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="mr-2 h-4 w-4" />退出登录
              <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      {/* ContextMenu */}
      <Section title="ContextMenu 鼠标右键上下文菜单" description="在指定画板区域内右键呼出对应指令">
        <ContextMenu>
          <ContextMenuTrigger className="flex h-32 w-full max-w-lg items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 text-sm text-muted-foreground bg-muted/10 cursor-context-menu select-none hover:bg-muted/20 transition-colors">
            👉 在此虚线区域内点击【鼠标右键】体验
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuLabel>画板快捷操作</ContextMenuLabel>
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />复制所选元素
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              粘贴到此处
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />删除图层
              <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Section>
    </div>
  );
}
